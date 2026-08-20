"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "orange-white";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const urlParams = new URLSearchParams(window.location.search);
    const urlTheme = urlParams.get("theme");
    const normalizedUrlTheme: Theme | null = 
      urlTheme === "orange-white" || urlTheme === "light" ? "orange-white" :
      urlTheme === "dark" ? "dark" : null;

    const savedTheme = localStorage.getItem("croatia_mentor_theme") as Theme | null;
    const activeTheme = normalizedUrlTheme || (savedTheme === "dark" || savedTheme === "orange-white" ? savedTheme : "dark");

    if (normalizedUrlTheme) {
      localStorage.setItem("croatia_mentor_theme", normalizedUrlTheme);
    }

    setThemeState(activeTheme);
    applyTheme(activeTheme);
  }, []);


  const applyTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    root.setAttribute("data-theme", newTheme);
    if (newTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("croatia_mentor_theme", newTheme);
    applyTheme(newTheme);
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "orange-white" : "dark";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
