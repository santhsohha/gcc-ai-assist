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
    // Current monthly revenue
    const currentRevenue = customers * avgTransaction;
    
    // With AI agents: 40% cost reduction, 25% efficiency increase
    const aiCostReduction = operationalCosts * 0.4;
    const aiEfficiencyGain = currentRevenue * 0.25;
    const totalAiSavings = aiCostReduction + aiEfficiencyGain;
    
    // Without AI: Lost opportunities due to inefficiency (15% revenue loss)
    const lostOpportunities = currentRevenue * 0.15;
    const continuedHighCosts = operationalCosts;
    const totalLossWithoutAi = lostOpportunities + (continuedHighCosts - (operationalCosts * 0.6));

    return {
      currentRevenue,
      aiSavings: totalAiSavings,
      lossWithoutAi: totalLossWithoutAi,
      netBenefit: totalAiSavings - 16500, // Subtract Nunar's monthly cost
      roiPercentage: ((totalAiSavings - 16500) / 16500) * 100
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const results = showResults ? calculateSavings() : null;

  return (
    <section id="roi-calculator" className="py-20 px-4 bg-gradient-secondary">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200 mb-4">
            ROI Calculator
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Calculate Your <span className="bg-gradient-primary bg-clip-text text-transparent">ROI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See exactly how much money you could save with AI agents vs. losing without them
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
                <Label htmlFor="customers">Number of Monthly Customers</Label>
                <Input
                  id="customers"
                  type="number"
                  value={customers}
                  onChange={(e) => setCustomers(Number(e.target.value))}
                  placeholder="e.g., 100"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="transaction">Average Transaction Value (AED)</Label>
                <Input
                  id="transaction"
                  type="number"
                  value={avgTransaction}
                  onChange={(e) => setAvgTransaction(Number(e.target.value))}
                  placeholder="e.g., 500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="costs">Current Monthly Operational Costs (AED)</Label>
                <Input
                  id="costs"
                  type="number"
                  value={operationalCosts}
                  onChange={(e) => setOperationalCosts(Number(e.target.value))}
                  placeholder="e.g., 10000"
                />
              </div>

              <Button 
                onClick={handleCalculate}
                className="w-full bg-gradient-primary hover:shadow-glow"
              >
                Calculate My Savings
              </Button>
            </CardContent>
          </Card>

          {/* Results Card */}
          <Card className="shadow-glow border-2 border-primary/20">
            <CardHeader>
              <CardTitle>Financial Impact Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              {!showResults ? (
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  <div className="text-center">
                    <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Enter your metrics and click calculate to see results</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
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
                        <div className="text-sm text-green-600">Monthly savings & efficiency gains</div>
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
                        <div className="text-sm text-red-600">Monthly losses from inefficiency</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-1">Net Monthly Benefit</div>
                      <div className="text-3xl font-bold text-primary">
                        AED {results?.netBenefit.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        ROI: {results?.roiPercentage.toFixed(0)}% monthly
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-muted-foreground text-center">
                    * Calculations based on 40% cost reduction and 25% efficiency improvement with AI automation
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RevenueCalculator;