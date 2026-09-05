import { useLanguage } from '@/i18n/LanguageContext';
import { translations } from '@/i18n/translations';
import { getLocalizedCursedKings, getLocalizedMissingKings } from '@/data/localizedData';
import { AlertTriangle, Crown, HelpCircle, BookX } from 'lucide-react';

export function CursedKings() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const cursedKings = getLocalizedCursedKings(lang);
  const missingKings = getLocalizedMissingKings(lang);

  return (
    <>
      {/* Cursed Kings Section */}
      <section id="cursed-kings" className="relative py-24 md:py-32 parchment-bg">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="ornament">✦ ✦ ✦</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-ink mt-4 mb-4">
              {t.cursedKingsTitle}
            </h2>
            <div className="gold-divider w-32 mx-auto mb-4" />
            <p className="text-base text-ink-muted max-w-2xl mx-auto">
              {t.cursedKingsSubtitle}
            </p>
          </div>

          {/* Theological puzzle */}
          <div className="parchment-card rounded-lg p-8 md:p-10 mb-12">
            <div className="flex items-start gap-4">
              <HelpCircle className="w-8 h-8 text-wine flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="font-serif text-xl md:text-2xl font-semibold text-ink mb-3">
                  {t.cursedKingsPuzzleTitle}
                </h3>
                <p className="text-sm md:text-base text-ink-light leading-relaxed">
                  {t.cursedKingsPuzzleText}
                </p>
              </div>
            </div>
          </div>

          {/* Cursed kings cards */}
          <div className="space-y-6">
            {cursedKings.map((king, index) => (
              <div
                key={index}
                className="parchment-card rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Left: King info */}
                  <div className="md:w-1/3 p-6 md:p-8 bg-wine/5 border-b md:border-b-0 md:border-r border-wine/15">
                    <div className="flex items-center gap-2 mb-3">
                      <Crown className="w-5 h-5 text-wine" strokeWidth={1.5} />
                      <span className="text-xs text-wine font-medium uppercase tracking-wider">
                        {t.genealogyCursedKing}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-ink mb-1">
                      {king.name}
                    </h3>
                    <p className="text-sm text-ink-muted">{king.reign}</p>
                    {king.inGenealogy && (
                      <span className="inline-block mt-3 text-xs px-2 py-1 rounded bg-gold/15 text-gold-dark font-medium">
                        {t.cursedKingsInGenealogy}
                      </span>
                    )}
                  </div>

                  {/* Right: Curse and explanation */}
                  <div className="md:w-2/3 p-6 md:p-8">
                    <div className="mb-4">
                      <div className="flex items-start gap-2 mb-2">
                        <AlertTriangle className="w-4 h-4 text-wine flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-ink italic leading-relaxed font-serif">
                          {king.curse}
                        </p>
                      </div>
                      <p className="text-xs text-wine font-medium pl-6">
                        {king.curseReference}
                      </p>
                    </div>
                    <div className="gold-divider mb-4" />
                    <p className="text-sm text-ink-light leading-relaxed">
                      {king.explanation}
                    </p>
                    {king.genealogyNote && (
                      <p className="text-xs text-gold-dark mt-3 italic">
                        {king.genealogyNote}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Missing Kings Section */}
      <section id="missing-kings" className="relative py-24 md:py-32 bg-parchment-dark/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="ornament">✦ ✦ ✦</span>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-ink mt-4 mb-4">
              {t.missingKingsTitle}
            </h2>
            <div className="gold-divider w-32 mx-auto mb-4" />
            <p className="text-base text-ink-muted max-w-2xl mx-auto">
              {t.missingKingsSubtitle}
            </p>
          </div>

          <div className="parchment-card rounded-lg p-6 md:p-8 mb-10">
            <div className="flex items-start gap-4">
              <BookX className="w-7 h-7 text-stone flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h3 className="font-serif text-lg md:text-xl font-semibold text-ink mb-2">
                  {t.missingKingsWhyTitle}
                </h3>
                <p className="text-sm text-ink-light leading-relaxed">
                  {t.missingKingsWhyText}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {missingKings.map((king) => (
              <div
                key={king.name}
                className="parchment-card rounded-lg p-6 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                  <div className="md:w-1/4">
                    <h3 className="font-serif text-lg font-semibold text-ink">
                      {king.name}
                    </h3>
                    <p className="text-xs text-ink-muted">{king.reign}</p>
                  </div>
                  <div className="md:w-2/5">
                    <p className="text-sm text-ink-light leading-relaxed">
                      {king.reason}
                    </p>
                  </div>
                  <div className="md:w-1/3">
                    <p className="text-xs text-stone-dark font-medium">
                      {king.matthewGap}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
