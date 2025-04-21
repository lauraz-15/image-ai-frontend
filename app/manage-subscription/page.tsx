// app/success/page.tsx
"use client";

import "./ManageSub.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [subscription, setSubscription] = useState(null);

  useEffect(() => {
    // Fetch user subscription data from your backend
    const fetchSubscription = async () => {
      try {
        const res = await fetch("/api/get-subscription"); // Adjust to your API
        const data = await res.json();
        setSubscription(data);
      } catch (error) {
        console.error("Error fetching subscription data", error);
      }
    };
    fetchSubscription();
  }, []);

  const cancelSubscription = async () => {
    // Call backend to handle subscription cancellation
    try {
      const res = await fetch("/api/cancel-subscription", {
        method: "POST",
      });
      if (res.ok) {
        alert("Your subscription has been cancelled.");
      }
    } catch (error) {
      console.error("Error canceling subscription", error);
    }
  };

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
          <div>
            <h1>Manage Your Subscription</h1>
            {subscription ? (
              <div>
                <p>Current Plan: {subscription}</p>
                <button onClick={cancelSubscription}>Cancel Subscription</button>
              </div>
            ) : (
              <p>Loading subscription data...</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
