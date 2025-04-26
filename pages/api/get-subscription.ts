// app/api/get-subscription/route.ts
import { NextRequest, NextResponse } from "next/server";

export default async function handler(req: NextRequest) {
  try {
    const workspaceId = req.cookies.get("slack_team_id");
    if (!workspaceId) {
      const redirectUri = `https://www.imageai-slack.com/oauth/callback`;
      const slackOAuthUrl = `https://slack.com/oauth/v2/authorize?client_id=8389664538785.8381861548514&scope=commands,users:read&redirect_uri=${redirectUri}&state=manage-subscription`;
      console.log("no workspace id, redirecting to slack auth:", slackOAuthUrl);
      return NextResponse.redirect(slackOAuthUrl);
    }

    const res = await fetch(`https://image-ai-backend-swgl.onrender.com/get-subscription`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ workspaceId }),
    });

    const textResponse = await res.text(); // Get raw text to inspect it
    console.log("Raw Response:", textResponse); // Log the raw response for debugging

    let data;
    try {
      data = JSON.parse(textResponse); // Try parsing the response as JSON
    } catch (error) {
      console.error("Error parsing response as JSON:", error);
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch subscription" }, { status: 500 });
  }
}
