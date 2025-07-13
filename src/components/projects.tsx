"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { useTranslations } from "next-intl";
import clsx from "clsx";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  img: string;
  type: "internal" | "external";
  featured?: boolean;
};

const Projects: React.FC = () => {
  const { isDarkMode } = useTheme();
  const t = useTranslations("Projects");

  const projects: Project[] = [
    {
      title: t("projects.0.title"),
      description: t("projects.0.description"),
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://daniel.mitka.cz/terka/",
      img: "/Macbook_No_Background.png",
      type: "external",
      featured: true,
    },

    {
      title: t("projects.1.title"),
      description: t("projects.1.description"),
      technologies: ["NodeJS", "Javascript", "Puppeteer"],
      link: "https://github.com/danicek555/Auto-Kupovani-Listku",
      img: "/botTicketPortal.png",
      type: "external",
      featured: true,
    },
    // Add more projects here in the future
  ];

  return (
    <section
      id="work"
      className={clsx(
        "py-16 px-8 transition-colors duration-300",
        isDarkMode ? "bg-gray-900" : "bg-white"
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

        <div className="grid gap-12">
          {projects.map((project, i) => (
            <div key={i}>
              {project.featured ? (
                // Featured Project Design
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group cursor-pointer"
                >
                  <div
                    className={clsx(
                      "rounded-3xl p-8 md:p-16 transition-all duration-500",
                      isDarkMode
                        ? "bg-gray-800 group-hover:bg-gray-700"
                        : "bg-gray-50 group-hover:bg-gray-100"
                    )}
                  >
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                      {/* Project Info */}
                      <div className="flex-1 text-center lg:text-left">
                        <h3
                          className={clsx(
                            "text-4xl md:text-5xl font-bold mb-6 transition-colors duration-300",
                            isDarkMode ? "text-white" : "text-gray-900"
                          )}
                        >
                          {project.title}
                        </h3>
                        <p
                          className={clsx(
                            "text-xl mb-8 leading-relaxed max-w-2xl transition-colors duration-300",
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          )}
                        >
                          {project.description}
                        </p>

                        {/* Technology Tags */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className={clsx(
                                "px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300",
                                isDarkMode
                                  ? "bg-gray-700 text-gray-300 group-hover:bg-gray-600"
                                  : "bg-gray-200 text-gray-700 group-hover:bg-gray-300"
                              )}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="inline-flex items-center text-green-600 font-semibold text-lg group-hover:text-green-700 transition-colors duration-300">
                          {t("visitWebsite")}
                          <svg
                            className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* MacBook Image */}
                      <div className="flex-1 max-w-2xl">
                        <div className="relative group-hover:scale-105 transition-transform duration-500">
                          <Image
                            src={project.img}
                            alt={project.title}
                            width={800}
                            height={500}
                            className="w-full h-auto object-contain drop-shadow-2xl"
                            priority
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ) : (
                // Regular Project Card for future projects
                <div
                  className={clsx(
                    "rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-102 hover:-translate-y-2 transition-all duration-300 transform border",
                    isDarkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-100"
                  )}
                >
                  <div className="relative h-64 md:h-80">
                    <Image
                      src={project.img}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className={clsx(
                            "px-2 py-1 rounded text-xs font-medium transition-colors duration-300",
                            isDarkMode
                              ? "bg-gray-700 text-gray-300"
                              : "bg-gray-100 text-gray-700"
                          )}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h3
                      className={clsx(
                        "text-xl font-bold mb-3 transition-colors duration-300",
                        isDarkMode ? "text-white" : "text-gray-800"
                      )}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={clsx(
                        "mb-4 leading-relaxed transition-colors duration-300",
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      )}
                    >
                      {project.description}
                    </p>
                    {project.type === "internal" ? (
                      <Link
                        href={project.link}
                        className="text-green-500 hover:text-green-600 font-medium inline-flex items-center"
                      >
                        {t("viewProject")}
                      </Link>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-600 font-medium inline-flex items-center"
                      >
                        {t("viewProject")}
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
