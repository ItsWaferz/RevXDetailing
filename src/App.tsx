import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'acasa', label: 'Acasă' },
    { id: 'servicii', label: 'Servicii' },
    { id: 'galerie', label: 'Galerie' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('acasa')}>
              <div className="relative">
                <div className="text-3xl font-bold text-red-600">RevX</div>
                <div className="text-xs tracking-widest text-gray-400 uppercase">Detailing</div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-red-600 transition-colors duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-3 bg-black/95 backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-red-600 hover:bg-red-600/10 rounded-lg transition-all duration-300"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main>
        <Hero onExploreClick={() => scrollToSection('servicii')} />
        <Services />
        <Gallery />
        <Contact />
      </main>

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
}

export default App;
