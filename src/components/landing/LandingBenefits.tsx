import React from 'react';
import { Shield, Clock, TrendingUp, HelpingHand } from 'lucide-react';
import { motion } from 'framer-motion';
import { useBrandingConfig } from '@/hooks/useBrandingConfig';

const LandingBenefits = () => {
  const { companyName } = useBrandingConfig();

  const benefits = [
    {
      icon: Shield,
      title: "Segurança Total",
      description:
        "Seus dados são criptografados e protegidos com os mais altos padrões de segurança da indústria."
    },
    {
      icon: Clock,
      title: "Economia de Tempo",
      description:
        "Automatize suas finanças e tenha mais tempo para o que realmente importa na sua vida."
    },
    {
      icon: TrendingUp,
      title: "Crescimento Acelerado",
      description:
        "Identifique oportunidades de economia e investimento para fazer seu patrimônio crescer."
    },
    {
      icon: HelpingHand,
      title: "Suporte Expert",
      description:
        "Criado por Jhony Bosio, Assessor de Investimentos XP, com foco em educação financeira real."
    }
  ];

  return (
    <section className="py-20 bg-muted/30 w-full">
      <div className="w-full px-4">

        {/* Título e Descrição */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Por que escolher o {companyName}?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desenvolvido por um especialista para quem busca resultados reais na vida financeira
          </p>
        </motion.div>

        {/* Benefícios */}
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
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Sobre o Criador */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 bg-background border border-border rounded-xl shadow-md p-6 md:p-10">
            <img
              src="/logo-bosio-finance-foto.png" // coloque aqui o path correto da imagem no seu projeto
              alt="Jhony Bosio"
              className="w-28 h-28 rounded-full object-cover border-2 border-primary"
            />
            <div>
              <h3 className="text-xl font-semibold text-primary mb-1">Sobre o Criador</h3>
              <p className="text-base font-semibold mb-2">
                Jhony Bosio - Assessor de Investimentos XP
              </p>
              <p className="text-muted-foreground mb-4">
                Especialista em gestão de carteiras e educação financeira, com foco em crescimento de patrimônio e desenvolvimento de estratégias personalizadas. O Bosio Finance é sua porta de entrada para um ecossistema completo de soluções financeiras.
              </p>
              <ul className="text-sm space-y-1 text-primary">
                <li>✓ Assessor de Investimentos certificado XP</li>
                <li>✓ Especialista em crescimento patrimonial</li>
                <li>✓ Desenvolvedor de soluções financeiras inovadoras</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LandingBenefits;
