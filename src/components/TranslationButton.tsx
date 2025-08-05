import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

const TranslationButton = () => {
  const [isArabic, setIsArabic] = useState(false);

  const toggleLanguage = () => {
    setIsArabic(!isArabic);
    
    // Simple text translation for demonstration
    // In production, this would use a proper translation service
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach((element) => {
      const englishText = element.getAttribute('data-en');
      const arabicText = element.getAttribute('data-ar');
      
      if (!isArabic && arabicText) {
        element.textContent = arabicText;
      } else if (isArabic && englishText) {
        element.textContent = englishText;
      }
    });
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