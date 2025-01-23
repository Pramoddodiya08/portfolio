import React from "react";
import {
  FaCode,
  FaLaptop,
  FaRegComments,
  FaShoppingCart,
  FaServer,
  FaCogs,
} from "react-icons/fa";
import styles from "./Services.module.css";

function Services() {
  return (
    <div id="service-section" className="bg-[#0d1117]">
      <h2
        className={`text-center m-[20px] mt-0  pt-[50px] mb-[50px] text-[50px] font-bold ${styles.animateTitle}`}
      >
        My Services
      </h2>

      <div className="grid grid-cols-2 gap-4">
        <div className="ml-[30%]">
          <div className="bg-black text-white p-6 m-5 rounded-lg border border-transparent shadow-md transition-all duration-300 ease-out hover:border-[#ffc107] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,193,7,0.5)]">
            <div className="flex items-center justify-center mb-4">
              <FaCode className="text-[#ffc107] text-4xl transition-transform transform hover:rotate-[360deg] duration-500 hover:rotate-y-180" />
            </div>
            <h3 className="text-xl font-bold text-center">
              Web Development Services
            </h3>
            <p className="mt-2 text-sm text-center">
              Providing high-quality web development services for businesses to
              create impactful online presence.
            </p>
          </div>
          <div className="bg-black text-white p-6 m-5 rounded-lg border border-transparent shadow-md transition-all duration-300 ease-out hover:border-[#ffc107] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,193,7,0.5)]">
            <div className="flex items-center justify-center mb-4">
              <FaLaptop className="text-[#ffc107] text-4xl transition-transform transform hover:rotate-[360deg] duration-500 hover:rotate-y-180" />
            </div>
            <h3 className="text-xl font-bold text-center">
              Single Page Application (SPA) Development
            </h3>
            <p className="mt-2 text-sm text-center">
              Specializing in building fast and efficient SPAs using React and
              Next.js for optimal performance.
            </p>
          </div>
          <div className="bg-black text-white p-6 m-5 rounded-lg border border-transparent shadow-md transition-all duration-300 ease-out hover:border-[#ffc107] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,193,7,0.5)]">
            <div className="flex items-center justify-center mb-4">
              <FaCogs className="text-[#ffc107] text-4xl transition-transform transform hover:rotate-[360deg] duration-500 hover:rotate-y-180" />
            </div>
            <h3 className="text-xl font-bold text-center">
              Custom Component Libraries
            </h3>
            <p className="mt-2 text-sm text-center">
              Designing and building reusable, custom component libraries for
              seamless UI development.
            </p>
          </div>
        </div>
        <div className="mr-[30%]">
          <div className="bg-black text-white p-6 m-5 rounded-lg border border-transparent shadow-md transition-all duration-300 ease-out hover:border-[#ffc107] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,193,7,0.5)]">
            <div className="flex items-center justify-center mb-4">
              <FaRegComments className="text-[#ffc107] text-4xl transition-transform transform hover:rotate-[360deg] duration-500 hover:rotate-y-180" />
            </div>
            <h3 className="text-xl font-bold text-center">
              Frontend Development Consulting
            </h3>
            <p className="mt-2 text-sm text-center">
              Providing expert consulting to improve frontend architecture, best
              practices, and code maintainability.
            </p>
          </div>
          <div className="bg-black text-white p-6 m-5 rounded-lg border border-transparent shadow-md transition-all duration-300 ease-out hover:border-[#ffc107] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,193,7,0.5)]">
            <div className="flex items-center justify-center mb-4">
              <FaServer className="text-[#ffc107] text-4xl transition-transform transform hover:rotate-[360deg] duration-500 hover:rotate-y-180" />
            </div>
            <h3 className="text-xl font-bold text-center">
              SSR (Server-Side Rendering) with Next.js
            </h3>
            <p className="mt-2 text-sm text-center">
              Helping you create SEO-friendly, fast, and dynamic websites with
              SSR in Next.js.
            </p>
          </div>
          <div className="bg-black text-white p-6 m-5 rounded-lg border border-transparent shadow-md transition-all duration-300 ease-out hover:border-[#ffc107] hover:scale-105 hover:shadow-[0_0_20px_rgba(255,193,7,0.5)]">
            <div className="flex items-center justify-center mb-4">
              <FaShoppingCart className="text-[#ffc107] text-4xl transition-transform transform hover:rotate-[360deg] duration-500 hover:rotate-y-180" />
            </div>
            <h3 className="text-xl font-bold text-center">
              E-commerce Solutions
            </h3>
            <p className="mt-2 text-sm text-center">
              Creating scalable and efficient e-commerce platforms to drive
              sales and provide a seamless user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
