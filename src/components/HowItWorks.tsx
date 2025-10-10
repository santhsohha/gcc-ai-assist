import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const HowItWorks = () => {
  const steps = [{
    week: "Days 1-14",
    title: "Zero-Risk Process Audit",
    description: "Our AI consultants map EVERY manual bottleneck bleeding your margins. Discover hidden inefficiencies your competitors are already automating.",
    icon: "🔍",
    color: "bg-orange-100 text-orange-700"
  }, {
    week: "Days 15-28",
    title: "Custom AI Deployment",
    description: "Production-ready AI agents built specifically for YOUR workflows. Arabic/English bilingual, enterprise-grade security, seamlessly integrated with your tech stack.",
    icon: "⚙️",
    color: "bg-orange-200 text-orange-800"
  }, {
    week: "Day 29+",
    title: "Measurable ROI Delivered",
    description: "Go live with automated workflows saving 15+ hours/week PER process. Full performance analytics, dedicated support, and guaranteed cost savings—or you don't pay.",
    icon: "🚀",
    color: "bg-primary text-primary-foreground"
  }];
  return <section id="how-it-works" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200 mb-6 text-base px-6 py-2">
            Proven Enterprise Implementation
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            From Operational Drain to <span className="bg-gradient-primary bg-clip-text text-transparent">Competitive Advantage</span>
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-foreground max-w-4xl mx-auto mb-4">
            30-Day Sprint to Measurable Automation
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            While your competitors burn months on generic solutions, you'll deploy battle-tested AI in 4 weeks
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => <div key={index} className="relative">
              <Card className="shadow-card hover:shadow-glow transition-all duration-300 border-2 hover:border-primary/50">
                <CardContent className="p-10 text-center my-px">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full text-3xl mb-8 ${step.color}`}>
                    {step.icon}
                  </div>
                  <Badge variant="outline" className="mb-6 text-base px-4 py-1.5 font-semibold">{step.week}</Badge>
                  <h3 className="text-3xl font-bold mb-6 leading-tight">{step.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-primary"></div>
                  <div className="absolute -right-1 -top-1 w-2 h-2 bg-primary rounded-full"></div>
                </div>}
            </div>)}
        </div>

        <div className="bg-gradient-secondary rounded-3xl p-12 text-center border-2 border-primary/30">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Zero-Risk Executive Guarantee</span>
          </h3>
          <p className="text-2xl font-semibold text-foreground mb-6 max-w-4xl mx-auto">
            We automate 2 critical workflows FREE for 30 days. If you don't see measurable ROI, you owe us nothing.
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            We've deployed this model across 50+ GCC enterprises. Our risk. Your gain. Performance metrics delivered weekly.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-background/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary mb-2">$0</div>
              <div className="text-base font-semibold mb-1">Implementation Cost</div>
              <div className="text-sm text-muted-foreground">Pay only after proven results</div>
            </div>
            <div className="bg-background/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary mb-2">0</div>
              <div className="text-base font-semibold mb-1">Lock-in Contracts</div>
              <div className="text-sm text-muted-foreground">Cancel anytime, no strings</div>
            </div>
            <div className="bg-background/50 rounded-xl p-6 backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-base font-semibold mb-1">Performance Guarantee</div>
              <div className="text-sm text-muted-foreground">Or full refund, no questions</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorks;