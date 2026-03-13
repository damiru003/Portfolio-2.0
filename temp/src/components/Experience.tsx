'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  id: number;
  type: 'internship' | 'hackathon' | 'certification' | 'achievement' | 'testing';
  title: string;
  organisation: string;
  period: string;
  description: string;
  tags: string[];
  gradient: string;
}

const ITEMS: ExperienceItem[] = [
  {
    id: 1,
    type: 'testing',
    title: 'Software Testing – PlanTogether Platform',
    organisation: 'University Project',
    period: '2024',
    description:
      'Designed and executed manual test cases covering authentication, role-based access control, real-time comments, and RSVP workflows. Performed functional and regression testing and validated system behaviour using Postman for API testing.',
    tags: ['Functional Testing', 'Regression Testing', 'Postman', 'STLC'],
    gradient: 'from-teal-500 to-emerald-500',
  },
  {
    id: 2,
    type: 'testing',
    title: 'Web Automation Testing – Selenium & TestNG',
    organisation: 'Academic Project',
    period: '2024',
    description:
      'Built a web automation test suite using Selenium WebDriver and TestNG to validate end-to-end user flows on web applications. Covered form validation, navigation, and data submission scenarios with structured test execution reports.',
    tags: ['Selenium', 'TestNG', 'Java', 'Test Automation'],
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    id: 3,
    type: 'hackathon',
    title: 'CryptX 1.0 Hackathon – Finalist',
    organisation: 'University of Sri Jayewardenepura',
    period: '2024',
    description:
      'Selected as a finalist in the CryptX 1.0 Hackathon, competing against university teams in a challenge focused on innovative technology solutions. Developed and presented a working prototype within the competition timeframe.',
    tags: ['Hackathon', 'Finalist', 'Team Project'],
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    id: 4,
    type: 'hackathon',
    title: 'ByteBlitz Mini Hackathon – 3rd Place',
    organisation: 'General Sir John Kotelawala Defence University',
    period: '2024',
    description:
      'Achieved 3rd place at the ByteBlitz Mini Hackathon at KDU, competing against fellow CS undergraduate teams. Delivered a functional solution under time constraints demonstrating both technical and problem-solving skills.',
    tags: ['Hackathon', '3rd Place', 'KDU'],
    gradient: 'from-emerald-500 to-cyan-500',
  },
  {
    id: 5,
    type: 'hackathon',
    title: 'Cypher 3.0 Data Security Hackathon – Finalist',
    organisation: 'National Level Competition',
    period: '2024',
    description:
      'Selected as a finalist in the Cypher 3.0 Data Security Hackathon, a national-level competition where teams tackled real-world cybersecurity challenges. Demonstrated understanding of data security concepts and solution design.',
    tags: ['Cybersecurity', 'Finalist', 'Data Security'],
    gradient: 'from-orange-500 to-rose-500',
  },
  {
    id: 6,
    type: 'certification',
    title: 'Meta Front-End Developer Specialization',
    organisation: 'Coursera / Meta',
    period: '2024',
    description:
      'Completed the Meta Front-End Developer Specialization covering React, JavaScript, HTML/CSS, and database management with MySQL. Also earned individual certificates in React Development, Programming with JavaScript, and Database Structures from Meta.',
    tags: ['React', 'JavaScript', 'MySQL', 'Meta'],
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    id: 7,
    type: 'certification',
    title: 'AWS Cloud Technical Essentials',
    organisation: 'Amazon Web Services',
    period: '2024',
    description:
      'Completed the AWS Cloud Technical Essentials course, gaining practical knowledge of core AWS services, cloud architecture, storage, compute, databases, and security fundamentals in the AWS ecosystem.',
    tags: ['AWS', 'Cloud', 'Amazon'],
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    id: 8,
    type: 'certification',
    title: 'Postman API Fundamentals Student Expert',
    organisation: 'Postman',
    period: '2024',
    description:
      'Earned the Postman API Fundamentals Student Expert certification, demonstrating proficiency in API testing, request building, collection management, and automated test scripting using Postman. Also completed IBM Java Programming for Beginners.',
    tags: ['Postman', 'API Testing', 'Java', 'IBM'],
    gradient: 'from-orange-400 to-rose-500',
  },
];

const TYPE_LABELS: Record<ExperienceItem['type'], string> = {
  internship:    'Internship',
  hackathon:     'Hackathon',
  certification: 'Certification',
  achievement:   'Achievement',
  testing:       'Testing',
};

const Experience: React.FC = () => (
  <section id="experience" className="relative w-full bg-gray-50 dark:bg-[#0e0e0e] px-6 py-28 md:px-12 lg:px-24 overflow-hidden">
    {/* Ambient glow */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-rose-500/[0.03] rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-500/[0.03] rounded-full blur-[120px]" />
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
        <p className="text-[10px] tracking-[0.3em] text-gray-400 dark:text-gray-600 uppercase mb-5">Testing, Hackathons &amp; Certifications</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">
            What I&apos;ve
            <br />
            <span className="stroke-outline">
              accomplished.
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-600 text-sm max-w-[30ch] leading-relaxed md:text-right">
            Testing experience, hackathon placements, and professional certifications.
          </p>
        </div>
      </motion.div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {ITEMS.map((item, i) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            whileHover={{ y: -5 }}
            className="group relative rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.07] dark:border-white/[0.07]
                       hover:border-black/20 dark:hover:border-white/20 hover:bg-black/[0.05] dark:hover:bg-white/[0.06] backdrop-blur-sm
                       transition-all duration-400 p-7 md:p-9 flex flex-col gap-5"
          >
            {/* Subtle gradient overlay on hover */}
            <div
              className={`pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-[0.05]
                          transition-opacity duration-500 bg-gradient-to-br ${item.gradient}`}
              aria-hidden
            />

            <div className="relative z-10 flex flex-col gap-5 h-full">
              {/* Top row */}
              <div className="flex items-start justify-between gap-3">
                <span className={`self-start text-[10px] px-3 py-1 rounded-full border tracking-[0.15em] uppercase font-medium
                  bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent border-black/[0.1] dark:border-white/[0.1]`}
                >
                  {TYPE_LABELS[item.type]}
                </span>
                <span className="text-[11px] font-mono text-gray-400 dark:text-gray-600 shrink-0">{item.period}</span>
              </div>

              {/* Title & org */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight mb-1">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.organisation}</p>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed flex-grow group-hover:text-gray-700 dark:group-hover:text-gray-400 transition-colors duration-300">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-[10px] tracking-wide rounded-full uppercase
                               bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] text-gray-500
                               group-hover:border-black/20 dark:group-hover:border-white/20 group-hover:text-gray-700 dark:group-hover:text-gray-400
                               transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
