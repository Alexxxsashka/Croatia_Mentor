"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import './mountain-scene.css';

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export function MountainScene() {
  const scene = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const el = scene.current;
    const hero = el?.closest<HTMLElement>('.hero');
    if (!el || !hero) return;

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Initialize Lenis for smooth scrolling if not already initialized
    let lenis = window.__lenis;
    let tickerCb: ((time: number) => void) | null = null;
    let isLocalLenis = false;

    if (!lenis && !preference.matches) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
        touchMultiplier: 1.5,
      });
      window.__lenis = lenis;
      isLocalLenis = true;

      lenis.on('scroll', ScrollTrigger.update);

      tickerCb = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.ticker.add(tickerCb);
      gsap.ticker.lagSmoothing(0);
    }

    // GSAP ScrollTrigger timeline for multi-layer parallax:
    // - Layer 1 (Backdrop road image): scrolls downward at moderate speed + subtle scale
    // - Layer 2 (Atmosphere haze): gentle drift
    // - Layer 3 (Hero copy): subtle lift
    // - Layer 4 (Foreground plate): stays static (0 movement)
    let timeline: gsap.core.Timeline | null = null;

    if (!preference.matches) {
      const backdrop = el.querySelector('[data-parallax-layer="1"]');
      const atmosphere = el.querySelector('[data-parallax-layer="2"]');
      const foreground = el.querySelector('[data-parallax-layer="4"]');
      const heroContent = hero.querySelector('.hero-content');

      timeline = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.1,
          invalidateOnRefresh: true,
        },
      });

      if (backdrop) {
        timeline.to(
          backdrop,
          {
            yPercent: 35,
            scale: 1.06,
            ease: 'none',
          },
          0
        );
      }

      if (atmosphere) {
        timeline.to(
          atmosphere,
          {
            yPercent: 20,
            opacity: 0.4,
            ease: 'none',
          },
          0
        );
      }

      if (heroContent) {
        timeline.to(
          heroContent,
          {
            yPercent: -15,
            opacity: 0.35,
            ease: 'none',
          },
          0
        );
      }

      // Foreground plate is explicitly static (0 movement)
      if (foreground) {
        timeline.to(
          foreground,
          {
            yPercent: 0,
            ease: 'none',
          },
          0
        );
      }
    }

    return () => {
      timeline?.kill();
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars.trigger === hero) st.kill();
      });

      if (isLocalLenis && lenis) {
        if (tickerCb) gsap.ticker.remove(tickerCb);
        lenis.destroy();
        delete window.__lenis;
      }
    };
  }, []);

  return (
    <div className="mountain-scene" ref={scene} aria-hidden="true" data-parallax-layers>
      {/* Layer 1: Backdrop with high-resolution mountain road image */}
      <div className="mountain-backdrop" data-depth="far" data-parallax-layer="1">
        <img
          src="/assets/croatian-road.png"
          alt="Croatian Mountain Road"
          className="mountain-backdrop-img"
          loading="eager"
        />
      </div>

      {/* Layer 2: Atmospheric mist and golden morning glow */}
      <div className="mountain-atmosphere" data-depth="atmosphere" data-parallax-layer="2" />

      {/* Layer 4: Static foreground rocks and botanical silhouette plate */}
      <div className="mountain-foreground static-plate" data-depth="near" data-parallax-layer="4" />
    </div>
  );
}
