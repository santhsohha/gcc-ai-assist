import { Check, X } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Compare vs Traditional Solutions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Generic Software */}
            <div className="bg-card rounded-xl p-8 border shadow-sm">
              <div className="flex items-center mb-6">
                <X className="h-6 w-6 text-red-500 mr-3" />
                <h3 className="text-xl font-bold text-red-600">Generic Software</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-muted-foreground">Per-user licensing fees</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-muted-foreground">English-only interface</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-muted-foreground">Rigid, non-customizable</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-muted-foreground">No WhatsApp integration</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-muted-foreground">Self-service configuration</p>
                </div>
              </div>
            </div>

            {/* Nunar AI Agents */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 rounded-xl p-8 border border-green-200 dark:border-green-800">
              <div className="flex items-center mb-6">
                <Check className="h-6 w-6 text-green-500 mr-3" />
                <h3 className="text-xl font-bold text-green-600">Nunar AI Agents</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-muted-foreground">Fixed monthly retainer</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-muted-foreground">Full Arabic/English support</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-muted-foreground">100% custom-built for you</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-muted-foreground">Native WhatsApp integration</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-muted-foreground">Full-service consultancy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-xl font-semibold text-foreground mb-4">
            Choose the solution built for GCC businesses
          </p>
          <p className="text-lg text-muted-foreground">
            Stop adapting to software. Get software that adapts to you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;