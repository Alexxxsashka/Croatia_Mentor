// src/demos/default.tsx
'use client';

import React from 'react';
import { ParallaxComponent } from '@/components/ui/parallax-scrolling';

export default function ParallaxDemo() {
  return (
    <>
      <ParallaxComponent />
      <div className="osmo-credits text-center py-8 text-sm text-gray-400 bg-[#101719]">
        <p className="osmo-credits__p">
          Resource by{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.osmo.supply/"
            className="osmo-credits__p-a text-[#d2aa73] hover:underline"
          >
            Osmo
          </a>
        </p>
      </div>
    </>
  );
}
