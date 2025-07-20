import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const LandingFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Preciso ter conhecimento em finanças para usar o Bosio Finance?",
      answer: "Não! O Bosio Finance foi desenvolvido para ser simples e intuitivo. Qualquer pessoa consegue usar, mesmo sem conhecimento prévio em finanças. Tudo é explicado de forma clara e didática."
    },
    {
      question: "Meus dados bancários estarão seguros?",
      answer: "Sim, completamente seguros. Utilizamos criptografia de nível bancário e não armazenamos dados sensíveis como senhas ou informações de cartão. Seus dados são protegidos com a mesma tecnologia usada pelos maiores bancos do país."
    },
    {
      question: "Posso cancelar a assinatura a qualquer momento?",
      answer: "Claro! Você pode cancelar online quando quiser, sem burocracia, sem multa e sem perguntas. Mesmo após o cancelamento, você mantém acesso até o final do período pago."
    },
    {
      question: "O Bosio Finance substitui minha planilha atual?",
      answer: "Sim, e com muito mais funcionalidades! Além de organizar seus gastos automaticamente, o Bosio Finance oferece dashboards inteligentes, metas personalizadas, relatórios detalhados e alertas. Tudo que sua planilha faz, mas de forma automática e muito mais completa."
    },
    {
      question: "Tem suporte se eu tiver dúvidas?",
      answer: "Sim! Oferecemos suporte prioritário por chat e email. Nossa equipe está sempre pronta para ajudar você a aproveitar ao máximo a plataforma. Usuários do plano anual têm suporte VIP com atendimento ainda mais rápido."
    },
    {
      question: "Funciona apenas no celular?",
      answer: "Não! O Bosio Finance funciona perfeitamente em celular, tablet e computador. Todos os seus dados sincronizam automaticamente entre os dispositivos, então você pode acessar de qualquer lugar."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#1a1a1a]">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-[#666]">
            Tire suas dúvidas antes de começar
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-[#e1e8ff] rounded-2xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-[#f8faff] transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-[#1a1a1a] pr-4">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-[#666] transform transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-[#666] leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingFAQ;
