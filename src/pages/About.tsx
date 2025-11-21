import React from 'react';
import { CheckCircle, TrendingUp, Users, Calendar } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const stats = [
  { label: 'Anos de Mercado', value: '14+', icon: Calendar },
  { label: 'Projetos Entregues', value: '100+', icon: CheckCircle },
  { label: 'Clientes Satisfeitos', value: '50+', icon: Users },
  { label: 'Foco em ROI', value: '100%', icon: TrendingUp },
];

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-deep sm:text-4xl mb-6">
                Estabilidade em um mercado volátil.
              </h2>
              <p className="text-lg text-dark/80 mb-6 leading-relaxed">
                Fundada em 2010, a Scaledata nasceu antes do "hype". Enquanto tecnologias nascem e morrem, 
                nossa metodologia de entrega consistente permanece.
              </p>
              <p className="text-lg text-dark/80 mb-8 leading-relaxed">
                Não somos apenas desenvolvedores ou cientistas de dados; somos parceiros estratégicos 
                que entendem que o código é apenas uma ferramenta para atingir objetivos de negócio.
                Nossa atuação em toda a América Latina nos dá uma perspectiva única sobre os desafios 
                e oportunidades da região.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  'Metodologia ágil adaptada à realidade do cliente',
                  'Transparência total em prazos e custos',
                  'Foco obsessivo em performance e segurança',
                  'Suporte contínuo e evolução do produto'
                ].map((item) => (
                  <div key={item} className="flex items-center">
                    <CheckCircle className="text-primary w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-dark">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm border border-soft/20 text-center hover:shadow-md transition-shadow">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full text-primary">
                        <stat.icon size={24} />
                      </div>
                    </div>
                    <div className="text-4xl font-bold text-deep mb-2">{stat.value}</div>
                    <div className="text-sm text-dark/70 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction 
        title="Pronto para trabalhar com quem tem experiência?"
        subtitle="Agende uma conversa e veja como podemos ajudar."
        primaryBtnText="Falar com Consultor"
      />
    </div>
  );
};

export default About;
