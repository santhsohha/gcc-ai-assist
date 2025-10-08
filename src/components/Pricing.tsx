import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const Pricing = () => {
  const [currency, setCurrency] = useState("AED");
  
  const currencies = {
    AED: { symbol: "AED", rate: 1, name: "UAE Dirham" },
    SAR: { symbol: "SAR", rate: 1.09, name: "Saudi Riyal" },
    USD: { symbol: "$", rate: 0.27, name: "US Dollar" },
    EUR: { symbol: "€", rate: 0.25, name: "Euro" },
    GBP: { symbol: "£", rate: 0.21, name: "British Pound" },
    INR: { symbol: "₹", rate: 23, name: "Indian Rupee" },
    RUB: { symbol: "₽", rate: 26, name: "Russian Ruble" },
    CNY: { symbol: "¥", rate: 1.95, name: "Chinese Yuan" },
  };
  
  const convertPrice = (aedPrice: number) => {
    const converted = aedPrice * currencies[currency as keyof typeof currencies].rate;
    return `${currencies[currency as keyof typeof currencies].symbol} ${Math.round(converted).toLocaleString()}`;
  };
  
  const workflowTiers = [{
    tier: "Simple",
    hours: "4-8h",
    examples: ["WhatsApp invoice reminders", "PO status updates", "Basic notifications"],
    included: 2
  }, {
    tier: "Medium",
    hours: "10-20h",
    examples: ["Inventory tracking bots", "Patient check-in systems", "Vendor coordination"],
    included: 2
  }, {
    tier: "Complex",
    hours: "25-40h+",
    examples: ["Arabic/English classification", "Multi-system integrations", "Advanced reporting"],
    included: 0
  }];
  return <section id="pricing" className="py-20 px-4 bg-gradient-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200 mb-4">
            Transparent Pricing
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Fixed Monthly Retainer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">No surprises. No per-user fees. Just predictable AI automation, the max of 6 Months</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Main Pricing Card */}
          <Card className="shadow-glow border-2 border-primary relative overflow-hidden my-0">
            <div className="absolute top-0 right-0 bg-gradient-primary text-primary-foreground px-4 py-2 text-sm font-semibold">
              MOST POPULAR
            </div>
            <CardHeader className="text-center pb-4 my-[105px]">
              <CardTitle className="text-3xl font-bold">AI Automation Retainer</CardTitle>
              <div className="space-y-2">
                <div className="text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  {convertPrice(16500)}
                </div>
                <p className="text-muted-foreground">per month</p>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 my-0">
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
                    <span>3 Simple & Medium Complexity Workflows</span>
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
              
              <Button className="w-full bg-gradient-primary hover:shadow-glow text-lg py-6" aria-label="Start Your Free Trial of AI Automation" asChild>
                <a href="https://app.apollo.io/#/meet/managed-meetings/AnandEthiraj/hgz-qap-fw2/30-min" target="_blank" rel="noopener noreferrer">
                  Start Your Free Trial
                </a>
              </Button>
              
              <p className="text-center text-sm text-muted-foreground">
                30-day risk-free trial • No setup fees • Cancel anytime
              </p>
            </CardContent>
          </Card>

          {/* Workflow Tiers with FOMO */}
          <div className="space-y-6">
            <div className="text-center mb-8 bg-gray-100 rounded-lg mx-0">
              <Badge variant="secondary" className="bg-orange-100 text-orange-700 mb-4 animate-pulse">
                ⚡ Your Automation Roadmap
              </Badge>
              <h3 className="text-2xl font-bold mb-4" data-translate data-en="What You Get vs What Competitors Are Missing" data-ar="ما تحصل عليه مقابل ما يفقده المنافسون">What You Get vs What Competitors Are Missing</h3>
              <p className="text-muted-foreground" data-translate data-en="While others pay per user and struggle with English-only systems, you get everything included." data-ar="بينما يدفع الآخرون عن كل مستخدم ويعانون من الأنظمة الإنجليزية فقط، تحصل على كل شيء متضمن.">You get unlimited users, Arabic support, and custom workflows for one fixed price.</p>
            </div>
            
            {workflowTiers.map((tier, index) => <Card key={index} className={`shadow-card hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 ${tier.included > 0 ? 'border-primary bg-gradient-to-r from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20' : 'border-border hover:border-primary/50'} relative overflow-hidden`}>
                {tier.included > 0 && <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>}
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${tier.included > 0 ? 'bg-green-100 dark:bg-green-900/20' : 'bg-orange-100 dark:bg-orange-900/20'}`}>
                        <span className="text-2xl">
                          {index === 0 ? '⚡' : index === 1 ? '🚀' : '🎯'}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold">{tier.tier}</h4>
                        
                      </div>
                    </div>
                    {tier.included > 0 ? <Badge variant="default" className="bg-green-100 text-green-700 animate-bounce">
                        ✅ {tier.included} Included FREE
                      </Badge> : <Badge variant="outline" className="border-orange-500 text-orange-600">
                        🔥 Additional Value
                      </Badge>}
                  </div>
                  <div className="space-y-3">
                    <p className="font-medium text-sm">Real Business Impact:</p>
                    <ul className="text-sm space-y-2">
                      {tier.examples.map((example, idx) => <li key={idx} className="flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{example}</span>
                        </li>)}
                    </ul>
                     {tier.included > 0 && <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-3 mt-4">
                        <p className="text-green-700 dark:text-green-400 text-sm font-medium">
                          💰 Value: {convertPrice(index === 0 ? 8000 : 12000)}/month - Yours FREE
                        </p>
                      </div>}
                  </div>
                </CardContent>
              </Card>)}
            
            <div className="text-center mt-8 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl p-6 border-2 border-orange-200">
              <p className="text-orange-700 font-semibold mb-2" data-translate data-en="⚠️ While competitors charge AED 2,000+ per user monthly..." data-ar="⚠️ بينما يتقاضى المنافسون 2,000+ درهم لكل مستخدم شهرياً...">⚠️ While competitors charge {convertPrice(2000)}+ per user monthly...</p>
              <p className="text-muted-foreground" data-translate data-en="You get unlimited users, Arabic support, and custom workflows for one fixed price." data-ar="تحصل على مستخدمين غير محدودين ودعم العربية وسير عمل مخصص بسعر ثابت واحد.">While others pay per user and struggle with English-only systems, you get everything included.</p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="max-w-7xl mx-auto relative">
            <div className="absolute top-0 right-0 z-10">
              <Select value={currency} onValueChange={setCurrency}>
                <SelectTrigger className="w-[180px] bg-background border-2 border-primary/30">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(currencies).map(([code, data]) => (
                    <SelectItem key={code} value={code}>
                      {data.symbol} {data.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="text-center mb-12">
              <Badge className="bg-primary/10 text-primary mb-4 text-base px-6 py-2">
                Executive ROI Analysis
              </Badge>
              <h3 className="text-4xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Strategic Business Impact</span>
              </h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Real numbers from companies like yours who automated with Nunar AI
              </p>
            </div>

            {/* Industry-Specific Value Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all shadow-card hover:shadow-glow">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">🏭</div>
                  <h4 className="font-bold text-lg mb-2">Manufacturing</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Order Processing:</span>
                      <span className="font-semibold text-green-600">-85% time</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Error Reduction:</span>
                      <span className="font-semibold text-green-600">92%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Vendor Response:</span>
                      <span className="font-semibold text-green-600">3x faster</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all shadow-card hover:shadow-glow">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">🚚</div>
                  <h4 className="font-bold text-lg mb-2">Logistics</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Delivery Updates:</span>
                      <span className="font-semibold text-green-600">Automated</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Customer Queries:</span>
                      <span className="font-semibold text-green-600">-70% load</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Fleet Efficiency:</span>
                      <span className="font-semibold text-green-600">+35%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all shadow-card hover:shadow-glow">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">🏥</div>
                  <h4 className="font-bold text-lg mb-2">Healthcare</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Appointment No-Shows:</span>
                      <span className="font-semibold text-green-600">-60%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Patient Communication:</span>
                      <span className="font-semibold text-green-600">24/7 AR/EN</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Admin Time:</span>
                      <span className="font-semibold text-green-600">-50%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all shadow-card hover:shadow-glow">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">🛍️</div>
                  <h4 className="font-bold text-lg mb-2">Retail</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Inventory Alerts:</span>
                      <span className="font-semibold text-green-600">Real-time</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Customer Engagement:</span>
                      <span className="font-semibold text-green-600">+40%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sales Recovery:</span>
                      <span className="font-semibold text-green-600">+25%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* ROI Breakdown */}
            <div className="bg-gradient-to-r from-primary/5 via-background to-primary/5 rounded-2xl p-8 shadow-glow border-2 border-primary/20 mb-12">
              <h4 className="text-2xl font-bold text-center mb-8">Your 6-Month Business Transformation</h4>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/20 mb-4">
                    <span className="text-3xl">⚠️</span>
                  </div>
                  <div className="text-3xl font-bold text-red-600 mb-2">{convertPrice(288000)}</div>
                  <p className="text-sm text-muted-foreground font-medium mb-3">6-Month Cost of Manual Operations</p>
                  <ul className="text-xs text-left space-y-1 text-muted-foreground">
                    <li>• 2 staff x 160 hrs/month x {convertPrice(50)}/hr</li>
                    <li>• Delayed decisions & errors</li>
                    <li>• Missed opportunities</li>
                    <li>• Customer dissatisfaction</li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/20 mb-4">
                    <span className="text-3xl">💰</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{convertPrice(99000)}</div>
                  <p className="text-sm text-muted-foreground font-medium mb-3">6-Month Investment with Nunar</p>
                  <ul className="text-xs text-left space-y-1 text-muted-foreground">
                    <li>✓ Dedicated AI Developer</li>
                    <li>✓ Process Consultant</li>
                    <li>✓ 4-6 Custom Workflows</li>
                    <li>✓ Unlimited users & support</li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/20 mb-4">
                    <span className="text-3xl">📈</span>
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-2">{convertPrice(189000)}</div>
                  <p className="text-sm text-muted-foreground font-medium mb-3">Net Savings in 6 Months</p>
                  <ul className="text-xs text-left space-y-1 text-muted-foreground">
                    <li>✓ 191% ROI in first 6 months</li>
                    <li>✓ Staff focus on growth tasks</li>
                    <li>✓ Faster customer response</li>
                    <li>✓ Competitive advantage</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-primary p-6 rounded-xl text-center">
                <p className="text-2xl font-bold text-primary-foreground mb-2">
                  Break-even in 1.7 months • Full ROI by Month 3
                </p>
                <p className="text-primary-foreground/90">
                  After that, it's pure profit and competitive advantage
                </p>
              </div>
            </div>

            {/* Strategic Value Beyond Cost Savings */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-2 border-orange-200 dark:border-orange-900/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-3xl">⏱️</span>
                    <span>Hidden Costs You're Paying Today</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">→</span>
                    <div>
                      <p className="font-semibold">Employee Burnout & Turnover</p>
                      <p className="text-sm text-muted-foreground">Replacing 1 employee costs 6-9 months salary</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">→</span>
                    <div>
                      <p className="font-semibold">Customer Churn from Slow Response</p>
                      <p className="text-sm text-muted-foreground">30% customers leave after poor service experience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">→</span>
                    <div>
                      <p className="font-semibold">Competitive Disadvantage</p>
                      <p className="text-sm text-muted-foreground">Competitors with AI respond 10x faster</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-500 font-bold">→</span>
                    <div>
                      <p className="font-semibold">Scaling Limitations</p>
                      <p className="text-sm text-muted-foreground">Can't grow without hiring more people</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200 dark:border-green-900/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-3xl">🚀</span>
                    <span>Strategic Gains with Nunar</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <div>
                      <p className="font-semibold">Scale Without Hiring</p>
                      <p className="text-sm text-muted-foreground">Handle 3x volume with same team size</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <div>
                      <p className="font-semibold">24/7 Customer Engagement</p>
                      <p className="text-sm text-muted-foreground">Arabic & English support without night shifts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <div>
                      <p className="font-semibold">Data-Driven Decisions</p>
                      <p className="text-sm text-muted-foreground">Real-time insights without manual reports</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-green-500 font-bold">✓</span>
                    <div>
                      <p className="font-semibold">Market Leadership Position</p>
                      <p className="text-sm text-muted-foreground">Be the most responsive in your industry</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl p-8 text-center border-2 border-primary/30">
              <h4 className="text-2xl font-bold mb-3">The Question Isn't "Should We Automate?"</h4>
              <p className="text-xl text-muted-foreground mb-6">
                It's "Can We Afford to Wait Another Month?"
              </p>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Every day your competitors are getting faster, your customers are getting more demanding, 
                and your team is getting more overwhelmed. Start your 30-day trial and see the impact in Week 1.
              </p>
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-12 py-6 mb-4" aria-label="Book Your Free ROI Consultation" asChild>
                <a href="https://app.apollo.io/#/meet/managed-meetings/AnandEthiraj/hgz-qap-fw2/30-min" target="_blank" rel="noopener noreferrer">
                  Book Your Free ROI Consultation
                </a>
              </Button>
              <p className="text-sm text-muted-foreground">
                30-day risk-free trial • Custom roadmap for your industry • No setup fees
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Pricing;