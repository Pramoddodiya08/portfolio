"use client";
import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from "./Header.module.css";

const menuItems = [
  { label: "Home", target: "" },
  { label: "About", target: "aboutMe" },
  { label: "Services", target: "service-section" },
  { label: "Contact", target: "contact-section" },
];

const Header: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSmoothScroll = (event: React.MouseEvent, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsFixed(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`${styles.header} ${
        isFixed ? styles.fixedHeader : ""
      } flex items-center justify-between px-6 py-4`}
    >
      <div className="text-[30px] font-bold text-[#ffc107] cursor-pointer">
        GENIUS
      </div>

      <nav className="hidden md:flex gap-[20px]">
        {menuItems.map(({ label, target }) => (
          <Link
            key={target}
            href={`#${target}`}
            className={styles.tab}
            onClick={(e) => handleSmoothScroll(e, target)}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="bg-white">
            <SheetHeader>
              <SheetTitle className="text-xl font-bold text-[#ffc107]">
                GENIUS
              </SheetTitle>
            </SheetHeader>

            <div className="mt-6 flex flex-col space-y-4">
              {menuItems.map(({ label, target }) => (
                <Link
                  key={target}
                  href={`#${target}`}
                  className="text-lg font-medium hover:text-[#ffc107] transition"
                  onClick={(e) => handleSmoothScroll(e, target)}
                >
                  {label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
