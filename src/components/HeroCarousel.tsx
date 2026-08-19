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
      className="relative bg-gradient-to-br from-brand-navy-dark via-brand-navy to-slate-900 text-white overflow-hidden py-16 sm:py-24"
    >
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[420px]">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left animate-fadeIn key={currentSlide.id}">
            <div className="inline-flex items-center gap-2 bg-brand-blue/25 text-brand-blue-light border border-brand-blue/40 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>{currentSlide.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight min-h-[120px] sm:min-h-[140px] flex items-center">
              {currentSlide.title}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {currentSlide.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => openQuoteModal()}
                className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-extrabold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
              >
                <span>{t('hero_cta_quote')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setCurrentPage('shop')}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 text-sm font-bold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-brand-blue-light" />
                <span>{t('hero_cta_shop')}</span>
              </button>
            </div>
          </div>

          {/* Slide Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-2 bg-gradient-to-b from-slate-700/60 to-slate-800/90 border border-slate-700 shadow-2xl overflow-hidden group">
              <img
                src={currentSlide.image}
                alt={currentSlide.title}
                className="rounded-xl object-cover w-full h-80 lg:h-96 transition-transform duration-500 group-hover:scale-105"
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
        <div className="mt-8 flex items-center justify-between">
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
