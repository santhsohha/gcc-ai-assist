import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 bg-gradient-secondary min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200">
              🚀 Save 80+ Hours Monthly with AI Agents
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Run Lean.
                </span>
                <br />
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Scale Smart.
                </span>
                <br />
                <span className="text-accent">
                  The AI Way.
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Custom AI agents that automate your manual workflows. Built for GCC businesses with Arabic/English support and WhatsApp integration.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-6"
              >
                Start Free Trial - Automate 2 Processes
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
              >
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>30+ Workflows Built</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>2-4 Week Deployment</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>100% Localized</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Industries We Serve:</h3>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                <Link to="/industries/manufacturing" className="flex items-center space-x-2 text-sm bg-accent/50 rounded-lg p-3 hover:bg-accent/70 transition-colors">
                  <span>🏭</span>
                  <span>Manufacturing</span>
                </Link>
                <Link to="/industries/healthcare" className="flex items-center space-x-2 text-sm bg-accent/50 rounded-lg p-3 hover:bg-accent/70 transition-colors">
                  <span>🏥</span>
                  <span>Healthcare</span>
                </Link>
                <Link to="/industries/logistics" className="flex items-center space-x-2 text-sm bg-accent/50 rounded-lg p-3 hover:bg-accent/70 transition-colors">
                  <span>🚛</span>
                  <span>Logistics</span>
                </Link>
                <Link to="/industries/retail" className="flex items-center space-x-2 text-sm bg-accent/50 rounded-lg p-3 hover:bg-accent/70 transition-colors">
                  <span>🛍️</span>
                  <span>Retail & Hypermarkets</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl blur-3xl"></div>
            <img 
              src={heroImage} 
              alt="AI Workflow Automation for GCC Businesses" 
              className="relative rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;