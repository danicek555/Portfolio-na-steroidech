import Image from "next/image";
import Link from "next/link";

type Competition = {
  title: string;
  description: string;
  link: string;
  img: string;
};

const competitions: Competition[] = [
  {
    title: "Czech National Swimming Championship 2024",
    description:
      "Experience the pinnacle of Czech swimming competition at the prestigious MCR Podolí championship.",
    link: "/competitions/podoli",
    img: "/podoliFoto.jpg",
  },
  {
    title: "Lifesaving World Championships 2024",
    description:
      "Witness Daniel's incredible journey to becoming a World Vice-champion in lifesaving.",
    link: "/competitions/australia",
    img: "/ausFoto.JPG",
  },
  {
    title: "Slovakia Cup Šamorín 2024",
    description:
      "International swimming competition showcasing versatility across multiple disciplines in Slovakia.",
    link: "/competitions/samorin",
    img: "/samorin.png",
  },
];

const Competitions: React.FC = () => {
  return (
    <section id="competitions" className="py-16 px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-green-500 text-sm font-semibold uppercase tracking-wider mb-4">
            COMPETITIVE SWIMMING
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            Achieving excellence in the pool
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {competitions.map((comp, i) => (
            <div
              key={i}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:scale-102 hover:-translate-y-2 transition-all duration-300 transform"
            >
              <div className="relative h-64 md:h-80">
                <Image
                  src={comp.img}
                  alt={comp.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {comp.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {comp.description}
                </p>
                <Link
                  href={comp.link}
                  className="text-green-500 hover:text-green-600 font-medium inline-flex items-center"
                >
                  Learn more &gt;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitions;
