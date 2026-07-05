"use client";

import { useRef } from "react";
import { useTheme } from "./ThemeProvider";
import { useTranslations } from "next-intl";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionTemplate,
  useReducedMotion,
} from "framer-motion";
import clsx from "clsx";
import ParticleField from "./effects/ParticleField";
import AnimatedText from "./effects/AnimatedText";
import MagneticButton from "./effects/MagneticButton";

const Hero: React.FC = () => {
  const { isDarkMode } = useTheme();
  const t = useTranslations("Hero");
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax: background drifts and scales as the hero scrolls away.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Mouse spotlight that follows the pointer across the hero.
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(circle 350px at ${mouseX}% ${mouseY}%, rgba(255,255,255,0.18), transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reduceMotion) return;
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
    mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      onMouseMove={handleMouseMove}
      className="relative h-screen flex items-center px-8 sm:px-20 overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/skokDoVody.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          y: bgY,
          scale: bgScale,
        }}
      />

      {/* Animated darkening overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-black/40"
      />

      {/* Particle constellation */}
      <ParticleField className="absolute inset-0" />

      {/* Mouse spotlight */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: spotlight }}
      />

      {/* Content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 text-left max-w-2xl"
      >
        <h1
          className={clsx(
            "text-5xl sm:text-6xl font-bold mb-6 font-montserrat transition-colors duration-300",
            isDarkMode ? "text-blue-100" : "text-white"
          )}
        >
          <AnimatedText text="Daniel Mitka" delay={0.4} stagger={0.06} />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
          className={clsx(
            "text-xl sm:text-2xl mb-8 leading-relaxed font-montserrat transition-colors duration-300",
            isDarkMode ? "text-blue-200" : "text-gray-100"
          )}
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
        >
          <MagneticButton
            href="#footer"
            className={clsx(
              "inline-block px-8 py-3 rounded font-bold text-lg shadow-lg transition-colors duration-300",
              isDarkMode
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-green-500 hover:bg-green-600 text-white"
            )}
          >
            {t("cta")}
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll-down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/70 p-1"
        >
          <div className="h-2 w-1 rounded-full bg-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
