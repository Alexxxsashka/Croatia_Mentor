"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Sparkles } from "lucide-react";

export function ThemeSwitcher({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 border shadow-sm ${
        theme === "orange-white"
          ? "bg-orange-50 text-orange-800 border-orange-200 hover:bg-orange-100"
          : "bg-slate-900/90 text-orange-400 border-slate-800 hover:bg-slate-800"
      } ${className}`}
      aria-label="Toggle theme"
      title="Switch Theme"
    >
      {theme === "orange-white" ? (
        <>
          <Sun className="w-3.5 h-3.5 text-orange-500" />
          <span className="hidden sm:inline">Light</span>
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5 text-orange-400" />
          <span className="hidden sm:inline">Dark</span>
        </>
      )}
    </button>


  );
}
