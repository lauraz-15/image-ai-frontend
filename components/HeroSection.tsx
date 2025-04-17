// app/page.tsx or wherever your homepage is

import SlackFeatureCard from "./SlackFeaturedCard";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      {/* Background image */}
      <div className="hero-background-container">
        <img src="/hero-bg.jpg" alt="hero background" className="hero-background-image" />
        <div className="hero-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="hero-content">
        {/* Left: Hero Text */}
        <div className="hero-text-container">
          <h1 className="hero-title">
            AI-Generated <br /> Images in Slack <br /> with Just a Slash Command
          </h1>
          <p className="hero-description">
            Transform your ideas into stunning images directly in Slack. Just type <code>/image</code> and watch the magic happen.
          </p>
          <div className="hero-buttons">
            <a href="https://slack.com/oauth/v2/authorize?client_id=8389664538785.8381861548514&scope=chat:write,chat:write.customize,chat:write.public,commands,files:write,im:write,incoming-webhook,users:read" className="add-to-slack-button">
              Add to Slack
            </a>
            <a href="#features" className="learn-more-button">
              Learn More
            </a>
          </div>
        </div>

        {/* Right: Slack Feature Card */}
        <div className="slack-feature-card-container">
          <SlackFeatureCard />
        </div>
      </div>
    </section>
  );
}
