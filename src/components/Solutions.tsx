import React from 'react';
import { motion } from 'framer-motion';
import { Layout, MessageSquareCode, Database, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'web',
    title: 'Desenvolvimento Web',
    icon: Layout,
    pain: 'Sites lentos, complexos e sem estratégia perdem clientes todos os dias.',
    gain: 'Aplicações React otimizadas para Core Web Vitals. UX focado em conversão e SEO técnico nativo.',
    link: '/solutions#web'
  },
  {
    id: 'chatbots',
    title: 'Chatbots & Automação',
    icon: MessageSquareCode,
    pain: 'Sua equipe perde horas respondendo as mesmas perguntas e o cliente desiste pela demora.',
    gain: 'Agentes inteligentes 24/7 integrados ao seu CRM. Redução do CAC e atendimento imediato.',
    link: '/solutions#chatbots'
  },
  {
    id: 'data',
    title: 'Engenharia de Dados',
    icon: Database,
    pain: "Decisões estratégicas baseadas em 'achismos' e planilhas desconexas.",
    gain: 'Data Lakes estruturados e Dashboards de BI. Transformamos terabytes de dados em lucro líquido.',
    link: '/solutions#data'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

const Solutions: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-deep sm:text-4xl"
          >
            Soluções que resolvem problemas reais
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl text-dark/70 max-w-2xl mx-auto"
          >
            Tecnologia aplicada para eliminar gargalos e acelerar o crescimento.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-white rounded-lg shadow-lg border-t-4 border-primary p-8 flex flex-col h-full transition-shadow duration-300 hover:shadow-2xl group"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-background rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <service.icon className="text-primary w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-deep">{service.title}</h3>
              </div>

              {/* Pain Section */}
              <div className="mb-6 pb-6 border-b border-gray-100">
                <div className="flex items-center mb-2 text-soft text-xs font-bold uppercase tracking-wider">
                  <AlertCircle size={14} className="mr-2" />
                  O Desafio Atual
                </div>
                <p className="text-gray-500 italic text-sm leading-relaxed">
                  "{service.pain}"
                </p>
              </div>

              {/* Gain Section */}
              <div className="mb-8 flex-grow">
                <div className="flex items-center mb-2 text-primary text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 size={14} className="mr-2" />
                  Nossa Entrega
                </div>
                <p className="text-dark font-medium leading-relaxed">
                  {service.gain}
                </p>
              </div>

              {/* Footer Action */}
              <div className="mt-auto">
                <Link 
                  to={service.link}
                  className="inline-flex items-center text-primary font-semibold group-hover:text-deep transition-colors"
                >
                  Saiba mais
                  <ArrowRight className="ml-2 w-4 h-4 transform transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
