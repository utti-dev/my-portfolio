import { useEffect, useMemo, useState } from "react";
import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "../lib/firebase";

function OtpModal({ isOpen, onClose, onVerified, onToast }) {
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
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
      setStatus("");
      setError("");
      setLoading(false);
      setConsent(false);
    }
  }, [isOpen]);

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
      setStatus("Dev mode enabled. Click Unlock to proceed.");
      setStep("sent");
      if (onToast) {
        onToast("Dev mode enabled. You can unlock now.");
      }
      setLoading(false);
      return;
    }

    try {
      await sendSignInLinkToEmail(auth, email, {
        url: window.location.origin,
        handleCodeInApp: true,
      });
      window.localStorage.setItem("otpEmail", email);
      window.localStorage.setItem("otpConsent", "true");
      setStatus("Magic link sent. Check your email to continue.");
      if (onToast) {
        onToast("Magic link sent. Check your email.");
      }
      setStep("sent");
    } catch (err) {
      setError(err.message || "Failed to send link.");
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
                className="btn-primary rounded-xl px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
                type="button"
                onClick={sendLink}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Magic Link"}
              </button>
            ) : (
              <button
                className="btn-primary rounded-xl px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
                type="button"
                onClick={onClose}
              >
                Close
              </button>
            )}
            {step === "sent" && (
              <button
                className="btn-ghost rounded-xl px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
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

