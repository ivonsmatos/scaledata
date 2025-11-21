import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen pt-20 flex flex-col">
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2">
        {/* Left: Text & Info */}
        <div className="bg-brand-dark text-white p-12 lg:p-24 flex flex-col justify-center">
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8 leading-none">
            VAMOS<br/><span className="text-brand-primary">ESCALAR.</span>
          </h2>
          <p className="text-xl text-white/70 mb-12 max-w-md font-medium">
            Projetos de alta complexidade exigem parceiros experientes. Fale diretamente com nossa engenharia.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-none group-hover:bg-brand-primary transition-colors">
                <Mail className="text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">contato@scaledata.com.br</span>
            </div>
            <div className="flex items-center gap-6 group cursor-pointer">
              <div className="w-12 h-12 bg-white/5 flex items-center justify-center rounded-none group-hover:bg-brand-primary transition-colors">
                <Phone className="text-white" />
              </div>
              <span className="text-lg font-bold tracking-tight">11 94190-6079</span>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-white/10 text-white/40 text-sm font-medium">
            © 2010-2024 Scaledata. Todos os direitos reservados.
          </div>
        </div>

        {/* Right: Message */}
        <div className="bg-brand-bg p-12 lg:p-24 flex flex-col justify-center">
          <p className="text-lg text-brand-dark mb-8">
            Entre em contato conosco pelo WhatsApp!
          </p>
          <p className="text-sm text-brand-dark/70">
            Ou envie um email para <strong>contato@scaledata.com.br</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
