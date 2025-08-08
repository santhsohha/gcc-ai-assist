import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Cookie, Settings, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const acceptSelected = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  const rejectAll = () => {
    const rejected = {
      essential: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setPreferences(rejected);
    localStorage.setItem('cookie-consent', JSON.stringify(rejected));
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <>
      <Card className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md bg-background/95 backdrop-blur-sm border shadow-lg z-50">
        <div className="p-6">
          <div className="flex items-start space-x-3">
            <Cookie className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-sm font-semibold mb-2">Cookie Preferences</h3>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                We use cookies to enhance your experience, analyze site traffic, and personalize content. 
                This website complies with GDPR and UAE data protection regulations. 
                You can manage your preferences or learn more in our{" "}
                <a href="/privacy-policy" className="text-primary hover:underline">
                  Privacy Policy
                </a>.
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button 
                  onClick={acceptAll}
                  size="sm" 
                  className="bg-gradient-primary hover:shadow-glow text-xs"
                >
                  Accept All
                </Button>
                <Button 
                  onClick={rejectAll}
                  variant="outline" 
                  size="sm"
                  className="text-xs"
                >
                  Reject All
                </Button>
                <Button 
                  onClick={() => setShowSettings(true)}
                  variant="ghost" 
                  size="sm"
                  className="text-xs"
                >
                  <Settings className="h-3 w-3 mr-1" />
                  Customize
                </Button>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={rejectAll}
              className="p-1 h-auto"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>

      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg">Cookie Settings</DialogTitle>
            <DialogDescription className="text-sm">
              Choose which types of cookies you'd like to allow. Essential cookies are required for basic functionality.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <label className="text-sm font-medium">Essential Cookies</label>
                  <p className="text-xs text-muted-foreground">
                    Required for basic website functionality and security.
                  </p>
                </div>
                <Switch checked={true} disabled />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <label className="text-sm font-medium">Analytics Cookies</label>
                  <p className="text-xs text-muted-foreground">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                <Switch 
                  checked={preferences.analytics}
                  onCheckedChange={(checked) => 
                    setPreferences(prev => ({ ...prev, analytics: checked }))
                  }
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <label className="text-sm font-medium">Marketing Cookies</label>
                  <p className="text-xs text-muted-foreground">
                    Used to deliver personalized advertising and track campaigns.
                  </p>
                </div>
                <Switch 
                  checked={preferences.marketing}
                  onCheckedChange={(checked) => 
                    setPreferences(prev => ({ ...prev, marketing: checked }))
                  }
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <label className="text-sm font-medium">Functional Cookies</label>
                  <p className="text-xs text-muted-foreground">
                    Enable enhanced features and personalization.
                  </p>
                </div>
                <Switch 
                  checked={preferences.functional}
                  onCheckedChange={(checked) => 
                    setPreferences(prev => ({ ...prev, functional: checked }))
                  }
                />
              </div>
            </div>
            
            <div className="flex gap-2 pt-4">
              <Button onClick={acceptSelected} className="flex-1 bg-gradient-primary hover:shadow-glow">
                Save Preferences
              </Button>
              <Button variant="outline" onClick={() => setShowSettings(false)} className="flex-1">
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieBanner;