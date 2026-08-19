import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useShop } from '../context/ShopContext';
import { HeroCarousel } from '../components/HeroCarousel';
import { BrandPartners } from '../components/BrandPartners';
import { 
  Wind, 
  Snowflake, 
  Fan, 
  Wrench, 
  Award, 
  Users, 
  Clock, 
  ArrowRight, 
  ShoppingBag,
  Send
} from 'lucide-react';

interface HomeProps {
  setCurrentPage: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  const { t, language } = useLanguage();
  const { products, addToCart, openQuoteModal } = useShop();

  const featuredProducts = products.filter(p => p.featured).slice(0, 4);

  const formatPrice = (val: number) => {
    return val.toLocaleString('pt-MZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' MT';
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Hero Carousel Section */}
      <HeroCarousel setCurrentPage={setCurrentPage} />

      {/* Brand Partners Showcase */}
      <BrandPartners />

      {/* Stats Counter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="text-center space-y-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-brand-navy">8+</span>
            <p className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider">{t('stat_years')}</p>
          </div>

          <div className="text-center space-y-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-brand-blue">450+</span>
            <p className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider">{t('stat_projects')}</p>
          </div>

          <div className="text-center space-y-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-emerald-600">300+</span>
            <p className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider">{t('stat_clients')}</p>
          </div>

          <div className="text-center space-y-1">
            <span className="text-3xl sm:text-4xl font-extrabold text-amber-600">24/7</span>
            <p className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider">{t('stat_support')}</p>
          </div>

        </div>
      </section>

      {/* Main Services Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-navy">
            {t('home_services_title')}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            {t('home_services_sub')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4 group">
            <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Wind className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">{t('service_ac_title')}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{t('service_ac_desc')}</p>
            <button 
              onClick={() => openQuoteModal('Climatização & Ar Condicionado')}
              className="text-xs font-bold text-brand-blue hover:text-brand-blue-dark flex items-center gap-1 pt-2"
            >
              <span>{t('service_request_btn')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4 group">
            <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Snowflake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">{t('service_refrig_title')}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{t('service_refrig_desc')}</p>
            <button 
              onClick={() => openQuoteModal('Refrigeração Comercial/Industrial')}
              className="text-xs font-bold text-brand-blue hover:text-brand-blue-dark flex items-center gap-1 pt-2"
            >
              <span>{t('service_request_btn')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4 group">
            <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Fan className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">{t('service_vent_title')}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{t('service_vent_desc')}</p>
            <button 
              onClick={() => openQuoteModal('Sistemas de Ventilação & Exaustão')}
              className="text-xs font-bold text-brand-blue hover:text-brand-blue-dark flex items-center gap-1 pt-2"
            >
              <span>{t('service_request_btn')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4 group">
            <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-800">{t('service_maint_title')}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{t('service_maint_desc')}</p>
            <button 
              onClick={() => openQuoteModal('Manutenção Preventiva / Avaria')}
              className="text-xs font-bold text-brand-blue hover:text-brand-blue-dark flex items-center gap-1 pt-2"
            >
              <span>{t('service_request_btn')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </section>

      {/* Featured Products Catalog Section */}
      <section className="bg-slate-100/70 py-16 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-navy">
                {t('home_featured_products')}
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                {t('home_featured_sub')}
              </p>
            </div>
            <button
              onClick={() => setCurrentPage('shop')}
              className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-brand-blue-dark bg-white px-5 py-2.5 rounded-xl border border-slate-200 shadow-sm"
            >
              <span>{t('cat_all')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map(product => {
              const name = product.name[language] || product.name.pt;
              const desc = product.description[language] || product.description.pt;
              const isExposed = product.priceMode === 'exposed' && product.price !== undefined;

              return (
                <div 
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 bg-slate-100 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={name} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                      {/* Price Mode Badge */}
                      <div className="absolute top-3 right-3">
                        {isExposed ? (
                          <span className="bg-brand-navy text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow">
                            {formatPrice(product.price!)}
                          </span>
                        ) : (
                          <span className="bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow">
                            {t('price_on_request')}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-5 space-y-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-2 py-0.5 rounded">
                        {product.category === 'ac' ? 'Ar Condicionado' : product.category === 'refrigeration' ? 'Refrigeração' : 'AVAC'}
                      </span>
                      <h3 className="text-base font-bold text-slate-800 line-clamp-1">{name}</h3>
                      <p className="text-xs text-slate-500 line-clamp-2">{desc}</p>
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <button
                      onClick={() => addToCart(product)}
                      className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors ${
                        isExposed
                          ? 'bg-brand-navy hover:bg-brand-navy-dark text-white'
                          : 'bg-amber-600 hover:bg-amber-700 text-white'
                      }`}
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>{isExposed ? t('add_to_cart') : t('request_quote_btn')}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-navy">
            {t('home_why_us')}
          </h2>
          <p className="text-slate-600 text-sm">
            Compromisso constante com os mais elevados padrões da indústria em Maputo e todo o país.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3">
            <Users className="w-8 h-8 text-brand-blue" />
            <h3 className="font-bold text-slate-800 text-base">{t('why_1_title')}</h3>
            <p className="text-xs text-slate-600">{t('why_1_desc')}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3">
            <Award className="w-8 h-8 text-emerald-600" />
            <h3 className="font-bold text-slate-800 text-base">{t('why_2_title')}</h3>
            <p className="text-xs text-slate-600">{t('why_2_desc')}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3">
            <Clock className="w-8 h-8 text-amber-600" />
            <h3 className="font-bold text-slate-800 text-base">{t('why_3_title')}</h3>
            <p className="text-xs text-slate-600">{t('why_3_desc')}</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-3">
            <Wrench className="w-8 h-8 text-brand-navy" />
            <h3 className="font-bold text-slate-800 text-base">{t('why_4_title')}</h3>
            <p className="text-xs text-slate-600">{t('why_4_desc')}</p>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-brand-navy to-brand-blue rounded-3xl p-8 lg:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-3 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold">Precisa de Manutenção ou Novo Equipamento?</h3>
            <p className="text-slate-200 text-sm max-w-xl">
              Fale diretamente com os nossos engenheiros e técnicos em Maputo. Respondemos e enviamos a sua proposta sem compromisso.
            </p>
          </div>

          <button
            onClick={() => openQuoteModal()}
            className="bg-white text-brand-navy hover:bg-slate-100 font-extrabold text-sm px-8 py-4 rounded-xl shadow-lg transition-colors shrink-0 flex items-center gap-2"
          >
            <Send className="w-4 h-4 text-brand-blue" />
            <span>Falar com Técnico Agora</span>
          </button>
        </div>
      </section>

    </div>
  );
};
