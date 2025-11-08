import { ChevronDown } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  return (
    <section
      id="acasa"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-800 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="text-white">Rev</span>
            <span className="text-red-600">X</span>
          </h1>
          <div className="text-xl md:text-2xl tracking-[0.3em] text-gray-400 uppercase mb-8">
            Detailing
          </div>
        </div>

        <p className="text-xl md:text-3xl text-gray-300 mb-4 font-light animate-slide-up">
          Performanță. Eleganță. Perfecțiune.
        </p>
        <p className="text-lg md:text-xl text-gray-500 mb-12 animate-slide-up-delay">
          Transformăm mașina ta într-o operă de artă
        </p>

        <button
          onClick={onExploreClick}
          className="group bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/50 animate-fade-in-delay"
        >
          Descoperă Serviciile
        </button>
      </div>
    </section>
  );
}
