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


## 📊 Image Sequence

- **Format:** WebP (optimized)
- **Count:** 120 frames (frame_000 to frame_119)
- **Ratio:** 16:9 (1920×1080)
- **Location:** `/public/sequence/`

---


## 📦 Dependencies

- react ^18
- next 14.2.35
- framer-motion ^11.0.8
- tailwindcss ^3.4.1
- typescript ^5


