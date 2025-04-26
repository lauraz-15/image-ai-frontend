// // app/oauth/callback/route.ts
// import { NextRequest, NextResponse } from "next/server";

// export async function GET(req: NextRequest) {
//   console.log("strating route function");

//   const code = req.nextUrl.searchParams.get("code");

//   const plan = req.nextUrl.searchParams.get("state");

//   console.log("Plan in callback:", plan); // Check if the plan is correct in the callback
//   console.log("Code in callback:", code); // Check if the code is valid

//   if (!code) {
//     return NextResponse.redirect("https://www.imageai-slack.com/error"); // Absolute URL
//   }

//   const slackRes = await fetch("https://slack.com/api/oauth.v2.access", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//     body: new URLSearchParams({
//       code,
//       client_id: process.env.SLACK_CLIENT_ID!,
//       client_secret: process.env.SLACK_CLIENT_SECRET!,
//       redirect_uri: "https://www.imageai-slack.com/oauth/callback",
//     }),
//   });

//   const slackData = await slackRes.json();
//   const teamId = slackData.team?.id;

//   if (state === "cancel") {
//     return NextResponse.redirect("/cancel");
//   } else if (state === "pro" || state === "unlimited") {
//     return NextResponse.redirect(`/checkout?plan=${state}`);
//   }

//   if (!teamId || !plan) {
//     return NextResponse.redirect("https://www.imageai-slack.com/error");
//   }

//   // Call your own API to create a Stripe checkout session
//   const checkoutRes = await fetch("https://www.imageai-slack.com/api/checkout-sessions", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ plan, workspaceId: teamId }),
//   });

//   const checkoutData = await checkoutRes.json();

//   if (!checkoutData.url) {
//     return NextResponse.redirect("https://www.imageai-slack.com/error");
//   }

//   return NextResponse.redirect(checkoutData.url);
// }
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log("Starting OAuth callback route");

  const code = req.nextUrl.searchParams.get("code");
  const state = req.nextUrl.searchParams.get("state"); // ← renamed correctly here

  console.log("State (plan or cancel) in callback:", state);
  console.log("Code in callback:", code);

  if (!code) {
    return NextResponse.redirect("https://www.imageai-slack.com/error");
  }

  const slackRes = await fetch("https://slack.com/api/oauth.v2.access", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      code,
      client_id: process.env.SLACK_CLIENT_ID!,
      client_secret: process.env.SLACK_CLIENT_SECRET!,
      redirect_uri: "https://www.imageai-slack.com/oauth/callback",
    }),
  });

  const slackData = await slackRes.json();
  const teamId = slackData.team?.id;

  if (!teamId || !state) {
    return NextResponse.redirect("https://www.imageai-slack.com/error");
  }

  // Set the workspace ID cookie
  const response = NextResponse.redirect("/"); // Temporary, will change below
  response.cookies.set("slack_team_id", teamId, { path: "/", httpOnly: false });

  if (state === "cancel") {
    response.headers.set("Location", "/cancel");
    return response;
  } else if (state === "pro" || state === "unlimited") {
    // Continue to create checkout session
    const checkoutRes = await fetch("https://www.imageai-slack.com/api/checkout-sessions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ plan: state, workspaceId: teamId }),
    });

    const checkoutData = await checkoutRes.json();

    if (!checkoutData.url) {
      return NextResponse.redirect("https://www.imageai-slack.com/error");
    }

    response.headers.set("Location", checkoutData.url);
    return response;
  }

  // If state is something unknown
  return NextResponse.redirect("https://www.imageai-slack.com/error");
}
