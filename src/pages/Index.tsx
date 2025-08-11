import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PainPoint from "@/components/PainPoint";
import Partnership from "@/components/Partnership";
import Industries from "@/components/Industries";
import RevenueCalculator from "@/components/RevenueCalculator";
import HowItWorks from "@/components/HowItWorks";
import CompareSection from "@/components/CompareSection";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import About from "@/components/About";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navigation />
      <Hero />
      <About />
      <PainPoint />
      <Partnership />
      {/* <Services /> */}
      <Industries />
      <HowItWorks />
      <RevenueCalculator />
      <CompareSection />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
      
    </div>
  );
};

export default Index;
