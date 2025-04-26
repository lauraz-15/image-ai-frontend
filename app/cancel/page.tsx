"use client";

import { useSearchParams } from "next/navigation";

export default function CancelPage() {
  const searchParams = useSearchParams();
  const workspaceId = searchParams?.get("workspaceId");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Cancel Subscription</h1>
      {workspaceId ? (
        <p>
          You're cancelling the subscription for workspace: <strong>{workspaceId}</strong>
        </p>
      ) : (
        <p>No workspace ID found.</p>
      )}

      {/* You could show a "Confirm Cancel" button here and POST to your cancel API */}
    </div>
  );
}
