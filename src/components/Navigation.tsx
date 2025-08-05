import { Button } from "@/components/ui/button";
import TranslationButton from "./TranslationButton";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">N</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Nunar
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="#calculator" className="text-foreground hover:text-primary transition-colors">
            Calculator
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-foreground hover:text-primary transition-colors">
            FAQ
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-muted-foreground">🇦🇪 Based in UAE • Serving GCC</span>
          <TranslationButton />
          <Button size="sm" className="bg-gradient-primary hover:shadow-glow">
            Start Free Trial
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;