import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, ShoppingCart, BarChart3, MessageSquare, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Retail = () => {
  const solutions = [
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Inventory Management",
      description: "AI-powered inventory optimization with real-time stock monitoring and automated reordering for hypermarkets.",
      benefits: ["30% inventory cost reduction", "99% stock accuracy", "Automated supplier orders"]
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Customer Service Automation",
      description: "WhatsApp and multi-channel customer support with Arabic/English capabilities for GCC retail customers.",
      benefits: ["24/7 customer support", "Instant query resolution", "Multilingual assistance"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Sales Analytics & Forecasting",
      description: "Intelligent sales prediction and trend analysis to optimize product placement and pricing strategies.",
      benefits: ["25% sales increase", "Accurate demand forecasting", "Dynamic pricing optimization"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Staff Scheduling Optimization",
      description: "Smart staff scheduling based on customer traffic patterns and seasonal demand in GCC retail markets.",
      benefits: ["20% staff cost reduction", "Optimal floor coverage", "Improved customer experience"]
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
              🛍️ Retail & Hypermarkets
            </Badge>
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Intelligent Retail
              </span>
              <br />
              for GCC Markets
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Transform your retail operations with AI agents that understand GCC consumer behavior, 
              integrate with local payment systems, and provide seamless Arabic/English customer experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Schedule Retail Consultation
              </Button>
              <Button variant="outline" size="lg">
                Download Retail Case Study
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
              AI Solutions for <span className="bg-gradient-primary bg-clip-text text-transparent">Retail</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by 25+ GCC retailers and hypermarkets to increase sales by 35% and reduce operational costs by 40%.
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
            Revolutionize Your <span className="bg-gradient-primary bg-clip-text text-transparent">Retail Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join successful GCC retailers who have transformed their business with our intelligent retail AI solutions.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
            Transform Your Retail Business
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Retail;