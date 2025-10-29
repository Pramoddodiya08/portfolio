"use client";
import React, { useRef, useEffect } from "react";
import { BiLogoHtml5 } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiAngularjsLine, RiNextjsLine } from "react-icons/ri";
import { SiAltiumdesigner } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "Angular JS", icon: RiAngularjsLine },
  { name: "React JS", icon: FaReact },
  { name: "Next JS", icon: RiNextjsLine },
  { name: "JavaScript", icon: TbBrandJavascript },
  { name: "HTML", icon: BiLogoHtml5 },
  { name: "CSS / SCSS / Bootstrap / Tailwind", icon: SiAltiumdesigner },
];

const MySkills = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    gsap.from(headerRef.current, {
      opacity: 0,
      y: 50,
      skewY: 5,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div className="relative min-h-[80vh] w-full bg-[#0d1117] pb-[50px]">
      <div id="service-section" className="relative z-10 p-8 w-[90%] mx-auto">
        <h2
          ref={headerRef}
          className="text-center text-white mt-0 mb-[50px] text-[40px] sm:text-[50px] font-bold"
        >
          My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skills.map(({ name, icon: Icon }, index) => (
            <div
              key={index}
              className="bg-black text-white p-6 rounded-lg border border-transparent shadow-md transition-all duration-300 ease-out hover:border-[#ffc107] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,193,7,0.5)] flex flex-col justify-center items-center text-center"
            >
              <Icon className="text-[#ffc107] text-4xl mb-4 transition-transform transform hover:rotate-[360deg] duration-500 hover:rotate-y-180" />
              <h3
                className="text-lg sm:text-xl font-bold text-center break-words leading-snug max-w-[200px]"
                style={{
                  wordBreak: "break-word",
                  whiteSpace: "normal",
                }}
              >
                {name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
