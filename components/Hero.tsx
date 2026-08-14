"use client";

import { useState, useEffect } from "react";

type HeroProps = {
  data?: {
    title: string;
    opisSekcjiHero: string;
    przyciski: {
      przyciskPierwszy: string;
      przyciskDrugi: string;
    };
  };
};

const Hero = ({ data }: HeroProps) => {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80",
      alt: "Nowoczesny salon",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
      alt: "Elegancka łazienka",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80",
      alt: "Minimalistyczna kuchnia",
    },
  ];

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      6000,
    );
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    /* 
      NAPRAWA MOBILE: 
      items-start lg:items-center lg:justify-center
      Na mobile rozpoczynamy układanie od góry, na lg+ centrujemy w pionie.
    */
    <section className="relative min-h-screen flex items-start lg:items-center lg:justify-center pt-[104px] sm:pt-[112px] lg:pt-[120px] xl:pt-[128px] pb-28 sm:pb-32 bg-white dark:bg-black overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
            }`}
            style={{ transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)" }}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover opacity-40 dark:opacity-40"
            />
          </div>
        ))}

        <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent 0% via-white/40 dark:via-black/40 50% to-white dark:to-black 90%" />
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-transparent to-white/60 dark:to-black/60" />
      </div>

      {/* 
        NAPRAWA MOBILE: 
        mt-20 sm:mt-16 lg:mt-0
        Na mobile dodajemy ładny margines górny (żeby nie było na styk z menu), 
        a na lg+ zerujemy go, bo za to odpowiada justify-center.
      */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 text-center mt-20 sm:mt-16 lg:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-8xl font-black leading-[0.95] tracking-tighter text-neutral-900 dark:text-white mb-6 sm:mb-8 transition-colors">
          {data?.title || "Precyzja, która przetrwa lata"}
        </h1>

        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-xl mx-auto mb-10 sm:mb-14 font-light transition-colors">
          {data?.opisSekcjiHero || "a1."}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="#kontakt"
            className="group flex items-center justify-center gap-2.5 bg-[#C7A568] hover:bg-[#b8964f] text-white font-semibold px-8 sm:px-10 py-3.5 rounded-sm transition-all duration-300 tracking-wide shadow-xl shadow-[#C7A568]/15"
          >
            {data?.przyciski?.przyciskPierwszy || "Bezpłatna wycena"}
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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

          <a
            href="#realizacje"
            className="border border-neutral-900/20 dark:border-white/20 text-neutral-900 dark:text-white hover:border-neutral-900/40 dark:hover:border-white/40 font-medium px-8 sm:px-10 py-3.5 rounded-sm transition-colors duration-300 backdrop-blur-sm"
          >
            {data?.przyciski?.przyciskDrugi || "Zobacz realizacje"}
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-20 bg-white/90 dark:bg-[#0A0A0A]/90 backdrop-blur-xl border-t border-neutral-200 dark:border-white/[0.06] transition-colors duration-300">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 h-14 sm:h-16 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-6 text-xs text-neutral-500 dark:text-neutral-400 font-medium">
            <span className="flex items-center gap-2">
              <svg
                className="w-3.5 h-3.5 text-[#C7A568]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
              Ubezpieczona realizacja
            </span>

            <span className="flex items-center gap-2">
              <svg
                className="w-3.5 h-3.5 text-[#C7A568]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              +48 123 456 789
            </span>
          </div>

          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-1.5 sm:gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`transition-all duration-500 rounded-full ${
                    i === current
                      ? "w-8 h-2 bg-[#C7A568]"
                      : "w-2 h-2 bg-neutral-300 dark:bg-white/20 hover:bg-neutral-400 dark:hover:bg-white/40"
                  }`}
                  aria-label={`Przejdź do slajdu ${i + 1}`}
                />
              ))}
            </div>

            <div className="w-20 sm:w-24 h-[2px] bg-neutral-200 dark:bg-white/10 rounded-full overflow-hidden hidden sm:block">
              <div
                key={current}
                className="h-full bg-[#C7A568]/80 rounded-full animate-slide-progress"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 font-medium">
            <svg
              className="w-3.5 h-3.5 text-[#C7A568]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Pon-Pt: 8:00 - 17:00
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideProgress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-slide-progress {
          animation: slideProgress 6s linear forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;
