import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CTA = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-hero">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-background/90 backdrop-blur-md shadow-glow border-2 border-primary/20">
            <CardContent className="p-12">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Ready to <span className="bg-gradient-primary bg-clip-text text-transparent">Automate Your Business?</span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join 30+ GCC businesses saving 80+ hours monthly with custom AI agents. Start your risk-free trial today.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex justify-center">
                  <div className="bg-gradient-secondary rounded-2xl p-6 text-left max-w-md">
                    <h3 className="font-bold text-lg mb-3 text-center">🎁 Free Trial Includes:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        2 workflows automated for FREE
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        30-day money-back guarantee
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        Full Arabic/English setup
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        WhatsApp integration included
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✓</span>
                        No setup fees or contracts
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-6 text-white"
                >
                  🚀 Start Free Trial - Automate 2 Processes
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
                >
                  📞 Book Strategy Call
                </Button>
              </div>

              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex justify-center items-center space-x-6">
                  <span>🇦🇪 UAE Based Team</span>
                  <span>📱 WhatsApp: +971-XX-XXXXXXX</span>
                  <span>📧 hello@nunar.ai</span>
                </div>
                
                <p className="max-w-lg mx-auto">
                  <strong>Still unsure?</strong> We'll analyze one of your workflows for FREE and show you exactly how AI can automate it. No obligation.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTA;