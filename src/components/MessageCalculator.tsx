import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MessageSquare, Facebook, Globe, CheckCircle, Award, Info } from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const MessageCalculator: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [messageCount, setMessageCount] = useState<number>(1000);
  const [country, setCountry] = useState<string>("egypt");
  const [messageType, setMessageType] = useState<string>("marketing");

  const rates: Record<string, Record<string, Record<string, number>>> = {
    marketing: {
      facebook: { egypt: 0.0485, uae: 0.0612, ksa: 0.0598, usa: 0.0317, uk: 0.0367, other: 0.0450 },
      sendpulse: { egypt: 0.0473, uae: 0.0595, ksa: 0.0582, usa: 0.0308, uk: 0.0357, other: 0.0440 },
      minichat: { egypt: 0.0450, uae: 0.0590, ksa: 0.0575, usa: 0.0300, uk: 0.0350, other: 0.0435 },
      twilio: { egypt: 0.0497, uae: 0.0625, ksa: 0.0609, usa: 0.0325, uk: 0.0375, other: 0.0490 },
    },
    service: {
      facebook: { egypt: 0.0123, uae: 0.0156, ksa: 0.0148, usa: 0.0079, uk: 0.0092, other: 0.0120 },
      sendpulse: { egypt: 0.0118, uae: 0.0149, ksa: 0.0142, usa: 0.0076, uk: 0.0088, other: 0.0115 },
      minichat: { egypt: 0.0115, uae: 0.0145, ksa: 0.0138, usa: 0.0072, uk: 0.0084, other: 0.0111 },
      twilio: { egypt: 0.0127, uae: 0.0161, ksa: 0.0153, usa: 0.0082, uk: 0.0095, other: 0.0125 },
    },
    media: {
      facebook: { egypt: 0.0597, uae: 0.0755, ksa: 0.0738, usa: 0.0392, uk: 0.0452, other: 0.0590 },
      sendpulse: { egypt: 0.0584, uae: 0.0735, ksa: 0.0718, usa: 0.0382, uk: 0.0441, other: 0.0575 },
      minichat: { egypt: 0.0570, uae: 0.0720, ksa: 0.0705, usa: 0.0375, uk: 0.0430, other: 0.0560 },
      twilio: { egypt: 0.0613, uae: 0.0772, ksa: 0.0754, usa: 0.0402, uk: 0.0463, other: 0.0605 },
    }
  };

  const currencyConversion: Record<string, { symbol: string; rate: number }> = {
    egypt: { symbol: "EGP", rate: 48.2 }, uae: { symbol: "AED", rate: 3.67 }, ksa: { symbol: "SAR", rate: 3.75 },
    usa: { symbol: "USD", rate: 1 }, uk: { symbol: "GBP", rate: 0.78 }, other: { symbol: "USD", rate: 1 }
  };

  const platforms = [
    { id: 'facebook', name: 'Meta/Facebook', icon: <Facebook className="text-blue-600" size={20} /> },
    { id: 'minichat', name: 'Mini Chat', icon: <MessageSquare className="text-green-600" size={20} /> },
    { id: 'sendpulse', name: 'SendPulse', icon: <MessageSquare className="text-purple-600" size={20} /> },
    { id: 'twilio', name: 'Twilio', icon: <Globe className="text-red-500" size={20} /> },
  ];

  const calculateCost = (platform: string) => {
    const rate = rates[messageType]?.[platform]?.[country] || 0.04;
    return (messageCount * rate).toFixed(2);
  };

  const getLocalCost = (platform: string) => {
    const usdCost = parseFloat(calculateCost(platform));
    const conversion = currencyConversion[country] || currencyConversion.other;
    return `${(usdCost * conversion.rate).toFixed(2)} ${conversion.symbol}`;
  };

  const getCheapestProvider = () => {
    return platforms.reduce((cheapest, current) => parseFloat(calculateCost(current.id)) < parseFloat(calculateCost(cheapest.id)) ? current : cheapest).id;
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <div className="flex items-center gap-3">
          <MessageSquare className="h-8 w-8 text-tech-blue" />
          <div>
            <CardTitle>{t("WhatsApp Business Pricing Calculator", "حاسبة أسعار واتساب للأعمال")}</CardTitle>
            <CardDescription>{t("Compare messaging costs across providers", "قارن تكاليف الرسائل عبر مقدمي الخدمات")}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label>{t("Message Type", "نوع الرسالة")}</Label>
            <Select value={messageType} onValueChange={setMessageType}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="marketing">{t("Marketing Messages", "رسائل تسويقية")}</SelectItem>
                <SelectItem value="service">{t("Service Messages", "رسائل خدمية")}</SelectItem>
                <SelectItem value="media">{t("Media Messages", "رسائل وسائط")}</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>{t("Country", "الدولة")}</Label>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="egypt">{t("Egypt", "مصر")} 🇪🇬</SelectItem>
                <SelectItem value="uae">{t("UAE", "الإمارات")} 🇦🇪</SelectItem>
                <SelectItem value="ksa">{t("Saudi Arabia", "السعودية")} 🇸🇦</SelectItem>
                <SelectItem value="usa">{t("United States", "الولايات المتحدة")} 🇺🇸</SelectItem>
                <SelectItem value="uk">{t("United Kingdom", "المملكة المتحدة")} 🇬🇧</SelectItem>
                <SelectItem value="other">{t("Other Countries", "دول أخرى")} 🌍</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <Label>{t("Number of Messages", "عدد الرسائل")}</Label>
              <span className="text-sm font-medium">{messageCount.toLocaleString()}</span>
            </div>
            <Slider min={100} max={100000} step={100} value={[messageCount]} onValueChange={(v) => setMessageCount(v[0])} className="py-4" />
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>{t("Provider", "مزود الخدمة")}</TableHead>
                <TableHead className="text-right">{t("USD Cost", "التكلفة بالدولار")}</TableHead>
                <TableHead className="text-right">{t("Local Currency", "العملة المحلية")}</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {platforms.map((platform) => {
                const isCheapest = getCheapestProvider() === platform.id;
                return (
                  <TableRow key={platform.id} className={isCheapest ? "bg-green-50" : ""}>
                    <TableCell className="flex items-center gap-2">
                      {platform.icon}<span>{platform.name}</span>
                      {isCheapest && <Award size={16} className="text-amber-500" />}
                    </TableCell>
                    <TableCell className="text-right font-medium">${calculateCost(platform.id)}</TableCell>
                    <TableCell className="text-right">{getLocalCost(platform.id)}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default MessageCalculator;
