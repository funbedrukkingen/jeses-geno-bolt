import type { Language } from './LanguageContext';

export interface UITranslations {
  // Header
  siteName: string;
  siteSubtitle: string;
  navIntroduction: string;
  navGenealogy: string;
  navCursedKings: string;
  navMissingKings: string;
  navHome: string;

  // Hero
  heroTitleLine1: string;
  heroTitleLine2: string;
  heroSubtitle: string;
  heroDescription: string;
  heroBegin: string;
  heroViewGenealogy: string;
  heroStatGenerations: string;
  heroStatBooks: string;
  heroStatCursedKings: string;

  // Introduction
  introTitle: string;
  introUniversalTitle: string;
  introUniversalText: string;
  introMeticulousTitle: string;
  introMeticulousText: string;
  introRoyalTitle: string;
  introRoyalText: string;
  introPara1: string;
  introPara2: string;
  introPara3: string;
  introQuote: string;
  introQuoteRef: string;

  // Genealogy section
  genealogyTitle: string;
  genealogySubtitle: string;
  genealogySearchPlaceholder: string;
  genealogyNoResults: string;
  genealogyEraAll: string;
  genealogyEraNewTestament: string;
  genealogyEraInterTestamental: string;
  genealogyEraKings: string;
  genealogyEraPatriarchs: string;
  genealogyEraAntediluvian: string;
  genealogyKeyFigure: string;
  genealogyCursedKing: string;
  genealogyStoryTitle: string;
  genealogyOTTitle: string;
  genealogyFamilyTitle: string;
  genealogyTheCurseTitle: string;

  // Cursed kings
  cursedKingsTitle: string;
  cursedKingsSubtitle: string;
  cursedKingsPuzzleTitle: string;
  cursedKingsPuzzleText: string;
  cursedKingsInGenealogy: string;

  // Missing kings
  missingKingsTitle: string;
  missingKingsSubtitle: string;
  missingKingsWhyTitle: string;
  missingKingsWhyText: string;
  missingKingsMatthewGap: string;

  // Footer
  footerTitle: string;
  footerQuote: string;
  footerText: string;
  footerCreatedWith: string;
  footerForScripture: string;

  // Embed
  embedButtonTitle: string;
  embedTitle: string;
  embedDescription: string;
  embedCopy: string;
  embedCopied: string;
  embedTipsTitle: string;
  embedTip1: string;
  embedTip2: string;
  embedTip3: string;

  // Language switch
  langSwitchTo: string;
}

const nl: UITranslations = {
  siteName: 'Generaties van Genade',
  siteSubtitle: 'De stamboom van Jezus · Lucas 3',
  navIntroduction: 'Introductie',
  navGenealogy: 'De Stamboom',
  navCursedKings: 'Vervloekte Koningen',
  navMissingKings: 'Ontbrekende Koningen',
  navHome: 'Home',

  heroTitleLine1: 'De Stamboom van',
  heroTitleLine2: 'Jezus Christus',
  heroSubtitle: 'Volgens het Evangelie van Lucas',
  heroDescription:
    'Een reis door zevenenzeventig generaties — van God de Schepper, via Adam, Abraham en David, naar Jezus van Nazareth. Ontdek elke naam, de eerste verschijning in het Oude Testament, de vervloekte koningen in de lijn, en de familieleden die de heilsgeschiedenis vormden.',
  heroBegin: 'Begin de Reis',
  heroViewGenealogy: 'Bekijk de Stamboom',
  heroStatGenerations: 'Generaties',
  heroStatBooks: 'OT Boeken',
  heroStatCursedKings: 'Vervloekte Koningen',

  introTitle: 'Waarom de Stamboom van Lucas?',
  introUniversalTitle: 'Universele Reikwijdte',
  introUniversalText:
    'In tegenstelling tot Matteüs, die Jezus terugvoert tot Abraham, gaat Lucas helemaal terug tot Adam en God — en toont daarmee Jezus als zoon van de hele mensheid, niet alleen van Israël.',
  introMeticulousTitle: 'Zorgvuldige Registratie',
  introMeticulousText:
    'Lucas, een arts en historicus, onderzocht zijn verslag zorgvuldig. Hij traceert 77 namen — van Jezus via David, Abraham, Noach en Adam tot God zelf.',
  introRoyalTitle: 'Koninklijke Afstamming',
  introRoyalText:
    'De stamboom loopt door koningen, herders, hoeren en aartsvaders. Er zijn vervloekte koningen wier lijn gedoemd was — maar de belofte hield stand.',

  introPara1:
    'Het Evangelie van Lucas presenteert de stamboom van Jezus in hoofdstuk 3, direct na zijn doop. Waar Matteüs zijn stamboom aan het begin plaatst en vooruitwerkt van Abraham naar Jezus, werkt Lucas achteruit — beginnend bij Jezus en klimmend terug door de geschiedenis, via David en Abraham, via Noach en Henoch, via Adam, tot hij God zelf bereikt.',
  introPara2:
    'Deze oplopende structuur maakt een theologische uitspraak: Jezus is niet slechts de zoon van David of de zoon van Abraham — hij is de Zoon van God. De lijn loopt door herders en koningen, door rechtvaardigen en goddelozen, door een hoer (Rachab) en een Moabitische vreemdelinge (Ruth), door een man vervloekt door een profeet (Jeconja) en een man die met God wandelde zonder te sterven (Henoch). Elke naam vertelt een verhaal. Elk verhaal wijst vooruit naar degene die zou komen.',
  introPara3:
    'Op deze site vindt u elk van de 77 namen in de stamboom van Lucas, in de volgorde van Lucas (van Jezus tot God). Voor elke persoon traceren we de eerste verschijning van hun naam in het Oude Testament, beschrijven we hun rol en familie, en belichten we de vervloekte koningen wiens aanwezigheid in de lijn een theologisch raadsel vormt dat het Nieuwe Testament oplost in de persoon van Jezus.',

  introQuote:
    'Jezus was ongeveer dertig jaar oud toen hij optrad, en werd, naar men meende, een zoon van Jozef, de zoon van Eli… de zoon van Enos, de zoon van Seth, de zoon van Adam, de zoon van God.',
  introQuoteRef: 'Lucas 3:23, 38',

  genealogyTitle: 'De Lijn — Van Jezus tot God',
  genealogySubtitle:
    'Gerangschikt in de volgorde van Lucas, beginnend bij Jezus en oplopend door de geschiedenis naar God. Klik op een naam om zijn of haar verhaal te ontdekken.',
  genealogySearchPlaceholder: 'Zoek op naam of rol...',
  genealogyNoResults: 'Geen namen gevonden die overeenkomen met uw zoekopdracht.',
  genealogyEraAll: 'Alle Generaties',
  genealogyEraNewTestament: 'Nieuwtestamentisch Tijdperk',
  genealogyEraInterTestamental: 'Na Ballingschap tot NT',
  genealogyEraKings: 'Koningen van Juda',
  genealogyEraPatriarchs: 'Aartsvaders',
  genealogyEraAntediluvian: 'Voor de Zondvloed',
  genealogyKeyFigure: 'Sleutelfiguur',
  genealogyCursedKing: 'Vervloekte Koning',
  genealogyStoryTitle: 'Het Verhaal',
  genealogyOTTitle: 'Eerste Verschijning in het Oude Testament',
  genealogyFamilyTitle: 'Bekende Familieleden',
  genealogyTheCurseTitle: 'De Vloek',

  cursedKingsTitle: 'De Vervloekte Koningen',
  cursedKingsSubtitle:
    'Koningen in de lijn van David die door God vervloekt of geoordeeld werden — maar door wie de messiaanse belofte toch bleef vloeien.',
  cursedKingsPuzzleTitle: 'Het Raadsel van de Vervloekte Lijn',
  cursedKingsPuzzleText:
    'God beloofde David dat zijn troon voor altijd zou bestaan (2 Samuël 7:16). Maar de laatste koning in de lijn van David, Jeconja, werd vervloekt door Jeremia: "Schrijf deze man op als kinderloos… geen van zijn nakomelingen zal slagen om op de troon van David te zitten" (Jeremia 22:30). Hoe kan de Messias uit een vervloekte lijn komen? Het antwoord van het Nieuwe Testament is de maagdelijke geboorte: Jezus is de wettelijke erfgenaam van de troon van David via Jozef (afgestammd van de vervloekte Jeconja), maar zijn biologische afstamming komt via Maria uit een andere tak van Davids familie (via Nathan, niet Salomo). De vloek op Jeconja\'s biologische nakomelingen wordt omzeild, terwijl het wettelijke recht op de troon behouden blijft.',
  cursedKingsInGenealogy: 'In de Stamboom van Lucas',

  missingKingsTitle: 'De Ontbrekende Koningen',
  missingKingsSubtitle:
    'Koningen die opzettelijk weggelaten zijn uit de stamboom van Matteüs — aanwezig bij Lucas maar overgeslagen in Matteüs\' drie groepen van veertien.',
  missingKingsWhyTitle: 'Waarom slaat Matteüs koningen over?',
  missingKingsWhyText:
    'Matteüs organiseerde zijn stamboom in drie groepen van veertien generaties (Matteüs 1:17): van Abraham tot David, van David tot de ballingschap, en van de ballingschap tot Jezus. Om deze symmetrie te bereiken, sloeg hij opzettelijk verschillende koningen over tussen David en de ballingschap. Deze overgeslagen koningen werden vaak geassocieerd met oordeel of ontrouw. Lucas, met een ander doel, geeft een meer complete lijst. De ontbrekende koningen zijn geen fouten — ze zijn bewuste literaire keuzes die verschillende aspecten van Gods verlossingsplan belichten.',
  missingKingsMatthewGap: 'Overgeslagen in Matteüs',

  footerTitle: 'Generaties van Genade',
  footerQuote:
    '"Het boek van de afstamming van Jezus Christus, de zoon van David, de zoon van Abraham." — Matteüs 1:1. "Jezus… de zoon van Adam, de zoon van God." — Lucas 3:23, 38.',
  footerText:
    'Deze site presenteert de stamboom van Jezus zoals opgetekend in Lucas 3:23-38. Elke naam is verbonden met de eerste verschijning in het Oude Testament, met familieleden en historische context. De vervloekte en ontbrekende koningen van de Davidische lijn worden verkend om hun theologische betekenis.',
  footerCreatedWith: 'Gemaakt met',
  footerForScripture: 'voor de bestudering van de Schrift',

  embedButtonTitle: 'Embed-code ophalen',
  embedTitle: 'Deze Pagina Insluiten',
  embedDescription:
    'Kopieer de onderstaande code en plak deze in de HTML van uw website. De ingesloten versie laadt zonder eigen navigatiebalk en voettekst, zodat het naadloos opgaat in de menustructuur van uw site.',
  embedCopy: 'Code kopiëren',
  embedCopied: 'Naar klembord gekopieerd!',
  embedTipsTitle: 'Tips',
  embedTip1: 'Pas de attributen width en height aan om in uw lay-out te passen.',
  embedTip2: 'De parameter ?embed=1 verbergt de eigen kop- en voettekst van deze pagina.',
  embedTip3: 'Alle interne links blijven binnen het iframe — ze navigeren nooit de bovenliggende pagina.',

  langSwitchTo: 'EN',
};

const en: UITranslations = {
  siteName: 'Generations of Grace',
  siteSubtitle: 'The Genealogy of Jesus · Luke 3',
  navIntroduction: 'Introduction',
  navGenealogy: 'The Genealogy',
  navCursedKings: 'Cursed Kings',
  navMissingKings: 'Missing Kings',
  navHome: 'Home',

  heroTitleLine1: 'The Genealogy of',
  heroTitleLine2: 'Jesus Christ',
  heroSubtitle: 'According to the Gospel of Luke',
  heroDescription:
    'A journey through seventy-seven generations — from God the Creator, through Adam, Abraham, and David, to Jesus of Nazareth. Explore each name, its first appearance in the Old Testament, the cursed kings in the line, and the family members who shaped salvation history.',
  heroBegin: 'Begin the Journey',
  heroViewGenealogy: 'View the Genealogy',
  heroStatGenerations: 'Generations',
  heroStatBooks: 'OT Books',
  heroStatCursedKings: 'Cursed Kings',

  introTitle: "Why Luke's Genealogy?",
  introUniversalTitle: 'Universal Scope',
  introUniversalText:
    'Unlike Matthew, who traces Jesus back to Abraham, Luke goes all the way to Adam and God — showing Jesus as the son of all humanity, not just of Israel.',
  introMeticulousTitle: 'Meticulous Record',
  introMeticulousText:
    'Luke, a physician and historian, carefully researched his account. He traces 77 names — from Jesus through David, Abraham, Noah, and Adam to God himself.',
  introRoyalTitle: 'Royal Lineage',
  introRoyalText:
    'The genealogy passes through kings, shepherds, prostitutes, and patriarchs. It includes cursed kings whose line was doomed — yet the promise endured.',

  introPara1:
    "The Gospel of Luke presents the genealogy of Jesus in chapter 3, immediately following his baptism. Where Matthew places his genealogy at the very beginning and traces forward from Abraham to Jesus, Luke works in reverse — beginning with Jesus and climbing backward through history, through David and Abraham, through Noah and Enoch, through Adam, until reaching God himself.",
  introPara2:
    "This ascending structure makes a theological statement: Jesus is not merely the son of David or the son of Abraham — he is the Son of God. The line passes through shepherds and kings, through the righteous and the wicked, through a prostitute (Rahab) and a Moabite foreigner (Ruth), through a man cursed by a prophet (Jeconiah) and a man who walked with God without dying (Enoch). Every name tells a story. Every story points forward to the one who would come.",
  introPara3:
    "On this site, you will find each of the 77 names in Luke's genealogy, listed in Luke's order (from Jesus to God). For each person, we trace the first appearance of their name in the Old Testament, describe their role and family, and highlight the cursed kings whose presence in the line poses a theological puzzle that the New Testament resolves in the person of Jesus.",

  introQuote:
    'Jesus, when he began his ministry, was about thirty years of age, being the son (as was supposed) of Joseph, the son of Heli… the son of Enosh, the son of Seth, the son of Adam, the son of God.',
  introQuoteRef: 'Luke 3:23, 38',

  genealogyTitle: 'The Lineage — From Jesus to God',
  genealogySubtitle:
    "Listed in Luke's order, beginning with Jesus and ascending through history to God. Click any name to explore their story.",
  genealogySearchPlaceholder: 'Search by name or role...',
  genealogyNoResults: 'No names found matching your search.',
  genealogyEraAll: 'All Generations',
  genealogyEraNewTestament: 'New Testament Era',
  genealogyEraInterTestamental: 'Post-Exile to NT',
  genealogyEraKings: 'Kings of Judah',
  genealogyEraPatriarchs: 'Patriarchs',
  genealogyEraAntediluvian: 'Before the Flood',
  genealogyKeyFigure: 'Key Figure',
  genealogyCursedKing: 'Cursed King',
  genealogyStoryTitle: 'The Story',
  genealogyOTTitle: 'First Appearance in the Old Testament',
  genealogyFamilyTitle: 'Known Family Members',
  genealogyTheCurseTitle: 'The Curse',

  cursedKingsTitle: 'The Cursed Kings',
  cursedKingsSubtitle:
    'Kings in the line of David who were cursed or judged by God — yet through whom the Messianic promise still flowed.',
  cursedKingsPuzzleTitle: 'The Puzzle of the Cursed Line',
  cursedKingsPuzzleText:
    "God promised David that his throne would last forever (2 Samuel 7:16). Yet the last king in David's line, Jeconiah, was cursed by Jeremiah: \"Write this man down as childless… none of his offspring shall succeed in sitting on the throne of David\" (Jeremiah 22:30). How can the Messiah come from a cursed line? The New Testament's answer is the virgin birth: Jesus is the legal heir to David's throne through Joseph (descended from the cursed Jeconiah), but his biological descent comes through Mary via a different branch of David's family (through Nathan, not Solomon). The curse on Jeconiah's biological descendants is bypassed, while the legal right to the throne is preserved.",
  cursedKingsInGenealogy: "In Luke's Genealogy",

  missingKingsTitle: 'The Missing Kings',
  missingKingsSubtitle:
    "Kings deliberately omitted from Matthew's genealogy — present in Luke but skipped in Matthew's three sets of fourteen.",
  missingKingsWhyTitle: 'Why Does Matthew Skip Kings?',
  missingKingsWhyText:
    "Matthew organized his genealogy into three groups of fourteen generations (Matthew 1:17): from Abraham to David, from David to the exile, and from the exile to Jesus. To achieve this symmetry, he deliberately skipped several kings between David and the exile. These skipped kings were often associated with judgment or unfaithfulness. Luke, writing with a different purpose, includes a more complete list. The missing kings are not errors — they are intentional literary choices that highlight different aspects of God's redemptive plan.",
  missingKingsMatthewGap: 'Skipped in Matthew',

  footerTitle: 'Generations of Grace',
  footerQuote:
    '"The book of the genealogy of Jesus Christ, the son of David, the son of Abraham." — Matthew 1:1. "Jesus… the son of Adam, the son of God." — Luke 3:23, 38.',
  footerText:
    "This site presents the genealogy of Jesus as recorded in Luke 3:23-38. Each name is connected to its first appearance in the Old Testament, with family members and historical context. The cursed and missing kings of the Davidic line are explored for their theological significance.",
  footerCreatedWith: 'Created with',
  footerForScripture: 'for the study of Scripture',

  embedButtonTitle: 'Get embed code',
  embedTitle: 'Embed This Page',
  embedDescription:
    "Copy the code below and paste it into your website's HTML. The embedded version loads without its own navigation bar and footer, so it blends seamlessly into your site's menu structure.",
  embedCopy: 'Copy code',
  embedCopied: 'Copied to clipboard!',
  embedTipsTitle: 'Tips',
  embedTip1: 'Adjust the width and height attributes to fit your layout.',
  embedTip2: 'The ?embed=1 parameter hides this page\'s own header and footer.',
  embedTip3: 'All internal links stay within the iframe — they never navigate the parent page.',

  langSwitchTo: 'NL',
};

export const translations: Record<Language, UITranslations> = { nl, en };
