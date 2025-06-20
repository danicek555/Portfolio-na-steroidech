"use client";

import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { useTranslations } from "next-intl";
import clsx from "clsx";

const About: React.FC = () => {
  const { isDarkMode } = useTheme();
  const t = useTranslations("About");

  return (
    <section
      id="about"
      className={clsx(
        "py-16 px-8 transition-colors duration-300",
        isDarkMode ? "bg-gray-900" : "bg-white"
      )}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-4">
            <span
              className="text-green-500 uppercase text-xs font-bold font-montserrat tracking-wider"
              style={{ fontWeight: 700, fontFamily: "'Roboto', sans-serif" }}
            >
              {t("badge")}
            </span>

            <h2
              className={clsx(
                "text-3xl font-bold font-montserrat leading-tight transition-colors duration-300",
                isDarkMode ? "text-white" : "text-black"
              )}
              style={{ fontWeight: 700, fontFamily: "'Roboto', sans-serif" }}
            >
              {t("title")}
            </h2>

            <p
              className={clsx(
                "text-base leading-relaxed transition-colors duration-300",
                isDarkMode ? "text-gray-300" : "text-gray-600"
              )}
            >
              {t("description")}
            </p>

            <a
              href="#footer"
              className={clsx(
                "inline-block underline font-medium font-montserrat hover:text-green-500 transition-colors text-sm",
                isDarkMode ? "text-white" : "text-black"
              )}
              style={{ fontWeight: 700, fontFamily: "'Roboto', sans-serif" }}
            >
              {t("cta")}
            </a>
          </div>
          {/* Right Column - Image */}
          <div className="relative max-w-xl">
            <Image
              src="/profilovaFotka.jpg"
              alt="Daniel Mitka swimming"
              width={300}
              height={400}
              className="rounded-lg object-cover w-full h-auto "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
