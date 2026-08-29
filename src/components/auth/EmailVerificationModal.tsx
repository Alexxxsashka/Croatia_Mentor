"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { CheckCircle2, AlertTriangle, Send, Loader2, X, MailCheck } from "lucide-react";
import { toast } from "sonner";
import { auth } from "@/lib/firebase";
import { sendEmailVerification } from "firebase/auth";

export function EmailVerificationModal() {
  const { data: session, status } = useSession();
  const [visible, setVisible] = useState(false);
  const [sending, setSending] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    let isMounted = true;
    if (status === "authenticated" && session?.user?.email && !dismissed) {
      fetch("/api/user/profile")
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (isMounted) {
            if (!data?.user?.emailVerified && !auth?.currentUser?.emailVerified) {
              setVisible(true);
            } else {
              setVisible(false);
            }
          }
        })
        .catch((err) => console.error("Error checking verification status:", err));
    }
    return () => {
      isMounted = false;
    };
  }, [status, session, dismissed]);

  if (!visible) return null;

  const handleSendVerification = async () => {
    setSending(true);
    try {
      if (auth?.currentUser) {
        await sendEmailVerification(auth.currentUser);
        toast.success(`Verification link sent to ${auth.currentUser.email}! Check your inbox.`);
      } else {
        toast.error("Please sign in or link your account to send verification email.");
      }
    } catch (err: unknown) {
      const error = err as Error;
      console.error("Send email verification error:", error);
      toast.error(error.message || "Failed to send verification email");
    } finally {
      setSending(false);
    }
  };

  const handleCheckStatus = async () => {
    setVerifying(true);
    try {
      if (auth?.currentUser) {
        await auth.currentUser.reload();
        if (auth.currentUser.emailVerified) {
          await fetch("/api/auth/verify-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: auth.currentUser.email }),
          });
          toast.success("Email verified successfully!");
          setVisible(false);
          return;
        }
      }
      toast.info("Email is not verified yet. Please check your inbox and click the verification link.");
    } catch (err: unknown) {
      const error = err as Error;
      console.error("Check verification status error:", error);
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-fade-in">
      <div className="glass rounded-3xl p-6 sm:p-7 border border-amber-500/40 shadow-2xl bg-slate-900/95 backdrop-blur-xl max-w-md w-full space-y-5 relative overflow-hidden animate-scale-up border-glow">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500" />
        
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-4 right-4 p-1.5 text-muted-foreground hover:text-foreground rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
          title="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-4 pr-6">
          <div className="p-3 rounded-2xl bg-amber-500/20 text-amber-400 shrink-0 mt-0.5 border border-amber-500/30">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-foreground flex items-center gap-2">
              Подтверждение почты
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Пожалуйста, подтвердите вашу электронную почту, чтобы обеспечить безопасность аккаунта и получить доступ ко всем функциям.
            </p>
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-2 text-xs text-amber-300">
          <MailCheck className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Письмо будет отправлено на ваш email: <strong>{session?.user?.email}</strong></span>
        </div>

        <div className="flex items-center gap-3 pt-1">
          <button
            onClick={handleSendVerification}
            disabled={sending}
            className="flex-1 py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:opacity-90 text-white transition-all shadow-lg shadow-orange-500/25 disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {sending ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            Отправить ссылку
          </button>

          <button
            onClick={handleCheckStatus}
            disabled={verifying}
            className="py-2.5 px-4 rounded-xl text-xs font-bold bg-white/5 hover:bg-white/10 border border-white/10 text-foreground transition-all flex items-center gap-2"
          >
            {verifying ? (
              <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            )}
            Я подтвердил
          </button>
        </div>
      </div>
    </div>
  );
}
