const BeforeAfter = ({
  before,
  after,
  title,
}: {
  before: string;
  after: string;
  title: string;
}) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-200/50 dark:border-white/[0.08] shadow-sm hover:shadow-2xl dark:hover:shadow-black/50 transition-all duration-500 cursor-pointer">
      <div className="relative grid grid-cols-2 h-44 sm:h-64 lg:h-72">
        <div className="relative h-full overflow-hidden">
          <img
            src={before}
            alt={`Przed - ${title}`}
            className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-110 group-hover:scale-105 transition-transform duration-700 ease-out"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10" />

          <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
            <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase bg-white/10 backdrop-blur-sm text-white/80 px-3 py-1 rounded-full border border-white/10">
              Przed
            </span>
          </div>
        </div>

        <div className="relative h-full overflow-hidden">
          <img
            src={after}
            alt={`Po - ${title}`}
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10" />

          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
            <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase bg-[#C7A568] text-white px-3 py-1 rounded-full shadow-lg shadow-[#C7A568]/20">
              Po
            </span>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-44 sm:h-64 lg:h-72 bg-gradient-to-b from-transparent via-[#C7A568]/50 to-transparent z-20 shadow-[0_0_8px_rgba(199,165,104,0.3)] pointer-events-none" />

      {title && (
        <div
          className="
          relative sm:absolute 
          bottom-0 left-0 right-0 z-30 
          translate-y-0 sm:translate-y-full group-hover:sm:translate-y-0 
          transition-transform duration-500 ease-out
        "
        >
          <div className="bg-black/60 sm:backdrop-blur-xl border-t border-[#C7A568]/30 px-5 py-3.5 sm:px-6 sm:py-4">
            <h3 className="text-[0.8rem] sm:text-sm font-medium text-gray-300 text-center leading-relaxed">
              {title}
            </h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeforeAfter;
