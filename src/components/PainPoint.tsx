import { Clock, MessageSquare, FileText, TrendingDown } from "lucide-react";

const PainPoint = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left side - Arab businessman overwhelmed with tasks */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-3xl blur-3xl"></div>
              <img 
                src="/lovable-uploads/581f3365-54ad-47c7-960f-ff1fd1044a12.png" 
                alt="Overwhelmed Arab businessman with manual tasks" 
                className="relative rounded-3xl shadow-2xl w-full h-auto"
                data-translate
                data-en="Overwhelmed Arab businessman with manual tasks"
                data-ar="رجل أعمال عربي مثقل بالمهام اليدوية"
              />
            </div>
          </div>

          {/* Right side - Problem description */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6"
                  data-translate
                  data-en="Your operations are growing. But your team is still doing manual work."
                  data-ar="عملياتك تنمو. لكن فريقك لا يزال يقوم بالعمل اليدوي.">
                <span 
                  data-translate
                  data-en="Your operations are growing. But your team is still doing"
                  data-ar="عملياتك تنمو. لكن فريقك لا يزال يقوم بـ">
                  Your operations are growing. But your team is still doing{" "}
                </span>
                <span className="bg-gradient-primary bg-clip-text text-transparent"
                      data-translate
                      data-en="manual work."
                      data-ar="العمل اليدوي.">
                  manual work.
                </span>
              </h2>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-lg text-muted-foreground"
                     data-translate
                     data-en="Repetitive vendor follow-ups eating up valuable time"
                     data-ar="متابعات الموردين المتكررة تستهلك الوقت الثمين">
                    Repetitive vendor follow-ups eating up valuable time
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-lg text-muted-foreground"
                     data-translate
                     data-en="WhatsApp coordination scattered across conversations"
                     data-ar="تنسيق الواتساب مبعثر عبر المحادثات">
                    WhatsApp coordination scattered across conversations
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0"></div>
                  <p className="text-lg text-muted-foreground"
                     data-translate
                     data-en="Manual appointment and report handling"
                     data-ar="التعامل اليدوي مع المواعيد والتقارير">
                    Manual appointment and report handling
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 rounded-xl p-6 border border-orange-200 dark:border-orange-800">
              <p className="text-foreground font-medium text-lg"
                 data-translate
                 data-en="In the Middle East, many SMBs still rely on manual processes that slow down scale. Off-the-shelf software doesn't adapt to how your team works."
                 data-ar="في الشرق الأوسط، لا تزال العديد من الشركات الصغيرة والمتوسطة تعتمد على العمليات اليدوية التي تبطئ النمو. البرامج الجاهزة لا تتكيف مع طريقة عمل فريقك.">
                In the Middle East, many SMBs still rely on manual processes that slow down scale. 
                Off-the-shelf software doesn't adapt to how your team works.
              </p>
            </div>

            <div>
              <p className="text-xl text-foreground font-medium"
                 data-translate
                 data-en="With Nunar, we bring AI automation that works exactly like your best employee — only faster and 24/7."
                 data-ar="مع نونار، نجلب لك أتمتة الذكاء الاصطناعي التي تعمل تماماً مثل أفضل موظف لديك — لكن أسرع وعلى مدار 24/7.">
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