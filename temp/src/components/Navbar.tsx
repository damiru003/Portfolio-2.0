'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

const NAV_ITEMS = ['About', 'Skills', 'Work', 'Education', 'Experience', 'Contact'];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [hidden, setHidden]       = useState(false);
  const [lastY, setLastY]         = useState(0);
  const [mounted, setMounted]     = useState(false);
  const { theme, setTheme }       = useTheme();

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      // Hide on scroll-down after 80px, show on scroll-up
      if (y > 80) {
        setHidden(y > lastY + 4);
      } else {
        setHidden(false);
      }
      setLastY(y);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastY]);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: hidden ? -80 : 0, opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className={[
        'fixed top-0 left-0 right-0 z-50',
        'px-6 md:px-10 lg:px-16 py-5',
        'flex items-center justify-between',
        'transition-colors duration-300',
        scrolled
          ? 'bg-white/80 dark:bg-[#121212]/75 backdrop-blur-xl border-b border-black/[0.06] dark:border-white/[0.06]'
          : '',
      ].join(' ')}
    >
      {/* Logo */}
      <motion.a
        href="/"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-gray-900 dark:text-white font-black text-xl tracking-tighter select-none"
      >
        <span>DG</span>
        <span className="text-gray-900/30 dark:text-white/30">.</span>
      </motion.a>

      {/* Centre nav links */}
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="hidden md:flex items-center gap-8"
      >
        {NAV_ITEMS.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="text-xs text-gray-500 hover:text-gray-900 dark:hover:text-white tracking-[0.15em] uppercase transition-colors duration-200"
            >
              {item}
            </a>
          </li>
        ))}
      </motion.ul>

      {/* Right side: theme toggle + availability badge */}
      <div className="flex items-center gap-3">
        {/* Theme toggle */}
        {mounted && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full flex items-center justify-center
                       border border-black/[0.08] dark:border-white/[0.12]
                       bg-black/[0.04] dark:bg-white/[0.04]
                       hover:bg-black/[0.08] dark:hover:bg-white/[0.08]
                       text-gray-600 dark:text-gray-400
                       hover:text-gray-900 dark:hover:text-white
                       transition-all duration-200"
          >
            {theme === 'dark' ? (
              /* Sun icon */
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5" strokeWidth={1.8} />
                <path strokeLinecap="round" strokeWidth={1.8}
                  d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              /* Moon icon */
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </motion.button>
        )}

        {/* Availability badge */}
        <motion.a
          href="mailto:hello@example.com"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full
                     border border-black/[0.1] dark:border-white/[0.12]
                     hover:border-black/20 dark:hover:border-white/30
                     hover:bg-black/[0.04] dark:hover:bg-white/5
                     transition-all duration-200 group"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-[11px] tracking-[0.12em] text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white uppercase transition-colors duration-200">
            Available
          </span>
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
