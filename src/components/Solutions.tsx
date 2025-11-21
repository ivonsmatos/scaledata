import React from 'react';
import { motion } from 'framer-motion';
import { Layout, MessageSquareCode, Database, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'web',
    title: 'Desenvolvimento Web',
    icon: Layout,
    pain: 'Sites lentos e genéricos.',
    gain: 'React Performance & SEO.',
    link: '/solucoes#web'
  },
  {
    id: 'chatbots',
    title: 'Chatbots & IA',
    icon: MessageSquareCode,
    pain: 'Atendimento gargalo.',
    gain: 'Automação 24/7.',
    link: '/solucoes#chatbots'
  },
  {
    id: 'data',
    title: 'Business Intelligence',
    icon: Database,
    pain: 'Gestão por "achismo".',
    gain: 'Decisões Data-Driven.',
    link: '/solucoes#data'
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
    <section className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-black text-brand-dark sm:text-5xl tracking-tight"
          >
            SOLUÇÕES
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-xl text-brand-dark/60 max-w-2xl mx-auto font-medium"
          >
            Eliminamos a ineficiência através da tecnologia.
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
              className="bg-white rounded-none shadow-xl border-t-8 border-brand-primary p-8 flex flex-col h-full transition-all duration-300 hover:shadow-2xl group"
            >
              {/* Header */}
              <div className="mb-8">
                <div className="w-16 h-16 bg-brand-bg rounded-none flex items-center justify-center mb-6 group-hover:bg-brand-primary/10 transition-colors">
                  <service.icon className="text-brand-primary w-8 h-8" />
                </div>
                <h3 className="text-2xl font-black text-brand-dark uppercase tracking-tight">{service.title}</h3>
              </div>

              {/* Pain vs Gain */}
              <div className="space-y-6 mb-8 flex-grow border-t border-brand-dark/5 pt-6">
                <div className="flex items-start gap-3 text-brand-dark/50 italic">
                  <AlertCircle className="w-6 h-6 flex-shrink-0 mt-0.5 text-brand-alert" />
                  <p className="text-lg">"{service.pain}"</p>
                </div>
                <div className="flex items-start gap-3 text-brand-dark font-bold">
                  <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-0.5 text-brand-secondary" />
                  <p className="text-lg">{service.gain}</p>
                </div>
              </div>

              {/* CTA */}
              <Link 
                to={service.link}
                className="inline-flex items-center text-brand-primary font-bold hover:text-brand-alert transition-colors group-hover:translate-x-2 duration-300"
              >
                SAIBA MAIS <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
