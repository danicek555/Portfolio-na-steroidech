"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const competitions: Competition[] = [
    {
      title: t("competitions.0.title"),
      description: t("competitions.0.description"),
      link: "/competitions/ostrava",
      img: "/ostrava.jpg",
    },
    {
      title: t("competitions.1.title"),
      description: t("competitions.1.description"),
      link: "/competitions/samorin",
      img: "/samorin.jpg",
    },
    {
      title: t("competitions.2.title"),
      description: t("competitions.2.description"),
      link: "/competitions/australia",
      img: "/ausFoto_temp.jpg",
    },
    {
      title: t("competitions.3.title"),
      description: t("competitions.3.description"),
      link: "/competitions/podoli",
      img: "/podoliFoto.jpg",
    },
  ];

  const hasMoreThanThree = competitions.length > 3;
  const slidesToShow = hasMoreThanThree ? 3 : competitions.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev + 1 >= competitions.length - slidesToShow + 1 ? 0 : prev + 1
    );
  }, [competitions.length, slidesToShow]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) =>
      prev - 1 < 0 ? competitions.length - slidesToShow : prev - 1
    );
  }, [competitions.length, slidesToShow]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Mouse drag functionality
  const handleMouseDown = (event: React.MouseEvent) => {
    if (!hasMoreThanThree) return;
    setIsDragging(true);
    setDragStart(event.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging || !hasMoreThanThree) return;
    const currentX = event.clientX;
    const offset = currentX - dragStart;
    setDragOffset(offset);
  };

  const handleMouseUp = () => {
    if (!isDragging || !hasMoreThanThree) return;
    setIsDragging(false);

    // If drag distance is significant, change slide
    if (Math.abs(dragOffset) > 100) {
      if (dragOffset > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    setDragOffset(0);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!hasMoreThanThree) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide();
      } else if (event.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hasMoreThanThree, nextSlide, prevSlide]);

  // Handle mouse leave to reset drag state
  useEffect(() => {
    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        setDragOffset(0);
      }
    };

    window.addEventListener("mouseup", handleMouseUp);
    return () => window.removeEventListener("mouseup", handleMouseUp);
  }, [isDragging]);

  const renderCompetitionCard = (comp: Competition, index: number) => (
    <motion.div
      key={index}
      className={clsx(
        "rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2",
        isDarkMode ? "bg-gray-700" : "bg-white",
        hasMoreThanThree ? "min-w-0 flex-shrink-0" : ""
      )}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
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
          className="text-green-500 hover:text-green-600 font-medium inline-flex items-center transition-colors duration-300"
        >
          {t("cta")}
          <motion.span
            className="ml-1"
            initial={{ x: 0 }}
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
          >
            →
          </motion.span>
        </Link>
      </div>
    </motion.div>
  );

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

        {hasMoreThanThree ? (
          // Slider Layout for 4+ competitions with mouse drag
          <div className="relative">
            {/* Slider Container with increased height */}
            <div
              className="overflow-hidden cursor-grab active:cursor-grabbing py-8"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <motion.div
                className="flex gap-8"
                animate={{
                  x: `calc(-${currentSlide * (100 / slidesToShow)}% - ${
                    currentSlide * 2
                  }rem + ${isDragging ? dragOffset : 0}px)`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  duration: isDragging ? 0 : undefined,
                }}
              >
                {competitions.map((comp, index) => (
                  <div key={index} className="w-full md:w-1/3 flex-shrink-0">
                    {renderCompetitionCard(comp, index)}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({
                length: competitions.length - slidesToShow + 1,
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={clsx(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    currentSlide === index
                      ? "bg-green-500 scale-110"
                      : isDarkMode
                      ? "bg-gray-600 hover:bg-gray-500"
                      : "bg-gray-300 hover:bg-gray-400"
                  )}
                />
              ))}
            </div>

            {/* Competition Counter */}
            <div className="text-center mt-4">
              <span
                className={clsx(
                  "text-sm transition-colors duration-300",
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                )}
              >
                {currentSlide + 1} -{" "}
                {Math.min(currentSlide + slidesToShow, competitions.length)} of{" "}
                {competitions.length} competitions
              </span>
            </div>

            {/* Mouse Navigation Help */}
            <div className="text-center mt-2">
              <span
                className={clsx(
                  "text-xs transition-colors duration-300",
                  isDarkMode ? "text-gray-500" : "text-gray-500"
                )}
              >
                Drag to navigate • Use ← → keys to navigate
              </span>
            </div>
          </div>
        ) : (
          // Regular Grid Layout for 3 or fewer competitions
          <div className="grid md:grid-cols-3 gap-8">
            {competitions.map((comp, index) =>
              renderCompetitionCard(comp, index)
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Competitions;
