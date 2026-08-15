"use client";

import { Fragment, useState } from "react";
import { useTheme } from "@/components/ThemeContext";

const navLinks = [
  { label: "Oferta", href: "#oferta" },
  { label: "O nas", href: "#o-nas" },
  { label: "Realizacje", href: "#realizacje" },
  { label: "Opinie", href: "#opinie" },
  { label: "Kontakt", href: "#kontakt" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-11 left-0 right-0 z-40 bg-white/90 dark:bg-[#0A0A0A]/90 backdrop-blur-2xl border-b border-neutral-200 dark:border-white/[0.04] transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 h-14 sm:h-16 lg:h-[72px] xl:h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3.5 group">
          <img
            src="/logos.svg"
            alt="Komplex Bud"
            className="h-9 xl:h-12 transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        <div className="hidden lg:flex items-center h-full">
          {navLinks.map((l, i) => (
            <Fragment key={l.href}>
              {i > 0 && (
                <span className="w-px h-4 bg-neutral-200 dark:bg-white/10 mx-5 lg:mx-6 xl:mx-7 transition-colors" />
              )}
              <a
                href={l.href}
                className="text-[0.75rem] tracking-[0.12em] uppercase font-medium transition-colors duration-300 text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white"
              >
                {l.label}
              </a>
            </Fragment>
          ))}

          <div className="w-px h-4 bg-neutral-200 dark:bg-white/10 mx-5 lg:mx-6 xl:mx-7 transition-colors" />

          <button
            onClick={toggleTheme}
            className="relative w-[56px] h-[30px] lg:w-[60px] lg:h-[32px] rounded-full bg-neutral-200 dark:bg-neutral-800 transition-colors duration-300 focus:outline-none mr-3 active:scale-95"
            aria-label="Zmień motyw"
          >
            <span
              className={`absolute top-[3px] left-[3px] w-[24px] h-[24px] lg:w-[26px] lg:h-[26px] bg-white dark:bg-[#C7A568] rounded-full shadow-md dark:shadow-[0_0_12px_rgba(199,165,104,0.4)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center ${
                isDark
                  ? "translate-x-[24px] lg:translate-x-[28px]"
                  : "translate-x-0"
              }`}
            >
              {isDark ? (
                <svg
                  className="w-3 h-3 lg:w-3.5 lg:h-3.5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
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

          <a
            href="#kontakt"
            className="group/btn flex items-center gap-2 text-[0.75rem] font-bold px-5 lg:px-6 xl:px-7 py-2.5 lg:py-3 xl:py-3.5 rounded-sm transition-all duration-300 tracking-wide uppercase bg-neutral-900 dark:bg-white/[0.08] hover:bg-neutral-800 dark:hover:bg-white/[0.15] text-white border border-neutral-900 dark:border-white/[0.1] hover:border-neutral-800 dark:hover:border-white/[0.2]"
          >
            Wycena
            <svg
              className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform"
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
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="relative w-[48px] h-[26px] sm:w-[52px] sm:h-[28px] rounded-full bg-neutral-200 dark:bg-neutral-800 transition-colors duration-300 focus:outline-none active:scale-95"
            aria-label="Zmień motyw"
          >
            <span
              className={`absolute top-[2px] left-[2px] w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] bg-white dark:bg-[#C7A568] rounded-full shadow-md dark:shadow-[0_0_10px_rgba(199,165,104,0.4)] transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center ${
                isDark
                  ? "translate-x-[22px] sm:translate-x-[24px]"
                  : "translate-x-0"
              }`}
            >
              {isDark ? (
                <svg
                  className="w-3 h-3 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-3 h-3.5 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
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

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 transition-colors text-neutral-900 dark:text-white"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden backdrop-blur-2xl border-t px-6 py-8 space-y-1 transition-colors bg-white/95 dark:bg-[#0A0A0A]/95 border-neutral-200 dark:border-white/[0.04]">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-lg font-light py-3 border-b last:border-0 transition-colors text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white border-neutral-100 dark:border-white/[0.04]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 inline-flex items-center justify-center gap-2.5 w-full font-bold px-7 py-4 rounded-sm transition-all duration-200 tracking-wide uppercase bg-neutral-900 dark:bg-white/[0.08] text-white border border-neutral-900 dark:border-white/[0.1]"
          >
            Zamów wycenę
            <svg
              className="w-4 h-4"
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
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
