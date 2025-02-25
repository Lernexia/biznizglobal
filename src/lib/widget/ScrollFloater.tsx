"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function ScrollFloater() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / windowHeight) * 100;
      setScrollProgress(progress);

      setScrollDirection(scrollTop > lastScrollY ? "down" : "up");
      setLastScrollY(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);


  // Circle properties
  const radius = 20; // Adjust size
  const circumference = 2 * Math.PI * radius; // Full circle length
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <React.Fragment>

      {scrollProgress > 1 && (
        <button
          onClick={() => window.scrollTo({ top: scrollDirection === "down" ? document.body.scrollHeight : 0, behavior: "smooth" })}
          className="scroll-floater flex bg-gold2/50 items-center justify-center rounded-full shadow-lg"
        >
          <svg width="50" height="50" viewBox="0 0 50 50" className="absolute z-[-1] bg-gold2/50 shadow-lg rounded-full">
            <circle
              cx="25"
              cy="25"
              r={radius}
              fill="none"
              stroke="#D2A024"
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-200"
            />
          </svg>
          {scrollDirection === "down" ? (
            <ArrowDown size={22} className="text-white relative z-[1]" />
          ) : (
            <ArrowUp size={22} className="text-white relative z-[1]" />
          )}
        </button>
      )}
    </React.Fragment>
  );
}
