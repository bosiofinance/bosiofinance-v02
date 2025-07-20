import React, { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBrandingConfig } from '@/hooks/useBrandingConfig';

const LandingHeader = () => {
  const { companyName } = useBrandingConfig();
  
  const scrollToPlans = useCallback(() => {
    const section = document.getElementById('planos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b w-full"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full px-4 py-4 flex items-center justify-between max-w-none">
        <div className="flex items-center space-x-3">
          <img 
            src="https://page.gensparksite.com/v1/base64_upload/1b5c7d717a85c7848e56748ec5b6e642" 
            alt="Bosio Finance - Assessoria de Investimentos"
            className="h-12 w-12 object-contain rounded-full shadow-sm"
          />
          <span className="text-xl font-bold text-[#1A1A1A]">{companyName}</span>
        </div>
        
        <div className="flex items-center space-x-2 md:space-x-4">
          <Button variant="ghost" className="hover:text-[#FFD600] hover:bg-[#FFD600]/10" asChild>
            <Link to="/login">Entrar</Link>
          </Button>
          <Button 
            asChild={false} 
            onClick={scrollToPlans}
            className="hidden sm:inline-flex text-xs sm:text-sm md:text-base bg-[#FFD600] hover:bg-[#FFC107] text-black border-none font-bold"
            size="sm"
          >
            Estou pronto para economizar
          </Button>
          <Button 
            asChild={false} 
            onClick={scrollToPlans}
            className="inline-flex sm:hidden bg-[#FFD600] hover:bg-[#FFC107] text-black border-none font-bold"
            size="sm"
          >
            Economizar
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default LandingHeader;
