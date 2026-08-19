import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-lg border border-slate-200 text-xs font-semibold">
      <div className="flex items-center gap-1 px-1.5 text-slate-500">
        <Globe className="w-3.5 h-3.5 text-brand-blue" />
      </div>
      <button
        onClick={() => setLanguage('pt')}
        className={`px-2.5 py-1 rounded-md transition-all duration-200 ${
          language === 'pt'
            ? 'bg-brand-navy text-white shadow-sm'
            : 'text-slate-600 hover:text-brand-navy hover:bg-slate-200/50'
        }`}
        title="Português (Moçambique)"
      >
        PT
      </button>
      <button
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1 rounded-md transition-all duration-200 ${
          language === 'en'
            ? 'bg-brand-navy text-white shadow-sm'
            : 'text-slate-600 hover:text-brand-navy hover:bg-slate-200/50'
        }`}
        title="English"
      >
        EN
      </button>
    </div>
  );
};
