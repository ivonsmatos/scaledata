import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1495592822108-9e6261896da8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Data Network" 
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/95 to-brand-bg/20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl sm:text-7xl lg:text-8xl font-black text-brand-dark tracking-tighter mb-6 leading-none"
            >
              DADOS<br/>SÃO<br/><span className="text-brand-primary">PODER.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl sm:text-2xl text-brand-dark/80 mb-10 font-medium max-w-lg"
            >
              Transformamos complexidade em autoridade. Consultoria de dados e desenvolvimento web enterprise para líderes na América Latina.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                to="/contato" 
                className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-none text-white bg-brand-primary hover:bg-brand-alert transition-colors"
              >
                INICIAR PROJETO
                <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
              </Link>
            </motion.div>
          </div>

          {/* Floating UI Element */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="hidden lg:block relative"
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-xl shadow-2xl max-w-xs">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-bold text-lg">Performance</span>
                <TrendingUp className="text-brand-accent" size={24} />
              </div>
              <div className="text-5xl font-black text-white mb-2">
                +240%
              </div>
              <div className="text-white/70 text-sm font-medium">
                ROI Médio em Projetos
              </div>
              
              {/* Decorative chart lines */}
              <div className="mt-6 flex items-end gap-2 h-16">
                <div className="w-1/5 bg-brand-primary/40 h-[40%] rounded-t-sm"></div>
                <div className="w-1/5 bg-brand-primary/60 h-[60%] rounded-t-sm"></div>
                <div className="w-1/5 bg-brand-primary/80 h-[30%] rounded-t-sm"></div>
                <div className="w-1/5 bg-brand-primary h-[80%] rounded-t-sm"></div>
                <div className="w-1/5 bg-brand-accent h-[100%] rounded-t-sm"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
