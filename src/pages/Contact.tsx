import React, { useState } from 'react';
import { Mail, MessageCircle, Send, Clock } from 'lucide-react';

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
    <div className="pt-20">
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-deep sm:text-4xl">Sua próxima fase de crescimento começa aqui.</h2>
            <p className="mt-4 text-xl text-dark/70 max-w-2xl mx-auto">
              Preencha o formulário abaixo ou entre em contato direto.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-background rounded-xl p-8 border border-soft/20 h-full">
                <h3 className="text-2xl font-bold text-deep mb-6">Canais Diretos</h3>
                <div className="space-y-8">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <MessageCircle className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-deep text-lg">WhatsApp Direct</p>
                      <a 
                        href="https://wa.me/5511941906079" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-dark/80 hover:text-primary transition-colors block mt-1"
                      >
                        +55 11 94190-6079
                      </a>
                      <p className="text-sm text-dark/60 mt-1">Resposta mais rápida</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Mail className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-deep text-lg">Email</p>
                      <a href="mailto:contato@scaledata.com.br" className="text-dark/80 hover:text-primary transition-colors block mt-1">
                        contato@scaledata.com.br
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-lg mr-4">
                      <Clock className="text-primary w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-deep text-lg">Tempo de Resposta</p>
                      <p className="text-dark/80 mt-1">
                        Respondemos em até 4 horas comerciais.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6 bg-background p-8 rounded-xl border border-soft/20">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-deep mb-1">Nome</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-soft/30 rounded-md focus:ring-primary focus:border-primary bg-white"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-deep mb-1">Empresa</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-soft/30 rounded-md focus:ring-primary focus:border-primary bg-white"
                    placeholder="Nome da sua empresa"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-deep mb-1">Email Corporativo</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-soft/30 rounded-md focus:ring-primary focus:border-primary bg-white"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="challenge" className="block text-sm font-medium text-deep mb-1">Qual o Desafio Atual?</label>
                  <textarea
                    id="challenge"
                    name="challenge"
                    value={formData.challenge}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-soft/30 rounded-md focus:ring-primary focus:border-primary bg-white"
                    placeholder="Descreva brevemente o que você precisa resolver..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-md text-white bg-primary hover:bg-deep transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Enviar Mensagem
                  <Send className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
