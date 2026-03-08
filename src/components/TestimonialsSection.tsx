import React, { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const TestimonialsSection: React.FC = () => {
  const { t, isRtl } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!api) return;
    const handleSelect = () => setActiveIndex(api.selectedScrollSnap());
    api.on("select", handleSelect);
    return () => { api.off("select", handleSelect); };
  }, [api]);

  useEffect(() => {
    if (!api || !autoPlay) return;
    const interval = setInterval(() => { api.scrollNext(); }, 5000);
    return () => clearInterval(interval);
  }, [api, autoPlay]);

  const testimonials = [
    { id: 1, name: "Ahmed Mahmoud", position: t("Marketing Director", "مدير التسويق"), company: "TechSolutions", country: "Egypt", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces&q=80", rating: 5, text: { en: "The WhatsApp Business API integration was seamless. Our customer engagement increased by 40% in just two months!", ar: "كان تكامل واجهة برمجة تطبيقات WhatsApp Business سلسًا. زاد التفاعل مع العملاء بنسبة 40٪ في شهرين فقط!" } },
    { id: 2, name: "Fatima Al-Saud", position: t("CEO", "الرئيس التنفيذي"), company: "RiyadhTech", country: "Saudi Arabia", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=faces&q=80", rating: 5, text: { en: "Their Facebook verification service saved us weeks of frustration.", ar: "خدمة التحقق من Facebook الخاصة بهم وفرت علينا أسابيع من الإحباط." } },
    { id: 3, name: "Omar Al-Falasi", position: t("Digital Marketing Lead", "مسؤول التسويق الرقمي"), company: "DubaiConnect", country: "UAE", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=faces&q=80", rating: 5, text: { en: "The SendPulse grant program setup was quick and efficient.", ar: "كان إعداد برنامج منحة SendPulse سريعًا وفعالًا." } },
    { id: 4, name: "Layla Al-Busaidi", position: t("Operations Manager", "مدير العمليات"), company: "OmanGrow", country: "Oman", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=faces&q=80", rating: 4, text: { en: "The N8N automation solution transformed our workflow.", ar: "حول حل أتمتة N8N سير العمل لدينا." } },
    { id: 5, name: "Nasser Al-Thani", position: t("IT Director", "مدير تكنولوجيا المعلومات"), company: "QatarInnovate", country: "Qatar", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces&q=80", rating: 5, text: { en: "Their technical support is exceptional.", ar: "دعمهم الفني استثنائي." } },
  ];

  const renderStars = (rating: number) => Array(5).fill(0).map((_, i) => (
    <Star key={i} size={16} className={`${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
  ));

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className={`section-title text-center ${isRtl ? 'font-arabic' : 'font-english'}`}>{t("Customer Testimonials", "آراء العملاء")}</h2>
        <p className="section-subtitle text-center">{t("See what our clients from around the world have to say", "اطلع على ما يقوله عملاؤنا من جميع أنحاء العالم")}</p>
        <div className="mt-12">
          <Carousel opts={{ align: "center", loop: true }} className="w-full max-w-5xl mx-auto" setApi={setApi} onMouseEnter={() => setAutoPlay(false)} onMouseLeave={() => setAutoPlay(true)}>
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4 transition-all duration-500">
                  <Card className={`border-2 h-full transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${activeIndex === index ? "border-tech-blue shadow-lg" : "border-gray-200"}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="flex-shrink-0 mr-3">
                          <Avatar className="w-12 h-12 border-2 border-tech-blue">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} className="object-cover" />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        </div>
                        <div>
                          <h3 className="font-medium">{testimonial.name}</h3>
                          <p className="text-sm text-gray-500">{testimonial.position}, {testimonial.company}</p>
                          <p className="text-xs text-gray-400">{testimonial.country}</p>
                        </div>
                      </div>
                      <div className="flex mb-3">{renderStars(testimonial.rating)}</div>
                      <div className="relative">
                        <Quote size={24} className="absolute -top-2 -left-1 text-gray-200 rotate-180" />
                        <p className="text-gray-600 pt-2 pb-1 px-3 italic">{isRtl ? testimonial.text.ar : testimonial.text.en}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6 gap-2">
              <CarouselPrevious className="static transform-none mx-2" />
              <CarouselNext className="static transform-none mx-2" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
