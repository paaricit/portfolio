import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaEnvelope,
  FaArrowUp,
  FaReact,
  FaNodeJs,
  FaAws,
  FaAngular,
  FaMobileAlt,
  FaPaintBrush,
  FaCog
} from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa6";
import profileImg from "./assets/profile.jpg";
import videoDetails from "./assets/video.mp4";

const ProjectCards = lazy(() => import("./components/ProjectCards"));
const ContactForm = lazy(() => import("./components/ContactForm"));

const skills = [
  { icon: () => <FaReact />, label: "React" },
  { icon: () => <FaReact />, label: "React Native" },
  { icon: () => <FaNodeJs />, label: "Node.js" },
  { icon: () => <FaAws />, label: "AWS" },
  { icon: () => <FaMicrosoft />, label: "Azure" },
  { icon: () => <FaAngular />, label: "Angular" },
  { icon: () => <FaMobileAlt />, label: "Mobile Dev" },
  { icon: () => <FaPaintBrush />, label: "Web Design" }
];

const contactLinks = [
  { icon: <FaGithub />, label: "GitHub", url: "https://github.com/paaricit" },
  { icon: <FaEnvelope />, label: "Email", url: "mailto:paaricit@outlook.com" }
];

function Section({ id, title, children }) {
  return (
    <motion.section
      id={id}
      className="relative z-10 max-w-screen-xl mx-auto py-16 px-4 sm:px-8 scroll-mt-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {title ? (
        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">
          {title}
        </h2>
      ) : null}
      <div>{children}</div>
    </motion.section>
  );
}

function LoadingSpinner({ label }) {
  return (
    <div className="flex justify-center items-center h-32" role="status" aria-live="polite" aria-label={label}>
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
    </div>
  );
}

function HeaderParallax({ isDark }) {
  const videoRef = useRef(null);
  const [videoEnabled, setVideoEnabled] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dataSaverEnabled = Boolean(navigator.connection && navigator.connection.saveData);
    setVideoEnabled(!(prefersReducedMotion || dataSaverEnabled) && isDark);
  }, [isDark]);

  useEffect(() => {
    if (videoRef.current && videoEnabled) {
      videoRef.current.playbackRate = 0.75;
    }
  }, [videoEnabled]);

  return (
    <>
      {videoEnabled ? (
        <video
          ref={videoRef}
          className="fixed top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src={videoDetails} type="video/mp4" />
        </video>
      ) : (
        <div className={`fixed inset-0 z-0 ${isDark ? "bg-slate-950" : "bg-slate-200"}`} aria-hidden="true" />
      )}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: isDark
            ? "linear-gradient(90deg, rgba(0,0,0,0.6), rgba(40,40,60,0.6))"
            : "linear-gradient(90deg, rgba(255,255,255,0.80), rgba(226,232,240,0.74))"
        }}
      />
    </>
  );
}

function Navigation({ isDark }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? (isDark ? "bg-black/80 backdrop-blur-sm" : "bg-white/80 backdrop-blur-sm") : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Main navigation"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className={`font-bold text-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 rounded ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            PS
          </a>
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 rounded ${
                isDark ? "text-white hover:text-blue-300" : "text-slate-900 hover:text-blue-700"
              }`}
            >
              About
            </a>
            <a
              href="#skills"
              className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 rounded ${
                isDark ? "text-white hover:text-blue-300" : "text-slate-900 hover:text-blue-700"
              }`}
            >
              Skills
            </a>
            <a
              href="#projects"
              className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 rounded ${
                isDark ? "text-white hover:text-blue-300" : "text-slate-900 hover:text-blue-700"
              }`}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 rounded ${
                isDark ? "text-white hover:text-blue-300" : "text-slate-900 hover:text-blue-700"
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function ScrollToTop({ label }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-50"
      aria-label={label}
      tabIndex={isVisible ? 0 : -1}
    >
      <FaArrowUp className="w-6 h-6" />
    </motion.button>
  );
}

function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-3 bg-white/10 backdrop-blur-sm text-white rounded-full shadow-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-[60] pointer-events-auto"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Toggle theme. Switch to ${isDark ? "light" : "dark"} mode`}
      title="Theme toggle"
    >
      <FaCog className={`w-6 h-6 transition-transform duration-500 ${isDark ? "rotate-90" : "rotate-0"}`} />
    </motion.button>
  );
}

export default function App() {
  const [shuffledSkills, setShuffledSkills] = useState([...skills]);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }, [isDark]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledSkills((prev) => [...prev].sort(() => Math.random() - 0.5));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`relative transition-colors duration-700 ${isDark ? "bg-gray-900 dark" : "bg-slate-100"}`}>
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <ScrollToTop label="Scroll to top" />
      <Navigation isDark={isDark} />
      <HeaderParallax isDark={isDark} />
      <div className="relative z-10">
        <div className="flex flex-wrap">
          <div className="flex-auto">
            <Section id="home">
              <div className={`text-center ${isDark ? "text-white" : "text-slate-900"}`}>
                <img
                  src={profileImg}
                  alt="Profile"
                  className="mx-auto w-36 h-36 object-cover rounded-full border-4 border-white shadow-lg"
                  loading="eager"
                  decoding="async"
                />
                <h1 className="text-4xl sm:text-5xl font-bold mt-6">Parthiban Selvaraj</h1>
                <p className="text-lg sm:text-xl mt-3 max-w-2xl mx-auto">Full Stack Developer</p>
                <div className="flex justify-center mt-6 gap-4">
                  {contactLinks.map(({ icon, label, url }) => (
                    <a
                      key={label}
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className={`text-2xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 rounded ${
                        isDark ? "hover:text-blue-300" : "hover:text-blue-700"
                      }`}
                      aria-label={label}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </Section>
          </div>
          <div className="flex-auto">
            <Section id="about" title="About">
              <div className={`max-w-2xl mx-auto text-center text-lg leading-relaxed ${isDark ? "text-white" : "text-slate-900"}`}>
                Software developer driven by curiosity and a passion for building impactful digital experiences. I
                specialize in livestream commerce and mobile-first innovations, creating intuitive, scalable solutions
                that connect brands with global audiences.
              </div>
            </Section>
            <Section id="skills" title="Skills">
              <div className="max-w-4xl mx-auto">
                <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {shuffledSkills.map((skill, index) => (
                    <motion.div
                      key={skill.label}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className={`group flex items-center gap-3 px-4 py-3 backdrop-blur-sm rounded-lg border transition-all duration-300 ${
                        isDark
                          ? "bg-white/10 border-white/20 text-white hover:bg-white/20"
                          : "bg-white/90 border-slate-200 text-slate-900 hover:bg-white"
                      }`}
                      aria-label={`${skill.label} skill`}
                    >
                      <span
                        className={`text-2xl group-hover:scale-110 transition-transform duration-300 ${
                          isDark ? "text-blue-400" : "text-blue-700"
                        }`}
                      >
                        <skill.icon />
                      </span>
                      <span className="font-medium">{skill.label}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </Section>
          </div>
        </div>

        <Section id="projects" title="Projects">
          <Suspense fallback={<LoadingSpinner label="Loading section content" />}>
            <ProjectCards />
          </Suspense>
        </Section>

        <Section id="contact" title="Get in Touch">
          <div className="max-w-xl mx-auto">
            <Suspense fallback={<LoadingSpinner label="Loading section content" />}>
              <ContactForm />
            </Suspense>
          </div>
        </Section>
      </div>
    </div>
  );
}
