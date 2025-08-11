import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calculator, TrendingUp, TrendingDown, AlertCircle, DollarSign } from "lucide-react";

const RevenueCalculator = () => {
  const [numWorkflows, setNumWorkflows] = useState<number>(0);
  const [hourlyRate, setHourlyRate] = useState<number>(0);
  const [showResults, setShowResults] = useState(false);

  // Fixed assumptions based on user requirements
  const HOURS_SAVED_PER_WORKFLOW = 25; // Conservative estimate
  const AI_IMPLEMENTATION_COST = 16500; // One-time cost in AED
  const MONTHLY_AI_COST = AI_IMPLEMENTATION_COST / 12; // Spread over 12 months

  const calculateROI = () => {
    // Monthly savings calculation (25 hrs saved/workflow × AED hourly rate × number of workflows)
    const withAiSavings = HOURS_SAVED_PER_WORKFLOW * hourlyRate * numWorkflows;
    
    // Without AI (monthly losses from inefficiency)
    const withoutAiLoss = withAiSavings;
    
    // Net monthly benefit (after deducting AI cost)
    const netMonthlyBenefit = withAiSavings - MONTHLY_AI_COST;
    
    // ROI calculations
    const monthlyROI = MONTHLY_AI_COST > 0 ? (netMonthlyBenefit / MONTHLY_AI_COST) * 100 : 0;
    const annualSavings = netMonthlyBenefit * 12;
    const annualROI = (annualSavings / AI_IMPLEMENTATION_COST) * 100;
    
    return {
      withAiSavings: Math.round(withAiSavings),
      withoutAiLoss: Math.round(withoutAiLoss),
      netMonthlyBenefit: Math.round(netMonthlyBenefit),
      monthlyROI: Math.round(monthlyROI),
      annualSavings: Math.round(annualSavings),
      annualROI: Math.round(annualROI),
      monthlyAiCost: Math.round(MONTHLY_AI_COST),
      hoursSaved: HOURS_SAVED_PER_WORKFLOW * numWorkflows
    };
  };

  const handleCalculate = () => {
    setShowResults(true);
  };

  const results = showResults ? calculateROI() : null;

  return (
    <section id="roi-calculator" className="py-20 px-4 bg-gradient-secondary">
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
          <div className="mt-8 bg-accent/30 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Our Conservative Assumptions:</h3>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>• Hours Saved per Workflow/Month: <span className="font-semibold text-foreground">25 hrs</span> (Conservative estimate)</p>
              <p>• AI Implementation Cost: <span className="font-semibold text-foreground">AED 16,500</span> (One-time, spread over 12 months)</p>
              <p>• Calculation Period: <span className="font-semibold text-foreground">12 months</span> (Annual calculation)</p>
            </div>
          </div>
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
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                <h4 className="font-semibold text-blue-800 mb-2">📊 Sample Calculation Example:</h4>
                <div className="text-sm text-blue-700 space-y-1">
                  <p>• Workflows: <span className="font-semibold">6</span> (Automated with Nunar)</p>
                  <p>• Hourly Rate: <span className="font-semibold">AED 50</span> (Average employee cost)</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="workflows">Number of Workflows You Want to Automate</Label>
                <Input 
                  id="workflows" 
                  type="number" 
                  value={numWorkflows} 
                  onChange={e => setNumWorkflows(Number(e.target.value))} 
                  placeholder="e.g., 6" 
                  className="text-lg"
                />
                <p className="text-xs text-muted-foreground">Think: data entry, reports, emails, customer follow-ups, inventory management</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="hourlyrate">Average Employee Hourly Rate (AED)</Label>
                <Input 
                  id="hourlyrate" 
                  type="number" 
                  value={hourlyRate} 
                  onChange={e => setHourlyRate(Number(e.target.value))} 
                  placeholder="e.g., 50" 
                  className="text-lg"
                />
                <p className="text-xs text-muted-foreground">Include: salary, benefits, overhead costs per hour</p>
              </div>

              <Button onClick={handleCalculate} className="w-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 hover:shadow-glow text-white text-lg py-6 animate-pulse">
                💸 Calculate My Financial Bleeding
              </Button>
            </CardContent>
          </Card>

          {/* Results Card */}
          <Card className="shadow-glow border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50">
            <CardHeader>
              <CardTitle className="text-xl text-center">💰 Your Financial Reality Check</CardTitle>
            </CardHeader>
            <CardContent>
              {!showResults ? (
                <div className="flex items-center justify-center h-64 text-muted-foreground">
                  <div className="text-center">
                    <AlertCircle className="h-12 w-12 mx-auto mb-4 opacity-50 text-red-500" />
                    <p className="text-lg font-medium mb-2 text-red-600">Your money is bleeding away...</p>
                    <p className="text-sm text-muted-foreground">Enter your numbers above to see exactly how much you're losing every month.</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {/* Calculation Breakdown */}
                  <div className="bg-white/60 p-4 rounded-lg border">
                    <h4 className="font-semibold mb-3 text-center">📊 Your Calculation Breakdown</h4>
                    <div className="text-sm space-y-2">
                      <p>• <span className="font-medium">{numWorkflows}</span> workflows × <span className="font-medium">{HOURS_SAVED_PER_WORKFLOW}</span> hours saved × <span className="font-medium">AED {hourlyRate}</span> = <span className="font-bold text-green-600">AED {results?.withAiSavings.toLocaleString()}</span></p>
                      <p>• Total hours saved monthly: <span className="font-bold">{results?.hoursSaved}</span> hours</p>
                    </div>
                  </div>

                  {/* Main Results */}
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                        <span className="font-semibold text-green-700">With AI Agents</span>
                      </div>
                      <div className="text-2xl font-bold text-green-700">
                        AED {results?.withAiSavings.toLocaleString()}
                      </div>
                      <div className="text-sm text-green-600">({HOURS_SAVED_PER_WORKFLOW} hrs saved/workflow × AED {hourlyRate} × {numWorkflows} workflows)</div>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingDown className="h-5 w-5 text-red-600" />
                        <span className="font-semibold text-red-700">Without AI (monthly losses from inefficiency)</span>
                      </div>
                      <div className="text-2xl font-bold text-red-700">
                        -AED {results?.withoutAiLoss.toLocaleString()}
                      </div>
                      <div className="text-sm text-red-600">Money you're hemorrhaging RIGHT NOW every month</div>
                    </div>
                  </div>

                  {/* Net Benefit */}
                  <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-1">Net Monthly Benefit</div>
                      <div className="text-3xl font-bold text-primary">
                        AED {results?.netMonthlyBenefit.toLocaleString()}
                      </div>
                      <div className="text-lg font-semibold text-primary mb-2">
                        ROI (Monthly): {results?.monthlyROI}%
                      </div>
                    </div>
                  </div>

                  {/* Annual Results */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
                    <div className="text-center">
                      <h4 className="font-semibold text-blue-800 mb-3">📈 Annual Impact</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-blue-600">Annual Savings</div>
                          <div className="text-xl font-bold text-blue-800">AED {results?.annualSavings.toLocaleString()}</div>
                          <div className="text-xs text-blue-600">(Net Monthly Benefit × 12)</div>
                        </div>
                        <div>
                          <div className="text-blue-600">ROI (Annual)</div>
                          <div className="text-xl font-bold text-blue-800">{results?.annualROI}%</div>
                          <div className="text-xs text-blue-600">Return on Investment</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* AI Cost Breakdown */}
                  <div className="bg-gray-50 p-4 rounded-lg border">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">AI Implementation Cost (monthly)</div>
                      <div className="text-lg font-semibold text-gray-700">-AED {results?.monthlyAiCost.toLocaleString()}</div>
                      <div className="text-xs text-muted-foreground">(1-time: AED 16,500 ÷ 12 months)</div>
                    </div>
                  </div>

                  <div className="text-center mt-4 space-y-3">
                    <div className="bg-red-100 p-3 rounded-lg border border-red-200">
                      <p className="text-sm font-medium text-red-800">
                        ⚠️ Every month you delay = AED {results?.withoutAiLoss.toLocaleString()} lost FOREVER
                      </p>
                    </div>
                    <Button size="lg" className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 hover:shadow-glow text-white animate-pulse">
                      🚨 Stop the Bleeding - Start Free Trial NOW
                    </Button>
                    <div className="text-xs text-muted-foreground">
                      * Conservative estimates based on real client data
                    </div>
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