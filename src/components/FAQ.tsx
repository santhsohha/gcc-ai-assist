import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const FAQ = () => {
  const faqs = [
    {
      question: "What is your AI-powered service?",
      answer: "Nunar builds custom AI agents that automate repetitive business processes for GCC SMBs. Our AI agents work like virtual employees, handling tasks such as WhatsApp coordination, vendor follow-ups, report generation, and customer service - all with full Arabic/English support tailored to your specific workflows."
    },
    {
      question: "How does it work?",
      answer: "Our process is simple: (1) We analyze your current manual workflows over 1-2 weeks, (2) Build custom AI agents specifically for your business in weeks 3-4, (3) Deploy and integrate them into your existing systems (ERP, WhatsApp, Google Sheets) in week 5+. The AI agents then work 24/7, handling tasks exactly as your best employee would, but faster and without breaks."
    },
    {
      question: "What are the benefits of using AI agents?",
      answer: "You'll save 80+ hours monthly, reduce operational costs by 40%, increase efficiency by 25%, and scale your business without hiring more staff. Our AI agents provide 24/7 availability, perfect Arabic/English bilingual support, WhatsApp integration (critical for MENA), and eliminate human errors in repetitive tasks."
    },
    {
      question: "How much does it cost?",
      answer: "We charge a fixed monthly retainer of AED 16,500 (SAR 18,000). This includes 1 dedicated AI developer, 1 process consultant, 80 development hours per month, and 2 medium complexity workflows. No setup fees, no per-user charges, no contracts - just predictable monthly cost. We also offer a risk-free 30-day trial where we'll automate 2 processes for FREE."
    },
    {
      question: "Do you support Arabic language?",
      answer: "Yes! Full Arabic and English bilingual support is a core feature of all our AI agents. Our UAE-based team understands GCC business culture and builds AI agents that communicate naturally in both languages, handle Arabic customer inquiries, and integrate with WhatsApp - the preferred communication channel in the MENA region."
    },
    {
      question: "How long does deployment take?",
      answer: "Typically 2-4 weeks from start to full deployment. Week 1-2: workflow analysis, Week 3-4: AI agent development, Week 5+: deployment and integration. We've successfully deployed 30+ workflows across manufacturing, healthcare, logistics, and retail sectors in the GCC."
    },
    {
      question: "What if I'm not satisfied?",
      answer: "We offer a completely risk-free trial. We'll automate 2 of your processes for FREE in the first 30 days. If you're not satisfied with the results, you pay nothing. No setup fees, no contracts, no obligations. We're confident in our ability to save you 80+ hours monthly."
    },
    {
      question: "Can you integrate with our existing systems?",
      answer: "Absolutely. Our AI agents integrate seamlessly with popular business tools including ERPs, WhatsApp Business, Google Sheets, CRM systems, and most cloud-based platforms. We ensure minimal disruption to your current workflows while maximizing automation benefits."
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200 mb-4">
            Frequently Asked Questions
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Everything You Need to <span className="bg-gradient-primary bg-clip-text text-transparent">Know</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Common questions about AI automation for GCC businesses
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 shadow-card hover:shadow-glow transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <div className="bg-gradient-secondary rounded-2xl p-8 shadow-card">
            <h3 className="text-2xl font-bold mb-4">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-6">
              Our GCC-based team is ready to help you understand how AI can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:hello@nunar.ai" 
                className="inline-flex items-center justify-center bg-gradient-primary text-primary-foreground px-6 py-3 rounded-lg hover:shadow-glow transition-all"
              >
                📧 Email Us
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
              >
                📱 WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;