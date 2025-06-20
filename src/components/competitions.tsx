"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { useTranslations } from "next-intl";
import clsx from "clsx";

type Competition = {
  title: string;
  description: string;
  link: string;
  img: string;
};

const Competitions: React.FC = () => {
  const { isDarkMode } = useTheme();
  const t = useTranslations("Competitions");

  const competitions: Competition[] = [
    {
      title: t("competitions.0.title"),
      description: t("competitions.0.description"),
      link: "/competitions/podoli",
      img: "/podoliFoto.jpg",
    },
    {
      title: t("competitions.1.title"),
      description: t("competitions.1.description"),
      link: "/competitions/australia",
      img: "/ausFoto_temp.jpg",
    },
    {
      title: t("competitions.2.title"),
      description: t("competitions.2.description"),
      link: "/competitions/samorin",
      img: "/samorin.jpg",
    },
  ];

  return (
    <section
      id="competitions"
      className={clsx(
        "py-16 px-8 transition-colors duration-300",
        isDarkMode ? "bg-gray-800" : "bg-gray-50"
      )}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-green-500 text-sm font-semibold uppercase tracking-wider mb-4">
            {t("badge")}
          </h3>
          <h2
            className={clsx(
              "text-4xl md:text-5xl font-bold mb-8 transition-colors duration-300",
              isDarkMode ? "text-white" : "text-gray-800"
            )}
          >
            {t("title")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {competitions.map((comp, i) => (
            <div
              key={i}
              className={clsx(
                "rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-102 hover:-translate-y-2 transition-all duration-300 transform",
                isDarkMode ? "bg-gray-700" : "bg-white"
              )}
            >
              <div className="relative h-64 md:h-80">
                <Image
                  src={comp.img}
                  alt={comp.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <h3
                  className={clsx(
                    "text-xl font-bold mb-3 transition-colors duration-300",
                    isDarkMode ? "text-white" : "text-gray-800"
                  )}
                >
                  {comp.title}
                </h3>
                <p
                  className={clsx(
                    "mb-4 leading-relaxed transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  {comp.description}
                </p>
                <Link
                  href={comp.link}
                  className="text-green-500 hover:text-green-600 font-medium inline-flex items-center"
                >
                  {t("cta")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitions;
