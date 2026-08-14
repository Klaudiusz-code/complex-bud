"use client";

type Stat = {
  wartosc: string | null;
  opisWartosci: string | null;
};

type StatsProps = {
  data?: {
    statystykaPierwsza?: Stat;
    statystykaDruga?: Stat;
    statystykaTrzecia?: Stat;
    statystykaCzwarta?: Stat;
  };
};

const Stats = ({ data }: StatsProps) => {
  const stats = [
    data?.statystykaPierwsza,
    data?.statystykaDruga,
    data?.statystykaTrzecia,
    data?.statystykaCzwarta,
  ];

  return (
    <section className="border-y border-neutral-200 dark:border-white/[0.06] bg-neutral-50 dark:bg-[#0A0A0A] transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-neutral-200 dark:divide-white/[0.06]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 text-center"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                {stat?.wartosc || "—"}
              </div>

              <div className="mt-2 text-[0.6rem] sm:text-[11px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-neutral-500 dark:text-neutral-400">
                {stat?.opisWartosci || ""}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
