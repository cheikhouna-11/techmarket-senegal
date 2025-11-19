import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Moussa Diop',
    role: 'Client satisfait',
    quote: 'Service client au top et livraison ultra rapide ! J\'ai reçu mon nouveau PC portable en moins de 24h. Je recommande vivement TechMarket Sénégal.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    name: 'Aïssatou Gueye',
    role: 'Cliente fidèle',
    quote: 'Les prix sont imbattables et la qualité est toujours au rendez-vous. J\'ai acheté plusieurs appareils électroménagers et je n\'ai jamais été déçue.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
  },
  {
    name: 'Babacar Ndiaye',
    role: 'Entrepreneur',
    quote: 'J\'ai équipé tout mon bureau avec le matériel de TechMarket. Un partenaire fiable qui comprend les besoins des professionnels. Le service après-vente est impeccable.',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Ce que nos clients disent</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4"/>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{testimonial.quote}</p>
              <div className="flex text-yellow-400">
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
                <Star fill="currentColor" className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;