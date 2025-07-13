"use client";

import Image from "next/image";
import {
  MapPin,
  Calendar,
  Trophy,
  Target,
  Users,
  Medal,
  Timer,
} from "lucide-react";
import { useTheme } from "../../../../components/ThemeProvider";
import VideoPlayer from "../../../../components/VideoPlayer";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function OstravaCompetitionPage() {
  const { isDarkMode } = useTheme();

  const individualResults = [
    {
      event: "100m Freestyle",
      time: "0:55.68",
      points: "578 pts",
      placement: "15th place",
      category: "Overall",
      description: "Sprint freestyle technique",
      videoId: "EHc84z_gTc4",
    },
    {
      event: "400m Individual Medley",
      time: "4:49.75",
      points: "586 pts",
      placement: "6th place",
      category: "Overall",
      description: "All four strokes combined - best individual result",
      videoId: "YjjmiyxTSnU",
    },
    {
      event: "200m Freestyle",
      time: "2:00.81",
      points: "601 pts",
      placement: "8th place",
      category: "Overall",
      description: "Middle distance freestyle",
      videoId: "Nm6LNRUCTCM",
    },
    {
      event: "200m Individual Medley",
      time: "2:15.61",
      points: "594 pts",
      placement: "8th place",
      category: "Overall",
      description: "Technical multi-stroke event",
      videoId: "1ChSgR-nSn0",
    },
  ];

  const teamAchievements = [
    {
      category: "Men's Team",
      result: "8th Place",
      description: "Elite level team competition",
      icon: <Users className="w-6 h-6" />,
    },
    {
      category: "Women's Team",
      result: "8th Place",
      description: "Strong team performance",
      icon: <Users className="w-6 h-6" />,
    },
    {
      category: "Qualification",
      result: "Advanced to Finals",
      description: "Successful semifinal performance",
      icon: <Trophy className="w-6 h-6" />,
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
            src="/ostrava.jpg"
            alt="Team Championship Finals Ostrava 2025"
            fill
            className="object-cover"
            priority
          />
          <div
            className={clsx(
              "absolute inset-0 transition-all duration-300",
              isDarkMode ? "bg-black/75" : "bg-black/60"
            )}
          />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <motion.div
            className="flex items-center justify-center gap-3 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider"
              whileHover={{ scale: 1.05, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
            >
              Team Championship
            </motion.span>
            <motion.span
              className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold"
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Finals
            </motion.span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              MČR Družstev Finále
            </motion.span>
            <motion.span
              className="block text-orange-400"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Ostrava 2025
            </motion.span>
          </motion.h1>

          <motion.div
            className={clsx(
              "rounded-2xl p-8 inline-flex items-center gap-6 shadow-2xl transition-colors duration-300",
              isDarkMode
                ? "bg-gray-800/95 text-white"
                : "bg-white/95 text-gray-900"
            )}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <motion.div
              className="text-6xl"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              🏊‍♂️
            </motion.div>
            <div className="text-left">
              <motion.h3
                className="text-2xl font-bold mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Motorlet Praha
              </motion.h3>
              <motion.p
                className={clsx(
                  "text-lg transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                )}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                1st & 2nd League Finals
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competition Details */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Event Info */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            <motion.div
              className={clsx(
                "flex items-center gap-4 p-6 rounded-xl transition-colors duration-300",
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              )}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <MapPin className="w-8 h-8 text-orange-600" />
              </motion.div>
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
                  Ostrava, Czech Republic
                </p>
              </div>
            </motion.div>
            <motion.div
              className={clsx(
                "flex items-center gap-4 p-6 rounded-xl transition-colors duration-300",
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              )}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Calendar className="w-8 h-8 text-orange-600" />
              </motion.div>
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
                  March 22-23, 2025
                </p>
              </div>
            </motion.div>
            <motion.div
              className={clsx(
                "flex items-center gap-4 p-6 rounded-xl transition-colors duration-300",
                isDarkMode ? "bg-gray-800" : "bg-gray-50"
              )}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <Trophy className="w-8 h-8 text-orange-600" />
              </motion.div>
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
                  Elite Team Championship
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2
                className={clsx(
                  "text-4xl font-bold mb-6 transition-colors duration-300",
                  isDarkMode ? "text-white" : "text-gray-900"
                )}
              >
                Elite Team Championship
              </h2>
              <p
                className={clsx(
                  "text-lg mb-6 leading-relaxed transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                )}
              >
                The Team Championship Finals in Ostrava represents the pinnacle
                of Czech club swimming, where only the best teams advance after
                rigorous semifinal competitions. Motorlet Praha earned their
                place through exceptional performances in earlier rounds.
              </p>
              <div className="border-l-4 border-orange-600 pl-6 mb-6">
                <p
                  className={clsx(
                    "text-xl font-medium leading-relaxed transition-colors duration-300",
                    isDarkMode ? "text-gray-200" : "text-gray-800"
                  )}
                >
                  "We advance to the finals, which will be held on March 22-23
                  in Ostrava" - celebrating the successful semifinal campaign
                  that brought both men's and women's teams to the elite level.
                </p>
              </div>
              <p
                className={clsx(
                  "text-lg leading-relaxed transition-colors duration-300",
                  isDarkMode ? "text-gray-300" : "text-gray-700"
                )}
              >
                The finals showcased Daniel's versatility across multiple
                disciplines, contributing crucial points to Motorlet Praha's
                overall team success in this prestigious competition.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/ostrava.jpg"
                alt="Team Championship competition"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Team Achievements */}
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.h2
              className={clsx(
                "text-4xl font-bold mb-8 text-center transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Team Achievements
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-3 gap-6"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {teamAchievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className={clsx(
                    "text-center p-6 rounded-xl transition-all duration-300 hover:shadow-lg",
                    isDarkMode
                      ? "bg-gradient-to-br from-orange-900/30 to-purple-900/30 border border-gray-700"
                      : "bg-gradient-to-br from-orange-50 to-purple-50 border border-gray-200"
                  )}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.9 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex justify-center mb-4">
                    <motion.div
                      className="p-3 rounded-full bg-orange-600 text-white"
                      whileHover={{
                        scale: 1.1,
                        rotate: 360,
                        transition: { duration: 0.3 },
                      }}
                    >
                      {achievement.icon}
                    </motion.div>
                  </div>
                  <h3
                    className={clsx(
                      "text-xl font-bold mb-2 transition-colors duration-300",
                      isDarkMode ? "text-white" : "text-gray-900"
                    )}
                  >
                    {achievement.category}
                  </h3>
                  <motion.p
                    className="text-2xl font-bold text-orange-600 mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    {achievement.result}
                  </motion.p>
                  <p
                    className={clsx(
                      "text-sm transition-colors duration-300",
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Individual Results */}
          <motion.div
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <motion.h2
              className={clsx(
                "text-4xl font-bold mb-8 text-center transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Daniel's Individual Results
            </motion.h2>
            <motion.div
              className="grid md:grid-cols-2 gap-6 mb-12"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {individualResults.map((result, index) => (
                <motion.div
                  key={index}
                  className={clsx(
                    "p-6 rounded-xl border transition-all duration-300 hover:shadow-lg",
                    isDarkMode
                      ? "bg-gradient-to-br from-orange-900/20 to-purple-900/20 border-gray-700"
                      : "bg-gradient-to-br from-orange-50 to-purple-50 border-gray-200"
                  )}
                  variants={{
                    hidden: { opacity: 0, y: 30, scale: 0.95 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="flex-shrink-0 p-2 rounded-lg bg-orange-600 text-white"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Timer className="w-6 h-6" />
                    </motion.div>
                    <div className="flex-1">
                      <h3
                        className={clsx(
                          "text-xl font-bold mb-2 transition-colors duration-300",
                          isDarkMode ? "text-white" : "text-gray-900"
                        )}
                      >
                        {result.event}
                      </h3>
                      <div className="flex items-center gap-4 mb-3">
                        <motion.span
                          className="text-2xl font-bold text-orange-600"
                          whileHover={{ scale: 1.05 }}
                        >
                          {result.time}
                        </motion.span>
                        <motion.span
                          className="text-sm font-medium text-purple-600"
                          whileHover={{ scale: 1.05 }}
                        >
                          {result.points}
                        </motion.span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <Medal className="w-4 h-4 text-orange-600" />
                        <span
                          className={clsx(
                            "font-medium transition-colors duration-300",
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                          )}
                        >
                          {result.placement} in {result.category}
                        </span>
                      </div>
                      <p
                        className={clsx(
                          "text-sm transition-colors duration-300",
                          isDarkMode ? "text-gray-400" : "text-gray-600"
                        )}
                      >
                        {result.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Event Videos */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              <motion.h3
                className={clsx(
                  "text-3xl font-bold mb-8 text-center transition-colors duration-300",
                  isDarkMode ? "text-white" : "text-gray-900"
                )}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                Event Videos
              </motion.h3>
              <motion.div
                className="grid md:grid-cols-2 gap-8"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.3,
                    },
                  },
                }}
              >
                {individualResults.map((result, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 40, scale: 0.9 },
                      visible: { opacity: 1, y: 0, scale: 1 },
                    }}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <VideoPlayer
                      videoId={result.videoId}
                      title={`${result.event} - Team Championship Finals Ostrava 2025`}
                      description={`Watch Daniel's performance in the ${result.event} at the Team Championship Finals in Ostrava. Final time: ${result.time}, earning ${result.points} and finishing ${result.placement}.`}
                      duration="3:45"
                      views="850"
                      className="mb-4"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Competition Statistics */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div
              className={clsx(
                "p-6 rounded-xl transition-colors duration-300",
                isDarkMode
                  ? "bg-gradient-to-br from-orange-900/30 to-purple-900/30"
                  : "bg-gradient-to-br from-orange-50 to-purple-50"
              )}
            >
              <h3
                className={clsx(
                  "text-2xl font-bold mb-4 transition-colors duration-300",
                  isDarkMode ? "text-white" : "text-gray-900"
                )}
              >
                Competition Overview
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span
                    className={clsx(
                      "transition-colors duration-300",
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    Events Competed:
                  </span>
                  <span className="font-bold text-orange-600">
                    4 Individual
                  </span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={clsx(
                      "transition-colors duration-300",
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    Best Placement:
                  </span>
                  <span className="font-bold text-orange-600">6th Place</span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={clsx(
                      "transition-colors duration-300",
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    Highest Points:
                  </span>
                  <span className="font-bold text-orange-600">601 pts</span>
                </div>
              </div>
            </div>
            <div
              className={clsx(
                "p-6 rounded-xl transition-colors duration-300",
                isDarkMode
                  ? "bg-gradient-to-br from-purple-900/30 to-orange-900/30"
                  : "bg-gradient-to-br from-purple-50 to-orange-50"
              )}
            >
              <h3
                className={clsx(
                  "text-2xl font-bold mb-4 transition-colors duration-300",
                  isDarkMode ? "text-white" : "text-gray-900"
                )}
              >
                Team Performance
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span
                    className={clsx(
                      "transition-colors duration-300",
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    Men's Team:
                  </span>
                  <span className="font-bold text-purple-600">8th Place</span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={clsx(
                      "transition-colors duration-300",
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    Women's Team:
                  </span>
                  <span className="font-bold text-purple-600">8th Place</span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={clsx(
                      "transition-colors duration-300",
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    )}
                  >
                    Overall Result:
                  </span>
                  <span className="font-bold text-purple-600">Improvement</span>
                </div>
              </div>
            </div>
          </div>

          {/* Championship Highlights */}
          <div className="text-center">
            <h2
              className={clsx(
                "text-4xl font-bold mb-8 transition-colors duration-300",
                isDarkMode ? "text-white" : "text-gray-900"
              )}
            >
              Championship Impact
            </h2>
            <div
              className={clsx(
                "rounded-2xl p-8 transition-colors duration-300",
                isDarkMode
                  ? "bg-gradient-to-r from-orange-900/30 to-purple-900/30"
                  : "bg-gradient-to-r from-orange-50 to-purple-50"
              )}
            >
              <div className="max-w-3xl mx-auto">
                <p
                  className={clsx(
                    "text-xl leading-relaxed mb-6 transition-colors duration-300",
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  )}
                >
                  The Team Championship Finals in Ostrava showcased the strength
                  of Czech club swimming, with Motorlet Praha achieving solid
                  results across both men's and women's divisions. Daniel's
                  contribution across four individual events demonstrated his
                  versatility and commitment to team success.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Trophy className="w-8 h-8 text-orange-600" />
                  <span
                    className={clsx(
                      "text-lg font-semibold transition-colors duration-300",
                      isDarkMode ? "text-gray-200" : "text-gray-800"
                    )}
                  >
                    Elite Team Championship Finals Experience
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
