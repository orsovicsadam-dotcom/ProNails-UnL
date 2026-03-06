import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Kontakt
          </h2>
          <p className="text-xl text-gray-600">
            Objednejte se nebo se zeptejte na cokoliv
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Kontaktní údaje</h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="text-rose-600 mr-3" size={20} />
                  <span className="text-gray-700">+420 776 526 609</span>
                </div>

                <div className="flex items-center">
                  <Mail className="text-rose-600 mr-3" size={20} />
                  <span className="text-gray-700">natalyashwed07@gmail.com</span>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-rose-600 mr-3 mt-1" size={20} />
                  <div className="text-gray-700">
                    <p>Shved Nails Praha</p>
                    <p>Americká 451/10, Vinohrady</p>
                    <p>120 00 Praha 2</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Otevírací doba</h3>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700">Pondělí</span>
                  <span className="text-gray-900 font-medium">09:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Úterý</span>
                  <span className="text-gray-900 font-medium">09:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Středa</span>
                  <span className="text-gray-900 font-medium">11:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Čtvrtek</span>
                  <span className="text-gray-900 font-medium">09:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Pátek</span>
                  <span className="text-gray-900 font-medium">09:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sobota</span>
                  <span className="text-gray-900 font-medium">12:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Neděle</span>
                  <span className="text-gray-900 font-medium">Zavřeno</span>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Placeholder */}
          <div className="bg-white rounded-lg shadow-sm p-6 min-h-[400px] flex flex-col">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Kde mě najdete</h3>
            <div className="flex-grow bg-gray-100 rounded-md border-2 border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden group">
              <div className="text-center z-10 px-4">
                <MapPin className="mx-auto text-gray-400 mb-2 group-hover:text-rose-500 transition-colors" size={48} />
                <p className="text-gray-500 font-medium">Mapa Shved Nails Praha</p>
                <p className="text-gray-400 text-sm mt-1">Americká 451/10, Praha 2</p>
              </div>
              {/* Decorative map-like elements */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;