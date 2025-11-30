import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import QueEsSection from "@/components/landing/QueEsSection";
import ComoFuncionaSection from "@/components/landing/ComoFuncionaSection";
import ParaQuienSection from "@/components/landing/ParaQuienSection";
import SimuladorPreviewSection from "@/components/landing/SimuladorPreviewSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <QueEsSection />
      <ComoFuncionaSection />
      <ParaQuienSection />
      <SimuladorPreviewSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Landing;
