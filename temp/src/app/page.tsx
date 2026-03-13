'use client';

import React, { useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div className="w-full bg-white dark:bg-[#121212]">
      {/* Fixed navbar */}
      <Navbar />

      {/* Scroll-progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-white/80 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* ── Hero — Scrollytelling canvas (500vh) ────────────────────── */}
      <div ref={heroRef} className="relative w-full h-[500vh] bg-[#121212]">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <ScrollyCanvas scrollYProgress={scrollYProgress} />
          <Overlay scrollYProgress={scrollYProgress} />
        </div>
      </div>

      {/* ── About ──────────────────────────────────────────────────── */}
      <About />

      {/* ── Skills ─────────────────────────────────────────────────── */}
      <Skills />

      {/* ── Projects ───────────────────────────────────────────────── */}
      <Projects />

      {/* ── Education ──────────────────────────────────────────────── */}
      <Education />

      {/* ── Experience & Achievements ──────────────────────────────── */}
      <Experience />

      {/* ── Contact ────────────────────────────────────────────────── */}
      <Contact />

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="relative w-full border-t border-black/[0.06] dark:border-white/[0.06] bg-gray-50 dark:bg-[#0e0e0e] px-6 py-16 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
            {/* Brand */}
            <div className="col-span-2 md:col-span-1">
              <p className="text-2xl font-black tracking-tighter text-gray-900 dark:text-white mb-3">DG.</p>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[18ch]">
                CS undergraduate at KDU passionate about software development and quality assurance.
              </p>
            </div>

            {/* Navigate */}
            <div>
              <p className="text-[10px] text-gray-400 dark:text-gray-600 tracking-[0.2em] uppercase mb-4">Navigate</p>
              <ul className="space-y-3">
                {['About', 'Skills', 'Work', 'Education', 'Experience', 'Contact'].map((l) => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase()}`} className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <p className="text-[10px] text-gray-400 dark:text-gray-600 tracking-[0.2em] uppercase mb-4">Connect</p>
              <ul className="space-y-3">
                {[
                  { label: 'GitHub',   href: 'https://github.com/damiru003' },
                  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/damiru-gamage-05a38b24b' },
                  { label: 'Email',    href: 'mailto:gamedamiru@gmail.com' },
                ].map(({ label, href }) => (
                  <li key={label}>
                    <a href={href} className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[10px] text-gray-400 dark:text-gray-600 tracking-[0.2em] uppercase mb-4">Contact</p>
              <a href="mailto:hello@example.com" className="text-sm text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors block mb-2">
                gamagedamiru@gmail.com
              </a>
              <div className="flex items-center gap-2 mt-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                <span className="text-xs text-gray-600">Open to opportunities</span>
              </div>
            </div>
          </div>

          <div className="border-t border-black/[0.06] dark:border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400 dark:text-gray-700">
              © {new Date().getFullYear()} Damiru Gamage. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-700">Built with Next.js · React · TypeScript · Framer Motion</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
