import React from 'react';

const Pricing = () => {
  const pricingData = [
    {
      category: 'Základní služby',
      items: [
        { service: 'Klasická manikúra', price: '500 Kč' },
        { service: 'Japonská manikúra P-SHINE', price: '600 Kč' },
        { service: 'Gelový lak', price: '400 Kč' },
        { service: 'Francouzská manikúra', price: '450 Kč' }
      ]
    },
    {
      category: 'Gelové nehty',
      items: [
        { service: 'Gelové nehty - nové', price: '800 Kč' },
        { service: 'Doplnění gelových nehtů', price: '700 Kč' },
        { service: 'Snímání gelových nehtů', price: '200 Kč' },
        { service: 'Oprava 1 nehtu', price: '50 Kč' }
      ]
    },
    {
      category: 'Modeláž',
      items: [
        { service: 'Modeláž gel/akryl', price: '1200 Kč' },
        { service: 'Doplnění modeláže', price: '900 Kč' },
        { service: 'Předělání tvaru', price: '200 Kč' }
      ]
    },
    {
      category: 'Zdobení',
      items: [
        { service: 'Jednoduché zdobení (1-3 nehty)', price: '200 Kč' },
        { service: 'Složité zdobení (1-3 nehty)', price: '400 Kč' },
        { service: 'Kamínky, nálepky', price: '100-300 Kč' }
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-rose-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Ceník
          </h2>
          <p className="text-xl text-gray-600">
            Transparentní ceny za všechny služby
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {pricingData.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-rose-200">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-center">
                    <span className="text-gray-700">{item.service}</span>
                    <span className="font-semibold text-rose-600">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Důležité informace</h3>
          <ul className="text-gray-700 space-y-2">
            <li>• Platba hotově nebo kartou</li>
            <li>• Při zrušení termínu prosím volejte minimálně 24 hodin předem</li>
            <li>• Konzultace zdarma</li>
            <li>• Slevy pro stálé klientky</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;