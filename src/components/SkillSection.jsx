
import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Programming Languages",
    icon: "💻",
    items: ["Python", "C++", "C", "Java"],
    glowColor: "cyan-500",
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    icon: "🤖",
    items: ["Computer Vision", "GANs", "GNN", "Natural Language Processing"],
    glowColor: "violet-500",
  },
  {
    title: "Data Analytics & Visualization",
    icon: "📊",
    items: ["Power BI"],
    glowColor: "pink-500",
  },
  {
    title: "Web Development",
    icon: "🌐",
    items: ["HTML", "CSS", "JavaScript", "React JS"],
    glowColor: "blue-500",
  },
  {
    title: "Web Frameworks",
    icon: "⚙️",
    items: ["Django", "Flask"],
    glowColor: "emerald-500",
  },
  {
    title: "Databases",
    icon: "🗄️",
    items: ["MySQL", "MongoDB"],
    glowColor: "orange-500",
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    items: ["AWS Lambda"],
    glowColor: "indigo-500",
  },
  {
    title: "Operating Systems & Tools",
    icon: "🖥️",
    items: [
      "Linux System Administration",
      "RPM Package Management",
      "Virtualization",
      "Shell Scripting",
      "Anaconda Installer Customization",
    ],
    glowColor: "teal-500",
  },
  {
    title: "Soft Skills",
    icon: "✨",
    items: ["Teamwork", "Creativity", "Leadership"],
    glowColor: "yellow-500",
  },
];

export default function SkillsSection() {
  return (
    <section className="relative z-10 text-white py-20 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl font-bold text-center text-violet-400 mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <motion.p
        className="text-center text-lg text-gray-300 mb-12 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I've worked with a range of technologies in the web development world,
        from frontend to backend and everything in between.
      </motion.p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ scale: 1.03 }}
          >
            {/* Subtle glow */}
            <div
              className={`absolute inset-0 rounded-2xl border border-${cat.glowColor}/30 blur-sm opacity-40`}
            ></div>

            {/* Transparent Card */}
            <div className="relative bg-transparent rounded-2xl p-4 border border-gray-700 shadow-lg flex flex-col h-48 backdrop-blur-sm">
              <div className="flex items-center gap-1 mb-2">
                <span className="text-sm">{cat.icon}</span>
                <h3 className="text-sm font-semibold text-white">{cat.title}</h3>
              </div>

              {/* Scrollable Tags */}
              <div className="flex flex-wrap gap-2 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
                {cat.items.map((item) => (
                  <motion.span
                    key={item}
                    className="px-3 py-1 rounded-full text-sm text-white border border-white/20
                               bg-gradient-to-r from-[#2a255a] to-[#5f2c3e] 
                               animate-gradient-x"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
