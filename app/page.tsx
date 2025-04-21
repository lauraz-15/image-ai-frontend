import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import NavBar from "@/components/NavBar";
import Pricing from "@/components/Pricing";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-867VHRZNV2"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(...args) {
          window.dataLayer.push(args);
        }
        gtag('js', new Date());
        gtag('config', 'G-867VHRZNV2');
      `,
          }}
        />
      </Head>

      <NavBar />
      <HeroSection />
      <Features />
      <HowItWorks />
      <Pricing />
      <Footer />
    </>
  );
}
