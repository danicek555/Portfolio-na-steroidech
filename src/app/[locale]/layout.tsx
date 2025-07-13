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
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={`${roboto.variable} ${montserrat.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('darkMode');
                  if (theme && JSON.parse(theme)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {
                  // Ignore errors
                }
              })();
            `,
          }}
        />
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
