// app/cancel/page.tsx

"use client";

import { useEffect, useState } from "react";

export default function CancelPage() {
  const [workspaceId, setWorkspaceId] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("workspaceId");
    setWorkspaceId(id);
  }, []);

  const handleCancel = async () => {
    if (!workspaceId) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/cancel-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ workspaceId }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Error cancelling subscription:", err);
      setStatus("error");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Cancel Subscription</h1>

      {workspaceId ? (
        <>
          <p>
            You're cancelling the subscription for workspace: <strong>{workspaceId}</strong>
          </p>

          <button
            onClick={handleCancel}
            style={{
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            disabled={status === "loading"}
          >
            {status === "loading" ? "Cancelling..." : "Confirm Cancel"}
          </button>

          {status === "success" && <p style={{ color: "green", marginTop: "1rem" }}>Subscription cancelled successfully!</p>}
          {status === "error" && <p style={{ color: "red", marginTop: "1rem" }}>Failed to cancel subscription. Please try again.</p>}
        </>
      ) : (
        <p>Loading workspace ID...</p>
      )}
    </div>
  );
}
