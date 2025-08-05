import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, BarChart3, Target, Zap, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const ProcessOptimization = () => {
  const features = [
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Workflow Analysis",
      description: "Deep dive analysis of your current processes to identify bottlenecks and automation opportunities.",
      benefits: ["Process mapping", "Bottleneck identification", "Efficiency scoring"]
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Process Redesign",
      description: "Redesign workflows with AI integration points for maximum efficiency and minimal disruption.",
      benefits: ["Optimized workflows", "AI integration points", "Change management"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Automation Implementation",
      description: "Strategic implementation of AI agents at key process points with measurable outcomes.",
      benefits: ["Phased implementation", "Training included", "Performance monitoring"]
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Continuous Improvement",
      description: "Ongoing optimization and refinement based on performance data and changing business needs.",
      benefits: ["Monthly reviews", "Performance tracking", "Continuous optimization"]
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Current State Analysis",
      description: "We map your existing processes and identify inefficiencies",
      duration: "Week 1-2"
    },
    {
      step: "2", 
      title: "Opportunity Assessment",
      description: "Evaluate automation potential and ROI for each process",
      duration: "Week 3"
    },
    {
      step: "3",
      title: "Solution Design",
      description: "Design optimized workflows with AI integration points",
      duration: "Week 4-5"
    },
    {
      step: "4",
      title: "Implementation",
      description: "Deploy AI agents and train your team on new processes",
      duration: "Week 6-8"
    },
    {
      step: "5",
      title: "Monitoring & Optimization",
      description: "Track performance and continuously refine for better results",
      duration: "Ongoing"
    }
  ];

  const industries = [
    "Manufacturing process optimization",
    "Healthcare workflow streamlining", 
    "Logistics and supply chain enhancement",
    "Retail inventory and sales processes",
    "Financial services automation",
    "Customer service improvement",
    "HR and recruitment optimization",
    "Quality control standardization"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-secondary">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200 mb-6">
              📊 Process Optimization
            </Badge>
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Transform Your Workflows
              </span>
              <br />
              With AI-Driven Optimization
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Analyze, streamline, and supercharge your business processes with AI agents. 
              We don't just automate - we optimize for maximum efficiency and measurable results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Start Process Analysis
              </Button>
              <Button variant="outline" size="lg">
                Download Optimization Guide
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Process Optimization</span> Approach
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Systematic analysis and improvement of your workflows with AI integration for lasting results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="text-green-500 mr-2">✓</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Results Section */}
          <div className="bg-accent/50 rounded-2xl p-8 mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Proven</span> Results
            </h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">80%</div>
                <p className="text-muted-foreground">Average time savings</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">45%</div>
                <p className="text-muted-foreground">Cost reduction</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">99%</div>
                <p className="text-muted-foreground">Process accuracy</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">3x</div>
                <p className="text-muted-foreground">Faster execution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">5-Step</span> Optimization Process
            </h2>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl">
                    {step.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <Card className="bg-background/80">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                        <div className="mt-4 md:mt-0">
                          <Badge variant="secondary">{step.duration}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Process Optimization</span> Across Industries
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center space-x-2 bg-accent/50 rounded-lg p-4">
                <span className="text-primary">📈</span>
                <span className="text-sm">{industry}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
              Optimize Your Processes Today
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProcessOptimization;