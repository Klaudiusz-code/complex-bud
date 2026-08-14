"use client";

import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Opóźnienie 1.2s, żeby nie kolidowało z ładowaniem fontów i obrazków
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-[100] px-4 sm:px-6 pb-4 sm:pb-6 transition-all duration-700 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0 pointer-events-none"
      }`}
    >
      <div className="max-w-3xl mx-auto bg-white/70 dark:bg-[#0A0A0A]/70 backdrop-blur-2xl border border-neutral-200/60 dark:border-white/[0.06] rounded-xl sm:rounded-2xl shadow-2xl dark:shadow-black/40 overflow-hidden">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#C7A568]/60 to-transparent" />

        <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#C7A568]/10 border border-[#C7A568]/20 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
              <svg
                className="w-4 h-4 text-[#C7A568]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </div>

            <p className="text-[0.72rem] sm:text-xs text-neutral-500 dark:text-neutral-400 font-medium leading-relaxed tracking-wide">
              Ta strona używa plików cookie, aby zapewnić Ci najlepsze
              doświadczenie.
              <a
                href="/polityka-prywatnosci"
                className="text-[#C7A568] hover:underline underline-offset-2 ml-1 transition-colors"
              >
                Polityka prywatności
              </a>
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 w-full sm:w-auto justify-end">
            <button
              onClick={handleDecline}
              className="text-[0.65rem] sm:text-[0.7rem] font-semibold tracking-wider uppercase text-neutral-400 dark:text-neutral-600 hover:text-neutral-600 dark:hover:text-neutral-300 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg transition-all duration-300"
            >
              Odrzuć
            </button>
            <button
              onClick={handleAccept}
              className="text-[0.65rem] sm:text-[0.7rem] font-bold tracking-wider uppercase text-[#C7A568] border border-[#C7A568]/40 hover:bg-[#C7A568] hover:text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#C7A568]/10"
            >
              Akceptuję
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
