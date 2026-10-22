import React, { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaArrowUp,
  FaArrowRight,
  FaBolt,
  FaPhoneAlt,
  FaCode,
  FaSun,
  FaMoon,
  FaBars,
  FaTimes
} from "react-icons/fa";
import profileImg from "./assets/profile.webp";
import { projects } from "./data/projects";

const ContactForm = lazy(() => import("./components/ContactForm"));

const CALENDLY_URL = "https://calendly.com/parthiban-evaao/30min";
const LINKEDIN_URL = "https://www.linkedin.com/in/paarthibanselvaraj/";
const GITHUB_URL = "https://github.com/paaricit";
const EMAIL = "paaricit77@gmail.com";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" }
];

const tools = [
  "MCP", "Claude", "OpenAI", "n8n", "Vapi", "Exotel", "Sarvam",
  "ElevenLabs", "FastAPI", "Node.js", "TypeScript", "React",
  "Flutter", "ARKit", "AWS"
];

const services = [
  {
    icon: <FaBolt />,
    title: "AI agents & automation",
    body:
      "Claude-powered agents and MCP servers connected to your CRM, inbox, docs and internal tools — from a single n8n workflow to a full multi-agent system.",
    result: "Hours of manual work removed each week."
  },
  {
    icon: <FaPhoneAlt />,
    title: "Voice AI agents",
    body:
      "Phone agents on Vapi, Exotel or Sarvam that answer calls, qualify leads, and write bookings straight into your calendar and CRM — in English and Indian languages.",
    result: "No missed calls. Bookings made around the clock."
  },
  {
    icon: <FaCode />,
    title: "Full-stack & mobile products",
    body:
      "React and FastAPI web platforms, Flutter apps on both stores, and AR experiences with ARKit — architected, built and shipped end to end.",
    result: "An MVP live in weeks, not months."
  }
];

const processSteps = [
  {
    title: "Discovery call (free, 30 min)",
    body: "We map the workflow, the tools involved, and what success looks like."
  },
  {
    title: "Fixed scope & quote",
    body: "You get clear milestones, a timeline and a price before any work starts."
  },
  {
    title: "Build in the open",
    body: "You see working demos every few days — no big reveal at the end."
  },
  {
    title: "Launch & hand-off",
    body: "Deployed and documented, with support included after launch."
  }
];

const timeline = [
  "CIT Coimbatore (B.E. CSE, 2017)",
  "Aveon InfoTech",
  "Freelance & eStreamly",
  "Evaao",
  "Senraa Labs"
];

const proofChips = [
  "9 years shipping software",
  "Apps live on Google Play & App Store",
  "Led a team of 5",
  "Remote-first, Bangalore (IST)"
];

function useTheme() {
  const [isDark, setIsDark] = useState(() =>
    typeof document !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : true
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return [isDark, () => setIsDark((v) => !v)];
}

function Nav({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/60 dark:border-white/5"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#home"
          className="font-semibold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight"
          aria-label="Home"
        >
          parthiban<span className="text-orange-500">.</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors shadow-sm"
          >
            Schedule a call <FaArrowRight className="text-xs" />
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-700 dark:text-slate-300"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
          >
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md text-slate-700 dark:text-slate-300"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 dark:border-white/5 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-slate-800 dark:text-slate-200 font-medium"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 mt-2 px-4 py-3 rounded-full bg-orange-500 text-white font-semibold"
              >
                Schedule a call <FaArrowRight className="text-xs" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-3 order-2 lg:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.05]"
          >
            I build <span className="text-orange-500">AI agents</span> that do real work.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
          >
            AI systems engineer and full-stack architect with 9 years of shipping production software.
            I design MCP servers, Claude-powered agents, n8n automations and voice AI — and connect them
            to the web and mobile apps your team already uses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              See my work <FaArrowRight className="text-xs" />
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white font-semibold text-sm hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-colors"
            >
              Schedule a call
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {proofChips.map((c) => (
              <li
                key={c}
                className="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
              >
                {c}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full blur-2xl opacity-20 dark:opacity-30" />
            <img
              src={profileImg}
              alt="Parthiban Selvaraj"
              width={640}
              height={640}
              className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white dark:border-slate-800 shadow-2xl"
              loading="eager"
              decoding="async"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ToolsStrip() {
  return (
    <section aria-label="Tools" className="py-8 border-y border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4 text-center">
          Tools I ship with
        </p>
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {tools.map((t) => (
            <li
              key={t}
              className="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-300"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, intro }) {
  return (
    <div className="max-w-3xl mb-10 sm:mb-14">
      {eyebrow && (
        <p className="text-xs uppercase tracking-widest text-orange-600 dark:text-orange-400 font-semibold mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          {intro}
        </p>
      )}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Services"
          title="Three ways I help teams ship AI."
        />
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 sm:p-7 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-orange-400 dark:hover:border-orange-400/60 transition-colors shadow-sm hover:shadow-md"
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-500/10 text-orange-600 dark:text-orange-400 text-lg">
                {s.icon}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-slate-600 dark:text-slate-300 leading-relaxed text-[15px]">
                {s.body}
              </p>
              <p className="mt-4 pt-4 border-t border-slate-100 dark:border-white/10 text-sm text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-200">Typical result:</span>{" "}
                {s.result}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <section id="work" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-16 bg-slate-50 dark:bg-white/[0.015]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Selected work"
          title="Products I've shipped."
          intro="Click a project to see the stack and outcome."
        />

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">
          <ul className="lg:col-span-2 divide-y divide-slate-200 dark:divide-white/10 border-y border-slate-200 dark:border-white/10">
            {projects.map((p, i) => (
              <li key={p.title}>
                <button
                  onClick={() => setActive(i)}
                  className={`group w-full text-left py-5 flex items-center justify-between gap-4 transition-colors ${
                    active === i
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                  aria-pressed={active === i}
                >
                  <span className="flex items-baseline gap-3 min-w-0">
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500 tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-xl sm:text-2xl font-semibold truncate">{p.title}</span>
                  </span>
                  <FaArrowRight
                    className={`shrink-0 transition-transform ${
                      active === i
                        ? "text-orange-500 translate-x-0"
                        : "opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-sm"
              >
                <div className="aspect-[16/10] bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <p className="text-lg text-slate-900 dark:text-white font-medium">
                    {project.oneLiner}
                  </p>
                  <p className="mt-3 text-[15px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <span
                        key={s}
                        className="px-2.5 py-1 text-xs rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 pt-5 border-t border-slate-100 dark:border-white/10 text-sm text-slate-600 dark:text-slate-400">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Result:</span>{" "}
                    {project.result}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 font-semibold text-sm hover:gap-3 transition-all"
                    >
                      Visit project <FaArrowRight className="text-xs" />
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Process"
          title="How we work together."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {processSteps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10"
            >
              <span className="text-3xl font-bold text-orange-500/80 font-mono">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-16 bg-slate-50 dark:bg-white/[0.015]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-10 items-start">
        <div className="lg:col-span-3">
          <SectionHeader eyebrow="About" title="Nine years, shipped." />
          <blockquote className="text-lg sm:text-xl text-slate-700 dark:text-slate-200 leading-relaxed border-l-4 border-orange-500 pl-5">
            I'm Parthiban, an engineer from Bangalore who's spent 9 years turning ideas into shipped
            products. I started in front-end, led teams building SaaS for US clients, and now focus on
            AI agents and automation as Principal AI Solutions Engineer at Evaao and Lead Architect at
            Senraa Labs. I like work where AI saves people real time — not demos that stay demos.
          </blockquote>
        </div>
        <div className="lg:col-span-2">
          <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400 font-semibold mb-4">
            Timeline
          </p>
          <ol className="space-y-4 relative border-l-2 border-slate-200 dark:border-white/10 pl-5">
            {timeline.map((t, i) => (
              <li key={t} className="relative">
                <span className="absolute -left-[26px] top-1.5 w-3 h-3 rounded-full bg-orange-500 border-2 border-white dark:border-slate-900" />
                <p className="text-slate-800 dark:text-slate-200 font-medium">{t}</p>
                {i === timeline.length - 1 && (
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-0.5">Now</p>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Have a workflow that should run itself?"
            intro="Tell me what you're building. I reply within 24 hours."
          />
          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              <FaEnvelope /> Email
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors"
            >
              <FaPhoneAlt /> Schedule a call
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-slate-300 dark:border-white/15 text-slate-800 dark:text-slate-200 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-slate-300 dark:border-white/15 text-slate-800 dark:text-slate-200 text-sm font-semibold hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            >
              <FaGithub /> GitHub
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
            Based in Bangalore (IST) · Working remote worldwide
          </p>
        </div>
        <div className="rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 p-6 sm:p-8">
          <Suspense fallback={<div className="h-64 flex items-center justify-center text-slate-500">Loading form…</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
        <p>© {new Date().getFullYear()} Parthiban Selvaraj · Bangalore, India · Remote worldwide</p>
        <div className="flex items-center gap-4">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-slate-900 dark:hover:text-white transition-colors"><FaGithub /></a>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-slate-900 dark:hover:text-white transition-colors"><FaLinkedin /></a>
          <a href={`mailto:${EMAIL}`} aria-label="Email" className="hover:text-slate-900 dark:hover:text-white transition-colors"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
}

function ScrollTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.button
      initial={false}
      animate={{ opacity: show ? 1 : 0, scale: show ? 1 : 0.5 }}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 p-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg z-40"
      aria-label="Scroll to top"
      tabIndex={show ? 0 : -1}
    >
      <FaArrowUp />
    </motion.button>
  );
}

export default function App() {
  const [isDark, toggleTheme] = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased">
      <Nav isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <ToolsStrip />
        <Services />
        <Work />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
