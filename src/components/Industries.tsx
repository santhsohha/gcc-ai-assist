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
  },
  {
    key: "healthcare",
    title: "Healthcare",
    description:
      "Streamline patient intake, lab reports, appointment scheduling, and claims processing securely.",
    href: "/industries/healthcare",
    Icon: Stethoscope,
  },
  {
    key: "logistics",
    title: "Logistics",
    description:
      "Optimize order tracking, vendor coordination, invoice reconciliation, and delivery notifications.",
    href: "/industries/logistics",
    Icon: Truck,
  },
] as const;

const Industries = () => {
  return (
    <section id="industries" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center space-y-3 mb-10">
          <Badge variant="secondary" className="mx-auto">Our Industries</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Built for Real-World GCC Operations
          </h2>
          <p className="text-muted-foreground">
            Explore industry-ready AI workflows that deliver measurable ROI in weeks.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ key, title, description, href, Icon }) => (
            <Card key={key} className="hover-scale">
              <CardHeader className="space-y-3">
                <div className="inline-flex items-center justify-center size-12 rounded-xl bg-accent/30 text-accent-foreground">
                  <Icon className="size-6" />
                </div>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link to={href} aria-label={`Learn more about ${title} industry`}>
                    Learn More
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
