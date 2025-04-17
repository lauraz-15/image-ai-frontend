"use client";

import Link from "next/link";
import { useState, useEffect } from "react"; // Import useState and useEffect
import "./NavBar.css";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // State for scroll

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          <span className="logo-primary">IMAGE</span> <span className="logo-secondary">AI</span>
        </Link>

        <div className="burger-menu" onClick={toggleMenu}>
          <div className={`burger-line ${isMenuOpen ? "hide" : ""}`}></div>
          <div className={`burger-line ${isMenuOpen ? "hide" : ""}`}></div>
          <div className={`burger-line ${isMenuOpen ? "hide" : ""}`}></div>
          <div className={`close-btn ${isMenuOpen ? "show" : "hide"}`}>
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#5627db">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M5 5L19 19M5 19L19 5" stroke="#5627db" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
              </g>
            </svg>
          </div>
        </div>

        <div className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
          <Link href="/#home" className="menu-item" onClick={closeMenu}>
            Home
          </Link>
          <Link href="/#features" className="menu-item" onClick={closeMenu}>
            Features
          </Link>
          <Link href="/#pricing" className="menu-item" onClick={closeMenu}>
            Pricing
          </Link>
          <Link href="/privacy" className="menu-item" onClick={closeMenu}>
            Privacy
          </Link>
          <Link href="/terms" className="menu-item" onClick={closeMenu}>
            Terms
          </Link>

          <a href="https://slack.com/oauth/v2/authorize?client_id=8389664538785.8381861548514&scope=chat:write,chat:write.customize,chat:write.public,commands,files:write,im:write,incoming-webhook,users:read" target="_blank" rel="noopener noreferrer" className="navbar-cta">
            Add to Slack
          </a>
        </div>
      </div>
    </nav>
  );
}
