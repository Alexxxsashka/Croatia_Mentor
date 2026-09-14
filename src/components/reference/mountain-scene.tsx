"use client";

import { useEffect, useRef } from 'react';
import './mountain-scene.css';

export function MountainScene() {
  const scene = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scene.current;
    const hero = el?.closest<HTMLElement>('.hero');
    if (!el || !hero) return;

    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    let frame = 0;
    let position = 0;

    const render = () => {
      frame = 0;
      if (preference.matches || !visible || document.hidden) return;

      const bounds = hero.getBoundingClientRect();
      const target = Math.max(0, Math.min(-bounds.top, bounds.height));
      position += (target - position) * 0.12;
      const progress = position / Math.max(bounds.height, 1);

      el.style.setProperty('--far-y', `${position * 0.25}px`);
      el.style.setProperty('--far-scale', String(1.025 + progress * 0.055));
      el.style.setProperty('--haze-y', `${position * 0.1}px`);
      el.style.setProperty('--near-y', `${-position * 0.12}px`);
      el.style.setProperty('--near-scale', String(1.015 + progress * 0.11));
      hero.style.setProperty('--hero-copy-y', `${-position * 0.045}px`);

      if (Math.abs(target - position) > 0.15) {
        frame = requestAnimationFrame(render);
      }
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    const sync = () => {
      if (preference.matches || !visible || document.hidden) return;
      schedule();
    };

    const onPreference = () => {
      if (preference.matches) {
        el.removeAttribute('style');
        hero.style.removeProperty('--hero-copy-y');
        position = 0;
      }
      sync();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        sync();
      },
      { threshold: 0 }
    );
    observer.observe(hero);

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    document.addEventListener('visibilitychange', sync);
    preference.addEventListener('change', onPreference);

    // Initial render trigger
    schedule();

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      document.removeEventListener('visibilitychange', sync);
      preference.removeEventListener('change', onPreference);
      hero.style.removeProperty('--hero-copy-y');
    };
  }, []);

  return (
    <div className="mountain-scene" ref={scene} aria-hidden="true">
      <div className="mountain-backdrop" data-depth="far">
        <img
          src="/assets/croatian-road.png"
          alt="Croatian Coastal Mountain Road"
          className="mountain-backdrop-img"
          loading="eager"
        />
      </div>
      <div className="mountain-atmosphere" data-depth="atmosphere" />
      <div className="mountain-foreground" data-depth="near" />
    </div>
  );
}
