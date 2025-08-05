import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Factory, Cog, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Manufacturing = () => {
  const solutions = [
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Production Line Automation",
      description: "AI agents that monitor production metrics, predict maintenance needs, and optimize workflows in real-time.",
      benefits: ["30% reduction in downtime", "Real-time quality monitoring", "Predictive maintenance alerts"]
    },
    {
      icon: <Cog className="h-8 w-8" />,
      title: "Supply Chain Optimization",
      description: "Intelligent inventory management and vendor coordination with WhatsApp integration for GCC suppliers.",
      benefits: ["25% inventory cost reduction", "Automated vendor communication", "Real-time supply tracking"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Quality Control AI",
      description: "Computer vision and AI-powered quality inspection that works 24/7 with Arabic reporting.",
      benefits: ["99.5% defect detection", "Multilingual reports", "Continuous quality monitoring"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Compliance Automation",
      description: "Ensure adherence to GCC manufacturing regulations with automated compliance reporting.",
      benefits: ["100% compliance tracking", "Automated documentation", "Regional standard compliance"]
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
              🏭 Manufacturing Industry
            </Badge>
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Smart Manufacturing
              </span>
              <br />
              for the GCC Region
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Transform your manufacturing operations with AI agents that understand local regulations, 
              communicate in Arabic/English, and integrate seamlessly with GCC supply chains.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Schedule Manufacturing Consultation
              </Button>
              <Button variant="outline" size="lg">
                Download Manufacturing Case Study
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
              AI Solutions for <span className="bg-gradient-primary bg-clip-text text-transparent">Manufacturing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven AI implementations that have helped GCC manufacturers reduce costs by 25% and increase efficiency by 40%.
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
            Ready to Modernize Your <span className="bg-gradient-primary bg-clip-text text-transparent">Manufacturing?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 15+ GCC manufacturers who have already automated their workflows with our AI agents.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
            Start Your Manufacturing Transformation
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Manufacturing;