import { DollarSign, Truck, ShieldCheck, Award } from 'lucide-react';

const benefits = [
  { icon: <DollarSign className="h-10 w-10 text-blue-600" />, title: 'Prix accessibles', description: 'Nous offrons les meilleurs prix sur le marché sénégalais.' },
  { icon: <Truck className="h-10 w-10 text-blue-600" />, title: 'Livraison Rapide', description: 'Recevez vos produits chez vous en un temps record.' },
  { icon: <ShieldCheck className="h-10 w-10 text-blue-600" />, title: 'Garantie Assurée', description: 'Tous nos produits sont couverts par une garantie complète.' },
  { icon: <Award className="h-10 w-10 text-blue-600" />, title: 'Qualité Supérieure', description: 'Des produits authentiques provenant des meilleures marques.' },
];

const Benefits = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="flex justify-center items-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;