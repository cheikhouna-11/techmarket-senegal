import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Quels sont les délais de livraison ?',
    answer: 'La livraison à Dakar se fait généralement en 24h. Pour les autres régions, le délai est de 48h à 72h.',
  },
  {
    question: 'Offrez-vous une garantie sur vos produits ?',
    answer: 'Oui, tous nos produits sont vendus avec une garantie constructeur. La durée de la garantie varie selon le produit et la marque.',
  },
  {
    question: 'Quels sont les moyens de paiement acceptés ?',
    answer: 'Nous acceptons les paiements mobiles (Orange Money, Wave), les virements bancaires et le paiement en espèces à la livraison.',
  },
  {
    question: 'Puis-je retourner un produit ?',
    answer: 'Oui, vous disposez d\'un délai de 7 jours pour retourner un produit s\'il ne vous convient pas, à condition qu\'il soit dans son emballage d\'origine et non endommagé.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Questions Fréquemment Posées</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 py-4">
              <button
                className="w-full flex justify-between items-center text-left font-semibold text-lg focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {activeIndex === index && (
                <div className="mt-4 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;