import { Suspense } from "react";
import CancelPage from "./CancelPage";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <NavBar />
      <CancelPage />
      <Footer />
    </Suspense>
  );
}
