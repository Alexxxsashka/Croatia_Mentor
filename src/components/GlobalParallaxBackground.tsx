"use client";

import { useState, useEffect } from "react";

const DUST_PARTICLES = Array.from({ length: 35 }).map((_, i) => ({
  id: i,
  top: `${(i * 13) % 100}%`,
  left: `${(i * 27) % 100}%`,
  size: `${(i % 3) + 2}px`,
  delay: `${(i * 0.3).toFixed(1)}s`,
  duration: `${((i % 4) * 2 + 7).toFixed(1)}s`,
}));

export function GlobalParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Set initial position
    setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-10] overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500">
      {/* Parallax Background Image Layer */}
      <div
        className="absolute inset-[-10%] bg-cover bg-center pointer-events-none transition-transform duration-100 ease-out opacity-20 dark:opacity-100"
        style={{
          backgroundImage: "url('/global-bg.jpg')",
          transform: `translateY(${Math.max(-140, Math.min(140, -scrollY * 0.08))}px) scale(1.15)`,
        }}
      />

      {/* Theme specific overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-50/60 via-white/80 to-amber-50/40 dark:from-slate-950/80 dark:via-slate-950/70 dark:to-slate-950 backdrop-blur-[1px]" />

      {/* Bottom gradient fade for smooth transition */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-slate-950 dark:via-slate-950/80 dark:to-transparent" />

      {/* Floating Dust Particles */}
      <div
        className="dust-container pointer-events-none"
        style={{ transform: `translateY(${scrollY * -0.1}px)`, zIndex: -1 }}
      >
        {DUST_PARTICLES.map((p) => (
          <div
            key={p.id}
            className="dust-particle opacity-30 dark:opacity-50"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>
    </div>
  );

}
