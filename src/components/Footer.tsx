import { Link } from "react-router-dom";
const Footer = () => {
  return <footer className="bg-accent text-accent-foreground py-16 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">N</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Nunar
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              AI workflow automation consultancy for GCC SMBs. Custom AI agents that save 80+ hours monthly.
            </p>
            <p className="text-sm font-semibold">
          </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/services/customaiagents" className="hover:text-primary transition-colors">Custom AI Agents</Link></li>
              <li><Link to="/services/whatsappautomation" className="hover:text-primary transition-colors">WhatsApp Automation</Link></li>
              <li><Link to="/services/processoptimization" className="hover:text-primary transition-colors">Process Optimization</Link></li>
              <li><Link to="/services/gcclocalization" className="hover:text-primary transition-colors">GCC Localization</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/industries/manufacturing" className="hover:text-primary transition-colors">Manufacturing</Link></li>
              <li><Link to="/industries/healthcare" className="hover:text-primary transition-colors">Healthcare</Link></li>
              <li><Link to="/industries/logistics" className="hover:text-primary transition-colors">Logistics</Link></li>
              <li><Link to="/industries/retail" className="hover:text-primary transition-colors">Retail & Hypermarkets</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
          </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
            </li>
              <li>
            </li>
              <li>
            </li>
              <li>
            </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
           <p className="text-sm text-muted-foreground">
  © Nunar, a <a href="https://www.hakunamatatatech.com/" target="_blank">Hakuna Matata Solutions</a> brand.
</p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
              <Link to="/support" className="hover:text-primary transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;