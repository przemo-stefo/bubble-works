# Bubble Works - Kompletna Dokumentacja Projektu

## Podstawowe Informacje

| Info | Wartość |
|------|---------|
| **Strona** | https://bubbleworksfl.com |
| **GitHub** | https://github.com/przemo-stefo/bubble-works |
| **Hosting** | Cloudflare Pages (bubble-works.pages.dev) |
| **Domena** | bubbleworksfl.com (~$10.44/rok) |
| **Zone ID** | 9139264a40197792c66b7dd9a7bba87a |
| **Właściciel** | Adrian |
| **Firma** | Bubble Works |
| **Lokalizacja** | Wilton Manors, FL 33311 |
| **Radius** | 50 mil od Fort Lauderdale |

---

## Kontakt

| Kanał | Dane |
|-------|------|
| **Telefon** | (630) 400-8020 |
| **Email** | thebubbleworks@outlook.com |
| **WhatsApp** | +1 630 400 8020 |

---

## Usługi

1. Window Cleaning (residential & commercial)
2. Pressure Washing
3. Chandelier Cleaning
4. Hard Water Stain Removal
5. Post-Construction Cleanup
6. Awning Cleaning
7. Window Tint Removal
8. Shutter Cleaning
9. Gutter Cleaning
10. Solar Panel Cleaning

---

## Obsługiwane Obszary (50 mil od Fort Lauderdale)

### Broward County (home base)
- Fort Lauderdale, Hollywood, Pembroke Pines
- Coral Springs, Miramar, Davie
- Plantation, Sunrise, Weston, Wilton Manors

### Palm Beach County
- West Palm Beach, Boca Raton, Delray Beach
- Boynton Beach, Palm Beach Gardens, Jupiter

### Miami-Dade County
- Miami, Miami Beach, Coral Gables
- Brickell, Aventura, Doral

---

## Struktura Plików

```
bubbleworks/
├── index.html              # Główna strona
├── privacy-policy.html     # Polityka prywatności (CCPA, cookies)
├── terms-of-service.html   # Regulamin (pełny, branżowy)
├── styles.css              # Style CSS
├── main.js                 # JavaScript
├── robots.txt              # SEO - crawlers
├── sitemap.xml             # SEO - mapa strony
├── PROJECT_HISTORY.md      # Historia zmian
├── BUBBLEWORKS.md          # Ten plik
├── images/
│   ├── logo-v2.jpg         # Logo (używane też jako favicon)
│   ├── windows-luxury.jpg  # OG Image dla social media
│   ├── adrian-owner.jpg    # Zdjęcie właściciela
│   └── ... (before/after)
└── videos/
    ├── intro.mp4           # Video intro (AI generated)
    └── ... (inne wideo)
```

---

## SEO - Status

| Element | Status | Lokalizacja |
|---------|--------|-------------|
| robots.txt | ✅ | /robots.txt |
| sitemap.xml | ✅ | /sitemap.xml |
| og:image | ✅ | windows-luxury.jpg |
| Twitter Cards | ✅ | summary_large_image |
| Favicon | ✅ | logo-v2.jpg |
| Schema.org | ✅ | LocalBusiness + Service |
| Canonical URLs | ✅ | bubbleworksfl.com |
| Geo meta tags | ✅ | Fort Lauderdale coords |

**SEO Score:** ~95/100

---

## Video Intro

| Urządzenie | Czas | Skip Text |
|------------|------|-----------|
| Desktop | 6 sekund | "Click anywhere to skip" |
| Mobile | 3 sekundy | "Tap to skip" |

**Plik:** `videos/intro.mp4`
**Generator:** Hailuo AI
**Prompt użyty:**
```
CAMERA: Static, locked camera. No camera movement.
The squeegee starts at TOP, wipes straight DOWN to BOTTOM.
Water collects on blade and drips downward with gravity.
Reveals clean "BUBBLE WORKS" logo behind.
Bubbles float gently. Realistic downward-only motion.
```

---

## Mobile Optimization

### Floating Buttons (Mobile < 768px)
```
┌─────────────────────────────┐
│  [WhatsApp]     [Call Now]  │
│     LEFT           RIGHT    │
└─────────────────────────────┘
```

### Touch Improvements
- Min touch target: 48px
- iOS video: `muted playsinline webkit-playsinline`
- Form inputs: 16px font (prevents iOS zoom)

---

## Legal Pages

### Privacy Policy
- Cookies (essential, analytics, functionality, marketing)
- Third-party services (Google Analytics, Cloudflare)
- CCPA compliance (California)
- Data retention (7 years)
- Children's privacy (<18)

### Terms of Service
- Cancellation policy (24h notice)
- Payment terms (Zelle, Venmo, cards, NET 15/30)
- Liability limits (pre-existing damage disclaimer)
- Satisfaction guarantee (24h window)
- Recurring service agreements
- Dispute resolution (Broward County, FL)

---

## Deployment

### Cloudflare Pages Deploy
```bash
cd /Users/shawn/Projects/BubbleWorks/bubbleworks

CLOUDFLARE_ACCOUNT_ID="a7cc29cabb03ca473a295f98c19dd239" \
CLOUDFLARE_API_KEY="17b8979252d2335b9c942fc09b45750bec21f" \
CLOUDFLARE_EMAIL="info@nicheamz.com" \
npx wrangler pages deploy . --project-name=bubble-works --commit-dirty=true
```

### Git Push
```bash
git add -A && git commit -m "message" && git push
```

---

## Cloudflare Credentials

| Klucz | Wartość |
|-------|---------|
| Account ID | a7cc29cabb03ca473a295f98c19dd239 |
| Email | info@nicheamz.com |
| API Key | 17b8979252d2335b9c942fc09b45750bec21f |
| Zone ID | 9139264a40197792c66b7dd9a7bba87a |
| Pages Project | bubble-works |

---

## Git Commits (Główne)

```
cd4961d docs: Comprehensive Privacy Policy and Terms of Service update
c21bd7a docs: Add project history and documentation
f4eb68d feat(mobile): Optimize intro and mobile UX
e24b22b feat: Replace CSS intro with AI-generated video intro
aaebc18 feat(seo): Add robots.txt, sitemap.xml, og:image, Twitter Cards
9ae69a4 feat: Add WhatsApp floating chat button
bc18be8 feat: Update domain to bubbleworksfl.com
```

---

## TODO (Przyszłe)

- [ ] Google Business Profile setup
- [ ] Google Analytics / Tag Manager
- [ ] Google Search Console verification
- [ ] Contact form backend (Formspree lub n8n webhook)
- [ ] More before/after photos
- [ ] Google Reviews embed widget
- [ ] Blog section for SEO
- [ ] Dedicated city landing pages (Fort Lauderdale, Miami, Boca Raton)
- [ ] Email newsletter signup
- [ ] Online booking system

---

## Notatki Techniczne

### iOS Safari Video
```html
<video autoplay muted playsinline webkit-playsinline>
```
- `muted` - wymagane dla autoplay
- `playsinline` - nie otwiera fullscreen
- `webkit-playsinline` - starsze iOS

### Session Storage (Intro)
```javascript
sessionStorage.getItem('bubbleWorksIntroSeen')
sessionStorage.setItem('bubbleWorksIntroSeen', 'true')
```
Intro pokazuje się raz na sesję.

### Mobile Detection
```javascript
const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
```

---

## Kontakt z Supportem

W razie problemów:
- **Email:** thebubbleworks@outlook.com
- **Cloudflare:** https://dash.cloudflare.com
- **GitHub:** https://github.com/przemo-stefo/bubble-works

---

*Ostatnia aktualizacja: 2026-01-23*
