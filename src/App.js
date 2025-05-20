// Enhanced React portfolio with full-page background video, dark overlay, color tint, and animated section transitions

import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaArrowUp,
  FaReact, FaNodeJs, FaAws, FaAngular, FaMobileAlt, FaPaintBrush,
  FaSun, FaMoon
} from "react-icons/fa";
import profileImg from "./assets/profile.jpg";
import videoDetails from "./assets/video.mp4";
import Broadcast from "./assets/Broadcast.webp";
import reach from "./assets/reach.png";
import sai from "./assets/sai.png";
import cms from "./assets/cms.png";
const skills = [
  { icon: () => <FaReact />, label: "React" },
  { icon: () => <FaReact />, label: "React Native" },
  { icon: () => <FaNodeJs />, label: "Node.js" },
  { icon: () => <FaAws />, label: "AWS" },
  { icon: () => <FaAngular />, label: "Angular" },
  { icon: () => <FaMobileAlt />, label: "Mobile Dev" },
  { icon: () => <FaPaintBrush />, label: "Web Design" }
];

const projects = [
  {
    title: "eStreamly ",
    image: Broadcast,
    description: "Architected and developed eStreamly UI, a scalable video streaming platform designed for businesses to host, monetize, and distribute content seamlessly. The solution integrates Shopify for e-commerce and social media APIs (Facebook, Instagram, Twitter) to enable in-stream purchases, audience engagement, and cross-platform sharing.",
    link: "https://estreamly.com/watch"
  },
  {
    title: "Reach Lite",
    image: reach,
    description: "Led a 5-person team to develop Reach Lite, an Angular-powered admin panel enabling US salons to manage bookings, staff schedules, and service add-ons (e.g., keratin treatments, color upgrades). The platform increased salon upsell revenue by 30% through intuitive add-on customization and reduced scheduling conflicts by 45% with real-time coordination tools.",
    link: "https://getreach.ai/"
  },
  {
    title: "BU",
    image: cms,
    description: "Designed and developed the user interface for EduManage, a comprehensive CMS tailored for colleges to streamline administrative workflows. The UI focuses on intuitive navigation, role-based dashboards, and real-time data visualization to enhance productivity for staff, faculty, and students.",
    link: null
  },
  {
    title: "SAI",
    image: sai,
    description: "SAI is a dynamic mobile application built to simplify event creation, management, and personal reminders. Designed with a focus on usability and efficiency, the app enables users to effortlessly create, edit, delete, and schedule events, complete with customizable reminders. With support for UTC-based date and time inputs, audio notifications for event reminders, and an intuitive user interface, SAI enhances personal productivity and event organization.",
    link: null
  },
  // {
  //   title: "linach",
  //   image: reach,
  //   description: "SAI is a dynamic mobile application built to simplify event creation, management, and personal reminders. Designed with a focus on usability and efficiency, the app enables users to effortlessly create, edit, delete, and schedule events, complete with customizable reminders. With support for UTC-based date and time inputs, audio notifications for event reminders, and an intuitive user interface, SAI enhances personal productivity and event organization.",
  //   link: "http://linach.com/"
  // }
];

const contactLinks = [
  { icon: <FaGithub />, label: "GitHub", url: "https://github.com/paaricit" },
  { icon: <FaLinkedin />, label: "LinkedIn", url: "https://www.linkedin.com/in/paarthibanselvaraj/" },
  { icon: <FaEnvelope />, label: "Email", url: "mailto:paaricit@outlook.com" }
];

// Lazy load components
const ProjectCards = lazy(() => import('./components/ProjectCards'));
const ContactForm = lazy(() => import('./components/ContactForm'));

function Tag({ icon: Icon, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 rounded shadow text-gray-800 dark:text-white text-sm hover:scale-105 hover:shadow-lg transition-transform duration-300"
    >
      <span className="text-xl"><Icon /></span>
      <span>{label}</span>
    </motion.div>
  );
}

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
      <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 border-b-4 border-blue-500 inline-block">
        {title}
      </h2>
      <div>
        {children}
      </div>
    </motion.section>
  );
}

function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center h-32">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );
}

function HeaderParallax() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Slow down video for better performance
    }
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src={videoDetails} type="video/mp4" />
      </video>
      <div className="fixed inset-0 z-0" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.6), rgba(40,40,60,0.6))" }}></div>
    </>
  );
}

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-white font-bold text-xl">PS</a>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-white hover:text-blue-300 transition-colors">About</a>
            <a href="#skills" className="text-white hover:text-blue-300 transition-colors">Skills</a>
            <a href="#projects" className="text-white hover:text-blue-300 transition-colors">Projects</a>
            <a href="#contact" className="text-white hover:text-blue-300 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.5 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-50"
      aria-label="Scroll to top"
    >
      <FaArrowUp className="w-6 h-6" />
    </motion.button>
  );
}

function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-3 bg-white/10 backdrop-blur-sm text-white rounded-full shadow-lg hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {isDark ? <FaSun className="w-6 h-6" /> : <FaMoon className="w-6 h-6" />}
    </motion.button>
  );
}

export default function App() {
  const [shuffledSkills, setShuffledSkills] = useState([...skills]);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledSkills(prev => [...skills].sort(() => Math.random() - 0.5));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`relative transition-colors duration-700 ${isDark ? 'dark:bg-gray-900' : 'bg-white'}`}>
      <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      <ScrollToTop />
      <Navigation />
      <HeaderParallax />
      <div className="relative z-10">
        <div className="flex flex-wrap">
          <div className="flex-auto">
            <Section id="home">
              <div className="text-center text-white">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="mx-auto w-36 h-36 object-cover rounded-full border-4 border-white shadow-lg"
                />
                <h1 className="text-4xl sm:text-5xl font-bold mt-6">Parthiban Selvaraj</h1>
                <p className="text-lg sm:text-xl mt-3 max-w-2xl mx-auto">
                  Entrepreneur & Developer
                  {/* focused on Live Commerce & SaaS Innovation */}
                </p>
                <div className="flex justify-center mt-6 gap-4">
                  {contactLinks.map(({ icon, label, url }) => (
                    <a key={label} href={url} target="_blank" rel="noreferrer" className="text-2xl hover:text-blue-300">
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </Section>
          </div>
          <div className="flex-auto">
            <Section id="about" style={{ color: "#fff" }} >
              <div className="max-w-2xl mx-auto text-center text-lg leading-relaxed" style={{ color: "#fff" }}>
                An entrepreneur and software developer driven by curiosity and a passion for building impactful digital experiences. I specialize in livestream commerce and mobile-first innovations, creating intuitive, scalable solutions that connect brands with global audiences.
              </div>
            </Section>
            <Section id="skills">
              <div className="max-w-4xl mx-auto">
                <motion.div
                  layout
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                  {shuffledSkills.map((skill, index) => (
                    <motion.div
                      key={skill.label}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="group flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                    >
                      <span className="text-2xl text-blue-400 group-hover:scale-110 transition-transform duration-300">
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

        <Section id="projects">
          <h2 className="text-3xl font-bold pb-4" style={{ color: "#fff" }}>Projects</h2>
          <Suspense fallback={<LoadingSpinner />}>
            <ProjectCards />
          </Suspense>
        </Section>

        <Section id="contact">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-white">Get in Touch</h2>
            <Suspense fallback={<LoadingSpinner />}>
              <ContactForm />
            </Suspense>
          </div>
        </Section>
      </div>
    </div>
  );
}
