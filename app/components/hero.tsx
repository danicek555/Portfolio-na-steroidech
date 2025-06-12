"use client";

import { useTheme } from "./ThemeProvider";
import clsx from "clsx";

const Hero: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="home"
      className="relative h-screen flex items-center px-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/skokDoVody.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content */}
      <div className="relative z-10 text-left max-w-2xl">
        <h1
          className={clsx(
            "text-6xl font-bold mb-6 font-montserrat transition-colors duration-300",
            isDarkMode ? "text-blue-100" : "text-white"
          )}
        >
          Daniel Mitka
        </h1>
        <p
          className={clsx(
            "text-2xl mb-8 leading-relaxed font-montserrat transition-colors duration-300",
            isDarkMode ? "text-blue-200" : "text-gray-100"
          )}
        >
          Czech Youth Swimming Champion & Lifesaving Medalist
        </p>
        <a
          href="#footer"
          className={clsx(
            "inline-block px-8 py-3 rounded font-bold text-lg transition-all duration-300",
            isDarkMode
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-green-500 hover:bg-green-600 text-white"
          )}
        >
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
