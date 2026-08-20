"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { GraduationCap } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="border-t border-black/5 dark:border-white/5 bg-slate-900/5 dark:bg-black/20 pb-safe transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl overflow-hidden shadow-md shadow-purple-500/20 border border-purple-500/30">
                <img
                  src="/logos/logo-variant-1.jpg"
                  alt="Croatia Mentor Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg font-extrabold uppercase font-editorial tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-500 bg-clip-text text-transparent">
                Croatia Mentor
              </span>

            </div>

            <p className="text-sm text-muted-foreground max-w-xs">
              {t("description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold mb-4">{t("links")}</h3>
            <div className="flex flex-col gap-2">
              <Link
                href="/dashboard"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {nav("dashboard")}
              </Link>
              <Link
                href="/lessons"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {nav("lessons")}
              </Link>
              <Link
                href="/games"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {nav("games")}
              </Link>
              <Link
                href="/ai-chat"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {nav("aiChat")}
              </Link>
              <Link
                href="/learn-croatian"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium text-emerald-400"
              >
                Learn Croatian Online
              </Link>
              <Link
                href="/contacts"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium text-blue-400 dark:text-blue-400"
              >
                {nav("contacts")}
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold mb-4">{t("legal")}</h3>
            <div className="flex flex-col gap-2">
              <a
                href="/privacy_policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("privacy")}
              </a>
              <a
                href="/terms_of_service.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {t("terms")}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-muted-foreground">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
