import { useEffect, useState } from 'react';
import { Menu, X, Home } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations } from '@/i18n/translations';
import { LanguageSwitch } from './LanguageSwitch';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { label: t.navIntroduction, href: '#introduction' },
    { label: t.navGenealogy, href: '#genealogy' },
    { label: t.navCursedKings, href: '#cursed-kings' },
    { label: t.navMissingKings, href: '#missing-kings' },
  ];
  const homeUrl = 'https://christeneninnederland.nl/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-parchment/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center transition-colors ${
            scrolled ? 'border-gold bg-gold/10' : 'border-gold-light bg-gold/5'
          }`}>
            <span className="font-serif text-xl gold-text font-semibold">G</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-serif text-lg font-semibold transition-colors ${
              scrolled ? 'text-ink' : 'text-ink'
            }`}>
              {t.siteName}
            </span>
            <span className="text-xs text-ink-muted tracking-widest uppercase">
              {t.siteSubtitle}
            </span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a
            href={homeUrl}
            className="nav-link text-sm font-medium flex items-center gap-1.5"
          >
            <Home className="w-4 h-4" />
            {t.navHome}
          </a>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <LanguageSwitch />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitch />
          <button
            className="text-ink p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-parchment-light border-t border-gold/20 mt-3 py-4 px-6 flex flex-col gap-4">
          <a
            href={homeUrl}
            className="nav-link text-sm font-medium flex items-center gap-1.5"
            onClick={() => setMenuOpen(false)}
          >
            <Home className="w-4 h-4" />
            {t.navHome}
          </a>
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link text-sm font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
