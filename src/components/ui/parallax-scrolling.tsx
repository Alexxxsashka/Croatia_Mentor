'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

export interface ParallaxLayer {
  layer: string | number;
  yPercent?: number;
  y?: number | string;
  scale?: number;
  opacity?: number;
}

export interface ParallaxComponentProps {
  layers?: ParallaxLayer[];
  backdropSrc?: string;
  midgroundSrc?: string;
  foregroundSrc?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  enableLenis?: boolean;
}

export function ParallaxComponent({
  layers = [
    { layer: '1', yPercent: 70 },
    { layer: '2', yPercent: 55 },
    { layer: '3', yPercent: 40 },
    { layer: '4', yPercent: 0 } // Static foreground plate
  ],
  backdropSrc = 'https://cdn.21st.dev/assets/mirror/a4/a43f4eae3459c461345ee676f12d6e1ddca65e8a5279a5af00d475b17ff83aea.webp',
  midgroundSrc = 'https://cdn.21st.dev/assets/mirror/50/50ca6a0d36d2780bfcb469d6db7eaec0be7e0d2961ba69a63d2a1473b040338d.webp',
  foregroundSrc = 'https://cdn.21st.dev/assets/mirror/e1/e1c8137b5f971c3b3ec1a0f9e79b9c17018767005f844a10082b890472afecfb.webp',
  title = 'Parallax',
  className = '',
  enableLenis = true
}: ParallaxComponentProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    const triggerElement = parallaxRef.current?.querySelector('[data-parallax-layers]') as HTMLElement | null;
    let lenis: Lenis | null = null;
    let tickerCallback: ((time: number) => void) | null = null;

    if (triggerElement) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          start: '0% 0%',
          end: '100% 0%',
          scrub: 0
        }
      });

      layers.forEach((layerObj, idx) => {
        const targetElements = triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`);
        if (targetElements.length > 0) {
          tl.to(
            targetElements,
            {
              yPercent: layerObj.yPercent ?? 0,
              ease: 'none'
            },
            idx === 0 ? undefined : '<'
          );
        }
      });
    }

    if (enableLenis) {
      lenis = new Lenis({
        smoothWheel: true,
        duration: 1.2
      });
      lenis.on('scroll', ScrollTrigger.update);

      tickerCallback = (time: number) => {
        lenis?.raf(time * 1000);
      };
      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      if (triggerElement) gsap.killTweensOf(triggerElement);
      if (tickerCallback) gsap.ticker.remove(tickerCallback);
      lenis?.destroy();
    };
  }, [layers, enableLenis]);

  return (
    <div className={`parallax relative w-full overflow-hidden ${className}`} ref={parallaxRef}>
      <section className="parallax__header relative w-full h-[100vh] min-h-[600px] overflow-hidden">
        <div className="parallax__visuals absolute inset-0 w-full h-full">
          <div className="parallax__black-line-overflow absolute inset-0 pointer-events-none" />
          <div data-parallax-layers className="parallax__layers relative w-full h-full">
            {/* Layer 1: Sky / Deep Backdrop */}
            <img
              src={backdropSrc}
              loading="eager"
              width="1920"
              height="1080"
              data-parallax-layer="1"
              alt="Backdrop layer"
              className="parallax__layer-img absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            {/* Layer 2: Midground Mountain / Scenery */}
            <img
              src={midgroundSrc}
              loading="eager"
              width="1920"
              height="1080"
              data-parallax-layer="2"
              alt="Midground layer"
              className="parallax__layer-img absolute inset-0 w-full h-full object-cover pointer-events-none"
            />
            {/* Layer 3: Title / Floating Text */}
            <div
              data-parallax-layer="3"
              className="parallax__layer-title absolute inset-0 flex items-center justify-center pointer-events-none z-10"
            >
              <h2 className="parallax__title text-5xl md:text-8xl font-bold tracking-tight text-white drop-shadow-lg">
                {title}
              </h2>
            </div>
            {/* Layer 4: Static Foreground Plate */}
            <img
              src={foregroundSrc}
              loading="eager"
              width="1920"
              height="1080"
              data-parallax-layer="4"
              alt="Foreground plate layer"
              className="parallax__layer-img absolute inset-0 w-full h-full object-cover pointer-events-none z-20"
            />
          </div>
          <div className="parallax__fade absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#101719] to-transparent pointer-events-none z-30" />
        </div>
      </section>
      <section className="parallax__content relative min-h-[60vh] flex items-center justify-center p-8 bg-[#101719] text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          viewBox="0 0 160 160"
          fill="none"
          className="osmo-icon-svg max-w-[120px] text-[#d2aa73]"
        >
          <path
            d="M94.8284 53.8578C92.3086 56.3776 88 54.593 88 51.0294V0H72V59.9999C72 66.6273 66.6274 71.9999 60 71.9999H0V87.9999H51.0294C54.5931 87.9999 56.3777 92.3085 53.8579 94.8283L18.3431 130.343L29.6569 141.657L65.1717 106.142C67.684 103.63 71.9745 105.396 72 108.939V160L88.0001 160L88 99.9999C88 93.3725 93.3726 87.9999 100 87.9999H160V71.9999H108.939C105.407 71.9745 103.64 67.7091 106.12 65.1938L106.142 65.1716L141.657 29.6568L130.343 18.3432L94.8284 53.8578Z"
            fill="currentColor"
          />
        </svg>
      </section>
    </div>
  );
}

export default ParallaxComponent;
