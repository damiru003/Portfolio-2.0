'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SOCIALS = [
  {
    label: 'GitHub',
    handle: '@damiru003',
    href: 'https://github.com/damiru003',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    handle: 'Damiru Gamage',
    href: 'https://www.linkedin.com/in/damiru-gamage-05a38b24b',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    handle: 'gamedamiru@gmail.com',
    href: 'gamagedamiru@gmail.com',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

type FormState = 'idle' | 'sending' | 'sent' | 'error';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormState>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate async send — replace with real API call
    await new Promise((r) => setTimeout(r, 1400));
    setStatus('sent');
  };

  return (
    <section id="contact" className="relative w-full bg-white dark:bg-[#121212] px-6 py-28 md:px-12 lg:px-24 overflow-hidden">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/[0.04] rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-indigo-500/[0.04] rounded-full blur-[120px]" />
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
          <p className="text-[10px] tracking-[0.3em] text-gray-400 dark:text-gray-600 uppercase mb-5">Contact</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-none">
              Let&apos;s
              <br />
              <span className="stroke-outline">
                connect.
              </span>
            </h2>
            <p className="text-gray-500 dark:text-gray-600 text-sm max-w-[32ch] leading-relaxed md:text-right">
              Open to internships, graduate roles, collaborations, and just a good chat.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left — socials */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col justify-between gap-8"
          >
            <div className="space-y-4">
              {SOCIALS.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.09 }}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-4 p-5 rounded-2xl
                             bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.07] dark:border-white/[0.07]
                             hover:border-black/20 dark:hover:border-white/20 hover:bg-black/[0.05] dark:hover:bg-white/[0.07]
                             transition-all duration-300"
                >
                  <span className="text-gray-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                    {s.icon}
                  </span>
                  <div>
                    <p className="text-gray-900 dark:text-white text-sm font-semibold">{s.label}</p>
                    <p className="text-gray-500 dark:text-gray-600 text-xs mt-0.5">{s.handle}</p>
                  </div>
                  <svg
                    className="w-4 h-4 text-gray-400 dark:text-gray-700 group-hover:text-gray-900 dark:group-hover:text-white ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 group-hover:translate-x-0"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
              ))}
            </div>

            {/* Availability callout */}
            <div className="rounded-2xl bg-emerald-500/[0.07] border border-emerald-500/[0.2] p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <p className="text-emerald-400 text-xs font-semibold tracking-wide uppercase">Available Now</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Currently seeking internships, graduate developer roles, and freelance opportunities.
              </p>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="rounded-2xl bg-black/[0.03] dark:bg-white/[0.04] border border-black/[0.07] dark:border-white/[0.07] p-8 md:p-10">
              <AnimatePresence mode="wait">
                {status === 'sent' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center h-72 gap-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center mb-2">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-900 dark:text-white text-xl font-bold">Message sent!</p>
                    <p className="text-gray-500 text-sm max-w-[28ch]">
                      Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-5"
                  >
                    {/* Name + Email row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {[
                        { id: 'name',  label: 'Your Name',    type: 'text',  placeholder: 'John Doe' },
                        { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                      ].map(({ id, label, type, placeholder }) => (
                        <div key={id} className="flex flex-col gap-2">
                          <label htmlFor={id} className="text-[11px] tracking-[0.15em] text-gray-400 dark:text-gray-600 uppercase">
                            {label}
                          </label>
                          <input
                            id={id}
                            name={id}
                            type={type}
                            required
                            placeholder={placeholder}
                            value={form[id as keyof typeof form]}
                            onChange={handleChange}
                            className="w-full bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] rounded-xl px-4 py-3
                                       text-gray-900 dark:text-white text-sm placeholder:text-gray-400 dark:placeholder:text-gray-700
                                       focus:outline-none focus:border-black/30 dark:focus:border-white/30 focus:bg-black/[0.06] dark:focus:bg-white/[0.08]
                                       transition-all duration-200"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Message */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-[11px] tracking-[0.15em] text-gray-400 dark:text-gray-600 uppercase">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Hi, I'd love to chat about..."
                        value={form.message}
                        onChange={handleChange}
                        className="w-full bg-black/[0.04] dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] rounded-xl px-4 py-3
                                   text-gray-900 dark:text-white text-sm placeholder:text-gray-400 dark:placeholder:text-gray-700 resize-none
                                   focus:outline-none focus:border-black/30 dark:focus:border-white/30 focus:bg-black/[0.06] dark:focus:bg-white/[0.08]
                                   transition-all duration-200"
                      />
                    </div>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={status === 'sending'}
                      whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-1 w-full py-4 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-[#121212]
                                 font-bold text-sm tracking-wide
                                 hover:bg-gray-700 dark:hover:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed
                                 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      {status === 'sending' ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
