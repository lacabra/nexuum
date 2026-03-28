import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import FrameworkSection from "@/components/landing/FrameworkSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import MetricsSection from "@/components/landing/MetricsSection";
import AudienceSection from "@/components/landing/AudienceSection";
import ProductSection from "@/components/landing/ProductSection";
import ClosingSection from "@/components/landing/ClosingSection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FrameworkSection />
      <HowItWorksSection />
      <MetricsSection />
      <AudienceSection />
      <ProductSection />
      <ClosingSection />
    </main>
    <Footer />
  </>
);

export default Index;
