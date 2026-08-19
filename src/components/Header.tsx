import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useShop } from '../context/ShopContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ShoppingBag, Phone, Mail, Clock, Menu, X, ShieldCheck } from 'lucide-react';
import logoImg from '../assets/logo.png';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const { t } = useLanguage();
  const { cart, toggleCart, openQuoteModal } = useShop();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navItems = [
    { id: 'home', label: t('nav_home') },
    { id: 'about', label: t('nav_about') },
    { id: 'services', label: t('nav_services') },
    { id: 'shop', label: t('nav_shop') },
    { id: 'contact', label: t('nav_contact') },
    { id: 'admin', label: t('nav_admin') },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-md border-b border-slate-100">
      {/* Top Bar Info */}
      <div className="bg-brand-navy text-slate-200 text-xs py-2 px-4 border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 text-slate-300">
            <a href="tel:+258821622018" className="flex items-center gap-1.5 hover:text-brand-blue-light transition-colors">
              <Phone className="w-3.5 h-3.5 text-brand-blue-light" />
              <span>{t('top_phone')}</span>
            </a>
            <a href="mailto:climatizacao@emformaa.co.mz" className="hidden sm:flex items-center gap-1.5 hover:text-brand-blue-light transition-colors">
              <Mail className="w-3.5 h-3.5 text-brand-blue-light" />
              <span>climatizacao@emformaa.co.mz</span>
            </a>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-brand-blue-light" />
              <span>{t('top_hours')}</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 focus:outline-none group"
          >
            <img 
              src={logoImg} 
              alt="EMFORMA Logo" 
              className="h-11 md:h-14 w-auto object-contain transition-transform group-hover:scale-105 duration-200" 
            />
            <div className="text-left hidden xs:block">
              <span className="text-xs font-bold text-brand-slate uppercase tracking-wider block">AVAC & Refrigeração</span>
              <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3 h-3" /> Maputo, Moçambique
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map(item => {
              const isActive = currentPage === item.id;
              const isAdmin = item.id === 'admin';
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-navy text-white shadow-sm'
                      : isAdmin
                      ? 'text-amber-700 bg-amber-50 hover:bg-amber-100 border border-amber-200/60'
                      : 'text-slate-700 hover:text-brand-navy hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Quick Quote Button */}
            <button
              onClick={() => openQuoteModal()}
              className="hidden lg:flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-dark text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200"
            >
              <span>{t('nav_get_quote')}</span>
            </button>

            {/* Shopping Cart Drawer Trigger */}
            <button
              onClick={toggleCart}
              className="relative p-2.5 text-slate-700 hover:text-brand-navy hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
              aria-label="Ver Carrinho"
            >
              <ShoppingBag className="w-5 h-5 text-brand-navy" />
              {totalCartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-brand-blue text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {totalCartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-lg"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-2 shadow-xl animate-fadeIn">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                currentPage === item.id
                  ? 'bg-brand-navy text-white'
                  : item.id === 'admin'
                  ? 'text-amber-800 bg-amber-50 font-bold border border-amber-200'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openQuoteModal();
              }}
              className="w-full bg-brand-blue text-white text-sm font-bold py-3 rounded-lg text-center"
            >
              {t('nav_get_quote')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
