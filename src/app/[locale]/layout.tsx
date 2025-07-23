import "../../styles/globals.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { ThemeProvider } from "../../components/ThemeProvider";
import DarkModeToggle from "../../components/DarkModeToggle";
import LanguageToggle from "../../components/LanguageToggle";
import { roboto, montserrat } from "../../styles/fonts";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";

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
    <div
      className={`${roboto.variable} ${montserrat.variable}`}
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
    </div>
  );
}
