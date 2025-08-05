import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const workflowTiers = [
    {
      tier: "Simple",
      hours: "4-8h",
      examples: ["WhatsApp invoice reminders", "PO status updates", "Basic notifications"],
      included: 2
    },
    {
      tier: "Medium", 
      hours: "10-20h",
      examples: ["Inventory tracking bots", "Patient check-in systems", "Vendor coordination"],
      included: 2
    },
    {
      tier: "Complex",
      hours: "25-40h+", 
      examples: ["Arabic/English classification", "Multi-system integrations", "Advanced reporting"],
      included: 0
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200 mb-4">
            Transparent Pricing
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Fixed Monthly Retainer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No surprises. No per-user fees. Just predictable AI automation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Main Pricing Card */}
          <Card className="shadow-glow border-2 border-primary relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-gradient-primary text-primary-foreground px-4 py-2 text-sm font-semibold">
              MOST POPULAR
            </div>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-3xl font-bold">AI Automation Retainer</CardTitle>
              <div className="space-y-2">
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  AED 16,500
                </div>
                <div className="text-2xl font-semibold text-muted-foreground">
                  SAR 18,000
                </div>
                <p className="text-muted-foreground">per month</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg border-b pb-2">What's Included:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>1 Dedicated AI Developer</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>1 Process Consultant</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>80 Development Hours/Month</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>2 Medium Complexity Workflows</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Arabic/English Support</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>WhatsApp Integration</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    <span>Ongoing Support & Optimization</span>
                  </li>
                </ul>
              </div>
              
              <Button className="w-full bg-gradient-primary hover:shadow-glow text-lg py-6">
                Start Your Free Trial
              </Button>
              
              <p className="text-center text-sm text-muted-foreground">
                30-day risk-free trial • No setup fees • Cancel anytime
              </p>
            </CardContent>
          </Card>

          {/* Workflow Tiers */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-6">Workflow Complexity Tiers</h3>
            {workflowTiers.map((tier, index) => (
              <Card key={index} className={`shadow-card ${tier.included > 0 ? 'border-primary' : 'border-border'}`}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold">{tier.tier}</h4>
                      <p className="text-primary font-semibold">{tier.hours}</p>
                    </div>
                    {tier.included > 0 && (
                      <Badge variant="default" className="bg-green-100 text-green-700">
                        {tier.included} Included
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Examples:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {tier.examples.map((example, idx) => (
                        <li key={idx}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-background rounded-2xl p-8 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Compare vs Traditional Solutions</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-red-600 mb-3">❌ Generic Software</h4>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Per-user licensing fees</li>
                  <li>• English-only interface</li>
                  <li>• Rigid, non-customizable</li>
                  <li>• No WhatsApp integration</li>
                  <li>• Self-service configuration</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 mb-3">✅ Nunar AI Agents</h4>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Fixed monthly retainer</li>
                  <li>• Full Arabic/English support</li>
                  <li>• 100% custom-built for you</li>
                  <li>• Native WhatsApp integration</li>
                  <li>• Full-service consultancy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;