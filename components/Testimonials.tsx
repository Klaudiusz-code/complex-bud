"use client";

type TestimonialsProps = {
  data?: {
    tytulSekcjiOpinii?: string | null;
    opinie?: {
      imie?: string | null;
      trescOpinii?: string | null;
    }[];
  };
};

const Testimonials = ({ data }: TestimonialsProps) => {
  const testimonials = data?.opinie ?? [];

  return (
    <section
      id="opinie"
      className="py-16 sm:py-20 lg:py-28 bg-neutral-50 dark:bg-[#0F0F0F] border-y border-neutral-200 dark:border-white/[0.06] transition-colors duration-300"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
        {/* NAGŁÓWEK */}
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16">
          <span className="text-[0.65rem] sm:text-xs font-bold text-[#C7A568] tracking-[0.3em] uppercase">
            Opinie klientów
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tighter mt-4 text-neutral-900 dark:text-white transition-colors">
            {data?.tytulSekcjiOpinii || "Zaufanie buduje się na wynikach"}
          </h2>
        </div>

        {/* OPINIE */}
        {testimonials.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
            {testimonials.map((testimonial, index) => {
              const name = testimonial.imie?.trim() || "Klient";
              const text = testimonial.trescOpinii?.trim();

              if (!text) {
                return null;
              }

              return (
                <div
                  key={`${name}-${index}`}
                  className="bg-white dark:bg-white/[0.05] border border-neutral-200 dark:border-white/[0.08] backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 hover:bg-neutral-50 dark:hover:bg-white/[0.08] hover:border-neutral-300 dark:hover:border-white/[0.12] transition-all duration-500 flex flex-col shadow-sm dark:shadow-none"
                >
                  {/* GWIAZDKI */}
                  <div className="flex gap-1 mb-6" aria-label="5 na 5 gwiazdek">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-3.5 h-3.5 text-[#C7A568]"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* TREŚĆ */}
                  <p className="text-neutral-600 dark:text-neutral-200 leading-relaxed mb-8 flex-1 font-light italic text-[0.85rem] sm:text-[0.95rem] transition-colors">
                    „{text}"
                  </p>

                  {/* AUTOR */}
                  <div className="pt-6 border-t border-neutral-200 dark:border-white/[0.08]">
                    <div className="font-semibold text-neutral-900 dark:text-white text-sm transition-colors">
                      {name}
                    </div>

                    <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 font-medium transition-colors">
                      Klient Complex Bud
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* BRAK OPINII */}
        {testimonials.length === 0 && (
          <div className="text-center text-sm text-neutral-500 dark:text-neutral-400">
            Opinie klientów pojawią się tutaj.
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
