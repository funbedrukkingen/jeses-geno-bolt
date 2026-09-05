import { Feather, Globe, Crown } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations } from '@/i18n/translations';

export function Introduction() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section id="introduction" className="relative py-24 md:py-32 parchment-bg">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="ornament">✦ ✦ ✦</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink mt-4 mb-4">
            {t.introTitle}
          </h2>
          <div className="gold-divider w-32 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Globe,
              title: t.introUniversalTitle,
              text: t.introUniversalText,
            },
            {
              icon: Feather,
              title: t.introMeticulousTitle,
              text: t.introMeticulousText,
            },
            {
              icon: Crown,
              title: t.introRoyalTitle,
              text: t.introRoyalText,
            },
          ].map((card) => (
            <div key={card.title} className="parchment-card rounded-lg p-8 transition-all duration-300 hover:-translate-y-1">
              <card.icon className="w-10 h-10 text-gold mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-xl font-semibold text-ink mb-3">
                {card.title}
              </h3>
              <p className="text-sm text-ink-light leading-relaxed">
                {card.text}
              </p>
            </div>
          ))}
        </div>

        {/* Main text */}
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg text-ink-light leading-relaxed font-serif">
            {t.introPara1}
          </p>

          <p className="text-base text-ink-light leading-relaxed">
            {t.introPara2}
          </p>

          <p className="text-base text-ink-light leading-relaxed">
            {t.introPara3}
          </p>
        </div>

        {/* Scripture quote */}
        <div className="mt-16 text-center max-w-2xl mx-auto">
          <div className="parchment-card rounded-lg p-8 md:p-12">
            <p className="font-serif text-xl md:text-2xl text-ink italic leading-relaxed">
              &ldquo;{t.introQuote}&rdquo;
            </p>
            <p className="mt-6 text-sm text-gold font-medium tracking-wider uppercase">
              {t.introQuoteRef}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
