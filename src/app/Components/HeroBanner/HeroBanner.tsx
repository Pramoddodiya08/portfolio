"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

interface VantaInstance {
  destroy: () => void;
}

const HeroBanner: React.FC = () => {
  const [vantaEffect, setVantaEffect] = useState<VantaInstance | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let isMounted = true;

    const loadVanta = async () => {
      try {
        const THREE = await import("three");
        const BIRDS = (await import("vanta/dist/vanta.birds.min")).default;

        if (!isMounted || !vantaRef.current) return;

        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const isMobile = screenWidth < 768;

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
          onInit: () => {
            if (isMounted) setIsLoaded(true);
          },
        });

        if (isMounted) {
          setVantaEffect(effect);
        }
      } catch (error) {
        console.error("Failed to load Vanta effect:", error);
      }
    };

    loadVanta();

    return () => {
      isMounted = false;
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, []);

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

export default HeroBanner;
