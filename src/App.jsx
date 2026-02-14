import { useEffect, useState } from "react";
import { isSignInWithEmailLink } from "firebase/auth";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Services from "./pages/Services.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import OtpModal from "./components/OtpModal.jsx";
import { auth } from "./lib/firebase";

function Layout() {
  const [activeSection, setActiveSection] = useState("home");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isOtpOpen, setIsOtpOpen] = useState(false);
  const [themeMode, setThemeMode] = useState(() => {
    if (typeof window === "undefined") {
      return "auto";
    }
    const stored = window.localStorage.getItem("portfolioTheme");
    if (stored === "light" || stored === "dark" || stored === "auto") {
      return stored;
    }
    return "auto";
  });
  const [autoTheme, setAutoTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "dark";
    }
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  const resolvedTheme = themeMode === "auto" ? autoTheme : themeMode;

  useEffect(() => {
    const sectionIds = [
      "home",
      "projects",
      "services",
      "testimonials",
      "experience",
      "skills",
      "about",
      "contact",
    ];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        threshold: [0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const stored = window.localStorage.getItem("portfolioUnlocked");
    if (stored === "true") {
      setIsUnlocked(true);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (isSignInWithEmailLink(auth, window.location.href)) {
      setIsOtpOpen(true);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("theme-light", resolvedTheme === "light");
    window.localStorage.setItem("portfolioTheme", themeMode);
  }, [resolvedTheme, themeMode]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }
    const media = window.matchMedia("(prefers-color-scheme: light)");
    const handleChange = (event) => {
      if (themeMode === "auto") {
        setAutoTheme(event.matches ? "light" : "dark");
      }
    };
    setAutoTheme(media.matches ? "light" : "dark");
    if (media.addEventListener) {
      media.addEventListener("change", handleChange);
    } else {
      media.addListener(handleChange);
    }
    return () => {
      if (media.removeEventListener) {
        media.removeEventListener("change", handleChange);
      } else {
        media.removeListener(handleChange);
      }
    };
  }, [themeMode]);

  useEffect(() => {
    if (typeof window === "undefined" || themeMode !== "auto") {
      return undefined;
    }
    if (!("AmbientLightSensor" in window)) {
      return undefined;
    }
    let sensor;
    try {
      sensor = new window.AmbientLightSensor();
    } catch (error) {
      return undefined;
    }
    const handleReading = () => {
      const lux = sensor.illuminance;
      if (typeof lux !== "number") {
        return;
      }
      setAutoTheme((prevTheme) => {
        if (lux < 50) {
          return "dark";
        }
        if (lux > 120) {
          return "light";
        }
        return prevTheme;
      });
    };
    const handleError = () => {};
    sensor.addEventListener("reading", handleReading);
    sensor.addEventListener("error", handleError);
    try {
      sensor.start();
    } catch (error) {
      sensor.removeEventListener("reading", handleReading);
      sensor.removeEventListener("error", handleError);
      return undefined;
    }
    return () => {
      sensor.removeEventListener("reading", handleReading);
      sensor.removeEventListener("error", handleError);
      sensor.stop();
    };
  }, [themeMode]);

  const handleUnlock = () => {
    setIsUnlocked(true);
    setIsOtpOpen(false);
    window.localStorage.setItem("portfolioUnlocked", "true");
  };

  const toggleTheme = () => {
    setThemeMode((prevMode) => {
      if (prevMode === "auto") {
        return "light";
      }
      if (prevMode === "light") {
        return "dark";
      }
      return "auto";
    });
  };

  return (
    <div className="min-h-screen bg-brand-dark text-brand-light">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 py-8 sm:px-10 lg:px-14">
        <header className="flex items-center justify-between">
          <a className="text-base font-semibold tracking-wide text-brand-light" href="#home">
            Utti Ramesh
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a
              className={
                activeSection === "home"
                  ? "text-brand-accent"
                  : "text-brand-light/70 transition hover:text-brand-light"
              }
              href="#home"
            >
              Home
            </a>
            <a
              className={
                activeSection === "projects"
                  ? "text-brand-accent"
                  : "text-brand-light/70 transition hover:text-brand-light"
              }
              href="#projects"
            >
              Projects
            </a>
            <a
              className={
                activeSection === "services"
                  ? "text-brand-accent"
                  : "text-brand-light/70 transition hover:text-brand-light"
              }
              href="#services"
            >
              Services
            </a>
            <a
              className={
                activeSection === "testimonials"
                  ? "text-brand-accent"
                  : "text-brand-light/70 transition hover:text-brand-light"
              }
              href="#testimonials"
            >
              Testimonials
            </a>
            <a
              className={
                activeSection === "experience"
                  ? "text-brand-accent"
                  : "text-brand-light/70 transition hover:text-brand-light"
              }
              href="#experience"
            >
              Experience
            </a>
            <a
              className={
                activeSection === "skills"
                  ? "text-brand-accent"
                  : "text-brand-light/70 transition hover:text-brand-light"
              }
              href="#skills"
            >
              Skills
            </a>
            <a
              className={
                activeSection === "about"
                  ? "text-brand-accent"
                  : "text-brand-light/70 transition hover:text-brand-light"
              }
              href="#about"
            >
              About
            </a>
            <a
              className={
                activeSection === "contact"
                  ? "text-brand-accent"
                  : "text-brand-light/70 transition hover:text-brand-light"
              }
              href="#contact"
            >
              Contact
            </a>
          </nav>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-light/30 bg-brand-dark/70 shadow-[0_8px_16px_rgba(0,0,0,0.4)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(0,0,0,0.5)]"
            type="button"
            onClick={toggleTheme}
            aria-label={`Theme mode: ${themeMode}. Click to switch`}
          >
            <span className="sr-only">
              Theme mode {themeMode}. Click to switch.
            </span>
            {resolvedTheme === "light" ? (
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 text-brand-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12.8A8.5 8.5 0 0 1 11.2 3a7 7 0 1 0 9.8 9.8Z" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 text-brand-accent"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            )}
          </button>
        </header>

        <main className="flex flex-col gap-16">
          <Home />
          <Projects />
          <Services />
          <Testimonials />

          <div className="relative">
            <div
              className={
                isUnlocked
                  ? "space-y-16"
                  : "space-y-16 opacity-40 blur-sm pointer-events-none"
              }
            >
              <Experience />
              <Skills />
              <About />
              <Contact />
            </div>

            {!isUnlocked && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-2xl border border-brand-light/10 bg-brand-dark/90 p-6 text-center shadow-[0_18px_36px_rgba(0,0,0,0.5)]">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-light/50">
                    Locked Content
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-brand-light">
                    Verify to unlock full portfolio
                  </h3>
                  <p className="mt-2 text-sm text-brand-light/70">
                    Enter your email to receive a magic link.
                  </p>
                  <button
                    className="mt-4 rounded-xl border border-brand-accent/70 bg-brand-accent/15 px-5 py-3 text-sm font-semibold text-brand-accent transition hover:bg-brand-accent/25"
                    type="button"
                    onClick={() => setIsOtpOpen(true)}
                  >
                    Unlock Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </main>

        <footer className="mt-12 border-t border-brand-light/10 pt-6 text-xs text-brand-light/60">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Utti Ramesh. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a className="text-brand-light/70 transition hover:text-brand-accent" href="#">
                GitHub
              </a>
              <a className="text-brand-light/70 transition hover:text-brand-accent" href="#">
                LinkedIn
              </a>
              <a className="text-brand-light/70 transition hover:text-brand-accent" href="mailto:uttiramesh53@gmail.com">
                Email
              </a>
            </div>
          </div>
        </footer>
      </div>

      <OtpModal
        isOpen={isOtpOpen}
        onClose={() => setIsOtpOpen(false)}
        onVerified={handleUnlock}
      />
    </div>
  );
}

function App() {
  return <Layout />;
}

export default App;

