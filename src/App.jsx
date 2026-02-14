import { useEffect, useState } from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";

function Layout() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", "projects", "experience", "skills", "about", "contact"];
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
            aria-label="Theme toggle"
          >
            <span className="h-4 w-4 rounded-full bg-brand-accent" />
          </button>
        </header>

        <main className="flex flex-col gap-16">
          <Home />
          <Projects />
          <Experience />
          <Skills />
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

