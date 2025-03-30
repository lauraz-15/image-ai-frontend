"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const [workspaceId, setWorkspaceId] = useState<string | null>(null);

  useEffect(() => {
    const idFromUrl = searchParams.get("workspaceId");
    setWorkspaceId(idFromUrl);
  }, [searchParams]);

  const handleCheckout = async (plan: string) => {
    if (!workspaceId) {
      alert("Missing Slack Workspace ID");
      return;
    }

    const res = await fetch("/api/checkout-sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ plan, workspaceId }),
    });

    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert(data.error || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Upgrade your workspace</h1>
        <div className="space-y-4">
          <button onClick={() => handleCheckout("pro")} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-all">
            Upgrade to Pro
          </button>
          <button onClick={() => handleCheckout("unlimited")} className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-xl transition-all">
            Upgrade to Unlimited
          </button>
        </div>
      </div>
    </div>
  );
}
