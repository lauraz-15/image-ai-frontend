import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log("User landed on start cancel");

  const workspaceId = req.cookies.get("slack_team_id")?.value;
  console.log("WorkspaceId:", workspaceId);

  if (!workspaceId) {
    const redirectUri = `https://www.imageai-slack.com/oauth/callback`;
    const slackOAuthUrl = `https://slack.com/oauth/v2/authorize?client_id=${process.env.SLACK_CLIENT_ID}&scope=commands,users:read&redirect_uri=${redirectUri}&state=cancel`;

    console.log("No workspace id found, redirecting to Slack OAuth:", slackOAuthUrl);
    return NextResponse.redirect(slackOAuthUrl);
  }

  console.log("Workspace id found, redirecting to /cancel");
  return NextResponse.redirect(`/cancel`);
}
