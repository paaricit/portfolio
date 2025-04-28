// Enhanced React portfolio with full-page background video, dark overlay, color tint, and animated section transitions

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaArrowUp,
  FaReact, FaNodeJs, FaAws, FaAngular, FaMobileAlt, FaPaintBrush
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
    title: "BU - Bharathiyar University",
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

            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:underline"
              >
                Visit Project →
              </a>
            ) : (
              <span className="text-gray-500"></span>
            )}
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
                I'm Parthiban, an entrepreneur and software developer passionate about creating powerful, intuitive digital experiences. My journey began with curiosity and a drive to build, and today, I specialize in livestream commerce and mobile-first innovations for a global audience.
              </div>
            </Section>
            <Section id="skills" >
              <div className="flex flex-wrap gap-4 justify-center">
                {skills.map((skill, index) => (
                  <Tag key={index} icon={skill.icon} label={skill.label} />
                ))}
              </div>
            </Section>
          </div>
        </div>



        <Section id="projects" >
        <h2 className="text-3xl font-bold pb-4"  style={{ color: "#fff" }} >Projects</h2>
          <ProjectCards />
        </Section>



        <Section id="contact" >
          <form
            className="max-w-xl mx-auto space-y-4"
            action="https://formspree.io/f/xjkydqww"
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
