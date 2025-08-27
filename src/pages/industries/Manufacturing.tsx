import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Factory, Cog, TrendingUp, Shield, Calendar, AlertTriangle, ClipboardList, Package, DollarSign, Settings, Bell, QrCode, FileCheck, Truck, MessageSquare, Wrench, Package2, CreditCard, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Manufacturing = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const workflowCategories = [
    {
      title: "Production Planning & Scheduling",
      icon: <Calendar className="h-6 w-6" />,
      description: "Streamline production workflows and optimize scheduling",
      useCases: [
        {
          title: "Production Order Scheduling",
          source: "ERP + WhatsApp",
          workflow: "Read ERP orders, merge urgent WhatsApp requests, auto-update daily schedule",
          benefit: "Faster production alignment",
          icon: <Calendar className="h-5 w-5" />,
          details: {
            whatItDoes: "AI continuously monitors your ERP system for new production orders, combines them with urgent requests received via WhatsApp from sales team or customers, and automatically generates optimized daily production schedules that balance efficiency with urgency.",
            howItHelps: [
              "Eliminates daily morning meetings to plan production",
              "Automatically prioritizes urgent orders without manual intervention",
              "Reduces production planning time from 2 hours to 15 minutes",
              "Prevents scheduling conflicts and resource double-booking"
            ],
            example: "Sales manager WhatsApps: 'Urgent: Customer needs 500 units by Thursday.' AI reads this, checks ERP capacity, reschedules non-urgent orders, and responds: 'Scheduled for Tuesday-Wednesday. Production slot confirmed. ETA: Wednesday 6 PM.'"
          }
        },
        {
          title: "Machine Downtime Alerts",
          source: "Email logs, IoT",
          workflow: "Detect downtime, auto-alert on WhatsApp, escalate if unresolved",
          benefit: "Reduced stoppage time",
          icon: <AlertTriangle className="h-5 w-5" />,
          details: {
            whatItDoes: "AI monitors machine performance through IoT sensors and email alerts, instantly detects unusual patterns or downtime, automatically notifies maintenance team via WhatsApp with specific error codes, and escalates to plant manager if not resolved within set timeframes.",
            howItHelps: [
              "Reduces machine downtime from hours to minutes",
              "Prevents small issues from becoming major breakdowns",
              "Eliminates dependency on operators to report problems",
              "Tracks response times and maintenance efficiency"
            ],
            example: "Injection molding machine temperature drops. AI immediately WhatsApps maintenance: 'Machine #3 heating issue detected. Error code: H401. Last service: 15 days ago. Technician needed urgently.' If no response in 10 minutes, plant manager gets escalation alert."
          }
        },
        {
          title: "Shift Handover Reports",
          source: "Paper notes, WhatsApp",
          workflow: "Capture shift reports, digitize & summarize to ERP",
          benefit: "No loss of critical handover info",
          icon: <ClipboardList className="h-5 w-5" />,
          details: {
            whatItDoes: "AI captures shift handover information from WhatsApp messages, paper notes (via photo upload), and verbal reports (via voice messages), automatically structures this data into standardized reports, and updates your ERP system with production metrics, issues, and next shift priorities.",
            howItHelps: [
              "Eliminates miscommunication between shifts",
              "Creates searchable historical records of production issues",
              "Reduces handover time from 20 minutes to 5 minutes",
              "Automatically tracks recurring problems for management review"
            ],
            example: "Night shift supervisor sends WhatsApp voice note: 'Machine 2 ran slow today, produced 400 units instead of 500. Need maintenance check tomorrow.' AI converts to text, updates ERP production log, and automatically schedules maintenance priority for morning shift."
          }
        }
      ]
    },
    {
      title: "Inventory & Supply Chain",
      icon: <Package className="h-6 w-6" />,
      description: "Automate inventory management and supplier communications",
      useCases: [
        {
          title: "WIP Tracking",
          source: "Excel, ERP",
          workflow: "Sync WIP Excel sheets to ERP, send daily WhatsApp summary",
          benefit: "Real-time visibility",
          icon: <Package className="h-5 w-5" />,
          details: {
            whatItDoes: "AI continuously synchronizes Work-in-Progress (WIP) data from production floor Excel sheets to your main ERP system, calculates completion percentages, identifies bottlenecks, and sends daily WhatsApp summaries to production managers with visual dashboards.",
            howItHelps: [
              "Provides real-time visibility into production pipeline",
              "Identifies bottlenecks before they delay deliveries",
              "Eliminates manual data entry between systems",
              "Enables proactive decision-making on resource allocation"
            ],
            example: "Production floor updates Excel: '200 units in painting, 150 in assembly.' AI syncs to ERP and WhatsApps manager: 'Daily WIP Update: Painting 80% capacity, Assembly 60%. Bottleneck: Quality check (only 2 inspectors). Recommend: Add 1 QC inspector to avoid delay.'"
          }
        },
        {
          title: "Supplier PO Confirmation",
          source: "ERP POs, Email",
          workflow: "Track unconfirmed POs, auto-remind suppliers",
          benefit: "Faster procurement cycles",
          icon: <DollarSign className="h-5 w-5" />,
          details: {
            whatItDoes: "AI monitors all Purchase Orders (POs) sent to suppliers, tracks which ones haven't been confirmed within 24-48 hours, and automatically sends polite reminder emails and WhatsApp messages to suppliers with PO details and required delivery dates.",
            howItHelps: [
              "Reduces procurement lead times by 30%",
              "Prevents production delays due to late material delivery",
              "Maintains supplier relationships with polite, consistent follow-ups",
              "Tracks supplier response times for performance evaluation"
            ],
            example: "PO #1234 sent to Al Khaleej Metals 2 days ago. AI sends WhatsApp: 'Dear Ahmed, gentle reminder: PO #1234 for steel sheets (AED 15,000) needs confirmation. Required delivery: March 15. Please confirm availability and delivery date. Thanks!'"
          }
        },
        {
          title: "Raw Material Replenishment",
          source: "ERP Inventory",
          workflow: "Trigger low-stock alerts, auto-draft PO in ERP",
          benefit: "Prevent stock-outs",
          icon: <Package2 className="h-5 w-5" />,
          details: {
            whatItDoes: "AI continuously monitors raw material inventory levels in your ERP, predicts consumption based on current production schedules, automatically generates Purchase Orders when materials reach reorder points, and sends alerts to procurement team for approval.",
            howItHelps: [
              "Eliminates production stops due to material shortage",
              "Optimizes inventory carrying costs",
              "Reduces manual monitoring of stock levels",
              "Prevents emergency purchases at premium prices"
            ],
            example: "Steel sheet inventory drops to 500kg (reorder level: 750kg). AI creates draft PO for 2000kg from preferred supplier, calculates 3-day lead time, and WhatsApps procurement: 'Raw material alert: Steel sheets low. Draft PO ready for Al Khaleej Metals. Approve to avoid production stop on Thursday.'"
          }
        }
      ]
    },
    {
      title: "Quality & Compliance",
      icon: <Shield className="h-6 w-6" />,
      description: "Ensure quality standards and regulatory compliance",
      useCases: [
        {
          title: "Supplier Invoice Processing",
          source: "Email invoices, ERP",
          workflow: "Extract invoice data from email, match with ERP",
          benefit: "Reduce data entry errors",
          icon: <FileCheck className="h-5 w-5" />,
          details: {
            whatItDoes: "AI automatically reads invoice PDFs and attachments from supplier emails, extracts all relevant data (amounts, PO numbers, line items), matches them against existing Purchase Orders in your ERP, flags discrepancies, and creates accounting entries for approval.",
            howItHelps: [
              "Eliminates 95% of manual invoice data entry",
              "Catches pricing discrepancies before payment",
              "Reduces invoice processing time from hours to minutes",
              "Maintains complete audit trail for compliance"
            ],
            example: "Supplier emails invoice PDF. AI extracts: 'Invoice #5678, PO #1234, Steel sheets: AED 14,800.' Matches ERP PO showing AED 15,000. Flags 'Price variance: -AED 200' and WhatsApps accounts: 'Invoice processed with discount. Approve payment of AED 14,800?'"
          }
        },
        {
          title: "Quality Inspection Automation",
          source: "Email, ERP QC",
          workflow: "Extract QC results, update ERP, send QA summary",
          benefit: "Faster defect resolution",
          icon: <QrCode className="h-5 w-5" />,
          details: {
            whatItDoes: "AI processes quality inspection reports from emails or QC system uploads, automatically updates ERP with pass/fail status, calculates defect rates, identifies patterns in quality issues, and sends daily QA summaries to production managers with actionable insights.",
            howItHelps: [
              "Reduces time to identify quality trends from weeks to hours",
              "Prevents defective products from reaching customers",
              "Automatically generates compliance reports for certifications",
              "Tracks supplier quality performance over time"
            ],
            example: "QC inspector emails: 'Batch #567 inspection: 5 defects in 100 units.' AI updates ERP, calculates 5% defect rate (threshold: 2%), automatically quarantines batch, and WhatsApps production manager: 'Quality Alert: Batch #567 quarantined. Defect rate 5% exceeds limit. Investigation needed.'"
          }
        },
        {
          title: "Non-Conformance Reports",
          source: "Paper, WhatsApp",
          workflow: "Digitize NCRs, auto-tag in ERP",
          benefit: "Centralized defect tracking",
          icon: <AlertTriangle className="h-5 w-5" />,
          details: {
            whatItDoes: "AI captures Non-Conformance Reports (NCRs) from photos of paper forms, WhatsApp messages, or voice notes, automatically categorizes defects by type and severity, assigns NCR numbers, updates ERP quality module, and tracks corrective actions to completion.",
            howItHelps: [
              "Eliminates lost paper NCR forms",
              "Provides instant visibility into quality issues",
              "Tracks corrective action completion rates",
              "Generates quality metrics for management review"
            ],
            example: "Worker WhatsApps photo of damaged part with voice note: 'Machine 3 produced cracked housing.' AI creates NCR #NC-2024-045, categorizes as 'Mechanical defect - Machine 3,' assigns to maintenance team, and tracks until resolution is confirmed and machine is back in service."
          }
        }
      ]
    },
    {
      title: "Logistics & Customer Service",
      icon: <Truck className="h-6 w-6" />,
      description: "Streamline shipping and customer communications",
      useCases: [
        {
          title: "Dispatch Readiness Alerts",
          source: "ERP + Excel",
          workflow: "Notify logistics when order is ready",
          benefit: "Faster delivery turnaround",
          icon: <Truck className="h-5 w-5" />,
          details: {
            whatItDoes: "AI monitors production completion status in ERP and quality check results, automatically notifies logistics team via WhatsApp when orders are ready for dispatch, includes packaging requirements and customer delivery preferences, and generates shipping documentation.",
            howItHelps: [
              "Reduces order-to-shipment time by 40%",
              "Eliminates delays between production completion and shipping",
              "Automatically prioritizes shipments by customer importance",
              "Provides logistics team with all necessary shipping details"
            ],
            example: "Order #1234 for Dubai client completes final QC at 3 PM. AI immediately WhatsApps logistics: 'Order #1234 ready for dispatch. Customer: Emirates Steel. Address: Dubai Investment Park. Special handling: Fragile items. Preferred delivery: Tomorrow AM. Truck size: 3-ton minimum.'"
          }
        },
        {
          title: "Customer Complaint Handling",
          source: "WhatsApp, Email",
          workflow: "Extract complaint details, auto-log into ERP CRM",
          benefit: "Quicker response & resolution",
          icon: <MessageSquare className="h-5 w-5" />,
          details: {
            whatItDoes: "AI automatically reads customer complaint emails and WhatsApp messages, extracts key details (product batch, complaint type, severity), creates CRM tickets in ERP, assigns to appropriate departments, and sends acknowledgment messages to customers with ticket numbers and expected resolution times.",
            howItHelps: [
              "Reduces customer complaint response time from days to hours",
              "Ensures no customer complaint is missed or ignored",
              "Automatically escalates high-severity issues",
              "Maintains complete customer interaction history"
            ],
            example: "Customer WhatsApps: 'Received 50 steel sheets today. 10 have surface scratches. Batch #SS-2024-123.' AI creates CRM ticket, identifies batch details from ERP, assigns to QA manager, and responds: 'Complaint logged. Ticket #C-5678. QA team will investigate within 24 hours. Replacement processing.'"
          }
        }
      ]
    },
    {
      title: "Maintenance & Finance",
      icon: <Wrench className="h-6 w-6" />,
      description: "Automate maintenance scheduling and financial processes",
      useCases: [
        {
          title: "Preventive Maintenance Scheduling",
          source: "ERP Maintenance",
          workflow: "Auto-send reminders to technicians",
          benefit: "Reduce breakdowns",
          icon: <Wrench className="h-5 w-5" />,
          details: {
            whatItDoes: "AI tracks machine running hours and maintenance schedules in your ERP, automatically generates preventive maintenance tasks based on manufacturer recommendations, sends WhatsApp reminders to technicians with specific maintenance checklists, and tracks completion.",
            howItHelps: [
              "Reduces unexpected machine breakdowns by 70%",
              "Optimizes maintenance resource allocation",
              "Maintains manufacturer warranty compliance",
              "Tracks maintenance costs and trends for budgeting"
            ],
            example: "Injection molding machine reaches 2000 hours (service due every 2000h). AI WhatsApps technician Ahmed: 'PM due: Machine #3. Tasks: Oil change, belt inspection, temperature calibration. Estimated time: 3 hours. Schedule before Friday production run.' Tracks completion and updates ERP."
          }
        },
        {
          title: "Spare Parts Inventory Alerts",
          source: "ERP, Excel",
          workflow: "Auto-detect low stock, trigger procurement",
          benefit: "Avoid maintenance delays",
          icon: <Package2 className="h-5 w-5" />,
          details: {
            whatItDoes: "AI monitors spare parts inventory levels, predicts consumption based on maintenance schedules and machine performance history, automatically creates purchase requisitions when parts reach minimum levels, and sends alerts to maintenance and procurement teams.",
            howItHelps: [
              "Prevents maintenance delays due to missing spare parts",
              "Optimizes spare parts inventory without overstocking",
              "Reduces emergency spare parts purchases at premium prices",
              "Tracks spare parts usage patterns for better forecasting"
            ],
            example: "Hydraulic oil inventory drops to 50L (minimum: 100L). Machine #2 PM scheduled next week needs 80L. AI creates purchase requisition, WhatsApps procurement: 'Urgent: Hydraulic oil low. Next maintenance needs 80L. Current stock: 50L. Order 200L from Gulf Technical Supplies immediately.'"
          }
        },
        {
          title: "Automated Payment Reminders",
          source: "ERP Receivables",
          workflow: "Send WhatsApp/email reminders to customers",
          benefit: "Improved cash flow",
          icon: <CreditCard className="h-5 w-5" />,
          details: {
            whatItDoes: "AI monitors customer payment due dates in ERP accounts receivable, automatically sends polite payment reminder emails and WhatsApp messages with invoice copies and payment details, escalates overdue accounts, and tracks payment collection efficiency.",
            howItHelps: [
              "Reduces average collection time by 45%",
              "Maintains customer relationships with professional reminders",
              "Eliminates manual tracking of payment due dates",
              "Improves cash flow predictability for business planning"
            ],
            example: "Invoice #INV-2024-567 for AED 25,000 due tomorrow. AI WhatsApps client: 'Dear Fatima, friendly reminder: Invoice #INV-2024-567 (AED 25,000) due tomorrow. Payment options: Bank transfer/Check. Any questions? We appreciate your business!' Tracks response and payment status."
          }
        },
        {
          title: "Expense Approval Automation",
          source: "Email, Paper",
          workflow: "Extract details, auto-route for approval",
          benefit: "Faster approvals",
          icon: <FileCheck className="h-5 w-5" />,
          details: {
            whatItDoes: "AI reads expense requests from emails or scanned paper forms, extracts expense details (amount, category, justification), checks against company policies and budgets, automatically routes to appropriate approvers based on amount and type, and tracks approval status.",
            howItHelps: [
              "Reduces expense approval time from weeks to days",
              "Ensures policy compliance before reaching approvers",
              "Eliminates lost expense forms and approval delays",
              "Provides audit trail for all expense decisions"
            ],
            example: "Manager emails expense request: 'Need AED 5,000 for new quality measurement equipment.' AI checks budget (available: AED 12,000), routes to plant manager for approval, and WhatsApps requestor: 'Expense request submitted. Approval needed from Plant Manager. Typically takes 2-3 days.'"
          }
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
              🏭 Manufacturing Industry
            </Badge>
            
            <h1 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Smart Manufacturing
              </span>
              <br />
              for the GCC Region
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
              Transform your manufacturing operations with AI agents that understand local regulations, 
              communicate in Arabic/English, and integrate seamlessly with GCC supply chains.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow" asChild>
                <a href="https://app.apollo.io/#/meet/managed-meetings/AnandEthiraj/hgz-qap-fw2/30-min" target="_blank" rel="noopener noreferrer">
                  Schedule Manufacturing Consultation
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://app.apollo.io/#/meet/managed-meetings/AnandEthiraj/hgz-qap-fw2/30-min" target="_blank" rel="noopener noreferrer">
                  Download Manufacturing Case Study
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Workflows Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Nunar Manufacturing <span className="bg-gradient-primary bg-clip-text text-transparent">AI Workflows</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Proven AI implementations that have helped GCC manufacturers reduce costs by 25% and increase efficiency by 40%. 
              Each workflow is specifically designed for manufacturing operations in the UAE and GCC region.
            </p>
          </div>

          <div className="space-y-12">
            {workflowCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="space-y-8">
                {/* Category Header */}
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-3 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                      {category.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    {category.description}
                  </p>
                </div>

                {/* Use Cases Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.useCases.map((useCase, index) => (
                    <Accordion key={index} type="single" collapsible className="w-full">
                      <AccordionItem value={`item-${categoryIndex}-${index}`} className="border-none">
                        <Card className="relative shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer group revolving-border">
                          <AccordionTrigger className="hover:no-underline p-0 [&[data-state=open]>div>div>svg]:rotate-180 [&>svg]:mr-6 [&>svg]:text-muted-foreground">
                            <CardHeader className="w-full pr-12">
                              <div className="flex items-center space-x-4">
                                <div className="p-2 bg-primary/10 rounded-lg text-primary flex-shrink-0">
                                  {useCase.icon}
                                </div>
                                <div className="text-left">
                                  <CardTitle className="text-lg leading-tight">{useCase.title}</CardTitle>
                                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                                    {useCase.workflow}
                                  </p>
                                  <Badge variant="secondary" className="mt-2 text-xs">
                                    {useCase.benefit}
                                  </Badge>
                                </div>
                              </div>
                            </CardHeader>
                          </AccordionTrigger>
                          
                          <AccordionContent className="pb-6">
                            <div className="px-6 bg-muted/20 rounded-lg mx-6 p-6 space-y-4 border border-border/50">
                              <div>
                                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                                  What it does:
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">
                                  {useCase.details.whatItDoes}
                                </p>
                              </div>
                              
                              <div>
                                <h4 className="font-semibold text-foreground mb-3 flex items-center">
                                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                                  How it helps:
                                </h4>
                                <ul className="space-y-2">
                                  {useCase.details.howItHelps.map((help, helpIdx) => (
                                    <li key={helpIdx} className="flex items-start">
                                      <span className="text-green-500 mr-2 mt-1">✓</span>
                                      <span className="text-muted-foreground">{help}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              {useCase.details.example && (
                                <div>
                                  <h4 className="font-semibold text-foreground mb-3 flex items-center">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                                    Real-world example:
                                  </h4>
                                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-4 rounded-lg border-l-4 border-primary">
                                    <p className="text-muted-foreground leading-relaxed italic">
                                      {useCase.details.example}
                                    </p>
                                  </div>
                                </div>
                              )}
                            </div>
                          </AccordionContent>
                        </Card>
                      </AccordionItem>
                    </Accordion>
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
            Ready to Modernize Your <span className="bg-gradient-primary bg-clip-text text-transparent">Manufacturing?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join 15+ GCC manufacturers who have already automated their workflows with our AI agents.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow" asChild>
            <a href="https://app.apollo.io/#/meet/managed-meetings/AnandEthiraj/hgz-qap-fw2/30-min" target="_blank" rel="noopener noreferrer">
              Start Your Manufacturing Transformation
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Manufacturing;