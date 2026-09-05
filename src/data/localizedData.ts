import { genealogy, type GenealogyPerson } from './genealogy';
import { genealogyNL } from './genealogy.nl';
import { cursedKings, missingKings, type CursedKing } from './cursedKings';
import { cursedKingsNL, missingKingsNL } from './cursedKings.nl';
import type { Language } from '../i18n/LanguageContext';

export function getLocalizedGenealogy(lang: Language): GenealogyPerson[] {
  if (lang === 'en') return genealogy;

  return genealogy.map((person) => {
    const nl = genealogyNL[person.id];
    if (!nl) return person;
    return {
      ...person,
      meaning: nl.meaning,
      role: nl.role,
      era: nl.era,
      otAppearance: nl.otAppearance,
      otReference: nl.otReference,
      description: nl.description,
      familyMembers: nl.familyMembers,
      cursedNote: nl.cursedNote,
    };
  });
}

export function getLocalizedCursedKings(lang: Language): CursedKing[] {
  if (lang === 'en') return cursedKings;

  return cursedKings.map((king, index) => {
    const nl = cursedKingsNL[index];
    if (!nl) return king;
    return {
      ...king,
      reign: nl.reign,
      curse: nl.curse,
      curseReference: nl.curseReference,
      explanation: nl.explanation,
      genealogyNote: nl.genealogyNote,
    };
  });
}

export function getLocalizedMissingKings(lang: Language) {
  if (lang === 'en') return missingKings;
  return missingKingsNL;
}
