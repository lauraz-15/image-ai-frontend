// app/success/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import "./Success.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams?.get("session_id");
  const plan = searchParams?.get("plan"); // Get the plan directly from the URL
  return (
    <>
      <NavBar />
      <section className="hero-section">
        {/* Background image */}
        <div className="hero-background-container">
          <img src="/hero-bg.jpg" alt="hero background" className="hero-background-image" />
          <div className="hero-gradient-overlay" />
        </div>

        {/* Content */}
        <div className="hero-content">
          <h2>Payment Successful</h2>
          {plan && (
            <p>
              You are now subscribed to the <span className="plan-name">{plan} plan</span>.
            </p>
          )}{" "}
          {/* Display the plan */}
        </div>
      </section>
      <Footer />
    </>
  );
}
