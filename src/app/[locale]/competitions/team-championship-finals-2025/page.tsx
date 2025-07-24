import { Metadata } from "next";
import Script from "next/script";
import OstravaCompetitionClient from "./OstravaCompetitionClient";
import {
  generateSportsEventSchema,
  createJsonLd,
} from "../../../../lib/schema";

// Environment variables for metadata
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://daniel.mitka.cz";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Daniel Mitka Portfolio";
const authorName = process.env.NEXT_PUBLIC_AUTHOR_NAME || "Daniel Mitka";

export const metadata: Metadata = {
  title: "Team Championship Finals Ostrava 2025 - Daniel Mitka",
  description:
    "Daniel Mitka's performance at Team Championship Finals Ostrava 2025. National level team competition with individual achievements in freestyle, breaststroke and medley events. Czech Republic swimming championships.",

  keywords: [
    "Team Championship Finals Ostrava 2025",
    "Daniel Mitka Ostrava",
    "Czech swimming championship Ostrava",
    "team swimming competition",
    "national swimming championship",
    "Ostrava swimming 2025",
    "Czech Republic swimming team",
    "swimming finals Ostrava",
    "competitive swimming Czech",
    "national team swimming",
    "Daniel Mitka achievements",
    "swimming championship videos",
    "freestyle swimming Ostrava",
    "medley swimming competition",
    "Czech swimming championships",
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
    title: "Team Championship Finals Ostrava 2025 - Daniel Mitka",
    description:
      "National level team swimming competition in Ostrava. Multiple individual events and team achievements at Czech swimming championships.",
    url: `${siteUrl}/competitions/team-championship-finals-2025`,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/ostrava1.jpg`,
        width: 1200,
        height: 630,
        alt: "Team Championship Finals Ostrava 2025 - Daniel Mitka",
        type: "image/jpeg",
      },
    ],
    locale: "cs_CZ",
    type: "article",
    publishedTime: "2025-01-01",
    modifiedTime: new Date().toISOString(),
  },

  twitter: {
    card: "summary_large_image",
    title: "Team Championship Finals Ostrava 2025 - Daniel Mitka",
    description:
      "🏊‍♂️ Competing at Team Championship Finals Ostrava 2025! National level team competition with multiple individual events.",
    images: [`${siteUrl}/ostrava1.jpg`],
    creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@MitkaDaniel",
  },

  alternates: {
    canonical: `${siteUrl}/competitions/team-championship-finals-2025`,
    languages: {
      cs: `${siteUrl}/cs/competitions/team-championship-finals-2025`,
      en: `${siteUrl}/en/competitions/team-championship-finals-2025`,
      "x-default": `${siteUrl}/competitions/team-championship-finals-2025`,
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
      "Ostrava",
      "Team Championship",
      "Czech Republic",
      "National Competition",
    ],

    // Competition specific
    "sports:competition": "Team Championship Finals Ostrava",
    "sports:year": "2025",
    "sports:location": "Ostrava, Czech Republic",
    "sports:achievement": "Team Competition Finalist",
    "sports:category": "National Team Championship",
    "sports:level": "National",
    "sports:events": "Freestyle, Breaststroke, Individual Medley",

    // Video content
    "video:actor": authorName,
    "video:tag": ["Swimming", "Competition", "Ostrava", "Czech Republic"],

    // Schema.org
    "schema:event": "Team Championship Finals Ostrava 2025",
    "schema:location": "Ostrava, Czech Republic",
    "schema:participant": "Daniel Mitka",
    "schema:sportType": "Swimming",
  },
};

export default function OstravaCompetitionPage() {
  // Generate SportsEvent Schema.org structured data
  const eventSchema = generateSportsEventSchema({
    name: "Team Championship Finals Ostrava 2025",
    description:
      "National level team swimming competition featuring multiple individual events and team achievements. Premier Czech swimming championships with freestyle, breaststroke, and individual medley events.",
    startDate: "2025-01-01",
    endDate: "2025-01-07",
    location: {
      name: "Ostrava Aquatic Centre",
      city: "Ostrava",
      country: "Czech Republic",
      region: "Moravian-Silesian",
    },
    sport: "Swimming",
    awards: ["Team Championship Finalist", "National Competition Achievement"],
    level: "National",
    organizer: "Czech Swimming Federation",
  });

  return (
    <>
      {/* Schema.org JSON-LD for this specific event */}
      <Script
        id="ostrava-competition-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: createJsonLd(eventSchema),
        }}
      />
      <OstravaCompetitionClient />
    </>
  );
}
