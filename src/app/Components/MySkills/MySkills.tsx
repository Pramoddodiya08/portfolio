"use client";
import React, { useEffect, useRef, useState } from "react";
import { BiLogoHtml5 } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiAngularjsLine, RiNextjsLine } from "react-icons/ri";
import { SiAltiumdesigner } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import VANTA from "vanta/dist/vanta.dots.min";
import * as THREE from "three";

interface VantaInstance {
  destroy: () => void;
}

function MySkills() {
  const [vantaEffect, setVantaEffect] = useState<VantaInstance | null>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = VANTA({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        backgroundColor: 0x0d1117,
        color: 0xffc107,
        showLines: false,
        size: 2.0,
        spacing: 20.0,
      }) as VantaInstance;
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null);
      }
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="relative min-h-[80vh] w-[100%]  bg-[#0d1117] pb-[50px] :"
    >
      <div id="service-section" className="relative z-10 p-8 w-[80%] mx-auto">
        <h2
          className={`text-center m-[20px] mt-0  mb-[50px] text-[50px] font-bold`}
        >
          My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-black text-white p-6 rounded-lg border border-transparent shadow-md transition-all duration-300 ease-out hover:border-[#ffc107] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,193,7,0.5)]">
            <div className="flex items-center justify-center mb-4">
              <RiAngularjsLine className="text-[#ffc107] text-4xl transition-transform transform hover:rotate-[360deg] duration-500 hover:rotate-y-180" />
            </div>
            <h3 className="text-xl font-bold text-center">Angular JS</h3>
          </div>
          <div className="bg-black text-white p-6 rounded-lg border border-transparent shadow-md transition-all duration-300 ease-out hover:border-[#ffc107] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,193,7,0.5)]">
            <div className="flex items-center justify-center mb-4">
              <FaReact className="text-[#ffc107] text-4xl transition-transform transform hover:rotate-[360deg] duration-500 hover:rotate-y-180" />
            </div>
            <h3 className="text-xl font-bold text-center">React JS</h3>
          </div>
          <div className="bg-black text-white p-6 rounded-lg border border-transparent shadow-md transition-all duration-300 ease-out hover:border-[#ffc107] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,193,7,0.5)]">
            <div className="flex items-center justify-center mb-4">
              <RiNextjsLine className="text-[#ffc107] text-4xl transition-transform transform hover:rotate-[360deg] duration-500 hover:rotate-y-180" />
            </div>
            <h3 className="text-xl font-bold text-center">NEXT JS</h3>
          </div>
          <div className="bg-black text-white p-6 rounded-lg border border-transparent shadow-md transition-all duration-300 ease-out hover:border-[#ffc107] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,193,7,0.5)]">
            <div className="flex items-center justify-center mb-4">
              <TbBrandJavascript className="text-[#ffc107] text-4xl transition-transform transform hover:rotate-[360deg] duration-500 hover:rotate-y-180" />
            </div>
            <h3 className="text-xl font-bold text-center">JavaScript</h3>
          </div>
          <div className="bg-black text-white p-6 rounded-lg border border-transparent shadow-md transition-all duration-300 ease-out hover:border-[#ffc107] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,193,7,0.5)]">
            <div className="flex items-center justify-center mb-4">
              <BiLogoHtml5 className="text-[#ffc107] text-4xl transition-transform transform hover:rotate-[360deg] duration-500 hover:rotate-y-180" />
            </div>
            <h3 className="text-xl font-bold text-center">HTML</h3>
          </div>
          <div className="bg-black text-white p-6 rounded-lg border border-transparent shadow-md transition-all duration-300 ease-out hover:border-[#ffc107] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,193,7,0.5)]">
            <div className="flex items-center justify-center mb-4">
              <SiAltiumdesigner className="text-[#ffc107] text-4xl transition-transform transform hover:rotate-[360deg] duration-500 hover:rotate-y-180" />
            </div>
            <h3 className="text-xl font-bold text-center">
              CSS/SCSS/Bootstrap/Tailwind
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
