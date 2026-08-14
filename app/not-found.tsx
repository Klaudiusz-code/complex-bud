// 404.jsx
const Custom404 = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-[#020202] flex items-center justify-center px-5 sm:px-6 relative overflow-hidden transition-colors duration-300">
      {/* Delikatna akcentowa linia na samej górze zamiast taśm */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#C7A568]" />

      <div className="relative z-10 text-center max-w-lg mx-auto">
        <h1 className="text-[8rem] sm:text-[10rem] md:text-[12rem] font-black tracking-tighter text-neutral-200 dark:text-white leading-none mb-6 select-none">
          4<span className="text-[#C7A568]">0</span>4
        </h1>

        <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-neutral-100 dark:bg-[#2563EB]/10 border border-neutral-200 dark:border-[#2563EB]/20 flex items-center justify-center text-[#C7A568] transition-colors">
          <svg
            className="w-8 h-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m0 0c1.516 0 3.056.236 4.483.683l.733-2.396a.375.375 0 00-.392-.487h-9.748a.375.375 0 00-.392.487l.733 2.396A14.956 14.956 0 0112 5.25zM5.25 8.25h13.5v10.5A2.25 2.25 0 0116.5 21h-9a2.25 2.25 0 01-2.25-2.25V8.25z"
            />
          </svg>
        </div>

        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-white mb-4 transition-colors">
          Strona nie istnieje
        </h2>

        <p className="text-neutral-500 dark:text-neutral-400 font-light text-sm sm:text-base leading-relaxed mb-10 max-w-md mx-auto transition-colors">
          Wygląda na to, że trafiono na ślepą uliczkę. Możliwe, że ta część
          strony została rozebrana lub jeszcze nie powstała.
        </p>

        <a
          href="/"
          className="group inline-flex items-center gap-2.5 bg-[#C7A568] hover:bg-[#9c7b3c] text-white font-bold px-8 py-4 rounded-sm transition-all duration-300 tracking-wide shadow-xl shadow-[#9c7b3c]/15"
        >
          Wróć na stronę główną
          <svg
            className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Custom404;
