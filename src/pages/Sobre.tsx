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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Sobre o Bosio Finance
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
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
          <div className="bg-gradient-to-br from-primary to-primary/90 rounded-2xl p-12 text-white mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Nossa História</h2>
            <div className="space-y-4 text-lg leading-relaxed text-white/80">
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
          <div className="bg-muted/30 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Jhony Bosio</h3>
              <p className="text-primary font-semibold text-lg mb-4">Fundador & CEO do Bosio Finance</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <AcademicCapIcon className="w-5 h-5 text-primary" />
                  Formação e Experiência
                </h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Assessor de Investimentos certificado na XP Investimentos</li>
                  <li>• Especialista em gestão de carteiras e planejamento financeiro</li>
                  <li>• Mais de 57.000 seguidores no Instagram (@jhonybosio)</li>
                  <li>• Desenvolvedor e entusiasta de tecnologia financeira</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                  <SparklesIcon className="w-5 h-5 text-primary" />
                  Missão Pessoal
                </h4>
                <ul className="space-y-2 text-muted-foreground">
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
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-foreground">
            Nossos Valores
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: HeartIcon, title: "Simplicidade", desc: "Tornar o complexo simples e acessível a todos" },
              { icon: TrophyIcon, title: "Excelência", desc: "Qualidade profissional em cada detalhe" },
              { icon: UsersIcon, title: "Comunidade", desc: "Crescer juntos através do conhecimento compartilhado" },
              { icon: BuildingOffice2Icon, title: "Transparência", desc: "Clareza total em processos e resultados" }
            ].map((value, i) => (
              <div key={i} className="text-center p-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-muted/30 rounded-2xl p-12 border border-border">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Junte-se à nossa missão
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Faça parte da comunidade que está transformando a relação das pessoas com o dinheiro
            </p>
            <Link
              to="/"
              className="inline-block bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 text-lg rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300"
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
