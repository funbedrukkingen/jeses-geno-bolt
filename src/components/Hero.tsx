import { BookOpen, Scroll, TreePine } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations } from '@/i18n/translations';

interface HeroProps {
  isEmbed?: boolean;
}

export function Hero({ isEmbed = false }: HeroProps) {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section
      id="top"
      className={`relative ${isEmbed ? 'pt-16 pb-12' : 'min-h-screen'} flex items-center justify-center overflow-hidden`}
    >
      {/* Background layers */}
      <div className="absolute inset-0 parchment-bg" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23b8962e' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] rounded-full bg-gold/5 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-20">
        <div className="animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <span className="ornament">✦ ✦ ✦</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-ink mt-6 mb-4 text-balance animate-fade-up" style={{ animationDelay: '0.3s', opacity: 0 }}>
          {t.heroTitleLine1}
          <span className="block font-semibold gold-text mt-2">{t.heroTitleLine2}</span>
        </h1>

        <p className="font-serif text-xl md:text-2xl text-ink-light italic mt-6 animate-fade-up" style={{ animationDelay: '0.5s', opacity: 0 }}>
          {t.heroSubtitle}
        </p>

        <div className="gold-divider w-48 mx-auto my-8 animate-fade-in" style={{ animationDelay: '0.7s', opacity: 0 }} />

        <p className="text-base md:text-lg text-ink-light max-w-2xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.8s', opacity: 0 }}>
          {t.heroDescription}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-12 animate-fade-up" style={{ animationDelay: '1s', opacity: 0 }}>
          <a
            href="#introduction"
            className="px-8 py-3 bg-gold text-white font-medium rounded-sm hover:bg-gold-dark transition-colors duration-300 shadow-md"
          >
            {t.heroBegin}
          </a>
          <a
            href="#genealogy"
            className="px-8 py-3 border border-gold text-ink font-medium rounded-sm hover:bg-gold/10 transition-colors duration-300"
          >
            {t.heroViewGenealogy}
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mt-20 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '1.2s', opacity: 0 }}>
          {[
            { icon: Scroll, value: '77', label: t.heroStatGenerations },
            { icon: BookOpen, value: '14', label: t.heroStatBooks },
            { icon: TreePine, value: '7', label: t.heroStatCursedKings },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-6 h-6 text-gold mx-auto mb-2" strokeWidth={1.5} />
              <div className="font-serif text-3xl md:text-4xl font-semibold text-ink">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-ink-muted uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      {!isEmbed && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gold/40 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1 h-2 bg-gold/60 rounded-full" />
          </div>
        </div>
      )}
    </section>
  );
}
