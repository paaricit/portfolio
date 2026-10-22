import Broadcast from "../assets/Broadcast.webp";
import reach from "../assets/reach.webp";
import cms from "../assets/cms.png";
import senraa from "../assets/senraa.jpg";
import easyq from "../assets/easyq.webp";

export const projects = [
  {
    title: "eStreamly",
    oneLiner: "Live shopping platform with in-stream checkout for brands.",
    stack: ["React", "Node.js", "Shopify", "Social APIs"],
    result: "Powers live-stream commerce for brands across Shopify, Facebook, Instagram and Twitter.",
    description:
      "Architected and developed eStreamly, a live video shopping platform. In-stream checkout, Shopify integration, and cross-platform broadcasting to Facebook, Instagram and Twitter.",
    image: Broadcast,
    link: "https://get.estreamly.com/"
  },
  {
    title: "Senraa",
    oneLiner: "AR virtual try-on platform for retail.",
    stack: ["ARKit", "Computer Vision", "FastAPI", "iOS"],
    result: "Pilot deployed with retail partners for in-store and at-home try-on.",
    description:
      "Lead architect for Senraa Labs' AR try-on platform. ARKit-driven on-device rendering, computer-vision sizing, and a FastAPI backend for product catalogs and analytics.",
    image: senraa,
    link: null
  },
  {
    title: "EasyQ",
    oneLiner: "Patient queue app running live for a hospital in Salem.",
    stack: ["Flutter", "FastAPI", "Firebase"],
    result: "Live on Google Play and the App Store; used daily by patients and staff.",
    description:
      "A patient queue and appointment app for a multi-specialty hospital. Real-time queue updates, OTP sign-in, and a Flutter codebase shipping to both stores.",
    image: easyq,
    link: "https://play.google.com/store/apps/details?id=easy.Q"
  },
  {
    title: "REACH by Octopi",
    oneLiner: "Admin panel for US salons covering bookings, staff and services.",
    stack: ["Angular", "Node.js", "PostgreSQL"],
    result: "Led a 5-person team; cut scheduling conflicts and lifted upsell revenue through add-on customization.",
    description:
      "Angular-powered admin panel for US salons: bookings, staff schedules, service add-ons (keratin, color upgrades), and reporting. I led a team of five from design through launch.",
    image: reach,
    link: "https://getreach.ai/"
  },
  {
    title: "YouTube Automation",
    oneLiner: "Topic in, finished voiced video out — fully automated.",
    stack: ["n8n", "Claude", "ElevenLabs", "FFmpeg"],
    result: "End-to-end pipeline: research → script → voiceover → render → upload, with no manual steps.",
    description:
      "n8n workflow that chains Claude for scripting, ElevenLabs for voice, and automated rendering to produce and publish long-form YouTube videos from a single topic prompt.",
    image: cms,
    link: null
  }
];
