import Image from "next/image";

import { MapPin, Calendar, Trophy, Target } from "lucide-react";

export default function PodoliCompetitionPage() {
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
    <div className="min-h-screen bg-white">
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
          <div className="absolute inset-0 bg-black/50" />
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

          <div className="bg-white/95 rounded-2xl p-8 inline-flex items-center gap-6 text-gray-900 shadow-2xl">
            <div className="text-6xl">🇨🇿</div>
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">MCR Podolí</h3>
              <p className="text-gray-600 text-lg">
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
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
              <MapPin className="w-8 h-8 text-red-600" />
              <div>
                <h3 className="font-bold text-gray-900">Location</h3>
                <p className="text-gray-600">Podolí, Prague</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
              <Calendar className="w-8 h-8 text-red-600" />
              <div>
                <h3 className="font-bold text-gray-900">Date</h3>
                <p className="text-gray-600">2024</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
              <Trophy className="w-8 h-8 text-red-600" />
              <div>
                <h3 className="font-bold text-gray-900">Level</h3>
                <p className="text-gray-600">National Championship</p>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                National Competition Excellence
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The Czech National Swimming Championship (MCR) in Podolí
                represents the pinnacle of domestic swimming competition, where
                the nation&apos;s best swimmers compete for national titles and
                records.
              </p>
              <div className="border-l-4 border-red-600 pl-6 mb-6">
                <p className="text-xl text-gray-800 font-medium leading-relaxed">
                  Competing at this level demands not only technical excellence
                  but also mental fortitude to perform under the pressure of
                  representing your region at the highest national standard.
                </p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
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

          {/* Competition Events */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Championship Events
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-red-50 to-blue-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <Target className="w-8 h-8 text-red-600 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">
                        {event.event}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
                          {event.result}
                        </span>
                        <span className="text-gray-600 text-sm">
                          {event.time}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Championship Experience
            </h2>
            <div className="bg-gradient-to-r from-red-50 to-blue-50 rounded-2xl p-8">
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  The Czech National Swimming Championship in Podolí provided an
                  invaluable opportunity to compete against the country&apos;s
                  elite swimmers in a world-class facility.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Trophy className="w-8 h-8 text-red-600" />
                  <span className="text-lg font-semibold text-gray-800">
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
