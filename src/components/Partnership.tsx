import { Users, Lightbulb, Puzzle, TrendingUp } from "lucide-react";

const Partnership = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            We Work With Your Team{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Like a Partner
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side - Process steps */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center">
                  <Users className="mr-2 h-5 w-5 text-primary" />
                  We Understand{" "}
                  <span className="text-muted-foreground ml-1">your daily operations</span>
                </h3>
                <p className="text-muted-foreground">
                  Deep dive into your current workflows and pain points
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5 text-primary" />
                  We Design{" "}
                  <span className="text-muted-foreground ml-1">AI workflows tailored to your style</span>
                </h3>
                <p className="text-muted-foreground">
                  Custom automation solutions that match your business processes
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center">
                  <Puzzle className="mr-2 h-5 w-5 text-primary" />
                  We Integrate{" "}
                  <span className="text-muted-foreground ml-1">with your tools (ERP, WhatsApp, Email, Google Sheets)</span>
                </h3>
                <p className="text-muted-foreground">
                  Seamless connection with your existing systems
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg shrink-0">
                4
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                  You Scale{" "}
                  <span className="text-muted-foreground ml-1">without hiring more people</span>
                </h3>
                <p className="text-muted-foreground">
                  Achieve growth targets with your current team size
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Workflow visualization */}
          <div className="relative">
            <div className="bg-gradient-to-br from-card to-muted/10 rounded-2xl p-8 border shadow-lg">
              <div className="text-center mb-6">
                <div className="inline-flex items-center bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium mb-4">
                  <span className="mr-2">🧠</span>
                  Krows as I Becrefteltitini!
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-background rounded-lg p-4 border text-center">
                  <div className="text-2xl font-bold text-primary mb-1">30+</div>
                  <div className="text-xs text-muted-foreground">Workflows Built</div>
                </div>
                <div className="bg-background rounded-lg p-4 border text-center">
                  <div className="text-2xl font-bold text-primary mb-1">2-4</div>
                  <div className="text-xs text-muted-foreground">Weeks to Deploy</div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📱</span>
                  </div>
                  <div className="flex-1 bg-background rounded-lg p-2 border">
                    <div className="text-xs text-muted-foreground">WhatsApp Integration</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">📊</span>
                  </div>
                  <div className="flex-1 bg-background rounded-lg p-2 border">
                    <div className="text-xs text-muted-foreground">ERP/WhatsApp</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">🤖</span>
                  </div>
                  <div className="flex-1 bg-background rounded-lg p-2 border">
                    <div className="text-xs text-muted-foreground">AI Dashboard</div>
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