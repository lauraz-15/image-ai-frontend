"use client";

import { useState } from "react";

export default function CancelPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleCancel() {
    setStatus("loading");

    try {
      const res = await fetch("/api/cancel-subscription", {
        method: "POST",
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Cancel Subscription</h1>

      {status === "idle" && (
        <button onClick={handleCancel} className="px-6 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition">
          Confirm Cancel
        </button>
      )}

      {status === "loading" && <p>Cancelling...</p>}
      {status === "success" && <p>Your subscription has been canceled.</p>}
      {status === "error" && <p>Something went wrong. Please try again.</p>}
    </div>
  );
}
