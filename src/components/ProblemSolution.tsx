import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProblemSolution = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="bg-orange-50 text-orange-700 border-orange-200 mb-4">
            The Challenge
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            GCC SMBs Are <span className="bg-gradient-primary bg-clip-text text-transparent">Drowning in Manual Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            While your competitors grow, you're stuck managing repetitive tasks that eat 80+ hours monthly
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-red-200 shadow-card">
            <CardContent className="p-8">
              <div className="text-red-600 text-2xl mb-4">❌</div>
              <h3 className="text-2xl font-bold mb-4 text-red-700">Your Current Reality</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Hours spent on WhatsApp vendor follow-ups daily
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Manual report generation eating your weekends
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Generic software that doesn't fit local practices
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  No Arabic support for customer communications
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  Growth bottlenecks from operational overhead
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-2 border-green-200 shadow-glow">
            <CardContent className="p-8">
              <div className="text-green-600 text-2xl mb-4">✅</div>
              <h3 className="text-2xl font-bold mb-4 text-green-700">With Nunar AI Agents</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  AI handles WhatsApp vendor coordination 24/7
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Automated reports generated in minutes
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Custom-built for YOUR exact workflows
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Full Arabic/English bilingual support
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  3X output with same team size
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center space-x-4 bg-orange-50 px-8 py-4 rounded-full">
            <span className="text-2xl">💡</span>
            <span className="text-lg font-semibold text-orange-700">
              Stop hiring more staff. Start automating smarter.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;