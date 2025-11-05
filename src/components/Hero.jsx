import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import me from '../assets/me.jpg'
const Hero = () => {
  const { scrollToSection } = usePortfolio();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Men —
                <br />
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  G'ayratov Otabek
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-400 mb-6">
                Frontend Developer
              </p>
              
              <p className="text-lg text-gray-500 mb-8 max-w-lg leading-relaxed">
                15 yoshli, ishtiyoqli frontend dasturchi. React, JavaScript va zamonaviy 
                web texnologiyalar bilan ishlashni yaxshi ko'raman. Har doim yangi narsalar 
                o'rganishga intilaman.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-white text-black font-medium border-2 border-white hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Ko'rish
                </button>
                
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 bg-transparent text-white font-medium border-2 border-white hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105"
                >
                  Kontakt
                </button>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative animate-fade-in-right">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl border-2 border-white/20 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 p-8">
                <img 
                  src= {me}
                  alt="G'ayratov Otabek" 
                  className="w-full h-full object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-white/30 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-white/20 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;