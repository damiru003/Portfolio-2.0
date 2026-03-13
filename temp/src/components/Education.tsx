'use client';

import React from 'react';
import { motion } from 'framer-motion';

const EDUCATION = [
  {
    id: 1,
    degree: 'BSc (Hons) Computer Science',
    institution: 'General Sir John Kotelawala Defence University',
    period: '2022 – 2026',
    status: 'In Progress',
    grade: 'Rathmalana, Sri Lanka',
    highlights: [
      'Software Engineering & Architecture',
      'Artificial Intelligence',
      'Web Application Development',
      'Software Quality & Testing',
      'Database Systems',
      'Computer Networks',
      'System Design',
      'Operating Systems',
    ],
  },
];

const Education: React.FC = () => (
  <section id="education" className="relative w-full bg-white dark:bg-[#121212] px-6 py-28 md:px-12 lg:px-24 overflow-hidden">
    {/* Ambient glow */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-indigo-500/[0.03] rounded-full blur-[140px]" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16 md:mb-20"
      >
        <p className="text-[10px] tracking-[0.3em] text-gray-400 dark:text-gray-600 uppercase mb-5">Education</p>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">
          Academic
          <br />
          <span className="stroke-outline">
            Background
          </span>
        </h2>
      </motion.div>

      {/* Education timeline */}
      <div className="flex flex-col gap-6">
        {EDUCATION.map((edu, i) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="group rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.07] dark:border-white/[0.07]
                       hover:border-black/20 dark:hover:border-white/20 hover:bg-black/[0.05] dark:hover:bg-white/[0.06] transition-all duration-400 p-8 md:p-10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left: degree info */}
              <div className="lg:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-[10px] px-3 py-1 rounded-full border tracking-[0.15em] uppercase font-medium ${
                    edu.status === 'In Progress'
                      ? 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'
                      : 'border-black/[0.1] dark:border-white/[0.1] text-gray-500 bg-black/[0.04] dark:bg-white/[0.04]'
                  }`}>
                    {edu.status}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white tracking-tight mb-2 leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-medium mb-1">{edu.institution}</p>
                <p className="text-gray-400 dark:text-gray-600 text-sm font-mono">{edu.period}</p>
                <p className="text-gray-500 text-sm mt-3 italic">{edu.grade}</p>
              </div>

              {/* Right: highlights */}
              <div className="lg:col-span-2">
                <p className="text-[10px] tracking-[0.2em] text-gray-400 dark:text-gray-600 uppercase mb-4">
                  {edu.id === 1 ? 'Key Modules' : 'Subjects'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((h) => (
                    <span
                      key={h}
                      className="px-3 py-1.5 text-xs rounded-lg
                                 bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] text-gray-600 dark:text-gray-400
                                 group-hover:border-black/[0.14] dark:group-hover:border-white/[0.14] group-hover:text-gray-800 dark:group-hover:text-gray-300
                                 transition-all duration-300"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
