# 🎬 Scrollytelling Portfolio – Next.js & Framer Motion

## 📋 Project Overview

An Awwwards-level interactive portfolio website featuring:
- **Scroll-linked Image Sequence Animation** – Canvas-based rendering of 120 WebP frames synchronized with scroll position
- **Parallax Overlay Text** – Multi-layer text elements with fade-in/out and movement effects
- **Glass-morphism Project Grid** – Modern design cards with hover states and interactive elements
- **Dark theme** (#121212 background) with premium typography

**Tech Stack:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (scroll animations)
- HTML5 Canvas (performance-optimized)

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Main portfolio page
│   ├── globals.css           # Dark theme & utilities
│   └── fonts/
└── components/
    ├── ScrollyCanvas.tsx      # Canvas scroll animation
    ├── Overlay.tsx            # Parallax text sections
    └── Projects.tsx           # Project grid showcase

public/
└── sequence/                  # 120 WebP frames (frame_000 to frame_119)
```

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd .
npm install --legacy-peer-deps
```

### 2. Start Development Server
```bash
npm run dev
```

Open **http://localhost:3000** in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 🎨 Component Overview

### **ScrollyCanvas.tsx**
- **Sticky 500vh container** for extended scroll experience
- **120 WebP frames** preloaded to prevent flickering
- Scroll-linked canvas rendering using Framer Motion
- Responsive sizing with DPR scaling for crisp graphics
- Loading state UI

### **Overlay.tsx**
Parallax text sections synchronized with scroll:
- **Section 1 (0-25%)** – Hero text
- **Section 2 (25-42%)** – Services (left aligned)
- **Section 3 (42-68%)** – Philosophy (right aligned)
- **Section 4 (70%+)** – CTA with scroll indicator

### **Projects.tsx**
Glass-morphism project cards with:
- Semi-transparent backgrounds & blur effects
- Gradient overlays on hover
- Tech stack tags
- Interactive CTAs
- Staggered reveal animations

---

## ⚙️ Key Features

✨ **Smooth 60fps animations**
📱 **Fully responsive design**
🎯 **Preloaded image sequences (no flicker)**
🌙 **Dark mode optimized (#121212)**
♿ **Semantic HTML & accessibility**
🚀 **Production-ready performance**

---

## 🎯 Customization

### Change Background Color
Edit [globals.css](src/app/globals.css):
```css
:root {
  --background: #121212;  /* Change to your color */
}
```

### Adjust Scroll Duration
Modify `h-[500vh]` in [ScrollyCanvas.tsx](src/components/ScrollyCanvas.tsx):
```typescript
<div className="relative h-[500vh]">  {/* Adjust value */}
```

### Add Projects
Edit [Projects.tsx](src/components/Projects.tsx) `PROJECTS` array

---

## 📊 Image Sequence

- **Format:** WebP (optimized)
- **Count:** 120 frames (frame_000 to frame_119)
- **Ratio:** 16:9 (1920×1080)
- **Location:** `/public/sequence/`

---

## 🛠️ Troubleshooting

**Canvas blank?**
- Ensure all 120 frames are in `/public/sequence/`
- Check browser console for load errors

**Animations stuttering?**
- Enable GPU acceleration
- Check DevTools rendering performance

**Images 404?**
- Clear browser cache (Ctrl+Shift+R)
- Verify paths in Network tab

---

## 📦 Dependencies

- react ^18
- next 14.2.35
- framer-motion ^11.0.8
- tailwindcss ^3.4.1
- typescript ^5


