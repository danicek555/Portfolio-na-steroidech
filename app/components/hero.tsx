const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center px-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/skokDoVody.JPG')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
      {/* Content */}
      <div className="relative z-10 text-left text-white max-w-2xl">
        <h1 className="text-6xl font-bold mb-6 font-montserrat">
          Daniel Mitka
        </h1>
        <p className="text-2xl mb-8 leading-relaxed font-montserrat">
          Czech Youth Swimming Champion & Lifesaving Medalist
        </p>
        <a
          href="#footer"
          className="inline-block bg-green-500 text-white px-8 py-3 rounded font-bold text-lg hover:bg-green-600 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
