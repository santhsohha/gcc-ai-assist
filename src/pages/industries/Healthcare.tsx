import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft, Heart, Calendar, FileText, Users, MessageSquare, Mail, Upload, TestTube, CreditCard, Clock, Stethoscope, Clipboard, DollarSign, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Healthcare = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const workflowCategories = [
    {
      title: "Patient Management & Communication",
      icon: <MessageSquare className="h-6 w-6" />,
      description: "Streamline patient interactions and appointment management",
      useCases: [
        {
          title: "WhatsApp Appointment Bot",
          description: "Patients book, reschedule, or cancel appointments via WhatsApp, auto-updated in HIS/EMR.",
          icon: <MessageSquare className="h-5 w-5" />,
          details: {
            whatItDoes: "This intelligent bot handles all patient appointment requests through WhatsApp, automatically checking doctor availability, booking slots, and updating your Hospital Information System (HIS) or EMR in real-time. Patients simply text their preferred date and time.",
            howItHelps: [
              "Eliminates phone tag between patients and reception staff",
              "Works 24/7, even when your clinic is closed",
              "Reduces appointment booking time from 5 minutes to 30 seconds",
              "Automatically sends appointment confirmations and reminders"
            ],
            example: "A patient messages: 'Hi, I need to see Dr. Ahmed next Tuesday morning.' The bot checks availability, responds: 'Dr. Ahmed is available Tuesday at 10:30 AM. Shall I book this for you?' Patient confirms, and the appointment is automatically logged in your HIS with all details."
          }
        },
        {
          title: "Email-to-HIS Patient Intake",
          description: "Extract patient details from incoming emails and create HIS records instantly.",
          icon: <Mail className="h-5 w-5" />,
          details: {
            whatItDoes: "AI reads incoming patient emails (referrals, new patient forms, consultation requests), extracts all relevant information like demographics, medical history, and chief complaints, then automatically creates structured patient records in your HIS.",
            howItHelps: [
              "Saves 10-15 minutes per patient intake",
              "Eliminates manual data entry errors",
              "Processes patient information even outside office hours",
              "Standardizes patient data format across your system"
            ],
            example: "A patient emails: 'I'm Sarah Ahmed, 32 years old, Emirates ID 123456789. I have persistent headaches for 2 weeks and need to see a neurologist.' The AI extracts all details and creates a complete patient profile in your HIS, ready for the doctor's review."
          }
        },
        {
          title: "Excel Bulk Appointment Upload",
          description: "Upload Excel lists to auto-schedule visits and send WhatsApp confirmations.",
          icon: <Upload className="h-5 w-5" />,
          details: {
            whatItDoes: "Upload Excel sheets with patient lists (for health camps, corporate check-ups, or follow-up visits), and the AI automatically schedules appointments based on doctor availability, then sends WhatsApp confirmations to each patient with their specific time slot.",
            howItHelps: [
              "Schedules 100+ appointments in minutes instead of hours",
              "Optimizes doctor schedules to minimize gaps",
              "Automatically handles time zone conversions for different emirates",
              "Reduces administrative workload by 80% for bulk scheduling"
            ],
            example: "Upload an Excel file with 150 employees for annual health check-ups. The AI spreads appointments across available dates, assigns appropriate doctors based on gender preferences, and sends each employee a WhatsApp: 'Your health check-up is scheduled for Monday, Oct 15 at 2:30 PM with Dr. Fatima.'"
          }
        }
      ]
    },
    {
      title: "Clinical Operations & Reports",
      icon: <TestTube className="h-6 w-6" />,
      description: "Automate lab results, reports, and clinical documentation",
      useCases: [
        {
          title: "Lab Report Auto-Delivery",
          description: "Pull reports from LIMS/HIS and send securely to patients via WhatsApp or email.",
          icon: <TestTube className="h-5 w-5" />,
          details: {
            whatItDoes: "The moment lab results are ready in your Laboratory Information Management System (LIMS), AI automatically packages the reports, adds doctor interpretation if needed, and securely delivers them to patients via their preferred communication channel (WhatsApp or email).",
            howItHelps: [
              "Patients receive results instantly instead of waiting days",
              "Reduces phone calls asking about report status by 90%",
              "Ensures no patient misses critical results",
              "Maintains HIPAA compliance with secure delivery"
            ],
            example: "Mr. Ali's blood work is completed at 2 PM. By 2:05 PM, he receives a WhatsApp message: 'Your lab results are ready. Download securely: [link]. Dr. Mansoor will discuss the results during your follow-up on Thursday at 3 PM.'"
          }
        },
        {
          title: "Insurance Claim Tracker",
          description: "Read claim requests from email or Excel, update HIS, and send claim status updates.",
          icon: <CreditCard className="h-5 w-5" />,
          details: {
            whatItDoes: "AI monitors insurance claim submissions, tracks their progress with various insurance providers (HAAD, DHA, SEHA), automatically updates patient records with claim status, and notifies patients about approval, rejection, or additional documentation needs.",
            howItHelps: [
              "Reduces claim processing time by 60%",
              "Eliminates patients calling to check claim status",
              "Automatically resubmits rejected claims with corrections",
              "Tracks claim payments and updates accounting system"
            ],
            example: "A patient submits an insurance claim for a surgery. The AI tracks it through ADNIC insurance, sends the patient updates: 'Your claim #12345 is under review' then later 'Claim approved! AED 15,000 will be directly settled with the hospital.'"
          }
        },
        {
          title: "Doctor Availability Alerts",
          description: "Broadcast walk-in or teleconsultation slots from HIS to patients via WhatsApp.",
          icon: <Clock className="h-5 w-5" />,
          details: {
            whatItDoes: "When doctors have unexpected availability due to cancellations or want to offer same-day appointments, the AI automatically identifies suitable patients from the waiting list and broadcasts availability via WhatsApp, allowing patients to book immediately.",
            howItHelps: [
              "Fills cancelled appointment slots within minutes",
              "Reduces doctor idle time by 40%",
              "Improves patient satisfaction with faster access to care",
              "Maximizes clinic revenue through better scheduling"
            ],
            example: "Dr. Sarah has a cancellation at 4 PM. The AI immediately texts 5 patients on her waiting list: 'Dr. Sarah has an opening today at 4 PM. Reply YES to book this slot. First to respond gets the appointment.' Patient responds within minutes, slot is filled."
          }
        }
      ]
    },
    {
      title: "Patient Care & Follow-up",
      icon: <Heart className="h-6 w-6" />,
      description: "Automated care coordination and patient engagement",
      useCases: [
        {
          title: "Post-Consultation Care Reminders",
          description: "HIS triggers WhatsApp/email reminders for medication, tests, or follow-ups.",
          icon: <Stethoscope className="h-5 w-5" />,
          details: {
            whatItDoes: "Based on doctor's post-consultation instructions in the HIS, AI automatically schedules and sends personalized reminders to patients about medications, lab tests, lifestyle changes, or follow-up appointments at the right intervals.",
            howItHelps: [
              "Improves patient compliance with treatment plans by 70%",
              "Reduces missed follow-up appointments by 50%",
              "Enhances treatment outcomes through consistent care",
              "Builds stronger doctor-patient relationships"
            ],
            example: "After a diabetes consultation, the patient automatically receives: Day 1: 'Remember to take your Metformin with breakfast and dinner.' Day 7: 'Please schedule your HbA1c test this week.' Day 30: 'Time for your follow-up with Dr. Ahmed - shall I book an appointment?'"
          }
        },
        {
          title: "Surgery & Procedure Coordination",
          description: "Sync HIS schedules with WhatsApp/email alerts for staff and patient families.",
          icon: <Clipboard className="h-5 w-5" />,
          details: {
            whatItDoes: "Coordinates complex surgical procedures by automatically notifying all stakeholders - patient families, surgical team, anesthesiologists, and nursing staff - about pre-op instructions, surgery timing, and post-op updates through synchronized WhatsApp and email alerts.",
            howItHelps: [
              "Ensures all family members receive real-time surgery updates",
              "Coordinates surgical team schedules automatically",
              "Reduces family anxiety with proactive communication",
              "Minimizes surgery delays due to miscommunication"
            ],
            example: "Before Mr. Ahmed's heart surgery: Family receives pre-op instructions via WhatsApp. Surgery day: 'Surgery started at 9 AM.' 'Surgery completed successfully at 12 PM.' 'Patient moved to recovery, expected discharge Wednesday.' All automated based on surgeon's updates in HIS."
          }
        },
        {
          title: "Automated Billing & Payment Links",
          description: "Send invoices and payment links from HIS to patients via WhatsApp or email.",
          icon: <DollarSign className="h-5 w-5" />,
          details: {
            whatItDoes: "Immediately after consultation or treatment, the AI generates itemized bills from your HIS, calculates insurance portions, and sends patients secure payment links via WhatsApp or email with multiple payment options (Apple Pay, card, bank transfer).",
            howItHelps: [
              "Reduces payment collection time from weeks to hours",
              "Eliminates billing counter queues",
              "Automatically tracks partial payments and insurance settlements",
              "Improves cash flow by 60% through faster payments"
            ],
            example: "After consultation, patient receives WhatsApp: 'Your consultation bill: AED 300. Insurance covers: AED 240. Your portion: AED 60. Pay now: [secure link]. Payment methods: Card/ApplePay/Bank transfer.' Patient pays instantly from their phone."
          }
        },
        {
          title: "Feedback & NPS Automation",
          description: "Trigger surveys post-discharge from HIS or Excel, collect and store responses in HIS.",
          icon: <Star className="h-5 w-5" />,
          details: {
            whatItDoes: "Automatically sends patient satisfaction surveys via WhatsApp or email after discharge or consultation, collects feedback about doctors, staff, and facilities, then analyzes sentiment and stores insights in your HIS for quality improvement tracking.",
            howItHelps: [
              "Captures patient feedback when experience is fresh",
              "Identifies service issues before they become problems",
              "Improves online reviews and hospital reputation",
              "Provides data-driven insights for quality improvement"
            ],
            example: "24 hours after discharge, patient receives: 'How was your experience with Dr. Fatima? Rate 1-5 stars. Any suggestions for improvement?' Responses automatically update doctor performance metrics in HIS and flag any issues for management review."
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
              🏥 Healthcare Industry
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Healthcare Excellence
              </span>
              <br />
              Through AI Automation
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl leading-relaxed">
              Enhance patient care and streamline operations with AI agents designed for modern healthcare facilities. 
              <span className="block mt-2 font-semibold">HIPAA compliant. Multi-language support. Seamless HIS integration.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base md:text-lg px-8 py-6 bg-gradient-primary hover:shadow-glow" asChild>
                <a href="https://app.apollo.io/#/meet/managed-meetings/AnandEthiraj/hgz-qap-fw2/30-min" target="_blank" rel="noopener noreferrer">
                  Schedule Healthcare Consultation
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-base md:text-lg px-8 py-6 border-2" asChild>
                <a href="https://app.apollo.io/#/meet/managed-meetings/AnandEthiraj/hgz-qap-fw2/30-min" target="_blank" rel="noopener noreferrer">
                  Download Healthcare Case Study
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Workflows Section - Executive Design */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <Badge className="mb-6 text-base px-8 py-3 bg-gradient-to-r from-primary/20 to-purple-600/20 border-primary/30">
              Clinical-Ready AI Solutions
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
                Elevate Patient Care
              </span>
              <br />
              <span className="text-foreground">With Proven Results</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Trusted by healthcare facilities to improve patient satisfaction by 40% and reduce administrative overhead by 60%. 
              <span className="block mt-2 text-primary font-semibold">Zero coding. HIPAA compliant. Seamless integration.</span>
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
                        </div>
                        <CardTitle className="text-xl md:text-2xl mb-3 leading-tight group-hover/card:text-primary transition-colors">
                          {useCase.title}
                        </CardTitle>
                        
                        {/* Description */}
                        <div className="bg-muted/50 rounded-lg p-4">
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                            {useCase.description}
                          </p>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4 flex-1 flex flex-col">
                        <Accordion type="single" collapsible className="w-full flex-1">
                          <AccordionItem value={`details-${categoryIndex}-${index}`} className="border-none">
                            <AccordionTrigger className="hover:no-underline py-3 text-primary hover:text-primary/80 font-semibold text-base">
                              View Full Details & Impact
                            </AccordionTrigger>
                            <AccordionContent className="space-y-5 pt-4 border-t">
                              {/* Strategic Value */}
                              <div>
                                <h5 className="font-bold text-base md:text-lg mb-3 flex items-center gap-2 text-foreground">
                                  <Heart className="h-5 w-5 text-primary" />
                                  Clinical Value
                                </h5>
                                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                                  {useCase.details.whatItDoes}
                                </p>
                              </div>

                              {/* Quantified Benefits */}
                              <div className="bg-gradient-to-br from-primary/5 to-purple-600/5 rounded-lg p-4 border border-primary/10">
                                <h5 className="font-bold text-base md:text-lg mb-4 flex items-center gap-2 text-foreground">
                                  <Star className="h-5 w-5 text-primary" />
                                  Measurable Outcomes
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

                              {/* Real-World Example */}
                              <div className="bg-gradient-to-br from-muted/80 to-muted/40 rounded-xl p-5 border-l-4 border-primary">
                                <h5 className="font-bold text-base md:text-lg mb-3 flex items-center gap-2 text-foreground">
                                  <Stethoscope className="h-5 w-5 text-primary" />
                                  Real-World Scenario
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
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Ready to Transform Patient Care?</h3>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join healthcare leaders who've achieved <span className="font-bold text-primary">40% higher patient satisfaction</span> with our AI workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base md:text-lg px-8 py-6 bg-gradient-to-r from-primary to-purple-600 hover:opacity-90">
                Schedule Clinical Consultation
              </Button>
              <Button size="lg" variant="outline" className="text-base md:text-lg px-8 py-6 border-2 hover:bg-primary/10">
                Download Impact Report
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Transform Your <span className="bg-gradient-primary bg-clip-text text-transparent">Healthcare Operations</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join leading GCC healthcare providers who trust our AI agents for better patient care and operational efficiency.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:shadow-glow" asChild>
            <a href="https://app.apollo.io/#/meet/managed-meetings/AnandEthiraj/hgz-qap-fw2/30-min" target="_blank" rel="noopener noreferrer">
              Start Your Healthcare AI Journey
            </a>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Healthcare;