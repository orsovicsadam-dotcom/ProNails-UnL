import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-rose-900">ProNails</div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-rose-600 transition-colors">
              Domů
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-rose-600 transition-colors">
              O mně
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-rose-600 transition-colors">
              Služby
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-rose-600 transition-colors">
              Ceník
            </button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-rose-600 transition-colors">
              Galerie
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-rose-600 transition-colors">
              Kontakt
            </button>
          </nav>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block px-3 py-2 text-gray-700 hover:text-rose-600">
                Domů
              </button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-rose-600">
                O mně
              </button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-700 hover:text-rose-600">
                Služby
              </button>
              <button onClick={() => scrollToSection('pricing')} className="block px-3 py-2 text-gray-700 hover:text-rose-600">
                Ceník
              </button>
              <button onClick={() => scrollToSection('gallery')} className="block px-3 py-2 text-gray-700 hover:text-rose-600">
                Galerie
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-rose-600">
                Kontakt
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;