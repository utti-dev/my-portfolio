import { useEffect, useMemo, useState } from "react";
import {
  isSignInWithEmailLink,
  sendSignInLinkToEmail,
  signInWithEmailLink,
} from "firebase/auth";
import {
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "../lib/firebase";

function OtpModal({ isOpen, onClose, onVerified }) {
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [consent, setConsent] = useState(false);

  const bypassEnabled = useMemo(
    () => import.meta.env.VITE_OTP_BYPASS === "true",
    []
  );
  const bypassCode = useMemo(
    () => import.meta.env.VITE_OTP_CODE || "123456",
    []
  );

  useEffect(() => {
    if (isOpen) {
      setStep("email");
      setEmail("");
      setCode("");
      setStatus("");
      setError("");
      setLoading(false);
      setConsent(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    if (isSignInWithEmailLink(auth, window.location.href)) {
      setStep("complete");
      const stored = window.localStorage.getItem("otpEmail");
      if (stored && !email) {
        setEmail(stored);
      }
    }
  }, [isOpen, email]);

  if (!isOpen) {
    return null;
  }

  const sendLink = async () => {
    setLoading(true);
    setError("");
    setStatus("");

    if (!email) {
      setError("Please enter your email.");
      setLoading(false);
      return;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    if (!consent) {
      setError("Please agree to share your email to continue.");
      setLoading(false);
      return;
    }

    if (bypassEnabled) {
      setStatus("Dev mode enabled. Use code " + bypassCode + ".");
      setStep("code");
      setLoading(false);
      return;
    }

    try {
      await sendSignInLinkToEmail(auth, email, {
        url: window.location.origin,
        handleCodeInApp: true,
      });
      window.localStorage.setItem("otpEmail", email);
      setStatus("Magic link sent. Check your email to continue.");
      setStep("complete");
    } catch (err) {
      setError(err.message || "Failed to send link.");
    } finally {
      setLoading(false);
    }
  };

  const completeSignIn = async () => {
    setLoading(true);
    setError("");
    setStatus("");

    if (bypassEnabled) {
      if (code === bypassCode) {
        onVerified();
      } else {
        setError("Invalid access code.");
      }
      setLoading(false);
      return;
    }

    if (!email) {
      setError("Please enter your email.");
      setLoading(false);
      return;
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!isValidEmail) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    if (!consent) {
      setError("Please agree to share your email to continue.");
      setLoading(false);
      return;
    }

    try {
      if (!isSignInWithEmailLink(auth, window.location.href)) {
        throw new Error("Open the magic link from your email to continue.");
      }
      const credential = await signInWithEmailLink(
        auth,
        email,
        window.location.href
      );
      const user = credential?.user;
      if (user) {
        const visitorRef = doc(db, "visitors", user.uid);
        const existing = await getDoc(visitorRef);
        if (existing.exists()) {
          await updateDoc(visitorRef, {
            lastSeen: serverTimestamp(),
            email: user.email || email,
          });
        } else {
          await setDoc(visitorRef, {
            email: user.email || email,
            createdAt: serverTimestamp(),
            lastSeen: serverTimestamp(),
            userAgent: navigator.userAgent,
          });
        }
      }
      window.localStorage.removeItem("otpEmail");
      if (window.location.search) {
        window.history.replaceState({}, document.title, window.location.pathname);
      }
      onVerified();
    } catch (err) {
      setError(err.message || "Failed to verify link.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-brand-dark/80 p-6"
      role="dialog"
      aria-modal="true"
      aria-label="OTP verification"
    >
      <div className="w-full max-w-md rounded-2xl border border-brand-light/10 bg-brand-dark/90 p-6 text-brand-light shadow-[0_20px_40px_rgba(0,0,0,0.55)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-light/50">
              Verify Access
            </p>
            <h3 className="mt-2 text-xl font-semibold text-brand-light">
              Unlock Full Portfolio
            </h3>
            <p className="mt-2 text-sm text-brand-light/70">
              Enter your email to receive a magic link.
            </p>
          </div>
          <button
            className="text-brand-light/60 transition hover:text-brand-accent"
            type="button"
            onClick={onClose}
            aria-label="Close OTP dialog"
          >
            ✕
          </button>
        </div>

        <div className="mt-6 space-y-4">
          <label className="space-y-2 text-sm font-medium text-brand-light/70">
            Email address
            <input
              className="w-full rounded-xl border border-brand-light/20 bg-brand-dark/70 px-4 py-3 text-sm text-brand-light outline-none transition placeholder:text-brand-light/40 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
              placeholder="you@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value.trim())}
            />
          </label>

          {step === "code" && (
            <label className="space-y-2 text-sm font-medium text-brand-light/70">
              Access code
              <input
                className="w-full rounded-xl border border-brand-light/20 bg-brand-dark/70 px-4 py-3 text-sm text-brand-light outline-none transition placeholder:text-brand-light/40 focus:border-brand-accent focus:ring-2 focus:ring-brand-accent/30"
                placeholder="Enter code"
                value={code}
                onChange={(event) => setCode(event.target.value)}
              />
            </label>
          )}

          {status && <p className="text-xs text-brand-accent">{status}</p>}
          {error && <p className="text-xs text-brand-accent">{error}</p>}

          <label className="flex items-start gap-3 text-xs text-brand-light/70">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 rounded border-brand-light/30 bg-brand-dark/70 accent-brand-accent"
              checked={consent}
              onChange={(event) => setConsent(event.target.checked)}
            />
            <span>I agree to share my email for access tracking.</span>
          </label>

          <div className="flex flex-wrap gap-3">
            {step === "email" ? (
              <button
                className="rounded-xl border border-brand-accent/70 bg-brand-accent/15 px-5 py-3 text-sm font-semibold text-brand-accent transition hover:bg-brand-accent/25"
                type="button"
                onClick={sendLink}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Magic Link"}
              </button>
            ) : (
              <button
                className="rounded-xl border border-brand-accent/70 bg-brand-accent/15 px-5 py-3 text-sm font-semibold text-brand-accent transition hover:bg-brand-accent/25"
                type="button"
                onClick={completeSignIn}
                disabled={loading}
              >
                {loading ? "Verifying..." : "Complete Sign-in"}
              </button>
            )}
            {step !== "email" && (
              <button
                className="rounded-xl border border-brand-light/20 px-5 py-3 text-sm font-semibold text-brand-light/70 transition hover:text-brand-light"
                type="button"
                onClick={() => setStep("email")}
                disabled={loading}
              >
                Change email
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OtpModal;

