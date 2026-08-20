"use client";

import React, { useState, useEffect } from "react";
import { OrangeWhiteHomePage } from "@/components/landing/OrangeWhiteHomePage";
import { useTheme } from "@/components/theme/ThemeProvider";

export default function V2Page() {
  const [scrollY, setScrollY] = useState(0);
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme("orange-white");
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setTheme]);

  return <OrangeWhiteHomePage scrollY={scrollY} />;
}
