import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import InnovationCTASection from "@/components/InnovationCTASection";
import PartnershipSection from "@/components/PartnershipSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PartnershipSection />
      <InnovationCTASection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
