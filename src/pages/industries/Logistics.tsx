import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Truck, MapPin, Package, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Logistics = () => {
  const solutionCategories = [
    {
      title: "Communication Automation (WhatsApp + Email)",
      icon: <Phone className="h-6 w-6" />,
      solutions: [
        {
          title: "AI Email Parser & WhatsApp Responder",
          description: "Auto-read emails, detect intents like RFQs, Shipment status, Payment follow-ups and draft or send WhatsApp replies."
        },
        {
          title: "Multi-channel Lead Qualification",
          description: "Auto-capture leads from Email/WhatsApp, qualify using LLM, push into CRM with context."
        },
        {
          title: "Daily Client Status Broadcast",
          description: "Auto-push shipment or payment updates to clients via WhatsApp/email based on data triggers."
        },
        {
          title: "Escalation Handler",
          description: "Detect negative sentiment or urgency in messages and escalate to CFO or Ops head immediately."
        }
      ]
    },
    {
      title: "Document Intelligence (Excel, Word, PDF)",
      icon: <Package className="h-6 w-6" />,
      solutions: [
        {
          title: "Excel to Workflow Trigger",
          description: "CFO maintains Excel with pending vendor payments or open shipments – AI watches sheet changes and triggers automated follow-up mails/WhatsApp."
        },
        {
          title: "Invoice & BoL Extraction",
          description: "Auto-read scanned or attached PDF/Word invoices and BoL, extract metadata and log into TMS/ERP."
        },
        {
          title: "Customs Document Verifier",
          description: "AI validates uploaded or emailed documents (Packing List, Invoice, HS code sheet) and raises alerts on missing fields."
        },
        {
          title: "Word Docs – Contract Review Bot",
          description: "Automatically read Word-format vendor/customer contracts, highlight risks, key terms, or missing clauses."
        },
        {
          title: "AI Summary from Excel",
          description: "Read a messy Excel sheet (e.g., sales, P&L, freight cost) and generate summary or charts for CFO WhatsApp share."
        }
      ]
    },
    {
      title: "Cognitive Assistant for Finance Ops (Ideal for CFO)",
      icon: <Truck className="h-6 w-6" />,
      solutions: [
        {
          title: "Aging Report Bot",
          description: "AI pulls receivables from Excel/ERP and sends an aging summary daily/weekly on WhatsApp."
        },
        {
          title: "Auto Payment Reminder Generator",
          description: "Reads due dates from Excel or ERP, drafts gentle payment follow-up messages (email/WhatsApp)."
        },
        {
          title: "Credit Note Drafting Agent",
          description: "Auto-generate credit note justifications based on contract terms and delivery logs."
        },
        {
          title: "Collections Prioritization Bot",
          description: "AI prioritizes collections based on customer behavior, amount, and due date – suggests next action."
        }
      ]
    },
    {
      title: "Operations Automation",
      icon: <MapPin className="h-6 w-6" />,
      solutions: [
        {
          title: "Shipment ETA Trigger",
          description: "Reads tracking sheets or portal data and sends ETA to client on WhatsApp."
        },
        {
          title: "Delay Reason AI Writer",
          description: "If shipment delay occurs, AI auto-drafts reason email/WhatsApp from historical patterns."
        },
        {
          title: "Driver/Vendor WhatsApp Assistant",
          description: "Reads incoming messages from field and updates system or triggers next action (like POD follow-up)."
        }
      ]
    },
    {
      title: "Approvals & Compliance Workflows",
      icon: <Phone className="h-6 w-6" />,
      solutions: [
        {
          title: "WhatsApp Approvals",
          description: "Convert Excel/ERP approval flow to WhatsApp interaction (PO, payment, pricing)."
        },
        {
          title: "Document Submission Tracker",
          description: "AI tracks document deadlines and nudges employees/vendors who haven't submitted via email/WhatsApp."
        },
        {
          title: "Auto-Generate Approval Summary",
          description: "Reads through email threads or Excel logs and composes a clear approval summary for CXOs."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-secondary">
        <div className="container mx-auto">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl">
            <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200 mb-6">
              🚛 Logistics Industry
            </Badge>
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Smart Logistics
              </span>
              <br />
              for GCC Supply Chains
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Optimize your logistics operations with AI agents that understand GCC market dynamics, 
              integrate with local systems, and communicate effectively in Arabic and English.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
                Schedule Logistics Consultation
              </Button>
              <Button variant="outline" size="lg">
                Download Logistics Case Study
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              AI Solutions for <span className="bg-gradient-primary bg-clip-text text-transparent">Logistics</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven by 20+ GCC logistics companies to reduce delivery costs by 30% and improve customer satisfaction by 50%.
            </p>
          </div>

          <div className="space-y-16">
            {solutionCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {category.solutions.map((solution, solutionIndex) => (
                    <Card key={solutionIndex} className="shadow-card hover:shadow-glow transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-lg leading-tight">{solution.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm leading-relaxed">{solution.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Streamline Your <span className="bg-gradient-primary bg-clip-text text-transparent">Logistics Operations</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join top GCC logistics providers who have revolutionized their operations with our intelligent AI agents.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow">
            Optimize Your Logistics Today
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Logistics;