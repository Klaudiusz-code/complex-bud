export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";

type HomepageSEO = {
  page: {
    seo?: {
      title?: string | null;
      description?: string | null;
      focusKeywords?: string[] | null;
      canonicalUrl?: string | null;
      robots?: string[] | null;
    };
  };
};

const query = `
  query GetHomepageSEO {
    page(id: "strona-glowna", idType: URI) {
      seo {
        title
        description
        focusKeywords
        canonicalUrl
        robots
      }
    }
  }
`;

async function getHomepageSEO(): Promise<HomepageSEO | null> {
  try {
    const response = await fetch("http://komplex-bud.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
      next: {
        revalidate: 60,
      },
    });

    if (!response.ok) {
      console.error("GraphQL SEO HTTP error:", response.status);
      return null;
    }

    const result = await response.json();

    if (result.errors) {
      console.error("GraphQL SEO errors:", result.errors);
      return null;
    }

    return result.data;
  } catch (error) {
    console.error("Błąd pobierania SEO:", error);
    return null;
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const data = await getHomepageSEO();

  const seo = data?.page?.seo;

  const title =
    seo?.title || "KOMPLEX-BUD ZAMOŚĆ";

  const description =
    seo?.description ||
    "Komplex Bud – profesjonalne wykończenia wnętrz, remonty i prace budowlane w Zamościu, Tomaszowie Lubelskim i na terenie całej Polski.";

  const keywords = seo?.focusKeywords?.filter(
    (keyword): keyword is string =>
      typeof keyword === "string" && keyword.trim().length > 0,
  ) ?? [
    "wykończenia wnętrz Zamość",
    "wykończenia wnętrz Tomaszów Lubelski",
    "firma budowlana Zamość",
    "firma budowlana Tomaszów Lubelski",
    "remonty Zamość",
    "remonty Tomaszów Lubelski",
    "wykończenia mieszkań",
    "wykończenia domów",
    "firma remontowa",
    "firma budowlana",
  ];

  const canonical = seo?.canonicalUrl || "https://komplex-bud.com/";

  return {
    title,
    description,
    keywords,

    alternates: {
      canonical,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Komplex Bud",
      locale: "pl_PL",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function Page() {
  return <HomePageClient />;
}
