"use client";

import "./ManageSub.css";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [subscription, setSubscription] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // State to track loading

  useEffect(() => {
    // Fetch user subscription data from your backend
    const fetchSubscription = async () => {
      try {
        const res = await fetch("/api/get-subscription"); // Your API
        const data = await res.json();
        console.log("Subscription Data: ", data); // Log to inspect the data structure
        if (data && data.plan) {
          setSubscription(data.plan); // Assuming it returns { plan: "pro" } or similar
        } else {
          setSubscription(null);
        }
      } catch (error) {
        console.error("Error fetching subscription data", error);
      } finally {
        setLoading(false); // Set loading to false when request is done
      }
    };
    fetchSubscription();
  }, []);

  const cancelSubscription = async () => {
    // Read workspaceId from cookies
    const cookies = document.cookie.split(";").reduce((acc: any, cookie) => {
      const [key, value] = cookie.trim().split("=");
      acc[key] = value;
      return acc;
    }, {});

    const workspaceId = cookies["slack_team_id"];

    if (!workspaceId) {
      // No workspace ID → redirect user to Slack OAuth
      console.log("no workspace id, redirecting to oauth");
      const redirectUri = `https://www.imageai-slack.com/oauth/callback`;
      const slackOAuthUrl = `https://slack.com/oauth/v2/authorize?client_id=${process.env.SLACK_CLIENT_ID}&scope=commands,users:read&redirect_uri=${redirectUri}&state=cancel`;
      window.location.href = slackOAuthUrl;
      return;
    }

    try {
      const res = await fetch("/api/cancel-subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ workspaceId }), // Pass workspaceId!
      });

      if (res.ok) {
        alert("Your subscription has been cancelled.");
        setSubscription(null); // Update frontend
      } else {
        console.error("Failed to cancel subscription");
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
            <h1>Manage Your Subscription:</h1>
            {loading ? (
              <p>Loading subscription information...</p>
            ) : (
              <>
                {subscription ? (
                  <div>
                    <p>Current Plan: {subscription}</p>
                    <button onClick={cancelSubscription}>Cancel Subscription</button>
                  </div>
                ) : (
                  <button onClick={cancelSubscription}>Cancel Subscription</button>
                )}
              </>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
