// FastQuote.jsx
"use client";

import { useState } from "react";

const FastQuote = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", size: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormData({ name: "", phone: "", size: "" });
  };

  return (
    <section className="relative bg-neutral-50 dark:bg-[#0A0A0A] border-y border-neutral-200 dark:border-white/[0.04] overflow-hidden transition-colors duration-300">
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#60A5FA] hidden md:block" />

      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14">
          <div className="lg:max-w-sm text-center lg:text-left shrink-0">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#60A5FA]" />
              <span className="text-[0.65rem] sm:text-xs font-bold text-[#60A5FA] tracking-[0.25em] uppercase">
                Szybki kontakt
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white mb-3 leading-tight transition-colors">
              Zamów telefon od eksperta
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed max-w-sm mx-auto lg:mx-0 transition-colors">
              Zostaw numer – oddzwonimy i podamy wstępne koszty w 24 godziny.
            </p>
          </div>

          <div className="w-full lg:max-w-xl">
            {sent ? (
              <div className="bg-[#60A5FA]/10 border border-[#60A5FA]/20 text-[#60A5FA] rounded-sm px-6 py-6 sm:py-8 text-center font-medium text-sm">
                Dziękujemy! Odezwiemy się w ciągu 24 godzin.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_auto] gap-2.5 sm:gap-3"
              >
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Imię"
                  className="bg-white dark:bg-white/[0.03] border border-neutral-300 dark:border-white/[0.06] rounded-sm px-4 py-3.5 text-neutral-900 dark:text-white text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-[#60A5FA]/50 transition-colors font-light"
                />
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  placeholder="Numer telefonu"
                  className="bg-white dark:bg-white/[0.03] border border-neutral-300 dark:border-white/[0.06] rounded-sm px-4 py-3.5 text-neutral-900 dark:text-white text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-[#60A5FA]/50 transition-colors font-light"
                />
                <input
                  type="text"
                  value={formData.size}
                  onChange={(e) =>
                    setFormData({ ...formData, size: e.target.value })
                  }
                  placeholder="Metraż (opcjonalnie)"
                  className="bg-white dark:bg-white/[0.03] border border-neutral-300 dark:border-white/[0.06] rounded-sm px-4 py-3.5 text-neutral-900 dark:text-white text-sm placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-[#60A5FA]/50 transition-colors font-light"
                />
                <button
                  type="submit"
                  className="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold px-6 lg:px-7 py-3.5 rounded-sm transition-all duration-300 tracking-wide text-sm flex items-center justify-center gap-2 whitespace-nowrap hover:shadow-lg hover:shadow-[#60A5FA]/10 sm:col-span-2 lg:col-span-1"
                >
                  Zadzwońcie
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FastQuote;
