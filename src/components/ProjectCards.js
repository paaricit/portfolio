import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function ProjectCards() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {projects.map(({ title, image, description, link }) => (
        <motion.div
          key={title}
          className="group bg-white/90 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative overflow-hidden">
            <img
              src={image}
              alt={`${title} project preview`}
              className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{title}</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-300 line-clamp-3">{description}</p>
            {link ? (
              <motion.a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                aria-label={`Visit ${title} project`}
              >
                Visit Project
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            ) : (
              <span className="text-gray-500 italic">Private project</span>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}