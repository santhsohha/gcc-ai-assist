import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 1, 2025</p>
          
          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using Nunar AI services, you accept and agree to be bound by the terms and provision of this agreement. 
                These terms apply to all users of our AI automation services in the GCC region.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
              <p className="text-muted-foreground mb-4">
                Nunar AI provides custom AI workflow automation solutions for GCC businesses, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Custom AI agent development</li>
                <li>WhatsApp automation integration</li>
                <li>Process optimization consulting</li>
                <li>Arabic/English language support</li>
                <li>GCC-specific localization services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground mb-4">
                You agree to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Use our services in compliance with applicable GCC laws</li>
                <li>Not use our services for illegal or unauthorized purposes</li>
                <li>Maintain the confidentiality of your account credentials</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">4. Service Availability</h2>
              <p className="text-muted-foreground mb-4">
                We strive to provide 99.9% uptime for our AI services. However, we do not guarantee uninterrupted service and may 
                perform maintenance or updates that temporarily affect availability. We will provide advance notice when possible.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground mb-4">
                All AI models, algorithms, and solutions developed by Nunar AI remain our intellectual property. 
                However, you retain ownership of your business data and processes. We provide you with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>License to use the AI solutions for your business</li>
                <li>Access to customized AI agents</li>
                <li>Training and support materials</li>
                <li>Documentation and workflow guides</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">6. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Payment terms vary by service package:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Consultation services: Paid in advance</li>
                <li>AI development: 50% upfront, 50% on delivery</li>
                <li>Monthly subscriptions: Billed monthly in advance</li>
                <li>All payments in UAE Dirhams (AED) unless otherwise agreed</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                Nunar AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, 
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These terms shall be governed by and construed in accordance with the laws of the United Arab Emirates. 
                Any disputes shall be resolved in the courts of Dubai, UAE.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                For questions about these Terms of Service, contact us:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Email: legal@nunar.ai</li>
                <li>Address: Dubai, UAE</li>
                <li>WhatsApp: +971-XX-XXXXXXX</li>
              </ul>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;