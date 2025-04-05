// app/page.tsx or wherever your homepage is

import SlackFeatureCard from "./SlackFeaturedCard";

export default function HomePage() {
  return (
    <main className="hero-gradient relative h-screen w-full text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg" alt="hero background" className="object-cover w-full h-full" />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col [600px]:flex-row justify-between items-center gap-12 px-12 py-24 max-w-7xl mx-auto">
        {/* Left: Hero Text */}
        <div className="flex-1 text-white">
          <h1 className=" text-5xl lg:text-[3.75rem] lg:leading-[1] font-extrabold leading-tight mb-6">
            AI-Generated <br /> Images in Slack <br /> with Just a Slash Command
          </h1>
          <p className="text-lg md:text-2xl text-white mb-8">
            Transform your ideas into stunning images directly in Slack. Just type <code>/image</code> and watch the magic happen.
          </p>
          <div className="flex gap-4">
            <a href="#" className="bg-secondary text-dark px-6 py-3 rounded-md font-semibold  transition">
              Add to Slack
            </a>
            <a href="#" className="border border-white px-6 py-3 rounded-md font-semibold transition">
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
