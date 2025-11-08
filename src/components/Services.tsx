import { Sparkles, Shield, Droplets, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Sparkles,
      title: 'Detailing Exterior',
      description: 'Spălare premium, polish, ceară, și protecție pentru vopsea',
      features: ['Spălare cu 2 găleți', 'Clay bar treatment', 'Polish & ceară', 'Anvelope & jante']
    },
    {
      icon: Shield,
      title: 'Protecție Ceramic',
      description: 'Acoperire ceramică profesională pentru protecție de lungă durată',
      features: ['Durabilitate 3-5 ani', 'Rezistență UV', 'Hidrofob', 'Strălucire intensă']
    },
    {
      icon: Droplets,
      title: 'Detailing Interior',
      description: 'Curățare profundă și recondiționare completă a interiorului',
      features: ['Aspirare detaliată', 'Curățare tapițerie', 'Tratament piele', 'Igienizare']
    },
    {
      icon: Zap,
      title: 'Pachet Complet',
      description: 'Transformare completă exterior și interior',
      features: ['Toate serviciile', 'Motor detailing', 'Headlight restoration', 'Ozon treatment']
    }
  ];

  return (
    <section id="servicii" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Serviciile <span className="text-red-600">Noastre</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Oferim o gamă completă de servicii profesionale de detailing pentru a-ți readuce mașina la perfecțiune
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800 transition-all duration-300 hover:transform hover:scale-105 border border-gray-700 hover:border-red-600"
              >
                <div className="bg-red-600/10 w-16 h-16 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-all duration-300">
                  <Icon className="text-red-600 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-4 text-sm">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-500 text-sm flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
