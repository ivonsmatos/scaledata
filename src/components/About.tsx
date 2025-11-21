import React from 'react';
import { CheckCircle } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: '14+' },
  { label: 'Projects Delivered', value: '100+' },
  { label: 'Satisfied Clients', value: '50+' },
  { label: 'Countries Served', value: '5+' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-deep sm:text-4xl mb-6">
              Building Digital Authority Since 2010
            </h2>
            <p className="text-lg text-dark/80 mb-6">
              At Scaledata, we combine technical expertise with strategic vision. 
              Founded in 2010, we have helped businesses across LATAM transform their digital presence 
              and optimize their operations through data and automation.
            </p>
            <div className="space-y-4 mb-8">
              {[
                'Expertise in modern web technologies',
                'Data-driven decision making',
                'Customized solutions for your business',
                'Dedicated support and maintenance'
              ].map((item) => (
                <div key={item} className="flex items-center">
                  <CheckCircle className="text-primary w-5 h-5 mr-3" />
                  <span className="text-dark">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-white p-6 rounded-xl shadow-sm border border-soft/20 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-dark/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
