"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/components/ThemeContext";

const WelcomeScreen = () => {
  const { isDark, toggleTheme } = useTheme();

  const [showUI, setShowUI] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const shouldShowScreen = document.documentElement.classList.contains(
      "show-welcome-screen",
    );
    if (!shouldShowScreen) return;

    // USUNIĘTO OPÓŹNIENIE - Skracamy do 1ms i od razu pokazujemy UI
    const timer = setTimeout(() => {
      setIsVisible(true);
      setShowUI(true);
    }, 1);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  const handleEnter = () => {
    if (isExiting) return;

    document.body.style.overflow = "";
    setIsExiting(true);

    setTimeout(() => {
      setIsVisible(false);
      document.documentElement.classList.remove("show-welcome-screen");
      document.documentElement.style.backgroundColor = "";
      localStorage.setItem("complex-bud-visited", "true");

      // PŁYNNE USUNIĘCIE CZARNEJ ŚCIANY Z layout.tsx
      const blockingLayer = document.getElementById("blocking-layer");
      if (blockingLayer) {
        blockingLayer.style.opacity = "0";
        setTimeout(() => blockingLayer.remove(), 700);
      }
    }, 700);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden transition-all duration-700 ease-out ${
        isExiting ? "opacity-0 scale-[1.02]" : "opacity-100 scale-100"
      }`}
      style={{ backgroundColor: isDark ? "#050505" : "#ffffff" }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85"
          alt=""
          className="w-full h-full object-cover scale-110 opacity-20 dark:opacity-15 transition-opacity duration-700"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-white/90 dark:from-[#050505] dark:via-[#050505]/60 dark:to-[#050505]/90 transition-colors duration-700" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 text-center mb-24 sm:mb-28">
        <div
          className={`transition-all duration-500 ease-out ${showUI ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <img
            src="/logos.svg"
            alt="Komplex-Bud"
            className="w-56 md:w-64 lg:w-80 h-auto mx-auto"
            draggable={false}
          />
        </div>

        <div
          className={`h-px bg-[#C7A568]/40 mt-10 sm:mt-12 lg:mt-14 transition-all duration-700 ease-out ${showUI ? "w-28 sm:w-36 md:w-48 opacity-100" : "w-0 opacity-0"}`}
        />

        <p
          className={`text-[10px] sm:text-xs md:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-light text-neutral-600 dark:text-neutral-400 mt-8 sm:mt-10 lg:mt-12 transition-colors duration-300 ${showUI ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          Witajcie na stronie Komplex-Bud
        </p>

        <div
          className={`mt-10 sm:mt-12 lg:mt-14 transition-all duration-500 delay-100 ${showUI ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
        >
          <button
            onClick={handleEnter}
            className="group flex items-center justify-center gap-2.5 bg-neutral-900 dark:bg-white/10 hover:bg-neutral-800 dark:hover:bg-white/15 text-white font-bold px-8 sm:px-10 py-3.5 sm:py-4 rounded-sm transition-all duration-300 tracking-[0.15em] uppercase text-[0.7rem] sm:text-xs shadow-xl shadow-black/20 dark:shadow-none border border-transparent dark:border-white/10"
          >
            Wejdź
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`absolute bottom-6 sm:bottom-8 left-0 right-0 flex justify-center z-20 transition-all duration-500 delay-200 ${showUI ? "opacity-100" : "opacity-0"}`}
      >
        <button
          onClick={toggleTheme}
          aria-label="Zmień motyw"
          className="relative w-[52px] h-[28px] rounded-full bg-neutral-200 dark:bg-neutral-800 transition-colors duration-300 focus:outline-none active:scale-95"
        >
          <span
            className={`absolute top-[2px] left-[2px] w-[24px] h-[24px] bg-white dark:bg-[#C7A568] rounded-full shadow-md dark:shadow-[0_0_12px_rgba(199,165,104,0.3)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center ${
              isDark ? "translate-x-[24px]" : "translate-x-0"
            }`}
          >
            {isDark ? (
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                className="w-3.5 h-3.5 text-amber-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
          </span>
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
