// About.jsx
const About = () => (
  <section
    id="o-nas"
    className="py-16 sm:py-20 lg:py-28 bg-white dark:bg-[#080D1A] border-y border-neutral-200 dark:border-white/[0.04] transition-colors duration-300"
  >
    <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="relative max-w-md mx-auto lg:mx-0 w-full">
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=1000&fit=crop&q=80"
              alt="Doświadczenie w budownictwie"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute -bottom-4 -right-2 sm:-right-5 bg-[#2563EB] text-white px-5 py-3.5 rounded-lg shadow-xl shadow-[#2563EB]/20">
            <div className="text-2xl sm:text-3xl font-bold leading-none">
              32+
            </div>
            <div className="text-[0.65rem] sm:text-xs font-semibold mt-1 text-white/80">
              lat w branży
            </div>
          </div>
        </div>

        <div>
          <span className="text-[0.65rem] sm:text-xs font-bold text-[#60A5FA] tracking-[0.25em] uppercase">
            O firmie
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-3 mb-6 text-neutral-900 dark:text-white leading-tight transition-colors">
            Doświadczenie, którego nie da się zastąpić
          </h2>

          <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-[1.8] font-light text-[0.9rem] sm:text-base transition-colors">
            <p>
              Complex Bud założył człowiek, który w branży budowlanej pracuje od
              piętnastego roku życia. Przez ponad trzy dekady zdobywał
              doświadczenie, które nie pochodzi z podręczników — lecz z tysięcy
              zrealizowanych metrów kwadratowych.
            </p>
            <p>
              Szesnaście lat spędzonych w Londynie to czas pracy przy
              projektach, które definiują światowy standard wykończeń.
              Doświadczenie zdobywane m.in. przy takich inwestycjach jak{" "}
              <a
                href="https://www.onehydepark.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-900 dark:text-white hover:text-[#60A5FA] underline underline-offset-2 transition-colors font-medium"
              >
                One Hyde Park
              </a>{" "}
              — jednych z najbardziej ekskluzywnych apartamentów na świecie.
            </p>
            <p>
              Nasza firma wnosi nowy wymiar do słów „wykończenie" i „remont".
              Nie wykonujemy zleceń — realizujemy wizje.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              "Projekty premium w Londynie",
              "Zaufanie wymagających klientów",
              "Terminowość bez wyjątków",
              "Dbałość o każdy detal",
            ].map((t) => (
              <div key={t} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#60A5FA] rounded-full shrink-0" />
                <span className="text-neutral-500 dark:text-neutral-400 text-sm transition-colors">
                  {t}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
