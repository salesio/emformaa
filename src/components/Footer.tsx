import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, ShieldCheck } from 'lucide-react';
import logoImg from '../assets/logo.png';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const { t } = useLanguage();

  const handleNav = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-navy-dark text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logoImg} 
                alt="EMFORMA Logo" 
                className="h-12 w-auto bg-white p-1.5 rounded-lg" 
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              {t('footer_tagline')}
            </p>
            <div className="flex items-center gap-2 text-xs text-brand-blue-light font-medium bg-slate-800/80 p-2.5 rounded-lg border border-slate-700/60">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Moçambique • Empresa de AVAC Desde 2018</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 border-b border-slate-700 pb-2 inline-block">
              {t('footer_quick_links')}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-brand-blue-light flex items-center gap-1 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" /> {t('nav_home')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-brand-blue-light flex items-center gap-1 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" /> {t('nav_about')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-brand-blue-light flex items-center gap-1 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" /> {t('nav_services')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('shop')} className="hover:text-brand-blue-light flex items-center gap-1 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" /> {t('nav_shop')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-brand-blue-light flex items-center gap-1 transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" /> {t('nav_contact')}
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('admin')} className="text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors font-medium">
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-500" /> {t('nav_admin')}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 border-b border-slate-700 pb-2 inline-block">
              {t('contact_title')}
            </h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-blue-light mt-1 shrink-0" />
                <span>{t('top_address')}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-blue-light shrink-0" />
                <a href="tel:+258821622018" className="hover:text-white transition-colors">{t('top_phone')}</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-blue-light shrink-0" />
                <a href="mailto:climatizacao@emformaa.co.mz" className="hover:text-white transition-colors">climatizacao@emformaa.co.mz</a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 border-b border-slate-700 pb-2 inline-block">
              {t('contact_hours_label')}
            </h3>
            <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700/60 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-200 font-semibold mb-2">
                <Clock className="w-4 h-4 text-brand-blue-light" />
                <span>Atendimento Técnico:</span>
              </div>
              <p className="flex justify-between text-slate-300">
                <span>Segunda - Sexta:</span>
                <span className="font-semibold text-white">08:00 – 17:00</span>
              </p>
              <p className="flex justify-between text-slate-300">
                <span>Sábado:</span>
                <span className="font-semibold text-white">08:00 – 14:30</span>
              </p>
              <p className="flex justify-between text-slate-400">
                <span>Domingo:</span>
                <span className="text-rose-400 font-medium">Fechado</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t('footer_legal')}</p>
          <p className="flex items-center gap-1">
            <span>{t('footer_developed')}</span>
            <span className="text-slate-400 font-medium">emformaa.co.mz</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
