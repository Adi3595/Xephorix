import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";
import BentoFeatureGrid from "@/components/sections/BentoFeatureGrid";
import PlatformShowcase from "@/components/sections/PlatformShowcase";
import PricingMatrix from "@/components/sections/PricingMatrix";
import PerformanceMetrics from "@/components/sections/PerformanceMetrics";
import Testimonials from "@/components/sections/Testimonials";
import FAQAccordion from "@/components/sections/FAQAccordion";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/Footer";

import ProjectInfo from "@/components/sections/ProjectInfo";
import SecurityCompliance from "@/components/sections/SecurityCompliance";
import UseCases from "@/components/sections/UseCases";
import ReviewsGrid from "@/components/sections/ReviewsGrid";
import Architecture from "@/components/sections/Architecture";
import Integrations from "@/components/sections/Integrations";
import AboutUs from "@/components/sections/AboutUs";
import CareersSection from "@/components/sections/CareersSection";
import ContactUs from "@/components/sections/ContactUs";

export default function Home() {
  return (
    <main className="bg-oceanic-noir min-h-screen relative">
      <Navbar />
      <Hero />
      <TrustedBy />
      <ProjectInfo />
      <AboutUs />
      <BentoFeatureGrid />
      <SecurityCompliance />
      <PlatformShowcase />
      <Architecture />
      <UseCases />
      <Integrations />
      <PricingMatrix />
      <CareersSection />
      <PerformanceMetrics />
      <Testimonials />
      <ReviewsGrid />
      <ContactUs />
      <FAQAccordion />
      <FinalCTA />
      <Footer />
    </main>
  );
}
