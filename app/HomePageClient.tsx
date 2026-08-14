import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import FastQuote from "@/components/FastQuote";
import About from "@/components/About";
import Pillars from "@/components/Pillarts";
import Realizations from "@/components/Realizations";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Typy zostają bez zmian
type HomepageData = {
  page: {
    sekcjaHero: {
      title: string;
      opisSekcjiHero: string;
      przyciski: {
        przyciskPierwszy: string;
        przyciskDrugi: string;
      };
    };
    sekcjaStatystki: {
      statystykaPierwsza: {
        wartosc: string | null;
        opisWartosci: string | null;
      };
      statystykaDruga: { wartosc: string | null; opisWartosci: string | null };
      statystykaTrzecia: {
        wartosc: string | null;
        opisWartosci: string | null;
      };
      statystykaCzwarta: {
        wartosc: string | null;
        opisWartosci: string | null;
      };
    };
    sekcjaOferta: {
      tytulSekcjiOferta: string;
      oferta: {
        zdjecieOfferta: { node: { sourceUrl: string } };
        naglowek: string;
        opis: string;
      }[];
    };
    sekcjaSzybkiKontakt: {
      etykieta: string;
      opis: string;
      uslugiSzybkiKontaktFormularz: { nazwaUslugi: string }[];
    };
    sekcjaONas: {
      zdjecieNaszejFirmy: { node: { sourceUrl: string } };
      statystykaWartosc: string;
      statystykaOpis: string;
      naglowekSekcjiOFirmie: string;
      akapitPierwszyOnas: string;
      akapitDrugiOnas: string;
      benefity: { tytul: string }[];
    };
    sekcjaDlaczegoMy: {
      naglowekSekcji: string;
      filary: { tytul: string; opis: string }[];
    };
    sekcjaRealizacje: {
      nagwlowekSekcjiRealizacje: string;
      realizacje: {
        tytul: string;
        zdjecieRealizacja: { node: { sourceUrl: string } };
      }[];
      przemiana: {
        tytulPrzemiany: string | null;
        obrazek: { node: { sourceUrl: string } };
        obrazekPo: { node: { sourceUrl: string } };
      } | null;
    };
    sekcjaOpinieKlientow: {
      tytulSekcjiOpinii: string;
      opinie: { imie: string; trescOpinii: string }[];
    };
    sekcjaKontakt: {
      tytulSekcjiKontakt: string;
      opis: string;
      rodzajUslugiKontakt: { rodzajUslugi: string }[];
    };
  };
};

const query = `
  query GetHomepage {
    page(id: "strona-glowna", idType: URI) {
      sekcjaHero { title opisSekcjiHero przyciski { przyciskPierwszy przyciskDrugi } }
      sekcjaStatystki {
        statystykaPierwsza { wartosc opisWartosci }
        statystykaDruga { wartosc opisWartosci }
        statystykaTrzecia { wartosc opisWartosci }
        statystykaCzwarta { wartosc opisWartosci }
      }
      sekcjaOferta { tytulSekcjiOferta oferta { zdjecieOfferta { node { sourceUrl } } naglowek opis } }
      sekcjaSzybkiKontakt { etykieta opis uslugiSzybkiKontaktFormularz { nazwaUslugi } }
      sekcjaONas {
        zdjecieNaszejFirmy { node { sourceUrl } }
        statystykaWartosc statystykaOpis naglowekSekcjiOFirmie akapitPierwszyOnas akapitDrugiOnas
        benefity { tytul }
      }
      sekcjaDlaczegoMy { naglowekSekcji filary { tytul opis } }
      sekcjaRealizacje {
        nagwlowekSekcjiRealizacje
        realizacje { tytul zdjecieRealizacja { node { sourceUrl } } }
        przemiana { tytulPrzemiany obrazek { node { sourceUrl } } obrazekPo { node { sourceUrl } } }
      }
      sekcjaOpinieKlientow { tytulSekcjiOpinii opinie { imie trescOpinii } }
      sekcjaKontakt { tytulSekcjiKontakt opis rodzajUslugiKontakt { rodzajUslugi } }
    }
  }
`;

export default async function Page() {
  const res = await fetch("https://komplex-bud.com/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query }),
    next: { revalidate: 60 },
  });

  const result = await res.json();
  const data: HomepageData = result.data;

  return (
    <div className="bg-white dark:bg-[#050505] text-neutral-900 dark:text-white font-sans antialiased selection:bg-[#2563EB] selection:text-white overflow-x-hidden transition-colors duration-300">
      <TopBar />
      <Navbar />
      <Hero data={data?.page?.sekcjaHero} />
      <Stats data={data?.page?.sekcjaStatystki} />
      <Services data={data?.page?.sekcjaOferta} />
      <FastQuote data={data?.page?.sekcjaSzybkiKontakt} />
      <About data={data?.page?.sekcjaONas} />
      <Pillars data={data?.page?.sekcjaDlaczegoMy} />
      {/* @ts-ignore */}
      <Realizations data={data?.page?.sekcjaRealizacje} />
      <Testimonials data={data?.page?.sekcjaOpinieKlientow} />
      <Contact data={data?.page?.sekcjaKontakt} />
      <Footer />
    </div>
  );
}
