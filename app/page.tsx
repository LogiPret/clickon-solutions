import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { InteractiveDashboard } from "@/components/interactive-dashboard";
import { ResultsSection } from "@/components/results-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ExclusiveSection } from "@/components/exclusive-section";
import { ClubPrivilegeSection } from "@/components/club-privilege-section";
import { DemoSection } from "@/components/demo-section";
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
        <ResultsSection />
        <InteractiveDashboard />
        <ExclusiveSection />
        <TestimonialsSection />
        <ClubPrivilegeSection />
        <DemoSection />
        <FAQSection />
        <Footer />
        <FloatingCTA />
      </main>
    </>
  );
}
