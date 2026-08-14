"use client";

type ServicesProps = {
  data?: {
    tytulSekcjiOferta: string;
    oferta: {
      zdjecieOfferta?: {
        node?: {
          sourceUrl?: string;
        };
      };
      naglowek: string;
      opis: string;
    }[];
  };
};

const Services = ({ data }: ServicesProps) => {
  const services = data?.oferta || [
    {
      zdjecieOfferta: {
        node: {
          sourceUrl:
            "https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=1200&h=800&fit=crop&q=80",
        },
      },
      naglowek: "Wykończenia pod klucz",
      opis: "Od wylewek po zamontowanie ostatniej lampy dekoracyjnej. Oddajemy wnętrze gotowe do zamieszkania, bez stresu i poślizgów czasowych.",
    },
    {
      zdjecieOfferta: {
        node: {
          sourceUrl:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop&q=80",
        },
      },
      naglowek: "Remonty generalne",
      opis: "Całkowita transformacja przestrzeni — od demontażu po finalny efekt zgodny z najwyższymi standardami.",
    },
    {
      zdjecieOfferta: {
        node: {
          sourceUrl:
            "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&h=800&fit=crop&q=80",
        },
      },
      naglowek: "Adaptacja wnętrz",
      opis: "Niestandardowe układy i skomplikowane geometrie. Tam gdzie inni widzą problem, my widzimy wyzwanie.",
    },
  ];

  return (
    <section
      id="oferta"
      className="py-14 sm:py-20 lg:py-28 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
        <div className="mb-10 md:mb-16 pb-6 md:pb-10 border-b border-neutral-200 dark:border-white/[0.06]">
          <div className="flex items-center gap-4 mb-5 md:mb-6">
            <div className="w-8 md:w-12 h-px bg-[#C7A568]" />
            <span className="text-[0.65rem] md:text-xs font-bold text-[#C7A568] tracking-[0.3em] uppercase">
              Oferta
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white transition-colors">
            {data?.tytulSekcjiOferta || "Zakres prac"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-[#0A0A0A] rounded-2xl overflow-hidden border border-neutral-200/80 dark:border-white/[0.06] shadow-sm hover:shadow-2xl dark:hover:shadow-black/40 transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={
                    service.zdjecieOfferta?.node?.sourceUrl ||
                    "https://images.unsplash.com/photo-1611735341450-74d61e660ad2?w=1200&h=800&fit=crop&q=80"
                  }
                  alt={service.naglowek}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <span className="text-xs font-bold text-white/80">
                    {index + 1}
                  </span>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <div className="w-8 h-px bg-[#C7A568] mb-5 transition-all duration-500 group-hover:w-16" />
                <h3 className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white mb-3 transition-colors">
                  {service.naglowek}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {service.opis}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
