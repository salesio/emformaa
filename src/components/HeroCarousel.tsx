import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useShop } from '../context/ShopContext';
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  ShieldCheck, 
  ShoppingBag, 
  CheckCircle2
} from 'lucide-react';

interface HeroCarouselProps {
  setCurrentPage: (page: string) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ setCurrentPage }) => {
  const { t } = useLanguage();
  const { openQuoteModal } = useShop();

  const slides = [
    {
      id: 1,
      title: t('hero_title_1'),
      subtitle: t('hero_sub_1'),
      image: './images/conte-com-a-emforma.jpg',
      badge: t('hero_badge'),
      highlight: 'Soluções Integradas de Frio & Ar'
    },
    {
      id: 2,
      title: t('hero_title_2'),
      subtitle: t('hero_sub_2'),
      image: './images/Instalancao-de-AC-Maputo.jpg',
      badge: 'Instalações & Manutenção em Maputo',
      highlight: 'Técnicos Credenciados'
    },
    {
      id: 3,
      title: t('hero_title_3'),
      subtitle: t('hero_sub_3'),
      image: './images/escolher-emforma.jpg',
      badge: 'Distribuição das Melhores Marcas',
      highlight: 'Gree, Midea, LG, Carrier, Samsung'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const currentSlide = slides[currentIndex];

  return (
    <section 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative bg-gradient-to-br from-brand-navy-dark via-brand-navy to-slate-900 text-white overflow-hidden py-12 sm:py-16"
    >
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Fixed Height Grid Container across all slides */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center min-h-[480px] lg:h-[480px]">
          
          {/* Text Content Column with Fixed Height Distribution */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full py-2 text-center lg:text-left animate-fadeIn key={currentSlide.id}">
            
            {/* Badge Row (Fixed Height) */}
            <div className="h-8 flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 bg-brand-blue/25 text-brand-blue-light border border-brand-blue/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="truncate">{currentSlide.badge}</span>
              </div>
            </div>

            {/* Title (Fixed Height Box to ensure zero layout shift) */}
            <div className="h-[180px] sm:h-[160px] lg:h-[180px] flex items-center">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white line-clamp-3">
                {currentSlide.title}
              </h1>
            </div>

            {/* Subtitle (Fixed Height Box) */}
            <div className="h-[84px] sm:h-[72px] lg:h-[80px] flex items-center">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 line-clamp-3">
                {currentSlide.subtitle}
              </p>
            </div>

            {/* CTA Buttons Row (Fixed Height) */}
            <div className="h-14 flex items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => openQuoteModal()}
                className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue-dark text-white text-xs sm:text-sm font-extrabold px-6 sm:px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>{t('hero_cta_quote')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCurrentPage('shop')}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-bold px-6 sm:px-8 py-3.5 rounded-xl backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-brand-blue-light" />
                <span>{t('hero_cta_shop')}</span>
              </button>
            </div>

          </div>

          {/* Slide Visual Showcase Column with Fixed Aspect Ratio / Height */}
          <div className="lg:col-span-5 h-full flex items-center justify-center">
            <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] rounded-2xl p-2 bg-gradient-to-b from-slate-700/60 to-slate-800/90 border border-slate-700 shadow-2xl overflow-hidden group">
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                className="rounded-xl object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute -bottom-2 -left-2 bg-white/95 backdrop-blur-md text-slate-800 p-4 rounded-xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
                <div className="p-2.5 bg-emerald-100 rounded-lg text-emerald-600">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-900">{currentSlide.highlight}</h4>
                  <p className="text-[11px] text-slate-500">Atendimento prioritário em Maputo</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Carousel Navigation Controls */}
        <div className="mt-8 flex items-center justify-between pt-4 border-t border-slate-800/80">
          {/* Indicator Dots */}
          <div className="flex items-center gap-2">
            {slides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-brand-blue-light'
                    : 'w-2.5 bg-slate-600 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>

          {/* Prev / Next Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevSlide}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
