import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheckIcon, DevicePhoneMobileIcon, ChartBarIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { useBrandingConfig } from '@/hooks/useBrandingConfig';
import { Button } from '@/components/ui/button';

const LandingHero = () => {
  const { companyName } = useBrandingConfig();

  const scrollToPlans = useCallback(() => {
    const section = document.getElementById('planos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="py-20 md:py-32 w-full bg-[#F5F7FA]">
      <div className="w-full px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#1C1C1C]">
            Você ainda não sabe para onde vai seu dinheiro?
          </h1>

          <p className="text-lg md:text-xl text-[#5C5C5C] mb-8 max-w-3xl mx-auto">
            Pare de se perder nas planilhas. Com o <strong>{companyName}</strong>, você organiza, define metas e acompanha seu progresso sem complicação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-[#0057FF] hover:bg-[#0046cc] text-white text-sm px-6 py-4 font-semibold shadow-md"
              onClick={scrollToPlans}
            >
              Quero começar agora mesmo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border border-[#0057FF] text-[#0057FF] hover:bg-blue-100 text-sm px-6 py-4 font-semibold"
              asChild
            >
              <Link to="/login">Já tenho conta</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex flex-col items-center text-center p-6">
            <ChartBarIcon className="h-12 w-12 text-[#0057FF] mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-[#1C1C1C]">Domine seus gastos</h3>
            <p className="text-[#5C5C5C]">Veja exatamente para onde seu dinheiro vai.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <ShieldCheckIcon className="h-12 w-12 text-[#1C1C1C] mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-[#1C1C1C]">Privacidade blindada</h3>
            <p className="text-[#5C5C5C]">Seus dados 100% criptografados e protegidos.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6">
            <DevicePhoneMobileIcon className="h-12 w-12 text-[#5C5C5C] mb-4" />
            <h3 className="text-lg font-semibold mb-2 text-[#1C1C1C]">Use onde quiser</h3>
            <p className="text-[#5C5C5C]">Acesse do celular, tablet ou computador.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingHero;
