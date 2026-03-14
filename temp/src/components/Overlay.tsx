'use client';

import React from 'react';
import { MotionValue, useTransform, motion } from 'framer-motion';

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

const Overlay: React.FC<OverlayProps> = ({ scrollYProgress }) => {
  // ── Section 1: Hero (0 → 25%) ──────────────────────────────────────────
  const heroOpacity = useTransform(scrollYProgress, [0, 0.18, 0.26], [1, 1, 0]);
  const heroY       = useTransform(scrollYProgress, [0, 0.26], ['0%', '-6%']);

  // ── Scroll indicator at bottom of screen (fades as scroll begins) ───────
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.04, 0.12], [1, 1, 0]);

  // ── Section 2: "I build digital experiences" — left (26 → 50%) ──────────
  const s2Opacity = useTransform(scrollYProgress, [0.22, 0.32, 0.46, 0.54], [0, 1, 1, 0]);
  const s2X       = useTransform(scrollYProgress, [0.22, 0.32], ['-50px', '0px']);

  // ── Section 3: "Bridging design & engineering" — right (52 → 78%) ───────
  const s3Opacity = useTransform(scrollYProgress, [0.52, 0.62, 0.76, 0.84], [0, 1, 1, 0]);
  const s3X       = useTransform(scrollYProgress, [0.52, 0.62], ['50px', '0px']);

  // ── Section 4: Final CTA (84 → 100%) ─────────────────────────────────────
  const s4Opacity = useTransform(scrollYProgress, [0.84, 0.93], [0, 1]);
  const s4Y       = useTransform(scrollYProgress, [0.84, 0.93], ['24px', '0px']);

  return (
    <div className="pointer-events-none absolute inset-0 z-10">

      {/* ── Section 1: Hero ─────────────────────────────────────────── */}
      <motion.div
        style={{ opacity: heroOpacity, y: heroY }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6"
      >
        <div className="text-center">
          <p className="text-[10px] tracking-[0.35em] text-gray-500 uppercase mb-6">
            01 &nbsp;/&nbsp; Portfolio
          </p>
          <h1 className="text-[clamp(3rem,8vw,7.5rem)] font-black text-white leading-[0.9] tracking-tighter mb-6">
            Damiru
            <br />
            <span
              className="text-transparent"
              style={{
                WebkitTextStroke: '1px rgba(255,255,255,0.3)',
              }}
            >
              Gamage
            </span>
          </h1>
          <p className="text-sm md:text-base text-gray-400 tracking-[0.3em] uppercase font-light">
            CS&nbsp;Undergraduate&nbsp; · &nbsp;Software Dev&nbsp; · &nbsp;QA Engineering
          </p>
        </div>
      </motion.div>

      {/* ── Scroll nudge ─────────────────────────────────────────────── */}
      <motion.div
        style={{ opacity: indicatorOpacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[9px] tracking-[0.3em] text-gray-600 uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>

      {/* ── Section 2: Left ──────────────────────────────────────────── */}
      <motion.div
        style={{ opacity: s2Opacity, x: s2X }}
        className="absolute inset-0 flex flex-col justify-center items-start pl-10 md:pl-20 lg:pl-28"
      >
        <div className="max-w-xs md:max-w-sm">
          <p className="text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-5">
            02 &nbsp;/&nbsp; What I Do
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tighter mb-5">
            I build
            <br />
            modern
            <br />
            <span className="text-gray-400">software.</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            React &amp; TypeScript for the frontend —
            <br />Firebase, APIs, and real-world integrations.
          </p>
        </div>
      </motion.div>

      {/* ── Section 3: Right ─────────────────────────────────────────── */}
      <motion.div
        style={{ opacity: s3Opacity, x: s3X }}
        className="absolute inset-0 flex flex-col justify-center items-end pr-10 md:pr-20 lg:pr-28"
      >
        <div className="max-w-xs md:max-w-sm text-right">
          <p className="text-[10px] tracking-[0.3em] text-gray-500 uppercase mb-5">
            03 &nbsp;/&nbsp; Approach
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none tracking-tighter mb-5">
            Dev skills
            <br />
            meet QA
            <br />
            <span className="text-gray-400">precision.</span>
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Selenium, TestNG &amp; Postman for quality,
            <br />manual and automated, end-to-end.
          </p>
        </div>
      </motion.div>

      {/* ── Section 4: Final CTA ─────────────────────────────────────── */}
      <motion.div
        style={{ opacity: s4Opacity, y: s4Y }}
        className="absolute inset-0 flex flex-col items-center justify-center px-6"
      >
        <div className="text-center">
          <p className="text-[10px] tracking-[0.35em] text-gray-500 uppercase mb-6">
            04 &nbsp;/&nbsp; Let&apos;s Connect
          </p>
          <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-black text-white leading-none tracking-tighter mb-8">
            Open to
            <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: '1px rgba(255,255,255,0.35)' }}
            >
              opportunities.
            </span>
          </h2>
          <motion.a
            href="#contact"
            className="pointer-events-auto inline-flex items-center gap-3 px-8 py-4 border border-white/20 rounded-full text-sm font-semibold text-white hover:bg-white hover:text-[#121212] transition-all duration-300 group"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="w-2 h-2 rounded-full bg-green-400 group-hover:bg-[#121212] animate-pulse transition-colors duration-300" />
            Get in touch
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default Overlay;
