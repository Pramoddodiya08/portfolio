"use client";
import React, { useState, useEffect } from "react";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);

  const handleSmoothScroll = (event: any, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isFixed ? styles.fixedHeader : ""}`}>
      <div className="text-[30px] font-bold text-[#ffc107] cursor-pointer">
        Genius
      </div>

      <nav className="flex gap-[20px]">
        <a
          href="#"
          className={styles.tab}
          onClick={(e) => handleSmoothScroll(e, "")}
        >
          Home
        </a>
        <a
          href="#aboutMe"
          className={styles.tab}
          onClick={(e) => handleSmoothScroll(e, "aboutMe")}
        >
          About
        </a>
        <a
          href="#service-section"
          className={styles.tab}
          onClick={(e) => handleSmoothScroll(e, "service-section")}
        >
          Services
        </a>
        <a
          href="#contact-section"
          className={styles.tab}
          onClick={(e) => handleSmoothScroll(e, "contact-section")}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
