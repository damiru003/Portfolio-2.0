'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface SkillGroup {
  category: string;
  color: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Languages',
    color: 'from-indigo-500 to-purple-500',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frameworks & Libraries',
    color: 'from-cyan-500 to-blue-500',
    skills: ['React', 'Tailwind CSS', 'Node.js', 'Bootstrap', 'Framer Motion'],
  },
  {
    category: 'Testing & QA',
    color: 'from-emerald-500 to-teal-500',
    skills: ['Selenium WebDriver', 'TestNG', 'Postman', 'Functional Testing', 'Regression Testing', 'API Testing'],
  },
  {
    category: 'Tools & Platforms',
    color: 'from-orange-500 to-rose-500',
    skills: ['Git', 'GitHub', 'AWS', 'VS Code', 'IntelliJ IDEA'],
  },
  {
    category: 'Databases',
    color: 'from-violet-500 to-fuchsia-500',
    skills: ['MySQL', 'Firebase', 'Firestore'],
  },
  {
    category: 'Concepts',
    color: 'from-amber-500 to-yellow-500',
    skills: ['SDLC', 'STLC', 'REST APIs', 'OOP', 'Agile / Scrum', 'Computer Vision'],
  },
];

const Skills: React.FC = () => (
  <section id="skills" className="relative w-full bg-gray-50 dark:bg-[#0e0e0e] px-6 py-28 md:px-12 lg:px-24 overflow-hidden">
    {/* Ambient glow */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-cyan-500/[0.03] rounded-full blur-[130px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/[0.03] rounded-full blur-[120px]" />
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
        <p className="text-[10px] tracking-[0.3em] text-gray-400 dark:text-gray-600 uppercase mb-5">Technical Skills</p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">
            My
            <br />
            <span className="stroke-outline">
              Toolkit
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-600 text-sm max-w-[32ch] leading-relaxed md:text-right">
            Technologies I use to build reliable, tested, and scalable software.
          </p>
        </div>
      </motion.div>

      {/* Skill groups */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: gi * 0.07 }}
            className="group rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.07] dark:border-white/[0.07] p-7
                       hover:border-black/20 dark:hover:border-white/20 hover:bg-black/[0.05] dark:hover:bg-white/[0.06] transition-all duration-400"
          >
            {/* Category header */}
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${group.color} shrink-0`} />
              <p className="text-[11px] tracking-[0.2em] text-gray-500 dark:text-gray-500 uppercase font-medium">
                {group.category}
              </p>
            </div>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: gi * 0.07 + si * 0.04 }}
                  className="px-3 py-1.5 text-xs rounded-lg
                             bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] text-gray-600 dark:text-gray-400
                             group-hover:border-black/[0.14] dark:group-hover:border-white/[0.14] group-hover:text-gray-800 dark:group-hover:text-gray-300
                             transition-all duration-300"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
