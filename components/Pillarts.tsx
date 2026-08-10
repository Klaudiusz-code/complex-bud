// Pillars.jsx
const Pillars = () => {
  const pillars = [
    {
      title: "Doświadczenie",
      desc: "32 lata w branży, w tym 16 lat na wymagającym rynku londyńskim. Pracowaliśmy przy projektach, gdzie margines błędu wynosił zero.",
      icon: (
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
            d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 7.5h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
          />
        </svg>
      ),
    },
    {
      title: "Kompleksowość",
      desc: "Od wylewek po montaż najdrobniejszych elementów dekoracyjnych. Jedna firma, jedna odpowiedzialność, jeden standard.",
      icon: (
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
            d="M11.42 15.17l-5.384 3.183A1.2 1.2 0 014.5 17.31V6.69a1.2 1.2 0 011.536-1.043l5.384 3.183m0 0l5.384-3.183A1.2 1.2 0 0118.34 6.69v10.62a1.2 1.2 0 01-1.536 1.043l-5.384-3.183m0 0V6.83"
          />
        </svg>
      ),
    },
    {
      title: "Jakość",
      desc: "Nigdy nie schodzimy poniżej naszych standardów wykonawczych. Różnica w budżecie — nie w staranności.",
      icon: (
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
            d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#020202] border-t border-neutral-200 dark:border-white/[0.04] transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="mb-12 sm:mb-16">
          <span className="text-[0.65rem] sm:text-xs font-bold text-[#60A5FA] tracking-[0.25em] uppercase">
            Dlaczego my
          </span>
          <div className="mt-4 flex items-center gap-6 lg:gap-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-white whitespace-nowrap transition-colors">
              Fundamenty naszej pracy
            </h2>
            <div className="hidden sm:block h-px flex-1 bg-neutral-200 dark:bg-white/[0.06] transition-colors" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="group relative bg-neutral-50 dark:bg-[#0A0A0A] border border-neutral-200 dark:border-white/[0.06] border-t-2 border-t-[#2563EB] hover:border-t-[#60A5FA] hover:bg-neutral-100 dark:hover:bg-[#0D0D0D] p-7 sm:p-8 lg:p-10 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-neutral-200 dark:bg-[#111] border border-[#2563EB]/20 group-hover:border-[#60A5FA]/40 flex items-center justify-center text-[#60A5FA] mb-6 transition-colors duration-300">
                {p.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white mb-3 group-hover:text-[#60A5FA] transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-neutral-500 dark:text-neutral-400 leading-relaxed font-light text-[0.9rem] sm:text-base group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors duration-300">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pillars;
