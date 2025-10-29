"use client";
import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.birds.min";
import * as THREE from "three";

interface VantaInstance {
  destroy: () => void;
}

const HeroBanner: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<VantaInstance | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const isMobile = screenWidth < 768;
    if (!vantaEffect) {
      const effect = BIRDS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: isMobile ? screenHeight : 600.0,
        minWidth: isMobile ? screenWidth : 600.0,
        colorMode: "lerp",
        birdSize: 0.6,
        scale: 1.0,
        scaleMobile: 1.0,
        separation: 81.0,
        color1: "#ffae08",
        color2: "#ff5a00",
        backgroundColor: 0x0d1117,
        onInit: () => setIsLoaded(true),
      });

      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden">
      <div
        ref={vantaRef}
        className={`absolute top-0 left-0 w-full h-full z-[-1] transition-colors duration-500 ${
          isLoaded ? "bg-transparent" : "bg-[#0d1117]"
        }`}
      ></div>

      <div className="absolute top-1/2 left-[10%] transform -translate-y-1/2 text-white z-10 max-w-[90%]">
        <p className="font-semibold tracking-wider uppercase text-xl sm:text-lg mb-4">
          👋, My name is Pramod
        </p>
        <h1 className="text-[60px] sm:text-[40px] font-bold mb-5">
          I&apos;m a Developer
        </h1>
        <p className="text-lg sm:text-base leading-relaxed max-w-2xl">
          Designing the future with passion and expertise. Creating digital
          experiences that push the boundaries of innovation.
        </p>
      </div>
    </div>
  );
};

// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import BIRDS from "vanta/dist/vanta.birds.min";
// import * as THREE from "three";

// // Define a type for the VANTA effect
// type VantaEffect = {
//   destroy: () => void;
// } | null;

// const HeroBanner: React.FC = () => {
//   const vantaRef = useRef<HTMLDivElement>(null);
//   const [vantaEffect, setVantaEffect] = useState<VantaEffect>(null);

//   useEffect(() => {
//     if (!vantaEffect) {
//       const effect = BIRDS({
//         el: vantaRef.current,
//         THREE: THREE, // Make sure THREE is passed correctly
//         mouseControls: true,
//         touchControls: true,
//         gyroControls: false,
//         minHeight: 200.0,
//         minWidth: 200.0,
//         scale: 1.0,
//         scaleMobile: 1.0,
//         color: 0x3b82f6,
//         backgroundColor: 0xf9fafb,
//         separation: 100,
//         alignment: 50,
//         cohesion: 50,
//         quantity: 4,
//       });
//       setVantaEffect(effect);
//     }

//     return () => {
//       if (vantaEffect) {
//         vantaEffect.destroy();
//       }
//     };
//   }, [vantaEffect]);

// return (
//   <div className="relative min-h-[90vh] w-full">
//     <div
//       ref={vantaRef}
//       className="absolute top-0 left-0 w-full h-[100%] z-[-1]"
//     ></div>
//     <div className="absolute top-0 left-0 w-full h-[100%] z-0"></div>
//     <div className="absolute top-1/2 left-[10%] transform -translate-y-1/2 text-white z-10">
//       <p className="font-semibold tracking-wider uppercase text-xl mb-8">
//         work
//       </p>
//     </div>
//   </div>
// );
// };

export default HeroBanner;
