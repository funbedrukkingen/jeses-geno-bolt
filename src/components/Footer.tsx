import { Heart } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations } from '@/i18n/translations';

export function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <footer className="relative py-16 bg-ink text-parchment">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="ornament text-gold-light">✦ ✦ ✦</span>

        <h3 className="font-serif text-2xl md:text-3xl font-light text-parchment mt-6 mb-4">
          {t.footerTitle}
        </h3>

        <p className="text-sm text-stone-light max-w-2xl mx-auto leading-relaxed mb-8">
          {t.footerQuote}
        </p>

        <div className="gold-divider w-32 mx-auto mb-8" />

        <p className="text-xs text-stone leading-relaxed max-w-xl mx-auto">
          {t.footerText}
        </p>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-stone">
          <span>{t.footerCreatedWith}</span>
          <Heart className="w-3 h-3 text-wine-light" fill="currentColor" />
          <span>{t.footerForScripture}</span>
        </div>
      </div>
    </footer>
  );
}
