import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge as LucideBadge } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FundingSection: React.FC = () => {
  const { t, isRtl } = useLanguage();

  const fundingOptions = [
    { id: 1, iconUrl: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg", title: { en: "Stripe Payments Funding", ar: "تمويل مدفوعات Stripe" }, description: { en: "Exclusive $25,000 in special funding for Stripe payment integration.", ar: "تمويل حصري بقيمة 25000 دولار لتكامل مدفوعات Stripe." }, value: "$25,000", link: "#pricing", featured: true, logoColor: "#635BFF" },
    { id: 2, iconUrl: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg", title: { en: "Amazon AWS Credits", ar: "رصيد Amazon AWS" }, description: { en: "Qualify for AWS Activate credits worth up to $31,000.", ar: "تأهل للحصول على رصيد AWS Activate بقيمة تصل إلى 31,000 دولار." }, value: "Up to $31,000", link: "#pricing", featured: true, logoColor: "#FF9900" },
    { id: 3, iconUrl: "", title: { en: "SendPulse $5000 Grant", ar: "منحة SendPulse بقيمة 5000 دولار" }, description: { en: "Receive marketing credits worth $5000.", ar: "احصل على رصيد تسويقي بقيمة 5000 دولار." }, value: "$5,000", link: "#pricing", featured: false, logoColor: "#0084FF" },
    { id: 4, iconUrl: "", title: { en: "Make.com Teams Plan", ar: "خطة Make.com للفرق" }, description: { en: "Qualify for Make.com Teams subscription valued at $636/year.", ar: "تأهل لاشتراك Make.com Teams بقيمة 636 دولارًا سنويًا." }, value: "$636/year", link: "#pricing", featured: false, logoColor: "#000000" }
  ];

  const featuredOptions = fundingOptions.filter(o => o.featured);
  const regularOptions = fundingOptions.filter(o => !o.featured);

  return (
    <section id="funding" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${isRtl ? 'font-arabic' : 'font-english'}`}>{t("Exclusive Funding & Grants", "تمويل ومنح حصرية")}</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t("We help startups access valuable resources worth over $30,000.", "نساعد الشركات الناشئة في الوصول إلى موارد قيمة تزيد قيمتها عن 30,000 دولار.")}</p>
        </div>
        <div className="mb-10">
          <div className="text-center mb-6">
            <Badge className="bg-tech-accent hover:bg-tech-accent text-white px-3 py-1 text-sm font-medium">{t("EXCLUSIVE OFFERS", "عروض حصرية")}</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredOptions.map((option) => (
              <Card key={option.id} className="bg-white border-2 border-tech-accent transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div className="mb-4 w-12 h-12 flex items-center justify-center">
                      {option.iconUrl && <img src={option.iconUrl} alt={isRtl ? option.title.ar : option.title.en} className="max-w-full max-h-full object-contain" />}
                    </div>
                    <CardDescription className="text-2xl font-bold text-tech-accent">{option.value}</CardDescription>
                  </div>
                  <CardTitle className="text-xl">{isRtl ? option.title.ar : option.title.en}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{isRtl ? option.description.ar : option.description.en}</p>
                  <a href={option.link} className="inline-block font-medium text-tech-accent hover:text-tech-purple">{t("Learn more →", "معرفة المزيد ←")}</a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <div className="text-center mb-6">
            <h3 className={`text-xl font-medium ${isRtl ? 'font-arabic' : 'font-english'}`}>{t("Additional Resources", "موارد إضافية")}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regularOptions.map((option) => (
              <Card key={option.id} className="bg-white border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-tech-purple">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardDescription className="text-xl font-semibold text-gray-700">{option.value}</CardDescription>
                  </div>
                  <CardTitle className="text-lg">{isRtl ? option.title.ar : option.title.en}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{isRtl ? option.description.ar : option.description.en}</p>
                  <a href={option.link} className="inline-block font-medium text-tech-blue hover:text-tech-purple">{t("Learn more →", "معرفة المزيد ←")}</a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundingSection;
