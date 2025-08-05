import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Bot, Zap, Globe, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const CustomAIAgents = () => {
  const features = [
    {
      icon: <Bot className="h-8 w-8" />,
      title: "24/7 AI Workforce",
      description: "Custom AI agents that work around the clock, handling complex tasks with human-like intelligence.",
      benefits: ["Never takes breaks", "Consistent performance", "Scales instantly"]
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Arabic/English Bilingual",
      description: "Native Arabic language processing with cultural context understanding for GCC markets.",
      benefits: ["Cultural sensitivity", "Regional dialect support", "Business etiquette compliance"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "WhatsApp Integration",
      description: "Seamless integration with WhatsApp Business API for MENA market communication preferences.",
      benefits: ["Instant customer responses", "Media sharing capabilities", "Broadcast messaging"]
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "ERP System Integration",
      description: "Direct integration with SAP, Oracle, and other enterprise systems common in GCC businesses.",
      benefits: ["Real-time data sync", "Automated workflows", "Legacy system compatibility"]
    }
  ];

  const useCases = [
    "Customer service automation",
    "Order processing and tracking",
    "Inventory management",
    "Vendor communication",
    "Quality control monitoring",
    "Compliance reporting",
    "Staff scheduling",
    "Financial data processing"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-secondary">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200 mb-6">
              🤖 Custom AI Agents
            </Badge>
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Your Custom AI Workforce
              </span>
              <br />
              Built for GCC Businesses
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              We don't sell software. We build custom AI employees that understand your workflows, 
              speak Arabic and English, and integrate seamlessly with your existing systems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Build Your AI Agent
              </Button>
              <Button variant="outline" size="lg">
                Watch AI Agent Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Why Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Custom AI Agents</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Unlike generic AI tools, our agents are specifically designed for your business processes and GCC market requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="text-green-500 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Use Cases */}
          <div className="bg-accent/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Common <span className="bg-gradient-primary bg-clip-text text-transparent">AI Agent Use Cases</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-center space-x-2 bg-background rounded-lg p-3">
                  <span className="text-primary">•</span>
                  <span className="text-sm">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            How We Build Your <span className="bg-gradient-primary bg-clip-text text-transparent">AI Agent</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">1</div>
              <h3 className="text-xl font-semibold">Workflow Analysis</h3>
              <p className="text-muted-foreground">We analyze your current processes and identify automation opportunities.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">2</div>
              <h3 className="text-xl font-semibold">Custom Development</h3>
              <p className="text-muted-foreground">Our team builds AI agents specifically for your business requirements.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto text-primary-foreground font-bold text-xl">3</div>
              <h3 className="text-xl font-semibold">Integration & Training</h3>
              <p className="text-muted-foreground">We integrate with your systems and train your team for optimal results.</p>
            </div>
          </div>
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow mt-12">
            Start Building Your AI Agent
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomAIAgents;