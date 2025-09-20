import React from "react";
import Orb from "./Orb";
import Navbar from "./Navbar";


const App = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Orb container */}
      <div className="absolute inset-0">
        {/* Top Left Orb */}
        <div className="absolute top-[+50px] left-[-50px] scale-[4]">
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={200}
            forceHoverState={false}
          />
        </div>

        {/* Bottom Right Orb */}
        <div className="absolute bottom-[-10px] right-[+80px] scale-[5]">
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={20}
            forceHoverState={false}
          />
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />
       
      </div>
    </div>
  );
};

export default App;
