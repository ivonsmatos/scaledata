import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    challenge: '',
    email: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for EmailJS or Netlify Forms integration
    console.log('Form submitted:', formData);
    alert('Obrigado pela mensagem! Entraremos em contato em breve.');
    setFormData({ name: '', company: '', challenge: '', email: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

        {/* Right: Form */}
        <div className="bg-brand-bg p-12 lg:p-24 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-8 max-w-lg w-full mx-auto">
            <div>
              <label htmlFor="name" className="block text-xs font-black text-brand-dark mb-2 uppercase tracking-widest">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-white border-b-2 border-brand-dark/10 p-4 focus:border-brand-primary outline-none transition-colors font-medium text-brand-dark placeholder-brand-dark/30"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-black text-brand-dark mb-2 uppercase tracking-widest">Email Corporativo</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white border-b-2 border-brand-dark/10 p-4 focus:border-brand-primary outline-none transition-colors font-medium text-brand-dark placeholder-brand-dark/30"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-xs font-black text-brand-dark mb-2 uppercase tracking-widest">Empresa</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-white border-b-2 border-brand-dark/10 p-4 focus:border-brand-primary outline-none transition-colors font-medium text-brand-dark placeholder-brand-dark/30"
                placeholder="Nome da sua empresa"
              />
            </div>

            <div>
              <label htmlFor="challenge" className="block text-xs font-black text-brand-dark mb-2 uppercase tracking-widest">Desafio</label>
              <textarea
                id="challenge"
                name="challenge"
                value={formData.challenge}
                onChange={handleChange}
                rows={4}
                className="w-full bg-white border-b-2 border-brand-dark/10 p-4 focus:border-brand-primary outline-none transition-colors font-medium text-brand-dark placeholder-brand-dark/30 resize-none"
                placeholder="Descreva brevemente seu projeto..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-primary text-white font-black py-5 hover:bg-brand-alert transition-colors uppercase tracking-widest flex items-center justify-center gap-2 group"
            >
              Iniciar Projeto
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
