import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const Header = () => {
  const { activeSection, isScrolled, scrollToSection } = usePortfolio();

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div 
            className="text-2xl font-bold text-white cursor-pointer hover:text-gray-300 transition-colors"
            onClick={() => scrollToSection('home')}
          >
            Otabek.
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-white hover:text-gray-300 transition-colors duration-300 ${
                  activeSection === item.id ? 'text-gray-300' : ''
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 hover:w-full ${
                  activeSection === item.id ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
          </nav>

          <div className="md:hidden">
            <button className="text-white hover:text-gray-300 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;