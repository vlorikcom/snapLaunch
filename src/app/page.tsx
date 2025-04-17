import { Metadata } from "next";
import CTA from "@/components/home/Cta";
import FAQ from "@/components/home/Faq";
import FeaturedTime from "@/components/home/FeaturedTime";
import Footer from "@/app/(site)/Footer";
import HeroSection from "@/components/home/Hero";
import MakerIntro from "@/components/home/MakerIntro";
import Navbar from "@/app/(site)/Navbar";
import PricingSection from "@/components/home/pricing";
import TestimonialsPage from "@/components/home/Testimonials";

// required by Nextra
export const metadata: Metadata = {
  title: "snapLaunch",
};

export default function Home() {
  return (
    <div className="bg-[#212121]">
      <Navbar />
      <HeroSection />
      <FeaturedTime />
      <MakerIntro />
      <PricingSection />
      <FAQ />
      <TestimonialsPage />
      <CTA />
      <Footer />
    </div>
  );
}
