import React, { useEffect, useState } from "react";
import {
  MapPinIcon,
  EnvelopeIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/outline";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SplitText from "./SplitText";

export default function HeroSection() {
  const [showRole, setShowRole] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowRole(true), 2000); // show after name anim
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative z-10 text-white py-20 px-6 max-w-3xl mx-auto text-center">
      {/* Animate Name */}
      <h1>
        <SplitText
          text="Sanjana C"
          className="text-4xl md:text-5xl font-bold mb-4"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
        />
      </h1>

      
      
      <h2 className="text-lg md:text-xl text-purple-300 mb-6 transition-opacity duration-700 opacity-100">
        Cloud Developer & AI/ML Engineer
      </h2>
      

      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-300 mb-8">
        <div className="flex items-center gap-2">
          <MapPinIcon className="h-5 w-5 text-blue-400" />
          <span>Bangalore, India</span>
        </div>
        <div className="flex items-center gap-2">
          <EnvelopeIcon className="h-5 w-5 text-blue-400" />
          <span>sanjanac147@gmail.com</span>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex justify-center items-center gap-6">
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl border border-gray-500 hover:bg-white/10 transition"
        >
          <FaGithub className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/sanjana-c-7a73a6243"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-xl border border-gray-500 hover:bg-white/10 transition"
        >
          <FaLinkedin className="h-6 w-6" />
        </a>
        <a
          href="/resume-5.pdf"
          download
          className="p-2 rounded-xl border border-gray-500 hover:bg-white/10 transition"
        >
          <ArrowDownTrayIcon className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
