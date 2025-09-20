// src/components/SkillsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Programming Languages",
    icon: "💻",
    items: ["JavaScript", "Java", "Python", "TypeScript", "HTML/CSS"],
    glowColor: "cyan-500",
  },
  {
    title: "Frontend Development",
    icon: "🖼️",
    items: ["React", "React Native", "Next.js", "Tailwind CSS"],
    glowColor: "violet-500",
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    items: ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
    glowColor: "pink-500",
  },
  {
    title: "Databases",
    icon: "🗄️",
    items: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"],
    glowColor: "blue-500",
  },
  {
    title: "Tools & Technologies",
    icon: "🔧",
    items: ["Git", "Agile/Scrum"],
    glowColor: "emerald-500",
  },
  {
    title: "Design",
    icon: "🎨",
    items: ["Figma", "Adobe AI", "UI/UX Design", "Wireframing", "Prototyping"],
    glowColor: "yellow-500",
  },
];

export default function SkillsSection() {
  return (
    <section className="relative z-10 text-white py-20 px-6 max-w-6xl mx-auto">
      {/* Heading */}
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

      {/* Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.title}
            className="relative h-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Glow Behind */}
            <div
              className={`absolute inset-0 rounded-2xl border-2 border-${cat.glowColor} blur-sm opacity-40`}
            ></div>

            {/* Actual Card */}
            <div className="relative bg-[#121212] rounded-2xl p-6 border border-gray-700 shadow-lg h-full flex flex-col">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">{cat.icon}</span>
                <h3 className="text-xl font-semibold text-white">
                  {cat.title}
                </h3>
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-2 mt-2">
                {cat.items.map((item) => (
                  <motion.span
                    key={item}
                    className="px-3 py-1 rounded-full bg-[#1a1f29] text-sm text-gray-300 border border-gray-700"
                    whileHover={{ scale: 1.1 }}
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
