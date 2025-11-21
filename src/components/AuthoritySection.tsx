import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { ShieldCheck, Map, Calendar, Server } from 'lucide-react';

// Configuração do Padrão de Fundo (Dot Pattern) para dar textura técnica
const DotPattern = () => (
  <div className="absolute inset-0 opacity-[0.03]" 
       style={{ backgroundImage: 'radial-gradient(#094C7E 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
  </div>
);

interface BentoItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const BentoItem: React.FC<BentoItemProps> = ({ children, className = '', delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, type: "spring", bounce: 0.3 }}
    className={`bg-white p-8 rounded-2xl shadow-xl border border-soft/20 relative overflow-hidden group hover:border-primary/50 transition-colors duration-500 ${className}`}
  >
    {children}
    {/* Efeito de brilho suave ao passar o mouse */}
    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
  </motion.div>
);

const AuthoritySection: React.FC = () => {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <DotPattern />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-deep tracking-tight leading-none mb-6">
            Década de <br/>
            <span className="text-primary">Excelência Digital.</span>
          </h2>
          <div className="w-32 h-2 bg-deep"></div>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
          
          {/* BLOCO 1: Narrativa Principal (Ocupa 2 colunas x 2 linhas) */}
          <BentoItem className="md:col-span-2 md:row-span-2 flex flex-col justify-between bg-deep text-white">
            <div>
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                <ShieldCheck size={28} className="text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4 leading-tight">
                Segurança e Solidez em um mercado volátil.
              </h3>
              <p className="text-soft text-lg leading-relaxed">
                Enquanto agências aparecem e somem, a Scaledata mantém uma trajetória ininterrupta desde 2010. Nossa metodologia proprietária elimina o risco técnico e garante entregas de nível Enterprise para toda a América Latina.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-soft/20 flex items-center gap-4">
              <div className="flex -space-x-4">
                {[1,2,3].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full bg-soft border-2 border-deep flex items-center justify-center text-xs font-bold text-deep">Dev</div>
                ))}
              </div>
              <span className="font-semibold text-sm text-soft">Squads Seniores Dedicados</span>
            </div>
          </BentoItem>

          {/* BLOCO 2: Tempo de Mercado (Destaque Visual) */}
          <BentoItem className="md:col-span-1 md:row-span-1 flex flex-col justify-center items-center text-center" delay={0.1}>
            <Calendar className="text-primary mb-2" size={32} />
            <span className="text-sm font-bold text-soft uppercase tracking-wider">Desde</span>
            <span className="text-6xl font-black text-deep tracking-tighter">2010</span>
            <span className="text-xs text-gray-500 mt-2">14+ Anos de Inovação</span>
          </BentoItem>

          {/* BLOCO 3: Cobertura Geográfica */}
          <BentoItem className="md:col-span-1 md:row-span-1 bg-dark text-white relative" delay={0.2}>
             <Map className="absolute top-4 right-4 text-soft opacity-20" size={80} />
             <div className="relative z-10 h-full flex flex-col justify-end">
                <h4 className="text-4xl font-bold text-white mb-1">LATAM</h4>
                <p className="text-soft text-sm">Atuação Regional</p>
                <p className="text-xs text-gray-400 mt-2">Brasil • Argentina • Chile • Colômbia</p>
             </div>
          </BentoItem>

          {/* BLOCO 4: Métricas de Sucesso (Contador) */}
          <BentoItem className="md:col-span-1 md:row-span-1" delay={0.3}>
            <div className="flex flex-col h-full justify-center">
              <span className="text-5xl font-black text-primary mb-2">
                +<CountUp end={150} duration={3} />
              </span>
              <span className="text-deep font-bold">Projetos Entregues</span>
              <p className="text-gray-500 text-xs mt-2">Web, Dados e Automação.</p>
            </div>
          </BentoItem>

          {/* BLOCO 5: Tech Stack / Infra */}
          <BentoItem className="md:col-span-1 md:row-span-1 flex flex-col justify-between" delay={0.4}>
             <Server className="text-deep" size={32} />
             <div>
               <h4 className="font-bold text-deep text-lg">Cloud Native</h4>
               <p className="text-sm text-gray-500">Arquitetura escalável.</p>
             </div>
          </BentoItem>

        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
