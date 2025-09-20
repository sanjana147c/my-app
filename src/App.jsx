import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import "./App.css";
import Threads from "./components/Threads";
import ProjectSlider from "./components/ProjectSlider";
import SkillsSection from "./components/SkillSection";
import ExperienceTimeline from "./components/ExperienceTimeline";


export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0d1117] text-white overflow-x-hidden">
      
      {/* Background Threads */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Threads
          amplitude={1.5}
          distance={0}
          enableMouseInteraction={true}
          color={[0.5, 0, 1]}
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 flex flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Sections */}
        <section id="home">
          <HeroSection />
        </section>

        <section id="about">
          <AboutSection />
        </section>

        <section id="projects">
          <ProjectSlider />
        </section>

        <section id="skills">
          <SkillsSection />
        </section>

        <section id="experience">
          <ExperienceTimeline />
        </section>

      </div>
    </div>
  );
}