import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";
import { sanitizeInput, isValidEmail, checkRateLimit, getRateLimitIdentifier } from "@/lib/security";
import { useToast } from "@/hooks/use-toast";

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from the top of the page
      if (e.clientY <= 0) {
        timeoutId = setTimeout(() => {
          setIsVisible(true);
        }, 100);
      }
    };

    const handleMouseEnter = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Input validation and sanitization
    const sanitizedEmail = sanitizeInput(email);
    
    if (!isValidEmail(sanitizedEmail)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    // Rate limiting
    const rateLimitId = getRateLimitIdentifier();
    if (!checkRateLimit(rateLimitId, 3, 300000)) { // 3 attempts per 5 minutes
      toast({
        title: "Too Many Attempts",
        description: "Please wait a few minutes before trying again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setIsVisible(false);
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-glow border-2 border-primary/20 animate-in fade-in zoom-in duration-300">
        <CardHeader className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-2 h-6 w-6 p-0"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-2xl text-center bg-gradient-primary bg-clip-text text-transparent">
            Why are you leaving early?
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-center text-muted-foreground">
            Subscribe to our newsletter to stay updated on AI automation solutions for UAE businesses!
          </p>
          
          <form onSubmit={handleSubscribe} className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(sanitizeInput(e.target.value))}
              required
              className="w-full"
              maxLength={254}
              disabled={isSubmitting}
            />
            <Button 
              type="submit"
              className="w-full bg-gradient-primary hover:shadow-glow"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe to Newsletter"}
            </Button>
          </form>
          
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Get exclusive insights on AI automation for GCC businesses
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ExitIntentPopup;