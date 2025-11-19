import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-500 mb-4">TechMarket Sénégal</h3>
            <p className="text-gray-400">Votre partenaire de confiance pour l'électronique et l'électroménager au Sénégal.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-blue-400">Accueil</a></li>
              <li><a href="/catalogue" className="hover:text-blue-400">Catalogue</a></li>
              <li><a href="/a-propos" className="hover:text-blue-400">À propos</a></li>
              <li><a href="/contact" className="hover:text-blue-400">Contact & Paiement</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-500">
          <p>&copy; 2025 TechMarket Sénégal. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;