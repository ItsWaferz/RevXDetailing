import { useState } from 'react';
import { Image, Video, X } from 'lucide-react';

export default function Gallery() {
  const [selectedMedia, setSelectedMedia] = useState<{ type: string; url: string } | null>(null);

  const galleryItems = [
    { type: 'image', url: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { type: 'image', url: 'https://images.pexels.com/photos/13861/IMG_3496bfree.jpg?auto=compress&cs=tinysrgb&w=800' },
    { type: 'image', url: 'https://images.pexels.com/photos/3354648/pexels-photo-3354648.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { type: 'image', url: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { type: 'image', url: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg?auto=compress&cs=tinysrgb&w=800' },
    { type: 'image', url: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800' },
  ];

  return (
    <section id="galerie" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Proiectele <span className="text-red-600">Noastre</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Descoperă transformările spectaculoase pe care le-am realizat pentru clienții noștri
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedMedia(item)}
            >
              <img
                src={item.url}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                <div className="flex items-center space-x-2">
                  {item.type === 'image' ? (
                    <Image className="text-white" size={24} />
                  ) : (
                    <Video className="text-white" size={24} />
                  )}
                  <span className="text-white font-medium">Vezi Detalii</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.type === 'image' ? 'Photo' : 'Video'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-red-600 transition-colors duration-300"
            onClick={() => setSelectedMedia(null)}
          >
            <X size={40} />
          </button>
          <div className="max-w-6xl max-h-full">
            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.url}
                alt="Selected"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <video
                src={selectedMedia.url}
                controls
                className="max-w-full max-h-[90vh] rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
