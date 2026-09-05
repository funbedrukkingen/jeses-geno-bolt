import { useState, useMemo } from 'react';
import { useLanguage } from '@/i18n/LanguageContext';
import { translations } from '@/i18n/translations';
import { getLocalizedGenealogy } from '@/data/localizedData';
import type { GenealogyPerson } from '@/data/genealogy';
import {
  Search,
  ChevronDown,
  BookOpen,
  Users,
  AlertTriangle,
  Sparkles,
  X,
} from 'lucide-react';

type EraFilter = 'all' | 'new-testament' | 'inter-testamental' | 'kings' | 'patriarchs' | 'antediluvian';

function getEra(person: GenealogyPerson): EraFilter {
  const id = person.id;
  if (id <= 2) return 'new-testament';
  if (id <= 20) return 'inter-testamental';
  if (id >= 21 && id <= 41) return 'kings';
  if (id >= 42 && id <= 54) return 'patriarchs';
  return 'antediluvian';
}

export function GenealogyTree() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const genealogy = getLocalizedGenealogy(lang);

  const [search, setSearch] = useState('');
  const [eraFilter, setEraFilter] = useState<EraFilter>('all');
  const [selectedPerson, setSelectedPerson] = useState<GenealogyPerson | null>(null);

  const eraLabels: Record<EraFilter, string> = {
    all: t.genealogyEraAll,
    'new-testament': t.genealogyEraNewTestament,
    'inter-testamental': t.genealogyEraInterTestamental,
    kings: t.genealogyEraKings,
    patriarchs: t.genealogyEraPatriarchs,
    antediluvian: t.genealogyEraAntediluvian,
  };

  const filtered = useMemo(() => {
    return genealogy.filter((person) => {
      const matchesSearch =
        search === '' ||
        person.name.toLowerCase().includes(search.toLowerCase()) ||
        person.role.toLowerCase().includes(search.toLowerCase()) ||
        person.description.toLowerCase().includes(search.toLowerCase());

      const matchesEra = eraFilter === 'all' || getEra(person) === eraFilter;

      return matchesSearch && matchesEra;
    });
  }, [search, eraFilter, genealogy]);

  return (
    <section id="genealogy" className="relative py-24 md:py-32 bg-parchment-dark/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="ornament">✦ ✦ ✦</span>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-ink mt-4 mb-4">
            {t.genealogyTitle}
          </h2>
          <div className="gold-divider w-32 mx-auto mb-4" />
          <p className="text-base text-ink-muted max-w-2xl mx-auto">
            {t.genealogySubtitle}
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-3xl mx-auto">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ink-muted" />
            <input
              type="text"
              placeholder={t.genealogySearchPlaceholder}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-parchment-light border border-gold/20 rounded-sm text-ink placeholder:text-ink-muted focus:outline-none focus:border-gold transition-colors"
            />
          </div>
          <select
            value={eraFilter}
            onChange={(e) => setEraFilter(e.target.value as EraFilter)}
            className="px-4 py-3 bg-parchment-light border border-gold/20 rounded-sm text-ink focus:outline-none focus:border-gold transition-colors cursor-pointer"
          >
            {(Object.keys(eraLabels) as EraFilter[]).map((era) => (
              <option key={era} value={era}>
                {eraLabels[era]}
              </option>
            ))}
          </select>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-ink-muted">
              <p className="font-serif text-xl">{t.genealogyNoResults}</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((person, index) => {
                const isLeft = index % 2 === 0;
                return (
                  <GenealogyCard
                    key={person.id}
                    person={person}
                    index={index}
                    isLeft={isLeft}
                    onClick={() => setSelectedPerson(person)}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Detail modal */}
      {selectedPerson && (
        <PersonDetail
          person={selectedPerson}
          onClose={() => setSelectedPerson(null)}
          t={t}
        />
      )}
    </section>
  );
}

function GenealogyCard({
  person,
  index,
  isLeft,
  onClick,
}: {
  person: GenealogyPerson;
  index: number;
  isLeft: boolean;
  onClick: () => void;
}) {
  return (
    <div
      className={`relative flex items-center gap-6 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Node dot */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
        <div
          className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
            person.isKey
              ? 'bg-gold border-gold-dark scale-125 pulse-glow'
              : person.isCursed
              ? 'bg-wine border-wine-dark'
              : 'bg-parchment border-gold/50'
          }`}
        />
      </div>

      {/* Card */}
      <button
        onClick={onClick}
        className={`flex-1 ml-16 md:ml-0 md:max-w-[45%] text-left parchment-card rounded-lg p-5 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer group ${
          isLeft ? 'md:mr-auto' : 'md:ml-auto'
        }`}
        style={{ animationDelay: `${Math.min(index * 30, 600)}ms` }}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-ink-muted font-mono">
                #{person.id}
              </span>
              {person.isKey && (
                <Sparkles className="w-3.5 h-3.5 text-gold flex-shrink-0" />
              )}
              {person.isCursed && (
                <AlertTriangle className="w-3.5 h-3.5 text-wine flex-shrink-0" />
              )}
            </div>
            <h3 className="font-serif text-xl md:text-2xl font-semibold text-ink group-hover:text-gold transition-colors">
              {person.name}
            </h3>
            <p className="text-sm text-ink-muted mt-0.5">{person.role}</p>
          </div>
          <ChevronDown className="w-5 h-5 text-gold/40 group-hover:text-gold group-hover:rotate-0 transition-all flex-shrink-0 mt-1" style={{ transform: 'rotate(-90deg)' }} />
        </div>
        <p className="text-xs text-ink-muted mt-2 italic">{person.era}</p>
      </button>

      {/* Spacer for other side */}
      <div className="hidden md:block md:max-w-[45%] flex-1" />
    </div>
  );
}

function PersonDetail({
  person,
  onClose,
  t,
}: {
  person: GenealogyPerson;
  onClose: () => void;
  t: typeof translations['nl'];
}) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-ink/40 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-parchment-light rounded-lg shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto border border-gold/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-ink-muted hover:text-ink hover:bg-gold/10 transition-colors z-10"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="p-8 md:p-10 pb-6 border-b border-gold/15">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs text-ink-muted font-mono">#{person.id}</span>
            {person.isKey && (
              <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-gold/15 text-gold-dark font-medium">
                <Sparkles className="w-3 h-3" /> {t.genealogyKeyFigure}
              </span>
            )}
            {person.isCursed && (
              <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-wine/15 text-wine font-medium">
                <AlertTriangle className="w-3 h-3" /> {t.genealogyCursedKing}
              </span>
            )}
          </div>

          <h3 className="font-serif text-3xl md:text-4xl font-semibold text-ink">
            {person.name}
          </h3>
          <p className="text-sm text-gold font-medium mt-1">
            &ldquo;{person.meaning}&rdquo;
          </p>
          <p className="text-base text-ink-light mt-2">{person.role}</p>
          <p className="text-xs text-ink-muted mt-1 italic">{person.era}</p>
        </div>

        {/* Body */}
        <div className="p-8 md:p-10 pt-6 space-y-6">
          {/* Description */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-ink mb-2">
              {t.genealogyStoryTitle}
            </h4>
            <p className="text-sm text-ink-light leading-relaxed">
              {person.description}
            </p>
          </div>

          {/* Cursed note */}
          {person.isCursed && person.cursedNote && (
            <div className="p-4 rounded-lg bg-wine/5 border border-wine/20">
              <div className="flex items-start gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-wine flex-shrink-0 mt-0.5" />
                <h4 className="font-serif text-base font-semibold text-wine">
                  {t.genealogyTheCurseTitle}
                </h4>
              </div>
              <p className="text-sm text-ink-light leading-relaxed pl-6">
                {person.cursedNote}
              </p>
            </div>
          )}

          {/* Old Testament appearance */}
          <div className="p-4 rounded-lg bg-gold/5 border border-gold/15">
            <div className="flex items-start gap-2 mb-2">
              <BookOpen className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
              <h4 className="font-serif text-base font-semibold text-gold-dark">
                {t.genealogyOTTitle}
              </h4>
            </div>
            <p className="text-sm text-ink-light leading-relaxed pl-6 mb-2">
              {person.otAppearance}
            </p>
            <p className="text-xs text-gold font-medium pl-6">
              {person.otReference}
            </p>
          </div>

          {/* Family members */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-4 h-4 text-olive flex-shrink-0" />
              <h4 className="font-serif text-base font-semibold text-ink">
                {t.genealogyFamilyTitle}
              </h4>
            </div>
            <ul className="flex flex-wrap gap-2 pl-6">
              {person.familyMembers.map((member, i) => (
                <li
                  key={i}
                  className="text-xs px-3 py-1.5 rounded-full bg-olive/10 text-olive-dark border border-olive/20"
                >
                  {member}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
