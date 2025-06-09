import "./styles/globals.css";
//import "./styles/custom.css"; // <== přidáš tohle
import Navbar from "./components/navbar";
import Footer from "./components/footer";
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
        style={{
          fontFamily: "var(--font-roboto), var(--font-montserrat), sans-serif",
        }}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
