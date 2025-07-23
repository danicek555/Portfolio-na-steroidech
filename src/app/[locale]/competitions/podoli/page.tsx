import { Metadata } from "next";
import PodoliCompetitionClient from "./PodoliCompetitionClient";

// Environment variables for metadata
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://daniel.mitka.cz";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Daniel Mitka Portfolio";
const authorName = process.env.NEXT_PUBLIC_AUTHOR_NAME || "Daniel Mitka";

export const metadata: Metadata = {
  title: "Czech National Swimming Championship Podolí 2024 - Daniel Mitka",
  description:
    "Daniel Mitka's performance at Czech National Swimming Championship in Podolí 2024. National level competition at the prestigious Podolí swimming complex in Prague, Czech Republic.",

  keywords: [
    "Czech National Swimming Championship Podolí 2024",
    "Daniel Mitka Podolí",
    "national swimming championship Czech",
    "Podolí swimming complex Prague",
    "Czech Republic national championships",
    "swimming competition Prague",
    "national level swimming Czech",
    "Podolí aquatic center",
    "competitive swimming Czech Republic",
    "Czech national swimming team",
    "swimming championships Prague",
    "Daniel Mitka national competition",
    "Czech swimming federation",
    "national swimming pool Podolí",
    "Prague swimming competition",
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
    title: "Czech National Swimming Championship Podolí 2024 - Daniel Mitka",
    description:
      "National level competition at the prestigious Podolí swimming complex in Prague. Czech Republic's premier swimming championship.",
    url: `${siteUrl}/competitions/podoli`,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/podoliFoto.jpg`,
        width: 1200,
        height: 630,
        alt: "Czech National Swimming Championship Podolí 2024 - Daniel Mitka",
        type: "image/jpeg",
      },
    ],
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2024-07-01",
    modifiedTime: new Date().toISOString(),
  },

  twitter: {
    card: "summary_large_image",
    title: "Czech National Swimming Championship Podolí 2024 - Daniel Mitka",
    description:
      "🇨🇿 Competing at Czech National Swimming Championship in Podolí! Premier national competition in Prague.",
    images: [`${siteUrl}/podoliFoto.jpg`],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@MitkaDaniel",
  },

  alternates: {
    canonical: `${siteUrl}/competitions/podoli`,
    languages: {
      cs: `${siteUrl}/cs/competitions/podoli`,
      en: `${siteUrl}/en/competitions/podoli`,
      "x-default": `${siteUrl}/competitions/podoli`,
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
      "Podolí",
      "National Championship",
      "Czech Republic",
      "Prague",
    ],

    // Competition specific
    "sports:competition": "Czech National Swimming Championship",
    "sports:year": "2024",
    "sports:location": "Podolí, Prague, Czech Republic",
    "sports:achievement": "National Competition",
    "sports:category": "National Championship",
    "sports:level": "National",
    "sports:venue": "Podolí Swimming Complex",
    "sports:events": "Multiple Swimming Events",

    // Schema.org
    "schema:event": "Czech National Swimming Championship Podolí 2024",
    "schema:location": "Podolí Swimming Complex, Prague, Czech Republic",
    "schema:participant": "Daniel Mitka",
    "schema:sportType": "Swimming",
    "schema:venue": "Podolí Aquatic Center",
  },
};

export default function PodoliCompetitionPage() {
  return <PodoliCompetitionClient />;
}
