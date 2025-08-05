import { AlertTriangle, Clock, Phone, FileText } from "lucide-react";

const PainPoint = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Visual representation */}
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/20 dark:to-orange-800/20 rounded-2xl p-8 border shadow-lg">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border shadow-sm">
                  <div className="text-sm font-medium mb-2">Excel Sheets</div>
                  <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded"></div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border shadow-sm">
                  <div className="text-sm font-medium mb-2">Analytics</div>
                  <div className="h-8 bg-gradient-to-r from-blue-200 to-blue-300 dark:from-blue-600 dark:to-blue-700 rounded"></div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <div className="bg-green-500 rounded-lg p-2 inline-block mb-4">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div className="text-xs text-muted-foreground">
                  Overwhelmed with manual tasks
                </div>
              </div>
              
              <div className="mt-6 space-y-2">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border shadow-sm">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-orange-500" />
                    <span className="text-xs">Manual Reports</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-800 rounded-lg p-3 border shadow-sm">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-red-500" />
                    <span className="text-xs">Time-consuming Tasks</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Problem description */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              "Your operations are growing. But your team is still doing{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                manual work.
              </span>
              "
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                <p className="text-muted-foreground">
                  Repetitive vendor follow-ups eating up valuable time
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                <p className="text-muted-foreground">
                  WhatsApp coordination for deliveries scattered across conversations
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                <p className="text-muted-foreground">
                  Manual appointment and report handling slowing down operations
                </p>
              </div>
            </div>

            <div className="bg-card border border-orange-200 dark:border-orange-800 rounded-lg p-6 mb-8">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-orange-500 mt-1 shrink-0" />
                <p className="text-sm text-foreground">
                  <strong>In the Middle East, many SMBs still rely on manual processes that slow down scale.</strong> Off-the-shelf software doesn't adapt to how your team works.
                </p>
              </div>
            </div>

            <div className="text-foreground">
              <p className="text-lg">
                With <span className="font-semibold text-primary">Nunar</span>, we bring AI automation that works exactly like your best employee — only faster and 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoint;