"use client";

import { useTranslations, useLocale } from "next-intl";
import { useSession, signOut } from "next-auth/react";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./language-switcher";
import {
  BookOpen,
  Gamepad2,
  MessageCircle,
  LayoutDashboard,
  Menu,
  X,
  LogOut,
  GraduationCap,
  Languages,
  Sun,
  Moon,
  ShieldAlert,
} from "lucide-react";
import { useState, useEffect } from "react";

export function Navbar() {
  const t = useTranslations("nav");
  const { data: session } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as "dark" | "light") || "dark";
    if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    setTimeout(() => {
      setTheme(savedTheme);
    }, 0);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  const locale = useLocale();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const user = session?.user as any;
  const isAdmin = user?.role === "admin";

  const navLinks = session
    ? [
        {
          href: "/dashboard",
          label: t("dashboard"),
          icon: LayoutDashboard,
        },
        { href: "/lessons", label: t("lessons"), icon: BookOpen },
        { href: "/vocabulary", label: t("vocabulary"), icon: Languages },
        { href: "/glossary", label: t("glossary"), icon: GraduationCap },
        { href: "/games", label: t("games"), icon: Gamepad2 },
        { href: "/ai-chat", label: t("aiChat"), icon: MessageCircle, disabled: true },
        ...(isAdmin ? [{ href: "/admin", label: "Admin", icon: ShieldAlert }] : []),
      ]
    : [];

  return (
    <nav className="sticky top-0 z-50 glass border-b border-black/5 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:block">
              Croatia Mentor
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.disabled) {
                return (
                  <span
                    key={link.href}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground/40 cursor-not-allowed bg-transparent"
                    title={locale === "ua" ? "Тимчасово недоступно" : locale === "ru" ? "Временно недоступно" : "Temporarily unavailable"}
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </span>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-200"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl glass hover:bg-black/5 dark:hover:bg-white/10 text-muted-foreground hover:text-foreground transition-all duration-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4.5 h-4.5 text-yellow-500" />
              ) : (
                <Moon className="w-4.5 h-4.5 text-indigo-600" />
              )}
            </button>

            <LanguageSwitcher />

            {session ? (
              <div className="hidden md:flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm font-semibold">
                    {session.user?.name?.[0]?.toUpperCase() || "U"}
                  </div>
                  <span className="text-sm font-medium hidden lg:block">
                    {session.user?.name}
                  </span>
                </div>
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm text-muted-foreground hover:text-red-400 hover:bg-red-500/10 transition-all duration-200"
                >
                  <LogOut className="w-4 h-4" />
                  <span className="hidden lg:inline">{t("signOut")}</span>
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-2">
                <Link
                  href="/sign-in"
                  className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t("signIn")}
                </Link>
                <Link
                  href="/sign-up"
                  className="px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25"
                >
                  {t("signUp")}
                </Link>
              </div>
            )}

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              {mobileOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden pb-4 pt-2 border-t border-black/5 dark:border-white/5 animate-fade-in">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => {
              if (link.disabled) {
                return (
                  <span
                    key={link.href}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground/40 cursor-not-allowed"
                    title={locale === "ua" ? "Тимчасово недоступно" : locale === "ru" ? "Временно недоступно" : "Temporarily unavailable"}
                  >
                    <link.icon className="w-4 h-4" />
                    {link.label}
                  </span>
                );
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                >
                  <link.icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
            {session ? (
              <button
                onClick={() => {
                  signOut();
                  setMobileOpen(false);
                }}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-all"
              >
                <LogOut className="w-4 h-4" />
                {t("signOut")}
              </button>
            ) : (
              <>
                <Link
                  href="/sign-in"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                >
                  {t("signIn")}
                </Link>
                <Link
                  href="/sign-up"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center"
                >
                  {t("signUp")}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
