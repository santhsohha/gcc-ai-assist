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
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 text-base px-8 py-3 bg-gradient-to-r from-primary/20 to-purple-600/20 border-primary/30">
              Executive-Ready AI Solutions
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
                Transform Operations
              </span>
              <br />
              <span className="text-foreground">With Proven ROI</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Battle-tested workflows delivering measurable impact for GCC manufacturers. 
              <span className="block mt-2 text-primary font-semibold">Zero coding. Enterprise-grade security. Seamless integration.</span>
            </p>
          </div>

          <div className="space-y-12">
            {workflowCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="group">
                {/* Category Header */}
                <div className="flex items-center gap-6 mb-8 pb-6 border-b-2 border-primary/20">
                  <div className="p-4 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">{category.title}</h3>
                    <p className="text-lg text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                {/* Use Cases Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.useCases.map((useCase, index) => (
                    <Card 
                      key={index}
                      className="group/card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 border-2 hover:border-primary/50 cursor-pointer overflow-hidden h-full flex flex-col"
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-4">
                          <div className="p-3 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-xl group-hover/card:scale-110 transition-transform">
                            {useCase.icon}
                          </div>
                          <Badge variant="outline" className="text-xs font-semibold border-primary/30">
                            {useCase.source}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl md:text-2xl mb-3 leading-tight group-hover/card:text-primary transition-colors">
                          {useCase.title}
                        </CardTitle>
                        
                        {/* Business Impact Badge */}
                        <div className="flex items-center gap-2 bg-primary/10 rounded-lg px-4 py-3 border border-primary/20">
                          <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="font-bold text-sm md:text-base text-primary">{useCase.benefit}</span>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4 flex-1 flex flex-col">
                        {/* Workflow Overview */}
                        <div className="bg-muted/50 rounded-lg p-4">
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            <span className="font-semibold text-foreground">How it works: </span>
                            {useCase.workflow}
                          </p>
                        </div>

                        <Accordion type="single" collapsible className="w-full flex-1">
                          <AccordionItem value={`details-${categoryIndex}-${index}`} className="border-none">
                            <AccordionTrigger className="hover:no-underline py-3 text-primary hover:text-primary/80 font-semibold text-base">
                              View Full Details & ROI
                            </AccordionTrigger>
                            <AccordionContent className="space-y-5 pt-4 border-t">
                              {/* Strategic Value */}
                              <div>
                                <h5 className="font-bold text-base md:text-lg mb-3 flex items-center gap-2 text-foreground">
                                  <Shield className="h-5 w-5 text-primary" />
                                  Strategic Value
                                </h5>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                  {useCase.details.whatItDoes}
                                </p>
                              </div>

                              {/* Quantified Benefits */}
                              <div className="bg-gradient-to-br from-primary/5 to-purple-600/5 rounded-lg p-4 border border-primary/10">
                                <h5 className="font-bold text-base md:text-lg mb-4 flex items-center gap-2 text-foreground">
                                  <TrendingUp className="h-5 w-5 text-primary" />
                                  Quantified Impact
                                </h5>
                                <ul className="space-y-3">
                                  {useCase.details.howItHelps.map((help, helpIdx) => (
                                    <li key={helpIdx} className="flex items-start gap-3">
                                      <div className="mt-0.5 p-1 bg-primary/20 rounded-full">
                                        <div className="h-2 w-2 bg-primary rounded-full" />
                                      </div>
                                      <span className="text-sm md:text-base font-medium text-foreground flex-1">{help}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Live Scenario */}
                              <div className="bg-gradient-to-br from-muted/80 to-muted/40 rounded-xl p-5 border-l-4 border-primary">
                                <h5 className="font-bold text-base md:text-lg mb-3 flex items-center gap-2 text-foreground">
                                  <Factory className="h-5 w-5 text-primary" />
                                  Live Scenario
                                </h5>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                  "{useCase.details.example}"
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
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Ready to Scale Your Manufacturing Excellence?</h3>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join GCC manufacturing leaders who've achieved <span className="font-bold text-primary">40-70% efficiency gains</span> with our AI workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base md:text-lg px-8 py-6 bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">
                Schedule Executive Briefing
              </Button>
              <Button size="lg" variant="outline" className="text-base md:text-lg px-8 py-6 border-2 hover:bg-primary/10">
                Download ROI Calculator
              </Button>
            </div>
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