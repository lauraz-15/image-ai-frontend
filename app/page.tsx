import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import NavBar from "@/components/NavBar";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />
    </>
  );
}
