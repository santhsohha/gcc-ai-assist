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
            <div className="text-center mb-12 pt-16">
              <Badge className="bg-red-500 text-white mb-6 text-lg px-8 py-3 animate-pulse">
                ⚡ Limited Time: Only 3 Spots Left This Quarter
              </Badge>
              <h3 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">While Your Competitors Automate,</span>
                <br />
                <span className="text-red-600">You're Burning Money Every Day</span>
              </h3>
              <p className="text-2xl md:text-3xl text-muted-foreground max-w-4xl mx-auto font-semibold">
                Real ROI from 50+ GCC companies who refused to wait and took action
              </p>
            </div>

            {/* Industry-Specific Value Grid */}
            <div className="mb-8 text-center">
              <p className="text-2xl font-bold text-orange-600 mb-4 animate-pulse">
                ⏰ Your competitors implemented this 6 months ago. How much revenue did you lose?
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all shadow-card hover:shadow-glow transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">🏭</div>
                  <h4 className="font-bold text-xl mb-3">Manufacturing</h4>
                  <p className="text-sm text-orange-600 font-semibold mb-3">⚠️ Stop losing {convertPrice(50000)}/month to inefficiency</p>
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

              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all shadow-card hover:shadow-glow transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">🚚</div>
                  <h4 className="font-bold text-xl mb-3">Logistics</h4>
                  <p className="text-sm text-orange-600 font-semibold mb-3">⚠️ Lost deliveries = Lost customers forever</p>
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

              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all shadow-card hover:shadow-glow transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">🏥</div>
                  <h4 className="font-bold text-xl mb-3">Healthcare</h4>
                  <p className="text-sm text-orange-600 font-semibold mb-3">⚠️ Every no-show = {convertPrice(500)} down the drain</p>
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

              <Card className="border-2 border-primary/20 hover:border-primary/50 transition-all shadow-card hover:shadow-glow transform hover:scale-105">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">🛍️</div>
                  <h4 className="font-bold text-xl mb-3">Retail</h4>
                  <p className="text-sm text-orange-600 font-semibold mb-3">⚠️ Stock-outs cost you {convertPrice(30000)}/month</p>
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
            <div className="bg-gradient-to-r from-red-50 via-orange-50 to-red-50 dark:from-red-950/20 dark:via-orange-950/20 dark:to-red-950/20 rounded-2xl p-10 shadow-glow border-4 border-red-500/30 mb-12 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-red-600 text-white px-6 py-2 rounded-full font-bold text-sm animate-bounce">
                ⚡ ACT NOW
              </div>
              <h4 className="text-4xl md:text-5xl font-bold text-center mb-4 text-red-600">
                The Cost of Doing Nothing
              </h4>
              <p className="text-center text-xl mb-10 font-semibold text-muted-foreground">
                Every day you wait = Money walking out the door to competitors
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/20 mb-6 animate-pulse">
                    <span className="text-5xl">⚠️</span>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-red-600 mb-3">{convertPrice(288000)}</div>
                  <p className="text-lg text-muted-foreground font-bold mb-4 uppercase tracking-wide">What You're LOSING Every 6 Months</p>
                  <ul className="text-sm text-left space-y-2 text-muted-foreground bg-white/50 dark:bg-black/20 p-4 rounded-lg">
                    <li className="font-semibold">❌ 2 staff x 160 hrs/month x {convertPrice(50)}/hr</li>
                    <li className="font-semibold">❌ Delayed decisions costing you deals</li>
                    <li className="font-semibold">❌ Errors killing customer trust</li>
                    <li className="font-semibold">❌ Competitors stealing your market share</li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/20 mb-6">
                    <span className="text-5xl">💰</span>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">{convertPrice(99000)}</div>
                  <p className="text-lg text-muted-foreground font-bold mb-4 uppercase tracking-wide">Smart Investment (6 Months)</p>
                  <ul className="text-sm text-left space-y-2 text-muted-foreground bg-white/50 dark:bg-black/20 p-4 rounded-lg">
                    <li className="font-semibold">✅ Dedicated AI Developer (YOUR secret weapon)</li>
                    <li className="font-semibold">✅ Process Consultant (Optimize EVERYTHING)</li>
                    <li className="font-semibold">✅ 4-6 Custom Workflows (Built for YOUR business)</li>
                    <li className="font-semibold">✅ Unlimited users & 24/7 support (No hidden fees)</li>
                  </ul>
                </div>

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/20 mb-6 animate-bounce">
                    <span className="text-5xl">🚀</span>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-green-600 mb-3">{convertPrice(189000)}</div>
                  <p className="text-lg text-muted-foreground font-bold mb-4 uppercase tracking-wide">Pure Profit You're Missing</p>
                  <ul className="text-sm text-left space-y-2 text-muted-foreground bg-white/50 dark:bg-black/20 p-4 rounded-lg">
                    <li className="font-semibold">🔥 191% ROI - Your competitors already have this</li>
                    <li className="font-semibold">🔥 Staff crushing goals, not drowning in tasks</li>
                    <li className="font-semibold">🔥 Instant customer response = More sales</li>
                    <li className="font-semibold">🔥 Market dominance while others play catch-up</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-primary p-8 rounded-xl text-center mt-8 border-4 border-green-400 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-2 rounded-full font-bold animate-pulse">
                  ⚡ LIMITED OFFER
                </div>
                <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-3">
                  Break-even in 1.7 months • Full ROI by Month 3
                </p>
                <p className="text-xl md:text-2xl text-primary-foreground/90 font-semibold">
                  After that? Pure profit while competitors scramble to catch up
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
            <div className="bg-gradient-to-r from-red-100 via-orange-100 to-red-100 dark:from-red-950/30 dark:via-orange-950/30 dark:to-red-950/30 rounded-2xl p-10 text-center border-4 border-red-500/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 animate-pulse"></div>
              <Badge className="bg-red-600 text-white mb-6 text-lg px-8 py-3 animate-bounce">
                ⏰ URGENT: Only 3 spots remaining this quarter
              </Badge>
              <h4 className="text-4xl md:text-5xl font-bold mb-4 text-red-600">The Real Question:</h4>
              <p className="text-3xl md:text-4xl text-muted-foreground font-bold mb-8">
                Can You Afford Another Month of Losses?
              </p>
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-semibold leading-relaxed">
                <span className="text-red-600">Right now, competitors are stealing your customers.</span> They respond in seconds while you're stuck in manual chaos. 
                Your team is burning out. Your revenue is leaking. <span className="font-bold text-2xl">Every. Single. Day.</span>
              </p>
              <div className="mb-8 p-6 bg-white/70 dark:bg-black/30 rounded-xl">
                <p className="text-2xl font-bold text-orange-600 mb-2">
                  🔥 Companies that started 3 months ago are now processing 3x the volume with HALF the team
                </p>
              </div>
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 hover:shadow-glow text-2xl px-16 py-8 mb-6 animate-pulse font-bold" aria-label="Book Your Free ROI Consultation" asChild>
                <a href="https://app.apollo.io/#/meet/managed-meetings/AnandEthiraj/hgz-qap-fw2/30-min" target="_blank" rel="noopener noreferrer">
                  CLAIM YOUR SPOT NOW →
                </a>
              </Button>
              <p className="text-lg text-muted-foreground font-semibold">
                ✅ 30-day risk-free trial • ✅ See ROI in Week 1 • ✅ No setup fees • ✅ Cancel anytime (but you won't want to)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Pricing;