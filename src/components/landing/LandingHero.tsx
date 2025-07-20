import React, { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChartBarIcon, ShieldCheckIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
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
    <section className="py-16 md:py-24 w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Principal */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#1a1a1a] leading-tight">
            Você ainda não sabe para onde vai seu dinheiro?
          </h1>

          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-[#666] font-light leading-relaxed">
            Pare de se perder nas planilhas. Com o{' '}
            <strong className="text-[#0057FF] font-semibold">{companyName}</strong>, você organiza, define metas e acompanha seu progresso sem complicação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-[#0057FF] hover:bg-[#0046CC] text-white font-semibold px-8 py-4 text-lg rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={scrollToPlans}
            >
              Quero começar agora mesmo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#0057FF] text-[#0057FF] hover:bg-[#0057FF] hover:text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300"
              asChild
            >
              <Link to="/login">Já tenho conta</Link>
            </Button>
          </div>

          {/* Badge de Confiança */}
          <div className="inline-flex items-center gap-2 bg-[#f8faff] px-4 py-2 rounded-full border border-[#e1e8ff]">
            <ShieldCheckIcon className="w-5 h-5 text-[#0057FF]" />
            <span className="text-sm text-[#666] font-medium">
              Criado por <strong className="text-[#0057FF]">Jhony Bosio</strong>, Assessor XP Investimentos
            </span>
          </div>
        </motion.div>

        {/* Cards de Benefícios */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white p-8 rounded-2xl border border-[#e1e8ff] shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#0057FF] rounded-2xl flex items-center justify-center mb-6">
              <ChartBarIcon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#1a1a1a]">Domine seus gastos</h3>
            <p className="text-[#666] leading-relaxed">
              Veja exatamente para onde seu dinheiro vai com dashboards claros e categorização inteligente.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e1e8ff] shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#00C851] rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheckIcon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#1a1a1a]">Privacidade blindada</h3>
            <p className="text-[#666] leading-relaxed">
              Seus dados 100% criptografados e protegidos com a mesma segurança utilizada por grandes bancos.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e1e8ff] shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#FF6B35] rounded-2xl flex items-center justify-center mb-6">
              <DevicePhoneMobileIcon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-[#1a1a1a]">Use onde quiser</h3>
            <p className="text-[#666] leading-relaxed">
              Acesse do celular, tablet ou computador. Sincronização automática em todos os dispositivos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingHero;
