// Schema.org JSON-LD structured data utilities
export interface PersonSchema {
  "@context": "https://schema.org";
  "@type": "Person" | ["Person", "Athlete"];
  name: string;
  url: string;
  image: string;
  description: string;
  jobTitle?: string[];
  nationality?: string;
  birthPlace?: string;
  sameAs?: string[];
  knowsAbout?: string[];
  alumniOf?: string[];
  award?: string[];
  sport?: string[];
  memberOf?: OrganizationSchema[];
}

export interface AthleteSchema extends Omit<PersonSchema, "@type"> {
  "@context": "https://schema.org";
  "@type": ["Person", "Athlete"];
  sport: string[];
  award: string[];
  competesFor?: OrganizationSchema;
  nationality: string;
}

export interface SportsEventSchema {
  "@context": "https://schema.org";
  "@type": "SportsEvent";
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: PlaceSchema;
  organizer?: OrganizationSchema;
  sport: string;
  competitor?: PersonSchema[];
  eventStatus:
    | "EventScheduled"
    | "EventMovedOnline"
    | "EventPostponed"
    | "EventCancelled";
  award?: string[];
  participant?: PersonSchema[];
}

export interface PlaceSchema {
  "@context"?: "https://schema.org";
  "@type": "Place" | "SportsActivityLocation";
  name: string;
  address?: {
    "@type": "PostalAddress";
    streetAddress?: string;
    addressLocality: string;
    addressRegion?: string;
    addressCountry: string;
  };
  geo?: {
    "@type": "GeoCoordinates";
    latitude: number;
    longitude: number;
  };
}

export interface OrganizationSchema {
  "@context"?: "https://schema.org";
  "@type": "Organization" | "SportsOrganization";
  name: string;
  url?: string;
  logo?: string;
  address?: {
    "@type": "PostalAddress";
    addressCountry: string;
  };
}

export interface WebSiteSchema {
  "@context": "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  publisher: PersonSchema | OrganizationSchema;
  inLanguage: string[];
  potentialAction?: {
    "@type": "SearchAction";
    target: string;
    "query-input": string;
  };
}

// Environment variables for consistent data
const getBaseData = () => ({
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://daniel.mitka.cz",
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || "Daniel Mitka Portfolio",
  authorName: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Daniel Mitka",
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@MitkaDaniel",
  facebookProfile:
    process.env.NEXT_PUBLIC_FACEBOOK_PROFILE ||
    "https://facebook.com/daniel.mitka",
  instagramProfile:
    process.env.NEXT_PUBLIC_INSTAGRAM_PROFILE ||
    "https://instagram.com/daniel.mitka",
});

// Main person/athlete schema for Daniel Mitka
export function generatePersonSchema(): AthleteSchema {
  const {
    siteUrl,
    authorName,
    twitterHandle,
    facebookProfile,
    instagramProfile,
  } = getBaseData();

  return {
    "@context": "https://schema.org",
    "@type": ["Person", "Athlete"],
    name: authorName,
    url: siteUrl,
    image: `${siteUrl}/profilovaFotka.jpg`,
    description:
      "Czech Youth Swimming Champion & Lifesaving Medalist. Competitive swimmer with international experience in Australia, Slovakia, and Czech Republic. Full-stack developer passionate about technology and sports.",
    jobTitle: [
      "Professional Athlete",
      "Full-Stack Developer",
      "Competitive Swimmer",
    ],
    nationality: "Czech Republic",
    birthPlace: "Czech Republic",
    sport: ["Swimming", "Lifesaving", "Aquatic Sports"],
    award: [
      "Czech Youth Swimming Champion",
      "Silver Medal - Australia Youth Swimming Championship 2023",
      "Lifesaving World Championships Medalist",
      "Slovakia Cup Competitor",
      "Czech National Championships Participant",
    ],
    sameAs: [
      twitterHandle.startsWith("@")
        ? `https://twitter.com/${twitterHandle.substring(1)}`
        : twitterHandle,
      facebookProfile,
      instagramProfile,
      `${siteUrl}/cs`,
      `${siteUrl}/en`,
    ],
    knowsAbout: [
      "Competitive Swimming",
      "Lifesaving",
      "Water Safety",
      "Athletic Training",
      "Web Development",
      "Full-Stack Development",
      "React",
      "Next.js",
      "TypeScript",
      "Czech Swimming Techniques",
    ],
    memberOf: [
      {
        "@type": "SportsOrganization",
        name: "Czech Swimming Federation",
        address: {
          "@type": "PostalAddress",
          addressCountry: "Czech Republic",
        },
      },
      {
        "@type": "SportsOrganization",
        name: "Czech Lifesaving Association",
        address: {
          "@type": "PostalAddress",
          addressCountry: "Czech Republic",
        },
      },
    ],
  };
}

// Website schema
export function generateWebSiteSchema(): WebSiteSchema {
  const { siteUrl, siteName } = getBaseData();

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description:
      "Official portfolio of Daniel Mitka - Czech Youth Swimming Champion, lifesaving medalist, and full-stack developer. Explore swimming achievements, competition highlights, and development projects.",
    publisher: generatePersonSchema(),
    inLanguage: ["en", "cs"],
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

// Competition event schema generator
export function generateSportsEventSchema(eventData: {
  name: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: {
    name: string;
    city: string;
    country: string;
    region?: string;
    coordinates?: { lat: number; lng: number };
  };
  sport: string;
  awards?: string[];
  level: "International" | "National" | "Regional";
  organizer?: string;
}): SportsEventSchema {
  const location: PlaceSchema = {
    "@type": "SportsActivityLocation",
    name: eventData.location.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: eventData.location.city,
      addressRegion: eventData.location.region,
      addressCountry: eventData.location.country,
    },
  };

  if (eventData.location.coordinates) {
    location.geo = {
      "@type": "GeoCoordinates",
      latitude: eventData.location.coordinates.lat,
      longitude: eventData.location.coordinates.lng,
    };
  }

  const organizer: OrganizationSchema | undefined = eventData.organizer
    ? {
        "@type": "SportsOrganization",
        name: eventData.organizer,
        address: {
          "@type": "PostalAddress",
          addressCountry: eventData.location.country,
        },
      }
    : undefined;

  return {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: eventData.name,
    description: eventData.description,
    startDate: eventData.startDate,
    endDate: eventData.endDate,
    location,
    organizer,
    sport: eventData.sport,
    eventStatus: "EventScheduled",
    award: eventData.awards,
    participant: [generatePersonSchema()],
    competitor: [generatePersonSchema()],
  };
}

// Helper to create JSON-LD script tag
export function createJsonLd(
  schema:
    | PersonSchema
    | AthleteSchema
    | SportsEventSchema
    | WebSiteSchema
    | Record<string, unknown>
): string {
  return JSON.stringify(schema, null, 2);
}

// Multiple schemas for a page
export function generateMultipleSchemas(
  ...schemas: (
    | PersonSchema
    | AthleteSchema
    | SportsEventSchema
    | WebSiteSchema
    | Record<string, unknown>
  )[]
): string {
  if (schemas.length === 1) {
    return createJsonLd(schemas[0]);
  }

  return createJsonLd({
    "@context": "https://schema.org",
    "@graph": schemas,
  });
}
