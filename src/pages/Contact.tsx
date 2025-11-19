import { useState, FormEvent } from 'react';
import { toast } from 'sonner';
import { Phone, Mail, MapPin, ShoppingCart } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Ici, vous intégreriez normalement une logique d'envoi d'e-mail ou d'API
    console.log('Form data submitted:', formData);
    toast.success('Message envoyé avec succès ! Nous vous répondrons bientôt.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Contact & Paiement</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Formulaire de contact */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom complet</label>
              <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse e-mail</label>
              <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Sujet</label>
              <input type="text" id="subject" value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={4} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" required></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300">Envoyer le message</button>
          </form>
        </div>

        {/* Informations de contact et WhatsApp */}
        <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6">Nos Coordonnées</h2>
                <div className="space-y-4 text-gray-700">
                    <div className="flex items-center">
                        <MapPin className="w-6 h-6 mr-3 text-blue-600" />
                        <span>123 Avenue Cheikh Anta Diop, Dakar, Sénégal</span>
                    </div>
                    <div className="flex items-center">
                        <Phone className="w-6 h-6 mr-3 text-blue-600" />
                        <span>+221 77 123 45 67</span>
                    </div>
                    <div className="flex items-center">
                        <Mail className="w-6 h-6 mr-3 text-blue-600" />
                        <span>contact@techmarket.sn</span>
                    </div>
                </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center">
                 <h2 className="text-2xl font-bold mb-4">Passez votre commande directement</h2>
                 <p className="text-gray-600 mb-6">Cliquez sur le bouton ci-dessous pour discuter avec un commercial et passer votre commande en toute simplicité.</p>
                 <a href="https://wa.me/?text=Bonjour,+je+veux+commander+un+produit" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-green-500 text-white font-bold py-3 px-8 rounded-md hover:bg-green-600 transition duration-300 w-full">
                    <ShoppingCart className="h-6 w-6 mr-3" /> Commander via WhatsApp
                </a>
                 <p className="text-sm text-gray-500 mt-4">Paiement par Orange Money, Wave ou à la livraison.</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;