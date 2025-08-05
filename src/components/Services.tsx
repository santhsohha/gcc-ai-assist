import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      icon: "🤖",
      title: "Custom AI Agents",
      description: "Tailored AI solutions that mimic your best employee but work 24/7",
      features: ["WhatsApp Integration", "Arabic/English Support", "ERP Integration", "Custom Workflows"]
    },
    {
      icon: "📱",
      title: "WhatsApp Automation",
      description: "Critical for MENA market - automated order updates, vendor coordination",
      features: ["Order Status Updates", "Vendor Follow-ups", "Customer Support", "Appointment Scheduling"]
    },
    {
      icon: "🌍",
      title: "GCC Localization",
      description: "Built with UAE/Saudi cultural context and business practices",
      features: ["Arabic Language Support", "Local Business Practices", "Cultural Adaptation", "Regional Compliance"]
    },
    {
      icon: "📊",
      title: "Process Optimization",
      description: "Analyze and streamline your workflows for maximum efficiency",
      features: ["Workflow Analysis", "Process Mapping", "Efficiency Reports", "Continuous Improvement"]
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200 mb-4">
            Our Services
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">AI Agents</span> Built for Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't sell software. We build custom AI employees that understand your workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <CardHeader className="text-center">
                <div className="text-4xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="text-primary mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;