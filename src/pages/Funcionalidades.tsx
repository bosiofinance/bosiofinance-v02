import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { 
  ChartBarIcon, 
  CurrencyDollarIcon, 
  DocumentChartBarIcon, 
  CalendarIcon,
  TagIcon,
  PresentationChartBarIcon,
  BellIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  CreditCardIcon,
  BanknotesIcon,
  FlagIcon
} from '@heroicons/react/24/outline';

const Funcionalidades = () => {
  const features = [
    {
      icon: ChartBarIcon,
      title: "Dashboard Inteligente",
      description: "Visualize suas finanças em tempo real com gráficos interativos e indicadores personalizados. Acompanhe seu progresso financeiro de forma visual e intuitiva."
    },
    {{
  icon: FlagIcon,  // ← e aqui também
  title: "Metas Financeiras",
  // resto igual...
}
      description: "Registre receitas e despesas de forma simples e rápida. Categorização automática e manual para melhor organização dos seus gastos."
    },
    {
      icon: TargetIcon,
      title: "Metas Financeiras",
      description: "Defina objetivos financeiros e acompanhe seu progresso. Reserve de emergência, viagem dos sonhos, ou qualquer meta que você tenha em mente."
    },
    {
      icon: DocumentChartBarIcon,
      title: "Relatórios Detalhados",
      description: "Relatórios completos sobre seus hábitos financeiros. Análise mensal, anual e por categorias para entender melhor seus gastos."
    },
    {
      icon: CalendarIcon,
      title: "Agendamento de Contas",
      description: "Nunca mais esqueça uma conta. Agende lembretes e receba notificações antes dos vencimentos."
    },
    {
      icon: TagIcon,
      title: "Categorização Avançada",
      description: "Organize suas transações em categorias personalizáveis. Entenda exatamente onde seu dinheiro está sendo gasto."
    },
    {
      icon: BellIcon,
      title: "Alertas Inteligentes",
      description: "Receba notificações sobre gastos excessivos, metas atingidas e lembretes importantes para manter suas finanças em dia."
    },
    {
      icon: PresentationChartBarIcon,
      title: "Análises Preditivas",
      description: "Projeções baseadas em seus hábitos de consumo para ajudar no planejamento financeiro futuro."
    },
    {
      icon: CreditCardIcon,
      title: "Controle de Cartões",
      description: "Gerencie múltiplos cartões de crédito e débito. Acompanhe limites, faturas e vencimentos em um só lugar."
    },
    {
      icon: BanknotesIcon,
      title: "Fluxo de Caixa",
      description: "Visualize entradas e saídas de dinheiro ao longo do tempo. Identifique padrões e otimize seu fluxo financeiro."
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Acesso Multiplataforma",
      description: "Acesse suas finanças de qualquer dispositivo - celular, tablet ou computador. Sincronização automática em tempo real."
    },
    {
      icon: ShieldCheckIcon,
      title: "Integração Open Finance",
      description: "Conecte suas contas bancárias com segurança através do Open Finance. Importação automática de transações via Pluggy AI."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-[#0057FF] hover:text-[#0046CC] transition-colors">
            <ArrowLeftIcon className="w-5 h-5" />
            Voltar ao site
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a1a1a]">
            Funcionalidades do Bosio Finance
          </h1>
          <p className="text-xl text-[#666] max-w-3xl mx-auto">
            Conheça todas as ferramentas que vão transformar a maneira como você gerencia suas finanças pessoais
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl border border-[#e1e8ff] shadow-sm hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-14 h-14 bg-[#0057FF] rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#1a1a1a]">{feature.title}</h3>
              <p className="text-[#666] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16 bg-gradient-to-br from-[#0057FF] to-[#0046CC] rounded-2xl p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Pronto para experimentar todas essas funcionalidades?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Comece hoje mesmo e transforme sua vida financeira
          </p>
          <Link
            to="/"
            className="inline-block bg-white text-[#0057FF] hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Ver Planos e Preços
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Funcionalidades;
