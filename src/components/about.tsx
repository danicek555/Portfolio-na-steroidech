"use client";

import Image from "next/image";
import { useTheme } from "./ThemeProvider";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import clsx from "clsx";
import TiltCard from "./effects/TiltCard";

const About: React.FC = () => {
  const { isDarkMode } = useTheme();
  const t = useTranslations("About");

  // Animation variants
  const slideInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const slideInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

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
          <motion.div
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-green-500 uppercase text-xs font-bold font-montserrat tracking-wider"
              style={{ fontWeight: 700, fontFamily: "'Roboto', sans-serif" }}
            >
              {t("badge")}
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className={clsx(
                "text-3xl font-bold font-montserrat leading-tight transition-colors duration-300",
                isDarkMode ? "text-white" : "text-black"
              )}
              style={{ fontWeight: 700, fontFamily: "'Roboto', sans-serif" }}
            >
              {t("title")}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className={clsx(
                "text-base leading-relaxed transition-colors duration-300",
                isDarkMode ? "text-gray-300" : "text-gray-600"
              )}
            >
              {t("description")}
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              whileHover={{
                x: 4,
                transition: { duration: 0.2 },
              }}
              href="#footer"
              className={clsx(
                "inline-block underline font-medium font-montserrat hover:text-green-500 transition-colors text-sm",
                isDarkMode ? "text-white" : "text-black"
              )}
              style={{ fontWeight: 700, fontFamily: "'Roboto', sans-serif" }}
            >
              {t("cta")}
            </motion.a>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="relative max-w-xl mx-auto lg:mx-0"
          >
            <TiltCard
              max={16}
              className="overflow-hidden rounded-lg shadow-2xl"
            >
              <Image
                src="/profilovaFotka.jpg"
                alt="Daniel Mitka swimming"
                width={500}
                height={600}
                className="rounded-lg object-cover w-full h-auto"
                priority
              />
            </TiltCard>

            {/* Floating accent elements */}
            <motion.div
              animate={{ y: [0, -16, 0], scale: [1, 1.1, 1] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-green-500 rounded-full opacity-20 blur-sm"
            />
            <motion.div
              animate={{ y: [0, 14, 0], x: [0, 10, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -left-6 w-16 h-16 bg-blue-500 rounded-full opacity-20 blur-sm"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
