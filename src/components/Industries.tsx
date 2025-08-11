import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Factory, Stethoscope, Truck } from "lucide-react";

const industries = [
  {
    key: "manufacturing",
    title: "Manufacturing",
    description:
      "Automate production planning, quality checks, procurement, and reporting with AI-powered workflows.",
    href: "/industries/manufacturing",
    Icon: Factory,
    accent: "from-green-500/20 to-emerald-600/20",
    iconBg: "bg-green-500/10 text-green-600 border-green-200/30",
    buttonText: "Explore Manufacturing AI",
  },
  {
    key: "healthcare",
    title: "Healthcare",
    description:
      "Streamline patient intake, lab reports, appointment scheduling, and claims processing securely.",
    href: "/industries/healthcare",
    Icon: Stethoscope,
    accent: "from-blue-500/20 to-cyan-600/20",
    iconBg: "bg-blue-500/10 text-blue-600 border-blue-200/30",
    buttonText: "See Healthcare Solutions",
  },
  {
    key: "logistics",
    title: "Logistics",
    description:
      "Optimize order tracking, vendor coordination, invoice reconciliation, and delivery notifications.",
    href: "/industries/logistics",
    Icon: Truck,
    accent: "from-orange-500/20 to-amber-600/20",
    iconBg: "bg-orange-500/10 text-orange-600 border-orange-200/30",
    buttonText: "Improve Logistics Now",
  },
] as const;

const Industries = () => {
  return (
    <section id="industries" className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      
      <div className="container mx-auto relative">
        <div className="mx-auto max-w-2xl text-center space-y-4 mb-16">
          <Badge variant="secondary" className="mx-auto text-primary border-primary/20 bg-primary/10">
            Our Industries
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground/90 to-foreground/70 bg-clip-text text-transparent">
            Built for Real-World GCC Operations
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Explore industry-ready AI workflows that deliver <span className="font-semibold text-primary">measurable ROI in weeks</span>
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {industries.map(({ key, title, description, href, Icon, accent, iconBg, buttonText }) => (
            <Card 
              key={key} 
              className={`
                group relative overflow-hidden border-0 bg-card/50 backdrop-blur-sm
                hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2
                transition-all duration-500 ease-out revolving-border
                before:bg-gradient-to-br before:${accent}
              `}
            >
              {/* Card gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <CardHeader className="space-y-4 relative z-10">
                <div className={`
                  inline-flex items-center justify-center size-16 rounded-2xl border-2
                  ${iconBg} group-hover:scale-110 transition-all duration-300
                  shadow-lg group-hover:shadow-xl
                `}>
                  <Icon className="size-8" />
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                  {title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {description}
                </p>
              </CardContent>
              
              <CardFooter className="relative z-10 pt-6">
                <Button 
                  asChild 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 font-semibold"
                >
                  <Link to={href} aria-label={`Learn more about ${title} industry`}>
                    {buttonText}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
