import "./styles/globals.css";
//import "./styles/custom.css"; // <== přidáš tohle
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { ThemeProvider } from "./components/ThemeProvider";
import DarkModeToggle from "./components/DarkModeToggle";
import { roboto, montserrat } from "./fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Daniel Mitka",
  description: "Czech Youth Swimming Champion & Lifesaving Medalist",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.variable} ${montserrat.variable}`}>
      <body
        className="transition-colors duration-300 bg-white dark:bg-gray-900"
        style={{
          fontFamily: "var(--font-roboto), var(--font-montserrat), sans-serif",
        }}
      >
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <DarkModeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}
