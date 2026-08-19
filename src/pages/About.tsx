import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Target, Eye, Award, CheckCircle, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="space-y-16 pb-16">
      
      {/* Banner */}
      <section className="bg-brand-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block bg-brand-blue/20 text-brand-blue-light border border-brand-blue/30 text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
            Desde 2018 em Maputo
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold">{t('about_title')}</h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Soluções completas de AVAC e Refrigeração com elevados padrões de segurança, sustentabilidade e eficiência energética.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6 text-slate-700 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy">
              Quem Somos
            </h2>
            <p className="text-sm sm:text-base">
              {t('about_intro_p1')}
            </p>
            <p className="text-sm sm:text-base">
              {t('about_intro_p2')}
            </p>
            
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold">
              <div className="flex items-center gap-2 text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Instalações Certificadas</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Assistência Técnica Local em Maputo</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Marcas Internacionais Originais</span>
              </div>
              <div className="flex items-center gap-2 text-slate-800 bg-slate-50 p-3 rounded-xl border border-slate-200">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Contratos de Manutenção Preventiva</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80" 
                alt="Engenharia de Climatização EMFORMA" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-brand-navy/90 backdrop-blur-md text-white p-4 rounded-xl text-xs space-y-1">
                <p className="font-bold flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-brand-blue-light" />
                  Sede em Maputo
                </p>
                <p className="text-slate-300">Av. Emília Daússe, C, Flat Nº02</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-blue-100 text-brand-blue rounded-xl flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">{t('about_mission_title')}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t('about_mission_desc')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">{t('about_vision_title')}</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {t('about_vision_desc')}
            </p>
          </div>

        </div>
      </section>

      {/* Values Section */}
      <section className="bg-slate-100/70 py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-2xl font-extrabold text-brand-navy">{t('about_values_title')}</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center space-y-2">
              <ShieldCheck className="w-8 h-8 text-brand-blue mx-auto" />
              <h4 className="font-bold text-slate-800 text-sm">{t('val_1')}</h4>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center space-y-2">
              <Award className="w-8 h-8 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-slate-800 text-sm">{t('val_2')}</h4>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center space-y-2">
              <Target className="w-8 h-8 text-amber-600 mx-auto" />
              <h4 className="font-bold text-slate-800 text-sm">{t('val_3')}</h4>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center space-y-2">
              <Eye className="w-8 h-8 text-cyan-600 mx-auto" />
              <h4 className="font-bold text-slate-800 text-sm">{t('val_4')}</h4>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
