import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-black mb-6 tracking-tighter">
              SCALE<span className="text-brand-primary">DATA</span>
            </h3>
            <p className="text-white/60 font-medium max-w-xs">
              Consultoria de Dados e Desenvolvimento Web Enterprise. Transformando complexidade em autoridade desde 2010.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-brand-primary">Links Rápidos</h4>
            <ul className="space-y-4 font-medium">
              <li><a href="/solucoes" className="text-white/60 hover:text-brand-primary transition-colors">Soluções</a></li>
              <li><a href="/sobre" className="text-white/60 hover:text-brand-primary transition-colors">Sobre</a></li>
              <li><a href="/contato" className="text-white/60 hover:text-brand-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-widest text-brand-primary">Contato</h4>
            <ul className="space-y-4 text-white/60 font-medium">
              <li>São Paulo, Brasil</li>
              <li>contato@scaledata.com.br</li>
              <li>+55 11 94190-6079</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-white/40 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} Scaledata. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
