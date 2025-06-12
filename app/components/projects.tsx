"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  img: string;
  type: "internal" | "external";
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "My Love Website",
    description:
      "A romantic website counting days together with interactive hearts and beautiful animations.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://daniel.mitka.cz/terka/",
    img: "/Macbook_No_Background.png",
    type: "external",
    featured: true,
  },
  {
    title: "Automatic Bot for Buying Tickets on Ticketportal",
    description:
      "A bot that automatically buys tickets on Ticketportal for a specific event with specific search parameters.",
    technologies: ["NodeJS", "Javascript", "Puppeteer"],
    link: "https://github.com/danicek555/Auto-Kupovani-Listku",
    img: "/botTicketPortal.png",
    type: "external",
    featured: true,
  },
  // Add more projects here in the future
];

const Projects: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <section
      id="work"
      className={`py-16 px-8 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      } transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-green-500 text-sm font-semibold uppercase tracking-wider mb-4">
            COMPUTER SCIENCE PROJECTS
          </h3>
          <h2
            className={`text-4xl md:text-5xl font-bold ${
              isDarkMode ? "text-white" : "text-gray-800"
            } mb-8 transition-colors duration-300`}
          >
            My Recent Works
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
                    className={`${
                      isDarkMode
                        ? "bg-gray-800 group-hover:bg-gray-700"
                        : "bg-gray-50 group-hover:bg-gray-100"
                    } rounded-3xl p-8 md:p-16 transition-all duration-500`}
                  >
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                      {/* Project Info */}
                      <div className="flex-1 text-center lg:text-left">
                        <h3
                          className={`text-4xl md:text-5xl font-bold ${
                            isDarkMode ? "text-white" : "text-gray-900"
                          } mb-6 transition-colors duration-300`}
                        >
                          {project.title}
                        </h3>
                        <p
                          className={`text-xl ${
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          } mb-8 leading-relaxed max-w-2xl transition-colors duration-300`}
                        >
                          {project.description}
                        </p>

                        {/* Technology Tags */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className={`${
                                isDarkMode
                                  ? "bg-gray-700 text-gray-300 group-hover:bg-gray-600"
                                  : "bg-gray-200 text-gray-700 group-hover:bg-gray-300"
                              } px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="inline-flex items-center text-green-600 font-semibold text-lg group-hover:text-green-700 transition-colors duration-300">
                          Visit Website
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
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              ) : (
                // Regular Project Card for future projects
                <div
                  className={`${
                    isDarkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-white border-gray-100"
                  } rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-102 hover:-translate-y-2 transition-all duration-300 transform border`}
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
                          className={`${
                            isDarkMode
                              ? "bg-gray-700 text-gray-300"
                              : "bg-gray-100 text-gray-700"
                          } px-2 py-1 rounded text-xs font-medium transition-colors duration-300`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <h3
                      className={`text-xl font-bold ${
                        isDarkMode ? "text-white" : "text-gray-800"
                      } mb-3 transition-colors duration-300`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      } mb-4 leading-relaxed transition-colors duration-300`}
                    >
                      {project.description}
                    </p>
                    {project.type === "internal" ? (
                      <Link
                        href={project.link}
                        className="text-green-500 hover:text-green-600 font-medium inline-flex items-center"
                      >
                        View Project &gt;
                      </Link>
                    ) : (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-600 font-medium inline-flex items-center"
                      >
                        View Project &gt;
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
