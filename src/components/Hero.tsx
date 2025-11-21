import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, MessageSquare, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-deep tracking-tight mb-6"
          >
            Inteligência de Dados e Tecnologia Web para Escalar Negócios na América Latina.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-dark/80 mb-10 max-w-2xl mx-auto"
          >
            Desde 2010, transformamos complexidade digital em interfaces limpas, automação inteligente e decisões baseadas em dados.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link 
              to="/contato" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-deep transition-colors"
            >
              Agendar Consultoria Técnica
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </Link>
            <Link 
              to="/solucoes" 
              className="inline-flex items-center justify-center px-8 py-3 border border-soft text-base font-medium rounded-md text-deep hover:bg-soft/10 transition-colors"
            >
              Conhecer Casos de Sucesso
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Minimalist Background Graphics */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-20">
        <motion.div 
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 text-soft"
        >
          <Globe size={120} strokeWidth={1} />
        </motion.div>
        <motion.div 
          animate={{ 
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 text-primary"
        >
          <BarChart2 size={140} strokeWidth={1} />
        </motion.div>
        <motion.div 
          animate={{ 
            x: [0, 20, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 text-deep"
        >
          <MessageSquare size={80} strokeWidth={1} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
