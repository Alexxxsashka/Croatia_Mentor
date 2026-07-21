"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { Globe } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Flag } from "./flag";

const locales = [
  { code: "en" as const, label: "English", countryCode: "gb" },
  { code: "ru" as const, label: "Русский", countryCode: "ru" },
  { code: "ua" as const, label: "Українська", countryCode: "ua" },
];

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLocale = locales.find((l) => l.code === locale) || locales[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLocale = (newLocale: "en" | "ru" | "ua") => {
    router.replace(pathname, { locale: newLocale });
    setOpen(false);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl glass hover:bg-black/5 dark:hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all duration-200 shrink-0"
        aria-label="Switch language"
      >
        <Globe className="w-4 h-4 shrink-0" />
        <span className="flex items-center justify-center shrink-0">
          <Flag countryCode={currentLocale.countryCode} className="w-5 h-3.5 rounded-[2px] shadow-sm" />
        </span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl glass shadow-2xl border border-black/5 dark:border-white/10 overflow-hidden animate-fade-in z-50">
          {locales.map((loc) => (
            <button
              key={loc.code}
              onClick={() => switchLocale(loc.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                locale === loc.code
                  ? "bg-blue-500/10 text-blue-400 font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
              }`}
            >
              <span className="flex items-center shrink-0">
                <Flag countryCode={loc.countryCode} className="w-5 h-3.5 rounded-[2px] shadow-sm" />
              </span>
              <span>{loc.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
