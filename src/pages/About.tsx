import React from 'react';
import CallToAction from '../components/CallToAction';
import AuthoritySection from '../components/AuthoritySection';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <AuthoritySection />
      
      <CallToAction 
        title="Pronto para trabalhar com quem tem experiência?"
        subtitle="Agende uma conversa e veja como podemos ajudar."
        primaryBtnText="Falar com Consultor"
      />
    </div>
  );
};

export default About;
