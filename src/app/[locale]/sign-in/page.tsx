"use client";

import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import { Mail, Lock, Eye, EyeOff, GraduationCap, Loader2, Phone, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import {
  auth,
  googleProvider,
  facebookProvider,
  appleProvider,
  RecaptchaVerifier,
} from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithPhoneNumber,
  ConfirmationResult,
  User as FirebaseUser,
} from "firebase/auth";

export default function SignInPage() {
  const t = useTranslations("auth.signIn");
  const locale = useLocale();
  const router = useRouter();
  const { status } = useSession();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  // Phone Auth state
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otpCode, setOtpCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [phoneStep, setPhoneStep] = useState<"phone" | "otp">("phone");

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/dashboard");
    }
  }, [status, router]);

  if (status === "loading" || status === "authenticated") {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
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
          displayName: user.displayName,
          photoURL: user.photoURL,
          phoneNumber: user.phoneNumber,
          providerId: providerId || user.providerData?.[0]?.providerId || "firebase",
        }),
      });
    } catch (err) {
      console.error("Firebase sync error:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Try Firebase Auth first
      let fbSuccess = false;
      try {
        const userCredential = await signInWithEmailAndPassword(auth, form.email, form.password);
        await syncUserToDb(userCredential.user, "password");
        fbSuccess = true;
      } catch (fbErr) {
        console.log("Firebase direct sign-in skipped/failed, trying credentials auth...", fbErr);
      }

      // 2. NextAuth Sign In
      const result = await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
      });

      if (result?.error && !fbSuccess) {
        toast.error(t("error"));
        setLoading(false);
      } else {
        toast.success(
          locale === "ua" ? "Авторизація успішна!" : locale === "ru" ? "Авторизация успешна!" : "Welcome back!"
        );
        window.location.replace(`/${locale}/dashboard`);
      }
    } catch {
      toast.error("Something went wrong");
      setLoading(false);
    }
  };

  const handleSocialLogin = async (providerName: "google" | "facebook" | "apple") => {
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
            ? "Успішний вхід через Google!"
            : locale === "ru"
            ? "Успешный вход через Google!"
            : "Signed in with Google!"
        );

        window.location.replace(`/${locale}/dashboard`);
      }
    } catch (err: unknown) {
      const error = err as Error;
      console.error("Social login error:", error);
      toast.error(error.message || `Failed to sign in with ${providerName}`);
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
      toast.success("SMS code sent!");
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
      toast.success("Phone verified successfully!");
      setShowPhoneModal(false);
      router.push("/dashboard");
    } catch (err: unknown) {
      console.error("OTP verification error:", err);
      toast.error("Invalid verification code");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-12">
      <div id="recaptcha-container"></div>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-4 shadow-2xl shadow-blue-500/25">
            <GraduationCap className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold mb-2">{t("title")}</h1>
          <p className="text-muted-foreground">{t("subtitle")}</p>
        </div>

        <div className="glass rounded-2xl p-8 animate-slide-up space-y-6">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium">{t("email")}</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder:text-muted-foreground/50"
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
                  className="w-full pl-10 pr-12 py-3 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder:text-muted-foreground/50"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              <div className="flex items-center justify-end text-xs pt-1">
                <button
                  type="button"
                  onClick={async () => {
                    if (!form.email) {
                      toast.error("Введіть вашу пошту у поле вище для скидання пароля");
                      return;
                    }
                    try {
                      const res = await fetch("/api/auth/send-verification-email", { method: "POST" });
                      const data = await res.json();
                      if (res.ok && data.success) {
                        toast.success(data.message || "Посилання для відновлення пароля надіслано на вашу пошту!");
                      } else {
                        toast.error(data.error || "Не вдалося надіслати посилання для скидання пароля");
                      }
                    } catch (err: unknown) {
                      const error = err as Error;
                      toast.error(error.message || "Помилка відправки");
                    }
                  }}
                  className="text-blue-400 hover:text-blue-300 font-medium transition-colors cursor-pointer"
                >
                  Забули пароль?
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:opacity-90 transition-all shadow-lg shadow-blue-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
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
              onClick={() => handleSocialLogin("google")}
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
              Continue with Google
            </button>
          </div>

          <button
            type="button"
            onClick={() => setShowPhoneModal(true)}
            className="w-full py-2.5 rounded-xl text-xs font-semibold border border-white/10 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Sign in with Phone Number (SMS)
          </button>

          <p className="text-center text-sm text-muted-foreground mt-6">
            {t("noAccount")}{" "}
            <Link
              href="/sign-up"
              className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              {t("createAccount")}
            </Link>
          </p>
        </div>
      </div>

      {showPhoneModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass rounded-2xl p-6 max-w-sm w-full space-y-4 border border-white/10">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-400" />
                Phone Authentication
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
                  Enter your full phone number with country code (e.g. +380991234567).
                </p>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="+380991234567"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-blue-500"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-500/20 disabled:opacity-50"
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
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-center font-mono tracking-widest focus:outline-none focus:border-blue-500"
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
                    className="w-2/3 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md shadow-emerald-500/20 disabled:opacity-50 flex items-center justify-center gap-1.5"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    Verify Code
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
          <div className="w-12 h-12 rounded-full border-4 border-blue-500/30 border-t-blue-500 animate-spin" />
          <p className="text-sm font-semibold text-foreground animate-pulse">
            {locale === "ua"
              ? "Авторизація... Переходимо в особистий кабінет"
              : locale === "ru"
              ? "Авторизация... Переходим в личный кабинет"
              : "Signing in... Redirecting to dashboard"}
          </p>
        </div>
      )}
    </div>
  );
}
