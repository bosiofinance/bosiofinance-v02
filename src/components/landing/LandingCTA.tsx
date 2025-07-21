import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon, StarIcon } from '@heroicons/react/24/outline';

const LandingCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B35]/10 to-transparent"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#FF6B35] rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-10"></div>
      
      <div className="relative z-10 w-full px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white px-6 py-3 rounded-full font-bold text-sm mb-6">
              <StarIcon className="mr-2 h-4 w-4 fill-current" />
              Oferta Especial Limitada
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Sua liberdade financeira está a um clique de{' '}
            <span className="text-[#FF6B35]">distância</span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Mais de 10.000 pessoas já transformaram suas vidas financeiras com o Bosio Finance. 
            Não perca tempo - cada dia sem controle é dinheiro desperdiçado.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] hover:from-[#E55A2B] hover:to-[#D84315] text-white font-bold text-xl px-12 py-6 rounded-full border-none shadow-2xl hover:shadow-[#FF6B35]/25 transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link to="/register?plan=annual">
                Quero começar agora mesmo
                <ArrowRightIcon className="ml-2 h-6 w-6" />
              </Link>
            </Button>
            
            <div className="text-center">
              <p className="text-sm text-gray-400 mb-1">A partir de</p>
              <p className="text-2xl font-bold text-[#FF6B35]">R$ 16,58/mês</p>
              <p className="text-sm text-gray-400">(no plano anual)</p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg p-4">
              <span className="text-green-400">✓</span>
              <span className="text-gray-300">Cancele quando quiser</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg p-4">
              <span className="text-green-400">✓</span>
              <span className="text-gray-300">Dados 100% seguros</span>
            </div>
            <div className="flex items-center justify-center space-x-2 bg-white/5 backdrop-blur-sm rounded-lg p-4">
              <span className="text-green-400">✓</span>
              <span className="text-gray-300">Suporte especializado</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingCTA;
