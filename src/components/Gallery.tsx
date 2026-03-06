import React from 'react';

const Gallery = () => {
  const galleryImages = [
    '/Nehty 1.png',
    '/Nehty 2.png',
    '/Nehty 3.png',
    '/Nehty 4.png',
    '/Nehty 5.png',
    '/Nehty 6.png',
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Galerie
          </h2>
          <p className="text-xl text-gray-600">
            Ukázky mé práce a spokojené klientky
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src={image}
                alt={`Ukázka práce ${index + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;