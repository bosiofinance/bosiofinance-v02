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
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black leading-tight">
            Você ainda não sabe para onde vai seu dinheiro?
          </h1>

          <p className="text-xl md:text-2xl mb-10 max-w-4xl mx-auto text-[#414042] font-light leading-relaxed">
            Pare de se perder nas planilhas. Com o{' '}
            <strong className="text-black font-bold">{companyName}</strong>, você organiza, define metas e acompanha seu progresso sem complicação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-[#FFD600] hover:bg-[#E6C200] text-black font-bold px-8 py-4 text-lg rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              onClick={scrollToPlans}
            >
              Quero começar agora mesmo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold px-8 py-4 text-lg rounded-lg transition-all duration-300"
              asChild
            >
              <Link to="/login">Já tenho conta</Link>
            </Button>
          </div>

          {/* Badge de Confiança */}
          <div className="inline-flex items-center gap-2 bg-[#F6F6F6] px-4 py-2 rounded-full border border-gray-200">
            <ShieldCheckIcon className="w-5 h-5 text-black" />
            <span className="text-sm text-[#414042] font-medium">
              Criado por <strong className="text-black">Jhony Bosio</strong>, Assessor de Investimentos
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
          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6">
              <ChartBarIcon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Domine seus gastos</h3>
            <p className="text-[#414042] leading-relaxed">
              Veja exatamente para onde seu dinheiro vai com dashboards claros e categorização inteligente.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#FFD600] rounded-2xl flex items-center justify-center mb-6">
              <ShieldCheckIcon className="w-7 h-7 text-black" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Privacidade blindada</h3>
            <p className="text-[#414042] leading-relaxed">
              Seus dados 100% criptografados e protegidos com a mesma segurança utilizada por grandes bancos.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow duration-300">
            <div className="w-14 h-14 bg-[#414042] rounded-2xl flex items-center justify-center mb-6">
              <DevicePhoneMobileIcon className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-black">Use onde quiser</h3>
            <p className="text-[#414042] leading-relaxed">
              Acesse do celular, tablet ou computador. Sincronização automática em todos os dispositivos.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingHero;
