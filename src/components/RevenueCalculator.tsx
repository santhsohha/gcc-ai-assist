import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calculator, TrendingUp, TrendingDown, AlertCircle, DollarSign } from "lucide-react";
const RevenueCalculator = () => {
  const [workflows, setWorkflows] = useState<number>(100);
  const [avgTransactionValue, setAvgTransactionValue] = useState<number>(500);
  const [monthlyCosts, setMonthlyCosts] = useState<number>(10000);
  const [showResults, setShowResults] = useState(false);

  // Assumptions based on prior version (screenshot)
  const COST_REDUCTION_RATE = 0.4; // 40% cost reduction
  const EFFICIENCY_IMPROVEMENT = 0.25; // 25% efficiency gain
  const AI_IMPLEMENTATION_COST = 16500; // One-time cost in AED
  const MONTHLY_AI_COST = AI_IMPLEMENTATION_COST / 12; // Spread over 12 months

  const calculateROI = () => {
    // With AI: Savings from cost reduction + efficiency gains on transactions
    const withAiSavings = monthlyCosts * COST_REDUCTION_RATE + workflows * avgTransactionValue * EFFICIENCY_IMPROVEMENT;

    // Without AI: illustrative monthly losses equals the same opportunity not realized
    const withoutAiLoss = withAiSavings;

    // Net monthly benefit after monthly AI cost
    const netMonthlyBenefit = withAiSavings - MONTHLY_AI_COST;

    // ROI calculations
    const monthlyROI = MONTHLY_AI_COST > 0 ? netMonthlyBenefit / MONTHLY_AI_COST * 100 : 0;
    const annualSavings = netMonthlyBenefit * 12;
    const annualROI = AI_IMPLEMENTATION_COST > 0 ? annualSavings / AI_IMPLEMENTATION_COST * 100 : 0;
    return {
      withAiSavings: Math.round(withAiSavings),
      withoutAiLoss: Math.round(withoutAiLoss),
      netMonthlyBenefit: Math.round(netMonthlyBenefit),
      monthlyROI: Math.round(monthlyROI),
      annualSavings: Math.round(annualSavings),
      annualROI: Math.round(annualROI),
      monthlyAiCost: Math.round(MONTHLY_AI_COST)
    };
  };
  const handleCalculate = () => {
    setShowResults(true);
  };
  const results = showResults ? calculateROI() : null;
  return <section id="roi-calculator" className="py-20 px-4 bg-gradient-secondary">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-red-50 text-red-700 border-red-200 mb-4">
            💸 ROI Calculator
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Stop Bleeding Money: <span className="bg-gradient-primary bg-clip-text text-transparent">Calculate Your EXACT Losses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every month you delay automation costs you thousands. See exactly how much money you're hemorrhaging right now vs. what you could be saving with AI agents.
          </p>
          
          {/* Assumptions Section */}
          
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Card */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calculator className="h-5 w-5 text-primary" />
                <span>Your Business Metrics</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 mb-6">
                <h4 className="font-semibold text-orange-800 mb-2">📊 Sample Calculation Example:</h4>
                <div className="text-sm text-orange-700 space-y-1">
                  <p>• Workflows: <span className="font-semibold">100</span></p>
                  <p>• Average Transaction Value: <span className="font-semibold">AED 500</span></p>
                  <p>• Current Monthly Operational Costs: <span className="font-semibold">AED 10,000</span></p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="workflows">Number of AI Workflows</Label>
                <Input id="workflows" type="number" value={workflows} onChange={e => setWorkflows(Number(e.target.value))} placeholder="e.g., 100" className="text-lg" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="avg">Average Transaction Value (AED)</Label>
                <Input id="avg" type="number" value={avgTransactionValue} onChange={e => setAvgTransactionValue(Number(e.target.value))} placeholder="e.g., 500" className="text-lg" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="costs">Current Monthly Operational Costs (AED)</Label>
                <Input id="costs" type="number" value={monthlyCosts} onChange={e => setMonthlyCosts(Number(e.target.value))} placeholder="e.g., 10000" className="text-lg" />
              </div>

              <Button onClick={handleCalculate} className="w-full bg-gradient-primary hover:shadow-glow text-white text-lg py-6">
                Calculate My Savings
              </Button>
            </CardContent>
          </Card>

          {/* Results Card */}
          <Card className="shadow-glow border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50">
            <CardHeader>
              <CardTitle className="text-xl text-center">💰 Your Financial Reality Check</CardTitle>
            </CardHeader>
            <CardContent>
              {!showResults ? <div className="grid grid-cols-1 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-green-700">With AI Agents</span>
                    </div>
                    <div className="text-2xl font-bold text-green-700">+AED 16,500</div>
                    <div className="text-sm text-green-600">Monthly savings & efficiency gains</div>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <div className="flex items-center space-x-2 mb-2">
                      <TrendingDown className="h-5 w-5 text-red-600" />
                      <span className="font-semibold text-red-700">Without AI</span>
                    </div>
                    <div className="text-2xl font-bold text-red-700">-AED 11,500</div>
                    <div className="text-sm text-red-600">Monthly losses from inefficiency</div>
                  </div>

                  <div className="bg-muted/50 p-6 rounded-lg border border-border/50">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-1">Net Monthly Benefit</div>
                      <div className="text-3xl font-bold text-foreground">AED 0</div>
                      <div className="text-sm text-muted-foreground">ROI: 0% monthly</div>
                    </div>
                  </div>

                  <div className="text-center text-xs text-muted-foreground">
                    * Calculations based on 40% cost reduction and 25% efficiency improvement with AI automation
                  </div>
                </div> : <div className="space-y-6">
                  {/* Main Results */}
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-green-700">With AI Agents</span>
                      </div>
                      <div className="text-2xl font-bold text-green-700">
                        +AED {results?.withAiSavings.toLocaleString()}
                      </div>
                      <div className="text-sm text-green-600">Monthly savings & efficiency gains</div>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingDown className="h-5 w-5 text-red-600" />
                        <span className="font-semibold text-red-700">Without AI</span>
                      </div>
                      <div className="text-2xl font-bold text-red-700">
                        -AED {results?.withoutAiLoss.toLocaleString()}
                      </div>
                      <div className="text-sm text-red-600">Monthly losses from inefficiency</div>
                    </div>
                  </div>

                  {/* Net Benefit */}
                  <div className="bg-muted/50 p-6 rounded-lg border border-border/50">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-1">Net Monthly Benefit</div>
                      <div className="text-3xl font-bold text-foreground">
                        AED {results?.netMonthlyBenefit.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">ROI: {results?.monthlyROI}% monthly</div>
                    </div>
                  </div>

                  {/* Annual Results */}
                  <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-lg border border-orange-200">
                    <div className="text-center">
                      <h4 className="font-semibold text-orange-800 mb-3">📈 Annual Impact</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-orange-700">Annual Savings</div>
                          <div className="text-xl font-bold text-orange-900">AED {results?.annualSavings.toLocaleString()}</div>
                          <div className="text-xs text-orange-700">(Net Monthly Benefit × 12)</div>
                        </div>
                        <div>
                          <div className="text-orange-700">ROI (Annual)</div>
                          <div className="text-xl font-bold text-orange-900">{results?.annualROI}%</div>
                          <div className="text-xs text-orange-700">Return on Investment</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Assumptions Note */}
                  <div className="text-center text-xs text-muted-foreground">
                    * Calculations based on 40% cost reduction and 25% efficiency improvement with AI automation
                  </div>

                  <div className="text-center mt-2">
                    <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-white">
                      🚀 Start Free Trial - Automate 2 Processes
                    </Button>
                  </div>
                </div>}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default RevenueCalculator;