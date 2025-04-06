"use client";

import Link from "next/link";
import { useState } from "react"; // Import useState
import "./NavBar.css";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo">
          <span className="logo-primary">IMAGE</span> <span className="logo-secondary">AI</span>
        </Link>

        {/* Burger Menu Button (Mobile) */}
        <div className="burger-menu" onClick={toggleMenu}>
          <div className={`burger-line ${isMenuOpen ? "hide" : ""}`}></div>
          <div className={`burger-line ${isMenuOpen ? "hide" : ""}`}></div>
          <div className={`burger-line ${isMenuOpen ? "hide" : ""}`}></div>
          <div className={`close-btn ${isMenuOpen ? "show" : "hide"}`}>
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#5627db">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M5 5L19 19M5 19L19 5" stroke="#5627db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>{" "}
              </g>
            </svg>
          </div>
        </div>

        {/* Menu items */}
        <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <Link href="/#home" className="menu-item">
            Home
          </Link>
          <Link href="/#features" className="menu-item">
            Features
          </Link>
          <Link href="/#pricing" className="menu-item">
            Pricing
          </Link>
          <Link href="/privacy" className="menu-item">
            Privacy
          </Link>
          <Link href="/terms" className="menu-item">
            Terms
          </Link>

          {/* Call to Action */}
          <a href="https://slack.com/oauth/v2/authorize?client_id=YOUR_CLIENT_ID&scope=commands" target="_blank" rel="noopener noreferrer" className="navbar-cta">
            Add to Slack
          </a>
        </div>
      </div>
    </nav>
  );
}
