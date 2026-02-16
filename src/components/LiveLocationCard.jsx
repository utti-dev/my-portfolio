import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

const LOCATION_LABEL = "Hyderabad, India";
const STATUS_LABEL = "Open for Freelance React Projects";
const IST_LABEL = "IST (UTC+5:30)";

function LiveLocationCard() {
  const [timezone] = useState(
    () => Intl.DateTimeFormat().resolvedOptions().timeZone || "Local Time"
  );

  const formatter = useMemo(
    () =>
      new Intl.DateTimeFormat(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: timezone,
      }),
    [timezone]
  );

  const [localTime, setLocalTime] = useState(() => formatter.format(new Date()));

  useEffect(() => {
    // Update time every second without recreating the formatter.
    const tick = () => setLocalTime(formatter.format(new Date()));
    tick();
    const intervalId = window.setInterval(tick, 1000);
    return () => window.clearInterval(intervalId);
  }, [formatter]);

  return (
    <motion.section
      aria-label="Live location status"
      className="w-full max-w-md rounded-2xl border border-brand-light/20 bg-gradient-to-br from-brand-dark/90 via-brand-dark/70 to-brand-accent/10 p-5 text-sm text-brand-light/80 shadow-[0_18px_32px_rgba(0,0,0,0.45)] backdrop-blur-xl"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="space-y-3">
        <p className="flex items-center gap-2 font-semibold text-brand-light">
          <span
            aria-hidden="true"
            className="inline-flex h-2 w-2 rounded-full bg-brand-accent"
          />
          <span>{LOCATION_LABEL}</span>
          <span
            aria-hidden="true"
            className="inline-block h-4 w-2 rounded-sm bg-brand-light/80 align-middle animate-blink"
          />
        </p>

        <p className="flex items-center gap-2 text-brand-light/70">
          <span aria-hidden="true" className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-brand-accent/70 animate-pulse-soft" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-accent" />
          </span>
          <span>{STATUS_LABEL}</span>
        </p>

        <p className="flex items-center gap-2 text-brand-light/70">
          <span
            aria-hidden="true"
            className="inline-flex h-2.5 w-2.5 rounded-full border border-brand-accent"
          />
          <span>{IST_LABEL}</span>
        </p>

        <p className="flex items-center gap-2 text-brand-light/70">
          <span
            aria-hidden="true"
            className="inline-flex h-2.5 w-2.5 rounded-full bg-brand-light/50"
          />
          <span className="font-medium text-brand-light">
            Your Local Time:
          </span>
          <span className="font-semibold text-brand-light">{localTime}</span>
        </p>

        <p className="text-xs text-brand-light/60" aria-label="Detected timezone">
          Visitor timezone: {timezone}
        </p>
      </div>
    </motion.section>
  );
}

export default LiveLocationCard;

