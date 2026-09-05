export interface CursedKing {
  name: string;
  reign: string;
  curse: string;
  curseReference: string;
  explanation: string;
  inGenealogy: boolean;
  genealogyNote?: string;
}

// Kings in the Davidic line who were cursed or judged by God,
// yet through whom the Messianic line still passed.
// These are the "missing" or problematic kings — some are absent from
// Matthew's genealogy, and others are present despite divine judgment.

export const cursedKings: CursedKing[] = [
  {
    name: 'Jeconiah (Jehoiachin / Coniah)',
    reign: '597 BC (3 months)',
    curse: '"Write this man down as childless, a man who shall not succeed in his days, for none of his offspring shall succeed in sitting on the throne of David and ruling again in Judah."',
    curseReference: 'Jeremiah 22:30',
    explanation: 'Jeconiah was the last king of Judah before the Babylonian exile. Jeremiah pronounced a specific curse on him: none of his descendants would sit on David\'s throne. This created a profound theological problem — the Messianic promise required a Davidic king, but the last Davidic king was cursed. Luke\'s genealogy traces Jesus through Jeconiah (via Shealtiel and Zerubbabel), while Matthew\'s genealogy also includes him. The resolution: Jesus is the legal heir through Joseph (descended from Jeconiah) but biologically descended from David through Mary via a different line (Nathan, not Solomon). The virgin birth bypasses the curse on Jeconiah\'s biological descendants while preserving the legal right to the throne.',
    inGenealogy: true,
    genealogyNote: 'Present in Luke 3:27 and Matthew 1:12. The curse on his line is resolved by the virgin birth of Jesus.',
  },
  {
    name: 'Jehoiakim (Eliakim)',
    reign: '609–598 BC',
    curse: '"He shall be buried with the burial of a donkey, dragged and cast out beyond the gates of Jerusalem."',
    curseReference: 'Jeremiah 22:19; also Jeremiah 36:30',
    explanation: 'Jehoiakim was a vassal king who switched allegiances between Egypt and Babylon. He famously burned Jeremiah\'s prophetic scroll piece by piece as it was read to him, showing contempt for God\'s word. God declared he would receive the burial of a donkey — no honorable funeral, dragged out and dumped. He is in Luke\'s genealogy but notably absent from Matthew\'s, which skips him (Matthew compresses the genealogy into three sets of 14).',
    inGenealogy: true,
    genealogyNote: 'Present in Luke 3:24. Absent from Matthew\'s compressed genealogy (Matthew 1:11 skips from Josiah to Jeconiah).',
  },
  {
    name: 'Jehoram (Joram)',
    reign: '848–841 BC',
    curse: '"Behold, the Lord will bring a great plague on your people, your children, your wives, and all your possessions, and you yourself will have a severe sickness with a disease of your bowels."',
    curseReference: '2 Chronicles 21:14–15',
    explanation: 'Jehoram married Athaliah, daughter of Ahab and Jezebel, importing their Baal worship to Judah. He murdered all his brothers to secure the throne. Elijah sent him a letter of judgment. The Philistines and Arabs invaded and carried off his family, and he died of a horrible intestinal disease. He is in Luke\'s genealogy but absent from Matthew\'s, which skips him.',
    inGenealogy: true,
    genealogyNote: 'Present in Luke 3:25. Absent from Matthew\'s genealogy (Matthew 1:8 skips from Jehoshaphat to Uzziah).',
  },
  {
    name: 'Ahaziah (Jehoahaz)',
    reign: '841 BC (1 year)',
    curse: '"The destruction of Ahaziah was from God, in that he went to Joram."',
    curseReference: '2 Chronicles 22:7',
    explanation: 'Ahaziah reigned only one year. He was influenced by his mother Athaliah and the house of Ahab. He allied with Israel against Syria and was killed during Jehu\'s purge. He is in Luke\'s genealogy but absent from Matthew\'s, which skips him.',
    inGenealogy: true,
    genealogyNote: 'Present in Luke 3:25. Absent from Matthew\'s genealogy (Matthew 1:8 skips from Jehoshaphat to Uzziah).',
  },
  {
    name: 'Manasseh',
    reign: '696–642 BC (55 years, longest reign)',
    curse: '"I am bringing upon Jerusalem and Judah such disaster that the ears of everyone who hears of it will tingle... I will wipe Jerusalem as one wipes a dish, wiping it and turning it upside down."',
    curseReference: '2 Kings 21:12–13; also 2 Kings 24:3–4',
    explanation: 'Manasseh was the most wicked king of Judah. He rebuilt idolatrous altars, practiced sorcery, consulted mediums, and sacrificed his own son in the fire. God declared that Judah\'s destruction was specifically because of Manasseh\'s sins. Remarkably, 2 Chronicles 33:11–13 records that Manasseh repented in Assyrian captivity and turned back to God — a story of redemption even for the worst of kings. He is in both genealogies.',
    inGenealogy: true,
    genealogyNote: 'Present in Luke 3:26. Absent from Matthew\'s compressed genealogy (Matthew 1:10 skips from Hezekiah to Josiah).',
  },
  {
    name: 'Amon',
    reign: '642–640 BC (2 years)',
    curse: '"He did what was evil in the sight of the Lord, as Manasseh his father had done. Amon sacrificed to all the images that Manasseh his father had made, and served them."',
    curseReference: '2 Chronicles 33:22–23',
    explanation: 'Amon followed his father Manasseh\'s idolatry but without Manasseh\'s later repentance. He was assassinated by his own officials after just two years. The people then killed the conspirators and made his young son Josiah king. He is in Luke\'s genealogy.',
    inGenealogy: true,
    genealogyNote: 'Present in Luke 3:25. Absent from Matthew\'s compressed genealogy.',
  },
  {
    name: 'Rehoboam',
    reign: '931–913 BC',
    curse: '"You have forsaken me, so I also forsake you to Shishak."',
    curseReference: '2 Chronicles 12:5',
    explanation: 'Rehoboam\'s arrogance caused the kingdom to split. Ten tribes broke away, leaving only Judah and Benjamin. In his fifth year, Pharaoh Shishak of Egypt attacked Jerusalem and carried off the treasures of the temple and the palace. He is in both genealogies and represents the fracture of David\'s united kingdom.',
    inGenealogy: true,
    genealogyNote: 'Present in Luke 3:25 and Matthew 1:9 (as Roboam).',
  },
];

// Kings who are notably MISSING from Matthew's genealogy but present in Luke's
// (Matthew compressed the genealogy into 3 sets of 14 generations, deliberately
// omitting several kings between David and the exile)

export const missingKings = [
  {
    name: 'Ahaziah',
    reign: '841 BC',
    reason: 'Killed by Jehu during the purge of Ahab\'s house. His destruction was "from God" (2 Chronicles 22:7).',
    matthewGap: 'Skipped between Jehoshaphat and Uzziah (Matthew 1:8)',
  },
  {
    name: 'Joash (Jehoash)',
    reign: '835–796 BC',
    reason: 'Began well under priestly guidance but turned to idolatry. Murdered the prophet Zechariah, son of his mentor Jehoiada (2 Chronicles 24:20–22). Jesus references this murder in Luke 11:51.',
    matthewGap: 'Skipped between Jehoshaphat and Uzziah (Matthew 1:8)',
  },
  {
    name: 'Amaziah',
    reign: '796–767 BC',
    reason: 'Began well but worshipped Edomite idols and provoked a disastrous war with Israel. He was assassinated at Lachish.',
    matthewGap: 'Skipped between Jehoshaphat and Uzziah (Matthew 1:8)',
  },
  {
    name: 'Jehoiakim',
    reign: '609–598 BC',
    reason: 'Burned Jeremiah\'s scroll. Cursed with a donkey\'s burial (Jeremiah 22:19).',
    matthewGap: 'Skipped between Josiah and Jeconiah (Matthew 1:11)',
  },
  {
    name: 'Jehoahaz (Shallum)',
    reign: '609 BC (3 months)',
    reason: 'Pharaoh Neco deposed him after 3 months and carried him to Egypt, where he died. He "did what was evil in the sight of the Lord" (2 Kings 23:32).',
    matthewGap: 'Skipped between Josiah and Jeconiah (Matthew 1:11)',
  },
];
