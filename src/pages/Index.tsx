import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import PainPoint from "@/components/PainPoint";
import Partnership from "@/components/Partnership";
import ProblemSolution from "@/components/ProblemSolution";
import Services from "@/components/Services";
import RevenueCalculator from "@/components/RevenueCalculator";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <ExitIntentPopup />
      <Navigation />
      <Hero />
      <PainPoint />
      <Partnership />
      <Services />
      <ProblemSolution />
      <HowItWorks />
      <RevenueCalculator />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
