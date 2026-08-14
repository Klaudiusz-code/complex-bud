"use client";

import { useState } from "react";

type FastQuoteProps = {
  data?: {
    etykieta: string;
    opis: string;
    uslugiSzybkiKontaktFormularz?: {
      nazwaUslugi: string;
    }[];
  };
};

const FastQuote = ({ data }: FastQuoteProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormData({ name: "", phone: "", service: "" });
  };

  // Klasa bazowa dla inputów, żeby nie powielać kodu
  const inputBaseClass =
    "w-full bg-white dark:bg-white/[0.04] border border-neutral-200 dark:border-white/[0.08] px-4 py-3.5 text-neutral-900 dark:text-white text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-600 font-light transition-all duration-200 focus:outline-none focus:border-[#C7A568] focus:ring-1 focus:ring-[#C7A568]/20";

  return (
    <section className="relative bg-neutral-50 dark:bg-[#0A0A0A] border-y border-neutral-200 dark:border-white/[0.04] overflow-hidden transition-colors duration-300">
      {/* DEKORACYJNA LINIA - Gradient zamiast twardego prostokąta */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C7A568]/60 to-transparent hidden md:block" />

      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
          {/* LEWA STRONA */}
          <div className="lg:max-w-sm text-center lg:text-left shrink-0 w-full lg:w-auto">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#C7A568]" />
              <span className="text-[0.65rem] sm:text-xs font-bold text-[#C7A568] tracking-[0.25em] uppercase">
                Szybki kontakt
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-[2rem] xl:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-3 leading-tight transition-colors">
              {data?.etykieta || "Szybki kontakt"}
            </h2>

            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0 transition-colors">
              {data?.opis ||
                "Zostaw numer – oddzwonimy i podamy wstępne koszty w 24 godziny."}
            </p>
          </div>

          {/* FORMULARZ */}
          <div className="w-full lg:max-w-3xl">
            {sent ? (
              <div className="flex items-center justify-center gap-3 bg-[#C7A568]/10 border border-[#C7A568]/20 text-[#C7A568] rounded-sm px-6 py-8 text-center font-medium text-sm animate-fade-in">
                {/* Dodana ikonka "ptaszka" dla lepszego efektu wizualnego */}
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Dziękujemy! Odezwiemy się w ciągu 24 godzin.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1.2fr_auto] gap-2.5 lg:gap-0"
              >
                {/* 
                  SEAMLESS GROUP LOGIC: 
                  Na lg usuwamy zaokrąglenia z wewnętrznych stron i obramowania między polami,
                  żeby stworzyć jeden spójny blok. Na mobile zostają normalne kwadraty.
                */}
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Imię"
                  className={`${inputBaseClass} rounded-sm lg:rounded-r-none lg:border-r-0`}
                />

                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Numer telefonu"
                  className={`${inputBaseClass} rounded-sm sm:col-span-1 lg:rounded-none lg:border-r-0`}
                />

                <div className="relative sm:col-span-2 lg:col-span-1">
                  <select
                    required
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className={`${inputBaseClass} w-full appearance-none cursor-pointer rounded-sm lg:rounded-none lg:border-r-0 pr-10`}
                  >
                    <option value="" disabled>
                      Wybierz usługę
                    </option>
                    {data?.uslugiSzybkiKontaktFormularz?.map(
                      (usluga, index) => (
                        <option
                          key={`${usluga.nazwaUslugi}-${index}`}
                          value={usluga.nazwaUslugi}
                          className="bg-white dark:bg-[#111111] text-neutral-900 dark:text-white"
                        >
                          {usluga.nazwaUslugi}
                        </option>
                      ),
                    )}
                  </select>
                  {/* Customowa strzałka SVG dla Selecta */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <svg
                      className="w-4 h-4 text-neutral-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-[#C7A568] hover:bg-[#b8964f] active:scale-[0.98] text-white font-bold px-6 lg:px-8 py-3.5 rounded-sm transition-all duration-200 tracking-wide text-sm flex items-center justify-center gap-2.5 whitespace-nowrap shadow-sm hover:shadow-lg hover:shadow-[#C7A568]/20 sm:col-span-2 lg:col-span-1 lg:rounded-l-none"
                >
                  Czekam na tlefon
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441-.527-.734-.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default FastQuote;
