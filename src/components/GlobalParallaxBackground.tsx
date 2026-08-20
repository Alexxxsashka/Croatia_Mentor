"use client";

import { useState, useEffect } from "react";

// Generate 50 floating dust particles with varying colors, sizes, delays
const DUST_PARTICLES = Array.from({ length: 50 }).map((_, i) => ({
  id: i,
  top: `${(i * 17) % 100}%`,
  left: `${(i * 23) % 100}%`,
  size: `${(i % 3) + 2}px`,
  delay: `${(i * 0.2).toFixed(1)}s`,
  duration: `${((i % 5) * 2 + 6).toFixed(1)}s`,
  color:
    i % 3 === 0
      ? "bg-amber-400 shadow-[0_0_10px_rgba(255,184,0,0.9)]"
      : i % 3 === 1
      ? "bg-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.9)]"
      : "bg-orange-400 shadow-[0_0_10px_rgba(255,107,0,0.9)]",
}));

// Generate 30 glowing twinkling stars
const STAR_PARTICLES = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  top: `${(i * 29) % 95}%`,
  left: `${(i * 31) % 95}%`,
  size: `${(i % 2) * 3 + 3}px`,
  delay: `${(i * 0.35).toFixed(1)}s`,
  duration: `${((i % 3) * 1.5 + 2.5).toFixed(1)}s`,
  color: i % 2 === 0 ? "text-amber-300" : "text-purple-300",
}));

export function GlobalParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-10] overflow-hidden bg-slate-950">
      
      {/* LAYER 1: Deep Croatian Parallax Photography Background */}
      <div
        className="absolute inset-[-15%] bg-cover bg-center pointer-events-none transition-transform duration-75 ease-out opacity-90 dark:opacity-80"
        style={{
          backgroundImage: "url('/croatia-hero.jpg')",
          transform: `translateY(${scrollY * -0.22}px) scale(1.18)`,
        }}
      />

      {/* LAYER 2: Semi-Transparent Ambient Overlay Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-100/70 via-amber-50/50 to-slate-100/75 dark:from-slate-950/75 dark:via-slate-950/65 dark:to-slate-950/85 backdrop-blur-[1px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-500/15 via-orange-500/10 to-transparent pointer-events-none" />

      {/* LAYER 3: Dedicated Animated Parallax Floating Dust Layer */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${scrollY * -0.38}px)`,
        }}
      >
        {DUST_PARTICLES.map((p) => (
          <div
            key={`dust-${p.id}`}
            className={`absolute rounded-full animate-dust-float ${p.color}`}
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

      {/* LAYER 4: Dedicated Animated Twinkling Glowing Stars Layer */}
      <div
        className="absolute inset-0 pointer-events-none transition-transform duration-100 ease-out"
        style={{
          transform: `translateY(${scrollY * -0.52}px)`,
        }}
      >
        {STAR_PARTICLES.map((s) => (
          <div
            key={`star-${s.id}`}
            className={`absolute animate-twinkle ${s.color}`}
            style={{
              top: s.top,
              left: s.left,
              animationDelay: s.delay,
              animationDuration: s.duration,
            }}
          >
            <svg
              width={s.size}
              height={s.size}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>
        ))}
      </div>

      {/* Bottom Gradient Transition to Smoothly Fade Page Footer */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-slate-100 via-slate-100/70 to-transparent dark:from-slate-950 dark:via-slate-950/70 to-transparent" />
    </div>
  );
}
