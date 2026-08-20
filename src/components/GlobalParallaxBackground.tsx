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
    <div className="fixed inset-0 pointer-events-none z-[-10] overflow-hidden bg-slate-950">
      {/* Parallax Background Image Layer */}
      <div
        className="absolute inset-[-10%] bg-cover bg-center pointer-events-none transition-transform duration-100 ease-out opacity-85"
        style={{
          backgroundImage: "url('/croatia-hero.jpg')",
          transform: `translateY(${Math.max(-140, Math.min(140, -scrollY * 0.08))}px) scale(1.15)`,
        }}
      />

      {/* Dramatic Overlay with Warm Accent Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100/75 via-amber-50/65 to-slate-100/80 dark:from-slate-950/80 dark:via-slate-950/75 dark:to-slate-950/90 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/15 via-transparent to-transparent pointer-events-none" />

      {/* Bottom gradient fade for smooth transition */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-slate-100 via-slate-100/80 to-transparent dark:from-slate-950 dark:via-slate-950/80 dark:to-transparent" />


      {/* Floating Glowing Dust Particles */}
      <div
        className="dust-container pointer-events-none"
        style={{ transform: `translateY(${scrollY * -0.1}px)`, zIndex: -1 }}
      >
        {DUST_PARTICLES.map((p) => (
          <div
            key={p.id}
            className="dust-particle opacity-60 bg-amber-400 shadow-[0_0_8px_rgba(255,165,0,0.8)]"
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
