"use client";

import {useEffect} from 'react';
import {usePathname} from '@/i18n/navigation';
import './depth-effects.css';

/** Scroll-only depth: no render loop at rest and no motion when reduced motion is requested. */
export function DepthEffects({landing}: {landing:boolean}) {
  const pathname = usePathname();
  useEffect(() => {
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const root = document.querySelector('.reference-design');
    if (!root) return;
    let frame = 0;
    const active = new Set<HTMLElement>();
    const tracked = new Set<HTMLElement>();
    const render = () => {
      frame = 0;
      if (document.hidden) return;
      for (const el of active) {
        const rect = el.getBoundingClientRect();
        const progress = Math.max(-1, Math.min(1, (innerHeight / 2 - rect.top - rect.height / 2) / innerHeight));
        el.style.setProperty('--depth-y', preference.matches ? '0px' : `${progress * (el.dataset.depthScene ? 70 : 14)}px`);
      }
      const backdrop = root.querySelector<HTMLElement>('.interior-landscape');
      backdrop?.style.setProperty('--depth-y', preference.matches ? '0px' : `${Math.min(scrollY * .035, 45)}px`);
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(render); };
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) active.add(entry.target as HTMLElement);
        else active.delete(entry.target as HTMLElement);
      }
      schedule();
    }, {rootMargin: '80px'});
    const discover = () => {
      root.querySelectorAll<HTMLElement>('[data-depth-block], [data-depth-scene], .app-main h1, .app-main .glass, .app-main .glass-card, .game-card, .practice-feature').forEach(el => {
        // A transformed ancestor must never capture a fixed dialog or overlay.
        if (el.matches('.fixed, [role="dialog"]') || el.querySelector('.fixed, [role="dialog"]') || el.closest('.lesson-archipelago')) {
          el.classList.remove('depth-block');
          el.style.removeProperty('--depth-y');
          active.delete(el);
          observer.unobserve(el);
          tracked.delete(el);
          return;
        }
        if (el.parentElement?.closest('.depth-block')) return;
        if (tracked.has(el)) return;
        tracked.add(el);
        if (!el.hasAttribute('data-depth-scene')) el.classList.add('depth-block');
        observer.observe(el);
      });
      schedule();
    };
    const mutations = new MutationObserver(discover);
    mutations.observe(root, {subtree: true, childList: true});
    discover();
    addEventListener('scroll', schedule, {passive:true});
    addEventListener('resize', schedule, {passive:true});
    preference.addEventListener('change', schedule);
    document.addEventListener('visibilitychange', schedule);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect(); mutations.disconnect();
      removeEventListener('scroll', schedule); removeEventListener('resize', schedule);
      preference.removeEventListener('change', schedule);
      document.removeEventListener('visibilitychange', schedule);
      tracked.forEach(el => {el.style.removeProperty('--depth-y'); el.classList.remove('depth-block');});
    };
  }, [pathname]);
  return landing ? null : <div className="interior-landscape" aria-hidden="true" />;
}
