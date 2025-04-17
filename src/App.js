// Enhanced React portfolio with full-page background video, dark overlay, color tint, and animated section transitions

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaArrowUp,
  FaReact, FaNodeJs, FaAws, FaAngular, FaMobileAlt, FaPaintBrush
} from "react-icons/fa";
import profileImg from "./assets/profile.jpg";
import videoDetails from "./assets/video.mp4";

const skills = [
  { icon: () => <FaReact />, label: "React Native" },
  { icon: () => <FaNodeJs />, label: "Node.js" },
  { icon: () => <FaAws />, label: "AWS" },
  { icon: () => <FaAngular />, label: "Angular" },
  { icon: () => <FaMobileAlt />, label: "Mobile Dev" },
  { icon: () => <FaPaintBrush />, label: "Web Design" }
];

const projects = [
  {
    title: "Linach Live Commerce",
    image: "https://via.placeholder.com/600x400?text=Linach",
    description: "A livestream shopping platform empowering influencers and brands.",
    link: "https://linach.live"
  },
  {
    title: "Reach Lite",
    image: "https://via.placeholder.com/600x400?text=Reach+Lite",
    description: "Online salon booking and scheduling app for professionals.",
    link: "https://reachlite.in"
  }
];

const contactLinks = [
  { icon: <FaGithub />, label: "GitHub", url: "https://github.com/your-github" },
  { icon: <FaLinkedin />, label: "LinkedIn", url: "https://linkedin.com/in/paarthibanselvaraj" },
  { icon: <FaEnvelope />, label: "Email", url: "mailto:your.email@example.com" }
];

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

function ProjectCards() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map(({ title, image, description, link }) => (
        <motion.div
          key={title}
          className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <img src={image} alt={title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">{title}</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-300">{description}</p>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Visit Project →
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function HeaderParallax() {
  return (
    <>
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoDetails} type="video/mp4" />
      </video>
      <div className="fixed inset-0 z-0" style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.6), rgba(40,40,60,0.6))" }}></div>
    </>
  );
}

export default function App() {
  return (
    <div className="relative transition-colors duration-700 dark:bg-gray-900 bg-white">
      <HeaderParallax />
      <div className="relative z-10">
        <Section id="home">
          <div className="text-center text-white">
            <img
              src={profileImg}
              alt="Profile"
              className="mx-auto w-36 h-36 object-cover rounded-full border-4 border-white shadow-lg"
            />
            <h1 className="text-4xl sm:text-5xl font-bold mt-6">Michael Selvaraj</h1>
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

        <Section id="skills" title="Skills">
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, index) => (
              <Tag key={index} icon={skill.icon} label={skill.label} />
            ))}
          </div>
        </Section>

        <Section id="projects" title="Projects">
          <ProjectCards />
        </Section>

        <Section id="about" title="About">
          <div className="max-w-2xl mx-auto text-center text-lg leading-relaxed">
            I'm Michael, an entrepreneur and software developer passionate about creating powerful, intuitive digital experiences. My journey began with curiosity and a drive to build, and today, I specialize in livestream commerce and mobile-first innovations for a global audience.
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <form
            className="max-w-xl mx-auto space-y-4"
            action="https://formspree.io/f/your-form-id"
            method="POST"
          >
            <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:border-gray-600" />
            <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:border-gray-600" />
            <textarea name="message" placeholder="Your Message" rows="5" required className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:border-gray-600"></textarea>
            <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Send Message</button>
          </form>
        </Section>
      </div>
    </div>
  );
}
