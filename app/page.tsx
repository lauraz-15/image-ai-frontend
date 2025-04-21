import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import NavBar from "@/components/NavBar";
import Pricing from "@/components/Pricing";
import Script from "next/script";

export default function Home() {
  return (
    <>
      {/* Google Analytics Scripts */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-867VHRZNV2" strategy="afterInteractive" />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-867VHRZNV2');
          `,
        }}
      />

      <NavBar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />
    </>
  );
}
