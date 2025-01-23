"use client";
import React, { useRef, useEffect } from "react";

const HeroBanner: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  //here last change
  useEffect(() => {
    let vantaInstance: any;

    const loadVanta = async () => {
      if (typeof window !== "undefined") {
        try {
          const VANTA = (await import("vanta/dist/vanta.birds.min")).default;

          vantaInstance = VANTA({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundColor: 0x0d1117, // Dark background color
            color1: 0xfc813e, // Bird primary color
            color2: 0x4caf50, // Bird secondary color
            birdSize: 0.7, // Size of the birds
            wingSpan: 25, // Wingspan of the birds
            speedLimit: 3.0, // Speed of the birds
            separation: 80.0, // Separation between birds
            alignment: 80, // Alignment of the flock
            cohesion: 100, // Cohesion of the flock
          });
        } catch (error) {
          console.error("Failed to load Vanta.js", error);
        }
      }
    };

    loadVanta();

    return () => {
      if (vantaInstance) vantaInstance.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-[90vh] w-full">
      <div
        ref={vantaRef}
        className="absolute top-0 left-0 w-full h-[100%] z-[-1]"
      ></div>

      <div className="absolute top-0 left-0 w-full h-[100%] z-0"></div>

      <div className="absolute top-1/2 left-[10%] transform -translate-y-1/2 text-white z-10">
        <p className="font-semibold tracking-wider uppercase text-xl mb-8">
          👋, My name is Pramod
        </p>
        <h1 className="text-[60px] font-bold mb-5">I&apos;m a Developer</h1>
        <p className="text-lg leading-relaxed max-w-2xl">
          Designing the future with passion and expertise. Creating digital
          experiences that push the boundaries of innovation.
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
