import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Testimonials = () => {
  const useCases = [
    {
      industry: "Manufacturing",
      company: "UAE Electronics Distributor",
      problem: "Manual vendor follow-ups via WhatsApp eating 4 hours daily",
      solution: "AI agent handles Arabic/English vendor coordination 24/7",
      result: "80% reduction in manual coordination time",
      quote: "Our AI agent follows up with suppliers in Arabic while I focus on growing the business."
    },
    {
      industry: "Healthcare", 
      company: "Dubai Medical Center",
      problem: "Patient appointment confirmations requiring manual calls",
      solution: "WhatsApp bot for automated Arabic appointment confirmations",
      result: "90% confirmation rate, zero manual calls",
      quote: "Patients love getting confirmations in Arabic via WhatsApp. It's so much more personal."
    },
    {
      industry: "Logistics",
      company: "Saudi Freight Company", 
      problem: "Customers constantly asking for shipment updates via WhatsApp",
      solution: "Live order tracking bot with real-time updates",
      result: "Customer satisfaction up 40%, support load down 70%",
      quote: "Our customers get instant shipment updates in their preferred language, automatically."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200 mb-4">
            Success Stories
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Real GCC Businesses, <span className="bg-gradient-primary bg-clip-text text-transparent">Real Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how AI agents transform operations across different industries
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <Badge variant="outline" className="mb-2">{useCase.industry}</Badge>
                    <h3 className="font-semibold text-lg">{useCase.company}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-red-600 mb-2">Problem:</h4>
                      <p className="text-sm text-muted-foreground">{useCase.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-primary mb-2">AI Solution:</h4>
                      <p className="text-sm text-muted-foreground">{useCase.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-green-600 mb-2">Result:</h4>
                      <p className="text-sm font-semibold">{useCase.result}</p>
                    </div>
                  </div>
                  
                  <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                    "{useCase.quote}"
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-secondary rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">30+ Workflows Built</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Deployed across manufacturing, healthcare, logistics, and retail in UAE, Saudi Arabia, and beyond
            </p>
            <div className="flex justify-center items-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2-4</div>
                <div className="text-muted-foreground">Week Deployment</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-muted-foreground">GCC Localized</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">80+</div>
                <div className="text-muted-foreground">Hours Saved Monthly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;