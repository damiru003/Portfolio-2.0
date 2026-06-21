'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const STATS = [
  { value: '4', label: 'Year Undergraduate' },
  { value: '5+', label: 'Projects Built' },
  { value: '10+', label: 'Technologies' },
  { value: '2026', label: 'Graduating' },
];

const About: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="relative w-full bg-white dark:bg-[#121212] px-6 py-28 md:px-12 lg:px-24 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-indigo-500/[0.04] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.3em] text-gray-400 dark:text-gray-600 uppercase mb-5"
        >
          About Me
        </motion.p>

        {/* Top row: headline + image */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center mb-16">
          {/* Left — headline + bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none mb-10">
              Hello, I&apos;m
              <br />
              <span className="stroke-outline">
                Damiru.
              </span>
            </h2>

            <div className="space-y-5 text-gray-600 dark:text-gray-500 text-lg leading-[1.8]">
              <p>
                I&apos;m a <span className="text-gray-800 dark:text-gray-300 font-medium">final year Computer Science undergraduate</span> at General Sir John Kotelawala Defence University with a strong interest in both software development and software quality assurance.
              </p>
              <p>
                My academic journey has allowed me to work on practical projects spanning <span className="text-gray-800 dark:text-gray-300 font-medium">AI systems, web applications, and software testing environments</span> gaining experience in responsive UI design, backend integrations, and structured software testing.
              </p>
              <p>
                I am particularly interested in building <span className="text-gray-800 dark:text-gray-300 font-medium">reliable software systems</span> and ensuring applications meet high quality standards. I am always eager to learn new technologies, collaborate with teams, and contribute to innovative software solutions.
              </p>
            </div>

            {/* CTA links */}
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <motion.a
                href="/Damiru-Gamage-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-[#121212] font-semibold text-sm rounded-full hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors duration-200"
              >
                Download CV
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 border border-black/[0.12] dark:border-white/[0.12] text-gray-900 dark:text-white font-semibold text-base rounded-full hover:border-black/30 dark:hover:border-white/30 hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
              >
                Get in touch
              </motion.a>
            </div>
          </motion.div>

          {/* Right — Profile Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end lg:pl-6"
          >
            <div className="relative">
              {/* Glow ring behind image */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-purple-500/20 blur-xl" />
              {/* Image container */}
              <div className="relative w-72 h-[22rem] md:w-80 md:h-[24rem] rounded-3xl overflow-hidden border border-black/[0.08] dark:border-white/[0.1] bg-black/[0.04] dark:bg-white/[0.04]">
                {!imgError && (
                  <Image
                    src="/profile.png"
                    alt="Damiru Gamage"
                    fill
                    className="object-cover object-top"
                    priority
                    onError={() => setImgError(true)}
                  />
                )}

                {/* Fallback initials shown only when image fails to load */}
                {imgError && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
                    <div className="text-center">
                      <p className="text-6xl font-black text-gray-300 dark:text-gray-600 tracking-tighter">DG</p>
                      <p className="text-[10px] tracking-[0.2em] text-gray-400 dark:text-gray-600 uppercase mt-2">Add photo</p>
                      <p className="text-[9px] text-gray-400 dark:text-gray-600 mt-1">public/profile.jpg</p>
                    </div>
                  </div>
                )}
              </div>
              {/* Decorative corner accent */}
              <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-black/[0.02] dark:bg-white/[0.02]" />
            </div>
          </motion.div>
        </div>

        {/* Bottom row — stats + quick facts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.07] dark:border-white/[0.07] p-6 hover:border-black/20 dark:hover:border-white/20 hover:bg-black/[0.05] dark:hover:bg-white/[0.06] transition-all duration-300"
                >
                  <p className="text-4xl font-black text-gray-900 dark:text-white tracking-tighter mb-1">{s.value}</p>
                  <p className="text-base text-gray-400 dark:text-gray-600 tracking-[0.15em] uppercase">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick info card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.07] dark:border-white/[0.07] p-7 space-y-5">
              {[
                { label: 'Degree', value: 'BSc (Hons) Computer Science' },
                { label: 'University', value: 'General Sir John Kotelawala Defence University' },
                { label: 'Focus', value: 'Software Development & QA Engineering' },
                { label: 'Status', value: 'Open to internships & grad roles' },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-start justify-between gap-4 border-b border-black/[0.05] dark:border-white/[0.05] pb-5 last:border-0 last:pb-0">
                  <span className="text-base tracking-[0.15em] text-gray-400 dark:text-gray-600 uppercase shrink-0 pt-0.5">{label}</span>
                  <span className="text-base text-gray-700 dark:text-gray-300 text-right">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;