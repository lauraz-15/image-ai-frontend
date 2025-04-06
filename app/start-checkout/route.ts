// app/start-checkout/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    console.log("user landed start checkout")
  const plan = req.nextUrl.searchParams.get("plan");
  console.log('Plan:', plan); // Debugging line to ensure the plan is correct

  // Ideally you'd check cookies or session here
  const workspaceId = req.cookies.get("slack_team_id")?.value;
  console.log("workspaceId:", workspaceId)
  if (!workspaceId) {
    const redirectUri = `https://localhost:3003/oauth/callback?plan=${plan}`;
    const slackOAuthUrl = `https://slack.com/oauth/v2/authorize?client_id=${process.env.SLACK_CLIENT_ID}&scope=commands,users:read&redirect_uri=${redirectUri}`;
    
    console.log("no workspace id, attempting to redirect to :", slackOAuthUrl);
    return NextResponse.redirect(slackOAuthUrl);
  }
  
  console.log("found workspace id redirecting to:",`/checkout?plan=${plan}` )
  return NextResponse.redirect(`/checkout?plan=${plan}`);
}
