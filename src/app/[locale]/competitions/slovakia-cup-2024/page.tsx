import { Metadata } from "next";
import Script from "next/script";
import SamorinCompetitionClient from "./SamorinCompetitionClient";
import {
  generateSportsEventSchema,
  createJsonLd,
} from "../../../../lib/schema";

// Environment variables for metadata
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://steroid.danielmitka.com";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Daniel Mitka Portfolio";
const authorName = process.env.NEXT_PUBLIC_AUTHOR_NAME || "Daniel Mitka";

export const metadata: Metadata = {
  title: "Slovakia Cup Šamorín 2024 - Daniel Mitka",
  description:
    "Daniel Mitka's performance at Slovakia Cup in Šamorín 2024. International swimming competition in Slovakia featuring Czech and Slovak swimmers. Cross-border competitive swimming event.",

  keywords: [
    "Slovakia Cup Šamorín 2024",
    "Daniel Mitka Slovakia",
    "Šamorín swimming competition",
    "Slovakia swimming championship",
    "international swimming Slovakia",
    "Czech Slovak swimming",
    "Slovakia Cup swimming",
    "cross-border swimming competition",
    "competitive swimming Slovakia",
    "Šamorín aquatic center",
    "international swimming event",
    "Daniel Mitka international",
    "swimming competition Slovakia",
    "Slovak swimming federation",
    "Czech swimmer Slovakia",
  ],

  authors: [{ name: authorName }],
  creator: authorName,
  publisher: authorName,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Slovakia Cup Šamorín 2024 - Daniel Mitka",
    description:
      "International swimming competition in Slovakia. Cross-border event featuring Czech and Slovak swimmers at Šamorín aquatic center.",
    url: `${siteUrl}/competitions/slovakia-cup-2024`,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/samorin.jpg`,
        width: 1200,
        height: 630,
        alt: "Slovakia Cup Šamorín 2024 - Daniel Mitka",
        type: "image/jpeg",
      },
    ],
    locale: "sk_SK",
    type: "article",
    publishedTime: "2024-05-01",
    modifiedTime: new Date().toISOString(),
  },

  twitter: {
    card: "summary_large_image",
    title: "Slovakia Cup Šamorín 2024 - Daniel Mitka",
    description:
      "🏊‍♂️ Competing at Slovakia Cup in Šamorín! International swimming competition between Czech and Slovak swimmers.",
    images: [`${siteUrl}/samorin.jpg`],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@MitkaDaniel",
  },

  alternates: {
    canonical: `${siteUrl}/competitions/slovakia-cup-2024`,
    languages: {
      cs: `${siteUrl}/cs/competitions/slovakia-cup-2024`,
      en: `${siteUrl}/en/competitions/slovakia-cup-2024`,
      "x-default": `${siteUrl}/competitions/slovakia-cup-2024`,
    },
  },

  category: "Sports Competition",

  other: {
    // Facebook specific
    ...(process.env.NEXT_PUBLIC_FACEBOOK_APP_ID && {
      "fb:app_id": process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
    }),
    "og:type": "article",
    "article:author": authorName,
    "article:section": "Swimming Competitions",
    "article:tag": [
      "Swimming",
      "Slovakia",
      "Šamorín",
      "International Competition",
      "Slovakia Cup",
    ],

    // Competition specific
    "sports:competition": "Slovakia Cup",
    "sports:year": "2024",
    "sports:location": "Šamorín, Slovakia",
    "sports:achievement": "International Competition",
    "sports:category": "International Cup",
    "sports:level": "International",
    "sports:venue": "Šamorín Aquatic Center",
    "sports:countries": "Czech Republic, Slovakia",

    // Schema.org
    "schema:event": "Slovakia Cup Šamorín 2024",
    "schema:location": "Šamorín, Slovakia",
    "schema:participant": "Daniel Mitka",
    "schema:sportType": "Swimming",
    "schema:international": "true",
  },
};

export default async function SamorinCompetitionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Generate SportsEvent Schema.org structured data with locale support
  const eventNames = {
    en: "Slovakia Cup Šamorín 2024",
    cs: "Slovenský pohár Šamorín 2024",
  };

  const eventDescriptions = {
    en: "International swimming competition between Czech and Slovak swimmers at Šamorín aquatic center. Cross-border sporting event promoting regional swimming excellence.",
    cs: "Mezinárodní plavecká soutěž mezi českými a slovenskými plavci na plaveckém centru Šamorín. Přeshraniční sportovní akce podporující regionální plaveckou excelenci.",
  };

  const organizers = {
    en: "Slovak Swimming Federation",
    cs: "Slovenský plavecký zväz",
  };

  const awards = {
    en: ["International Competition Achievement"],
    cs: ["Úspěch v mezinárodní soutěži"],
  };

  const eventSchema = generateSportsEventSchema(
    {
      name: eventNames[locale as keyof typeof eventNames] || eventNames.en,
      description:
        eventDescriptions[locale as keyof typeof eventDescriptions] ||
        eventDescriptions.en,
      startDate: "2024-05-01",
      endDate: "2024-05-05",
      location: {
        name:
          locale === "cs" ? "Šamorín Aquatic Center" : "Šamorín Aquatic Center",
        city: "Šamorín",
        country: locale === "cs" ? "Slovensko" : "Slovakia",
        region: locale === "cs" ? "Trnavský kraj" : "Trnava Region",
      },
      sport: locale === "cs" ? "Plavání" : "Swimming",
      awards: awards[locale as keyof typeof awards] || awards.en,
      level: "International",
      organizer: organizers[locale as keyof typeof organizers] || organizers.en,
    },
    locale
  );

  return (
    <>
      {/* Schema.org JSON-LD for this specific event */}
      <Script
        id="samorin-competition-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: createJsonLd(eventSchema),
        }}
      />
      <SamorinCompetitionClient />
    </>
  );
}
