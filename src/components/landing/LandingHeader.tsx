import React, { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useBrandingConfig } from '@/hooks/useBrandingConfig';

const LandingHeader = () => {  
  const scrollToPlans = useCallback(() => {
    const section = document.getElementById('planos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b shadow-sm w-full"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full px-4 py-4 flex items-center justify-between max-w-none">
        <div className="flex items-center space-x-3">
          <img
            src="/logo-clara.png"
            alt="Logo modo claro"
            className="h-16 object-contain dark:hidden"
          />
          {/* Logo modo escuro */}
          <img
            src="/logo-escura.png"
            alt="Logo modo escuro"
            className="h-16 object-contain hidden dark:block"
          />
        </div>
        
        <div className="flex items-center space-x-2 md:space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/login">Entrar</Link>
          </Button>
          <Button 
            asChild={false} 
            onClick={scrollToPlans}
            className="hidden sm:inline-flex text-xs sm:text-sm md:text-base"
            size="sm"
          >
            Estou pronto para economizar
          </Button>
          <Button 
            asChild={false} 
            onClick={scrollToPlans}
            className="inline-flex sm:hidden"
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
