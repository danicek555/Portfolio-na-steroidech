import Image from "next/image";
import { MapPin, Calendar, Users, Clock } from "lucide-react";

export default function SamorinCompetitionPage() {
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <Image
            src="/samorin.png"
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

          <div className="bg-white/95 rounded-2xl p-8 inline-flex items-center gap-6 text-gray-900 shadow-2xl">
            <div className="text-6xl">🏊‍♂️</div>
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">Swimming Excellence</h3>
              <p className="text-gray-600 text-lg">
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
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
              <MapPin className="w-8 h-8 text-purple-600" />
              <div>
                <h3 className="font-bold text-gray-900">Location</h3>
                <p className="text-gray-600">Šamorín, Slovakia</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
              <Calendar className="w-8 h-8 text-purple-600" />
              <div>
                <h3 className="font-bold text-gray-900">Date</h3>
                <p className="text-gray-600">2024</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
              <Users className="w-8 h-8 text-purple-600" />
              <div>
                <h3 className="font-bold text-gray-900">Competition</h3>
                <p className="text-gray-600">Slovakia Cup</p>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                International Experience
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The Slovakia Cup in Šamorín represents an important
                international swimming competition where Daniel Mitka showcased
                his versatility across multiple swimming disciplines.
              </p>
              <div className="border-l-4 border-purple-600 pl-6 mb-6">
                <p className="text-xl text-gray-800 font-medium leading-relaxed">
                  This competition provided valuable international experience,
                  competing against swimmers from across Central Europe and
                  testing skills in various swimming strokes and distances.
                </p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
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
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Events Participated
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {events.map((event, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <Clock className="w-8 h-8 text-purple-600" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">
                        {event.event}
                      </h3>
                      <p className="text-purple-600 font-semibold text-sm mb-2">
                        {event.status}
                      </p>
                      <p className="text-gray-600 text-sm">
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
