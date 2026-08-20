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
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase transition-all duration-300 border shadow-md ${
        theme === "orange-white"
          ? "bg-orange-50 text-orange-700 border-orange-300 hover:bg-orange-100"
          : "bg-slate-900/90 text-orange-400 border-orange-500/40 hover:bg-slate-800"
      } ${className}`}
      title={
        theme === "orange-white"
          ? "Переключить на тёмную тему Orange Dark Edition"
          : "Переключить на светлую тему Orange Light Edition"
      }
    >
      {theme === "orange-white" ? (
        <>
          <Sun className="w-3.5 h-3.5 text-orange-500 animate-spin-slow" />
          <span>Orange Light</span>
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5 text-orange-400" />
          <span>Orange Dark</span>
        </>
      )}
    </button>

  );
}
