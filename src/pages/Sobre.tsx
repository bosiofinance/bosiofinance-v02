import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { 
  AcademicCapIcon, 
  TrophyIcon, 
  UsersIcon, 
  HeartIcon,
  BuildingOffice2Icon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const Sobre = () => {
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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a1a1a]">
            Sobre o Bosio Finance
          </h1>
          <p className="text-xl text-[#666] leading-relaxed">
            A história por trás da plataforma que está revolucionando a educação financeira no Brasil
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-[#0057FF] to-[#0046CC] rounded-2xl p-12 text-white mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Nossa História</h2>
            <div className="space-y-4 text-lg leading-relaxed text-blue-100">
              <p>
                O Bosio Finance nasceu da experiência real de quem vive o mercado financeiro todos os dias. 
                Como Assessor de Investimentos na XP, pude perceber uma necessidade comum entre milhares de pessoas: 
                a dificuldade de organizar a vida financeira antes mesmo de começar a investir.
              </p>
              <p>
                Depois de ouvir centenas de seguidores relatando suas frustrações com planilhas complicadas 
                e aplicativos que não atendiam suas necessidades reais, decidi criar uma solução simples, 
                intuitiva e verdadeiramente eficaz.
              </p>
              <p>
                O Bosio Finance é mais que um aplicativo - é uma ponte entre o conhecimento financeiro 
                profissional e a realidade do brasileiro que quer organizar sua vida financeira.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-[#f8faff] rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">Jhony Bosio</h3>
              <p className="text-[#0057FF] font-semibold text-lg mb-4">Fundador & CEO do Bosio Finance</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-[#1a1a1a] mb-3 flex items-center gap-2">
                  <AcademicCapIcon className="w-5 h-5 text-[#0057FF]" />
                  Formação e Experiência
                </h4>
                <ul className="space-y-2 text-[#666]">
                  <li>• Assessor de Investimentos certificado na XP Investimentos</li>
                  <li>• Especialista em gestão de carteiras e planejamento financeiro</li>
                  <li>• Mais de 57.000 seguidores no Instagram (@jhonybosio)</li>
                  <li>• Desenvolvedor e entusiasta de tecnologia financeira</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-[#1a1a1a] mb-3 flex items-center gap-2">
                  <SparklesIcon className="w-5 h-5 text-[#0057FF]" />
                  Missão Pessoal
                </h4>
                <ul className="space-y-2 text-[#666]">
                  <li>• Democratizar a educação financeira no Brasil</li>
                  <li>• Simplificar o controle financeiro pessoal</li>
                  <li>• Conectar tecnologia e conhecimento financeiro</li>
                  <li>• Ajudar pessoas a alcançarem seus objetivos</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-[#1a1a1a]">
            Nossos Valores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#0057FF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#1a1a1a] mb-2">Simplicidade</h3>
              <p className="text-[#666] text-sm">Tornar o complexo simples e acessível a todos</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#0057FF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrophyIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#1a1a1a] mb-2">Excelência</h3>
              <p className="text-[#666] text-sm">Qualidade profissional em cada detalhe</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#0057FF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#1a1a1a] mb-2">Comunidade</h3>
              <p className="text-[#666] text-sm">Crescer juntos através do conhecimento compartilhado</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#0057FF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BuildingOffice2Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-[#1a1a1a] mb-2">Transparência</h3>
              <p className="text-[#666] text-sm">Clareza total em processos e resultados</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-[#f8faff] rounded-2xl p-12 border border-[#e1e8ff]">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1a1a1a]">
              Junte-se à nossa missão
            </h2>
            <p className="text-[#666] mb-8 text-lg">
              Faça parte da comunidade que está transformando a relação das pessoas com o dinheiro
            </p>
            <Link
              to="/"
              className="inline-block bg-[#0057FF] hover:bg-[#0046CC] text-white font-bold px-8 py-4 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Começar minha jornada financeira
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sobre;
