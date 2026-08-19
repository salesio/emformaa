import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useShop } from '../context/ShopContext';
import { Wind, Snowflake, Fan, Wrench, CheckCircle, ArrowRight, ShieldAlert } from 'lucide-react';

export const Services: React.FC = () => {
  const { t } = useLanguage();
  const { openQuoteModal } = useShop();

  const servicesList = [
    {
      id: 'ac',
      title: t('service_ac_title'),
      desc: t('service_ac_desc'),
      icon: Wind,
      color: 'bg-blue-500',
      features: [
        'Dimensionamento térmico para residências e edifícios comerciais',
        'Fornecimento e montagem de Split, Cassete, Piso-Teto e Multi-Split',
        'Sistemas VRF / VRV com tecnologia Inverter de alta eficiência',
        'Automação e controlo centralizado de temperatura'
      ],
      img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'refrigeration',
      title: t('service_refrig_title'),
      desc: t('service_refrig_desc'),
      icon: Snowflake,
      color: 'bg-cyan-600',
      features: [
        'Câmaras frigoríficas modulares de conservação e congelação',
        'Montagem de centrais frigoríficas e balcões expositores',
        'Chillers industriais de água gelada para processos fabris',
        'Isolamento térmico de condutas e tubagens de frio'
      ],
      img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'ventilation',
      title: t('service_vent_title'),
      desc: t('service_vent_desc'),
      icon: Fan,
      color: 'bg-slate-700',
      features: [
        'Condutas metálicas e flexíveis de ventilação',
        'Sistemas de exaustão de fumos e gorduras para cozinhas industriais',
        'Renovação de ar interior com filtragem purificadora',
        'Instalação de cortinas de ar para isolamento de portas'
      ],
      img: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'maintenance',
      title: t('service_maint_title'),
      desc: t('service_maint_desc'),
      icon: Wrench,
      color: 'bg-amber-600',
      features: [
        'Contratos mensais, trimestrais e anuais de manutenção preventiva',
        'Higienização e desinfeção química de serpentinas e filtros',
        'Deteção de fugas de gás e recarga de refrigerantes ecológicos',
        'Atendimento prioritário de emergência para empresas'
      ],
      img: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      
      {/* Banner */}
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold">{t('services_title')}</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            {t('services_sub')}
          </p>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {servicesList.map((service, index) => {
          const IconComp = service.icon;
          const isEven = index % 2 === 0;

          return (
            <div 
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              
              <div className={`lg:col-span-6 space-y-6 ${isEven ? '' : 'lg:order-2'}`}>
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-2xl text-white ${service.color}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-brand-navy">{service.title}</h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {service.desc}
                </p>

                <div className="space-y-2.5 pt-2">
                  {service.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => openQuoteModal(service.title)}
                    className="bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-sm px-6 py-3 rounded-xl flex items-center gap-2 shadow transition-colors"
                  >
                    <span>{t('service_request_btn')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className={`lg:col-span-6 ${isEven ? '' : 'lg:order-1'}`}>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-72 sm:h-96 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

            </div>
          );
        })}
      </section>

      {/* Emergency Assistance Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-amber-900">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-100 rounded-2xl shrink-0">
              <ShieldAlert className="w-8 h-8 text-amber-700" />
            </div>
            <div>
              <h3 className="font-extrabold text-base sm:text-lg">Equipamento Avariado ou Paragem Crítica?</h3>
              <p className="text-xs sm:text-sm text-amber-800">
                Dispomos de piquete de assistência rápida para câmaras frigoríficas e sistemas comerciais em Maputo.
              </p>
            </div>
          </div>
          <a
            href="tel:+258821622018"
            className="bg-amber-700 hover:bg-amber-800 text-white font-extrabold text-sm px-6 py-3 rounded-xl shadow shrink-0"
          >
            Ligar para +258 82 162 2018
          </a>
        </div>
      </section>

    </div>
  );
};
