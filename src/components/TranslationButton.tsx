import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

const TranslationButton = () => {
  const [isArabic, setIsArabic] = useState(false);

  const toggleLanguage = () => {
    setIsArabic(!isArabic);
    
    // In a real implementation, this would trigger translation
    // For now, we'll just toggle the state and could integrate with a translation service
    if (!isArabic) {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center space-x-2 border-primary/20 hover:bg-primary/10"
    >
      <Languages className="h-4 w-4" />
      <span>{isArabic ? 'English' : 'عربي'}</span>
    </Button>
  );
};

export default TranslationButton;