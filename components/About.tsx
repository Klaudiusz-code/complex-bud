"use client";

type AboutProps = {
  data?: {
    zdjecieNaszejFirmy?: {
      node?: {
        sourceUrl?: string;
      };
    };
    statystykaWartosc?: string;
    statystykaOpis?: string;
    naglowekSekcjiOFirmie?: string;
    akapitPierwszyOnas?: string;
    akapitDrugiOnas?: string;
    benefity?: {
      tytul: string;
    }[];
  };
};

const About = ({ data }: AboutProps) => {
  return (
    <section
      id="o-nas"
      className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-[#0F0F0F] border-y border-neutral-200 dark:border-white/[0.04] transition-colors duration-300"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* ZDJĘCIE */}
          <div className="relative max-w-md mx-auto lg:mx-0 w-full">
            <div className="aspect-[4/5] overflow-hidden">
              {data?.zdjecieNaszejFirmy?.node?.sourceUrl && (
                <img
                  src={data.zdjecieNaszejFirmy.node.sourceUrl}
                  alt={data.naglowekSekcjiOFirmie || "O naszej firmie"}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              )}
            </div>

            {/* STATYSTYKA */}
            {(data?.statystykaWartosc || data?.statystykaOpis) && (
              <div className="absolute -bottom-4 -right-2 sm:-right-5 bg-[#C7A568] text-white px-5 py-3.5 rounded-lg shadow-xl shadow-[#C7A568]/20">
                {data?.statystykaWartosc && (
                  <div className="text-2xl sm:text-3xl font-bold leading-none">
                    {data.statystykaWartosc}
                  </div>
                )}

                {data?.statystykaOpis && (
                  <div className="text-[0.65rem] sm:text-xs font-semibold mt-1 text-white/80">
                    {data.statystykaOpis}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* TREŚĆ */}
          <div>
            <span className="text-[0.65rem] sm:text-xs font-bold text-[#C7A568] tracking-[0.25em] uppercase">
              O firmie
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mt-3 mb-6 text-neutral-900 dark:text-white leading-tight transition-colors">
              {data?.naglowekSekcjiOFirmie ||
                "Doświadczenie, którego nie da się zastąpić"}
            </h2>

            <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-[1.8] font-light text-[0.9rem] sm:text-base transition-colors">
              {data?.akapitPierwszyOnas && <p>{data.akapitPierwszyOnas}</p>}
              {data?.akapitDrugiOnas && <p>{data.akapitDrugiOnas}</p>}
            </div>

            {/* BENEFITY */}
            {data?.benefity && data.benefity.length > 0 && (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.benefity.map((benefit, index) => (
                  <div
                    key={`${benefit.tytul}-${index}`}
                    className="flex items-center gap-3"
                  >
                    <div className="w-1.5 h-1.5 bg-[#C7A568] rounded-full shrink-0" />
                    <span className="text-neutral-500 dark:text-neutral-400 text-sm transition-colors">
                      {benefit.tytul}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;