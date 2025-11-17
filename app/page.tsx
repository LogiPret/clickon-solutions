import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { InteractiveDashboard } from "@/components/interactive-dashboard";
import { ResultsSection } from "@/components/results-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { DemoSection } from "@/components/demo-section";
import { CalendlySection } from "@/components/calendly-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { FloatingCTA } from "@/components/floating-cta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <InteractiveDashboard />
        <ResultsSection />
        <TestimonialsSection />
        <DemoSection />
        <CalendlySection />
        <FAQSection />
        <Footer />
        <FloatingCTA />
      </main>
    </>
  );
}
