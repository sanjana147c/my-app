// src/components/ExperienceTimeline.jsx
import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react"; // icon (already available if using lucide-react)

const experiences = [
  {
    company: "Hewlett Packard Enterprise (HPE)",
    period: "Feb 2025 – Present",
    title: "Intern • Bangalore (Hybrid)",
    details: [
      "Migration from CentOS to Rocky Linux, including critical RPM integration and custom bootable ISO creation.",
      "Converted configured VM to a deployable OVA image and resolved complex dependency issues.",
    ],
  },
  {
    company: "Samsung R&D Institute",
    period: "Jan 2024 – July 2024",
    title: "Intern • Bangalore (Hybrid)",
    details: [
      "Developed algorithms within the Multi-modal Hierarchical Transformer framework.",
      "Achieved Observed Occupancy AUC of 0.998 and Soft-IOU of 0.957 on Waymo benchmark datasets.",
    ],
  },
  {
    company: "Hewlett Packard Enterprise (HPE)",
    period: "Jan 2024 – July 2024",
    title: "Intern • Bangalore (Hybrid)",
    details: [
      "Developed a framework for fine-tuning LLMs using PEFT techniques.",
      "Fine-tuned with LoRA & QLoRA for text summarisation, multi-label and image classification.",
    ],
  },
  {
    company: "Maya productDev Edge",
    period: "Jan 2024 – Feb 2025",
    title: "Intern – AI Engineer • Bangalore (Hybrid)",
    details: [
      "Customized cosmetic formulas in 2 minutes, accelerating product launches by 50%.",
      "Optimized ingredient safety & sustainability, boosting viewer satisfaction by 55%.",
    ],
  },
  {
    company: "AIQuantum Smart Solution – NITK",
    period: "June 2023 – July 2023",
    title: "Intern • Bangalore (Hybrid)",
    details: [
      "Leveraged image processing and machine learning for classification of medical images.",
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="bg-[#0e1117] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-violet-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        <div className="relative border-l border-gray-700">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="mb-10 ml-6 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Timeline dot */}
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-br from-indigo-500/40 to-violet-500/40
                               rounded-full -left-4 ring-4 ring-[#0e1117] group-hover:from-indigo-400/60 group-hover:to-violet-400/60 transition">
                <Briefcase size={16} />
              </span>

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-sm border border-gray-700 rounded-2xl p-5 shadow-md
                              hover:border-violet-500/40 transition-colors">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-100">{exp.company}</h3>
                  <span className="text-sm text-gray-400">{exp.period}</span>
                </div>
                <p className="text-sm text-gray-300 mb-3">{exp.title}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
                  {exp.details.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
