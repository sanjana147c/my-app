import { FaGraduationCap, FaDownload, FaEye } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="relative z-10 text-white py-20 px-6 max-w-5xl mx-auto">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-violet-400 mb-6">
        About Me
      </h2>
      <p className="text-center text-lg text-gray-300 mb-12">
        Passionate AI/ML Engineer and Full Stack Developer with expertise in
        building intelligent systems and scalable web applications.
      </p>

      {/* Grid: Education and Resume */}
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        {/* Education Card */}
        <div className="relative h-full">
          {/* Glow Behind */}
          <div className="absolute inset-0 rounded-2xl border-2 border-cyan-500 blur-sm opacity-40"></div>

          {/* Actual Card */}
          <div className="relative bg-[#121212] rounded-2xl p-6 border border-gray-700 shadow-lg h-full flex flex-col">
            <div className="flex items-center gap-3 text-cyan-400 mb-4">
              <FaGraduationCap size={20} />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <h4 className="text-white text-lg font-bold">
              Bachelor of Technology in Artificial Intelligence & Machine
              Learning
            </h4>
            <p className="text-blue-400">Ramaiah Institute of Technology</p>
            <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
              <span>📅 Dec 2021 – July 2025</span>
              <span>📍 Bangalore, India</span>
            </div>
            <div className="mt-4 text-right text-cyan-300 text-lg font-semibold">
              9.47 CGPA
            </div>
          </div>
        </div>

        {/* Resume Card */}
        <div className="relative h-full">
          {/* Glow Behind */}
          <div className="absolute inset-0 rounded-2xl border-2 border-violet-500 blur-sm opacity-40"></div>

          {/* Actual Card */}
          <div className="relative bg-[#121212] rounded-2xl p-6 border border-gray-700 shadow-lg h-full flex flex-col">
            <div className="flex items-center gap-3 text-pink-400 mb-4">
              <span className="bg-violet-500 text-white text-sm px-2 py-1 rounded-full font-bold">
                CV
              </span>
              <h3 className="text-xl font-semibold text-violet-400">Resume</h3>
            </div>
            <h4 className="text-white text-lg font-bold mb-2">Resume / CV</h4>
            <p className="text-gray-300">Download my professional resume</p>

            {/* Push buttons to bottom */}
            <div className="mt-auto flex items-center justify-between pt-6">
              <a
                href="/resume-5.pdf"
                download
                className="bg-violet-500 hover:bg-violet-600 text-white py-2 px-4 rounded-full flex items-center gap-2"
              >
                <FaDownload />
                Download
              </a>
              <a
                              href="/resume-5.pdf"
                   target="_blank"
                     rel="noopener noreferrer"
                       className="bg-gray-700 hover:bg-gray-600 p-2 rounded-full"
              >
                <FaEye />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
     