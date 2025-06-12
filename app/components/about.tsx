"use client";

import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import clsx from "clsx";

const About: React.FC = () => {
  const { isDarkMode } = useTheme();

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
              RISING STAR SWIMMER
            </span>

            <h2
              className={clsx(
                "text-3xl font-bold font-montserrat leading-tight transition-colors duration-300",
                isDarkMode ? "text-white" : "text-black"
              )}
              style={{ fontWeight: 700, fontFamily: "'Roboto', sans-serif" }}
            >
              Czech National Record Holder
            </h2>

            <p
              className={clsx(
                "text-base leading-relaxed transition-colors duration-300",
                isDarkMode ? "text-gray-300" : "text-gray-600"
              )}
            >
              Daniel Mitka, a 16-year-old elite swimmer from SK Motorlet Praha,
              has achieved remarkable success in Czech swimming. His crowning
              achievement includes setting a national record as part of the
              mixed 4x50m medley relay team at the 2022 Winter Championship in
              Mladá Boleslav. Competing at the highest national level, Daniel
              has secured multiple individual and relay medals, contributing to
              his team&apos;s impressive tally of six individual and four relay
              medals. With his proven track record in competitive swimming,
              Daniel is now setting his sights on joining the Colorado
              Hilltoppers team while pursuing his education in the U.S.
            </p>

            <a
              href="#footer"
              className={clsx(
                "inline-block underline font-medium font-montserrat hover:text-green-500 transition-colors text-sm",
                isDarkMode ? "text-white" : "text-black"
              )}
              style={{ fontWeight: 700, fontFamily: "'Roboto', sans-serif" }}
            >
              Get in touch
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
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
