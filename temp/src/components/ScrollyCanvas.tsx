'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { MotionValue, motion, AnimatePresence } from 'framer-motion';

const TOTAL_FRAMES = 120;
const FRAME_W = 1920;
const FRAME_H = 1080;

interface ScrollyCanvasProps {
  scrollYProgress: MotionValue<number>;
}

const ScrollyCanvas: React.FC<ScrollyCanvasProps> = ({ scrollYProgress }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // ── Draw a single frame onto the canvas ─────────────────────────────────
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img?.complete || !img.naturalWidth) return;

    const W = canvas.width;
    const H = canvas.height;

    // object-fit: cover math
    const imgAspect = FRAME_W / FRAME_H;
    const viewAspect = W / H;
    let dw = W, dh = H, dx = 0, dy = 0;
    if (imgAspect > viewAspect) {
      dw = H * imgAspect;
      dx = (W - dw) / 2;
    } else {
      dh = W / imgAspect;
      dy = (H - dh) / 2;
    }

    ctx.fillStyle = '#121212';
    ctx.fillRect(0, 0, W, H);
    ctx.drawImage(img, dx, dy, dw, dh);
  }, []);

  // ── Preload all frames with progress tracking ────────────────────────────
  useEffect(() => {
    let loaded = 0;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    const promises = Array.from({ length: TOTAL_FRAMES }, (_, i) =>
      new Promise<void>((resolve) => {
        const img = new Image();
        img.src = `/sequence/frame_${String(i).padStart(3, '0')}_delay-0.066s.webp`;
        images[i] = img;
        img.onload = () => {
          loaded++;
          setLoadProgress(Math.round((loaded / TOTAL_FRAMES) * 100));
          resolve();
        };
        img.onerror = () => { loaded++; resolve(); };
      })
    );

    Promise.all(promises).then(() => {
      imagesRef.current = images;
      setIsLoaded(true);
      currentFrameRef.current = 0;
      // Small defer so canvas is sized before first draw
      requestAnimationFrame(() => drawFrame(0));
    });
  }, [drawFrame]);

  // ── Sync canvas pixel size with CSS size (only on resize) ───────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateSize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      drawFrame(currentFrameRef.current);
    };

    updateSize();
    const ro = new ResizeObserver(updateSize);
    ro.observe(canvas);
    return () => ro.disconnect();
  }, [drawFrame]);

  // ── Scroll-driven frame rendering ─────────────────────────────────────────
  useEffect(() => {
    if (!isLoaded) return;
    const unsubscribe = scrollYProgress.on('change', (progress) => {
      const frameIndex = Math.min(
        Math.max(Math.floor(progress * (TOTAL_FRAMES - 1)), 0),
        TOTAL_FRAMES - 1
      );
      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        drawFrame(frameIndex);
      }
    });
    return () => unsubscribe();
  }, [isLoaded, scrollYProgress, drawFrame]);

  return (
    <div className="absolute inset-0 bg-[#121212]">
      <canvas
        ref={canvasRef}
        className="h-full w-full block"
        style={{ imageRendering: 'auto' }}
      />

      {/* Loading overlay */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 z-30 bg-[#121212] flex flex-col items-center justify-center"
          >
            <div className="w-48 md:w-64">
              <div className="flex justify-between items-baseline mb-3">
                <span className="text-[10px] tracking-[0.25em] text-gray-600 uppercase">Loading</span>
                <span className="text-xs font-mono text-gray-400">{loadProgress}%</span>
              </div>
              <div className="h-px w-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-white transition-all duration-150 ease-out"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollyCanvas;
