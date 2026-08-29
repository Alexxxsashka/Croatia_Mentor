"use client";

import { useState, useEffect, useRef } from "react";
import { signIn, useSession } from "next-auth/react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import { Flag } from "@/components/flag";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Languages,
  GraduationCap,
  Loader2,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { toast } from "sonner";
import {
  auth,
  googleProvider,
  facebookProvider,
  appleProvider,
  RecaptchaVerifier,
} from "@/lib/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
  signInWithPhoneNumber,
  ConfirmationResult,
  User as FirebaseUser,
} from "firebase/auth";

export default function SignUpPage() {
  const t = useTranslations("auth.signUp");
  const locale = useLocale();
  const router = useRouter();
  const { status } = useSession();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    nativeLanguage: "en",
  });

  // Phone Auth state
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [phoneStep, setPhoneStep] = useState<"phone" | "otp">("phone");

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [status, router]);

  if (status === "loading" || status === "authenticated") {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-purple-500" />
      </div>
    );
  }

  const syncUserToDb = async (user: FirebaseUser, providerId?: string) => {
    try {
      await fetch("/api/auth/firebase-sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid: user.uid,
          email: user.email,
          displayName: form.name || user.displayName,
          photoURL: user.photoURL,
          phoneNumber: user.phoneNumber,
          providerId: providerId || "firebase",
        }),
      });
    } catch (err) {
      console.error("Firebase sync error:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      toast.error(t("passwordMismatch"));
      return;
    }

    setLoading(true);

    try {
      // 1. Register with Firebase Auth
      let fbUser: FirebaseUser | undefined;
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          form.email,
          form.password
        );
        fbUser = userCredential.user;
        if (form.name) {
          await updateProfile(fbUser, { displayName: form.name });
        }
        await syncUserToDb(fbUser, "password");
      } catch (fbErr: unknown) {
        const error = fbErr as Error;
        console.log("Firebase registration notice:", error.message);
      }

      // 2. Register with App backend API
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
          nativeLanguage: form.nativeLanguage,
        }),
      });

      if (res.ok || fbUser) {
        toast.success(t("success"));
        router.push("/sign-in");
      } else {
        const data = await res.json();
        toast.error(data.error || "Registration failed");
      }
    } catch {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignUp = async (providerName: "google" | "facebook" | "apple") => {
    setLoading(true);
    try {
      if (providerName === "google") {
        const result = await signInWithPopup(auth, googleProvider);
        await syncUserToDb(result.user, "google");

        const targetEmail = result.user.email;
        if (targetEmail) {
          await signIn("credentials", {
            email: targetEmail,
            isSocial: "true",
            redirect: false,
          });
        }

        toast.success(
          locale === "ua"
            ? "Успішна реєстрація через Google!"
            : locale === "ru"
            ? "Успешная регистрация через Google!"
            : "Registered with Google!"
        );

        window.location.replace(`/${locale}/dashboard`);
      }
    } catch (err: unknown) {
      const error = err as Error;
      console.error("Social sign-up error:", error);
      toast.error(error.message || `Failed to sign up with ${providerName}`);
      setLoading(false);
    }
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) {
      toast.error("Please enter phone number");
      return;
    }
    setLoading(true);
    try {
      const win = window as unknown as { recaptchaVerifier?: RecaptchaVerifier };
      if (!win.recaptchaVerifier) {
        win.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
          size: "invisible",
        });
      }
      const appVerifier = win.recaptchaVerifier;
      const confirmation = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(confirmation);
      setPhoneStep("otp");
      toast.success("SMS verification code sent!");
    } catch (err: unknown) {
      const error = err as Error;
      console.error("Phone auth error:", error);
      toast.error(error.message || "Failed to send SMS code");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpCode || !confirmationResult) return;
    setLoading(true);
    try {
      const res = await confirmationResult.confirm(otpCode);
      await syncUserToDb(res.user, "phone");
      toast.success("Phone registered successfully!");
      setShowPhoneModal(false);
      router.push("/dashboard");
    } catch (err: unknown) {
      console.error("OTP verification error:", err);
      toast.error("Invalid verification code");
    } finally {
      setLoading(false);
    }
  };

  const languages = [
    { code: "en", label: "English", countryCode: "gb" },
    { code: "ru", label: "Русский", countryCode: "ru" },
    { code: "ua", label: "Українська", countryCode: "ua" },
  ];

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-12">
      <div id="recaptcha-container"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 mb-4 shadow-2xl shadow-purple-500/25">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">{t("title")}</h1>
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="glass rounded-2xl p-8 animate-slide-up space-y-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">{t("name")}</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder:text-muted-foreground/50"
                  placeholder="Ivan Horvat"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">{t("email")}</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder:text-muted-foreground/50"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">{t("password")}</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  className="w-full pl-10 pr-12 py-3 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder:text-muted-foreground/50"
                  placeholder="••••••••"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">{t("confirmPassword")}</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="password"
                  value={form.confirmPassword}
                  onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder:text-muted-foreground/50"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">{t("nativeLanguage")}</label>
              <div className="relative" ref={langDropdownRef}>
                <Languages className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground z-10" />
                <button
                  type="button"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all flex items-center justify-between text-left cursor-pointer text-foreground"
                >
                  <div className="flex items-center gap-2">
                    <Flag
                      countryCode={
                        languages.find((l) => l.code === form.nativeLanguage)?.countryCode || "gb"
                      }
                      className="w-5 h-3.5 rounded-[2px] shadow-sm shrink-0"
                    />
                    <span>
                      {languages.find((l) => l.code === form.nativeLanguage)?.label || "English"}
                    </span>
                  </div>
                  <svg
                    className={`w-4 h-4 text-muted-foreground transition-transform duration-200 ${
                      langDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {langDropdownOpen && (
                  <div className="absolute left-0 right-0 mt-1 rounded-xl glass shadow-2xl border border-black/5 dark:border-white/10 overflow-hidden animate-fade-in z-50">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        type="button"
                        onClick={() => {
                          setForm({ ...form, nativeLanguage: lang.code });
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left transition-colors ${
                          form.nativeLanguage === lang.code
                            ? "bg-purple-500/10 text-purple-400 font-semibold"
                            : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                        }`}
                      >
                        <Flag
                          countryCode={lang.countryCode}
                          className="w-5 h-3.5 rounded-[2px] shadow-sm shrink-0"
                        />
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:opacity-90 transition-all shadow-lg shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {loading ? "..." : t("button")}
            </button>
          </form>

          <div className="relative flex items-center justify-center my-4">
            <div className="border-t border-white/10 w-full" />
            <span className="bg-slate-900 px-3 text-xs text-muted-foreground uppercase tracking-wider relative">
              OR
            </span>
          </div>

          <div className="w-full">
            <button
              type="button"
              onClick={() => handleSocialSignUp("google")}
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-semibold transition-all shadow-md"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.25 21.32 7.33 24 12 24z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                />
                <path
                  fill="#EA4335"
                  d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.25 2.68 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                />
              </svg>
              Sign up with Google
            </button>
          </div>

          <button
            type="button"
            onClick={() => setShowPhoneModal(true)}
            className="w-full py-2.5 rounded-xl text-xs font-semibold border border-white/10 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Register with Phone Number (SMS)
          </button>

          <p className="text-center text-sm text-muted-foreground mt-6">
            {t("hasAccount")}{" "}
            <Link
              href="/sign-in"
              className="text-purple-400 hover:text-purple-300 font-medium transition-colors"
            >
              {t("signIn")}
            </Link>
          </p>
        </div>
      </div>

      {showPhoneModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass rounded-2xl p-6 max-w-sm w-full space-y-4 border border-white/10">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Phone className="w-5 h-5 text-purple-400" />
                Phone Registration
              </h3>
              <button
                onClick={() => setShowPhoneModal(false)}
                className="text-xs text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </div>

            {phoneStep === "phone" ? (
              <form onSubmit={handleSendOtp} className="space-y-4">
                <p className="text-xs text-muted-foreground">
                  Enter your mobile phone number with country code (+380...).
                </p>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+380991234567"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-purple-500"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-md shadow-purple-500/20 disabled:opacity-50"
                >
                  {loading ? "Sending SMS..." : "Send Verification Code"}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">
                <p className="text-xs text-muted-foreground">
                  Enter the 6-digit code sent to {phoneNumber}.
                </p>
                <input
                  type="text"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                  placeholder="123456"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-center font-mono tracking-widest focus:outline-none focus:border-purple-500"
                  required
                />
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPhoneStep("phone")}
                    className="w-1/3 py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-2/3 py-2.5 rounded-xl text-xs font-bold bg-pink-600 hover:bg-pink-500 text-white transition-all shadow-md shadow-pink-500/20 disabled:opacity-50 flex items-center justify-center gap-1.5"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    Verify & Create
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Full Page Auth Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center gap-4 animate-in fade-in duration-200">
          <div className="w-12 h-12 rounded-full border-4 border-purple-500/30 border-t-purple-500 animate-spin" />
          <p className="text-sm font-semibold text-foreground animate-pulse">
            {locale === "ua"
              ? "Реєстрація... Переходимо в особистий кабінет"
              : locale === "ru"
              ? "Регистрация... Переходим в личный кабинет"
              : "Creating account... Redirecting to dashboard"}
          </p>
        </div>
      )}
    </div>
  );
}
