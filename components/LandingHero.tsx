export default function LandingHero() {
  return (
    <section className="relative bg-[url('/images/hero-bg.jpg')] bg-cover bg-center text-white py-24 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Headline and CTA */}
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            AI-Generated <br /> Images in Slack <br /> with Just a <span className="text-secondary">Slash Command</span>
          </h1>
          <p className="text-lg text-white/90 mb-8">
            Transform your ideas into stunning images directly in Slack. Just type <code className="text-white">/image</code> and watch the magic happen.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="https://slack.com/oauth/v2/authorize?client_id=YOUR_CLIENT_ID&scope=commands" className="bg-secondary text-dark px-6 py-3 rounded-md font-medium hover:bg-secondary/80 transition">
              Add to Slack
            </a>
            <a href="#features" className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-dark transition">
              Learn More
            </a>
          </div>
        </div>

        {/* Right: Slack + App preview */}
        <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10 shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <img src="/images/slack-logo.svg" alt="Slack" className="w-10 h-10" />
            <span className="text-3xl font-bold">+</span>
            <img src="/images/app-icon.svg" alt="App" className="w-10 h-10" />
          </div>
          <h2 className="text-xl font-bold mb-2">IMAGE AI</h2>
          <p className="text-white/90 mb-4 text-sm">Unleash creativity with AI-generated images directly in Slack</p>
          <div className="bg-black/30 text-teal-300 p-4 rounded-md font-mono text-sm whitespace-pre-line">/image a fluffy corgi wearing a space helmet</div>
        </div>
      </div>
    </section>
  );
}
