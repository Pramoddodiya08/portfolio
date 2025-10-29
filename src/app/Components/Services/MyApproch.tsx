"use client";
import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function MyApproch() {
  return (
    <div
      className="min-h-[80vh] py-[50px] bg-[#0d1117] text-white flex items-center"
      id="Approch"
    >
      <div className=" max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto rounded-lg shadow-lg p-8">
        <div className="my-6 bg-[#1c1f26] p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-[#ffc107] mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.19a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
            My Approach
          </h3>
          <p className="text-gray-300 leading-relaxed">
            I craft code like an artist, blending technical precision with
            creative vision. My philosophy centers on developing clean,
            maintainable solutions that not only solve problems but also delight
            users. I transform complex challenges into elegant, scalable
            applications that push the boundaries of web development.
          </p>
        </div>

        <div className="my-6 bg-[#1c1f26] p-6 rounded-lg">
          <h3 className="text-2xl font-semibold text-[#ffc107] mb-4 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12l-3 3m0 0l-3-3m3 3V9"
              />
            </svg>
            Why Choose Me?
          </h3>
          <ul className="list-none pl-0 text-gray-300 space-y-3">
            {[
              {
                emoji: "💡",
                text: "Creative Problem Solver with Meticulous Attention to Detail",
              },
              {
                emoji: "🚀",
                text: "Agile Learner, Constantly Evolving with Emerging Technologies",
              },
              {
                emoji: "🌟",
                text: "Dedicated to Delivering Exceptional Quality and Timely Solutions",
              },
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center bg-[#2c3036] p-3 rounded-md hover:bg-[#3c4046] transition-all duration-300"
              >
                <span className="mr-3 text-xl">{item.emoji}</span>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyApproch;
