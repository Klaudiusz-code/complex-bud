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
    <div className="border border-neutral-200 dark:border-white/[0.06] rounded-sm overflow-hidden bg-white dark:bg-[#0A0A0A] shadow-sm dark:shadow-none hover:shadow-lg dark:hover:shadow-black/20 transition-all duration-300">
      {title && (
        <div className="px-5 py-3.5 border-b border-neutral-100 dark:border-white/[0.06]">
          <h3 className="text-sm font-bold tracking-tight text-neutral-900 dark:text-white transition-colors">
            {title}
          </h3>
        </div>
      )}

      <div className="grid grid-cols-2 divide-x divide-neutral-200 dark:divide-white/[0.06]">
        <div className="relative aspect-square bg-neutral-100 dark:bg-[#111]">
          <img
            src={before}
            alt={`Przed - ${title}`}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute bottom-0 left-0 bg-black/70 backdrop-blur-sm px-3 py-2 w-fit rounded-tr-md">
            <span className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-white/90">
              Przed
            </span>
          </div>
        </div>

        <div className="relative aspect-square bg-neutral-100 dark:bg-[#111]">
          <img
            src={after}
            alt={`Po - ${title}`}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute bottom-0 right-0 bg-[#C7A568]/90 backdrop-blur-sm px-3 py-2 w-fit rounded-tl-md">
            <span className="text-[0.6rem] font-bold tracking-[0.15em] uppercase text-white">
              Po
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;
