// app/oauth/callback/route.ts
import { NextRequest, NextResponse } from "next/server";



export async function GET(req: NextRequest) {
 console.log("strating route function")
  
  const code = req.nextUrl.searchParams.get("code");
  const plan = req.nextUrl.searchParams.get("plan");
  console.log('Plan in callback:', plan); // Check if the plan is correct in the callback
  console.log('Code in callback:', code); // Check if the code is valid


  if (!code) {
    return NextResponse.redirect("/error");
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
      redirect_uri: "https://localhost:3003/oauth/callback",
    }),
  });

  const slackData = await slackRes.json();

  const teamId = slackData.team?.id;
  if (!teamId) {
    return NextResponse.redirect("/error");
  }

  // Store the teamId in a cookie or session (or redirect with it)
  const checkoutUrl = `/checkout?plan=${plan}&team_id=${teamId}`;

  return NextResponse.redirect(checkoutUrl);
}
