"use client";

import { useState, useEffect } from "react";
import { OrangeWhiteHomePage } from "@/components/landing/OrangeWhiteHomePage";

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <OrangeWhiteHomePage scrollY={scrollY} />;
}
