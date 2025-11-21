import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MessageSquare, Database, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const solutions = [
  {
    id: 'web',
    title: 'Desenvolvimento Web Enterprise',
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
    title: 'Automação e Chatbots',
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
    title: 'Engenharia de Dados & BI',
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
    <div className="pt-20 bg-brand-bg min-h-screen">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-black text-brand-dark mb-8 tracking-tighter"
            >
              TECNOLOGIA É O MEIO.
            </motion.h1>
            <p className="text-2xl text-brand-dark/60 max-w-3xl mx-auto font-medium">
              Nossas três frentes de atuação para resolver problemas reais de negócio.
            </p>
          </div>

          <div className="space-y-24">
            {solutions.map((solution) => (
              <motion.div 
                key={solution.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="bg-white shadow-2xl border-t-8 border-brand-primary overflow-hidden group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Left Column: Identity */}
                  <div className="lg:col-span-4 bg-brand-dark p-12 text-white flex flex-col justify-between relative overflow-hidden">
                    <div className="relative z-10">
                      <div className="p-4 bg-white/5 w-fit mb-8 border border-white/10">
                        <solution.icon size={48} className="text-brand-primary" />
                      </div>
                      <h2 className="text-3xl font-black mb-6 uppercase tracking-tight leading-none">{solution.title}</h2>
                      <div className="w-20 h-2 bg-brand-primary mb-6"></div>
                    </div>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                  </div>
                  
                  {/* Right Column: Content */}
                  <div className="lg:col-span-8 p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                      {/* Problem */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-brand-alert font-bold uppercase tracking-wider text-sm">
                          <AlertTriangle size={20} />
                          O Problema
                        </div>
                        <p className="text-2xl font-bold text-brand-dark/80 italic leading-tight">
                          "{solution.pain}"
                        </p>
                      </div>
                      
                      {/* Solution */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 text-brand-secondary font-bold uppercase tracking-wider text-sm">
                          <CheckCircle2 size={20} />
                          A Solução
                        </div>
                        <p className="text-xl font-medium text-brand-dark leading-relaxed">
                          {solution.gain}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-brand-dark/10 pt-10">
                      <h3 className="text-sm font-black text-brand-dark uppercase tracking-widest mb-8">O que entregamos:</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                        {solution.details.map((detail, idx) => (
                          <div key={idx} className="flex items-start gap-3 group/item">
                            <ArrowRight className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5 group-hover/item:translate-x-1 transition-transform" />
                            <span className="text-brand-dark/80 font-medium">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default Solutions;
