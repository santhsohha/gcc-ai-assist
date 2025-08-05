import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Shield, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Session Booked Successfully!",
        description: "We'll send you a calendar invite within 24 hours.",
      });
      setIsSubmitting(false);
      setName("");
      setEmail("");
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Ready to{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  3X Your Output
                </span>{" "}
                Without Hiring Anyone?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Book a free strategy session and we'll show you exactly how AI agents can automate your 
                repetitive tasks and scale your operations — starting in just 2 weeks.
              </p>
            </div>

            <div className="bg-card rounded-3xl p-8 lg:p-12 border shadow-xl max-w-2xl mx-auto">
              <div className="mb-8">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-bold text-foreground">Book My Strategy Session</h3>
                </div>
                <p className="text-muted-foreground">
                  Get a personalized AI automation plan for your business — completely free.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your full name"
                      className="h-12 text-base"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold">
                      Business Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@company.com"
                      className="h-12 text-base"
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 text-lg font-semibold bg-gradient-primary hover:shadow-glow transition-all duration-300"
                >
                  {isSubmitting ? (
                    "Booking Your Session..."
                  ) : (
                    <>
                      <Calendar className="mr-2 h-5 w-5" />
                      Book My FREE Strategy Session
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-8 space-y-4">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4 text-green-600" />
                  <span>We will never share your information with anyone</span>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 bg-green-50 dark:bg-green-950/20 px-4 py-2 rounded-full border border-green-200 dark:border-green-800">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-700 dark:text-green-400">
                      Your privacy is our priority
                    </span>
                  </div>
                </div>

                <div className="text-center text-xs text-muted-foreground">
                  <p>
                    100% free consultation • No obligations • Instant calendar booking
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary text-xl">📊</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Free Analysis</h4>
                <p className="text-sm text-muted-foreground">
                  We'll analyze your current operations and identify automation opportunities
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary text-xl">🎯</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Custom Strategy</h4>
                <p className="text-sm text-muted-foreground">
                  Get a tailored roadmap to automate your specific business processes
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary text-xl">⚡</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Quick Results</h4>
                <p className="text-sm text-muted-foreground">
                  See how you can start saving time and money within 2-4 weeks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;