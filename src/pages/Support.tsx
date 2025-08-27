import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MessageSquare, Mail, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Support = () => {
  const supportOptions = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: "WhatsApp Support",
      description: "Get instant help via WhatsApp in Arabic or English",
      contact: "+971-XX-XXXXXXX",
      availability: "24/7",
      response: "< 5 minutes"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Support",
      description: "Detailed technical support and documentation",
      contact: "support@nunar.ai",
      availability: "Business Hours",
      response: "< 2 hours"
    },
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Phone Support",
      description: "Direct phone consultation for urgent issues",
      contact: "+971-XX-XXX-XXXX",
      availability: "9 AM - 6 PM GST",
      response: "Immediate"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Scheduled Consultation",
      description: "Book a dedicated session with our AI experts",
      contact: "Book Online",
      availability: "By Appointment",
      response: "Same Day"
    }
  ];

  const faqItems = [
    {
      question: "How quickly can you deploy an AI solution?",
      answer: "Most AI agents can be deployed within 2-4 weeks, depending on complexity. Simple WhatsApp automation can be ready in 1 week."
    },
    {
      question: "Do you provide Arabic language support?",
      answer: "Yes, all our AI solutions include native Arabic language processing with cultural context understanding for the GCC region."
    },
    {
      question: "What systems do you integrate with?",
      answer: "We integrate with all major ERP systems (SAP, Oracle), CRM platforms, WhatsApp Business API, and custom databases commonly used in the GCC."
    },
    {
      question: "Is training included in your services?",
      answer: "Yes, we provide comprehensive training for your team, including documentation, video tutorials, and hands-on sessions."
    },
    {
      question: "What kind of ROI can we expect?",
      answer: "Our clients typically see 80+ hours monthly savings and 25-40% cost reduction within the first 3 months of implementation."
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
              🎧 Support Center
            </Badge>
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                We're Here to Help
              </span>
              <br />
              24/7 GCC Support
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Get expert support for your AI automation solutions. Our GCC-based team speaks Arabic and English, 
              understands local business practices, and is available when you need us.
            </p>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Multiple Ways to <span className="bg-gradient-primary bg-clip-text text-transparent">Get Support</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the support option that works best for you. All our support channels are staffed by AI automation experts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {supportOptions.map((option, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {option.icon}
                    </div>
                    <CardTitle className="text-xl">{option.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Contact:</span>
                      <span className="font-semibold">{option.contact}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Availability:</span>
                      <span className="font-semibold">{option.availability}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Response:</span>
                      <span className="font-semibold text-green-600">{option.response}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow mr-4" asChild>
              <a href="https://app.apollo.io/#/meet/managed-meetings/AnandEthiraj/hgz-qap-fw2/30-min" target="_blank" rel="noopener noreferrer">
                Contact Support Now
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://app.apollo.io/#/meet/managed-meetings/AnandEthiraj/hgz-qap-fw2/30-min" target="_blank" rel="noopener noreferrer">
                Schedule Consultation
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Frequently Asked <span className="bg-gradient-primary bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className="bg-background/80">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Can't find what you're looking for?</p>
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow" asChild>
              <a href="https://app.apollo.io/#/meet/managed-meetings/AnandEthiraj/hgz-qap-fw2/30-min" target="_blank" rel="noopener noreferrer">
                Ask Our AI Experts
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="bg-accent/50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              🚨 Emergency <span className="bg-gradient-primary bg-clip-text text-transparent">Support</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Critical AI system down? Our emergency response team is available 24/7 for Enterprise clients.
            </p>
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
              Emergency Hotline: +971-XX-EMERGENCY
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;