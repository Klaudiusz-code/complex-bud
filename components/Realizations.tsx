// Realizations.jsx
const Realizations = () => {
  const realizations = [
    {
      img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=1200&fit=crop&q=80",
      title: "Salon modern classic",
      cat: "Pod klucz",
      span: true,
    },
    {
      img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=1000&fit=crop&q=80",
      title: "Kuchnia z wyspą",
      cat: "Adaptacja",
      span: false,
    },
    {
      img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=1000&fit=crop&q=80",
      title: "Kamień naturalny",
      cat: "Pod klucz",
      span: false,
    },
    {
      img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=1000&fit=crop&q=80",
      title: "Master suite",
      cat: "Remont",
      span: false,
    },
    {
      img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=1000&fit=crop&q=80",
      title: "Open space",
      cat: "Adaptacja",
      span: false,
    },
    {
      img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=1000&fit=crop&q=80",
      title: "Strefa wejściowa",
      cat: "Pod klucz",
      span: false,
    },
    {
      img: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=1000&fit=crop&q=80",
      title: "Łazienka premium",
      cat: "Pod klucz",
      span: false,
    },
  ];

  return (
    <section
      id="realizacje"
      className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#000000] transition-colors duration-300"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[#60A5FA]" />
              <span className="text-[0.65rem] sm:text-xs font-bold text-[#60A5FA] tracking-[0.25em] uppercase">
                Realizacje
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white transition-colors">
              Wykonane projekty
            </h2>
          </div>
          <a
            href="#kontakt"
            className="group text-neutral-500 hover:text-neutral-900 dark:hover:text-white text-sm font-medium flex items-center gap-3 transition-colors"
          >
            Chcesz podobny efekt?
            <svg
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-[2px] sm:gap-[3px]">
          {realizations.map((r, index) => (
            <div
              key={r.title}
              className={`group relative overflow-hidden cursor-pointer ${index === 0 ? "lg:row-span-2 aspect-[3/4] lg:aspect-auto" : "aspect-[3/4]"}`}
            >
              <img
                src={r.img}
                alt={r.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/90 dark:from-black/90 via-white/20 dark:via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-3.5 sm:p-4 md:p-6">
                <span className="text-[0.55rem] sm:text-[0.6rem] text-[#60A5FA] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase block mb-1 sm:mb-1.5">
                  {r.cat}
                </span>
                <h3 className="text-neutral-900 dark:text-white text-xs sm:text-sm md:text-lg font-medium tracking-tight translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                  {r.title}
                </h3>
              </div>
              <div className="absolute inset-0 border border-[#60A5FA]/0 group-hover:border-[#60A5FA]/30 transition-colors duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Realizations;
