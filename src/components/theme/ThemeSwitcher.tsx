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
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border shadow-sm ${
        theme === "orange-white"
          ? "bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100"
          : "bg-slate-900/90 text-amber-400 border-slate-700/80 hover:bg-slate-800"
      } ${className}`}
      title={
        theme === "orange-white"
          ? "Переключить на тёмную тему (Dark Editorial)"
          : "Переключить на светлую тему (Vibrant Orange & White)"
      }
    >
      {theme === "orange-white" ? (
        <>
          <Sun className="w-3.5 h-3.5 text-amber-600 animate-spin-slow" />
          <span>Orange / White</span>
        </>
      ) : (
        <>
          <Moon className="w-3.5 h-3.5 text-amber-400" />
          <span>Dark Editorial</span>
        </>
      )}
    </button>
  );
}
