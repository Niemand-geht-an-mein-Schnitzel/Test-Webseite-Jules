import React from 'react';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold to-luxury-bronze">LUXURY</span> CODE.
            </h3>
            <p className="text-zinc-500 max-w-sm">
              Exklusive Softwareentwicklung und Architekturberatung für Enterprise-Kunden.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-500 hover:text-luxury-gold transition-colors">About Us</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-luxury-gold transition-colors">Programs</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-luxury-gold transition-colors">Products</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-luxury-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-500 hover:text-white transition-colors">Impressum</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white transition-colors">Datenschutz</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white transition-colors">AGB</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900">
          <p className="text-zinc-600 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Luxury Code. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-zinc-600">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
