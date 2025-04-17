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
          <h2>The app has been installed successfully!</h2>

          <p>
            Go to any Slack channel where you installed the app, and type <code className="slash-command">/image</code> to start creating!
          </p>
          <p>
            Example: <code className="slash-command">/image dogs baking a cake in the kitchen</code> and press <strong>Enter</strong>.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
}
