const navLinks = [
  { label: "Oferta", href: "#oferta" },
  { label: "O nas", href: "#o-nas" },
  { label: "Realizacje", href: "#realizacje" },
  { label: "Opinie", href: "#opinie" },
  { label: "Kontakt", href: "#kontakt" },
];

const services = [
  { title: "Wykończenia pod klucz" },
  { title: "Remonty generalne" },
  { title: "Adaptacja wnętrz" },
];

const Footer = () => (
  <footer className="relative bg-white dark:bg-[#020202] border-t border-neutral-200 dark:border-white/[0.04] transition-colors duration-300">
    <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-10 pt-14 sm:pt-16 lg:pt-20 pb-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-0 mb-14 sm:mb-16">
        <div className="sm:col-span-2 lg:col-span-5 lg:pr-12 lg:border-r border-neutral-200 dark:border-white/[0.04]">
          <a href="#" className="flex items-center gap-3 mb-6 group">
            <img
              src="/logos.svg"
              alt="Complex Bud logo"
              className="w-auto h-14 object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>
          <p className="text-neutral-500 dark:text-neutral-500 text-sm leading-relaxed font-light max-w-xs mb-6">
            Kompleksowe wykończenia wnętrz pod klucz. Precyzja, terminowość i
            bezkompromisowa jakość.
          </p>

          <div className="flex items-center gap-2.5">
            <a
              href="#"
              aria-label="Facebook"
              className="w-8 h-8 rounded-md bg-neutral-100 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.06] flex items-center justify-center text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-white hover:bg-[#C7A568]/10 hover:border-[#C7A568]/30 transition-all"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-8 h-8 rounded-md bg-neutral-100 dark:bg-white/[0.03] border border-neutral-200 dark:border-white/[0.06] flex items-center justify-center text-neutral-400 dark:text-neutral-600 hover:text-neutral-900 dark:hover:text-white hover:bg-[#C7A568]/10 hover:border-[#C7A568]/30 transition-all"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="sm:col-span-2 lg:col-span-7 lg:pl-12 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-neutral-200 dark:sm:divide-white/[0.04]">
          <div className="sm:pr-6 lg:pr-8">
            <h4 className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-600 mb-4 transition-colors">
              Nawigacja
            </h4>
            <div className="space-y-3">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="block text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white text-sm transition-colors duration-300 font-light"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div className="sm:px-6 lg:px-8">
            <h4 className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-600 mb-4 transition-colors">
              Usługi
            </h4>
            <div className="space-y-3">
              {services.map((s) => (
                <a
                  key={s.title}
                  href="#oferta"
                  className="block text-neutral-500 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white text-sm transition-colors duration-300 font-light"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          <div className="col-span-2 sm:col-span-1 sm:pl-6 lg:pl-8">
            <h4 className="text-[0.65rem] font-bold tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-600 mb-4 transition-colors">
              Kontakt
            </h4>
            <div className="space-y-3 text-sm text-neutral-500 dark:text-neutral-500 font-light">
              <a
                href="tel:+48792022994"
                className="block hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                +48 792 022 994
              </a>
              <a
                href="mailto:Jan.komplexbud@gmail.com"
                className="block hover:text-neutral-900 dark:hover:text-white transition-colors"
              >
                jan.komplexbud@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-200 dark:border-white/[0.04] py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
          <p className="text-[0.65rem] text-neutral-400 dark:text-neutral-700 font-light tracking-wide transition-colors">
            © {new Date().getFullYear()} Komplex Bud
          </p>
          <span className="hidden sm:block w-1 h-1 rounded-full bg-neutral-300 dark:bg-neutral-800" />
          <a
            href="/polityka-prywatnosci"
            className="text-[0.65rem] text-neutral-400 dark:text-neutral-700 hover:text-neutral-900 dark:hover:text-white font-light tracking-wide transition-colors"
          >
            Polityka prywatności
          </a>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[0.65rem] text-neutral-400 dark:text-neutral-700 font-light tracking-wide transition-colors">
            Realizacja:
          </span>
          <a
            href="https://klaudiuszdev.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 transition-all duration-300"
          >
            <img
              src="https://klaudiuszdev.pl/hello.svg"
              alt="klaudiuszdev"
              className="h-4 w-auto"
            />
            <span className="text-[0.6rem] text-neutral-500 dark:text-neutral-600 group-hover:text-neutral-900 dark:group-hover:text-[#C7A568] tracking-[0.15em] uppercase font-medium transition-colors duration-300">
              klaudiuszdev.pl
            </span>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
