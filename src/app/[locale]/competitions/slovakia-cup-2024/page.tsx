import { Metadata } from "next";
import SamorinCompetitionClient from "./SamorinCompetitionClient";

// Environment variables for metadata
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://daniel.mitka.cz";
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
    url: `${siteUrl}/competitions/samorin`,
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
    canonical: `${siteUrl}/competitions/samorin`,
    languages: {
      cs: `${siteUrl}/cs/competitions/samorin`,
      en: `${siteUrl}/en/competitions/samorin`,
      "x-default": `${siteUrl}/competitions/samorin`,
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

export default function SamorinCompetitionPage() {
  return <SamorinCompetitionClient />;
}
