import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-blue-600">TechMarket Sénégal</Link>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-500 hover:text-white'}`}>Accueil</NavLink>
              <NavLink to="/catalogue" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-500 hover:text-white'}`}>Catalogue</NavLink>
              <NavLink to="/a-propos" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-500 hover:text-white'}`}>À propos</NavLink>
              <NavLink to="/contact" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-blue-500 hover:text-white'}`}>Contact & Paiement</NavLink>
            </div>
          </nav>
          <div className="hidden md:block">
            <a href="https://wa.me/?text=Bonjour,+je+veux+commander+un+produit" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-green-600">
              <ShoppingCart className="h-5 w-5 mr-2" /> Commander via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;