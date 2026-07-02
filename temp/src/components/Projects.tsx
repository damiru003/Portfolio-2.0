'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  year: string;
  role: string;
  description: string;
  devPoints: string[];
  qaPoints: string[];
  tags: string[];
  gradient: string;
  github?: string;
  live?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'VeriLearn – AI-Assisted Feynman Learning System',
    year: '2026',
    role: 'Final Year Research Project · Full-Stack Developer · Python, React, NLP',
    description:
      'An AI-assisted web application that transforms complex academic texts into beginner-friendly explanations using the Feynman Technique. Generates structured simplifications with real-life analogies, step-by-step breakdowns, and "why-it-works" reasoning, then automatically verifies factual accuracy using NLI with DeBERTa-v3-small, producing a measurable Support Score. Low-quality outputs are auto-regenerated via a self-correction loop, and interactive quizzes reinforce retention.',
    devPoints: [],
    qaPoints: [
      'Integrated an automated faithfulness-verification pipeline: claims extracted from AI output are verified against source text using semantic retrieval and Natural Language Inference (NLI).',
      'Built a self-correction loop that regenerates explanations falling below a quality threshold ensuring pedagogically sound, faithful outputs.',
      'Designed controlled experiment protocol with 20–30 CS undergraduates comparing comprehension and one-week retention across three conditions (original text, unstructured LLM, VeriLearn).',
    ],
    tags: ['Python', 'React', 'NLP', 'DeBERTa', 'LLM', 'Feynman Technique', 'NLI'],
    gradient: 'from-violet-500 via-purple-600 to-indigo-600',
    github: 'https://github.com/damiru003/Feynman_System',
  },
  {
    id: 2,
    title: 'DevPulse — Real-Time Developer Activity Dashboard',
    year: '2025',
    role: 'Solo Project · Full-Stack Developer · FastAPI, Next.js, PostgreSQL, WebSocket',
    description:
      'A full-stack real-time dashboard for tracking developer activity with a FastAPI async REST API, PostgreSQL + SQLAlchemy 2.0 ORM, and JWT/bcrypt authentication — connected to a Next.js 16 TypeScript frontend with SSR and typed API client.',
    devPoints: [
      'Built a FastAPI async REST API with 10 endpoints, PostgreSQL + SQLAlchemy 2.0 ORM, and JWT/bcrypt authentication.',
      'Engineered a WebSocket broadcast system for live activity updates across all connected clients with interactive Recharts visualizations.',
      'Implemented a fully custom glassmorphism dark UI — no CSS frameworks — with SSR on Next.js 16 TypeScript frontend.',
    ],
    qaPoints: [],
    tags: ['FastAPI', 'Next.js', 'PostgreSQL', 'WebSocket', 'JWT', 'TypeScript', 'Recharts'],
    gradient: 'from-sky-400 via-cyan-500 to-teal-500',
    github: 'https://github.com/damiru003/DevPulse',
  },
  {
    id: 3,
    title: 'Attend AI – Intelligent Attendance System',
    year: '2025',
    role: 'Solo Project · QA & Developer Role · Python, Flask, dlib, OpenCV',
    description:
      'An AI-powered attendance system using face recognition and computer vision to automatically record student attendance and detect emotions in real time, reducing manual tracking overhead.',
    devPoints: [
      'Developed an AI-powered attendance system with real-time face recognition and live camera streaming via a Flask web interface.',
      'Built attendance logging and notification features with emotion detection using dlib and OpenCV pipelines.',
    ],
    qaPoints: [
      'Authored 25+ test scenarios targeting face detection edge cases, attendance marking logic, and email notification flows.',
      'Exposed low-light and camera-access failures through real-world environmental testing, tracked fixes through full regression cycles.',
      'Validated liveness and emotion detection pipelines under varied lighting and face-angle conditions.',
    ],
    tags: ['Python', 'Flask', 'dlib', 'OpenCV', 'Face Recognition', 'AI'],
    gradient: 'from-emerald-400 via-cyan-500 to-blue-500',
    github: 'https://github.com/damiru003/Face-attendance-system',
  },
  {
    id: 4,
    title: 'Accident, Complaint & Certification Management System',
    year: '2025',
    role: 'Group Project · QA & Developer Role · MERN Stack',
    description:
      'A management platform for Bio Foods (PVT) LTD handling accident reporting, complaint management, certification tracking, and procedure change requests across organisational workflows.',
    devPoints: [
      'Developed a role-based web application with real-time notifications and workflow management to handle accident, complaint, and certification processes.',
      'Built customizable reporting flows and user-friendly modules across the MERN stack.',
    ],
    qaPoints: [
      'Designed and executed 40+ manual test cases for accident reporting, complaint management, certification tracking, and procedure change request modules.',
      'Performed API testing using Postman to validate backend endpoints.',
      'Logged and tracked defects through their full lifecycle ensuring clear reproduction steps and status updates for developers.',
      'Validated role-based access, approval workflows, notifications, and report generation.',
    ],
    tags: ['MERN Stack', 'Manual Testing', 'Postman', 'API Testing', 'Defect Tracking'],
    gradient: 'from-rose-400 via-orange-400 to-amber-400',
    github: 'https://github.com/damiru003',
  },
  {
    id: 5,
    title: 'PlanTogether',
    year: '2026',
    role: 'Solo Project · QA & Developer Role · React, TypeScript, Firebase',
    description:
      'A multi-organization event planning platform supporting event management, RSVP tracking, real-time voting, comment threads, and secure role-based access control across organizations.',
    devPoints: [
      'Built responsive UI components and real-time event features including RSVP tracking, voting, comments, and role-based access control.',
      'Integrated Firebase Auth, Firestore real-time sync, Recharts for analytics, and organization-level data isolation.',
    ],
    qaPoints: [
      'Designed and executed 30+ test cases for features such as event creation, voting, RSVP tracking, and comments.',
      'Implemented unit tests with Jest & React Testing Library.',
      'Validated Firebase auth and real-time sync with full defect documentation across release cycles.',
    ],
    tags: ['React', 'TypeScript', 'Firebase', 'Jest', 'RBAC'],
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    github: 'https://github.com/damiru003/PlanTogether',
  },
  {
    id: 6,
    title: 'Selenium Test Automation Framework',
    year: '2026',
    role: 'Solo Project · Ongoing · Java, Selenium WebDriver, TestNG',
    description:
      'A comprehensive web automation test suite built with Selenium WebDriver and TestNG to validate end-to-end user flows on web applications using the Page Object Model design pattern.',
    devPoints: [],
    qaPoints: [
      'Building a test automation framework using Selenium and TestNG with the Page Object Model design pattern.',
      'Creating reusable wrapper methods and structured automation, application, and test layers.',
      'Executing regression test suites via TestNG XML, with Extent Reports and screenshot capture on failure supporting pre-release quality gates.',
    ],
    tags: ['Selenium', 'TestNG', 'Java', 'POM', 'Extent Reports'],
    gradient: 'from-cyan-500 via-teal-500 to-emerald-500',
    github: 'https://github.com/damiru003/Selenium_Test_Automation_Framework',
  },
  {
    id: 7,
    title: 'AI-Based Image Denoising System',
    year: '2025',
    role: 'Solo Project · Developer Role · Python, Deep Learning',
    description:
      'A deep learning application that uses convolutional neural networks to remove noise from images and restore image quality. Trained and evaluated on standard image datasets with measurable PSNR improvements.',
    devPoints: [
      'Built a deep learning image denoising application using CNN models with a Flask-based web interface for image upload, processing, and result preview.',
      'Designed the frontend interaction flow and validated image quality using PSNR, SSIM, and MSE metrics.',
    ],
    qaPoints: [],
    tags: ['Python', 'Flask', 'Deep Learning', 'CNN', 'OpenCV', 'NumPy'],
    gradient: 'from-orange-400 via-rose-500 to-pink-600',
    github: 'https://github.com/damiru003/Noiceremoval',
  },
  {
    id: 8,
    title: 'Bookstore Management System',
    year: '2025',
    role: 'Solo Project · QA & Developer Role · Python, Owlready2, Mesa',
    description:
      'An intelligent bookstore simulation using ontology-based knowledge representation and software agents to model real-world bookstore operations including inventory management, purchase recommendations, and customer interactions.',
    devPoints: [
      'Designed a multi-agent system in Python simulating real-world bookstore workflows, applying object-oriented and rule-based logic for automated decision-making.',
      'Built an interactive GUI for real-time visualization of system behavior and agent interactions.',
    ],
    qaPoints: [
      'Tested ontology-based bookstore simulation with customer and employee agents.',
      'Designed scenarios for agent browsing, purchasing, and restocking.',
      'Validated SWRL rule logic and inter-agent communication.',
      'Identified logic errors and simulation edge cases through exploratory GUI testing.',
    ],
    tags: ['Python', 'Owlready2', 'Mesa', 'Ontology', 'Intelligent Agents'],
    gradient: 'from-violet-500 via-fuchsia-500 to-indigo-500',
    github: 'https://github.com/damiru003/Bookstore-Management-System-with-Ontology-and-Multi-Agent--Simulation',
  },
];

// ── Icons ─────────────────────────────────────────────────────────────────────
const GitHubIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
);

const CodeIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

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
      className={`pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-[0.07]
                  transition-opacity duration-500 bg-gradient-to-br ${project.gradient}`}
      aria-hidden
    />

    <div className="relative z-10 flex flex-col h-full p-7 md:p-9">
      {/* Header row */}
      <div className="flex items-start justify-between mb-5">
        <span className="text-xs tracking-[0.25em] text-gray-400 dark:text-gray-600 uppercase font-mono">
          {String(project.id).padStart(2, '0')} / {project.year}
        </span>
        {/* GitHub button on hover */}
        {project.github && (
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center
                         hover:bg-gray-900 dark:hover:bg-white hover:border-gray-900 dark:hover:border-white
                         text-gray-600 dark:text-gray-400 hover:text-white dark:hover:text-[#121212]
                         transition-all duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <GitHubIcon />
            </motion.a>
          </div>
        )}
      </div>

      {/* Visual band */}
      <div
        className={`w-full h-28 rounded-xl bg-gradient-to-br ${project.gradient}
                    opacity-[0.12] group-hover:opacity-[0.2] transition-opacity duration-500 mb-6`}
      />

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white tracking-tight mb-1">
        {project.title}
      </h3>

      {/* Role line */}
      <p className="text-sm text-gray-400 dark:text-gray-500 mb-4 italic">{project.role}</p>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-500 text-base leading-relaxed mb-5 group-hover:text-gray-700 dark:group-hover:text-gray-400 transition-colors duration-300">
        {project.description}
      </p>

      {/* Dev highlights */}
      {project.devPoints.length > 0 && (
        <div className="mb-5">
          <p className="text-xs tracking-[0.2em] text-gray-400 dark:text-gray-600 uppercase mb-3 font-medium flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400" />
            Dev Highlights
          </p>
          <ul className="space-y-2">
            {project.devPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-500 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-400 transition-colors duration-300">
                <span className="text-sky-500 dark:text-sky-400">
                  <CodeIcon />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* QA / Testing highlights */}
      {project.qaPoints.length > 0 && (
        <div className="mb-6">
          <p className="text-xs tracking-[0.2em] text-gray-400 dark:text-gray-600 uppercase mb-3 font-medium flex items-center gap-1.5">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
            QA Highlights
          </p>
          <ul className="space-y-2">
            {project.qaPoints.map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-500 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-400 transition-colors duration-300">
                <span className="text-emerald-500 dark:text-emerald-400">
                  <CheckIcon />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Tags + GitHub link at bottom */}
      <div className="flex flex-wrap items-center justify-between gap-3 mt-auto">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm tracking-wide rounded-full
                         bg-black/[0.05] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.1] text-gray-500
                         group-hover:border-black/20 dark:group-hover:border-white/20 group-hover:text-gray-700 dark:group-hover:text-gray-400
                         transition-all duration-300 uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-400 dark:text-gray-600 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <GitHubIcon />
            <span>View repo</span>
          </a>
        )}
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
        <p className="text-xs tracking-[0.3em] text-gray-400 dark:text-gray-600 uppercase mb-5">
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
          <p className="text-gray-500 dark:text-gray-600 text-base max-w-[30ch] leading-relaxed md:text-right">
            A selection of work that showcases innovation, quality, and craft.
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
        <p className="text-gray-500 dark:text-gray-600 text-base">Seeking internships, graduate roles, or freelance collaborations.</p>
        <div className="flex items-center gap-4">
          <motion.a
            href="https://github.com/damiru003"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 border border-black/[0.1] dark:border-white/[0.12]
                       text-gray-700 dark:text-gray-300 font-semibold text-base rounded-full
                       hover:border-black/25 dark:hover:border-white/25 hover:bg-black/[0.04] dark:hover:bg-white/[0.05]
                       transition-all duration-200 group"
          >
            <GitHubIcon />
            View all on GitHub
          </motion.a>
          <motion.a
            href="mailto:gamagedamiru@gmail.com"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-[#121212]
                       font-bold text-base rounded-full hover:bg-gray-700 dark:hover:bg-gray-100 transition-colors duration-200 group"
          >
            Let&apos;s Connect
            <svg
              className="w-4 h-4 group-hover:translate-x-0.5 transition-transform"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Projects;
