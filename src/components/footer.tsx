"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { GraduationCap } from "lucide-react";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  return (
    <footer className="border-t border-white/5 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold gradient-text">
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
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold mb-4">{t("legal")}</h3>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                {t("privacy")}
              </span>
              <span className="text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
                {t("terms")}
              </span>
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
