import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MessageSquare, Database, CheckCircle, XCircle } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const solutions = [
  {
    id: 'web',
    title: 'Desenvolvimento Web de Alta Performance',
    icon: Globe,
    pain: 'Sites lentos e complexos perdem clientes.',
    gain: 'Aplicações React/Vite otimizadas para Core Web Vitals. UX focado em conversão. SEO técnico nativo.',
    details: [
      'Single Page Applications (SPA)',
      'Progressive Web Apps (PWA)',
      'Integração com CMS Headless',
      'Otimização de Performance (Lighthouse 90+)'
    ]
  },
  {
    id: 'chatbots',
    title: 'Automação e Chatbots Humanizados',
    icon: MessageSquare,
    pain: 'Perder vendas por demora no atendimento.',
    gain: 'Agentes inteligentes que operam 24/7, integrados ao seu CRM, reduzindo o CAC e aumentando a retenção.',
    details: [
      'Integração WhatsApp Business API',
      'Fluxos de Conversação Inteligentes',
      'Transbordo para Atendimento Humano',
      'Análise de Sentimento'
    ]
  },
  {
    id: 'data',
    title: 'Engenharia de Dados & Analytics',
    icon: Database,
    pain: "Decisões baseadas em 'achismos'.",
    gain: 'Estruturação de Data Lakes e Dashboards de BI. Transforme terabytes de dados em estratégia de lucro.',
    details: [
      'ETL e Pipelines de Dados',
      'Dashboards Interativos (PowerBI/Looker)',
      'Modelagem de Dados',
      'Consultoria em LGPD'
    ]
  }
];

const Solutions: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-deep mb-6"
            >
              Tecnologia não é o fim, é o meio.
            </motion.h1>
            <p className="text-xl text-dark/70 max-w-3xl mx-auto">
              Nossas três frentes de atuação para resolver problemas reais de negócio.
            </p>
          </div>

          <div className="space-y-20">
            {solutions.map((solution) => (
              <motion.div 
                key={solution.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-sm border border-soft/20 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-4 bg-deep p-10 text-white flex flex-col justify-center items-center text-center lg:text-left lg:items-start">
                    <div className="p-4 bg-white/10 rounded-xl mb-6">
                      <solution.icon size={48} />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{solution.title}</h2>
                    <div className="w-12 h-1 bg-primary mb-6"></div>
                  </div>
                  
                  <div className="lg:col-span-8 p-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                      <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                        <div className="flex items-center mb-3 text-red-700 font-bold">
                          <XCircle className="mr-2" size={20} />
                          O Problema
                        </div>
                        <p className="text-red-900/80 font-medium text-lg">"{solution.pain}"</p>
                      </div>
                      
                      <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                        <div className="flex items-center mb-3 text-green-700 font-bold">
                          <CheckCircle className="mr-2" size={20} />
                          A Solução
                        </div>
                        <p className="text-green-900/80 font-medium text-lg">{solution.gain}</p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-deep mb-4">O que entregamos:</h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {solution.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-dark/80">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Identificou o gargalo do seu negócio?"
        subtitle="Vamos conversar sobre como nossa tecnologia pode resolver isso."
        primaryBtnText="Falar com Especialista"
      />
    </div>
  );
};

export default Solutions;
