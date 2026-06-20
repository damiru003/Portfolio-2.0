'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ── Floating note that drifts upward ─────────────────────────────────────────
const FloatingNote: React.FC<{ delay: number; x: number }> = ({ delay, x }) => (
  <motion.div
    className="absolute pointer-events-none select-none text-white/30 text-xs"
    style={{ left: x, bottom: 44 }}
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: [0, 0.6, 0], y: [-10, -50] }}
    transition={{ duration: 4, delay, repeat: Infinity, repeatDelay: 3, ease: 'easeOut' }}
  >
    ♪
  </motion.div>
);

// ── Player ────────────────────────────────────────────────────────────────────
const MusicPlayer: React.FC = () => {
  const audioRef    = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume]   = useState(40);           // 0-100 integer
  const [showVol, setShowVol] = useState(false);

  // Create audio once on mount
  useEffect(() => {
    if (audioRef.current) return;                       // already created
    const a = new Audio('/Video Project 5.m4a');
    a.loop   = true;
    a.volume = 0.4;
    audioRef.current = a;

    // Attempt autoplay
    a.play()
      .then(() => setPlaying(true))
      .catch(() => { /* browser blocked — user will click play */ });
  }, []);

  // ── Toggle play / pause ───────────────────────────────────────────────────
  const handlePlayPause = () => {
    const a = audioRef.current;
    if (!a) return;

    if (a.paused) {
      // — Play
      a.play()
        .then(() => setPlaying(true))
        .catch(() => {});
    } else {
      // — Pause
      a.pause();
      setPlaying(false);
    }
  };

  // ── Volume change ─────────────────────────────────────────────────────────
  const handleVolume = (delta: number) => {
    const a = audioRef.current;
    if (!a) return;
    const next = Math.min(100, Math.max(0, volume + delta));
    a.volume = next / 100;
    setVolume(next);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

      {/* Volume panel */}
      <AnimatePresence>
        {showVol && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="flex flex-col items-center gap-2 bg-black/80 backdrop-blur-xl
                       border border-white/10 rounded-2xl px-3 py-3 shadow-2xl"
          >
            {/* Vol up */}
            <motion.button
              onClick={() => handleVolume(10)}
              whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
              title="Volume up"
              className="w-9 h-9 flex items-center justify-center rounded-full
                         bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M15.536 8.464a5 5 0 010 7.072M12 6a7 7 0 010 12M5 9v6h4l5 5V4L9 9H5z" />
              </svg>
            </motion.button>

            <span className="text-white/60 text-[10px] font-mono">{volume}%</span>

            {/* Vol down */}
            <motion.button
              onClick={() => handleVolume(-10)}
              whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
              title="Volume down"
              className="w-9 h-9 flex items-center justify-center rounded-full
                         bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M5 9v6h4l5 5V4L9 9H5zM18 9a3 3 0 010 6" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main pill */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="relative flex items-center gap-2 bg-black/80 backdrop-blur-xl
                   border border-white/10 rounded-2xl px-3 py-2.5 shadow-2xl"
      >
        {/* Slow glow ring when playing */}
        {playing && (
          <motion.div
            className="absolute -inset-1 rounded-2xl border border-white/20"
            animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}

        {/* Floating notes */}
        {playing && (
          <>
            <FloatingNote delay={0}   x={8} />
            <FloatingNote delay={1.8} x={20} />
            <FloatingNote delay={3.2} x={14} />
          </>
        )}

        {/* Volume toggle */}
        <motion.button
          onClick={() => setShowVol(v => !v)}
          whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.92 }}
          title="Volume"
          className="w-9 h-9 flex items-center justify-center rounded-full
                     bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
              d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07" />
          </svg>
        </motion.button>

        <div className="w-px h-5 bg-white/10" />

        {/* Animated note */}
        <motion.span
          animate={playing
            ? { rotate: [0, 12, -12, 0], scale: [1, 1.1, 0.95, 1] }
            : { rotate: 0, scale: 1 }
          }
          transition={playing ? { duration: 2.5, repeat: Infinity, ease: 'easeInOut' } : {}}
          className="text-white/50 text-base select-none"
        >
          ♫
        </motion.span>

        <span className="text-white/60 text-xs font-medium tracking-wide hidden sm:block">
          Background
        </span>

        <div className="w-px h-5 bg-white/10" />

        {/* Play / Pause button */}
        <motion.button
          onClick={handlePlayPause}
          whileHover={{ scale: 1.12 }} whileTap={{ scale: 0.92 }}
          title={playing ? 'Pause' : 'Play'}
          className="w-9 h-9 flex items-center justify-center rounded-full
                     bg-white/15 hover:bg-white/30 text-white transition-all"
        >
          {playing ? (
            /* ── Pause icon ── */
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <rect x="6"  y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </svg>
          ) : (
            /* ── Play icon ── */
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default MusicPlayer;
