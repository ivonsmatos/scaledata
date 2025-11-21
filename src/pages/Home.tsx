import React from 'react';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import CallToAction from '../components/CallToAction';
import { motion } from 'framer-motion';
import { Globe, MessageSquare, Database } from 'lucide-react';

const Home: React.FC = () => {
  const highlights = [
    {
      icon: Globe,
      title: "Web Development",
      desc: "Performance e SEO nativo."
    },
    {
      icon: MessageSquare,
      title: "Chatbots",
      desc: "Automação 24/7."
    },
    {
      icon: Database,
      title: "Data Analytics",
      desc: "Decisões estratégicas."
    }
  ];

  return (
    <>
      <Hero />
      
      {/* Quick Highlights Section */}
      <section className="py-12 bg-white border-b border-soft/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center md:justify-start space-x-4 p-4 rounded-lg hover:bg-background transition-colors"
              >
                <div className="p-3 bg-primary/10 rounded-full text-primary">
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-deep">{item.title}</h3>
                  <p className="text-sm text-dark/70">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Solutions />

      <CallToAction />
    </>
  );
};

export default Home;
