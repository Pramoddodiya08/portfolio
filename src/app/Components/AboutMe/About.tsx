"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { FaCode, FaLaptop, FaPaintBrush, FaGitAlt } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const HeaderRef = useRef(null);

  useEffect(() => {
    if (!HeaderRef.current) return;

    gsap.from(HeaderRef.current, {
      opacity: 0,
      y: 50,
      skewY: 5,
      duration: 2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: HeaderRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  const technicalExpertise = [
    {
      icon: <FaCode className="text-3xl text-[#ffc107]" />,
      title: "Frameworks & Libraries",
      description: "Angular, React, Next.js",
    },
    {
      icon: <FaLaptop className="text-3xl text-[#ffc107]" />,
      title: "Web Technologies",
      description: "HTML5, CSS3, JavaScript (ES6+)",
    },
    {
      icon: <FaPaintBrush className="text-3xl text-[#ffc107]" />,
      title: "Styling Tools",
      description: "Bootstrap, Tailwind CSS, SCSS",
    },
    {
      icon: <FaGitAlt className="text-3xl text-[#ffc107]" />,
      title: "Version Control",
      description: "Git & GitHub",
    },
    {
      icon: <FaCode className="text-3xl text-[#ffc107]" />,
      title: "Other Skills",
      description:
        "Cross-browser compatibility, responsive design, code optimization",
    },
  ];

  return (
    <section
      id="aboutMe"
      className="min-h-[80vh] py-10 sm:py-16 md:py-20 bg-[#0d1117] text-white flex items-center"
    >
      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] mx-auto rounded-lg shadow-lg p-6 sm:p-8 md:p-10 bg-[#11141a]">
        <h2
          ref={HeaderRef}
          className="text-center text-[32px] sm:text-[38px] md:text-[48px] font-extrabold mb-6 sm:mb-8"
        >
          About Me
        </h2>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 text-center md:text-left">
          👋 Hi there! I&apos;m a passionate{" "}
          <span className="text-[#ffc107]">Front-End Developer</span> who loves
          crafting interactive, responsive, and visually appealing user
          interfaces. I specialize in turning creative ideas into functional web
          applications using modern frameworks and tools.
        </p>

        <div className="my-10">
          <h3 className="text-center text-2xl sm:text-3xl font-semibold text-[#ffc107] mb-8">
            My Technical Expertise
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {technicalExpertise.map((item, index) => (
              <div
                key={index}
                className="bg-[#1c1f26] p-5 sm:p-6 rounded-lg flex items-start gap-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                <div className="flex-shrink-0">{item.icon}</div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1 sm:mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
