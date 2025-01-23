import React from "react";
import { FaCode, FaLaptop, FaPaintBrush, FaGitAlt } from "react-icons/fa";

function About() {
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
    <div
      className="min-h-[80vh] py-[50px] bg-[#0d1117] text-white flex items-center"
      id="aboutMe"
    >
      <div className=" max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto rounded-lg shadow-lg p-8">
        <h2 className="text-center text-[40px] md:text-[50px] font-extrabold mb-8">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-300">
          👋 Hi there! I&apos;m a passionate{" "}
          <span className="text-[#ffc107]">Front-End Developer</span> with
          expertise in crafting interactive, responsive, and visually appealing
          user interfaces. I specialize in turning creative ideas into
          functional web applications using modern frameworks and tools.
        </p>

        <div className="my-6">
          <h3 className="text-center text-2xl font-semibold text-[#ffc107] mb-8">
            My Technical Expertise
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {technicalExpertise.map((item, index) => (
              <div
                key={index}
                className="bg-[#1c1f26] p-6 rounded-lg flex items-center gap-4 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
              >
                {item.icon}
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
