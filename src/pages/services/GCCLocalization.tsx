import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Globe, MapPin, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const GCCLocalization = () => {
  const features = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Arabic Language Mastery",
      description: "Native Arabic language processing with regional dialect understanding and cultural context awareness.",
      benefits: ["MSA and regional dialects", "Cultural sensitivity", "Business etiquette compliance"]
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Regional Business Practices",
      description: "Deep understanding of GCC business customs, holidays, and operational requirements.",
      benefits: ["Islamic calendar integration", "Business hour optimization", "Cultural holiday awareness"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Local Compliance",
      description: "Built-in compliance with UAE, Saudi, Kuwait, Qatar, Bahrain, and Oman business regulations.",
      benefits: ["VAT compliance", "Labor law adherence", "Data protection requirements"]
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "GCC Market Expertise",
      description: "Optimized for GCC supply chains, payment systems, and customer behavior patterns.",
      benefits: ["Local payment integration", "Supply chain optimization", "Customer preference adaptation"]
    }
  ];

  const countries = [
    { name: "United Arab Emirates", flag: "🇦🇪", specialties: ["Free zone compliance", "Emirates ID integration", "Dubai specific regulations"] },
    { name: "Saudi Arabia", flag: "🇸🇦", specialties: ["Vision 2030 alignment", "ZATCA compliance", "Saudization requirements"] },
    { name: "Qatar", flag: "🇶🇦", specialties: ["Qatarization compliance", "World Cup legacy systems", "Energy sector expertise"] },
    { name: "Kuwait", flag: "🇰🇼", specialties: ["Kuwait Vision 2035", "Oil sector integration", "Local content requirements"] },
    { name: "Bahrain", flag: "🇧🇭", specialties: ["Financial hub integration", "Bahrain Vision 2030", "Fintech compliance"] },
    { name: "Oman", flag: "🇴🇲", specialties: ["Oman Vision 2040", "Tourism sector optimization", "Sultanate regulations"] }
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
              🌍 GCC Localization
            </Badge>
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Built for the GCC
              </span>
              <br />
              Culture, Language & Business
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Our AI agents are built with deep understanding of GCC business culture, Arabic language nuances, 
              and regional compliance requirements. Not just translated software - truly localized solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Explore GCC Solutions
              </Button>
              <Button variant="outline" size="lg">
                Regional Compliance Guide
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
              Why <span className="bg-gradient-primary bg-clip-text text-transparent">GCC Localization</span> Matters
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Generic global solutions don't work in the GCC. You need AI that understands the region's unique requirements.
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

          {/* Countries Section */}
          <div className="bg-accent/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Country-Specific</span> Expertise
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countries.map((country, index) => (
                <Card key={index} className="bg-background">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{country.flag}</div>
                    <CardTitle className="text-lg">{country.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {country.specialties.map((specialty, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <span className="text-primary mr-2">•</span>
                          {specialty}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              The <span className="bg-gradient-primary bg-clip-text text-transparent">Localization</span> Advantage
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-4">
                <div className="text-4xl font-bold text-primary">3x</div>
                <h3 className="text-xl font-semibold">Faster Adoption</h3>
                <p className="text-muted-foreground">Local teams adopt localized solutions 3x faster than generic alternatives.</p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-bold text-primary">50%</div>
                <h3 className="text-xl font-semibold">Fewer Errors</h3>
                <p className="text-muted-foreground">Cultural understanding reduces miscommunication and operational errors.</p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl font-bold text-primary">100%</div>
                <h3 className="text-xl font-semibold">Compliance Ready</h3>
                <p className="text-muted-foreground">Built-in compliance with local regulations from day one.</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              Get Your Localized AI Solution
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GCCLocalization;