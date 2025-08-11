import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
const Pricing = () => {
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
                  AED 16,500
                </div>
                <div className="text-2xl font-semibold text-muted-foreground">
                  SAR 18,000
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
              
              <Button className="w-full bg-gradient-primary hover:shadow-glow text-lg py-6" aria-label="Start Your Free Trial of AI Automation">
                Start Your Free Trial
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
              <h3 className="text-2xl font-bold mb-4" data-translate data-en="What You Get vs What Competitors Are Missing" data-ar="ما تحصل عليه مقابل ما يفقده المنافسون">⚠️ While competitors charge AED 2,000+ per user monthly...</h3>
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
                          💰 Value: AED {index === 0 ? '8,000' : '12,000'}/month - Yours FREE
                        </p>
                      </div>}
                  </div>
                </CardContent>
              </Card>)}
            
            <div className="text-center mt-8 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl p-6 border-2 border-orange-200">
              <p className="text-orange-700 font-semibold mb-2" data-translate data-en="⚠️ While competitors charge AED 2,000+ per user monthly..." data-ar="⚠️ بينما يتقاضى المنافسون 2,000+ درهم لكل مستخدم شهرياً...">What You Get vs What Competitors Are Missing</p>
              <p className="text-muted-foreground" data-translate data-en="You get unlimited users, Arabic support, and custom workflows for one fixed price." data-ar="تحصل على مستخدمين غير محدودين ودعم العربية وسير عمل مخصص بسعر ثابت واحد.">While others pay per user and struggle with English-only systems, you get everything included.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-50 to-green-50 dark:from-red-950/20 dark:to-green-950/20 rounded-2xl p-8 shadow-glow max-w-5xl mx-auto border">
            <Badge className="bg-red-100 text-red-700 mb-4 animate-pulse">
              🚨 Reality Check: ROI Calculator
            </Badge>
            <h3 className="text-3xl font-bold mb-6" data-translate data-en="The True Cost of Staying Manual" data-ar="التكلفة الحقيقية للبقاء يدوياً">
              The True Cost of Staying Manual
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-red-600 mb-2">AED 48,000</div>
                <p className="text-sm text-muted-foreground">Monthly cost of manual inefficiencies (2 employees x 40 hours x AED 50/hour)</p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-green-600 mb-2">AED 16,500</div>
                <p className="text-sm text-muted-foreground">Nunar delivers 6 simple and medium Al Workflows saving 80 Man Hours per Month</p>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">AED 31,500</div>
                <p className="text-sm text-muted-foreground">Your first year savings = 191% ROI in first year</p>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground mb-6" data-translate data-en="Every month you wait costs you AED 28,500 in lost efficiency. How many months can you afford to lose?" data-ar="كل شهر تنتظره يكلفك 28,500 درهم في الكفاءة المفقودة. كم شهراً يمكنك تحمل خسارته؟">Every month you wait costs you AED 31,500 in lost efficiency. How many months can you afford to lose?</p>
            
            <Button size="lg" className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 hover:shadow-glow text-white text-lg px-12 py-6 animate-pulse" aria-label="Stop Losing Money and Start Free Trial Now" asChild>
              <a href="https://app.apollo.io/#/meet/kms-oa7-aeq/30-min" target="_blank" rel="noopener noreferrer">
                Stop Losing Money - Start Free Trial
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Pricing;