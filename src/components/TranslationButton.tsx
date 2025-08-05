import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

const TranslationButton = () => {
  const [isArabic, setIsArabic] = useState(false);

  const toggleLanguage = () => {
    const newLanguage = !isArabic;
    setIsArabic(newLanguage);
    
    // Update document direction for Arabic
    document.documentElement.dir = newLanguage ? 'rtl' : 'ltr';
    document.documentElement.lang = newLanguage ? 'ar' : 'en';
    
    // Translate all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach((element) => {
      const englishText = element.getAttribute('data-en');
      const arabicText = element.getAttribute('data-ar');
      
      if (newLanguage && arabicText) {
        // Switch to Arabic
        element.textContent = arabicText;
        (element as HTMLElement).style.fontFamily = 'Cairo, sans-serif';
      } else if (!newLanguage && englishText) {
        // Switch to English
        element.textContent = englishText;
        (element as HTMLElement).style.fontFamily = '';
      }
    });

    // Update button texts
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      if (button.textContent?.includes('Start Free Trial')) {
        button.textContent = newLanguage ? 'ابدأ النسخة التجريبية المجانية' : 'Start Free Trial';
      } else if (button.textContent?.includes('Watch Demo')) {
        button.textContent = newLanguage ? 'شاهد العرض التوضيحي' : 'Watch Demo';
      } else if (button.textContent?.includes('Learn More')) {
        button.textContent = newLanguage ? 'اعرف المزيد' : 'Learn More';
      } else if (button.textContent?.includes('Get Started')) {
        button.textContent = newLanguage ? 'ابدأ الآن' : 'Get Started';
      }
    });

    // Update navigation links
    const navLinks = document.querySelectorAll('a[href*="#"]');
    navLinks.forEach((link) => {
      if (link.textContent?.includes('How It Works')) {
        link.textContent = newLanguage ? 'كيف يعمل' : 'How It Works';
      } else if (link.textContent?.includes('ROI Calculator')) {
        link.textContent = newLanguage ? 'حاسبة العائد على الاستثمار' : 'ROI Calculator';
      } else if (link.textContent?.includes('Pricing')) {
        link.textContent = newLanguage ? 'الأسعار' : 'Pricing';
      } else if (link.textContent?.includes('FAQ')) {
        link.textContent = newLanguage ? 'الأسئلة الشائعة' : 'FAQ';
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