import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, Check, Clock, TrendingDown, AlertTriangle } from "lucide-react";
const CompareSection = () => {
  return <section className="py-20 px-4 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 dark:from-red-950/10 dark:via-orange-950/10 dark:to-yellow-950/10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <Badge variant="destructive" className="bg-red-100 text-red-700 border-red-200 mb-4 animate-pulse">
            ⚠️ Critical Decision Alert
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" data-translate data-en="Your Competitors Are Already Moving Ahead" data-ar="منافسوك يتقدمون بالفعل">
            Your Competitors Are Already Moving Ahead
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto" data-translate data-en="While you're stuck with manual processes, smart GCC businesses are already automating and scaling 3x faster. How much longer can you afford to wait?" data-ar="بينما أنت عالق في العمليات اليدوية، الشركات الذكية في دول الخليج تقوم بالأتمتة والنمو بسرعة 3 أضعاف. كم من الوقت يمكنك تحمل الانتظار؟">
            While you're stuck with manual processes, smart GCC businesses are already automating and scaling 3x faster. How much longer can you afford to wait?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Generic Software - Pain Points */}
          <Card className="border-2 border-red-200 dark:border-red-800 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-red-600"></div>
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
                  <X className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-red-600" data-translate data-en="Generic Software (Your Current Struggle)" data-ar="البرامج العامة (كفاحك الحالي)">
                  Generic Software (Your Current Struggle)
                </h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <TrendingDown className="h-5 w-5 text-red-500 mt-1" />
                  <div>
                    <p className="font-semibold text-red-700">Bleeding Money on Per-User Fees</p>
                    <p className="text-sm text-red-600">Every new employee = Higher costs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="h-5 w-5 text-red-500 mt-1" />
                  <div>
                    <p className="font-semibold text-red-700">Slow Onboarding = Lost Time</p>
                    <p className="text-sm text-red-600">New hires take weeks to become productive</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-red-500 mt-1" />
                  <div>
                    <p className="font-semibold text-red-700">Rigid System = No Adaptation</p>
                    <p className="text-sm text-red-600">Forces YOUR business to change</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <X className="h-5 w-5 text-red-500 mt-1" />
                  <div>
                    <p className="font-semibold text-red-700">No WhatsApp = Communication Chaos</p>
                    <p className="text-sm text-red-600">Critical for MENA market completely ignored</p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-4 border border-red-200">
                <p className="text-red-700 font-medium text-center">
                  Result: Your team wastes 6+ hours daily on manual workarounds
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Nunar AI Agents - Solutions */}
          <Card className="border-2 border-green-200 dark:border-green-800 shadow-lg relative overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-500 to-emerald-500"></div>
            <div className="absolute top-4 right-4">
              <Badge className="bg-green-100 text-green-700 animate-pulse">
                LIMITED TIME
              </Badge>
            </div>
            <CardContent className="p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                  <Check className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-green-700" data-translate data-en="Nunar AI Agents (Your Growth Accelerator)" data-ar="وكلاء نونار الذكية (محرك نموك)">
                  Nunar AI Agents (Your Growth Accelerator)
                </h3>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold text-green-700">Fixed Monthly Price = Predictable Costs</p>
                    <p className="text-sm text-green-700">Scale without bleeding money</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold text-green-700">Instant Onboarding = Faster Execution</p>
                    <p className="text-sm text-green-700">New team members hit the ground running</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold text-green-700">100% Custom = Perfect Fit</p>
                    <p className="text-sm text-green-700">Built around YOUR exact processes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold text-green-700">WhatsApp Native = Seamless Flow</p>
                    <p className="text-sm text-green-700">Works exactly how MENA businesses operate</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 mb-6">
                <p className="text-green-700 font-medium text-center">
                  Result: Your team saves 80+ hours monthly and focuses on growth
                </p>
              </div>

              <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:shadow-glow text-lg py-6" aria-label="Get Your AI Agents Now - Limited Spots Available">
                Get Your AI Agents Now - Limited Spots
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-gradient-to-r from-orange-900/10 to-red-900/10 rounded-2xl p-8 border-2 border-orange-200">
          <h3 className="text-3xl font-bold mb-4 text-orange-600" data-translate data-en="Stop Adapting to Software. Get Software That Adapts to You." data-ar="توقف عن التكيف مع البرمجيات. احصل على برمجيات تتكيف معك.">
            Stop Adapting to Software. Get Software That Adapts to You.
          </h3>
          <p className="text-lg text-muted-foreground mb-6" data-translate data-en="Every day you delay, you're losing money to inefficiency while competitors pull ahead. Only 15 spots available for Q4 2024." data-ar="كل يوم تأخر فيه، تخسر المال بسبب عدم الكفاءة بينما المنافسون يتقدمون. 15 مكان فقط متاح للربع الأخير من 2024.">
            Every day you delay, you're losing money to inefficiency while competitors pull ahead. Only 15 spots available for Q4 2024.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-6" aria-label="Secure Your Spot for AI Automation Service">
              Secure Your Spot Now
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6" aria-label="See Live Demo of AI Agents">
              See Live Demo
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default CompareSection;