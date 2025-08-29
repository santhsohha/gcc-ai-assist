import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useGoogleAnalytics } from "@/hooks/useGoogleAnalytics";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Manufacturing from "./pages/industries/Manufacturing";
import Healthcare from "./pages/industries/Healthcare";
import Logistics from "./pages/industries/Logistics";

import CustomAIAgents from "./pages/services/CustomAIAgents";
import WhatsAppAutomation from "./pages/services/WhatsAppAutomation";
import GCCLocalization from "./pages/services/GCCLocalization";
import ProcessOptimization from "./pages/services/ProcessOptimization";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Support from "./pages/Support";

const queryClient = new QueryClient();

const AppWithGA = () => {
  useGoogleAnalytics(); // This will track all page views
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/industries/manufacturing" element={<Manufacturing />} />
      <Route path="/industries/healthcare" element={<Healthcare />} />
      <Route path="/industries/logistics" element={<Logistics />} />
      
      <Route path="/services/customaiagents" element={<CustomAIAgents />} />
      <Route path="/services/whatsappautomation" element={<WhatsAppAutomation />} />
      <Route path="/services/gcclocalization" element={<GCCLocalization />} />
      <Route path="/services/processoptimization" element={<ProcessOptimization />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/support" element={<Support />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppWithGA />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
