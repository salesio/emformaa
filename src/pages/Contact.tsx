import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const { t } = useLanguage();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      const text = `*MENSAGEM DE CONTACTO - EMFORMA WEBSITE*\n\n` +
        `*De:* ${name}\n` +
        `*Email:* ${email}\n` +
        `*Telefone:* ${phone}\n` +
        `*Assunto:* ${subject}\n` +
        `*Mensagem:* ${message}`;

      const encoded = encodeURIComponent(text);
      window.open(`https://wa.me/258821622018?text=${encoded}`, '_blank');
    }, 600);
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold">{t('contact_title')}</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            {t('contact_sub')}
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-extrabold text-brand-navy border-b border-slate-100 pb-3">
                Informações de Contacto
              </h2>

              <div className="space-y-5 text-slate-700 text-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-brand-blue rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">{t('contact_address_label')}</h4>
                    <p className="mt-1">Avenida Emília Daússe, C, Flat Nº02</p>
                    <p className="text-xs text-slate-500">Maputo, Moçambique</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">{t('contact_phone_label')}</h4>
                    <p className="mt-1 font-bold text-slate-900">+258 82 162 2018</p>
                    <a 
                      href="https://wa.me/258821622018" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-bold text-emerald-600 hover:underline inline-flex items-center gap-1 mt-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      Enviar Mensagem no WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-slate-100 text-slate-700 rounded-xl shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">{t('contact_email_label')}</h4>
                    <a href="mailto:contacto@emformaa.co.mz" className="mt-1 block text-brand-blue font-semibold hover:underline">
                      contacto@emformaa.co.mz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-50 text-amber-600 rounded-xl shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">{t('contact_hours_label')}</h4>
                    <p className="mt-1">Segunda – Sexta: 08:00 – 17:00</p>
                    <p>Sábado: 08:00 – 14:30</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map visual showcase card */}
            <div className="bg-brand-navy text-white p-6 rounded-2xl space-y-3 shadow-md">
              <h3 className="font-extrabold text-base flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-blue-light" />
                Localização em Maputo
              </h3>
              <p className="text-xs text-slate-300">
                Atendemos clientes residenciais, comerciais e industriais em toda a Cidade e Província de Maputo.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-xl font-extrabold text-brand-navy border-b border-slate-100 pb-3">
                Envie-nos uma Mensagem
              </h2>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                  <h3 className="text-xl font-bold text-slate-800">{t('contact_success')}</h3>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 bg-brand-navy text-white px-6 py-2.5 rounded-xl font-bold text-sm"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        {t('contact_form_name')} *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        {t('contact_form_phone')} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="+258..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        {t('contact_form_email')}
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        {t('contact_form_subject')}
                      </label>
                      <input
                        type="text"
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                        placeholder="Ex: Instalação de Ar Condicionado"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-brand-blue"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      {t('contact_form_message')} *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Como podemos ajudar o seu projeto?"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm outline-none focus:ring-2 focus:ring-brand-blue"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors text-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t('contact_form_send')}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
