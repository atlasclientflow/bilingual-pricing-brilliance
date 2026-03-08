import { useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FadeIn from "@/components/animations/FadeIn";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import DetailedPlans from "@/components/DetailedPlans";
import IntegratedPlatforms from "@/components/IntegratedPlatforms";
import TestimonialsSection from "@/components/TestimonialsSection";
import NotesSection from "@/components/NotesSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FundingSection from "@/components/FundingSection";
import F6SOffersCarousel from "@/components/F6SOffersCarousel";
import QuoteGenerator from "@/components/QuoteGenerator";

const Index = () => {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href');
        if (targetId === '#') return;
        const targetElement = document.querySelector(targetId!);
        if (targetElement) targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }, []);

  return (
    <LanguageProvider>
      <SEO
        title="Professional Technical Solutions"
        description="Expert services in WhatsApp Business API, SaaS solutions, and digital automation."
        keywords={['WhatsApp API', 'Business Automation', 'SaaS', 'Consulting']}
      />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="overflow-hidden">
          <FadeIn direction="down" delay={0.1} fullWidth><HeroSection /></FadeIn>
          <FadeIn direction="up" delay={0.2} fullWidth><ServicesSection /></FadeIn>
          <FadeIn direction="up" delay={0.2} fullWidth><FundingSection /></FadeIn>
          <FadeIn direction="left" delay={0.2} fullWidth><F6SOffersCarousel /></FadeIn>
          <FadeIn direction="right" delay={0.2} fullWidth><IntegratedPlatforms /></FadeIn>
          <FadeIn direction="up" delay={0.2} fullWidth><PricingSection /></FadeIn>
          <FadeIn direction="up" delay={0.2} fullWidth><DetailedPlans /></FadeIn>
          <FadeIn direction="up" delay={0.2} fullWidth><TestimonialsSection /></FadeIn>
          <FadeIn direction="up" delay={0.2} fullWidth><QuoteGenerator /></FadeIn>
          <FadeIn direction="up" delay={0.2} fullWidth><NotesSection /></FadeIn>
          <FadeIn direction="up" delay={0.2} fullWidth><ContactForm /></FadeIn>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
