// app/cancel/page.tsx

"use client";

import { useEffect, useState } from "react";
import "./cancel.css";

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
    <div>
      <section className="hero-section">
        {/* Background image */}
        <div className="hero-background-container">
          <img src="/hero-bg.jpg" alt="hero background" className="hero-background-image" />
          <div className="hero-gradient-overlay" />
        </div>

        {/* Content */}
        <div className="hero-content">
          <div className="grey-container">
            {workspaceId ? (
              <>
                <p>
                  You're cancelling the subscription for workspace: <strong>{workspaceId}</strong>
                </p>

                <button className="cancel-button" onClick={handleCancel} disabled={status === "loading"}>
                  {status === "loading" ? "Cancelling..." : "Confirm Cancel"}
                </button>

                {status === "success" && <p>Subscription cancelled successfully!</p>}
                {status === "error" && <p>Failed to cancel subscription. Please try again.</p>}
              </>
            ) : (
              <p>Loading workspace ID...</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
