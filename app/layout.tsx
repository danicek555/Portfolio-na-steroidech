import "./styles/globals.css";
//import "./styles/custom.css"; // <== přidáš tohle
import Navbar from "./components/navbar";
import Footer from "./components/footer";
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
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@300;400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Roboto', 'Montserrat', sans-serif" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
