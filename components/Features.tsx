// Features.tsx

"use client";

import { MessageSquare, Zap, Lock } from "lucide-react";
import "./Features.css";

export default function Features() {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Supercharge Your Slack with AI Imagery</h2>
          <p className="features-description">Bring your conversations to life with instant AI-generated images that perfectly match your descriptions.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card" style={{ animationDelay: "0.1s" }}>
            <div className="feature-icon-bg">
              <MessageSquare className="feature-icon" />
            </div>
            <h3 className="feature-card-title">Simple Slash Command</h3>
            <p className="feature-card-text">
              Just type <code>/image</code> followed by your description, and IMAGE AI will generate a matching visual in seconds.
            </p>
          </div>

          <div className="feature-card" style={{ animationDelay: "0.2s" }}>
            <div className="feature-icon-bg">
              <Zap className="feature-icon" />
            </div>
            <h3 className="feature-card-title">Lightning Fast</h3>
            <p className="feature-card-text">Our advanced AI models deliver high-quality images in seconds, keeping your conversations flowing smoothly.</p>
          </div>

          <div className="feature-card" style={{ animationDelay: "0.3s" }}>
            <div className="feature-icon-bg">
              <Lock className="feature-icon" />
            </div>
            <h3 className="feature-card-title">Privacy Focused</h3>
            <p className="feature-card-text">Your prompts and generated images are never stored or used for training. What happens in your Slack, stays in your Slack.</p>
          </div>
        </div>

        <div className="features-cta">
          <a href="https://slack.com/oauth/v2/authorize?client_id=YOUR_SLACK_CLIENT_ID&scope=commands" className="features-cta-button" rel="noopener noreferrer">
            Add to Slack
          </a>
        </div>
      </div>
    </section>
  );
}
