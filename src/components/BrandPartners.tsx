import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const BrandPartners: React.FC = () => {
  const { t } = useLanguage();

  const brandLogos = [
    { name: 'Gree', src: './images/Gree-logo.jpg' },
    { name: 'Midea', src: './images/midea-logo.png' },
    { name: 'LG', src: './images/LG-Logo-emformaa.jpg' },
    { name: 'Carrier', src: './images/Logo_of_the_Carrier_Corporation.svg_.png' },
    { name: 'Samsung', src: './images/Samsung-logo.jpg' },
    { name: 'Hisense', src: './images/Hisense-logo.jpg' },
  ];

  return (
    <section className="bg-white py-10 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
            {t('partner_title')}
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {brandLogos.map((brand, idx) => (
            <div 
              key={idx}
              className="p-3 bg-slate-50/80 hover:bg-white rounded-xl border border-slate-100 shadow-2xs hover:shadow transition-all duration-200 w-full flex items-center justify-center h-20 group"
            >
              <img 
                src={brand.src} 
                alt={`${brand.name} Air Conditioning`} 
                className="max-h-12 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
