'use client';

import React from 'react';
import { motion } from 'framer-motion';

// ── Data ───────────────────────────────────────────────────────────────────────

interface CompetitionItem {
  id: number;
  title: string;
  organisation: string;
  period: string;
  description: string;
  tags: string[];
  gradient: string;
  result: string; // e.g. "Finalist", "3rd Place"
}

interface CertificationItem {
  id: number;
  title: string;
  issuer: string;
  period: string;
  description: string;
  tags: string[];
  gradient: string;
}

const COMPETITIONS: CompetitionItem[] = [
  {
    id: 1,
    title: 'CryptX 1.0 Hackathon',
    organisation: 'University of Sri Jayewardenepura',
    period: '2024',
    result: 'Finalist',
    description:
      'Selected as a finalist in the CryptX 1.0 Hackathon, competing against university teams in a challenge focused on innovative technology solutions. Developed and presented a working prototype within the competition timeframe.',
    tags: ['Hackathon', 'Finalist', 'Team Project'],
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    id: 2,
    title: 'ByteBlitz Mini Hackathon',
    organisation: 'General Sir John Kotelawala Defence University',
    period: '2024',
    result: '3rd Place',
    description:
      'Achieved 3rd place at the ByteBlitz Mini Hackathon at KDU, competing against fellow CS undergraduate teams. Delivered a functional solution under time constraints demonstrating both technical and problem-solving skills.',
    tags: ['Hackathon', '3rd Place', 'KDU'],
    gradient: 'from-emerald-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Cypher 3.0 Data Security Hackathon',
    organisation: 'National Level Competition',
    period: '2024',
    result: 'Finalist',
    description:
      'Selected as a finalist in the Cypher 3.0 Data Security Hackathon,  Demonstrated understanding of data security concepts and solution design.',
    tags: ['Hackathon', 'Finalist'],
    gradient: 'from-orange-500 to-rose-500',
  },
];

const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 1,
    title: 'Meta Front-End Developer Specialization',
    issuer: 'Coursera / Meta',
    period: '2025',
    description:
      'Completed the Meta Front-End Developer Specialization covering React, JavaScript, HTML/CSS, and database management with MySQL.',
    tags: ['React', 'JavaScript', 'MySQL', 'Meta'],
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    id: 2,
    title: 'AWS Cloud Technical Essentials',
    issuer: 'Amazon Web Services',
    period: '2025',
    description:
      'Completed the AWS Cloud Technical Essentials course, gaining practical knowledge of core AWS services, cloud architecture, storage, compute, databases, and security fundamentals.',
    tags: ['AWS', 'Cloud', 'Amazon'],
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    id: 3,
    title: 'Postman API Fundamentals Student Expert',
    issuer: 'Postman',
    period: '2024',
    description:
      'Earned the Postman API Fundamentals Student Expert certification, demonstrating proficiency in API testing, request building, collection management, and automated test scripting.',
    tags: ['Postman', 'API Testing', 'REST'],
    gradient: 'from-orange-400 to-rose-500',
  },
  {
    id: 4,
    title: 'Java Programming for Beginners',
    issuer: 'IBM / Coursera',
    period: '2025',
    description:
      'Completed IBM Java Programming for Beginners covering Java fundamentals, object-oriented programming concepts, data structures, and practical coding exercises.',
    tags: ['Java', 'OOP', 'IBM'],
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    id: 5,
    title: 'Foundations of Software Testing and Validation',
    issuer: 'University of Leeds / Coursera',
    period: '2025',
    description:
      'Completed the Foundations of Software Testing and Validation course from the University of Leeds, covering testing principles, test design techniques, and quality assurance fundamentals.',
    tags: ['Software Testing', 'QA', 'Validation'],
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    id: 6,
    title: 'Learn Automation Testing with Java and Selenium WebDriver Specialization',
    issuer: 'Packt / Coursera',
    period: '2026',
    description:
      'Completed the automation testing specialization from Packt covering Selenium WebDriver, TestNG, Java, and the Page Object Model design pattern for robust test suites.',
    tags: ['Selenium', 'Java', 'TestNG', 'Automation'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 7,
    title: 'Database Structures and Management with MySQL',
    issuer: 'Meta / Coursera',
    period: '2026',
    description:
      'Completed the Meta MySQL course covering database design, SQL querying, normalization, joins, stored procedures, and database management best practices.',
    tags: ['MySQL', 'SQL', 'Databases', 'Meta'],
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    id: 8,
    title: 'Object-Oriented Programming and Java Fundamentals',
    issuer: 'Packt / Coursera',
    period: '2026',
    description:
      'Completed the OOP and Java Fundamentals specialization from Packt, covering classes, inheritance, polymorphism, interfaces, and software design principles.',
    tags: ['Java', 'OOP', 'Packt'],
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    id: 9,
    title: 'Version Control',
    issuer: 'Meta / Coursera',
    period: '2025',
    description:
      'Completed the Meta Version Control course covering Git workflows, branching strategies, merging, resolving conflicts, and collaborative development on GitHub.',
    tags: ['Git', 'GitHub', 'Version Control', 'Meta'],
    gradient: 'from-gray-600 to-gray-800',
  },
  {
    id: 10,
    title: 'Programming with JavaScript',
    issuer: 'Meta / Coursera',
    period: '2024',
    description:
      'Completed the Meta Programming with JavaScript course covering ES6+, functional programming, async/await, DOM manipulation, and modern JavaScript best practices.',
    tags: ['JavaScript', 'ES6', 'Meta'],
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    id: 11,
    title: 'Diploma in Information Technology',
    issuer: 'Esoft Metro Campus',
    period: '2019',
    description:
      'Completed a Diploma in IT at Esoft Metro Campus covering computer fundamentals, networking basics, programming concepts, and practical IT skills.',
    tags: ['IT', 'Networking', 'Diploma'],
    gradient: 'from-rose-500 to-pink-500',
  },
];

// ── Trophy Icon ────────────────────────────────────────────────────────────────
const TrophyIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M8 21h8M12 17v4M5 3H3v5a4 4 0 004 4h.5M19 3h2v5a4 4 0 01-4 4h-.5M5 3h14v5a7 7 0 01-14 0V3z" />
  </svg>
);

// ── Certificate Icon ───────────────────────────────────────────────────────────
const CertIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

// ── Competition Card ───────────────────────────────────────────────────────────
const CompetitionCard: React.FC<{ item: CompetitionItem; index: number }> = ({ item, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="group relative rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.07] dark:border-white/[0.07]
               hover:border-black/20 dark:hover:border-white/20 hover:bg-black/[0.05] dark:hover:bg-white/[0.06] backdrop-blur-sm
               transition-all duration-400 p-7 md:p-8 flex flex-col gap-4"
  >
    <div
      className={`pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-[0.05]
                  transition-opacity duration-500 bg-gradient-to-br ${item.gradient}`}
      aria-hidden
    />
    <div className="relative z-10 flex flex-col gap-5 h-full">
      {/* Top row */}
      <div className="flex items-start justify-between gap-3">
        <span className={`self-start text-xs px-3 py-1.5 rounded-full border tracking-[0.12em] uppercase font-semibold
          flex items-center gap-1.5 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent border-black/[0.1] dark:border-white/[0.1]`}>
          <TrophyIcon />
          {item.result}
        </span>
        <span className="text-sm font-mono text-gray-400 dark:text-gray-600 shrink-0">{item.period}</span>
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white tracking-tight mb-1">{item.title}</h3>
        <p className="text-base text-gray-500 dark:text-gray-400">{item.organisation}</p>
      </div>
      <p className="text-gray-600 dark:text-gray-500 text-base leading-relaxed flex-grow group-hover:text-gray-700 dark:group-hover:text-gray-400 transition-colors duration-300">
        {item.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag}
            className="px-3 py-1 text-xs tracking-wide rounded-full uppercase
                       bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] text-gray-500
                       group-hover:border-black/20 dark:group-hover:border-white/20 group-hover:text-gray-700 dark:group-hover:text-gray-400
                       transition-all duration-300">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
);

// ── Certification Card ─────────────────────────────────────────────────────────
const CertificationCard: React.FC<{ item: CertificationItem; index: number }> = ({ item, index }) => (
  <motion.article
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
    className="group relative rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.07] dark:border-white/[0.07]
               hover:border-black/20 dark:hover:border-white/20 hover:bg-black/[0.05] dark:hover:bg-white/[0.06] backdrop-blur-sm
               transition-all duration-400 p-7 md:p-8 flex flex-col gap-4"
  >
    <div
      className={`pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-[0.05]
                  transition-opacity duration-500 bg-gradient-to-br ${item.gradient}`}
      aria-hidden
    />
    <div className="relative z-10 flex flex-col gap-4 h-full">
      <div className="flex items-start justify-between gap-3">
        <span className={`self-start text-[10px] px-3 py-1.5 rounded-full border tracking-[0.12em] uppercase font-semibold
          flex items-center gap-1.5 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent border-black/[0.1] dark:border-white/[0.1]`}>
          <CertIcon />
          Certificate
        </span>
        <span className="text-sm font-mono text-gray-400 dark:text-gray-600 shrink-0">{item.period}</span>
      </div>
      <div>
        <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white tracking-tight mb-1 leading-snug">{item.title}</h3>
        <p className="text-base text-gray-500 dark:text-gray-400">{item.issuer}</p>
      </div>
      <p className="text-gray-600 dark:text-gray-500 text-base leading-relaxed flex-grow group-hover:text-gray-700 dark:group-hover:text-gray-400 transition-colors duration-300">
        {item.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span key={tag}
            className="px-3 py-1 text-xs tracking-wide rounded-full uppercase
                       bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] text-gray-500
                       group-hover:border-black/20 dark:group-hover:border-white/20 group-hover:text-gray-700 dark:group-hover:text-gray-400
                       transition-all duration-300">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.article>
);

// ── Main Experience Component (Competitions + Certifications) ─────────────────
const Experience: React.FC = () => (
  <>
    {/* ── Competitions ─────────────────────────────────────────────────────── */}
    <section id="competitions" className="relative w-full bg-gray-50 dark:bg-[#0e0e0e] px-6 py-28 md:px-12 lg:px-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-indigo-500/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-emerald-500/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs tracking-[0.3em] text-gray-400 dark:text-gray-600 uppercase mb-5">Hackathons &amp; Events</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">
              Competitions
              <br />
              <span className="stroke-outline">&amp; Awards.</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-600 text-base max-w-[30ch] leading-relaxed md:text-right">
              Hackathon placements and competitive achievements.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {COMPETITIONS.map((item, i) => (
            <CompetitionCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* ── Certifications ───────────────────────────────────────────────────── */}
    <section id="certifications" className="relative w-full bg-white dark:bg-[#121212] px-6 py-28 md:px-12 lg:px-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/[0.03] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 md:mb-20"
        >
          <p className="text-xs tracking-[0.3em] text-gray-400 dark:text-gray-600 uppercase mb-5">Professional Development</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">
              Certifications.
            </h2>
            <p className="text-gray-500 dark:text-gray-600 text-base max-w-[30ch] leading-relaxed md:text-right">
              Professional certifications and completed courses.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((item, i) => (
            <CertificationCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Experience;
