import { FaDownload, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ScrollStack({ tag, title, description, file, tech }) {
  return (
    <motion.section
      className="relative z-10 text-white flex items-center justify-center"
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="relative w-[640px]">

        {/* Glow Behind */}
        <motion.div
          className="absolute inset-0 rounded-3xl border-2 border-violet-500 blur-md opacity-40"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />

        {/* Actual Card */}
        <motion.div
          className="relative bg-[#121212] rounded-3xl p-10 border border-gray-700 shadow-2xl flex flex-col h-[380px]" 
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-violet-500 text-white text-sm px-3 py-1 rounded-full font-bold">
              {tag}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-violet-400 mb-3">{title}</h3>
          <p className="text-gray-300 text-base leading-relaxed flex-grow">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-4">
            {tech?.map((t, i) => (
              <span
                key={i}
                className="bg-gray-800 border border-gray-600 text-sm text-gray-200 px-4 py-2 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          
          <div className="mt-auto flex items-center justify-between pt-6">
            <motion.a
              href={file}
              download
              // className="bg-violet-500 hover:bg-violet-600 text-white py-2 px-5 rounded-full flex items-center gap-2 text-sm font-medium transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              
            </motion.a>

            <motion.a
              href={file}
              target="_blank"
              rel="noopener noreferrer"
              // className="bg-gray-700 hover:bg-gray-600 py-2 px-5 rounded-full flex items-center gap-2 text-sm font-medium transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
