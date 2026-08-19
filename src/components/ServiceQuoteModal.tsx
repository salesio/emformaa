import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { useLanguage } from '../context/LanguageContext';
import { X, Wrench, CheckCircle, Send } from 'lucide-react';

export const ServiceQuoteModal: React.FC = () => {
  const { isQuoteModalOpen, closeQuoteModal, selectedServiceForQuote } = useShop();
  const { t } = useLanguage();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceType, setServiceType] = useState(selectedServiceForQuote || 'Climatização & Ar Condicionado');
  const [location, setLocation] = useState('Maputo');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isQuoteModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Direct WhatsApp dispatch simulation
    setTimeout(() => {
      const text = `*SOLICITAÇÃO DE COTAÇÃO TÉCNICA - EMFORMA*\n\n` +
        `*Nome:* ${fullName}\n` +
        `*Contacto:* ${phone}\n` +
        `*Email:* ${email}\n` +
        `*Serviço:* ${serviceType}\n` +
        `*Localização:* ${location}\n` +
        `*Mensagem:* ${message}`;

      const encoded = encodeURIComponent(text);
      window.open(`https://wa.me/258821622018?text=${encoded}`, '_blank');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto animate-fadeIn flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        onClick={closeQuoteModal}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
      />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden z-10 border border-slate-100">
        
        {/* Header */}
        <div className="bg-brand-navy p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-brand-blue rounded-xl text-white">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">{t('modal_quote_title')}</h3>
              <p className="text-xs text-slate-300">{t('modal_quote_sub')}</p>
            </div>
          </div>
          <button 
            onClick={closeQuoteModal}
            className="text-slate-300 hover:text-white p-1 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
              <h4 className="text-xl font-bold text-slate-800">Pedido Submetido com Sucesso!</h4>
              <p className="text-sm text-slate-600">
                Obrigado, {fullName}. A nossa equipa técnica entrará em contacto muito brevemente através de {phone}.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  closeQuoteModal();
                }}
                className="mt-4 bg-brand-navy text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-brand-navy-dark transition-colors"
              >
                {t('modal_close')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={e => setFullName(e.target.value)}
                  placeholder="Ex: João Mabote"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="+258 84/82..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="exemplo@email.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t('modal_service_type')}
                  </label>
                  <select
                    value={serviceType}
                    onChange={e => setServiceType(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none bg-white"
                  >
                    <option value="Climatização & Ar Condicionado">Climatização & Ar Condicionado</option>
                    <option value="Refrigeração Comercial/Industrial">Refrigeração Comercial/Industrial</option>
                    <option value="Sistemas de Ventilação & Exaustão">Ventilação & Exaustão</option>
                    <option value="Manutenção Preventiva / Avaria">Manutenção / Assistência Técnica</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    {t('modal_location')}
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    placeholder="Ex: Maputo, Matola, Beira..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  {t('modal_notes')}
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Descreva a capacidade desejada (ex: Split 12000 BTU, Câmara frigorífica) ou o tipo de avaria..."
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeQuoteModal}
                  className="px-4 py-2.5 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  {t('admin_cancel_btn')}
                </button>
                <button
                  type="submit"
                  className="bg-brand-blue hover:bg-brand-blue-dark text-white text-sm font-bold px-6 py-2.5 rounded-xl flex items-center gap-2 shadow-md transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('modal_submit')}</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
