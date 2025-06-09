import Image from "next/image";
import { Award, MapPin, Calendar, Users } from "lucide-react";

export default function AustraliaCompetitionPage() {
  const achievements = [
    {
      position: "2nd",
      event: "Line Throw Event",
      description: "Silver medal with Adam Pekař",
      highlight: true,
    },
    {
      position: "4th",
      event: "Rescue Tube Rescue Relay",
      description: "Outperforming teams from New Zealand and South Africa",
    },
    {
      position: "6th",
      event: "4x25 Manikin Relay",
      description: "Outstanding teamwork and precision",
    },
    {
      position: "14th",
      event: "Beach Sprint",
      description: "Individual excellence on sand",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0">
          <Image
            src="/winPhoto.jpg"
            alt="Competition victory moment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
              International Success
            </span>
            <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              Featured
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Silver Medal at the 2024
            <span className="block text-yellow-400">
              Lifesaving World Championships
            </span>
          </h1>

          <div className="bg-white/95 rounded-2xl p-8 inline-flex items-center gap-6 text-gray-900 shadow-2xl">
            <div className="text-6xl">🥈</div>
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2">Line Throw Event</h3>
              <p className="text-gray-600 text-lg">With partner Adam Pekař</p>
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
              <MapPin className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-bold text-gray-900">Location</h3>
                <p className="text-gray-600">Gold Coast, Australia</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
              <Calendar className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-bold text-gray-900">Date</h3>
                <p className="text-gray-600">2024</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl">
              <Users className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-bold text-gray-900">Category</h3>
                <p className="text-gray-600">Junior Division</p>
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Championship Story
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At the prestigious 2024 Lifesaving World Championships in Gold
                Coast, Australia, Daniel Mitka demonstrated exceptional prowess
                in multiple disciplines, proudly representing the Czech Republic
                in the junior category.
              </p>
              <div className="border-l-4 border-blue-600 pl-6 mb-6">
                <p className="text-xl text-gray-800 font-medium leading-relaxed">
                  The championship&apos;s pinnacle moment came with securing the
                  silver medal in the Line Throw event, where Daniel and Adam
                  Pekař&apos;s perfect synchronization showcased Czech
                  excellence on the international stage.
                </p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                This achievement represents not just individual skill, but the
                culmination of years of dedicated training and teamwork that has
                placed Czech lifesaving on the world map.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/fotkaWithAdam.jpg"
                alt="Daniel with Adam Pekař at the championship"
                width={600}
                height={400}
                className="rounded-xl shadow-lg object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Achievements Grid */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Competition Results
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                    achievement.highlight
                      ? "bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-300"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <div className="text-center">
                    {achievement.highlight && (
                      <Award className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    )}
                    <span
                      className={`text-4xl font-bold block mb-3 ${
                        achievement.highlight
                          ? "text-yellow-600"
                          : "text-blue-600"
                      }`}
                    >
                      {achievement.position}
                    </span>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {achievement.event}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="mt-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              Championship Moments
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-xl overflow-hidden group">
                <Image
                  src="/zapadPhoto.jpg"
                  alt="Championship moment 1"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden group">
                <Image
                  src="/behaciPhoto_temp.jpg"
                  alt="Championship moment 2"
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  style={{ objectPosition: "center 20%" }}
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden group">
                <Image
                  src="/ausFoto_temp.jpg"
                  alt="Championship team photo"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
