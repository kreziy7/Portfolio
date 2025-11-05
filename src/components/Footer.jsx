import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const Footer = () => {
  const { scrollToTop } = usePortfolio();

  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400">
              © 2025 G'ayratov Otabek — Portfolio
            </p>
            <p className="text-gray-500 text-sm mt-1">
              React va Tailwind CSS bilan yaratilgan
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-110"
            title="Yuqoriga"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;