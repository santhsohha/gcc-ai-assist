import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const Services = () => {
  const services = [{
    icon: "⚡",
    title: "Custom AI Agents",
    description: "Tailored AI solutions that mimic your best employee but work 24/7",
    features: ["WhatsApp Integration", "Email Parsing Intelligence", "ERP/API Integration", "Dynamic Report Handling"],
    gradient: "from-blue-500 to-cyan-500"
  }, {
    icon: "💬",
    title: "WhatsApp Automation",
    description: "Critical for MENA market - automated order updates, vendor coordination",
    features: ["Order Status Updates", "Vendor Follow-ups", "Customer Support", "Appointment Scheduling"],
    gradient: "from-green-500 to-emerald-500"
  }, {
    icon: "🎯",
    title: "GCC Localization",
    description: "Built with UAE/Saudi cultural context and business practices",
    features: ["Arabic Language Support", "Local Business Practices", "Cultural Adaptation", "Regional Compliance"],
    gradient: "from-orange-500 to-red-500"
  }, {
    icon: "📈",
    title: "Process Optimization",
    description: "Analyze and streamline your workflows for maximum efficiency",
    features: ["Workflow Analysis", "Process Mapping", "Efficiency Reports", "Continuous Improvement"],
    gradient: "from-purple-500 to-pink-500"
  }];
  return <section id="services" className="py-20 px-4 bg-gradient-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200 mb-4">
            Our Services
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">AI Agents</span> Built for Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto px-px py-px">We don't sell software. We build custom AI employees for your business processes.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 group">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{service.icon}</span>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => <li key={idx} className="flex items-center text-sm">
                      <span className="text-primary mr-2">•</span>
                      {feature}
                    </li>)}
                </ul>
                <Button size="sm" className="w-full bg-gradient-primary hover:shadow-glow" aria-label={`Learn more about ${service.title}`} onClick={() => {
              const serviceSlug = service.title.toLowerCase().replace(/\s+/g, '').replace(/&/g, '');
              window.location.href = `/services/${serviceSlug}`;
            }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Services;