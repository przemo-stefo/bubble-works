# Bubble Works - Historia Projektu

## Informacje podstawowe
- **Strona:** https://bubbleworksfl.com
- **GitHub:** https://github.com/przemo-stefo/bubble-works
- **Hosting:** Cloudflare Pages (bubble-works.pages.dev)
- **Właściciel:** Adrian (Bubble Works)
- **Lokalizacja:** Wilton Manors, FL 33311
- **Radius obsługi:** 50 mil od Fort Lauderdale (cała South Florida)

## Kontakt
- **Telefon:** (630) 400-8020
- **Email:** thebubbleworks@outlook.com
- **WhatsApp:** +1 630 400 8020

---

## Zmiany (Styczeń 2026)

### 2026-01-22: Początkowa konfiguracja
- Utworzono stronę dla firmy Bubble Works (window cleaning)
- Design inspirowany top US cleaning sites
- Sekcje: Hero, Services, About, Reviews, Contact, Areas
- Animacja intro (CSS bubbles + squeegee)

### 2026-01-23: Domena i SEO

#### Domena
- **Zakupiona:** bubbleworksfl.com (~$10.44/rok na Cloudflare)
- **Zone ID:** 9139264a40197792c66b7dd9a7bba87a
- **DNS:** CNAME → bubble-works.pages.dev

#### SEO (Score: 72 → 95/100)
- Dodano `robots.txt` z sitemap reference
- Dodano `sitemap.xml` (3 strony)
- Dodano `og:image` (windows-luxury.jpg)
- Dodano Twitter Cards (summary_large_image)
- Dodano favicon (logo-v2.jpg)

### 2026-01-23: Video Intro
- Zamieniono CSS animation na AI-generated video
- Video: `videos/intro.mp4` (wygenerowane przez Hailuo AI)
- Prompt użyty: "Squeegee wipes downward, collecting water, reveals Bubble Works logo"

### 2026-01-23: Mobile Optimization
- **Intro duration:** Desktop 6s, Mobile 3s
- **WhatsApp button:** Przeniesiony na lewą stronę (mobile)
- **Call button:** Pozostał na prawej stronie (mobile)
- **Skip text:** "Click anywhere to skip" → "Tap to skip" (mobile)
- Dodano `webkit-playsinline` dla iOS

---

## Struktura plików

```
bubbleworks/
├── index.html          # Główna strona
├── privacy-policy.html # Polityka prywatności
├── terms-of-service.html # Regulamin
├── styles.css          # Style CSS
├── main.js             # JavaScript
├── robots.txt          # SEO
├── sitemap.xml         # SEO
├── images/
│   ├── logo-v2.jpg     # Logo (używane też jako favicon)
│   ├── windows-luxury.jpg # OG Image dla social
│   ├── adrian-owner.jpg
│   └── ... (before/after photos)
└── videos/
    ├── intro.mp4       # Video intro (AI generated)
    └── ... (other videos)
```

---

## Cloudflare Deployment

```bash
# Deploy command
cd /Users/shawn/Projects/BubbleWorks/bubbleworks
CLOUDFLARE_ACCOUNT_ID="a7cc29cabb03ca473a295f98c19dd239" \
CLOUDFLARE_API_KEY="17b8979252d2335b9c942fc09b45750bec21f" \
CLOUDFLARE_EMAIL="info@nicheamz.com" \
npx wrangler pages deploy . --project-name=bubble-works --commit-dirty=true
```

---

## Usługi oferowane
1. Window Cleaning (residential & commercial)
2. Pressure Washing
3. Chandelier Cleaning
4. Hard Water Stain Removal
5. Post-Construction Cleanup
6. Awning Cleaning
7. Window Tint Removal
8. Shutter Cleaning

## Obsługiwane obszary (50 mil od Fort Lauderdale)

### Broward County (home base)
- Fort Lauderdale, Hollywood, Pembroke Pines
- Coral Springs, Miramar, Davie
- Plantation, Sunrise, Weston

### Palm Beach County
- West Palm Beach, Boca Raton, Delray Beach
- Boynton Beach, Palm Beach Gardens, Jupiter

### Miami-Dade County
- Miami, Miami Beach, Coral Gables
- Brickell, Aventura, Doral

---

## Git Commits (najważniejsze)

```
f4eb68d feat(mobile): Optimize intro and mobile UX
e24b22b feat: Replace CSS intro with AI-generated video intro
aaebc18 feat(seo): Add robots.txt, sitemap.xml, og:image, Twitter Cards and favicon
9ae69a4 feat: Add WhatsApp floating chat button
bc18be8 feat: Update domain to bubbleworksfl.com and rebrand for South Florida
```

---

## Przyszłe usprawnienia (TODO)
- [ ] Google Business Profile setup
- [ ] Google Analytics / Tag Manager
- [ ] Contact form integration (Formspree lub n8n webhook)
- [ ] More before/after photos
- [ ] Customer review widget (Google Reviews embed)
- [ ] Blog section for SEO
- [ ] Service area pages (dedicated pages per city)

---

## Notatki techniczne

### Video Intro na iOS
- Musi mieć `muted` i `playsinline` atrybuty
- `webkit-playsinline` dla starszych iOS
- Autoplay działa tylko z muted video

### Mobile Buttons Layout
```
Mobile (< 768px):
┌─────────────────────────────┐
│  [WhatsApp]     [Call Now]  │
│     LEFT           RIGHT    │
└─────────────────────────────┘
```

### SEO Checklist
- [x] robots.txt
- [x] sitemap.xml
- [x] og:image (1200x630)
- [x] Twitter Cards
- [x] Canonical URLs
- [x] Meta description
- [x] Schema.org LocalBusiness
- [x] Geo meta tags
- [ ] Google Search Console verification
- [ ] Bing Webmaster Tools

---

*Ostatnia aktualizacja: 2026-01-23*
