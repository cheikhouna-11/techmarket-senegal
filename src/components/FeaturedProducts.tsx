import { Link } from 'react-router-dom';
import { products } from '../data/products';

const FeaturedProducts = () => {
  const featured = products.slice(0, 4);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Produits Vedettes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-lg font-bold">{product.name}</h3>
                <p className="text-gray-600 mt-2">{product.price}</p>
                <div className="mt-4 flex justify-between items-center">
                    <Link to={`/catalogue`} className="text-blue-600 hover:text-blue-800 font-semibold">Voir le produit</Link>
                    <a href="https://wa.me/?text=Bonjour,+je+veux+commander+le+produit:+${encodeURIComponent(product.name)}" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-3 py-1 rounded-md text-sm hover:bg-green-600">Commander</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/catalogue" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300">Voir tout le catalogue</Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;