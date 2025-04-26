// app/api/get-subscription/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const workspaceId = req.cookies.get("slack_team_id")?.value;
    if (!workspaceId) {
      const redirectUri = `https://www.imageai-slack.com/oauth/callback`;
      const slackOAuthUrl = `https://slack.com/oauth/v2/authorize?client_id=${process.env.SLACK_CLIENT_ID}&scope=commands,users:read&redirect_uri=${redirectUri}&state=manage-subscription`;
      return NextResponse.redirect(slackOAuthUrl);
    }

    const res = await fetch(`https://image-ai-backend-swgl.onrender.com/get-subscription`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ workspaceId }),
    });

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch subscription" }, { status: 500 });
  }
}
