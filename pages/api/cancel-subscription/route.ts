import { NextRequest, NextResponse } from "next/server";

// Helper function to call the Node.js backend for cancellation
async function cancelSubscriptionInBackend(workspaceId: string) {
  try {
    // Call your Node.js backend to handle cancellation logic in Firestore
    const response = await fetch(`${process.env.BACKEND_URL}/cancel-subscription`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ workspaceId }),
    });

    if (!response.ok) {
      throw new Error("Failed to cancel subscription in the backend");
    }

    return await response.json(); // e.g., { success: true }
  } catch (error) {
    console.error("Error canceling subscription:", error);
    throw new Error("Error canceling subscription");
  }
}

export async function POST(req: NextRequest) {
  // Get workspaceId from cookies
  const workspaceId = req.cookies.get("slack_team_id")?.value;

  if (!workspaceId) {
    return NextResponse.json({ error: "Workspace ID not found" }, { status: 400 });
  }

  try {
    const result = await cancelSubscriptionInBackend(workspaceId);

    // If cancellation was successful
    if (result.success) {
      return NextResponse.json({ message: "Subscription cancelled successfully" });
    } else {
      return NextResponse.json({ error: "Failed to cancel subscription" }, { status: 500 });
    }
  } catch (error: any) {
    console.error("Error canceling subscription:", error);

    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
