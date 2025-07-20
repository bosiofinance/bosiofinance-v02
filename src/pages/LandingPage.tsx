import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LandingHero from '@/components/landing/LandingHero';
import LandingFeatures from '@/components/landing/LandingFeatures';
import LandingPricing from '@/components/landing/LandingPricing';
import LandingBenefits from '@/components/landing/LandingBenefits';
import LandingTestimonials from '@/components/landing/LandingTestimonials';
import LandingFAQ from '@/components/landing/LandingFAQ';
import LandingCTA from '@/components/landing/LandingCTA';
import LandingHeader from '@/components/landing/LandingHeader';
import { motion } from 'framer-motion';
import { useBrandingConfig } from '@/hooks/useBrandingConfig';
import { useBranding } from '@/contexts/BrandingContext';
import { supabase } from '@/integrations/supabase/client';

const LandingPage = () => {
  const { companyName } = useBrandingConfig();
  const { isLoading: brandingLoading, lastUpdated } = useBranding();
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);
  const [forcedTheme, setForcedTheme] = useState<string | null>(null);

  // Aplicar tema antes mesmo do primeiro render
  useEffect(() => {
    const loadAndApplyLandingTheme = async () => {
      try {
        console.log('Carregando tema da landing page...');
        const { data, error } = await supabase.functions.invoke('get-public-settings', {
          body: { cacheBuster: Date.now() } // Cache-busting para o tema
        });
        
        if (!error && data?.success && data?.settings?.branding?.landing_theme) {
          const theme = data.settings.branding.landing_theme.value;
          setForcedTheme(theme);
          
          if (theme && theme !== 'system') {
            // Aplicar o tema imediatamente
            const root = document.documentElement;
            root.classList.remove('light', 'dark');
            root.classList.add(theme);
            console.log('Tema aplicado:', theme);
          }
        }
      } catch (err) {
        console.error('Erro ao carregar tema da landing:', err);
      } finally {
        setIsThemeLoaded(true);
      }
    };

    loadAndApplyLandingTheme();
    
    // Cleanup: restaurar tema do sistema quando sair da landing
    return () => {
      if (forcedTheme && forcedTheme !== 'system') {
        const root = document.documentElement;
        root.classList.remove('light', 'dark');
        
        // Detectar preferência do sistema e aplicar
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        const savedTheme = localStorage.getItem("metacash-ui-theme");
        
        if (savedTheme === "system" || !savedTheme) {
          root.classList.add(systemTheme);
        } else {
          root.classList.add(savedTheme);
        }
      }
    };
  }, [lastUpdated]); // Reagir a mudanças no branding

  // Mostrar um loading mínimo enquanto carrega o tema para evitar flash
  if (!isThemeLoaded || brandingLoading) {
    return (
      <div className="min-h-screen w-full bg-white flex items-center justify-center">
        <div className="animate-pulse">
          <div className="h-8 w-32 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen w-full bg-white">
      <LandingHeader />
      <motion.main
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <LandingHero />
        <LandingFeatures />
        <LandingTestimonials />
        <LandingPricing />
        <LandingBenefits />
        <LandingFAQ />
        <LandingCTA />
      </motion.main>
      
      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-xl font-bold mb-4 text-[#FFD600]">{companyName}</h3>
              <p className="text-gray-300 leading-relaxed max-w-md">
                A ferramenta completa para organizar suas finanças pessoais, 
                definir metas e alcançar a liberdade financeira.
              </p>
              <div className="mt-6">
                <p className="text-sm text-gray-400">
                  🛡️ Dados 100% seguros e criptografados<br/>
                  📊 Dashboard inteligente e intuitivo<br/>
                  💰 Controle total dos seus gastos
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/funcionalidades" className="hover:text-[#FFD600] transition-colors">Funcionalidades</Link></li>
                <li><a href="/#planos" className="hover:text-[#FFD600] transition-colors">Planos</a></li>
                <li><a href="/#faq" className="hover:text-[#FFD600] transition-colors">Segurança</a></li>
                <li><Link to="/contato" className="hover:text-[#FFD600] transition-colors">Suporte</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/sobre" className="hover:text-[#FFD600] transition-colors">Sobre</Link></li>
                <li><Link to="/contato" className="hover:text-[#FFD600] transition-colors">Contato</Link></li>
                <li><Link to="/termos" className="hover:text-[#FFD600] transition-colors">Termos de Uso</Link></li>
                <li><Link to="/privacidade" className="hover:text-[#FFD600] transition-colors">Privacidade</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 {companyName} - Transforme sua vida financeira | Desenvolvido com 💛 por Jhony Bosio</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
