import React, { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { TrendingUp, ShieldCheck, Clock3, ArrowRight, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';
import { useBrandingConfig } from '@/hooks/useBrandingConfig';

const LandingHero = () => {
  const { companyName } = useBrandingConfig();

  const scrollToPlans = useCallback(() => {
    const section = document.getElementById('planos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="py-20 md:py-32 w-full">
      <div className="w-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge com ícone à esquerda */}
          <div className="inline-flex items-center bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <TrendingUp className="h-4 w-4 mr-2 stroke-white" />
            Liberdade Financeira ao Seu Alcance
          </div>

          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Você ainda não sabe para onde vai seu{' '}
            <span className="text-primary">dinheiro?</span>
          </h1>

          {/* Parágrafo */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Pare de se perder nas planilhas. O <strong>{companyName}</strong> organiza,
            controla e faz seu patrimônio crescer de forma inteligente e automatizada.
          </p>

          {/* Botões com ícone */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="text-xs sm:text-sm md:text-base px-4 py-3 sm:px-6 sm:py-5 md:px-8 md:py-6 flex items-center gap-2"
              onClick={scrollToPlans}
            >
              Quero começar agora mesmo
              <ArrowRight className="h-4 w-4" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-xs sm:text-sm md:text-base px-4 py-3 sm:px-6 sm:py-5 md:px-8 md:py-6"
              asChild
            >
              <Link to="/login">Já tenho conta</Link>
            </Button>
          </div>
        </motion.div>

        {/* Benefícios */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-md rounded-xl">
            <ShieldCheck className="h-10 w-10 text-primary mb-4" />
            <h3 className="text-lg font-semibold mb-1">100% Seguro</h3>
            <p className="text-muted-foreground">Dados criptografados e protegidos</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-md rounded-xl">
            <Clock3 className="h-10 w-10 text-secondary mb-4" />
            <h3 className="text-lg font-semibold mb-1">Fácil de usar</h3>
            <p className="text-muted-foreground">Comece em menos de 2 minutos</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-md rounded-xl">
            <TrendingUp className="h-10 w-10 text-accent mb-4" />
            <h3 className="text-lg font-semibold mb-1">Resultados Reais</h3>
            <p className="text-muted-foreground">Usuários economizam até 30%</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingHero;
