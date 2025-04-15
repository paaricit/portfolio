import logo from './logo.svg';
import './App.css';
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold">Michael Selvaraj</h1>
        <p className="text-lg mt-2">Entrepreneur & Developer</p>
        <p className="mt-4 max-w-2xl mx-auto">
          I specialize in building livestream and video streaming solutions that enhance customer engagement and drive business growth. Let’s connect and collaborate!
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[
            "React Native",
            "Spring Boot",
            "AWS",
            "Angular",
            "TypeScript",
            "Node.js",
            "CRM/ERP Development",
            "Mobile App Development"
          ].map((skill) => (
            <Card key={skill}>
              <CardContent className="p-4 text-center font-medium">{skill}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="space-y-6">
          {[{
            title: "eStreamly",
            description: "Scalable video streaming platform with Shopify integration, social media APIs, and in-stream purchases.",
            tech: "React Native, Angular, TypeScript, AWS",
          }, {
            title: "Reach Lite",
            description: "Salon admin panel with real-time booking, staff scheduling, and service add-ons.",
            tech: "Angular, Firebase, TypeScript",
          }, {
            title: "EduManage CMS",
            description: "College CMS for role-based dashboards and real-time data visualization.",
            tech: "Angular, TypeScript",
          }, {
            title: "Police E-Eye",
            description: "Traffic violation control app with live feeds, auto-reporting, and responsive UI for officers.",
            tech: "React Native, Firebase",
          }].map((project) => (
            <Card key={project.title}>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="mb-2">{project.description}</p>
                <p className="text-sm text-gray-600">Tech Stack: {project.tech}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="space-y-4">
          {[{
            role: "Lead Developer",
            company: "eStreamly",
            duration: "Jan 2021 – Feb 2025",
            summary: "Architected a video streaming platform integrated with Shopify and social APIs."
          }, {
            role: "Frontend Developer",
            company: "AVEON Infotech (Reach Lite)",
            duration: "Jan 2019 – Dec 2020",
            summary: "Led a 5-person team building a salon booking app for US salons."
          }, {
            role: "UI Developer",
            company: "AVEON Infotech (EduManage & Police E-Eye)",
            duration: "2018 – 2020",
            summary: "Built UIs for education and law enforcement applications."
          }].map((exp) => (
            <Card key={exp.company}>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold">{exp.role} – {exp.company}</h3>
                <p className="text-sm text-gray-500">{exp.duration}</p>
                <p className="mt-2">{exp.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <footer className="text-center mt-16">
        <p>Connect with me:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/" className="text-blue-500 hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/paarthibanselvaraj" className="text-blue-500 hover:underline">LinkedIn</a>
          <a href="mailto:your.email@example.com" className="text-blue-500 hover:underline">Email</a>
        </div>
      </footer>
    </div>
  );
}
