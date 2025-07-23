import Script from "next/script";
import { roboto, montserrat } from "../styles/fonts";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://daniel.mitka.cz";
const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Daniel Mitka Portfolio";
const siteTitle =
  process.env.NEXT_PUBLIC_SITE_TITLE ||
  "Daniel Mitka - Czech Swimming Champion & Developer";
const siteDescription =
  process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
  "Czech Youth Swimming Champion & Lifesaving Medalist. Competitive swimmer with international experience in Australia, Slovakia, and Czech Republic. Full-stack developer passionate about technology and sports.";
const authorName = process.env.NEXT_PUBLIC_AUTHOR_NAME || "Daniel Mitka";
const twitterHandle = process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@MitkaDaniel";

export const metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${authorName}`,
  },
  description: siteDescription,
  keywords: [
    "Daniel Mitka",
    "Czech swimmer",
    "swimming champion",
    "lifesaving",
    "competitive swimming",
    "youth champion",
    "Czech Republic",
    "Slovakia Cup",
    "Australia swimming",
    "swimming athlete",
    "sports portfolio",
    "developer",
    "full-stack developer",
    "web developer",
    "swimming competitions",
  ],
  authors: [{ name: authorName }],
  creator: authorName,
  publisher: authorName,
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      onimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "cs_CZ",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: siteName,
    images: [
      {
        url: `${siteUrl}/openGraphImage.png`,
        width: 1200,
        height: 630,
        alt: `${authorName} - Czech Swimming Champion & Developer`,
        type: "image/jpeg",
      },
    ],
    // Facebook specific
    appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/openGraphImage.png`],
    creator: twitterHandle,
    site: twitterHandle,
  },

  verification: {
    // Add verification codes if needed
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  category: process.env.NEXT_PUBLIC_SITE_CATEGORY || "Sports & Technology",
  classification:
    process.env.NEXT_PUBLIC_SITE_CLASSIFICATION || "Portfolio Website",
  referrer: "origin-when-cross-origin",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: `${siteUrl}/site.webmanifest`,
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: authorName,
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "x-default": siteUrl,
      "en-US": `${siteUrl}/en`,
      "cs-CZ": `${siteUrl}/cs`,
    },
  },
  metadataBase: new URL(siteUrl),
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#2563eb",
    "msapplication-config": "/browserconfig.xml",

    // Facebook specific meta tags
    "fb:app_id": process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
    "fb:pages": process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID,
    "fb:admins": process.env.NEXT_PUBLIC_FACEBOOK_ADMIN_ID,

    // Enhanced Open Graph for social sharing - force profile image
    "og:image": `${siteUrl}/openGraphImage.png`,
    "og:image:secure_url": `${siteUrl}/openGraphImage.png`,
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/jpeg",
    "og:image:alt": `${authorName} - Czech Swimming Champion & Developer`,
    "og:rich_attachment": "true",
    "og:see_also": `${siteUrl}/competitions`,

    // Additional social platforms
    "pinterest-rich-pin": "true",
    "linkedin:owner": authorName,

    // Schema.org structured data hints
    "profile:first_name": "Daniel",
    "profile:last_name": "Mitka",
    "profile:username": "danielmitka",
  },
};

export const generateViewport = () => ({
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={`${roboto.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SYWRQ64G6V"
        ></Script>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag("js", new Date());
          gtag("config", "G-SYWRQ64G6V");
          `}
        </Script>
        {/* Google Tag Manager */}
        <Script id="google-tag-manager">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-W2CRC6GL');
          `}
        </Script>
        {/* End Google Tag Manager */}
        <Script id="theme-mode" strategy="beforeInteractive">
          {`
            (function () {
              try {
                var theme = sessionStorage.getItem('preserveTheme') ?? localStorage.getItem('darkMode');
                var isDark = theme ? JSON.parse(theme) : false;
                
                // Store the theme preference but don't set the class immediately
                // Let React handle it after hydration to avoid mismatch
                if (isDark) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                } else {
                  document.documentElement.removeAttribute('data-theme');
                }
                
                // Clean up sessionStorage
                sessionStorage.removeItem('preserveTheme');
              } catch (e) {
                // Fallback: remove theme attribute if there's an error
                document.documentElement.removeAttribute('data-theme');
              }
            })();
          `}
        </Script>
      </head>
      <body
        className="transition-colors duration-300 bg-white dark:bg-gray-900"
        style={{
          fontFamily: "var(--font-roboto), var(--font-montserrat), sans-serif",
        }}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W2CRC6GL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
      </body>
    </html>
  );
}
