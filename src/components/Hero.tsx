const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-center bg-cover"
      style={{
        backgroundImage: 'url(/ProNails-Hero-image.jpg)',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          ProNails
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Krása, preciznost a individuální přístup
        </p>
        <a
          href="#notino-booking"
          className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold py-4 px-8 rounded-full transition-colors text-lg"
        >
          Objednat se
        </a>
      </div>
    </section>
  );
};

export default Hero;