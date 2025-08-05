import { Clock, MessageSquare, FileText, TrendingDown } from "lucide-react";

const PainPoint = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Clean visual representation */}
          <div className="order-2 lg:order-1">
            <div className="relative bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 rounded-3xl p-8 border">
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border">
                  <div className="flex items-center space-x-2 mb-3">
                    <FileText className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Excel Sheets</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-gray-900 rounded-xl p-4 shadow-sm border">
                  <div className="flex items-center space-x-2 mb-3">
                    <TrendingDown className="h-4 w-4 text-red-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Analytics</span>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-blue-200 dark:bg-blue-800 rounded"></div>
                    <div className="h-2 bg-blue-200 dark:bg-blue-800 rounded w-2/3"></div>
                    <div className="h-2 bg-blue-200 dark:bg-blue-800 rounded w-1/3"></div>
                  </div>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <span className="text-2xl">👨‍💼</span>
                </div>
                <div className="bg-green-500 rounded-lg p-2 inline-flex items-center space-x-2 mb-3 shadow-sm">
                  <MessageSquare className="h-4 w-4 text-white" />
                  <span className="text-white text-sm font-medium">Manual Coordination</span>
                </div>
                <p className="text-sm text-orange-600 dark:text-orange-400 font-medium">
                  Overwhelmed with repetitive tasks
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border shadow-sm">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-orange-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Time-consuming Manual Reports</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border shadow-sm">
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="h-4 w-4 text-red-500" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Scattered WhatsApp Conversations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Problem description */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Your operations are growing. But your team is still doing{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  manual work.
                </span>
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-lg text-muted-foreground">
                    Repetitive vendor follow-ups eating up valuable time
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-lg text-muted-foreground">
                    WhatsApp coordination scattered across conversations
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-lg text-muted-foreground">
                    Manual appointment and report handling
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
              <p className="text-foreground font-medium text-lg">
                In the Middle East, many SMBs still rely on manual processes that slow down scale. 
                Off-the-shelf software doesn't adapt to how your team works.
              </p>
            </div>

            <div>
              <p className="text-xl text-foreground font-medium">
                With <span className="font-bold text-primary">Nunar</span>, we bring AI automation that works exactly like your best employee — only faster and 24/7.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoint;