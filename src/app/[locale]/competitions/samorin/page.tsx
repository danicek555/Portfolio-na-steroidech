"use client";

import Image from "next/image";
import { MapPin, Calendar, Users, Clock } from "lucide-react";
import { useTheme } from "../../../../components/ThemeProvider";

export default function SamorinCompetitionPage() {
  const { isDarkMode } = useTheme();

  const events = [
    {
      event: "50m Freestyle",
      status: "Participated",
      description: "Sprint swimming event",
    },
    {
      event: "100m Freestyle",
      status: "Participated",
      description: "Middle distance swimming",
    },
    {
      event: "50m Backstroke",
      status: "Participated",
      description: "Sprint backstroke technique",
    },
    {
      event: "Individual Medley",
      status: "Participated",
      description: "All four swimming strokes",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <Image
            src="/samorin.jpg"
            alt="Slovakia Cup Šamorín 2024"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              International Competition
            </span>
            <span className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              2024
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Slovakia Cup
            <span className="block text-blue-400">Šamorín 2024</span>
          </h1>

          <div
            className={`${
              isDarkMode ? "bg-gray-800/95" : "bg-white/95"
            } rounded-2xl p-8 inline-flex items-center gap-6 ${
              isDarkMode ? "text-white" : "text-gray-900"
            } shadow-2xl transition-colors duration-300`}
          >
            <div className="text-6xl">🏊‍♂️</div>
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">Swimming Excellence</h3>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } text-lg transition-colors duration-300`}
              >
                Multiple Events Participation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Details */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Event Info */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div
              className={`flex items-center gap-4 p-6 ${
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              } rounded-xl transition-colors duration-300`}
            >
              <MapPin className="w-8 h-8 text-purple-600" />
              <div>
                <h3
                  className={`font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  } transition-colors duration-300`}
                >
                  Location
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } transition-colors duration-300`}
                >
                  Šamorín, Slovakia
                </p>
              </div>
            </div>
            <div
              className={`flex items-center gap-4 p-6 ${
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              } rounded-xl transition-colors duration-300`}
            >
              <Calendar className="w-8 h-8 text-purple-600" />
              <div>
                <h3
                  className={`font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  } transition-colors duration-300`}
                >
                  Date
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } transition-colors duration-300`}
                >
                  2024
                </p>
              </div>
            </div>
            <div
              className={`flex items-center gap-4 p-6 ${
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              } rounded-xl transition-colors duration-300`}
            >
              <Users className="w-8 h-8 text-purple-600" />
              <div>
                <h3
                  className={`font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  } transition-colors duration-300`}
                >
                  Competition
                </h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  } transition-colors duration-300`}
                >
                  Slovakia Cup
                </p>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2
                className={`text-4xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                } mb-6 transition-colors duration-300`}
              >
                International Experience
              </h2>
              <p
                className={`text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } mb-6 leading-relaxed transition-colors duration-300`}
              >
                The Slovakia Cup in Šamorín represents an important
                international swimming competition where Daniel Mitka showcased
                his versatility across multiple swimming disciplines.
              </p>
              <div className="border-l-4 border-purple-600 pl-6 mb-6">
                <p
                  className={`text-xl ${
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  } font-medium leading-relaxed transition-colors duration-300`}
                >
                  This competition provided valuable international experience,
                  competing against swimmers from across Central Europe and
                  testing skills in various swimming strokes and distances.
                </p>
              </div>
              <p
                className={`text-lg ${
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                } leading-relaxed transition-colors duration-300`}
              >
                Each event offered unique challenges, from explosive sprint
                performances to technical stroke precision, contributing to
                Daniel&apos;s overall development as a competitive swimmer.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/samorin.jpg"
                alt="Slovakia Cup competition"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Events Participated */}
          <div>
            <h2
              className={`text-4xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              } mb-8 text-center transition-colors duration-300`}
            >
              Events Participated
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={`p-6 ${
                    isDarkMode
                      ? "bg-gray-800 hover:bg-gray-700"
                      : "bg-gray-50 hover:bg-gray-100"
                  } rounded-xl transition-all duration-300`}
                >
                  <div className="flex items-center gap-4">
                    <Clock className="w-8 h-8 text-purple-600" />
                    <div>
                      <h3
                        className={`font-bold ${
                          isDarkMode ? "text-white" : "text-gray-900"
                        } mb-1 transition-colors duration-300`}
                      >
                        {event.event}
                      </h3>
                      <p className="text-purple-600 font-semibold text-sm mb-2">
                        {event.status}
                      </p>
                      <p
                        className={`${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        } text-sm transition-colors duration-300`}
                      >
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
