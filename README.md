# Bubble Works - Window Cleaning & Exteriors

Professional window cleaning website for South Florida.

## Live Site
- **URL:** https://bubble-works.pages.dev
- **Hosting:** Cloudflare Pages

## Contact Info
- **Phone:** (630) 400-8020
- **Email:** thebubbleworks@outlook.com
- **Owner:** Adrian Splawski

## Services Offered
1. Window Cleaning (residential & commercial)
2. Pressure Washing
3. Chandelier Care
4. Hard Water Removal
5. Post-Construction Cleanup
6. Awning Cleaning
7. Window Tint Removal
8. Shutter Cleaning
9. Premium Package (bundled services)

## Service Areas
- **Miami-Dade County:** Miami, Miami Beach, Coral Gables, Brickell, Coconut Grove
- **Broward County:** Fort Lauderdale, Hollywood, Pompano Beach, Weston, Plantation
- **Palm Beach County:** West Palm Beach, Boca Raton, Delray Beach, Palm Beach, Jupiter

## Project Structure

```
bubbleworks/
├── index.html              # Main landing page
├── privacy-policy.html     # Privacy policy
├── terms-of-service.html   # Terms of service
├── styles.css              # All styles
├── main.js                 # JavaScript (sliders, animations)
├── images/                 # All images
│   ├── adrian-owner.jpg    # Owner photo
│   ├── windows-luxury.jpg  # Hero/Premium image
│   ├── window-before.jpg   # Before/after pairs
│   ├── window-after.jpg
│   ├── hardwater-before.jpg
│   ├── hardwater-after.jpg
│   ├── pressure-before.jpg
│   ├── pressure-after.jpg
│   ├── awning-before.jpg
│   ├── awning-after.jpg
│   ├── tint-before.jpg
│   ├── tint-after.jpg
│   ├── shutter-before.jpg
│   ├── shutter-after.jpg
│   ├── small-window-before.jpg
│   ├── small-window-after.jpg
│   ├── chandelier-1.jpg
│   ├── chandelier-2.jpg
│   ├── power-washing.jpg
│   ├── post-construction.jpg
│   ├── post-construction-2.jpg
│   ├── gutter-cleaning.jpg
│   └── logo-photo.jpg
└── videos/                 # All videos
    ├── window-cleaning.mp4
    ├── power-washing.mp4
    ├── slide-window.mp4
    ├── power-buffer.mp4
    ├── cellar-cleaning.mp4
    ├── cellar-finish.mp4
    └── slide-complete.mp4
```

## Features
- Responsive design (mobile-first)
- Interactive before/after comparison sliders
- Auto-playing video gallery
- Quote request form
- Google Maps integration
- Smooth scroll navigation
- Scroll animations

## Design
- **Font:** Poppins
- **Primary Color:** #1e3a5f (navy blue)
- **Accent Color:** #00a6a6 (teal)
- **Gold Accent:** #d4a853
- **Style:** Professional, clean, inspired by Gleam Team

## Sections on Homepage
1. Top Bar (contact info, hours)
2. Header (logo, nav, rating, CTA)
3. Hero (offer, CTAs, trust badges)
4. Trust Bar (4 key trust signals)
5. Services (6 service cards)
6. Before & After Gallery (3 sliders)
7. More Transformations (4 additional sliders)
8. Videos (6 videos)
9. About (owner photo + story)
10. Reviews (3 testimonials)
11. Service Areas (3 counties + map)
12. Quote Form
13. Contact Bar
14. Footer

## Deployment
```bash
cd /Users/shawn/Projects/BubbleWorks/bubbleworks
npx wrangler pages deploy . --project-name=bubble-works
```

## Last Updated
January 22, 2026
