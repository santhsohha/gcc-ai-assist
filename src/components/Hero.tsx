import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
const Hero = () => {
  return <section className="pt-24 pb-16 px-4 bg-gradient-secondary min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200" data-translate data-en="Custom-built for GCC businesses — measurable ROI in just 14 days." data-ar="مصمم خصيصاً لشركات الخليج — عائد استثمار ملموس خلال 14 يوماً.">
              Custom-built for GCC businesses — measurable ROI in just 14 days.
            </Badge>
            
            <div className="space-y-6">
              <div className="space-y-2">
<p className="text-sm text-muted-foreground font-medium">
  Nunar – An AI Workflow Automation Service by <a href="https://www.hakunamatatatech.com/" target="_blank">Hakuna Matata Solutions</a>
</p>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight" data-translate data-en="AI Agents That Turn Scattered Work into 5× Efficiency" data-ar="وكلاء ذكاء اصطناعي يحولون العمل المبعثر إلى كفاءة مضاعفة 5 مرات">
                  <span className="bg-gradient-hero bg-clip-text text-transparent">
                    AI Agents That Turn Scattered Work into 5× Efficiency
                  </span>
                </h1>
              </div>
              
                <p className="text-xl text-muted-foreground leading-relaxed max-w-lg" data-translate data-en="Paper, WhatsApp, email, Excel, apps — our AI Agents read, intelligently process, and reply automatically. Save 80+ hours monthly, cut 80% manual work, and free your team for creative tasks." data-ar="الأوراق، واتساب، البريد الإلكتروني، إكسل، التطبيقات — وكلاؤنا يقرؤون ويحللون ويردون تلقائياً. وفّر 80+ ساعة شهرياً، خفّض 80% من العمل اليدوي، وحرّر فريقك للمهام الإبداعية.">
                  Paper, WhatsApp, email, Excel, apps — our AI Agents read, intelligently process, and reply automatically. Save 80+ hours monthly, cut 80% manual work, and free your team for creative tasks.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-6" aria-label="Start Free Trial - Automate 2 Processes">
                🚀 Start Free Trial - Automate 2 Processes
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6" aria-label="See How It Works">
                📌 See How It Works
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>30+ Workflows Built</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>2-4 Week Deployment</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                <span>99.9% Success Rate</span>
              </div>
            </div>

          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-3xl blur-3xl"></div>
            <img src={heroImage} alt="AI Workflow Automation for GCC Businesses" className="relative rounded-3xl shadow-2xl w-full h-auto" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;