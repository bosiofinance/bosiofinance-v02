import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Clock, TrendingUp, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

const LandingBenefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Seus dados são criptografados e protegidos com os mais altos padrões de segurança da indústria."
    },
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Automatize suas finanças e tenha mais tempo para o que realmente importa na sua vida."
    },
    {
      icon: TrendingUp,
      title: "Crescimento Acelerado",
      description: "Identifique oportunidades de economia e investimento para fazer seu patrimônio crescer."
    },
    {
      icon: HeartHandshake,
      title: "Suporte Expert",
      description: "Criado por Jhony Bosio, Assessor de Investimentos XP, com foco em educação financeira real."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 w-full">
      <div className="w-full px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Por que escolher o Bosio Finance?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Desenvolvido por um especialista para quem busca resultados reais na vida financeira
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:bg-white group">
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-[#FFD600] to-[#FFC107] p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="h-8 w-8 text-black mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Seção Sobre o Criador */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-gray-900 to-gray-800 text-white border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src="https://page.gensparksite.com/v1/base64_upload/1b5c7d717a85c7848e56748ec5b6e642" 
                    alt="Jhony Bosio - Assessor de Investimentos XP"
                    className="w-32 h-32 rounded-full object-cover border-4 border-[#FFD600] shadow-lg"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-[#FFD600]">
                    Sobre o Criador
                  </h3>
                  <h4 className="text-xl font-semibold mb-4 text-white">
                    Jhony Bosio - Assessor de Investimentos XP
                  </h4>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Especialista em gestão de carteiras e educação financeira, com foco em 
                    crescimento de patrimônio e desenvolvimento de estratégias personalizadas. 
                    O Bosio Finance é sua porta de entrada para um ecossistema completo de 
                    soluções financeiras.
                  </p>
                  <p className="text-[#FFD600] font-medium">
                    ✓ Assessor de Investimentos certificado XP<br/>
                    ✓ Especialista em crescimento patrimonial<br/>
                    ✓ Desenvolvedor de soluções financeiras inovadoras
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingBenefits;
