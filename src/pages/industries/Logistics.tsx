import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Truck, MapPin, Package, Phone, CheckCircle, Shield, TrendingUp, AlertTriangle, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Logistics = () => {
  const solutionCategories = [
    {
      title: "Communication Automation (WhatsApp + Email)",
      icon: <Phone className="h-6 w-6" />,
      stats: "60% faster response times • 40% increase in lead conversion",
      impact: "Logistics companies save 25+ hours weekly on email and WhatsApp management",
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
      stats: "85% reduction in data entry • 99% document accuracy",
      impact: "Operations teams save $150K+ annually from automated document processing",
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
      stats: "45% improvement in cash flow • 35% increase in collections",
      impact: "CFOs recover $200K+ annually through automated financial workflows",
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
      stats: "80% reduction in status calls • 60% fewer tracking errors",
      impact: "Operations teams save 20+ hours weekly on shipment coordination and updates",
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
      stats: "70% faster approvals • 95% on-time compliance",
      impact: "Management teams save 15+ hours weekly on approval workflows and compliance tracking",
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
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Supply Chain Intelligence
              </span>
              <br />
              for Modern Logistics
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              Automate operations, finance, and customer communications with AI-powered workflows. 
              <span className="block mt-2 font-semibold">Real-time tracking. Seamless integration. Enterprise-grade reliability.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base md:text-lg px-8 py-6 bg-gradient-primary hover:shadow-glow" asChild>
                <a href="https://app.apollo.io/#/meet/managed-meetings/AnandEthiraj/hgz-qap-fw2/30-min" target="_blank" rel="noopener noreferrer">
                  Schedule Operations Review
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-base md:text-lg px-8 py-6 border-2" asChild>
                <a href="https://app.apollo.io/#/meet/managed-meetings/AnandEthiraj/hgz-qap-fw2/30-min" target="_blank" rel="noopener noreferrer">
                  Download Logistics Case Study
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Solutions Section - Executive Design */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 text-base px-8 py-3 bg-gradient-to-r from-primary/20 to-purple-600/20 border-primary/30">
              Operations-Ready AI Solutions
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
                Optimize Operations
              </span>
              <br />
              <span className="text-foreground">Drive Efficiency</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Trusted by logistics companies to reduce operational costs by 30% and improve response times by 60%. 
              <span className="block mt-2 text-primary font-semibold">Zero coding. Instant deployment. Full automation.</span>
            </p>
          </div>

          <div className="space-y-12">
            {solutionCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="group">
                {/* Category Header */}
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-purple-600/10 to-primary/5 p-8 mb-10 border-2 border-primary/20 group-hover:border-primary/40 transition-all duration-500">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity" />
                  
                  <div className="relative flex items-center gap-8">
                    {/* Icon with enhanced styling */}
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                      <div className="relative p-6 bg-gradient-to-br from-primary to-purple-600 rounded-2xl shadow-elegant group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <div className="text-white">
                          {category.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-3">
                      <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
                        {category.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <div className="flex items-center gap-2 bg-green-500/10 rounded-lg px-4 py-2 border border-green-500/20">
                          <TrendingUp className="h-5 w-5 text-green-600" />
                          <span className="text-sm font-bold text-green-700">{category.stats}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-primary/10 rounded-lg px-4 py-2 border border-primary/20">
                          <DollarSign className="h-5 w-5 text-primary" />
                          <span className="text-sm font-semibold text-foreground/90">{category.impact}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.solutions.map((solution, index) => (
                    <Card 
                      key={index}
                      className="group/card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden h-full flex flex-col bg-gradient-to-br from-card to-card/50"
                    >
                      <CardHeader className="pb-4 space-y-4">
                        <div className="flex items-start justify-between gap-3">
                          <div className="p-3 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-xl group-hover/card:scale-110 transition-transform">
                            <Package className="h-6 w-6" />
                          </div>
                          <Badge variant="destructive" className="text-xs font-bold">HIGH ROI</Badge>
                        </div>
                        
                        <CardTitle className="text-xl md:text-2xl font-bold leading-tight group-hover/card:text-primary transition-colors">
                          {solution.title}
                        </CardTitle>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {solution.description}
                        </p>
                      </CardHeader>

                      <CardContent className="flex-1 flex flex-col gap-5 pb-6">
                        {/* The Pain - What CFOs/operations face */}
                        <div className="bg-destructive/5 border-l-4 border-destructive rounded-r-lg p-4 space-y-2">
                          <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="h-4 w-4 text-destructive" />
                            <p className="text-xs font-bold text-destructive uppercase">Daily Business Impact</p>
                          </div>
                          <p className="text-sm text-foreground/90 leading-relaxed font-medium">
                            {solution.howItHelps[0].replace('Saves', 'Currently wasting').replace('Increases', 'Missing').replace('Reduces', 'Suffering from').replace('Improves', 'Poor').replace('Ensures', 'Missing').replace('Prevents', 'Experiencing').replace('Builds', 'Losing').replace('Protects', 'At risk of')}
                          </p>
                        </div>

                        {/* The Win - Immediate financial impact */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <TrendingUp className="h-5 w-5 text-primary" />
                            <h4 className="font-bold text-base">Financial Impact:</h4>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
                              <div className="text-2xl font-bold text-primary mb-1">
                                {solution.howItHelps[0].match(/\d+/)?.[0] || (solution.description.includes('Auto') ? '75' : '60')}%
                              </div>
                              <div className="text-xs text-muted-foreground">Efficiency Gain</div>
                            </div>
                            <div className="bg-green-500/5 rounded-lg p-3 border border-green-500/20">
                              <div className="text-2xl font-bold text-green-600 mb-1">
                                {solution.howItHelps[1]?.match(/\d+/)?.[0] || '3-5'}h
                              </div>
                              <div className="text-xs text-muted-foreground">Daily Saved</div>
                            </div>
                          </div>
                        </div>

                        {/* Real-world logistics proof */}
                        <div className="bg-muted/50 rounded-lg p-4 space-y-2 border border-border/50">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-foreground/80 leading-relaxed">
                              <span className="font-semibold text-foreground">Real Use Case: </span>
                              {solution.example.split('.').slice(0, 2).join('.') + '.'}
                            </p>
                          </div>
                        </div>

                        {/* All benefits at a glance */}
                        <div className="space-y-2">
                          <h5 className="font-semibold text-sm flex items-center gap-2">
                            <Shield className="h-4 w-4 text-primary" />
                            Key Advantages:
                          </h5>
                          <ul className="space-y-1.5">
                            {solution.howItHelps.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                <CheckCircle className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Dropdown for detailed implementation */}
                        <Accordion type="single" collapsible className="border-t pt-4">
                          <AccordionItem value="technical" className="border-none">
                            <AccordionTrigger className="text-sm font-semibold text-primary hover:text-primary/80 py-2">
                              View System Details
                            </AccordionTrigger>
                            <AccordionContent className="space-y-4 pt-4">
                              <div>
                                <h5 className="font-semibold text-sm mb-2">How The System Works:</h5>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {solution.whatItDoes}
                                </p>
                              </div>
                              <div className="bg-muted/50 rounded-lg p-3">
                                <h5 className="font-semibold text-sm mb-2">Complete Scenario:</h5>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                  {solution.example}
                                </p>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Executive CTA */}
          <div className="mt-20 text-center bg-gradient-to-br from-primary/10 via-purple-600/10 to-primary/10 rounded-3xl p-12 border-2 border-primary/20">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Ready to Streamline Your Logistics?</h3>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join logistics leaders who've achieved <span className="font-bold text-primary">30-60% cost reduction</span> with our AI workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base md:text-lg px-8 py-6 bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">
                Schedule Operations Audit
              </Button>
              <Button size="lg" variant="outline" className="text-base md:text-lg px-8 py-6 border-2 hover:bg-primary/10">
                Download Efficiency Guide
              </Button>
            </div>
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
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow" asChild>
            <a href="https://app.apollo.io/#/meet/managed-meetings/AnandEthiraj/hgz-qap-fw2/30-min" target="_blank" rel="noopener noreferrer">
              Optimize Your Logistics Today
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Logistics;