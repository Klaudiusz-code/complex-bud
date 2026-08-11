const Services = () => (
  <section
    id="oferta"
    className="py-16 sm:py-20 md:py-28 lg:py-36 bg-white dark:bg-black transition-colors duration-300"
  >
    <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
      <div className="mb-12 md:mb-20 pb-8 md:pb-12 border-b border-neutral-200 dark:border-white/[0.06]">
        <div className="flex items-center gap-4 mb-6 md:mb-8">
          <div className="w-10 md:w-12 h-px bg-[#C7A568]" />
          <span className="text-[0.65rem] md:text-xs font-bold text-[#C7A568] tracking-[0.3em] uppercase">
            Oferta
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-neutral-900 dark:text-white transition-colors">
          Zakres prac
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        {/* Karta 1 */}
        <div className="group relative h-[240px] sm:h-[300px] md:h-[380px] overflow-hidden cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=800&h=600&fit=crop&q=80"
            alt="Wykończenia"
            className="absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-40 group-hover:opacity-70 dark:group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-white/60 dark:via-black/60 to-white/30 dark:to-black/30" />
          <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-sm bg-[#C7A568]/10 border border-[#C7A568]/20 flex items-center justify-center text-[#C7A568] mb-4 md:mb-6 backdrop-blur-sm">
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight mb-2 md:mb-3 transition-colors">
              Wykończenia pod klucz
            </h3>
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              Od wylewek po zamontowanie ostatniej lampy dekoracyjnej. Oddajemy
              wnętrze gotowe do zamieszkania.
            </p>
          </div>
        </div>

        {/* Karta 2 */}
        <div className="group relative h-[240px] sm:h-[300px] md:h-[380px] overflow-hidden cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&q=80"
            alt="Remonty"
            className="absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-40 group-hover:opacity-70 dark:group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-white/60 dark:via-black/60 to-white/30 dark:to-black/30" />
          <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-sm bg-[#C7A568]/10 border border-[#C7A568]/20 flex items-center justify-center text-[#C7A568] mb-4 md:mb-6 backdrop-blur-sm">
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
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
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight mb-2 md:mb-3 transition-colors">
              Remonty generalne
            </h3>
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              Całkowita transformacja przestrzeni — od demontażu po finalny
              efekt zgodny z wizją.
            </p>
          </div>
        </div>

        {/* Karta 3 */}
        <div className="group relative h-[240px] sm:h-[300px] md:h-[380px] overflow-hidden cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&q=80"
            alt="Adaptacja"
            className="absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-40 group-hover:opacity-70 dark:group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-white/60 dark:via-black/60 to-white/30 dark:to-black/30" />
          <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-sm bg-[#C7A568]/10 border border-[#C7A568]/20 flex items-center justify-center text-[#C7A568] mb-4 md:mb-6 backdrop-blur-sm">
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight mb-2 md:mb-3 transition-colors">
              Adaptacja wnętrz
            </h3>
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              Niestandardowe układy i skomplikowane geometrie. Tam gdzie inni
              widzą problem, my widzimy projekt.
            </p>
          </div>
        </div>

        {/* Karta 4 */}
        <div className="group relative h-[240px] sm:h-[300px] md:h-[380px] overflow-hidden cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=600&fit=crop&q=80"
            alt="Projektowanie"
            className="absolute inset-0 w-full h-full object-cover opacity-60 dark:opacity-40 group-hover:opacity-70 dark:group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-black via-white/60 dark:via-black/60 to-white/30 dark:to-black/30" />
          <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-sm bg-[#C7A568]/10 border border-[#C7A568]/20 flex items-center justify-center text-[#C7A568] mb-4 md:mb-6 backdrop-blur-sm">
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                />
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight mb-2 md:mb-3 transition-colors">
              Projektowanie wykonawcze
            </h3>
            <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-sm leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              Doradztwo techniczne na każdym etapie. Przekuwamy wizję architekta
              w rzeczywistość bez błędów.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services;
