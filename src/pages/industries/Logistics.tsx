import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Truck, MapPin, Package, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Logistics = () => {
  const solutions = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Fleet Management Automation",
      description: "AI-powered fleet tracking and optimization with real-time route planning for GCC region deliveries.",
      benefits: ["25% fuel cost reduction", "Real-time vehicle tracking", "Predictive maintenance alerts"]
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: "Warehouse Optimization",
      description: "Smart inventory management and automated order processing with Arabic/English support.",
      benefits: ["40% faster order processing", "99.5% inventory accuracy", "Automated reorder points"]
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Delivery Coordination",
      description: "WhatsApp-based delivery updates and customer communication system for MENA market preferences.",
      benefits: ["95% delivery success rate", "Real-time customer updates", "Multilingual communication"]
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Customer Service Automation",
      description: "AI agents that handle delivery inquiries, schedule changes, and complaint resolution 24/7.",
      benefits: ["24/7 customer support", "Instant query resolution", "Multi-channel communication"]
    }
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
              🚛 Logistics Industry
            </Badge>
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Smart Logistics
              </span>
              <br />
              for GCC Supply Chains
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Optimize your logistics operations with AI agents that understand GCC market dynamics, 
              integrate with local systems, and communicate effectively in Arabic and English.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Schedule Logistics Consultation
              </Button>
              <Button variant="outline" size="lg">
                Download Logistics Case Study
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              AI Solutions for <span className="bg-gradient-primary bg-clip-text text-transparent">Logistics</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven by 20+ GCC logistics companies to reduce delivery costs by 30% and improve customer satisfaction by 50%.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {solution.icon}
                    </div>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Streamline Your <span className="bg-gradient-primary bg-clip-text text-transparent">Logistics Operations</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join top GCC logistics providers who have revolutionized their operations with our intelligent AI agents.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
            Optimize Your Logistics Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Logistics;