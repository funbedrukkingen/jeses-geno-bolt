import { useLanguage } from '@/i18n/LanguageContext';
import { translations } from '@/i18n/translations';

export function LanguageSwitch() {
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang];

  return (
    <button
      onClick={toggleLang}
      className="relative w-16 h-8 rounded-full bg-parchment-dark border border-gold/30 flex items-center transition-all duration-300 hover:border-gold/50 group"
      aria-label={t.langSwitchTo === 'EN' ? 'Switch to English' : 'Schakel naar Nederlands'}
      title={t.langSwitchTo === 'EN' ? 'Switch to English' : 'Schakel naar Nederlands'}
    >
      {/* Slider */}
      <div
        className={`absolute w-6 h-6 rounded-full bg-gold shadow-sm transition-all duration-300 flex items-center justify-center text-[10px] font-bold text-white ${
          lang === 'nl' ? 'left-1' : 'left-9'
        }`}
      >
        {lang === 'nl' ? 'NL' : 'EN'}
      </div>
      {/* Labels */}
      <span className={`absolute right-2 text-[10px] font-medium transition-opacity duration-200 ${
        lang === 'nl' ? 'text-ink-muted opacity-50' : 'text-ink-muted opacity-0'
      }`}>
        EN
      </span>
      <span className={`absolute left-2 text-[10px] font-medium transition-opacity duration-200 ${
        lang === 'en' ? 'text-ink-muted opacity-50' : 'text-ink-muted opacity-0'
      }`}>
        NL
      </span>
    </button>
  );
}
