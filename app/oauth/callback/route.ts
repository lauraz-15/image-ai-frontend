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
  const response = NextResponse.redirect(new URL("/", req.url)); // Temporary, will change below
  response.cookies.set("slack_team_id", teamId, { path: "/", httpOnly: true });

  if (state === "cancel") {
    response.headers.set("Location", `https://www.imageai-slack.com/cancel?workspaceId=${teamId}`);
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
