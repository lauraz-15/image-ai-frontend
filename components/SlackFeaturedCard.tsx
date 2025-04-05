"use client";

import { Image as LucideImage } from "lucide-react";
import "./SlackFeatureCard.css"; // Import the CSS file

export default function SlackFeatureCard() {
  return (
    <div className="feature-card-container" style={{ animationDelay: "0.2s" }}>
      <div className="feature-card-inner">
        <div className="feature-card-content">
          {/* Logos */}
          <div className="feature-card-logos">
            <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt="Slack Logo" className="slack-logo" />
            <div className="plus-sign">+</div>
            <div className="image-icon-container">
              <LucideImage size={40} className="image-icon" />
            </div>
          </div>

          {/* Text */}
          <div className="feature-card-text">
            <h3 className="feature-card-title">IMAGE AI</h3>
            <p className="feature-card-description">Unleash creativity with AI-generated images directly in Slack</p>
          </div>

          {/* Slash command */}
          <div className="slash-command-container">
            <code className="slash-command">/image a fluffy dog wearing a space helmet</code>
          </div>
        </div>
      </div>
    </div>
  );
}
