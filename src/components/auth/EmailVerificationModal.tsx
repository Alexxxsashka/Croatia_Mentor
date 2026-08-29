"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { CheckCircle2, AlertTriangle, Send, Loader2, X, MailCheck, Clock } from "lucide-react";
import { toast } from "sonner";

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
            if (!data?.user?.emailVerified) {
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
      const res = await fetch("/api/auth/send-verification-email", {
        method: "POST",
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast.success(data.message || `Ссылка для подтверждения отправлена на ${session?.user?.email}!`);
      } else {
        toast.error(data.error || "Не удалось отправить письмо с подтверждением");
      }
    } catch (err: unknown) {
      const error = err as Error;
      console.error("Send email verification error:", error);
      toast.error(error.message || "Ошибка отправки письма");
    } finally {
      setSending(false);
    }
  };

  const handleCheckStatus = async () => {
    setVerifying(true);
    try {
      const res = await fetch("/api/auth/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: session?.user?.email }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast.success("Почта успешно подтверждена!");
        setVisible(false);
        window.location.reload();
        return;
      }
      toast.error(data.error || "Не удалось подтвердить статус почты");
    } catch (err: unknown) {
      const error = err as Error;
      console.error("Check verification status error:", error);
      toast.error(error.message || "Ошибка при проверке статуса");
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
          title="Закрыть"
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
              Пожалуйста, подтвердите ваш email для обеспечения безопасности аккаунта и доступа ко всем функциям.
            </p>
          </div>
        </div>

        <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center gap-2 text-xs text-amber-300">
          <MailCheck className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Письмо будет отправлено на: <strong>{session?.user?.email}</strong></span>
        </div>

        <div className="flex flex-col gap-2 pt-1">
          <div className="flex items-center gap-2">
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
              className="py-2.5 px-4 rounded-xl text-xs font-bold bg-emerald-500 hover:bg-emerald-600 text-slate-950 transition-all flex items-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              {verifying ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <CheckCircle2 className="w-4 h-4" />
              )}
              Я подтвердил
            </button>
          </div>

          <button
            onClick={() => setDismissed(true)}
            className="w-full py-2 px-3 rounded-xl text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all flex items-center justify-center gap-1.5"
          >
            <Clock className="w-3.5 h-3.5" />
            Сделать позже
          </button>
        </div>
      </div>
    </div>
  );
}
