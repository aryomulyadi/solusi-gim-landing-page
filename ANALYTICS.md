# Analytics Reference — SOLUSI GIM

Google Analytics 4 — Measurement ID: `G-TJY2ZW587V`

## Utility

All tracking goes through `src/utils/analytics.js`:

| Function | Description |
|----------|-------------|
| `trackEvent(name, params)` | Fire custom GA4 event |
| `trackCTA(action, label, extraParams)` | Track CTA click (includes UTM) |
| `initUTM()` | Capture UTM params from URL → sessionStorage |
| `initSectionTracking()` | Observe all `<section[id]>` via IntersectionObserver |

---

## Event Reference

### Section Views (IntersectionObserver — fires once at 30% visibility)

| Event | Trigger | Section ID | File |
|-------|---------|------------|------|
| `view_beranda` | Hero visible | `#beranda` | `HeroSection.jsx` |
| `view_masalah` | Problem visible | `#masalah` | `ProblemSection.jsx` |
| `view_solusi` | Solution visible | `#solusi` | `SolutionSection.jsx` |
| `view_kategori` | Categories visible | `#kategori` | `CategorySection.jsx` |
| `view_produk` | Products visible | `#produk` | `ProductSection.jsx` |
| `view_bundle` | Bundle visible | `#bundle` | `BundleSection.jsx` |
| `view_cara_kerja` | How It Works visible | `#cara-kerja` | `HowItWorksSection.jsx` |
| `view_lisensi` | License visible | `#lisensi` | `LicenseSection.jsx` |
| `view_testimoni` | Testimonials visible | `#testimoni` | `TestimonialSection.jsx` |
| `view_lead_magnet` | Lead magnet visible | `#lead-magnet` | `LeadMagnetSection.jsx` |
| `view_faq` | FAQ visible | `#faq` | `FAQSection.jsx` |
| `view_request_asset` | Request asset visible | `#request-asset` | `RequestAssetSection.jsx` |
| `view_contributors` | Contributors visible | `#contributors` | `Footer.jsx` |
| `view_cta_final` | Final CTA visible | `#cta-final` | `FinalCTASection.jsx` |

### CTA Events (user click)

| Event | Action | Label Examples | File | Line(s) |
|-------|--------|----------------|------|---------|
| `view_catalog` | Click "Lihat Katalog Aset" | `hero_lihat_katalog` | `HeroSection.jsx` | 58 |
| `view_catalog` | Click "Lihat Katalog Sekarang" | `final_cta_lihat_katalog` | `FinalCTASection.jsx` | 33 |
| `download_asset` | Click "Download Aset Gratis" | `hero_download_gratis` | `HeroSection.jsx` | 62 |
| `contact_whatsapp` | Click WhatsApp (footer) | `footer_wa` | `Footer.jsx` | 105 |
| `contact_whatsapp` | Click "Konsultasi via WhatsApp" | `final_cta_konsultasi` | `FinalCTASection.jsx` | 40 |
| `contact_whatsapp` | Click "Lihat Detail" produk | `{product.name}` | `ProductSection.jsx` | 126 |
| `request_asset` | Click "Chat WhatsApp" request | `chat_whatsapp` | `RequestAssetSection.jsx` | 83 |
| `select_category` | Click category filter | `2D Asset`, `UI Kit`, etc. | `ProductSection.jsx` | 53 |
| `select_bundle` | Click bundle CTA | `{bundle.name}` | `BundleSection.jsx` | 73 |
| `search_asset` | Type in search input (≥3 chars, debounced 500ms) | search query | `ProductSection.jsx` | 27 |
| `lead_submit` | Submit email form | `{email}` | `LeadMagnetSection.jsx` | 36 |

---

## Campaign UTM Tracking

### UTM Capture

UTM parameters are captured from the URL on page load and stored in `sessionStorage` under key `solusigim_utm`. All CTA events automatically append stored UTM params as event parameters.

### Campaign Links

Share these links on each platform:

| Platform | Campaign URL |
|----------|-------------|
| **Instagram Bio** | `https://solusi-gim.vercel.app?utm_source=instagram&utm_medium=bio&utm_campaign=profile` |
| **Instagram Story** | `https://solusi-gim.vercel.app?utm_source=instagram&utm_medium=story&utm_campaign=promo` |
| **Instagram Feed** | `https://solusi-gim.vercel.app?utm_source=instagram&utm_medium=feed&utm_campaign=post` |
| **WhatsApp** | `https://solusi-gim.vercel.app?utm_source=whatsapp&utm_medium=share&utm_campaign=organic` |
| **Discord** | `https://solusi-gim.vercel.app?utm_source=discord&utm_medium=social&utm_campaign=community` |
| **Facebook** | `https://solusi-gim.vercel.app?utm_source=facebook&utm_medium=feed&utm_campaign=promo` |

---

## GA4 DebugView

To validate events in GA4 DebugView:

1. Open the site in **Google Chrome** with **Google Analytics Debugger** extension enabled
2. Or run at the browser console: `window.gtag('config', 'G-TJY2ZW587V', { 'debug_mode': true })`
3. Navigate to GA4 Admin → DebugView in the same browser session
4. Perform actions (scroll sections, click CTA buttons, submit form)
5. Events should appear in real-time under the "DebugView" section

## Key Event Configuration

After events appear in GA4 DebugView, promote them to **Key Events** (formerly Conversions):

1. In GA4 Admin → **Key Events** → **New Key Event**
2. Add each event name: `view_catalog`, `download_asset`, `contact_whatsapp`, `request_asset`, `select_bundle`, `lead_submit`
