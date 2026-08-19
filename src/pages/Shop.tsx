import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { useLanguage } from '../context/LanguageContext';
import { Product, ProductCategory, PriceMode } from '../types';
import { 
  Search, 
  Filter, 
  ShoppingBag, 
  Tag, 
  Check, 
  X, 
  Info, 
  CheckCircle2, 
  Send
} from 'lucide-react';

export const Shop: React.FC = () => {
  const { products, addToCart } = useShop();
  const { t, language } = useLanguage();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');
  const [selectedPriceFilter, setSelectedPriceFilter] = useState<PriceMode | 'all'>('all');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const formatPrice = (val: number) => {
    return val.toLocaleString('pt-MZ', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' MT';
  };

  const filteredProducts = products.filter(p => {
    const name = (p.name[language] || p.name.pt).toLowerCase();
    const desc = (p.description[language] || p.description.pt).toLowerCase();
    const matchesSearch = name.includes(searchQuery.toLowerCase()) || desc.includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesPriceMode = selectedPriceFilter === 'all' || p.priceMode === selectedPriceFilter;

    return matchesSearch && matchesCategory && matchesPriceMode;
  });

  return (
    <div className="space-y-10 pb-16">
      
      {/* Page Header */}
      <section className="bg-brand-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold">{t('shop_title')}</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            {t('shop_sub')}
          </p>
        </div>
      </section>

      {/* Main Container */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Search & Filter Bar */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          
          {/* Top Search Row */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={t('shop_search_placeholder')}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-brand-blue"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Price Filter Options */}
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 overflow-x-auto w-full sm:w-auto">
              <span className="flex items-center gap-1 text-slate-500 whitespace-nowrap">
                <Tag className="w-3.5 h-3.5 text-brand-blue" />
                {t('filter_price_mode')}
              </span>
              <button
                onClick={() => setSelectedPriceFilter('all')}
                className={`px-3 py-1.5 rounded-lg border transition-colors ${
                  selectedPriceFilter === 'all'
                    ? 'bg-brand-navy text-white border-brand-navy'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {t('filter_all')}
              </button>
              <button
                onClick={() => setSelectedPriceFilter('exposed')}
                className={`px-3 py-1.5 rounded-lg border transition-colors ${
                  selectedPriceFilter === 'exposed'
                    ? 'bg-brand-navy text-white border-brand-navy'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {t('filter_exposed')}
              </button>
              <button
                onClick={() => setSelectedPriceFilter('on_request')}
                className={`px-3 py-1.5 rounded-lg border transition-colors ${
                  selectedPriceFilter === 'on_request'
                    ? 'bg-amber-600 text-white border-amber-600'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {t('filter_on_request')}
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 border-t border-slate-100 pt-4 overflow-x-auto">
            <Filter className="w-4 h-4 text-slate-400 shrink-0 mr-1" />
            
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-brand-blue text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t('cat_all')}
            </button>

            <button
              onClick={() => setSelectedCategory('ac')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                selectedCategory === 'ac'
                  ? 'bg-brand-blue text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t('cat_ac')}
            </button>

            <button
              onClick={() => setSelectedCategory('refrigeration')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                selectedCategory === 'refrigeration'
                  ? 'bg-brand-blue text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t('cat_refrigeration')}
            </button>

            <button
              onClick={() => setSelectedCategory('ventilation')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                selectedCategory === 'ventilation'
                  ? 'bg-brand-blue text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t('cat_ventilation')}
            </button>

            <button
              onClick={() => setSelectedCategory('parts')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                selectedCategory === 'parts'
                  ? 'bg-brand-blue text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {t('cat_parts')}
            </button>
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-12 text-center text-slate-500 space-y-3 border border-slate-200">
            <Info className="w-12 h-12 stroke-1 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-700">Nenhum produto encontrado</h3>
            <p className="text-xs text-slate-400">Tente ajustar a sua pesquisa ou alterar os filtros de categoria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => {
              const name = product.name[language] || product.name.pt;
              const desc = product.description[language] || product.description.pt;
              const specs = product.specs[language] || product.specs.pt || [];
              const isExposed = product.priceMode === 'exposed' && product.price !== undefined;

              return (
                <div 
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Image & Price Badge Header */}
                    <div className="relative h-52 bg-slate-100 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      
                      {/* Price Mode Badge */}
                      <div className="absolute top-3 right-3">
                        {isExposed ? (
                          <span className="bg-brand-navy text-white text-xs font-extrabold px-3 py-1 rounded-lg shadow-md">
                            {formatPrice(product.price!)}
                          </span>
                        ) : (
                          <span className="bg-amber-600 text-white text-xs font-extrabold px-3 py-1 rounded-lg shadow-md">
                            {t('price_on_request')}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => setQuickViewProduct(product)}
                        className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-slate-700 p-2 rounded-lg text-xs font-bold shadow transition-colors flex items-center gap-1"
                      >
                        <Info className="w-3.5 h-3.5 text-brand-blue" />
                        <span>Ver Detalhes</span>
                      </button>
                    </div>

                    {/* Body */}
                    <div className="p-5 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-2 py-0.5 rounded">
                          {product.category}
                        </span>
                        <span className="text-[11px] font-semibold text-emerald-600 flex items-center gap-1">
                          <Check className="w-3 h-3" /> {t('in_stock')}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-slate-800 line-clamp-1">{name}</h3>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{desc}</p>

                      {/* Specs snippet */}
                      {specs.length > 0 && (
                        <div className="pt-1 space-y-1">
                          {specs.slice(0, 2).map((sp, i) => (
                            <div key={i} className="text-[11px] text-slate-600 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                              <span className="truncate">{sp}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions Footer */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => addToCart(product)}
                      className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all ${
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
        )}

      </section>

      {/* Quick View Product Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            onClick={() => setQuickViewProduct(null)} 
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" 
          />

          <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 shadow-2xl z-10 space-y-6 border border-slate-100 overflow-hidden">
            <button 
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <img 
                src={quickViewProduct.image} 
                alt={quickViewProduct.name.pt} 
                className="w-full h-64 object-cover rounded-xl border border-slate-100"
              />

              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-blue bg-blue-50 px-2.5 py-1 rounded">
                  {quickViewProduct.category}
                </span>

                <h3 className="text-xl font-extrabold text-slate-800">
                  {quickViewProduct.name[language] || quickViewProduct.name.pt}
                </h3>

                <div>
                  {quickViewProduct.priceMode === 'exposed' && quickViewProduct.price ? (
                    <span className="text-2xl font-black text-brand-navy">
                      {formatPrice(quickViewProduct.price)}
                    </span>
                  ) : (
                    <span className="inline-block bg-amber-100 text-amber-900 text-sm font-extrabold px-3 py-1 rounded-lg">
                      {t('price_on_request')}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {quickViewProduct.description[language] || quickViewProduct.description.pt}
                </p>

                {/* Full Specs */}
                <div className="space-y-1.5 pt-2">
                  <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Especificações Técnicas:</h4>
                  {(quickViewProduct.specs[language] || quickViewProduct.specs.pt || []).map((sp, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{sp}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => {
                      addToCart(quickViewProduct);
                      setQuickViewProduct(null);
                    }}
                    className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{quickViewProduct.priceMode === 'exposed' ? t('add_to_cart') : t('request_quote_btn')}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
