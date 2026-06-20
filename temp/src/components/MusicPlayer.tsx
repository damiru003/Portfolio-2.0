'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ── Floating note ─────────────────────────────────────────────────────────────
const FloatingNote: React.FC<{ delay: number; x: number }> = ({ delay, x }) => (
  <motion.span
    className="absolute pointer-events-none select-none text-white/25 text-xs"
    style={{ left: x, bottom: 40 }}
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: [0, 0.5, 0], y: [0, -44] }}
    transition={{ duration: 4, delay, repeat: Infinity, repeatDelay: 3, ease: 'easeOut' }}
  >
    ♪
  </motion.span>
);

// ── Module-level singleton — immune to React StrictMode double-mount ──────────
let _audio: HTMLAudioElement | null = null;

function getAudio(): HTMLAudioElement | null {
  if (typeof window === 'undefined') return null;
  if (!_audio) {
    _audio = new Audio('/Video Project 5.m4a');
    _audio.loop = true;
    _audio.volume = 0.35;
  }
  return _audio;
}

// ── Component ─────────────────────────────────────────────────────────────────
const MusicPlayer: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(35);    // 0-100
  const [showVol, setShowVol] = useState(false);

  // Sync React state with actual audio events (source of truth = the element)
  useEffect(() => {
    const a = getAudio();
    if (!a) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    a.addEventListener('play', onPlay);
    a.addEventListener('pause', onPause);

    // Attempt autoplay
    a.play().catch(() => {/* blocked by browser — user clicks play */ });

    return () => {
      a.removeEventListener('play', onPlay);
      a.removeEventListener('pause', onPause);
    };
  }, []);

  // ── Play / Pause ────────────────────────────────────────────────────────────
  const togglePlay = () => {
    const a = getAudio();
    if (!a) return;
    if (a.paused) {
      a.play().catch(() => { });
    } else {
      a.pause();
    }
  };

  // ── Volume ──────────────────────────────────────────────────────────────────
  const adjustVolume = (delta: number) => {
    const a = getAudio();
    if (!a) return;
    const next = Math.min(100, Math.max(0, volume + delta));
    a.volume = next / 100;
    setVolume(next);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

      {/* ── Volume panel ── */}
      <AnimatePresence>
        {showVol && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center gap-2 px-3 py-3
                       bg-black/80 backdrop-blur-xl border border-white/10
                       rounded-2xl shadow-2xl"
          >
            {/* Vol up */}
            <button
              onClick={() => adjustVolume(10)}
              title="Volume up"
              className="w-9 h-9 flex items-center justify-center rounded-full
                         bg-white/10 hover:bg-white/25 text-white
                         transition-colors duration-200 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M15.536 8.464a5 5 0 010 7.072M12 6a7 7 0 010 12M5 9v6h4l5 5V4L9 9H5z" />
              </svg>
            </button>

            <span className="text-white/50 text-[10px] font-mono">{volume}%</span>

            {/* Vol down */}
            <button
              onClick={() => adjustVolume(-10)}
              title="Volume down"
              className="w-9 h-9 flex items-center justify-center rounded-full
                         bg-white/10 hover:bg-white/25 text-white
                         transition-colors duration-200 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M5 9v6h4l5 5V4L9 9H5zM18 9a3 3 0 010 6" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Main pill ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        /* IMPORTANT: relative + z-10 so the pill itself is always on top */
        className="relative z-10 flex items-center gap-2
                   bg-black/80 backdrop-blur-xl border border-white/10
                   rounded-2xl px-3 py-2.5 shadow-2xl"
      >
        {/* Decorative glow ring — pointer-events-none so it NEVER blocks buttons */}
        {playing && (
          <motion.div
            className="absolute -inset-1 rounded-2xl border border-white/20 pointer-events-none"
            animate={{ opacity: [0.25, 0.65, 0.25], scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}

        {/* Floating notes — pointer-events-none */}
        {playing && (
          <>
            <FloatingNote delay={0} x={6} />
            <FloatingNote delay={1.6} x={18} />
            <FloatingNote delay={3} x={12} />
          </>
        )}

        {/* Volume button */}
        <button
          onClick={() => setShowVol(v => !v)}
          title="Volume"
          className="relative z-10 w-9 h-9 flex items-center justify-center rounded-full
                     bg-white/10 hover:bg-white/25 text-white/70 hover:text-white
                     transition-all duration-200 cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
              d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07" />
          </svg>
        </button>

        <div className="w-px h-5 bg-white/10 pointer-events-none" />

        {/* Animated note indicator */}
        <motion.span
          animate={playing
            ? { rotate: [0, 10, -10, 0], scale: [1, 1.08, 0.95, 1] }
            : { rotate: 0, scale: 1 }
          }
          transition={playing
            ? { duration: 2.4, repeat: Infinity, ease: 'easeInOut' }
            : {}}
          className="text-white/45 text-base select-none pointer-events-none"
        >
          ♫
        </motion.span>

        <span className="text-white/55 text-xs font-medium hidden sm:block pointer-events-none">
          Background
        </span>

        <div className="w-px h-5 bg-white/10 pointer-events-none" />

        {/* ── Play / Pause ── the only interactive element that matters */}
        <button
          onClick={togglePlay}
          title={playing ? 'Pause music' : 'Play music'}
          className="relative z-10 w-9 h-9 flex items-center justify-center rounded-full
                     bg-white/15 hover:bg-white/30 text-white
                     transition-all duration-200 cursor-pointer"
        >
          {playing ? (
            /* Pause icon */
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            /* Play icon */
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </motion.div>
    </div>
  );
};

export default MusicPlayer;
