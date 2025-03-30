"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white py-4 px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary">
          <span className="text-primary">IMAGE</span> <span className="text-secondary">AI</span>
        </Link>

        {/* Menu items */}
        <div className="hidden space-x-8 md:flex text-gray-700">
          <Link href="#home" className="hover:text-primary">
            Home
          </Link>
          <Link href="#features" className="hover:text-primary">
            Features
          </Link>
          <Link href="#pricing" className="hover:text-primary">
            Pricing
          </Link>
          <Link href="#privacy" className="hover:text-primary">
            Privacy
          </Link>
          <Link href="#terms" className="hover:text-primary">
            Terms
          </Link>
        </div>

        {/* Call to Action */}
        <a href="https://slack.com/oauth/v2/authorize?client_id=YOUR_CLIENT_ID&scope=commands" target="_blank" rel="noopener noreferrer" className="rounded-md bg-primary px-5 py-2 font-semibold text-white shadow hover:bg-primary/90 transition">
          Add to Slack
        </a>
      </div>
    </nav>
  );
}
