"use client";
import React, { useEffect, useRef } from "react";
import {
  FaCode,
  FaLaptop,
  FaRegComments,
  FaShoppingCart,
  FaServer,
  FaCogs,
} from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Services.module.css";

gsap.registerPlugin(ScrollTrigger);

function Services() {
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

  const services = [
    {
      icon: (
        <FaCode className="text-[#ffc107] text-4xl transition-transform transform hover:rotate-[360deg] duration-500" />
      ),
      title: "Web Development Services",
      description:
        "Providing high-quality web development services for businesses to create impactful online presence.",
    },
    {
      icon: (
        <FaLaptop className="text-[#ffc107] text-4xl transition-transform transform hover:rotate-[360deg] duration-500" />
      ),
      title: "Single Page Application (SPA) Development",
      description:
        "Building fast and efficient SPAs using React and Next.js for optimal performance.",
    },
    {
      icon: (
        <FaCogs className="text-[#ffc107] text-4xl transition-transform transform hover:rotate-[360deg] duration-500" />
      ),
      title: "Custom Component Libraries",
      description:
        "Designing and building reusable, custom component libraries for seamless UI development.",
    },
    {
      icon: (
        <FaRegComments className="text-[#ffc107] text-4xl transition-transform transform hover:rotate-[360deg] duration-500" />
      ),
      title: "Frontend Development Consulting",
      description:
        "Providing expert consulting to improve frontend architecture, best practices, and code maintainability.",
    },
    {
      icon: (
        <FaServer className="text-[#ffc107] text-4xl transition-transform transform hover:rotate-[360deg] duration-500" />
      ),
      title: "SSR (Server-Side Rendering) with Next.js",
      description:
        "Helping you create SEO-friendly, fast, and dynamic websites with SSR in Next.js.",
    },
    {
      icon: (
        <FaShoppingCart className="text-[#ffc107] text-4xl transition-transform transform hover:rotate-[360deg] duration-500" />
      ),
      title: "E-commerce Solutions",
      description:
        "Creating scalable and efficient e-commerce platforms to drive sales and provide a seamless user experience.",
    },
  ];

  return (
    <section
      id="service-section"
      className="bg-[#0d1117] py-12 sm:py-16 md:py-20"
    >
      <h2
        ref={HeaderRef}
        className={`text-center text-white mb-12 text-[32px] sm:text-[40px] md:text-[50px] font-bold ${styles.animateTitle}`}
      >
        My Services
      </h2>

      <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-black text-white p-6 rounded-lg border border-transparent shadow-md transition-all duration-300 ease-out hover:border-[#ffc107] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,193,7,0.5)]"
          >
            <div className="flex items-center justify-center mb-4">
              {service.icon}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-center mb-2">
              {service.title}
            </h3>
            <p className="text-sm sm:text-base text-center text-gray-300">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
