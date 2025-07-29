import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPricing = () => {
  const plans = [{
    name: "Mensal",
    price: "R$ 19,90",
    period: "/mês",
    description: "Para uso pessoal completo",
    features: [
      "Movimentos ilimitados",
      "Dashboard completo", 
      "Todos os relatórios",
      "Metas ilimitadas",
      "Agendamentos automáticos",
      "Suporte por email",
      "Categorização automática",
      "Exportação de dados"
    ],
    buttonText: "Assinar Agora",
    popular: false,
    linkTo: `/register?priceId=${config.prices.monthly.priceId}&planType=monthly`
  }, {
    name: "Anual",
    price: "R$ 199,00",
    period: "/ano",
    originalPrice: "R$ 238,80",
    savings: "Economize R$ 39,80 (17%)",
    description: "Melhor custo-benefício",
    features: [
      "Tudo do plano mensal",
      "Suporte VIP prioritário", 
      "Backup automático",
      "Análises avançadas",
      "API de integração",
      "Relatórios personalizados",
      "Assistente IA via WhatsApp",
      "Acesso antecipado a novos recursos"
    ],
    buttonText: "Melhor Oferta",
    popular: true,
    linkTo: `/register?priceId=${config.prices.annual.priceId}&planType=annual`
  }];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white w-full" id="planos">
      <div className="w-full px-4">
        <motion.div 
          className="text-center mb-16" 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Escolha o plano ideal para você
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Planos flexíveis que se adaptam às suas necessidades e evoluem conforme sua jornada financeira
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto" 
          initial={{ opacity: 0, y: 40 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, staggerChildren: 0.1 }} 
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6, delay: index * 0.1 }} 
              viewport={{ once: true }} 
              className="relative"
            >
              <Card className={`h-full relative ${plan.popular ? 'border-[#FF6B35] shadow-2xl scale-105 bg-gradient-to-b from-orange-50 to-white' : 'hover:shadow-xl bg-white'} transition-all duration-300`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                      <Star className="h-4 w-4 fill-current" />
                      MAIS POPULAR - ECONOMIZE 17%
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-6 pt-8">
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.name}</CardTitle>
                  <div className="mt-6">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    {plan.originalPrice && (
                      <div className="mt-3">
                        <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                        <div className="mt-1 text-sm font-semibold text-green-600">{plan.savings}</div>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600 mt-4 font-medium">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0 pb-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-[#FF6B35] flex-shrink-0 bg-orange-100 rounded-full p-1" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full font-bold text-lg py-6 rounded-full transition-all duration-300 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] hover:from-[#E55A2B] hover:to-[#D84315] text-white shadow-lg hover:shadow-xl transform hover:scale-105' 
                        : 'bg-gray-900 hover:bg-gray-800 text-white border border-gray-300 hover:border-[#FF6B35]'
                    }`}
                    size="lg" 
                    asChild
                  >
                    <Link to={plan.linkTo}>{plan.buttonText}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 text-sm">
            ✅ Pagamento seguro via cartão de crédito • 🔄 Cancele quando quiser • 🛡️ Dados 100% protegidos
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingPricing;
