const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-16 px-4">
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
            <p className="text-sm font-semibold">🇦🇪 Based in UAE • Serving GCC</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Custom AI Agents</li>
              <li>WhatsApp Automation</li>
              <li>Process Optimization</li>
              <li>Arabic/English Support</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Manufacturing</li>
              <li>Healthcare</li>
              <li>Logistics</li>
              <li>Retail & Hypermarkets</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📧 hello@nunar.ai</li>
              <li>📱 WhatsApp: +971-XX-XXXXXXX</li>
              <li>🏢 Dubai, UAE</li>
              <li>🌐 Serving GCC Region</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Nunar AI. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;