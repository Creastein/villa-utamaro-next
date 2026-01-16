# 🏡 Villa Utamaro

A luxury Japanese villa website built with Next.js 16, featuring minimalist design, internationalization, and comprehensive SEO optimization.

![Villa Utamaro](https://img.shields.io/badge/Next.js-16.1.2-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)
![CI](https://github.com/Creastein/villa-utamaro-next/actions/workflows/ci.yml/badge.svg)

---

## 📖 About

Villa Utamaro is a luxury Japanese-inspired villa located in Gerupuk, Lombok, Indonesia. This website showcases the property with a zen minimalist design, featuring:

- 🏖️ **Infinity Pool** with 200° ocean views
- 🏠 **6-11 Guest Capacity** across 3 uniquely designed suites
- 🌊 **World-Class Surfing** access to Gerupuk Bay
- 🍽️ **Private Chef & Butler** services
- 🎋 **Japanese Minimalist Architecture** meets tropical luxury

**Live Site:** [villautamaro.com](https://villautamaro.com)  
**Repository:** [github.com/Creastein/villa-utamaro-next](https://github.com/Creastein/villa-utamaro-next)

---

## ✨ Features

### 🌍 Internationalization (i18n)
- **Bilingual Support:** English (`/en`) and Indonesian (`/id`)
- **Auto Language Detection:** Redirects based on browser locale
- **Powered by:** `next-intl` v4.7.0

### 🎨 Design & UX
- **Japanese Minimalist Aesthetic:** Clean, elegant, and serene
- **Responsive Design:** Mobile-first approach
- **Smooth Animations:** Powered by Framer Motion
- **Interactive Gallery:** Lightbox with keyboard navigation
- **Custom 404 Page:** Branded error handling
- **Loading States:** Elegant skeleton loaders
- **Error Boundaries:** Graceful error recovery

### 🚀 Performance & SEO
- **SEO Optimized:**
  - Meta tags (title, description, keywords)
  - Open Graph tags for social sharing
  - Twitter Cards
  - JSON-LD structured data (LodgingBusiness schema)
  - Sitemap & robots.txt
  - Canonical URLs & hreflang tags
- **Image Optimization:** Next.js Image component
- **Code Splitting:** Automatic by Next.js App Router
- **Server-Side Rendering (SSR)**
- **Static Site Generation (SSG)** for locale routes

### 📱 Components
- **Navbar:** Sticky navigation with language switcher
- **Hero:** Full-screen intro with location badge
- **Amenities:** Grid showcasing villa features
- **Rooms:** 3 suite cards with details
- **Gallery:** Interactive image grid with lightbox
- **Experience:** Butler & chef services
- **Testimonials:** Guest reviews carousel
- **FAQ:** Accordion-style questions
- **Location:** Google Maps embed & directions
- **Footer:** Links, contact info, social media
- **Floating WhatsApp:** Quick contact button

---

## 🛠️ Tech Stack

### Core
- **Framework:** [Next.js 16.1.2](https://nextjs.org) (App Router + Turbopack)
- **React:** 19.2.3
- **TypeScript:** 5
- **Node.js:** 20+

### Styling
- **CSS Framework:** [Tailwind CSS v4](https://tailwindcss.com)
- **Utility Libraries:**
  - `clsx` - Conditional classnames
  - `tailwind-merge` - Merge Tailwind classes
  - `class-variance-authority` - Component variants

### UI & Animations
- **Icons:** [Lucide React](https://lucide.dev) (v0.562.0)
- **Animations:** [Framer Motion](https://www.framer.com/motion/) (v12.26.2)
- **Font:** Noto Serif JP (Google Fonts)

### Internationalization
- **i18n:** [next-intl](https://next-intl-docs.vercel.app/) (v4.7.0)
- **Locales:** English (en), Indonesian (id)
- **Routing:** Automatic locale-based routing

### SEO & Analytics
- **Metadata:** Next.js 16 Metadata API
- **Structured Data:** JSON-LD schema
- **Sitemap:** Auto-generated XML sitemap
- **Robots:** SEO-friendly robots.txt

---

## 📦 Installation

### Prerequisites
- **Node.js:** 20+ 
- **npm/yarn/pnpm:** Latest version

### Clone Repository
```bash
git clone https://github.com/Creastein/villa-utamaro-next.git
cd villa-utamaro-next
```

### Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

---

## 🚀 Development

### Start Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Available Routes:**
- English: `http://localhost:3000/en`
- Indonesian: `http://localhost:3000/id`

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm run start
```

---

## 📁 Project Structure

```
villa-utamaro-next/
├── app/
│   ├── [locale]/              # Locale-specific pages
│   │   ├── page.tsx           # Home page
│   │   ├── layout.tsx         # Locale layout with i18n
│   │   ├── not-found.tsx      # Custom 404 page
│   │   ├── loading.tsx        # Loading skeleton
│   │   └── error.tsx          # Error boundary
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   ├── robots.ts              # SEO robots file
│   └── sitemap.ts             # SEO sitemap
├── components/                # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Amenities.tsx
│   ├── Rooms.tsx
│   ├── Gallery.tsx
│   ├── Experience.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── Location.tsx
│   ├── Footer.tsx
│   ├── FloatingWhatsApp.tsx
│   └── ScrollToTop.tsx
├── i18n/
│   └── routing.ts             # i18n routing config
├── lib/
│   └── data/                  # Static data files
│       ├── gallery.ts
│       ├── amenities.ts
│       └── ...
├── messages/                  # Translation files
│   ├── en.json                # English translations
│   └── id.json                # Indonesian translations
├── public/
│   └── images/                # Static images
├── proxy.ts                   # Next.js 16 proxy (replaces middleware)
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

---

## 🌐 Environment Variables

### Google Analytics 4 (Required for Analytics)

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**To get your GA4 Measurement ID:**
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a GA4 property
3. Get your Measurement ID (format: `G-XXXXXXXXXX`)
4. Add to `.env.local`
5. Restart dev server

See [.env.example](/.env.example) for all available environment variables.

---

## 🎨 Design System

### Color Palette
```css
--cream: #FCFAFA      /* Background */
--charcoal: #1A1A1A   /* Text */
--gold: #C5A358       /* Accent */
```

### Typography
- **Primary Font:** Noto Serif JP (Japanese serif)
- **Weights:** 300 (light), 400 (regular), 500, 600, 700, 900

### Breakpoints (Tailwind)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## 📞 Contact Information

- **Email:** villautamaro@gmail.com
- **Phone:** +62 818 0210 5341
- **Instagram:** [@villa_utamaro](https://www.instagram.com/villa_utamaro)
- **Location:** Gerupuk, Central Lombok, West Nusa Tenggara, Indonesia

---

## 🚢 Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Creastein/villa-utamaro-next)

### Manual Deployment
```bash
# Build the project
npm run build

# Start production server
npm run start
```

### Deployment Checklist
- ✅ Set up custom domain
- ✅ Configure environment variables (if any)
- ✅ Test both `/en` and `/id` routes
- ✅ Verify SEO tags in production
- ✅ Test Open Graph sharing on social media
- ✅ Submit sitemap to Google Search Console

---

## 🧪 SEO Validation

After deployment, validate SEO implementation:

1. **Open Graph Debugger**  
   [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)

2. **Twitter Card Validator**  
   [Twitter Card Validator](https://cards-dev.twitter.com/validator)

3. **Google Rich Results Test**  
   [Rich Results Test](https://search.google.com/test/rich-results)

4. **Google Search Console**  
   Submit sitemap: `https://yourdomain.com/sitemap.xml`

---

## 📝 License

This project is private and proprietary to Villa Utamaro.

---

## 👨‍💻 Author

**Creastein**
- GitHub: [@Creastein](https://github.com/Creastein)

---

## 🤝 Contributing

This is a private project. For inquiries, please contact villautamaro@gmail.com.

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router](https://nextjs.org/docs/app)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

---

<div align="center">

**Built with ❤️ for Villa Utamaro**

[Website](https://villautamaro.com) • [Instagram](https://instagram.com/villa_utamaro) • [Email](mailto:villautamaro@gmail.com)

</div>
