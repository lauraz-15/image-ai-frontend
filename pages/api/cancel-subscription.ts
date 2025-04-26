// pages/api/cancel-subscription.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const { workspaceId } = req.body;

    if (!workspaceId) {
      return res.status(400).json({ error: "Missing workspaceId in request body" });
    }

    // Assuming you call your backend server to cancel the subscription
    const response = await fetch(`https://image-ai-backend-swgl.onrender.com/cancel-subscription`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ workspaceId }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.error || "Failed to cancel subscription" });
    }

    return res.status(200).json(data);
  } catch (error: any) {
    console.error("Error in cancel-subscription API:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
