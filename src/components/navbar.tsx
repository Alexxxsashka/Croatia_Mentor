"use client";

import { useTranslations, useLocale } from "next-intl";
import { useSession, signOut } from "next-auth/react";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./language-switcher";
import { NewsBell } from "./news-bell";
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
  User,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const PRESET_AVATARS = [
  { emoji: "🦊", color: "from-orange-400 to-red-500" },
  { emoji: "🐼", color: "from-slate-700 to-slate-900" },
  { emoji: "🐱", color: "from-yellow-400 to-orange-500" },
  { emoji: "🧙‍♂️", color: "from-indigo-500 to-purple-600" },
  { emoji: "🚀", color: "from-cyan-400 to-blue-500" },
  { emoji: "🌟", color: "from-yellow-300 to-amber-500" },
  { emoji: "🧑‍🎓", color: "from-blue-500 to-indigo-600" },
  { emoji: "🦉", color: "from-emerald-400 to-teal-600" },
];

function renderNavbarAvatar(avatarStr: string | null | undefined, nameInitials: string) {
  if (!avatarStr) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-md">
        {nameInitials}
      </div>
    );
  }

  const preset = PRESET_AVATARS.find((p) => p.emoji === avatarStr);
  if (preset) {
    return (
      <div className={`w-full h-full bg-gradient-to-br ${preset.color} flex items-center justify-center text-sm shadow-md`}>
        {preset.emoji}
      </div>
    );
  }

  return (
    <img
      src={avatarStr}
      alt="Avatar"
      className="w-full h-full object-cover"
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).src = `https://api.dicebear.com/7.x/bottts/svg?seed=${nameInitials}`;
      }}
    />
  );
}

export function Navbar() {
  const t = useTranslations("nav");
  const { data: session } = useSession();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
          <div className="flex items-center gap-2.5 shrink-0">
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

            {/* Notification Bell for News */}
            <NewsBell />

            <LanguageSwitcher />

            {session ? (
              <div className="relative" ref={dropdownRef}>
                {/* Profile Trigger Button */}
                <button
                  type="button"
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-2 p-1.5 pr-2.5 rounded-xl glass hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200 border border-black/5 dark:border-white/10"
                >
                  <div className="w-7 h-7 rounded-lg overflow-hidden flex items-center justify-center shadow-md">
                    {renderNavbarAvatar(session.user?.image, session.user?.name?.[0]?.toUpperCase() || "U")}
                  </div>
                  <span className="text-xs font-semibold hidden lg:block max-w-[120px] truncate text-foreground">
                    {session.user?.name}
                  </span>
                  <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                </button>

                {/* Profile Dropdown Menu */}
                {profileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-2xl glass border border-black/10 dark:border-white/10 shadow-2xl p-2 z-50 animate-scale-up space-y-1">
                    <div className="flex items-center gap-2.5 px-3 py-2.5 border-b border-black/5 dark:border-white/10 mb-1">
                      <div className="w-8 h-8 rounded-lg overflow-hidden flex items-center justify-center shrink-0">
                        {renderNavbarAvatar(session.user?.image, session.user?.name?.[0]?.toUpperCase() || "U")}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-bold text-foreground truncate">{session.user?.name}</p>
                        <p className="text-[10px] text-muted-foreground truncate">{session.user?.email}</p>
                      </div>
                    </div>

                    <Link
                      href="/profile"
                      onClick={() => setProfileDropdownOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5 transition-all"
                    >
                      <User className="w-4 h-4 text-blue-400" />
                      {locale === "ua" ? "Профіль учасника" : locale === "ru" ? "Профиль участника" : "My Profile"}
                    </Link>

                    {isAdmin && (
                      <Link
                        href="/admin"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-amber-400 hover:bg-amber-500/10 transition-all"
                      >
                        <ShieldAlert className="w-4 h-4 text-amber-400" />
                        Admin Panel
                      </Link>
                    )}

                    <div className="border-t border-black/5 dark:border-white/10 pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setProfileDropdownOpen(false);
                          signOut();
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-medium text-red-400 hover:bg-red-500/10 transition-all text-left"
                      >
                        <LogOut className="w-4 h-4" />
                        {t("signOut")}
                      </button>
                    </div>
                  </div>
                )}
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

            {session && (
              <>
                <Link
                  href="/profile"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-blue-400 hover:bg-blue-500/10 transition-all"
                >
                  <User className="w-4 h-4" />
                  {locale === "ua" ? "Профіль учасника" : locale === "ru" ? "Профиль участника" : "My Profile"}
                </Link>
                {isAdmin && (
                  <Link
                    href="/admin"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-amber-400 hover:bg-amber-500/10 transition-all"
                  >
                    <ShieldAlert className="w-4 h-4" />
                    Admin Panel
                  </Link>
                )}
              </>
            )}

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
