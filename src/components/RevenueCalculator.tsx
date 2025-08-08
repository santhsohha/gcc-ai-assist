import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calculator, TrendingUp, TrendingDown } from "lucide-react";
const RevenueCalculator = () => {
  const [customers, setCustomers] = useState<number>(100);
  const [avgTransaction, setAvgTransaction] = useState<number>(500);
  const [operationalCosts, setOperationalCosts] = useState<number>(10000);
  const [showResults, setShowResults] = useState(false);
  const calculateSavings = () => {
    // Enhanced calculations for better impact demonstration
    const workflowsValue = customers * 250; // Each workflow saves AED 250/month
    const transactionEfficiency = avgTransaction * customers * 0.35; // 35% efficiency gain
    const operationalSavings = operationalCosts * 0.45; // 45% operational cost reduction
    
    // Total AI savings (monthly)
    const totalMonthlySavings = workflowsValue + transactionEfficiency + operationalSavings;
    
    // Current waste without AI
    const inefficiencyLoss = operationalCosts * 0.25; // 25% loss due to inefficiencies
    const opportunityCost = (avgTransaction * customers * 0.20); // 20% missed opportunities
    const totalMonthlyWaste = inefficiencyLoss + opportunityCost;
    
    // Net benefit after Nunar cost (AED 16,500)
    const netMonthlySavings = totalMonthlySavings - 16500;
    const monthlyROI = netMonthlySavings > 0 ? (netMonthlySavings / 16500) * 100 : 0;
    
    return {
      currentRevenue: avgTransaction * customers,
      aiSavings: Math.round(totalMonthlySavings),
      lossWithoutAi: Math.round(totalMonthlyWaste),
      netBenefit: Math.round(Math.max(netMonthlySavings, 0)),
      roiPercentage: Math.round(Math.max(monthlyROI, 0))
    };
  };
  const handleCalculate = () => {
    setShowResults(true);
  };
  const results = showResults ? calculateSavings() : null;
  return <section id="roi-calculator" className="py-20 px-4 bg-gradient-secondary">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200 mb-4">
            ROI Calculator
          </Badge>
            <h2 className="text-4xl font-bold mb-6">
            Stop Bleeding Money: <span className="bg-gradient-primary bg-clip-text text-transparent">Calculate Your Losses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every day you delay costs you thousands. See exactly how much money you're losing right now vs. what you could be saving with AI automation.
          </p>
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
              <div className="space-y-2">
                <Label htmlFor="customers">How many repetitive processes do you have?</Label>
                <Input id="customers" type="number" value={customers} onChange={e => setCustomers(Number(e.target.value))} placeholder="e.g., 15 daily processes" />
                <p className="text-xs text-muted-foreground">Think: data entry, reports, emails, customer follow-ups</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="transaction">What's your average monthly revenue per process? (AED)</Label>
                <Input id="transaction" type="number" value={avgTransaction} onChange={e => setAvgTransaction(Number(e.target.value))} placeholder="e.g., 5,000" />
                <p className="text-xs text-muted-foreground">Revenue impact if each process was 50% more efficient</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="costs">What do you spend monthly on manual work? (AED)</Label>
                <Input id="costs" type="number" value={operationalCosts} onChange={e => setOperationalCosts(Number(e.target.value))} placeholder="e.g., 25,000" />
                <p className="text-xs text-muted-foreground">Include: salaries, overtime, error corrections, delays</p>
              </div>

              <Button onClick={handleCalculate} className="w-full bg-gradient-primary hover:shadow-glow text-lg py-6">
                💸 Show Me How Much I'm Losing
              </Button>
            </CardContent>
          </Card>

          {/* Results Card */}
          <Card className="shadow-glow border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-xl">💰 Your Financial Reality Check</CardTitle>
            </CardHeader>
            <CardContent>
              {!showResults ? <div className="flex items-center justify-center h-64 text-muted-foreground">
                  <div className="text-center">
                    <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium mb-2">Stop the bleeding.</p>
                    <p className="text-sm text-muted-foreground">Enter your numbers above to see exactly how much money you're losing every single day.</p>
                  </div>
                </div> : <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="h-5 w-5 text-green-600" />
                          <span className="font-semibold text-green-700">With AI Agents</span>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="text-2xl font-bold text-green-700">
                          +AED {results?.aiSavings.toLocaleString()}
                        </div>
                        <div className="text-sm text-green-600">Monthly recovery with AI automation</div>
                      </div>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <TrendingDown className="h-5 w-5 text-red-600" />
                          <span className="font-semibold text-red-700">Without AI</span>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="text-2xl font-bold text-red-700">
                          -AED {results?.lossWithoutAi.toLocaleString()}
                        </div>
                        <div className="text-sm text-red-600">Money you're bleeding RIGHT NOW (monthly)</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-1">Your Net Monthly Profit After Nunar</div>
                      <div className="text-3xl font-bold text-primary">
                        AED {results?.netBenefit.toLocaleString()}
                      </div>
                      <div className="text-lg font-semibold text-primary mb-2">
                        ROI: {results?.roiPercentage}% monthly
                      </div>
                      <div className="text-sm text-muted-foreground bg-white/50 p-2 rounded">
                        Every month you wait = AED {results?.lossWithoutAi.toLocaleString()} lost forever
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <Button size="lg" className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 hover:shadow-glow text-white animate-pulse">
                      Stop Losing Money - Start Free Trial
                    </Button>
                    <div className="text-xs text-muted-foreground mt-2">
                      * Based on real client results: 45% cost reduction, 35% efficiency gains
                    </div>
                  </div>
                </div>}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default RevenueCalculator;