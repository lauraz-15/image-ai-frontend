import Features from "@/components/Features";
import HomePage from "@/components/HomePage";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomePage />
      <Features />

      <main className="px-6 py-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Image AI 👋</h1>
        <p className="text-lg text-gray-600">Generate images in Slack using the power of AI.</p>
      </main>
    </>
  );
}
