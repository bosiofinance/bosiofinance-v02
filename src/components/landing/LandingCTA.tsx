import React, { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const LandingCTA = () => {
  const scrollToPlans = useCallback(() => {
    const section = document.getElementById('planos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#0057FF] to-[#0046CC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Sua liberdade financeira está a um clique de distância
          </h2>
          
          <p className="text-xl mb-10 text-blue-100 leading-relaxed">
            Junte-se a mais de 2.500 pessoas que já transformaram suas finanças com o Bosio Finance
          </p>

          <Button
            size="lg"
            className="bg-white text-[#0057FF] hover:bg-gray-100 font-bold px-10 py-4 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 mb-8"
            onClick={scrollToPlans}
          >
            Começar agora mesmo
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto text-left">
            <div className="flex items-start gap-3">
              <CheckCircleIcon className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <span className="text-blue-100">Comece em menos de 2 minutos</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircleIcon className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <span className="text-blue-100">Cancele quando quiser</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircleIcon className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <span className="text-blue-100">Suporte prioritário incluído</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircleIcon className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
              <span className="text-blue-100">Dados 100% seguros</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingCTA;
