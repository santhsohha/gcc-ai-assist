import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChevronDown } from "lucide-react";
import TranslationButton from "./TranslationButton";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">N</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Nunar
          </span>
        </div>
        
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-6">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[300px] p-2">
                  <NavigationMenuLink asChild>
                    <a href="/services/customaiagents" className="flex items-center space-x-3 p-3 rounded-md hover:bg-accent transition-colors">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 text-sm">🤖</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm">Custom AI Agents</div>
                        <p className="text-xs text-muted-foreground">Tailored AI solutions</p>
                      </div>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/services/whatsappautomation" className="flex items-center space-x-3 p-3 rounded-md hover:bg-accent transition-colors">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                        <span className="text-green-600 text-sm">📱</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm">WhatsApp Automation</div>
                        <p className="text-xs text-muted-foreground">Automate communication</p>
                      </div>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/services/gcclocalization" className="flex items-center space-x-3 p-3 rounded-md hover:bg-accent transition-colors">
                      <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                        <span className="text-orange-600 text-sm">🌍</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm">GCC Localization</div>
                        <p className="text-xs text-muted-foreground">Arabic customization</p>
                      </div>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/services/processoptimization" className="flex items-center space-x-3 p-3 rounded-md hover:bg-accent transition-colors">
                      <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                        <span className="text-purple-600 text-sm">⚡</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm">Process Optimization</div>
                        <p className="text-xs text-muted-foreground">Streamline workflows</p>
                      </div>
                    </a>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                Industries
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[300px] p-2">
                  <NavigationMenuLink asChild>
                    <a href="/industries/manufacturing" className="flex items-center space-x-3 p-3 rounded-md hover:bg-accent transition-colors">
                      <div className="w-8 h-8 bg-gray-100 dark:bg-gray-900/20 rounded-lg flex items-center justify-center">
                        <span className="text-gray-600 text-sm">🏭</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm">Manufacturing</div>
                        <p className="text-xs text-muted-foreground">Production automation</p>
                      </div>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/industries/healthcare" className="flex items-center space-x-3 p-3 rounded-md hover:bg-accent transition-colors">
                      <div className="w-8 h-8 bg-red-100 dark:bg-red-900/20 rounded-lg flex items-center justify-center">
                        <span className="text-red-600 text-sm">🏥</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm">Healthcare</div>
                        <p className="text-xs text-muted-foreground">Patient management</p>
                      </div>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/industries/logistics" className="flex items-center space-x-3 p-3 rounded-md hover:bg-accent transition-colors">
                      <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 text-sm">🚚</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm">Logistics</div>
                        <p className="text-xs text-muted-foreground">Delivery tracking</p>
                      </div>
                    </a>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <a href="/industries/retail" className="flex items-center space-x-3 p-3 rounded-md hover:bg-accent transition-colors">
                      <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                        <span className="text-green-600 text-sm">🛒</span>
                      </div>
                      <div>
                        <div className="font-medium text-sm">Retail & Hypermarkets</div>
                        <p className="text-xs text-muted-foreground">Inventory management</p>
                      </div>
                    </a>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#roi-calculator" className="text-foreground hover:text-primary transition-colors">
                  ROI Calculator
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a href="#faq" className="text-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <span className="text-sm text-muted-foreground">🇦🇪 Based in UAE • Serving GCC</span>
          <TranslationButton />
          <Button size="sm" className="bg-gradient-primary hover:shadow-glow">
            Start Free Trial
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;