'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  year: string;
  description: string;
  tags: string[];
  gradient: string;
  link?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'PlanTogether',
    year: '2024',
    description:
      'A multi-organization event planning platform built with React, TypeScript, and Firebase. Supports event management, RSVP tracking, real-time voting, comment threads, and secure role-based access control across organizations.',
    tags: ['React', 'TypeScript', 'Firebase', 'RBAC'],
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    link: '#',
  },
  {
    id: 2,
    title: 'AI Attendance System',
    year: '2024',
    description:
      'An AI-powered attendance system using face recognition and computer vision techniques to automatically record student attendance and detect emotions in real time, reducing manual tracking overhead.',
    tags: ['Python', 'OpenCV', 'Face Recognition', 'AI'],
    gradient: 'from-emerald-400 via-cyan-500 to-blue-500',
    link: '#',
  },
  {
    id: 3,
    title: 'Image Denoising Application',
    year: '2024',
    description:
      'A deep learning application that uses convolutional neural networks to remove noise from images and restore image quality. Trained and evaluated on standard image datasets with measurable PSNR improvements.',
    tags: ['Python', 'Deep Learning', 'CNN', 'Image Processing'],
    gradient: 'from-orange-400 via-rose-500 to-pink-600',
    link: '#',
  },
  {
    id: 4,
    title: 'Bookstore Management Simulation',
    year: '2023',
    description:
      'An intelligent bookstore simulation system using ontology-based knowledge representation and software agents to model real-world bookstore operations including inventory management, purchase recommendations, and customer interactions.',
    tags: ['Ontology', 'Intelligent Agents', 'Knowledge Representation'],
    gradient: 'from-violet-500 via-fuchsia-500 to-indigo-500',
    link: '#',
  },
];

// ── Single card ──────────────────────────────────────────────────────────────
const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
    whileHover={{ y: -6 }}
    className="group relative flex flex-col h-full rounded-2xl overflow-hidden
               bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.08] dark:border-white/[0.08]
               hover:border-black/20 dark:hover:border-white/20 hover:bg-black/[0.05] dark:hover:bg-white/[0.07]
               backdrop-blur-sm transition-all duration-500"
  >
    {/* Glow on hover */}
    <div
      className={`pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100
                  transition-opacity duration-500 blur-2xl bg-gradient-to-br ${project.gradient}`}
      style={{ opacity: 0 }}
      aria-hidden
    />
    <div
      className={`pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-[0.07]
                  transition-opacity duration-500 bg-gradient-to-br ${project.gradient}`}
      aria-hidden
    />

    <div className="relative z-10 flex flex-col h-full p-7 md:p-9">
      {/* Header row */}
      <div className="flex items-start justify-between mb-7">
        <span className="text-[10px] tracking-[0.25em] text-gray-400 dark:text-gray-600 uppercase font-mono">
          {String(project.id).padStart(2, '0')} / {project.year}
        </span>
        <motion.a
          href={project.link}
          whileHover={{ x: 3, y: -3 }}
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300
                     w-8 h-8 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center
                     hover:bg-gray-900 dark:hover:bg-white hover:border-gray-900 dark:hover:border-white group/arrow"
        >
          <svg
            className="w-3.5 h-3.5 text-gray-900 dark:text-white group-hover/arrow:text-white dark:group-hover/arrow:text-[#121212] transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </motion.a>
      </div>

      {/* Visual band */}
      <div
        className={`w-full h-36 rounded-xl bg-gradient-to-br ${project.gradient}
                    opacity-[0.12] group-hover:opacity-[0.2] transition-opacity duration-500 mb-7`}
      />

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white tracking-tight mb-3">
        {project.title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed flex-grow mb-7 group-hover:text-gray-700 dark:group-hover:text-gray-400 transition-colors duration-300">
        {project.description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-[10px] tracking-wide rounded-full
                       bg-black/[0.05] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-gray-500
                       group-hover:border-black/20 dark:group-hover:border-white/20 group-hover:text-gray-700 dark:group-hover:text-gray-400
                       transition-all duration-300 uppercase"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
);

// ── Section ───────────────────────────────────────────────────────────────────
const Projects: React.FC = () => (
  <section id="work" className="relative w-full bg-white dark:bg-[#121212] px-6 py-28 md:px-12 lg:px-24 overflow-hidden">
    {/* Ambient orbs */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-indigo-500/[0.04] rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-purple-500/[0.04] rounded-full blur-[100px]" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16 md:mb-20"
      >
        <p className="text-[10px] tracking-[0.3em] text-gray-400 dark:text-gray-600 uppercase mb-5">
          Selected work
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">
            Featured
            <br />
            <span className="stroke-outline">
              Projects
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-600 text-sm max-w-[30ch] leading-relaxed md:text-right">
            A selection of work that showcases innovation, performance, and craft.
          </p>
        </div>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-20 flex flex-col items-center text-center gap-6"
      >
        <p className="text-gray-500 dark:text-gray-600 text-sm">Seeking internships, graduate roles, or freelance collaborations.</p>
        <motion.a
          href="mailto:hello@example.com"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-[#121212]
                     font-bold text-sm rounded-full hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors duration-200 group"
        >
          Let&apos;s Connect
          <svg
            className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default Projects;
