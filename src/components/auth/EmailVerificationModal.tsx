"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { CheckCircle2, AlertTriangle, Send, Loader2, X } from "lucide-react";
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
            if (!data?.user?.emailVerified && !auth.currentUser?.emailVerified) {
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
      if (auth.currentUser) {
        await sendEmailVerification(auth.currentUser);
        toast.success(`Verification link sent to ${auth.currentUser.email}! Check your inbox.`);
      } else {
        toast.error("Please sign in or re-authenticate to send verification email.");
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
      if (auth.currentUser) {
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
      toast.info("Email is not verified yet. Please check your inbox and click the link.");
    } catch (err: unknown) {
      const error = err as Error;
      console.error("Check verification status error:", error);
    } finally {
      setVerifying(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md w-full animate-slide-up px-4 sm:px-0">
      <div className="glass rounded-2xl p-5 border border-amber-500/30 shadow-2xl bg-slate-900/90 backdrop-blur-md space-y-3 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500" />
        
        <button
          onClick={() => setDismissed(true)}
          className="absolute top-3 right-3 p-1 text-muted-foreground hover:text-foreground rounded-lg transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-start gap-3 pr-6">
          <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-foreground flex items-center gap-1.5">
              Verify Your Email Address
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Please verify your email address to secure your account and access all features.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={handleSendVerification}
            disabled={sending}
            className="flex-1 py-2 px-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-amber-500 to-orange-600 hover:opacity-90 text-white transition-all shadow-md shadow-amber-500/20 disabled:opacity-50 flex items-center justify-center gap-1.5"
          >
            {sending ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
            ) : (
              <Send className="w-3.5 h-3.5" />
            )}
            Send Link
          </button>

          <button
            onClick={handleCheckStatus}
            disabled={verifying}
            className="py-2 px-3 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 border border-white/10 text-foreground transition-all flex items-center gap-1.5"
          >
            {verifying ? (
              <Loader2 className="w-3.5 h-3.5 animate-spin text-blue-400" />
            ) : (
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            )}
            I Verified
          </button>
        </div>
      </div>
    </div>
  );
}
