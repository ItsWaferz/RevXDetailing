import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Send, Instagram } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
          },
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '+40 756 817 405',
      link: 'tel:+40756817405',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'revxcluj@gmail.com',
      link: 'mailto:revxcluj@gmail.com',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@revxcluj',
      link: 'https://www.instagram.com/revxcluj/',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contactează-ne <span className="text-red-600">Acum</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ești gata să-ți transformi mașina? Trimite-ne un mesaj și îți vom răspunde în cel mai scurt timp
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-start space-x-4 p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-800 transition-all duration-300 border border-gray-700 hover:border-red-600 group"
                    target='_blank'
                  >
                    <div className="bg-red-600/10 p-3 rounded-lg group-hover:bg-red-600 transition-all duration-300">
                      <Icon className="text-red-600 group-hover:text-white transition-colors duration-300" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{info.title}</h3>
                      <p className="text-gray-400">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-white">Program de lucru</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex justify-between">
                  <span>Luni - Vineri:</span>
                  <span className="text-white">08:00 - 20:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Sâmbătă:</span>
                  <span className="text-white">12:00 - 20:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Duminică:</span>
                  <span className="text-red-600">Închis</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Nume complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                  placeholder="Ion Popescu"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                  placeholder="ion@exemplu.ro"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Telefon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300"
                  placeholder="+40 XXX XXX XXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={2}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-white placeholder-gray-500 transition-all duration-300 resize-none"
                  placeholder="Spune-ne despre mașina ta și serviciile care te interesează..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <span>Se trimite...</span>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Trimite Mesajul</span>
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-500/10 border border-green-500 text-green-500 px-4 py-3 rounded-lg">
                  Mesajul a fost trimis cu succes! Îți vom răspunde în curând.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg">
                  A apărut o eroare. Te rugăm să încerci din nou.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
