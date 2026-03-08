

## Plan: Rebuild Bilingual Tech Pricing Grid Project

This is a large project with 40+ custom files. I'll recreate it by fetching each file from the GitHub repository and writing it into this project. Here's the structured approach:

### Phase 1: Foundation
- **Tailwind config & CSS** — Update `tailwind.config.ts` and `src/index.css` with the project's custom theme (tech-blue colors, animations, etc.)
- **Package dependencies** — Add any missing packages (e.g., `jspdf`, `html2canvas` for quote generation, PWA packages)
- **`index.html`** — Update with SEO meta tags and PWA manifest link

### Phase 2: Contexts & Data
- **LanguageContext** — Bilingual (English/Arabic) language switching with RTL support
- **AuthContext** — Admin authentication context
- **Data files** — Pricing data, services data, product catalogs in `src/data/`

### Phase 3: Shared Components
- **Header** — Bilingual navigation with language toggle, responsive mobile menu
- **Footer** — Site footer with links and social media
- **SEO** — Dynamic meta tag management
- **FadeIn animation** — Scroll-triggered fade animations
- **LazyImage** — Optimized image loading component
- **ProtectedRoute** — Admin route protection

### Phase 4: Homepage Sections
- **HeroSection** — Main landing hero with bilingual content
- **ServicesSection** — Services overview cards
- **PricingSection** — Pricing grid/table
- **DetailedPlans** — Expanded plan details
- **IntegratedPlatforms** — Platform integration showcase
- **TestimonialsSection** — Customer testimonials carousel
- **NotesSection** — Important notes section
- **ContactForm** — Contact form
- **FundingSection** — Funding/grants information
- **F6SOffersCarousel** — Special offers carousel
- **QuoteGenerator** — PDF quote generation (with sub-components)
- **MessageCalculator** — Messaging cost calculator

### Phase 5: Pages & Routing
- **Index** — Homepage assembling all sections
- **Products** — Product catalog page
- **Offers** — Special offers page
- **Booking** — Booking/scheduling page
- **RealEstate** — Real estate marketing page
- **PropertySubmit** — Property submission form
- **DigitalStore** — Digital products store
- **MicwaSystem** — MICWA system page
- **AdminLogin** — Admin login page
- **AdminDashboard** — Content management dashboard
- **PrivacyPolicy & Terms** — Legal pages
- **App.tsx** — Update routing with all pages and lazy loading

### ⚠️ Important Notes
- **This will consume many credits** (40+ files = 15-20+ messages minimum)
- **Server-side code** (Express server for Google Sheets) cannot run in Lovable — we'll skip the `server/` directory
- **Image assets** referenced from external URLs will work, but local assets in `src/assets/` may need alternative hosting
- The admin auth uses localStorage-based credentials from the original — we can improve this later with Lovable Cloud

