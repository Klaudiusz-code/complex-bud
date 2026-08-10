// Stats.jsx
const Stats = () => (
  <section className="border-b border-neutral-200 dark:border-white/[0.06] bg-neutral-50 dark:bg-[#0F0F0F] transition-colors duration-300">
    <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-200 dark:divide-white/[0.06]">
        {[
          { num: "32", suffix: "+", label: "Lat doświadczenia" },
          { num: "16", suffix: "", label: "Lat na rynku UK" },
          { num: "100", suffix: "%", label: "Zrealizowanych projektów" },
          { num: "0", suffix: "", label: "Kompromisów w jakości" },
        ].map((s) => (
          <div
            key={s.label}
            className="py-10 md:py-14 text-center px-3 md:px-4 first:pl-0 last:pr-0 group"
          >
            <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-1.5 sm:mb-2 group-hover:text-[#60A5FA] transition-colors duration-300">
              {s.num}
              <span className="text-2xl sm:text-3xl md:text-4xl text-neutral-400 dark:text-neutral-600 group-hover:text-[#60A5FA]/50 transition-colors">
                {s.suffix}
              </span>
            </div>
            <div className="text-[0.65rem] sm:text-xs text-neutral-500 dark:text-neutral-400 tracking-[0.15em] sm:tracking-[0.2em] uppercase font-medium transition-colors">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
