import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Truck, MapPin, Package, Phone, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Logistics = () => {
  const solutionCategories = [
    {
      title: "Communication Automation (WhatsApp + Email)",
      icon: <Phone className="h-6 w-6" />,
      solutions: [
        {
          title: "AI Email Parser & WhatsApp Responder",
          description: "Auto-read emails, detect intents like RFQs, Shipment status, Payment follow-ups and draft or send WhatsApp replies.",
          whatItDoes: "This bot auto-reads incoming emails from clients or vendors, detects the intent (e.g., RFQ, payment status, shipment delay), and sends a smart WhatsApp reply—either as a draft or auto-approved message.",
          howItHelps: [
            "Saves 3–5 hours of manual email checking per day",
            "Improves response time to clients by up to 60%",
            "Ensures no inquiry is missed during weekends or holidays"
          ],
          example: 'A client sends an email asking for their shipment ETA. The bot reads it, identifies it as a status request, pulls the ETA from the TMS, and sends a WhatsApp update like: "Hi Sarah, your shipment AWB123 will reach Dubai warehouse by Aug 10, 3 PM."'
        },
        {
          title: "Multi-channel Lead Qualification",
          description: "Auto-capture leads from Email/WhatsApp, qualify using LLM, push into CRM with context.",
          whatItDoes: "Captures potential leads from multiple channels, automatically qualifies them using intelligent questions, and categorizes them by priority and service type before pushing qualified data to your CRM.",
          howItHelps: [
            "Increases lead conversion by 40% through instant response",
            "Eliminates manual lead entry and qualification time",
            "Ensures hot leads are never lost in your inbox"
          ],
          example: 'When someone messages "Need freight rates for Dubai-Riyadh", the bot asks smart follow-up questions about cargo type, weight, and timeline, then creates a qualified lead in your CRM tagged as "Express Freight - High Priority".'
        },
        {
          title: "Daily Client Status Broadcast",
          description: "Auto-push shipment or payment updates to clients via WhatsApp/email based on data triggers.",
          whatItDoes: "Monitors your systems for status changes and automatically sends personalized updates to clients about their shipments, payments, or important milestones without any manual intervention.",
          howItHelps: [
            "Reduces client inquiry calls by 70%",
            "Builds trust through proactive communication",
            "Saves operations team 2-3 hours daily on status updates"
          ],
          example: 'When a shipment clears customs in Jeddah, the system automatically sends: "Great news! Your shipment has cleared customs and is now on the way to final delivery. Expected arrival: Tomorrow 2-4 PM."'
        },
        {
          title: "Escalation Handler",
          description: "Detect negative sentiment or urgency in messages and escalate to CFO or Ops head immediately.",
          whatItDoes: "Uses sentiment analysis to identify frustrated customers, urgent requests, or potential issues in incoming messages, and instantly alerts the right person with context and suggested actions.",
          howItHelps: [
            "Prevents customer complaints from escalating",
            "Ensures urgent issues reach decision-makers within minutes",
            "Protects business relationships through rapid response"
          ],
          example: 'When a client messages "This is unacceptable! My urgent shipment is still delayed", the bot immediately alerts the Operations Head with full context and suggests calling the client within 15 minutes.'
        }
      ]
    },
    {
      title: "Document Intelligence (Excel, Word, PDF)",
      icon: <Package className="h-6 w-6" />,
      solutions: [
        {
          title: "Excel to Workflow Trigger",
          description: "CFO maintains Excel with pending vendor payments or open shipments – AI watches sheet changes and triggers automated follow-up mails/WhatsApp.",
          whatItDoes: "Monitors your Excel sheets for changes and automatically triggers workflows like payment reminders, shipment follow-ups, or vendor communications whenever you update status or add new entries.",
          howItHelps: [
            "Eliminates manual follow-up task management",
            "Ensures no vendor payment or shipment follow-up is missed",
            "Saves CFO 1-2 hours daily on routine communications"
          ],
          example: 'When the CFO marks a vendor payment as "Due" in Excel, the system automatically sends a professional payment reminder WhatsApp message to the vendor and schedules a follow-up for next week.'
        },
        {
          title: "Invoice & BoL Extraction",
          description: "Auto-read scanned or attached PDF/Word invoices and BoL, extract metadata and log into TMS/ERP.",
          whatItDoes: "Automatically processes incoming invoices and Bills of Lading, extracts key information like amounts, dates, and shipment details, then inputs the data directly into your management systems.",
          howItHelps: [
            "Reduces data entry time by 85%",
            "Eliminates human errors in invoice processing",
            "Speeds up billing cycles and payment processing"
          ],
          example: 'A vendor emails a scanned invoice. The AI reads it, extracts the amount (AED 15,000), service details, and due date, then automatically creates an entry in your ERP with all the correct information.'
        },
        {
          title: "Customs Document Verifier",
          description: "AI validates uploaded or emailed documents (Packing List, Invoice, HS code sheet) and raises alerts on missing fields.",
          whatItDoes: "Automatically checks all customs documentation for completeness, accuracy, and compliance requirements, flagging any missing information or potential issues before submission.",
          howItHelps: [
            "Prevents costly customs delays and penalties",
            "Ensures 99% document accuracy before submission",
            "Saves compliance team hours of manual verification"
          ],
          example: 'Before submitting customs docs for a Riyadh shipment, the AI notices the HS code is missing from the packing list and immediately alerts: "Missing HS code for Electronics items - Required for Saudi customs clearance".'
        },
        {
          title: "Word Docs – Contract Review Bot",
          description: "Automatically read Word-format vendor/customer contracts, highlight risks, key terms, or missing clauses.",
          whatItDoes: "Reviews contract documents to identify potential risks, missing standard clauses, unfavorable terms, or important deadlines, providing a comprehensive analysis for better negotiations.",
          howItHelps: [
            "Reduces legal review costs by 60%",
            "Identifies risks before contract signing",
            "Ensures all standard protection clauses are included"
          ],
          example: 'When reviewing a new vendor contract, the AI highlights: "Warning: No force majeure clause found. Payment terms favor vendor (7 days vs standard 30 days). Recommend adding liability cap clause."'
        },
        {
          title: "AI Summary from Excel",
          description: "Read a messy Excel sheet (e.g., sales, P&L, freight cost) and generate summary or charts for CFO WhatsApp share.",
          whatItDoes: "Analyzes complex Excel data and creates clear, executive-level summaries with key insights, trends, and actionable recommendations that can be easily shared via WhatsApp or email.",
          howItHelps: [
            "Turns hours of analysis into 5-minute insights",
            "Makes complex data accessible to non-technical staff",
            "Enables data-driven decisions without Excel expertise"
          ],
          example: 'From a messy freight cost sheet, the AI creates: "October Summary: Total costs up 12% vs last month. Dubai-Riyadh route most profitable (35% margin). Recommend renegotiating Jeddah rates (only 8% margin)."'
        }
      ]
    },
    {
      title: "Cognitive Assistant for Finance Ops (Ideal for CFO)",
      icon: <Truck className="h-6 w-6" />,
      solutions: [
        {
          title: "Aging Report Bot",
          description: "AI pulls receivables from Excel/ERP and sends an aging summary daily/weekly on WhatsApp.",
          whatItDoes: "Automatically generates and delivers aging reports showing overdue payments, upcoming due dates, and collection priorities directly to your WhatsApp, with actionable insights and recommendations.",
          howItHelps: [
            "Never miss a collection opportunity",
            "Prioritizes efforts on highest-value overdue accounts",
            "Improves cash flow by 25% through timely follow-ups"
          ],
          example: 'Every Monday morning: "Aging Report: AED 125K overdue (3 clients). Priority: ABC Trading owes AED 85K (45 days overdue). Action: Call today. XYZ Corp payment due Friday - send reminder Wednesday."'
        },
        {
          title: "Auto Payment Reminder Generator",
          description: "Reads due dates from Excel or ERP, drafts gentle payment follow-up messages (email/WhatsApp).",
          whatItDoes: "Monitors payment due dates and automatically creates personalized, professional payment reminders that match your tone and relationship with each client, escalating appropriately based on overdue duration.",
          howItHelps: [
            "Reduces overdue payments by 40%",
            "Maintains professional relationships through courteous reminders",
            "Frees up CFO time from writing payment messages"
          ],
          example: 'For a 7-day overdue payment: "Hi Ahmed, Hope you\'re doing well. Just a friendly reminder that invoice #12345 (AED 25,000) was due last Tuesday. Could you please confirm the payment status? Thanks for your continued partnership."'
        },
        {
          title: "Credit Note Drafting Agent",
          description: "Auto-generate credit note justifications based on contract terms and delivery logs.",
          whatItDoes: "Reviews service issues, contract terms, and delivery performance to automatically draft professional credit notes with proper justifications and supporting documentation references.",
          howItHelps: [
            "Ensures all credit notes are properly documented",
            "Reduces disputes through clear justifications",
            "Saves 2-3 hours per credit note preparation"
          ],
          example: 'After a 2-day shipment delay: "Credit Note: AED 2,500 for delayed delivery of AWB789. Per contract clause 7.2, penalty applies for delays exceeding 24 hours. Delivery completed 48 hours late due to customs processing."'
        },
        {
          title: "Collections Prioritization Bot",
          description: "AI prioritizes collections based on customer behavior, amount, and due date – suggests next action.",
          whatItDoes: "Analyzes customer payment history, relationship value, and current overdue amounts to create a prioritized action plan with specific recommendations for each account.",
          howItHelps: [
            "Maximizes collection efficiency through smart prioritization",
            "Maintains good relationships with valuable clients",
            "Increases successful collections by 35%"
          ],
          example: 'Priority 1: "Contact ABC Corp today (AED 50K, 30 days overdue, historically good payer - likely oversight)." Priority 2: "Legal notice for XYZ Ltd (AED 15K, 60 days overdue, history of delays)."'
        }
      ]
    },
    {
      title: "Operations Automation",
      icon: <MapPin className="h-6 w-6" />,
      solutions: [
        {
          title: "Shipment ETA Trigger",
          description: "Reads tracking sheets or portal data and sends ETA to client on WhatsApp.",
          whatItDoes: "Monitors tracking systems and automatically sends accurate ETA updates to clients when shipments reach key milestones or when delivery schedules change, keeping everyone informed in real-time.",
          howItHelps: [
            "Reduces client calls asking for status updates by 80%",
            "Builds trust through proactive communication",
            "Improves customer satisfaction scores significantly"
          ],
          example: 'When a Dubai-bound shipment reaches Jebel Ali Port: "Update: Your shipment AWB456 has arrived at Jebel Ali Port. Customs clearance in progress. Expected delivery to your warehouse: Tomorrow between 10 AM - 2 PM."'
        },
        {
          title: "Delay Reason AI Writer",
          description: "If shipment delay occurs, AI auto-drafts reason email/WhatsApp from historical patterns.",
          whatItDoes: "When delays occur, automatically generates professional explanations based on the specific reason (weather, customs, traffic) and sends appropriately worded messages to affected clients with realistic new timelines.",
          howItHelps: [
            "Maintains transparency during challenging situations",
            "Saves operations team time during crisis management",
            "Preserves customer relationships through honest communication"
          ],
          example: 'During a sandstorm delay: "Important update: Your shipment may be delayed by 4-6 hours due to severe weather conditions affecting the Dubai-Abu Dhabi route. Safety is our priority. New ETA: 6-8 PM today. We apologize for the inconvenience."'
        },
        {
          title: "Driver/Vendor WhatsApp Assistant",
          description: "Reads incoming messages from field and updates system or triggers next action (like POD follow-up).",
          whatItDoes: "Processes messages from drivers and vendors in the field, automatically updates shipment status, triggers necessary workflows, and coordinates next steps without requiring office staff intervention.",
          howItHelps: [
            "Eliminates communication gaps between field and office",
            "Reduces shipment tracking errors by 60%",
            "Speeds up proof of delivery processing"
          ],
          example: 'When driver messages "Delivered to Ahmed at Landmark Mall 2:30 PM", the system updates delivery status, requests POD photo, notifies the client of completion, and creates invoice trigger in the billing system.'
        }
      ]
    },
    {
      title: "Approvals & Compliance Workflows",
      icon: <Phone className="h-6 w-6" />,
      solutions: [
        {
          title: "WhatsApp Approvals",
          description: "Convert Excel/ERP approval flow to WhatsApp interaction (PO, payment, pricing).",
          whatItDoes: "Transforms traditional approval processes into simple WhatsApp conversations, allowing managers to approve purchase orders, payments, and pricing decisions directly from their phone with proper audit trails.",
          howItHelps: [
            "Speeds up approval processes by 70%",
            "Enables approvals from anywhere, anytime",
            "Maintains complete audit trail for compliance"
          ],
          example: 'CFO receives: "Approval needed: PO #2345 for new trucks (AED 250K) from Al Futtaim Motors. Budget approved, vendor verified. Reply YES to approve or NO with reason." One-click approval from anywhere.'
        },
        {
          title: "Document Submission Tracker",
          description: "AI tracks document deadlines and nudges employees/vendors who haven't submitted via email/WhatsApp.",
          whatItDoes: "Monitors document submission deadlines and automatically sends progressive reminders to employees and vendors, escalating to supervisors when documents remain outstanding close to deadlines.",
          howItHelps: [
            "Ensures 95% on-time document submission",
            "Prevents compliance issues and penalties",
            "Reduces admin workload by automating follow-ups"
          ],
          example: '5 days before deadline: "Reminder: Your trade license renewal documents are due Friday. Please submit ASAP." 1 day before: "URGENT: Documents due tomorrow. Please submit immediately or contact admin for extension."'
        },
        {
          title: "Auto-Generate Approval Summary",
          description: "Reads through email threads or Excel logs and composes a clear approval summary for CXOs.",
          whatItDoes: "Reviews complex email chains, Excel logs, and documents to create concise executive summaries highlighting key decisions needed, risks, and recommendations for C-level approval.",
          howItHelps: [
            "Saves executives hours of reading through complex threads",
            "Ensures no critical details are missed in decisions",
            "Speeds up high-level decision making"
          ],
          example: 'From a 20-email thread about new warehouse lease: "Summary: Dubai South warehouse (15K sqft) available at AED 180K/year. 15% below market rate. Vendor verified, legal review complete. Decision needed by Wednesday. Recommend approval - ROI positive within 18 months."'
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
                
                <Accordion type="single" collapsible className="w-full">
                  <div className="grid md:grid-cols-2 gap-6">
                    {category.solutions.map((solution, solutionIndex) => (
                      <AccordionItem 
                        key={`${categoryIndex}-${solutionIndex}`} 
                        value={`${categoryIndex}-${solutionIndex}`}
                        className="border-none"
                      >
                        <Card className="relative overflow-hidden shadow-card hover:shadow-glow transition-all duration-300 revolving-border">
                          <AccordionTrigger className="hover:no-underline p-0 [&[data-state=open]>svg]:rotate-180 [&>svg]:mr-6 [&>svg]:text-muted-foreground">
                            <CardHeader className="w-full pr-12">
                              <CardTitle className="text-lg leading-tight text-left">{solution.title}</CardTitle>
                              <CardContent className="px-0 pb-0">
                                <p className="text-muted-foreground text-sm leading-relaxed text-left">{solution.description}</p>
                              </CardContent>
                            </CardHeader>
                          </AccordionTrigger>
                          
                          <AccordionContent className="pb-0">
                            <CardContent className="pt-0 space-y-6">
                              <div className="border-t pt-6">
                                <div className="space-y-4">
                                  <div>
                                    <h4 className="font-semibold text-primary mb-2">What it does</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                      {solution.whatItDoes}
                                    </p>
                                  </div>
                                  
                                  <div>
                                    <h4 className="font-semibold text-primary mb-3">How it helps</h4>
                                    <ul className="space-y-2">
                                      {solution.howItHelps.map((benefit, benefitIndex) => (
                                        <li key={benefitIndex} className="flex items-start space-x-2 text-sm">
                                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                                          <span className="text-muted-foreground">{benefit}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  
                                  {solution.example && (
                                    <div className="bg-muted/30 rounded-lg p-4">
                                      <h4 className="font-semibold text-primary mb-2">Real-world example</h4>
                                      <p className="text-sm text-muted-foreground leading-relaxed italic">
                                        {solution.example}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </CardContent>
                          </AccordionContent>
                        </Card>
                      </AccordionItem>
                    ))}
                  </div>
                </Accordion>
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