import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";

function Layout() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-light px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto flex min-h-full w-full max-w-6xl flex-col gap-16 rounded-[32px] bg-brand-light px-6 py-8 text-brand-dark shadow-[0_28px_60px_rgba(38,35,65,0.45)] sm:px-10 lg:px-14">
        <header className="flex items-center justify-between">
          <NavLink className="text-base font-semibold tracking-wide" to="/">
            LucaDCZ.
          </NavLink>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-brand-accent"
                  : "text-brand-dark/70 transition hover:text-brand-dark"
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-brand-accent"
                  : "text-brand-dark/70 transition hover:text-brand-dark"
              }
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-brand-accent"
                  : "text-brand-dark/70 transition hover:text-brand-dark"
              }
              to="/experience"
            >
              Experience
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-brand-accent"
                  : "text-brand-dark/70 transition hover:text-brand-dark"
              }
              to="/skills"
            >
              Skills
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-brand-accent"
                  : "text-brand-dark/70 transition hover:text-brand-dark"
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-brand-accent"
                  : "text-brand-dark/70 transition hover:text-brand-dark"
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </nav>
          <button
            className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-dark/15 bg-brand-light shadow-[0_8px_16px_rgba(38,35,65,0.12)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(38,35,65,0.18)]"
            type="button"
            aria-label="Theme toggle"
          >
            <span className="h-4 w-4 rounded-full bg-brand-dark" />
          </button>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;

