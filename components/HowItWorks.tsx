// HowItWorks.tsx

"use client";

import "./HowItWorks.css";

export default function HowItWorks() {
  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">
        <div className="how-it-works-header">
          <h2 className="how-it-works-title">How It Works</h2>
          <p className="how-it-works-description">IMAGE AI is designed to be seamless and intuitive, integrating naturally into your Slack workflow.</p>
        </div>

        <div className="how-it-works-grid">
          <div className="how-it-works-step" style={{ animationDelay: "0.1s" }}>
            <div className="step-number">1</div>
            <h3 className="step-title">Install the App</h3>
            <p className="step-text">Add IMAGE AI to your Slack workspace with just one click. No complicated setup required.</p>
          </div>

          <div className="how-it-works-step" style={{ animationDelay: "0.2s" }}>
            <div className="step-number">2</div>
            <h3 className="step-title">Type Your Command</h3>
            <p className="step-text">
              Use the <code>/image</code> command followed by your description in any Slack channel or DM.
            </p>
          </div>

          <div className="how-it-works-step" style={{ animationDelay: "0.3s" }}>
            <div className="step-number">3</div>
            <h3 className="step-title">Get Your Image</h3>
            <p className="step-text">Receive your AI-generated image instantly, directly in the Slack conversation.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
