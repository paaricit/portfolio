import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Section({ title, children }) {
  return (
    <section className="max-w-5xl mx-auto py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-gray-800 dark:text-white mb-10 border-b-4 border-blue-500 inline-block"
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );
}

function Tag({ label }) {
  return (
    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2 inline-block">
      {label}
    </span>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <main className={`font-sans ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"}`}>
      <header className="relative h-screen bg-black text-white flex flex-col justify-center items-center text-center overflow-hidden">
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover opacity-30">
          <source
            src="https://www.apple.com/105/media/us/home/2023/fc640163-831e-4032-baa1-4c8e043fcad0/anim/hero/xlarge_2x.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-5 right-5 z-20">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="bg-white text-black dark:bg-gray-700 dark:text-white px-4 py-2 rounded shadow-md"
          >
            Toggle {darkMode ? "Light" : "Dark"} Mode
          </button>
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 px-6">
          <motion.div
            className="w-32 h-32 rounded-full border-4 border-white shadow-md bg-gray-200 flex items-center justify-center text-gray-600 text-sm"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            Add Image
          </motion.div>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-5xl md:text-6xl font-extrabold mb-4"
            >
              Michael Selvaraj
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl"
            >
              Entrepreneur & Developer specializing in livestream commerce & mobile innovation.
            </motion.p>
          </div>
        </div>
      </header>

      <Section title="Skills">
        <motion.div
          className="flex flex-wrap gap-3"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {[
            "React Native",
            "Spring Boot",
            "AWS",
            "CRM/ERP Solutions",
            "Angular",
            "TypeScript",
            "Node.js",
            "Mobile App Development",
            "SaaS Development",
            "Web Design"
          ].map((skill) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Tag label={skill} />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section title="Contact">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="mb-4">Feel free to reach out via email or connect with me on social platforms below:</p>
          <div className="flex gap-6 text-blue-600 dark:text-blue-400">
            <a href="https://github.com/" className="hover:underline">GitHub</a>
            <a href="https://linkedin.com/in/paarthibanselvaraj" className="hover:underline">LinkedIn</a>
            <a href="mailto:your.email@example.com" className="hover:underline">Email</a>
          </div>
        </motion.div>
      </Section>

      <footer className="text-center text-sm py-10 text-gray-400 dark:text-gray-500">
        © {new Date().getFullYear()} Michael Selvaraj — All rights reserved.
      </footer>
    </main>
  );
}
