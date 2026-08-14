"use client";

import BeforeAfter from "./BeforeAfter";

type Realization = {
  tytul: string;
  zdjecieRealizacja?: {
    node?: {
      sourceUrl?: string;
    };
  };
};

type Transformation = {
  tytulPrzemiany?: string;
  obrazek?: {
    node?: {
      sourceUrl?: string;
    };
  };
  obrazekPo?: {
    node?: {
      sourceUrl?: string;
    };
  };
};

type RealizationsProps = {
  data?: {
    nagwlowekSekcjiRealizacje?: string;
    realizacje?: Realization[];
    przemiana?: Transformation[] | null;
  };
};

const Realizations = ({ data }: RealizationsProps) => {
  const realizations = data?.realizacje ?? [];
  const transformations = data?.przemiana ?? [];

  return (
    <section
      id="realizacje"
      className="py-14 sm:py-20 lg:py-28 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
        {/* NAGŁÓWEK */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-px bg-[#C7A568]" />
              <span className="text-[0.65rem] sm:text-xs font-bold text-[#C7A568] tracking-[0.25em] uppercase">
                Realizacje
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
              {data?.nagwlowekSekcjiRealizacje || "Wykonane projekty"}
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

        {/* CZYSTA, RÓWNA MOZAIKA BEZ TEKSTU I BEZ "DUŻEGO" ZDJĘCIA */}
        {realizations.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
            {realizations.map((realization, index) => {
              const image = realization.zdjecieRealizacja?.node?.sourceUrl;
              if (!image) return null;

              return (
                <div
                  key={`${realization.tytul}-${index}`}
                  className="group relative overflow-hidden cursor-pointer aspect-[4/5]"
                >
                  <img
                    src={image}
                    alt={realization.tytul}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    draggable={false}
                  />

                  {/* Bardzo delikatny gradient na dole, dla "zakotwiczenia" zdjęcia, bez tekstu */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  {/* Złota ramka na hover */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C7A568]/40 transition-colors duration-500 pointer-events-none" />
                </div>
              );
            })}
          </div>
        )}

        {/* PRZEMIANY */}
        {transformations.length > 0 && (
          <div className="mt-16 sm:mt-20 lg:mt-28">
            <div className="flex items-center gap-4 mb-8 sm:mb-10">
              <div className="w-8 h-px bg-[#C7A568]" />
              <span className="text-[0.65rem] sm:text-xs font-bold text-[#C7A568] tracking-[0.25em] uppercase">
                Przemiany
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {transformations.map((transformation, index) => {
                const before = transformation.obrazek?.node?.sourceUrl;
                const after = transformation.obrazekPo?.node?.sourceUrl;

                if (!before || !after) return null;

                return (
                  <BeforeAfter
                    key={`${transformation.tytulPrzemiany || "przemiana"}-${index}`}
                    before={before}
                    after={after}
                    title={transformation.tytulPrzemiany || ""}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Realizations;
