"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

type Competition = {
  title: string;
  description: string;
  link: string;
  img: string;
};

const competitions: Competition[] = [
  {
    title: "Czech National Swimming Championship 2024",
    description:
      "Experience the pinnacle of Czech swimming competition at the prestigious MCR Podolí championship.",
    link: "/competitions/podoli",
    img: "/podoliFoto.jpg",
  },
  {
    title: "Lifesaving World Championships 2024",
    description:
      "Witness Daniel's incredible journey to becoming a World Vice-champion in lifesaving.",
    link: "/competitions/australia",
    img: "/ausFoto_temp.jpg",
  },
  {
    title: "Slovakia Cup Šamorín 2024",
    description:
      "International swimming competition showcasing versatility across multiple disciplines in Slovakia.",
    link: "/competitions/samorin",
    img: "/samorin.jpg",
  },
];

const Competitions: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="competitions"
      className={`py-16 px-8 ${
        isDarkMode ? "bg-gray-800" : "bg-gray-50"
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-green-500 text-sm font-semibold uppercase tracking-wider mb-4">
            COMPETITIVE SWIMMING
          </h3>
          <h2
            className={`text-4xl md:text-5xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-800"
            } mb-8 transition-colors duration-300`}
          >
            Achieving excellence in the pool
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {competitions.map((comp, i) => (
            <div
              key={i}
              className={`${
                isDarkMode ? "bg-gray-700" : "bg-white"
              } rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-102 hover:-translate-y-2 transition-all duration-300 transform`}
            >
              <div className="relative h-64 md:h-80">
                <Image
                  src={comp.img}
                  alt={comp.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3
                  className={`text-xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-800"
                  } mb-3 transition-colors duration-300`}
                >
                  {comp.title}
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } mb-4 leading-relaxed transition-colors duration-300`}
                >
                  {comp.description}
                </p>
                <Link
                  href={comp.link}
                  className="text-green-500 hover:text-green-600 font-medium inline-flex items-center"
                >
                  Learn more &gt;
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
