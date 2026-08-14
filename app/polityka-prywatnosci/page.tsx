export const dynamic = "force-dynamic";

export default async function PrivacyPolicyPage() {
  const response = await fetch("https://komplex-bud.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query PrivacyPolicy {
          page(id: "polityka-prywatnosci", idType: URI) {
            title
            content
            modified
          }
        }
      `,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    return (
      <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-[#C7A568] text-xs tracking-[0.3em] uppercase mb-4">
            Błąd
          </p>
          <h1 className="text-3xl md:text-4xl font-bold">
            Nie udało się pobrać strony
          </h1>
        </div>
      </main>
    );
  }

  const result = await response.json();
  const page = result?.data?.page;

  if (!page) {
    return (
      <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-[#C7A568] text-xs tracking-[0.3em] uppercase mb-4">
            404
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Nie znaleziono strony
          </h1>
          <a
            href="/"
            className="inline-flex items-center gap-3 bg-[#C7A568] text-black px-6 py-3 text-xs font-bold uppercase tracking-[0.15em] hover:bg-[#d6b878] transition-colors"
          >
            Wróć na stronę główną
            <span>→</span>
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#050505] text-neutral-900 dark:text-white transition-colors duration-300">
      {/* HERO / NAGŁÓWEK */}
      <section className="pt-32 sm:pt-40 pb-16 sm:pb-20">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex items-center gap-4 mb-5">
            <div className="w-8 h-px bg-[#C7A568]" />
            <span className="text-[0.65rem] sm:text-xs font-bold text-[#C7A568] tracking-[0.25em] uppercase">
              Dokument prawny
            </span>
          </div>
          <h1 className="max-w-4xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-neutral-900 dark:text-white">
            {page.title}
          </h1>
          <div className="mt-8 w-20 h-px bg-[#C7A568]" />
        </div>
      </section>

      {/* TREŚĆ */}
      <section className="pb-24 sm:pb-32">
        <div className="max-w-[900px] mx-auto px-5 sm:px-6 lg:px-10">
          <article
            className="wp-content text-[15px] sm:text-base leading-7 text-neutral-600 dark:text-neutral-400 [&_p]:mb-6 [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-neutral-900 [&_h2]:dark:text-white [&_h2]:mt-12 [&_h2]:mb-5 [&_h3]:text-lg [&_h3]:sm:text-xl [&_h3]:font-bold [&_h3]:tracking-tight [&_h3]:text-neutral-900 [&_h3]:dark:text-white [&_h3]:mt-10 [&_h3]:mb-4 [&_h4]:text-base [&_h4]:sm:text-lg [&_h4]:font-bold [&_h4]:text-neutral-900 [&_h4]:dark:text-white [&_h4]:mt-8 [&_h4]:mb-3 [&_strong]:font-semibold [&_strong]:text-neutral-900 [&_strong]:dark:text-white [&_b]:font-semibold [&_b]:text-neutral-900 [&_b]:dark:text-white [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-6 [&_ol]:space-y-2 [&_li]:pl-1 [&_a]:text-[#A98B55] [&_a]:underline [&_a]:underline-offset-4 [&_a]:hover:text-[#C7A568] [&_a]:transition-colors [&_blockquote]:border-l-2 [&_blockquote]:border-[#C7A568] [&_blockquote]:pl-5 [&_blockquote]:my-8 [&_blockquote]:italic [&_blockquote]:text-neutral-500 [&_blockquote]:dark:text-neutral-400 [&_table]:w-full [&_table]:border-collapse [&_table]:my-8 [&_table]:text-sm [&_th]:text-left [&_th]:font-semibold [&_th]:text-neutral-900 [&_th]:dark:text-white [&_th]:border [&_th]:border-neutral-200 [&_th]:dark:border-white/[0.08] [&_th]:p-3 [&_td]:border [&_td]:border-neutral-200 [&_td]:dark:border-white/[0.08] [&_td]:p-3 [&_hr]:my-10 [&_hr]:border-neutral-200 [&_hr]:dark:border-white/[0.08] [&_img]:max-w-full [&_img]:h-auto [&_img]:rounded-sm [&_img]:my-8"
            dangerouslySetInnerHTML={{
              __html: page.content || "",
            }}
          />

          {/* POWRÓT */}
          <div className="mt-16 sm:mt-20 pt-8 border-t border-neutral-200 dark:border-white/[0.06]">
            <a
              href="/"
              className="group inline-flex items-center gap-3 text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <span className="group-hover:-translate-x-1 transition-transform">
                ←
              </span>
              Wróć na stronę główną
            </a>
          </div>

          {/* INFORMACJA */}
          <div className="mt-10 text-center">
            <p className="text-[11px] text-neutral-400 dark:text-white/20 tracking-wide">
              Treść dokumentu może podlegać aktualizacji.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
