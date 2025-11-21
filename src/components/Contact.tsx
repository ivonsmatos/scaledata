import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/contato@scaledata.com.br", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Novo contato via site (Componente): ${formData.name}`,
          _template: 'table',
          _captcha: "false"
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert('Obrigado pela mensagem! Entraremos em contato em breve.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Erro FormSubmit:', data);
        alert('Houve um erro ao enviar. Por favor, tente novamente ou envie um email direto para contato@scaledata.com.br');
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Houve um erro ao enviar. Por favor, tente novamente ou envie um email direto para contato@scaledata.com.br');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-deep sm:text-4xl">Get in Touch</h2>
          <p className="mt-4 text-xl text-dark/70 max-w-2xl mx-auto">
            Ready to scale your business? Contact us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-background rounded-xl p-8 border border-soft/20 h-full">
              <h3 className="text-2xl font-bold text-deep mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="text-primary w-6 h-6 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-deep">Email</p>
                    <a href="mailto:contato@scaledata.com.br" className="text-dark/80 hover:text-primary transition-colors">
                      contato@scaledata.com.br
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="text-primary w-6 h-6 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-deep">Phone</p>
                    <a href="tel:+5511941906079" className="text-dark/80 hover:text-primary transition-colors">
                      +55 11 94190-6079
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageCircle className="text-primary w-6 h-6 mt-1 mr-4" />
                  <div>
                    <p className="font-medium text-deep">WhatsApp</p>
                    <a 
                      href="https://wa.me/5511941906079" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-dark/80 hover:text-primary transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-deep mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-soft/30 rounded-md focus:ring-primary focus:border-primary bg-background"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-deep mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-soft/30 rounded-md focus:ring-primary focus:border-primary bg-background"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-deep mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-soft/30 rounded-md focus:ring-primary focus:border-primary bg-background"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-deep transition-colors"
              >
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
