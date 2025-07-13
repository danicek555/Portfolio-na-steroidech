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
  title: "Daniel Mitka",
  description: "Czech Youth Swimming Champion & Lifesaving Medalist",
};

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
