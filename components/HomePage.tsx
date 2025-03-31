// app/page.tsx or wherever your homepage is

import SlackFeatureCard from "./SlackFeaturedCard";

export default function HomePage() {
  return (
    <main className="relative h-screen w-full">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg" alt="hero background" className="object-cover w-full h-full" />
        <div className="absolute inset-0 bg-[#0a0a1b]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 px-8 py-24 max-w-7xl mx-auto">
        {/* Left: Hero Text */}
        <div className="flex-1 text-white">
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            AI-Generated <br /> Images in Slack <br /> with Just a Slash Command
          </h1>
          <p className="text-lg text-white/90 mb-8">
            Transform your ideas into stunning images directly in Slack. Just type <code>/image</code> and watch the magic happen.
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-cyan-400 text-dark px-6 py-3 rounded-md font-semibold hover:bg-cyan-300 transition">
              Add to Slack
            </a>
            <a href="#" className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-dark transition">
              Learn More
            </a>
          </div>
        </div>

        {/* Right: Slack Feature Card */}
        <div className="flex-1 w-full max-w-md">
          <SlackFeatureCard />
        </div>
      </div>
    </main>
  );
}
