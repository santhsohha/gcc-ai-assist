import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
const Hero = () => {
  return <section className="pt-24 pb-16 px-4 bg-gradient-secondary min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200" data-translate data-en="🚀 Save 80+ Hours Monthly with AI Agents" data-ar="🚀 وفر أكثر من 80 ساعة شهرياً مع وكلاء الذكاء الاصطناعي">
              🚀 Save 80+ Hours Monthly with AI Agents
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight" data-translate data-en="Get AI Agents That Cut 80% Manual Work in 14 Days" data-ar="احصل على وكلاء ذكيين يقطعون 80% من العمل اليدوي في 14 يوم">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Get AI Agents That Cut 80% Manual Work in 14 Days
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg" data-translate data-en="Stop drowning in repetitive tasks that kill productivity and drain profits. Our custom AI agents eliminate manual workflows, boost efficiency by 80%, and deliver measurable ROI within 2 weeks - guaranteed for GCC businesses." data-ar="توقف عن الغرق في المهام المتكررة التي تقتل الإنتاجية وتستنزف الأرباح. وكلاؤنا الذكيون المخصصون يلغون سير العمل اليدوي، ويعززون الكفاءة بنسبة 80%، ويقدمون عائد استثمار قابل للقياس خلال أسبوعين - مضمون لشركات دول الخليج.">
                Stop drowning in repetitive tasks that kill productivity and drain profits. Our custom AI agents eliminate manual workflows, boost efficiency by 80%, and deliver measurable ROI within 2 weeks - guaranteed for GCC businesses.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-6">
                Start Free Trial - Automate 2 Processes
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6">
                Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>30+ Workflows Built</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>2-4 Week Deployment</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
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