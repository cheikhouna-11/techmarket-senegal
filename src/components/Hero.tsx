import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section 
      className="relative bg-cover bg-center text-white py-40 px-4 sm:px-6 lg:px-8"
      style={{ backgroundImage: "url(" + "'https://storage.googleapis.com/dala-prod-public-storage/generated-images/da5932e6-617a-4629-820f-6063eb5664ee/hero-banner-lpxfeab-1763560768627.webp'" + ")" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">TechMarket Sénégal</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl">La technologie de pointe à portée de main. Qualité, garantie et prix imbattables.</p>
        <div className="mt-8">
          <Link to="/catalogue" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300">Explorer le Catalogue</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;