import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Heart, Calendar, FileText, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Healthcare = () => {
  const solutions = [
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Patient Appointment Management",
      description: "AI agents that handle appointment scheduling, reminders, and follow-ups via WhatsApp in Arabic and English.",
      benefits: ["50% reduction in no-shows", "24/7 appointment booking", "Multilingual patient communication"]
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Medical Records Automation",
      description: "Intelligent document processing and patient record management compliant with UAE health regulations.",
      benefits: ["99% data accuracy", "HIPAA compliant", "Arabic/English documentation"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Staff Coordination",
      description: "Smart scheduling and communication systems for medical staff with real-time updates and notifications.",
      benefits: ["30% improved staff efficiency", "Real-time shift management", "Emergency response coordination"]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Patient Care Monitoring",
      description: "AI-powered patient monitoring and alert systems that ensure continuous care quality.",
      benefits: ["24/7 patient monitoring", "Instant critical alerts", "Family communication automation"]
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
              🏥 Healthcare Industry
            </Badge>
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Healthcare AI
              </span>
              <br />
              for GCC Medical Facilities
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Enhance patient care and streamline operations with AI agents designed for GCC healthcare providers. 
              HIPAA compliant with Arabic/English support and WhatsApp integration.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Schedule Healthcare Consultation
              </Button>
              <Button variant="outline" size="lg">
                Download Healthcare Case Study
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
              AI Solutions for <span className="bg-gradient-primary bg-clip-text text-transparent">Healthcare</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Trusted by 10+ GCC healthcare facilities to improve patient satisfaction by 40% and reduce administrative overhead by 60%.
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
            Transform Your <span className="bg-gradient-primary bg-clip-text text-transparent">Healthcare Operations</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading GCC healthcare providers who trust our AI agents for better patient care and operational efficiency.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
            Start Your Healthcare AI Journey
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Healthcare;