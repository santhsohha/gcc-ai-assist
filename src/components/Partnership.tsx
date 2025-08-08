import { Users, Lightbulb, Puzzle, TrendingUp } from "lucide-react";

// Import company logos - using actual company logos
import whatsappLogo from "@/assets/logos/whatsapp.png";
import chatgptLogo from "@/assets/logos/chatgpt.png";
import facebookLogo from "@/assets/logos/facebook.png";
import gmailLogo from "@/assets/logos/gmail.png";
import notionLogo from "@/assets/logos/notion.png";
import slackLogo from "@/assets/logos/slack.png";
import zoomLogo from "@/assets/logos/zoom.png";
import dropboxLogo from "@/assets/logos/dropbox.png";
import trelloLogo from "@/assets/logos/trello.png";
import quickbooksLogo from "@/assets/logos/quickbooks.png";
// Import remaining logos
import microsoftLogo from "@/assets/logos/microsoft.png";
import asanaLogo from "@/assets/logos/asana.png";
import shopifyLogo from "@/assets/logos/shopify.png";
import paypalLogo from "@/assets/logos/paypal.png";
import stripeLogo from "@/assets/logos/stripe.png";
import azureLogo from "@/assets/logos/azure.png";
import instagramLogo from "@/assets/logos/instagram.png";
import googleLogo from "@/assets/logos/google.png";
import linkedinLogo from "@/assets/logos/linkedin.png";
import slackIconLogo from "@/assets/logos/slack-icon.png";
import typescriptLogo from "@/assets/logos/typescript.png";
import reactLogo from "@/assets/logos/react.png";
import javascriptLogo from "@/assets/logos/javascript.png";
import gitLogo from "@/assets/logos/git.png";
import githubLogo from "@/assets/logos/github.png";
import dockerLogo from "@/assets/logos/docker.png";
import figmaLogo from "@/assets/logos/figma.png";
import jupyterLogo from "@/assets/logos/jupyter.png";
import pythonLogo from "@/assets/logos/python.png";
import phpLogo from "@/assets/logos/php.png";
import nodejsLogo from "@/assets/logos/nodejs.png";
import databaseLogo from "@/assets/logos/database.png";
import mongodbLogo from "@/assets/logos/mongodb.png";
import postgresqlLogo from "@/assets/logos/postgresql.png";
import androidLogo from "@/assets/logos/android.png";
import appleLogo from "@/assets/logos/apple.png";
import amazonLogo from "@/assets/logos/amazon.png";
import awsLogo from "@/assets/logos/aws.png";
import geminiLogo from "@/assets/logos/gemini.png";
import mailchimpLogo from "@/assets/logos/mailchimp.png";
const Partnership = () => {
  return <section className="py-20 bg-gradient-to-br from-muted/10 to-background bg-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            We Work With Your Team{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Like a Partner
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't just sell you software. We become your AI transformation partner.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Left side - Process steps */}
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl shrink-0 shadow-lg">
                1
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground flex items-center">
                  <Users className="mr-3 h-6 w-6 text-primary" />
                  We Understand{" "}
                  <span className="text-muted-foreground ml-2 font-normal">your daily operations</span>
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Deep dive into your current workflows and pain points. We spend time learning how your team actually works.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl shrink-0 shadow-lg">
                2
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground flex items-center">
                  <Lightbulb className="mr-3 h-6 w-6 text-primary" />
                  We Design{" "}
                  <span className="text-muted-foreground ml-2 font-normal">AI workflows tailored to your style</span>
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Custom automation solutions that match your business processes. No generic templates.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl shrink-0 shadow-lg">
                3
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground flex items-center">
                  <Puzzle className="mr-3 h-6 w-6 text-primary" />
                  We Integrate{" "}
                  <span className="text-muted-foreground ml-2 font-normal">with your existing tools</span>
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Seamless connection with ERP, WhatsApp, Email, Google Sheets, and all your current systems.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-14 h-14 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground font-bold text-xl shrink-0 shadow-lg">
                4
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-foreground flex items-center">
                  <TrendingUp className="mr-3 h-6 w-6 text-primary" />
                  You Scale{" "}
                  <span className="text-muted-foreground ml-2 font-normal">without hiring more people</span>
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Achieve growth targets with your current team size. Focus on strategy, not operations.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Results showcase */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-gradient-to-br from-card to-muted/10 rounded-3xl p-8 border shadow-xl">
              <div className="text-center mb-8">
                <div className="inline-flex items-center bg-gradient-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold mb-6 shadow-lg">
                  <span className="mr-2">🧠</span>
                  AI-Powered Business Transformation
                </div>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-background to-muted/20 rounded-2xl p-6 border text-center shadow-sm">
                    <div className="text-3xl font-bold text-primary mb-2">30+</div>
                    <div className="text-sm text-muted-foreground font-medium">Workflows Built</div>
                  </div>
                  <div className="bg-gradient-to-br from-background to-muted/20 rounded-2xl p-6 border text-center shadow-sm">
                    <div className="text-3xl font-bold text-primary mb-2">2-4</div>
                    <div className="text-sm text-muted-foreground font-medium">Weeks to Deploy</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-foreground mb-4 font-bold text-xl">30+ Integrations to boost your productivity by 5X</h4>
                <div className="grid grid-cols-6 gap-3">
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={whatsappLogo} alt="WhatsApp" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={chatgptLogo} alt="ChatGPT" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={facebookLogo} alt="Facebook" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={gmailLogo} alt="Gmail" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={notionLogo} alt="Notion" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={slackLogo} alt="Slack" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={zoomLogo} alt="Zoom" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={dropboxLogo} alt="Dropbox" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={trelloLogo} alt="Trello" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={quickbooksLogo} alt="QuickBooks" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={microsoftLogo} alt="Microsoft" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={trelloLogo} alt="Trello" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={notionLogo} alt="Notion" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={asanaLogo} alt="Asana" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={shopifyLogo} alt="Shopify" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={paypalLogo} alt="PayPal" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={stripeLogo} alt="Stripe" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={dropboxLogo} alt="Dropbox" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={zoomLogo} alt="Zoom" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={awsLogo} alt="AWS" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={azureLogo} alt="Microsoft Azure" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={reactLogo} alt="React" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={nodejsLogo} alt="Node.js" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={pythonLogo} alt="Python" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={mongodbLogo} alt="MongoDB" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={postgresqlLogo} alt="PostgreSQL" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={dockerLogo} alt="Docker" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={githubLogo} alt="GitHub" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={figmaLogo} alt="Figma" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center p-1">
                    <img src={mailchimpLogo} alt="Mailchimp" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Partnership;