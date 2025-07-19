import "../../styles/globals.css";
// import "./styles/custom.css"; // <== přidáš tohle
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { ThemeProvider } from "../../components/ThemeProvider";
import DarkModeToggle from "../../components/DarkModeToggle";
import LanguageToggle from "../../components/LanguageToggle";
import { roboto, montserrat } from "../../styles/fonts";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import Script from "next/script";

export const metadata = {
  title: {
    default: "Daniel Mitka - Czech Swimming Champion & Developer",
    template: "%s | Daniel Mitka",
  },
  description:
    "Czech Youth Swimming Champion & Lifesaving Medalist. Competitive swimmer with international experience in Australia, Slovakia, and Czech Republic. Full-stack developer passionate about technology and sports.",
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
  authors: [{ name: "Daniel Mitka" }],
  creator: "Daniel Mitka",
  publisher: "Daniel Mitka",
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
    type: "website",
    locale: "en_US",
    alternateLocale: "cs_CZ",
    url: "https://danielmitka.com",
    title: "Daniel Mitka - Czech Swimming Champion & Developer",
    description:
      "Czech Youth Swimming Champion & Lifesaving Medalist. Competitive swimmer with international experience and full-stack developer.",
    siteName: "Daniel Mitka Portfolio",
    images: [
      {
        url: "/profilovaFotka.jpg",
        width: 1200,
        height: 630,
        alt: "Daniel Mitka - Czech Swimming Champion",
      },
      {
        url: "/skokDoVody.jpg",
        width: 1200,
        height: 630,
        alt: "Daniel Mitka swimming competition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Mitka - Czech Swimming Champion & Developer",
    description:
      "Czech Youth Swimming Champion & Lifesaving Medalist. Competitive swimmer with international experience.",
    images: ["/profilovaFotka.jpg"],
    creator: "@MitkaDaniel", // Add your Twitter handle if you have one
  },
  verification: {
    // Add verification codes if needed
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  category: "Sports & Technology",
  classification: "Portfolio Website",
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
    // other: [
    //   {
    //     rel: "mask-icon",
    //     url: "/safari-pinned-tab.svg", // If you have this file
    //     color: "#2563eb",
    //   },
    // ]
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Daniel Mitka",
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
    url: false,
  },
  alternates: {
    canonical: "https://daniel.mitka.cz",
    languages: {
      "en-US": "https://daniel.mitka.cz/en",
      "cs-CZ": "https://daniel.mitka.cz/cs",
    },
  },
  metadataBase: new URL("https://daniel.mitka.cz"), // Update with your actual domain
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#2563eb",
    "msapplication-config": "/browserconfig.xml", // If you have this file
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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      className={`${roboto.variable} ${montserrat.variable}`}
      suppressHydrationWarning
    >
      <head>
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
        <NextIntlClientProvider>
          <ThemeProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <DarkModeToggle />
            <LanguageToggle />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
