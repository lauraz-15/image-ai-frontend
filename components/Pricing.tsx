// Pricing.tsx

"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import "./Pricing.css";

export default function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">Simple, Transparent Pricing</h2>
          <p className="pricing-description">Select the plan that aligns with your team's needs. Every plan unlocks the full power of IMAGE AI for your entire workspace, meaning everyone benefits at a single, workspace-based price.</p>
        </div>

        <div className="pricing-grid">
          {/* Free Plan */}
          <div className="pricing-card" style={{ animationDelay: "0.1s" }}>
            <h3 className="plan-title">Free</h3>
            <p className="plan-description">Perfect for small teams and casual use</p>
            <div className="price-container">
              <span className="price">£0</span>
              <span className="price-period">/mo</span>
            </div>
            <ul className="plan-features">
              <li className="feature-item">
                <Check className="feature-icon" />
                <span className="feature-text">10 images per day</span>
              </li>
            </ul>
            <a href="https://slack.com/oauth/v2/authorize?client_id=YOUR_SLACK_CLIENT_ID&scope=commands" className="plan-button" rel="noopener noreferrer">
              Add to Slack
            </a>
          </div>

          {/* Pro Plan */}
          <div className="pricing-card popular" style={{ animationDelay: "0.2s" }}>
            <div className="popular-badge">POPULAR</div>
            <h3 className="plan-title">Pro</h3>
            <p className="plan-description">Ideal for active teams that need more capacity</p>
            <div className="price-container">
              <span className="price">£9</span>
              <span className="price-period">/mo</span>
            </div>
            <ul className="plan-features">
              <li className="feature-item">
                <Check className="feature-icon" />
                <span className="feature-text">100 images per day</span>
              </li>
            </ul>
            <Link href="/start-checkout?plan=pro" className="plan-button">
              Subscribe Now
            </Link>
          </div>

          {/* Unlimited Plan */}
          <div className="pricing-card" style={{ animationDelay: "0.3s" }}>
            <h3 className="plan-title">Unlimited</h3>
            <p className="plan-description">For power users who need unlimited generation</p>
            <div className="price-container">
              <span className="price">£49</span>
              <span className="price-period">/mo</span>
            </div>
            <ul className="plan-features">
              <li className="feature-item">
                <Check className="feature-icon" />
                <span className="feature-text">Unlimited images</span>
              </li>
            </ul>
            <Link href="/start-checkout?plan=unlimited" className="plan-button">
              Subscribe Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
