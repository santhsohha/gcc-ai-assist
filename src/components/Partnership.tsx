import { Users, Lightbulb, Puzzle, TrendingUp } from "lucide-react";

const Partnership = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            We Work With Your Team{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Like a Partner
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just sell you software. We become your AI transformation partner.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left side - Process steps */}
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl shrink-0 shadow-lg">
                1
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground flex items-center">
                  <Users className="mr-3 h-6 w-6 text-primary" />
                  We Understand{" "}
                  <span className="text-muted-foreground ml-2 font-normal">your daily operations</span>
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Deep dive into your current workflows and pain points. We spend time learning how your team actually works.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl shrink-0 shadow-lg">
                2
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground flex items-center">
                  <Lightbulb className="mr-3 h-6 w-6 text-primary" />
                  We Design{" "}
                  <span className="text-muted-foreground ml-2 font-normal">AI workflows tailored to your style</span>
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Custom automation solutions that match your business processes. No generic templates.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl shrink-0 shadow-lg">
                3
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground flex items-center">
                  <Puzzle className="mr-3 h-6 w-6 text-primary" />
                  We Integrate{" "}
                  <span className="text-muted-foreground ml-2 font-normal">with your existing tools</span>
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Seamless connection with ERP, WhatsApp, Email, Google Sheets, and all your current systems.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl shrink-0 shadow-lg">
                4
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground flex items-center">
                  <TrendingUp className="mr-3 h-6 w-6 text-primary" />
                  You Scale{" "}
                  <span className="text-muted-foreground ml-2 font-normal">without hiring more people</span>
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Achieve growth targets with your current team size. Focus on strategy, not operations.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Results showcase */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-gradient-to-br from-card to-muted/10 rounded-3xl p-8 border shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-gradient-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold mb-6 shadow-lg">
                  <span className="mr-2">🧠</span>
                  AI-Powered Business Transformation
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-background to-muted/20 rounded-2xl p-6 border text-center shadow-sm">
                    <div className="text-3xl font-bold text-primary mb-2">30+</div>
                    <div className="text-sm text-muted-foreground font-medium">Workflows Built</div>
                  </div>
                  <div className="bg-gradient-to-br from-background to-muted/20 rounded-2xl p-6 border text-center shadow-sm">
                    <div className="text-3xl font-bold text-primary mb-2">2-4</div>
                    <div className="text-sm text-muted-foreground font-medium">Weeks to Deploy</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 bg-background rounded-xl p-4 border shadow-sm">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-xl flex items-center justify-center">
                    <span className="text-green-600 text-lg">📱</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-foreground">WhatsApp Integration</div>
                    <div className="text-xs text-muted-foreground">Real-time customer communication</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-background rounded-xl p-4 border shadow-sm">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-xl flex items-center justify-center">
                    <span className="text-blue-600 text-lg">📊</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-foreground">ERP/System Integration</div>
                    <div className="text-xs text-muted-foreground">Unified data management</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 bg-background rounded-xl p-4 border shadow-sm">
                  <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/20 rounded-xl flex items-center justify-center">
                    <span className="text-purple-600 text-lg">🤖</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-foreground">AI Dashboard</div>
                    <div className="text-xs text-muted-foreground">Smart analytics & insights</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;