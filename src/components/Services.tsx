import React from 'react';
import { Sparkles, Brush, Hand, Star, Gem, RefreshCw } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Sparkles size={24} />,
      name: 'Gelové nehty',
      description: 'Dlouhotrvající a odolné gelové nehty',
      price: '800 Kč'
    },
    {
      icon: <Brush size={24} />,
      name: 'Modeláž nehtů',
      description: 'Prodloužení a tvarování nehtů',
      price: '1200 Kč'
    },
    {
      icon: <Hand size={24} />,
      name: 'Manikúra',
      description: 'Klasická péče o ruce a nehty',
      price: '500 Kč'
    },
    {
      icon: <Star size={24} />,
      name: 'P-SHINE',
      description: 'Japonská metoda leštění nehtů',
      price: '600 Kč'
    },
    {
      icon: <Gem size={24} />,
      name: 'Zdobení nehtů',
      description: 'Kreativní umělecké zdobení',
      price: '200-400 Kč'
    },
    {
      icon: <RefreshCw size={24} />,
      name: 'Doplnění nehtů',
      description: 'Údržba a doplnění gelových nehtů',
      price: '700 Kč'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Služby
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nabízím komplexní péči o nehty s použitím kvalitních materiálů
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-rose-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-rose-200 p-3 rounded-full text-rose-700 mr-4">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                  <p className="text-rose-600 font-semibold">{service.price}</p>
                </div>
              </div>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;