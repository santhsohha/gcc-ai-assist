import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, MessageSquare, Clock, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const WhatsAppAutomation = () => {
  const features = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "Business API Integration",
      description: "Full WhatsApp Business API integration with advanced automation capabilities for enterprise use.",
      benefits: ["Official business verification", "Advanced messaging features", "Analytics dashboard"]
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Automated Responses",
      description: "Instant customer responses in Arabic and English, handling inquiries even outside business hours.",
      benefits: ["Instant customer satisfaction", "Global time zone coverage", "Reduced response time to seconds"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Multi-Agent Support",
      description: "Multiple AI agents handling different business functions through a single WhatsApp interface.",
      benefits: ["Specialized department routing", "Context-aware conversations", "Seamless handoffs"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Smart Automation Flows",
      description: "Intelligent conversation flows that guide customers through complex processes automatically.",
      benefits: ["Order processing automation", "Appointment scheduling", "Payment link generation"]
    }
  ];

  const useCases = [
    "Order status updates and tracking",
    "Customer support and FAQs",
    "Appointment booking and reminders",
    "Payment notifications and links",
    "Product catalog and pricing",
    "Vendor communication and updates",
    "Staff notifications and alerts",
    "Marketing campaigns and broadcasts"
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
              📱 WhatsApp Automation
            </Badge>
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                WhatsApp Business
              </span>
              <br />
              Automation for MENA
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Critical for MENA market success - automated WhatsApp communication that handles customer 
              inquiries, order updates, and business processes in Arabic and English.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow" asChild>
                <a href="https://app.apollo.io/#/meet/kms-oa7-aeq/30-min" target="_blank" rel="noopener noreferrer">
                  Setup WhatsApp Automation
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://app.apollo.io/#/meet/kms-oa7-aeq/30-min" target="_blank" rel="noopener noreferrer">
                  See WhatsApp Demo
                </a>
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
              Why <span className="bg-gradient-primary bg-clip-text text-transparent">WhatsApp Automation</span> is Essential
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              In the MENA region, WhatsApp is the primary communication channel. Automating it gives you a competitive edge.
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

          {/* Stats Section */}
          <div className="bg-accent/50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="bg-gradient-primary bg-clip-text text-transparent">WhatsApp in MENA</span> - The Numbers
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <p className="text-muted-foreground">of MENA consumers use WhatsApp daily</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">75%</div>
                <p className="text-muted-foreground">prefer WhatsApp for business communication</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5x</div>
                <p className="text-muted-foreground">higher response rates vs email</p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="bg-accent/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Common <span className="bg-gradient-primary bg-clip-text text-transparent">WhatsApp Automation</span> Use Cases
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {useCases.map((useCase, index) => (
                <div key={index} className="flex items-center space-x-2 bg-background rounded-lg p-3">
                  <span className="text-primary">📱</span>
                  <span className="text-sm">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Automate Your <span className="bg-gradient-primary bg-clip-text text-transparent">WhatsApp Business?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 50+ GCC businesses who have automated their WhatsApp communication and improved customer satisfaction by 60%.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow" asChild>
            <a href="https://app.apollo.io/#/meet/kms-oa7-aeq/30-min" target="_blank" rel="noopener noreferrer">
              Start WhatsApp Automation Today
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhatsAppAutomation;