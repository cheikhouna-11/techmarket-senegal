import { useState } from 'react';
import { Link } from 'react-router-dom';
import { products, categories } from '../data/products';

const Catalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold text-center my-8">Notre Catalogue</h1>
      
      <div className="mb-8 text-center">
        <button onClick={() => setSelectedCategory('All')} className={`px-4 py-2 mx-2 my-1 rounded-md font-semibold ${selectedCategory === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>Tous les produits</button>
        {categories.map(category => (
          <button 
            key={category.name} 
            onClick={() => setSelectedCategory(category.name)} 
            className={`px-4 py-2 mx-2 my-1 rounded-md font-semibold ${selectedCategory === category.name ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}>
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover"/>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p className="text-gray-500 text-sm mb-2">{product.category}</p>
              <p className="text-gray-700 font-semibold my-2">{product.price}</p>
              <p className="text-gray-600 text-sm flex-grow">{product.description}</p>
              <div className="mt-4 flex flex-col space-y-2">
                  <Link to={`/catalogue`} className="text-center w-full bg-blue-100 text-blue-600 hover:bg-blue-200 font-semibold py-2 rounded-md">Voir le produit</Link>
                  <a href={`https://wa.me/?text=Bonjour,+je+suis+intéressé(e)+par+le+produit:+${encodeURIComponent(product.name)}`} target="_blank" rel="noopener noreferrer" className="text-center w-full bg-green-500 text-white px-3 py-2 rounded-md text-sm hover:bg-green-600">Commander via WhatsApp</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;