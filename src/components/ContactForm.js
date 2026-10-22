import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formData = new FormData(e.target);
      const response = await fetch("https://formspree.io/f/xjkydqww", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        setSubmitStatus("success");
        e.target.reset();
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-white dark:bg-white/5 border border-slate-300 dark:border-white/15 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all";

  return (
    <form className="space-y-5" onSubmit={handleSubmit} aria-label="Contact form">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-sm font-medium text-slate-800 dark:text-slate-200">
            Name
          </label>
          <input type="text" id="name" name="name" required className={inputClass} placeholder="Your name" aria-required="true" />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-sm font-medium text-slate-800 dark:text-slate-200">
            Email
          </label>
          <input type="email" id="email" name="email" required className={inputClass} placeholder="you@company.com" aria-required="true" />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label htmlFor="project_type" className="block text-sm font-medium text-slate-800 dark:text-slate-200">
            Project type
          </label>
          <select id="project_type" name="project_type" className={inputClass} defaultValue="">
            <option value="" disabled>Select…</option>
            <option>AI agents & automation</option>
            <option>Voice AI agent</option>
            <option>Full-stack / mobile product</option>
            <option>Something else</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="budget" className="block text-sm font-medium text-slate-800 dark:text-slate-200">
            Budget range
          </label>
          <select id="budget" name="budget" className={inputClass} defaultValue="">
            <option value="" disabled>Select…</option>
            <option>Under $2k</option>
            <option>$2k – $10k</option>
            <option>$10k – $30k</option>
            <option>$30k+</option>
          </select>
        </div>
      </div>
      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-sm font-medium text-slate-800 dark:text-slate-200">
          What are you building?
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          required
          className={`${inputClass} resize-none`}
          placeholder="A few lines on the workflow and what success looks like."
          aria-required="true"
        ></textarea>
      </div>
      {submitStatus && (
        <div
          role="alert"
          aria-live="polite"
          className={`p-4 rounded-lg ${
            submitStatus === "success"
              ? "bg-green-100 text-green-800 dark:bg-green-500/20 dark:text-green-200"
              : "bg-red-100 text-red-800 dark:bg-red-500/20 dark:text-red-200"
          }`}
        >
          {submitStatus === "success" ? "Message sent successfully!" : "Failed to send message. Please try again."}
        </div>
      )}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-label="Send message"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </motion.button>
    </form>
  );
}