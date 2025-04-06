// app/success/page.tsx
"use client";

import { useSearchParams } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams?.get("session_id");

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md w-full">
        <h1 className="text-2xl font-bold text-green-700 mb-4">🎉 Payment Successful!</h1>
        <p className="text-gray-700 mb-6">Thanks for upgrading your workspace.</p>
        <p className="text-sm text-gray-500">
          Session ID: <code className="bg-gray-100 p-1 rounded">{sessionId}</code>
        </p>
      </div>
    </div>
  );
}
