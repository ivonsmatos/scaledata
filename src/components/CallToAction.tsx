import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CallToActionProps {
  title?: string;
  subtitle?: string;
  primaryBtnText?: string;
  primaryBtnLink?: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title = "Sua próxima fase de crescimento começa aqui.",
  subtitle = "Transforme dados em decisões e tecnologia em resultados.",
  primaryBtnText = "Agendar Consultoria Técnica",
  primaryBtnLink = "/contato",
  secondaryBtnText = "Conhecer Casos de Sucesso",
  secondaryBtnLink = "/solucoes"
}) => {
  return (
    <section className="py-20 bg-deep text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          {title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link 
            to={primaryBtnLink}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-deep bg-white hover:bg-gray-100 transition-colors"
          >
            {primaryBtnText}
            <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
          </Link>
          {secondaryBtnText && (
            <Link 
              to={secondaryBtnLink}
              className="inline-flex items-center justify-center px-8 py-3 border border-white/30 text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
            >
              {secondaryBtnText}
            </Link>
          )}
        </motion.div>
      </div>
      
      {/* Abstract Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-soft blur-3xl"></div>
      </div>
    </section>
  );
};

export default CallToAction;
