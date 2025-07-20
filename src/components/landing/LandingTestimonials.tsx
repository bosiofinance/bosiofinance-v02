import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const LandingTestimonials = () => {
  const testimonials = [
    {
      name: "Marina Santos",
      role: "Empreendedora",
      content: "Em 3 meses usando o Bosio Finance consegui economizar R$ 1.200 e finalmente entender meus gastos. A interface é muito intuitiva!",
      rating: 5,
    },
    {
      name: "Carlos Oliveira",
      role: "Engenheiro",
      content: "Depois de testar vários apps, o Bosio Finance foi o único que realmente me ajudou a atingir minhas metas. Hoje tenho R$ 5.000 na reserva de emergência.",
      rating: 5,
    },
    {
      name: "Ana Paula Reis",
      role: "Professora",
      content: "Como funcionária pública, cada real conta. O Bosio Finance me mostrou onde estava perdendo dinheiro. Economizei 30% nos gastos mensais!",
      rating: 5,
    }
  ];

  return (
    <section className="py-20 bg-[#f8faff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">
            Mais de 2.500 pessoas já transformaram suas finanças
          </h2>
          <p className="text-xl text-[#666] max-w-2xl mx-auto">
            Veja o que nossos usuários estão dizendo sobre os resultados obtidos
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl border border-[#e1e8ff] shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-[#FFB800]" />
                ))}
              </div>
              <p className="text-[#666] mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-semibold text-[#1a1a1a]">{testimonial.name}</p>
                <p className="text-[#0057FF] text-sm">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Estatísticas */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div>
            <div className="text-3xl font-bold text-[#0057FF] mb-2">2.500+</div>
            <div className="text-[#666]">Usuários ativos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#0057FF] mb-2">R$ 2.1M</div>
            <div className="text-[#666]">Economizados</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#0057FF] mb-2">4.8/5</div>
            <div className="text-[#666]">Avaliação média</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#0057FF] mb-2">30%</div>
            <div className="text-[#666]">Economia média</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingTestimonials;
