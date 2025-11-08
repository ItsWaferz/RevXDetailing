import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-3xl font-bold text-red-600">RevX</div>
              <div className="text-xs tracking-widest text-gray-400 uppercase">Detailing</div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Transformăm mașina ta într-o operă de artă. Servicii profesionale de detailing pentru cei care își iubesc mașina.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/revxcluj/"
                className="bg-gray-800 hover:bg-red-600 p-3 rounded-lg transition-colors duration-300"
                target='_blank'
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/revxcluj/"
                className="bg-gray-800 hover:bg-red-600 p-3 rounded-lg transition-colors duration-300"
                target='_blank'
              >
                <Instagram size={20} className="text-white" />
              </a>
            </div>
            
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Navigare Rapidă</h3>
            <ul className="space-y-2">
              {['acasa', 'servicii', 'galerie', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-gray-400 hover:text-red-600 transition-colors duration-300 capitalize"
                  >
                    {section === 'acasa' ? 'Acasă' : section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-gray-400 hover:text-red-600 transition-colors duration-300">
                <Phone size={16} className="text-red-600" />
                <a href="tel:+40756817405">+40 756 817 405</a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 hover:text-red-600 transition-colors duration-300">
                <Mail size={16} className="text-red-600" />
                <a href="mailto:revxcluj@gmail.com">revxcluj@gmail.com</a >
              </li>
            </ul>
            
          </div>

          <div className="mb-6 flex-col items-center justify-center gap-4">
            <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="nofollow">
              <img 
                style={{width: '250px', margin: '5px'}} 
                src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sal.png" 
                alt="Solutionarea Alternativa a Litigiilor"
                className="hover:opacity-80 transition-opacity"
              />
            </a>
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="nofollow">
              <img 
                style={{width: '250px', margin: '5px'}} 
                src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sol.png" 
                alt="Solutionarea Online a Litigiilor"
                className="hover:opacity-80 transition-opacity"
              />
            </a>
          </div>
        </div>



        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} RevX Detailing. Toate drepturile rezervate.</p>
          
        </div>
        
      </div>
    </footer>
  );
}
