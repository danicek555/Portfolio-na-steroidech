"use client";

import Image from "next/image";
import { MapPin, Calendar, Trophy, Target } from "lucide-react";
import { useTheme } from "../../../../components/ThemeProvider";
import VideoPlayer from "../../../../components/VideoPlayer";
import clsx from "clsx";

export default function PodoliCompetitionPage() {
  const { isDarkMode } = useTheme();

  const events = [
    {
      event: "50m Freestyle",
      result: "Personal Best",
      time: "TBA",
      description: "Sprint freestyle technique",
    },
    {
      event: "100m Freestyle",
      result: "Strong Performance",
      time: "TBA",
      description: "Middle distance swimming",
    },
    {
      event: "50m Butterfly",
      result: "Competed",
      time: "TBA",
      description: "Technical butterfly stroke",
    },
    {
      event: "100m Individual Medley",
      result: "National Level",
      time: "TBA",
      description: "All four swimming strokes combined",
    },
  ];

  return (
    <div
      className={clsx(
        "min-h-screen transition-colors duration-300",
        isDarkMode ? "bg-gray-900" : "bg-white"
      )}
    >
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <Image
            src="/podoliFoto.jpg"
            alt="Czech National Swimming Championship 2024"
            fill
            className="object-cover"
            priority
          />
          <div
            className={clsx(
              "absolute inset-0 transition-all duration-300",
              isDarkMode ? "bg-black/70" : "bg-black/50"
            )}
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              National Championship
            </span>
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Czech Republic
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Czech National Swimming
            <span className="block text-red-400">Championship 2024</span>
          </h1>

          <div
            className={clsx(
              "rounded-2xl p-8 inline-flex items-center gap-6 shadow-2xl transition-colors duration-300",
              isDarkMode
                ? "bg-gray-800/95 text-white"
                : "bg-white/95 text-gray-900"
            )}
          >
            <div className="text-6xl">🇨🇿</div>
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">MCR Podolí</h3>
              <p
                className={clsx(
                  "text-lg transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                )}
              >
                Representing Czech Republic
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
              className={clsx(
                "flex items-center gap-4 p-6 rounded-xl transition-colors duration-300",
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              )}
            >
              <MapPin className="w-8 h-8 text-red-600" />
              <div>
                <h3
                  className={clsx(
                    "font-bold transition-colors duration-300",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}
                >
                  Location
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  Podolí, Prague
                </p>
              </div>
            </div>
            <div
              className={clsx(
                "flex items-center gap-4 p-6 rounded-xl transition-colors duration-300",
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              )}
            >
              <Calendar className="w-8 h-8 text-red-600" />
              <div>
                <h3
                  className={clsx(
                    "font-bold transition-colors duration-300",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}
                >
                  Date
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  2024
                </p>
              </div>
            </div>
            <div
              className={clsx(
                "flex items-center gap-4 p-6 rounded-xl transition-colors duration-300",
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              )}
            >
              <Trophy className="w-8 h-8 text-red-600" />
              <div>
                <h3
                  className={clsx(
                    "font-bold transition-colors duration-300",
                    isDarkMode ? "text-white" : "text-gray-900"
                  )}
                >
                  Level
                </h3>
                <p
                  className={clsx(
                    "transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  )}
                >
                  National Championship
                </p>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2
                className={clsx(
                  "text-4xl font-bold mb-6 transition-colors duration-300",
                  isDarkMode ? "text-white" : "text-gray-900"
                )}
              >
                National Competition Excellence
              </h2>
              <p
                className={clsx(
                  "text-lg mb-6 leading-relaxed transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                )}
              >
                The Czech National Swimming Championship (MCR) in Podolí
                represents the pinnacle of domestic swimming competition, where
                the nation&apos;s best swimmers compete for national titles and
                records.
              </p>
              <div className="border-l-4 border-red-600 pl-6 mb-6">
                <p
                  className={clsx(
                    "text-xl font-medium leading-relaxed transition-colors duration-300",
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  )}
                >
                  Competing at this level demands not only technical excellence
                  but also mental fortitude to perform under the pressure of
                  representing your region at the highest national standard.
                </p>
              </div>
              <p
                className={clsx(
                  "text-lg leading-relaxed transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                )}
              >
                This championship serves as a crucial stepping stone for
                international competitions and demonstrates Daniel&apos;s
                commitment to achieving excellence in Czech swimming.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/podoliFoto.jpg"
                alt="Podolí swimming complex"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Featured Video Section */}
          <div className="mb-16">
            <h2
              className={clsx(
                "text-4xl font-bold mb-8 text-center transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
            >
              Championship Highlights
            </h2>
            <div className="max-w-4xl mx-auto">
              <VideoPlayer
                videoId="Nm6LNRUCTCM"
                title="Czech National Swimming Championship - Podolí 2024"
                description="Experience the intensity and excellence of the Czech National Swimming Championship. Watch highlights from this prestigious competition featuring the country's top swimmers competing for national titles in the iconic Podolí swimming complex."
                duration="5:30"
                views="1000"
                className="mb-8"
              />
              <div
                className={clsx(
                  "text-center p-6 rounded-xl transition-colors duration-300",
                  isDarkMode
                    ? "bg-gradient-to-r from-red-900/20 to-blue-900/20"
                    : "bg-gradient-to-r from-red-50 to-blue-50"
                )}
              >
                <p
                  className={clsx(
                    "text-lg italic transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  )}
                >
                  &quot;This video captures the essence of competing at the
                  highest level of Czech swimming, showcasing the dedication,
                  technique, and passion that defines national championship
                  competition.&quot;
                </p>
              </div>
            </div>
          </div>

          {/* Competition Events */}
          <div>
            <h2
              className={clsx(
                "text-4xl font-bold mb-8 text-center transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
            >
              Championship Events
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <div
                  key={index}
                  className={clsx(
                    "p-6 rounded-xl border transition-all duration-300 hover:shadow-lg",
                    isDarkMode
                      ? "bg-gradient-to-br from-red-900/30 to-blue-900/30 border-gray-700"
                      : "bg-gradient-to-br from-red-50 to-blue-50 border-gray-200"
                  )}
                >
                  <div className="flex items-start gap-4">
                    <Target className="w-8 h-8 text-red-600 mt-1" />
                    <div className="flex-1">
                      <h3
                        className={clsx(
                          "font-bold mb-2 transition-colors duration-300",
                          isDarkMode ? "text-white" : "text-gray-900"
                        )}
                      >
                        {event.event}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                          {event.result}
                        </span>
                        <span
                          className={clsx(
                            "text-sm transition-colors duration-300",
                            isDarkMode ? "text-gray-300" : "text-gray-600"
                          )}
                        >
                          {event.time}
                        </span>
                      </div>
                      <p
                        className={clsx(
                          "text-sm transition-colors duration-300",
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        )}
                      >
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Championship Highlights */}
          <div className="mt-16 text-center">
            <h2
              className={clsx(
                "text-4xl font-bold mb-8 transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
            >
              Championship Experience
            </h2>
            <div
              className={clsx(
                "rounded-2xl p-8 transition-colors duration-300",
                isDarkMode
                  ? "bg-gradient-to-r from-red-900/30 to-blue-900/30"
                  : "bg-gradient-to-r from-red-50 to-blue-50"
              )}
            >
              <div className="max-w-3xl mx-auto">
                <p
                  className={clsx(
                    "text-xl leading-relaxed mb-6 transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  )}
                >
                  The Czech National Swimming Championship in Podolí provided an
                  invaluable opportunity to compete against the country&apos;s
                  elite swimmers in a world-class facility.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Trophy className="w-8 h-8 text-red-600" />
                  <span
                    className={clsx(
                      "text-lg font-semibold transition-colors duration-300",
                      isDarkMode ? "text-gray-200" : "text-gray-800"
                    )}
                  >
                    National Level Competition Experience
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
