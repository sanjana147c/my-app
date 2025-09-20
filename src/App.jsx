import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import "./App.css";
import Threads from "./components/Threads";
import ProjectSlider from "./components/ProjectSlider";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0d1117] text-white overflow-x-hidden">
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <HeroSection />
        <div
          style={{
            width: "100%",
            height: "900px",
            position: "fixed",
            pointerEvents: "none",
          }}
        >
          <Threads
            amplitude={1.5}
            distance={0}
            enableMouseInteraction={true}
            color={[0.5, 0, 1]} // 🔴 Red threads
          />
        </div>

        <AboutSection />
        <ProjectSlider />
      </div>
    </div>
  );
}
