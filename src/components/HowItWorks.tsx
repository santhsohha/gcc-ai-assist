import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const HowItWorks = () => {
  const steps = [{
    week: "Weeks 1-2",
    title: "Workflow Analysis",
    description: "Our GCC-based team studies your manual processes, WhatsApp coordination, and operational bottlenecks",
    icon: "🔍",
    color: "bg-orange-100 text-orange-700"
  }, {
    week: "Weeks 3-4",
    title: "AI Agent Development",
    description: "Build custom AI agents with Arabic/English support, tailored to your exact business workflows",
    icon: "⚙️",
    color: "bg-orange-200 text-orange-800"
  }, {
    week: "Week 5+",
    title: "Deployment & Integration",
    description: "Deploy into your existing tools (ERP, WhatsApp, Google Sheets) with full support and optimization",
    icon: "🚀",
    color: "bg-primary text-primary-foreground"
  }];
  return <section id="how-it-works" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200 mb-4">
            How It Works
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            From Manual Chaos to <span className="bg-gradient-primary bg-clip-text text-transparent">AI Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple 5-week process to transform your operations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => <div key={index} className="relative">
              <Card className="shadow-card hover:shadow-glow transition-all duration-300">
                <CardContent className="p-8 text-center my-px">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full text-2xl mb-6 ${step.color}`}>
                    {step.icon}
                  </div>
                  <Badge variant="outline" className="mb-4">{step.week}</Badge>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-primary"></div>
                  <div className="absolute -right-1 -top-1 w-2 h-2 bg-primary rounded-full"></div>
                </div>}
            </div>)}
        </div>

        <div className="bg-gradient-secondary rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Risk-Free Trial</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            We'll automate 2 of your processes for FREE in the first 30 days. No payment if you're not satisfied.
          </p>
          <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
            <span>✅ No Setup Fees</span>
            <span>✅ No Contracts</span>
            <span>✅ 30-Day Guarantee</span>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorks;