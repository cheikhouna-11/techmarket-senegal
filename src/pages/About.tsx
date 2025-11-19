const About = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold text-blue-600 mb-4">À Propos de TechMarket Sénégal</h1>
            <p className="text-lg text-gray-700 mb-4">
              Fondé en 2020, TechMarket Sénégal est rapidement devenu le leader de la vente de matériel électronique et électroménager au Sénégal. Notre mission est de rendre la technologie accessible à tous, en proposant des produits de qualité à des prix compétitifs.
            </p>
            <p className="text-gray-600 mb-6">
              Nous croyons en l'intégrité, l'innovation et la satisfaction client. Chaque jour, notre équipe dévouée travaille pour vous offrir la meilleure expérience d'achat, de la sélection des produits jusqu'à la livraison à votre porte.
            </p>
            <div className="border-l-4 border-blue-500 pl-4">
                <p className="text-gray-800 font-semibold italic">Notre objectif : devenir votre guichet unique pour tous vos besoins technologiques, avec un service sur lequel vous pouvez toujours compter.</p>
            </div>
          </div>
          <div>
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/da5932e6-617a-4629-820f-6063eb5664ee/about-us-u9zqa1f-1763560833890.webp" 
              alt="Équipe de TechMarket Sénégal" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;