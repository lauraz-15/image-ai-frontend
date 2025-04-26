import { Suspense } from "react";
import CancelPage from "./CancelPage";

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <CancelPage />
    </Suspense>
  );
}
