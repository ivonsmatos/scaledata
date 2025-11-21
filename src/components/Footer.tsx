import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Scaledata</h3>
            <p className="text-soft/80">
              Expert consultancy in Web Development, Chatbots, and Data Solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-soft/80 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-soft/80 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-soft/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-soft/80">
              <li>São Paulo, Brazil</li>
              <li>contato@scaledata.com.br</li>
              <li>+55 11 94190-6079</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-soft/20 mt-8 pt-8 text-center text-soft/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Scaledata. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
