// Schema.org JSON-LD structured data utilities

export interface PersonSchema {
  "@context": "https://schema.org";
  "@type": "Person";
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
  memberOf?: OrganizationSchema[];
  hasOccupation?: OccupationSchema[];
  inLanguage?: string;
}

export interface OccupationSchema {
  "@context"?: "https://schema.org";
  "@type": "Occupation";
  name: string;
  occupationalCategory?: string;
  responsibilities?: string[];
  skills?: string[];
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
  inLanguage?: string;
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
  publisher: PersonSchema;
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

// Locale-specific data mappings
const getLocalizedData = (locale: string = "en") => {
  if (locale === "cs") {
    return {
      description:
        "Daniel Mitka, 16letý elitní plavec ze SK Motorlet Praha, dosáhl pozoruhodných úspěchů v českém plavání. Český juniorský mistr v plavání a medailista na mistrovství světa v záchranářství. Konkurenční plavec s mezinárodními zkušenostmi v Austrálii, na Slovensku a v České republice. Full-stack vývojář vášnivý pro technologie a sport.",
      jobTitles: [
        "Profesionální sportovec",
        "Full-Stack vývojář",
        "Závodní plavec",
      ],
      athleteOccupation: {
        name: "Profesionální sportovec",
        category: "Sport a rekreace",
        responsibilities: [
          "Závodní plavání",
          "Záchranářství",
          "Trénink",
          "Účast na soutěžích",
        ],
        skills: [
          "Plavání",
          "Záchranářství",
          "Bezpečnost na vodě",
          "Sportovní výkon",
          "Závodní strategie",
        ],
      },
      developerOccupation: {
        name: "Full-Stack vývojář",
        category: "Počítače a informační technologie",
        responsibilities: [
          "Webový vývoj",
          "Softwarové inženýrství",
          "Frontend vývoj",
          "Backend vývoj",
        ],
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Webový vývoj",
          "Full-Stack vývoj",
        ],
      },
      awards: [
        "Český juniorský mistr v plavání",
        "Stříbrná medaile - Mistrovství světa v záchranářství Austrálie 2023",
        "Medailista mistrovství světa v záchranářství",
        "Účastník Slovenského poháru",
        "Účastník českého národního mistrovství",
      ],
      organizations: [
        { name: "Český svaz plavání", country: "Česká republika" },
        { name: "Česká asociace záchranářů", country: "Česká republika" },
      ],
      knowsAbout: [
        "Závodní plavání",
        "Záchranářství",
        "Bezpečnost na vodě",
        "Sportovní trénink",
        "Webový vývoj",
        "Full-Stack vývoj",
        "React",
        "Next.js",
        "TypeScript",
        "České plavecké techniky",
      ],
    };
  }

  // Default English data
  return {
    description:
      "Czech Youth Swimming Champion & Lifesaving Medalist. Competitive swimmer with international experience in Australia, Slovakia, and Czech Republic. Full-stack developer passionate about technology and sports.",
    jobTitles: [
      "Professional Athlete",
      "Full-Stack Developer",
      "Competitive Swimmer",
    ],
    athleteOccupation: {
      name: "Professional Athlete",
      category: "Sports and Recreation",
      responsibilities: [
        "Competitive Swimming",
        "Lifesaving",
        "Training",
        "Competition Participation",
      ],
      skills: [
        "Swimming",
        "Lifesaving",
        "Water Safety",
        "Athletic Performance",
        "Competition Strategy",
      ],
    },
    developerOccupation: {
      name: "Full-Stack Developer",
      category: "Computer and Information Technology",
      responsibilities: [
        "Web Development",
        "Software Engineering",
        "Frontend Development",
        "Backend Development",
      ],
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Web Development",
        "Full-Stack Development",
      ],
    },
    awards: [
      "Czech Youth Swimming Champion",
      "Silver Medal - Australia Youth Swimming Championship 2023",
      "Lifesaving World Championships Medalist",
      "Slovakia Cup Competitor",
      "Czech National Championships Participant",
    ],
    organizations: [
      { name: "Czech Swimming Federation", country: "Czech Republic" },
      { name: "Czech Lifesaving Association", country: "Czech Republic" },
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
  };
};

// Main person/athlete schema with locale support
export function generatePersonSchema(locale: string = "en"): PersonSchema {
  const {
    siteUrl,
    authorName,
    twitterHandle,
    facebookProfile,
    instagramProfile,
  } = getBaseData();
  const localizedData = getLocalizedData(locale);

  // Define occupations using proper Schema.org Occupation type
  const athleteOccupation: OccupationSchema = {
    "@type": "Occupation",
    name: localizedData.athleteOccupation.name,
    occupationalCategory: localizedData.athleteOccupation.category,
    responsibilities: localizedData.athleteOccupation.responsibilities,
    skills: localizedData.athleteOccupation.skills,
  };

  const developerOccupation: OccupationSchema = {
    "@type": "Occupation",
    name: localizedData.developerOccupation.name,
    occupationalCategory: localizedData.developerOccupation.category,
    responsibilities: localizedData.developerOccupation.responsibilities,
    skills: localizedData.developerOccupation.skills,
  };

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: authorName,
    url: siteUrl,
    image: `${siteUrl}/profilovaFotka.jpg`,
    description: localizedData.description,
    jobTitle: localizedData.jobTitles,
    nationality: "Czech Republic",
    birthPlace: "Czech Republic",
    hasOccupation: [athleteOccupation, developerOccupation],
    award: localizedData.awards,
    sameAs: [
      twitterHandle.startsWith("@")
        ? `https://twitter.com/${twitterHandle.substring(1)}`
        : twitterHandle,
      facebookProfile,
      instagramProfile,
      `${siteUrl}/cs`,
      `${siteUrl}/en`,
    ],
    knowsAbout: localizedData.knowsAbout,
    memberOf: localizedData.organizations.map((org) => ({
      "@type": "SportsOrganization" as const,
      name: org.name,
      address: {
        "@type": "PostalAddress" as const,
        addressCountry: org.country,
      },
    })),
    inLanguage: locale === "cs" ? "cs-CZ" : "en-US",
  };
}

// Website schema with locale support
export function generateWebSiteSchema(locale: string = "en"): WebSiteSchema {
  const { siteUrl, siteName } = getBaseData();

  const descriptions = {
    en: "Official portfolio of Daniel Mitka - Czech Youth Swimming Champion, lifesaving medalist, and full-stack developer. Explore swimming achievements, competition highlights, and development projects.",
    cs: "Oficiální portfolio Daniela Mitky - český juniorský mistr v plavání, medailista v záchranářství a full-stack vývojář. Prozkoumejte plavecké úspěchy, závodní vrcholy a vývojové projekty.",
  };

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description:
      descriptions[locale as keyof typeof descriptions] || descriptions.en,
    publisher: generatePersonSchema(locale),
    inLanguage: ["en", "cs"],
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

// Competition event schema generator with locale support
export function generateSportsEventSchema(
  eventData: {
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
  },
  locale: string = "en"
): SportsEventSchema {
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
    participant: [generatePersonSchema(locale)],
    competitor: [generatePersonSchema(locale)],
    inLanguage: locale === "cs" ? "cs-CZ" : "en-US",
  };
}

// Helper to create JSON-LD script tag
export function createJsonLd(
  schema:
    | PersonSchema
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
