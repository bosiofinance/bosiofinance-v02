import React, { useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Shield, Clock } from 'lucide-react';

const LandingHero = () => {
  const { companyName } = useBrandingConfig();
  
  const scrollToPlans = useCallback(() => {
    const section = document.getElementById('planos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-yellow-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-[#FF6B35] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white px-6 py-2 rounded-full font-semibold text-sm mb-6 shadow-lg">
              <TrendingUp className="mr-2 h-4 w-4" />
              Liberdade Financeira ao Seu Alcance
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
              Você ainda não sabe para onde vai seu{' '}
              <span className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] bg-clip-text text-transparent font-black">dinheiro?</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Pare de se perder nas planilhas. O <strong>Bosio Finance</strong> organiza, 
              controla e faz seu patrimônio crescer de forma inteligente e automatizada.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button 
              onClick={scrollToPlans}
              size="lg" 
              className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] hover:from-[#E55A2B] hover:to-[#D84315] text-white font-bold text-lg px-8 py-4 rounded-full border-none shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Quero começar agora mesmo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 hover:border-[#FF6B35] text-gray-700 hover:text-[#FF6B35] font-semibold text-lg px-8 py-4 rounded-full bg-white/80 backdrop-blur-sm"
              asChild
            >
              <Link to="/login">Já tenho conta</Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <Shield className="h-8 w-8 text-[#FF6B35]" />
              <div className="text-left">
                <p className="font-semibold text-gray-900">100% Seguro</p>
                <p className="text-sm text-gray-600">Dados criptografados e protegidos</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <Clock className="h-8 w-8 text-[#FF6B35]" />
              <div className="text-left">
                <p className="font-semibold text-gray-900">Fácil de usar</p>
                <p className="text-sm text-gray-600">Comece em menos de 2 minutos</p>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <TrendingUp className="h-8 w-8 text-[#FF6B35]" />
              <div className="text-left">
                <p className="font-semibold text-gray-900">Resultados Reais</p>
                <p className="text-sm text-gray-600">Usuários economizam até 30%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .bg-clip-text {
            background: #D84315 !important;
            -webkit-background-clip: unset !important;
            -webkit-text-fill-color: #D84315 !important;
            color: #D84315 !important;
          }
        }
      `}</style>
    </section>
  );
};

export default LandingHero;
