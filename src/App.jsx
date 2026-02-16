import { useEffect, useState } from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Authority from "./pages/Authority.jsx";
import LogoMark from "./components/LogoMark.jsx";
import CtaBlock from "./components/CtaBlock.jsx";

function Layout() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
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
      "services",
      "projects",
      "authority",
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
    const threshold = 120;
    const handleScroll = () => {
      setIsSticky(window.scrollY > threshold);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

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
        <header
          className={
            isSticky
              ? "sticky top-0 z-40 -mx-6 flex items-center justify-between border-b border-brand-light/10 bg-brand-dark/90 px-6 py-4 backdrop-blur sm:-mx-10 sm:px-10 lg:-mx-14 lg:px-14"
              : "flex items-center justify-between py-2"
          }
        >
          <a className="flex items-center text-brand-accent" href="#home" aria-label="Home">
            <LogoMark className="h-9 w-9 sm:h-10 sm:w-10" />
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
                activeSection === "projects"
                  ? "text-brand-accent"
                  : "text-brand-light/70 transition hover:text-brand-light"
              }
              href="#projects"
            >
              Case Studies
            </a>
            <a
              className={
                activeSection === "authority"
                  ? "text-brand-accent"
                  : "text-brand-light/70 transition hover:text-brand-light"
              }
              href="#authority"
            >
              Why Me
            </a>
            <a
              className={
                activeSection === "about"
                  ? "text-brand-accent"
                  : "text-brand-light/70 transition hover:text-brand-light"
              }
              href="#about"
            >
              How I Think
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
          <div className="flex items-center gap-3">
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
            <button
              className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-light/30 bg-brand-dark/70 text-brand-light shadow-[0_8px_16px_rgba(0,0,0,0.4)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(0,0,0,0.5)] md:hidden"
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </header>

        {isMobileMenuOpen && (
          <nav className="md:hidden">
            <div className="card-surface space-y-2 p-4 text-sm font-semibold text-brand-light">
              {[
                { id: "home", label: "Home" },
                { id: "services", label: "Services" },
                { id: "projects", label: "Case Studies" },
                { id: "authority", label: "Why Me" },
                { id: "about", label: "How I Think" },
                { id: "contact", label: "Contact" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={
                    activeSection === item.id
                      ? "block rounded-lg bg-brand-accent/20 px-3 py-2 text-brand-accent"
                      : "block rounded-lg px-3 py-2 text-brand-light/80 hover:text-brand-light"
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}

        <main className="flex flex-col gap-16">
          <Home />
          <CtaBlock
            eyebrow="Ready to build?"
            title="Let’s turn your product vision into a fast, premium React experience."
            description="I help teams ship conversion-focused frontends with clear timelines and measurable impact."
            primary={{ href: "#contact", label: "Start Your Project" }}
            secondary={{ href: "#projects", label: "View Case Studies" }}
          />
          <Services />
          <CtaBlock
            eyebrow="Looking for a senior React freelancer?"
            title="Get a high-performing frontend without hiring a full team."
            description="Architecture, UX, and performance optimization delivered with senior-level ownership."
            primary={{ href: "#contact", label: "Book a Free 30-min Consultation" }}
            secondary={{ href: "#services", label: "Explore Services" }}
          />
          <Projects />
          <Authority />
          <About />
          <Contact />
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

    </div>
  );
}

function App() {
  return <Layout />;
}

export default App;

