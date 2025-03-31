"use client";

import { Image as LucideImage } from "lucide-react";

export default function SlackFeatureCard() {
  return (
    <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
      <div className="bg-gray-900/70 backdrop-blur-md p-8 rounded-xl shadow-lg border border-purple-500/30">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Logos */}
          <div className="flex items-center justify-center space-x-8">
            <img src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" alt="Slack Logo" className="h-16 w-auto" />
            <div className="text-purple-500 text-4xl font-bold">+</div>
            <div className="bg-purple-500 p-3 rounded-xl">
              <LucideImage size={40} className="text-white" />
            </div>
          </div>

          {/* Text */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2 text-white">IMAGE AI</h3>
            <p className="text-gray-300">Unleash creativity with AI-generated images directly in Slack</p>
          </div>

          {/* Slash command */}
          <div className="bg-gray-800/90 rounded-lg p-3 w-full text-center border border-purple-500/20">
            <code className="text-cyan-400">/image a fluffy corgi wearing a space helmet</code>
          </div>
        </div>
      </div>
    </div>
  );
}
