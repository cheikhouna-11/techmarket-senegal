import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import FeaturedProducts from '../components/FeaturedProducts';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home = () => {
  return (
    <div>
      <Hero />
      <Benefits />
      <FeaturedProducts />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;