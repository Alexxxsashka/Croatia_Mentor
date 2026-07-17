export interface PlacementQuestion {
  id: number;
  level: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: {
    en: string;
    ru: string;
    ua: string;
  };
}

export const placementQuestions: PlacementQuestion[] = [
  // ==========================================
  // BLOCK 1: VOCABULARY (Rječnik)
  // ==========================================
  {
    id: 1,
    level: "A1",
    question: 'Što na hrvatskom jeziku znači riječ "obitelj"?',
    options: ["Family", "Friend", "Work", "House"],
    correctAnswer: 0,
    explanation: {
      en: '"Obitelj" is the Croatian word for family.',
      ru: '"Obitelj" означает "семья" по-хорватски.',
      ua: '"Obitelj" означає "сім\'я" хорватською.'
    }
  },
  {
    id: 2,
    level: "A2",
    question: 'Koji je suprotan smjer od riječi "lijevo"?',
    options: ["ravno", "desno", "natrag", "gore"],
    correctAnswer: 1,
    explanation: {
      en: '"Lijevo" means left, and its opposite is "desno" (right).',
      ru: 'Противоположностью слова "lijevo" (налево) является "desno" (направо).',
      ua: 'Протилежністю слова "lijevo" (ліворуч) є "desno" (праворуч).'
    }
  },
  {
    id: 3,
    level: "B1",
    question: "Osoba koja profesionalno popravlja vodovodne cijevi i slavine je:",
    options: ["električar", "stolar", "zidar", "vodoinstalater"],
    correctAnswer: 3,
    explanation: {
      en: '"Vodoinstalater" means plumber.',
      ru: '"Vodoinstalater" переводится как сантехник.',
      ua: '"Vodoinstalater" перекладається як сантехнік.'
    }
  },
  {
    id: 4,
    level: "B2",
    question: 'Što točno znači veznik "unatoč"?',
    options: ["despite / in spite of", "because of / due to", "instead of", "during"],
    correctAnswer: 0,
    explanation: {
      en: '"Unatoč" is a concessive preposition meaning "despite" or "in spite of".',
      ru: '"Unatoč" — уступительный предлог, означающий "вопреки" или "несмотря на".',
      ua: '"Unatoč" — допустовий прийменник, що означає "всупереч" або "незважаючи на".'
    }
  },
  {
    id: 5,
    level: "C1",
    question: 'Riječ "protuurječnost" je u književnom jeziku sinonim za:',
    options: ["suradnju", "kontradikciju", "suglasnost", "potporu"],
    correctAnswer: 1,
    explanation: {
      en: '"Protuurječnost" means contradiction or inconsistency.',
      ru: '"Protuurječnost" означает противоречие (синоним — kontradikcija).',
      ua: '"Protuurječnost" означає суперечність (синонім — kontradikcija).'
    }
  },
  {
    id: 6,
    level: "C2",
    question: "Koji frazem označava uzaludan posao ili prazno pričanje bez rezultata?",
    options: ["mlatiti praznu slamu", "obrati bostan", "trčati pred rudo", "baciti koplje u trnje"],
    correctAnswer: 0,
    explanation: {
      en: '"Mlatiti praznu slamu" means to thrash empty straw, an idiom for doing futile work or talking in vain.',
      ru: '"Mlatiti praznu slamu" (молотить пустую солому) — идиома, означающая бесполезную работу или пустую болтовню.',
      ua: '"Mlatiti praznu slamu" (товкти воду в ступі / молотити порожню солому) — ідіома, що означає марну роботу або порожні балачки.'
    }
  },

  // ==========================================
  // BLOCK 2: GRAMMAR & NOUN CASES (Padeži)
  // ==========================================
  {
    id: 7,
    level: "A1",
    question: "Danas radim u _____ (Zagreb - locative singular).",
    options: ["Zagrebu", "Zagreb", "Zagreba", "Zagrebom"],
    correctAnswer: 0,
    explanation: {
      en: "Locative case (u + place) for masculine nouns ends in -u.",
      ru: "Предложный/местный падеж (u + место) для мужского рода оканчивается на -u.",
      ua: "Місцевий відмінок (u + місце) для чоловічого роду закінчується на -u."
    }
  },
  {
    id: 8,
    level: "A2",
    question: "Kupio sam prekrasan poklon za svoju _____ (majka - accusative singular).",
    options: ["majke", "majci", "majku", "majkom"],
    correctAnswer: 2,
    explanation: {
      en: "The preposition 'za' (for) requires the accusative case. 'Majka' (feminine) becomes 'majku'.",
      ru: "Предлог 'za' (для) требует винительного падежа. 'Majka' переходит в 'majku'.",
      ua: "Прийменник 'za' (для) вимагає знахідного відмінка. 'Majka' переходить у 'majku'."
    }
  },
  {
    id: 9,
    level: "B1",
    question: "Jučer smo dugo razgovarali s novim _____ (predsjednik - instrumental singular).",
    options: ["predsjedniku", "predsjednika", "predsjednikom", "predsjednik"],
    correctAnswer: 2,
    explanation: {
      en: "Preposition 's/sa' indicating accompaniment requires the instrumental case ending in -om for masculine nouns.",
      ru: "Предлог 's/sa' (с) требует творительного падежа, оканчивающегося на -om для мужского рода.",
      ua: "Прийменник 's/sa' (з) вимагає орудного відмінка, що закінчується на -om для чоловічого роду."
    }
  },
  {
    id: 10,
    level: "B2",
    question: "U dvorani je bilo prisutno nekoliko _____ (predsjednik - genitive plural).",
    options: ["predsjednici", "predsjednika", "predsjednike", "predsjednicima"],
    correctAnswer: 1,
    explanation: {
      en: "Quantifiers like 'nekoliko' require the genitive plural, which for masculine nouns has a long -a ending.",
      ru: "Количественные слова вроде 'nekoliko' требуют родительного падежа множественного числа, имеющего окончание -a для мужского рода.",
      ua: "Кількісні слова на кшталт 'nekoliko' вимагають родового відмінка множини, який має закінчення -a для чоловічого роду."
    }
  },
  {
    id: 11,
    level: "C1",
    question: "Odluku o imenovanju trebate poslati gospodinu _____ (Kovačić - dative singular).",
    options: ["Kovačiću", "Kovačića", "Kovačićem", "Kovačiće"],
    correctAnswer: 0,
    explanation: {
      en: "Addresses/recipients take the dative case. 'Kovačić' ends in -u.",
      ru: "Адресаты требуют дательного падежа. 'Kovačić' -> 'Kovačiću'.",
      ua: "Адресати вимагають давального відмінка. 'Kovačić' -> 'Kovačiću'."
    }
  },
  {
    id: 12,
    level: "C2",
    question: "Pjesnik je ostao zadivljen iskonskom ljepotom _____ (te daleke gore - genitive plural agreement).",
    options: ["tih dalekih gora", "tim dalekim gorama", "te daleke gore", "tima dalekima gorama"],
    correctAnswer: 0,
    explanation: {
      en: "Genitive plural of feminine 'gora' is 'gora' with a long -a. 'Tih dalekih gora' matches in case and plural number.",
      ru: "Родительный падеж множественного числа женского рода 'gora' — 'gora' (с долгим 'а'). 'Tih dalekih gora' согласуется в падеже и числе.",
      ua: "Родовий відмінок множини жіночого роду 'gora' — 'gora' (з довгим 'а'). 'Tih dalekih gora' узгоджується у відмінку та числі."
    }
  },

  // ==========================================
  // BLOCK 3: VERB TENSES (Vremena)
  // ==========================================
  {
    id: 13,
    level: "A1",
    question: "Ja _____ (past tense of 'ići' - masculine singular) u kino jučer navečer.",
    options: ["sam išao", "idem", "ću ići", "bih išao"],
    correctAnswer: 0,
    explanation: {
      en: "Past tense (perfect) is formed with the short present of 'biti' + active verbal adjective.",
      ru: "Прошедшее время (перфект) образуется из краткой формы настоящего времени 'biti' + причастие.",
      ua: "Минулий час (перфект) утворюється з короткої форми теперішнього часу 'biti' + дієприкметник."
    }
  },
  {
    id: 14,
    level: "A2",
    question: "Mi _____ (future tense of 'putovati') u Split sljedeći tjedan.",
    options: ["putovali smo", "ćemo putovati", "putujemo", "bismo putovali"],
    correctAnswer: 1,
    explanation: {
      en: "Future I is formed with the clitic form of 'htjeti' (ću, ćeš, će, ćemo...) + infinitive.",
      ru: "Будущее время I образуется с помощью краткой формы 'htjeti' (ću, ćeš...) + инфинитив.",
      ua: "Майбутній час I утворюється за допомогою короткої форми 'htjeti' (ću, ćeš...) + інфінітив."
    }
  },
  {
    id: 15,
    level: "B1",
    question: "Ako _____ (future II of 'učiti') redovito, lako ćeš položiti ovaj ispit.",
    options: ["učiš", "budeš učio", "ćeš učiti", "jesi učio"],
    correctAnswer: 1,
    explanation: {
      en: "Future II (budeš učio) is required in conditional clauses expressing future conditions.",
      ru: "Будущее время II (budeš učio) используется в условных предложениях, относящихся к будущему.",
      ua: "Майбутній час II (budeš učio) використовується в умовних реченнях, що відносяться до майбутнього."
    }
  },
  {
    id: 16,
    level: "B2",
    question: "Da smo znali za gužvu u prometu, _____ (conditional II of 'krenuti') ranije.",
    options: ["bili bismo krenuli", "krenuli bismo", "krenut ćemo", "krenuli smo"],
    correctAnswer: 0,
    explanation: {
      en: "Unreal past conditions require Conditional II (bili bismo krenuli).",
      ru: "Для выражения нереального условия в прошлом используется сослагательное наклонение II (bili bismo krenuli).",
      ua: "Для вираження нереальної умови в минулому використовується умовний спосіб II (bili bismo krenuli)."
    }
  },
  {
    id: 17,
    level: "C1",
    question: "Odjednom se začu strašan prasak, zemlja se zatrese i iz dubine _____ (aorist of 'izaći') plameni jezici.",
    options: ["izađoše", "izašli su", "izaći će", "izlažahu"],
    correctAnswer: 0,
    explanation: {
      en: "Aorist is used in literary contexts to express sudden, successive past actions. 'Izađoše' is the 3rd person plural aorist.",
      ru: "Аорист используется в художественном стиле для описания мгновенных, сменяющих друг друга прошедших действий. 'Izađoše' — 3-е лицо мн.ч.",
      ua: "Аорист використовується у художньому стилі для опису миттєвих минулих дій, що швидко змінюють одна одну. 'Izađoše' — 3-тя особа мн."
    }
  },
  {
    id: 18,
    level: "C2",
    question: "Da _____ (pluperfect of 'biti') više slušao savjete stručnjaka, izbjegao bi ove poteškoće.",
    options: ["bijaše", "si bio", "bi bio", "budeš bio"],
    correctAnswer: 0,
    explanation: {
      en: "The pluperfect (bijaše/bio je bio) is used here in formal literary conditional syntax to describe actions prior to other past events.",
      ru: "Плюсквамперфект (bijaše/bio je bio) используется в официальном литературном стиле для выражения действий, предшествовавших другим прошедшим событиям.",
      ua: "Плюсквамперфект (bijaše/bio je bio) використовується в офіційному літературному стилі для вираження дій, що передували іншим минулим подіям."
    }
  },

  // ==========================================
  // BLOCK 4: PRONOUNS (Zamjenice & Clitics)
  // ==========================================
  {
    id: 19,
    level: "A1",
    question: "Ovo je _____ (possessive pronoun 'my' - feminine singular) torba.",
    options: ["moj", "moja", "moje", "moju"],
    correctAnswer: 1,
    explanation: {
      en: "'Torba' is feminine singular, so the possessive pronoun is 'moja'.",
      ru: "'Torba' женского рода единственного числа, поэтому притяжательное местоимение — 'moja'.",
      ua: "'Torba' жіночого роду однини, тому присвійний займенник — 'moja'."
    }
  },
  {
    id: 20,
    level: "A2",
    question: "Jako _____ (short dative pronoun 'me') se sviđa tvoja nova kuća.",
    options: ["me", "mi", "mene", "meni"],
    correctAnswer: 1,
    explanation: {
      en: "The reflexive expression 'sviđati se' requires dative. The short form is 'mi'.",
      ru: "Возвратное выражение 'sviđati se' требует дательного падежа. Краткая форма — 'mi'.",
      ua: "Зворотний вираз 'sviđati se' вимагає давального відмінка. Коротка форма — 'mi'."
    }
  },
  {
    id: 21,
    level: "B1",
    question: "Koji je gramatički ispravan redoslijed zamjenica u rečenici?",
    options: [
      "Jučer su mi ga dali na poslu.",
      "Jučer mi su ga dali na poslu.",
      "Jučer ga mi su dali na poslu.",
      "Jučer dali su mi ga na poslu."
    ],
    correctAnswer: 0,
    explanation: {
      en: "Clitic order: verbal auxiliary clitic ('su') + dative clitic ('mi') + accusative clitic ('ga').",
      ru: "Порядок энклитик: глагол-связка ('su') + дательный падеж ('mi') + винительный падеж ('ga').",
      ua: "Порядок енклітик: дієслово-зв'язка ('su') + давальний відмінок ('mi') + знахідний відмінок ('ga')."
    }
  },
  {
    id: 22,
    level: "B2",
    question: "U trgovini nismo zatekli _____ (double negation requirement: 'no one').",
    options: ["nekoga", "nikoga", "ikoga", "tko"],
    correctAnswer: 1,
    explanation: {
      en: "Croatian grammar requires double negation: 'nismo' (not) + 'nikoga' (no one).",
      ru: "Хорватская грамматика требует двойного отрицания: 'nismo' (не застали) + 'nikoga' (никого).",
      ua: "Хорватська граматика вимагає подвійного заперечення: 'nismo' (не застали) + 'nikoga' (нікого)."
    }
  },
  {
    id: 23,
    level: "C1",
    question: "Upoznao sam znanstvenika _____ (whose - genitive masculine singular relative pronoun) rad iznimno cijenim.",
    options: ["kojeg", "čiji", "čiji je", "čijega"],
    correctAnswer: 3,
    explanation: {
      en: "The relative possessive pronoun 'čiji' (whose) in genitive masculine singular takes the form 'čijega' or 'čijeg'.",
      ru: "Относительное притяжательное местоимение 'čiji' (чей/которого) в родительном падеже мужского рода имеет форму 'čijega' или 'čijeg'.",
      ua: "Відносний присвійний займенник 'čiji' (чий/якого) в родовому відмінку чоловічого роду має форму 'čijega' або 'čijeg'."
    }
  },
  {
    id: 24,
    level: "C2",
    question: "Ovaj se problem tiče svih zaposlenika, s _____ (whoever - instrumental plural relative pronoun) od njih razgovarali.",
    options: ["kojima god", "kime god", "s kime", "kojim god"],
    correctAnswer: 0,
    explanation: {
      en: "Relative pronoun 'tko god' or 'koji god' after preposition 's' in instrumental plural becomes 'kojima god'.",
      ru: "Относительное местоимение после предлога 's' в творительном падеже множественного числа принимает форму 'kojima god'.",
      ua: "Відносний займенник після прийменника 's' в орудному відмінку множини набуває форми 'kojima god'."
    }
  },

  // ==========================================
  // BLOCK 5: VERBAL ASPECT & PREPOSITIONS
  // ==========================================
  {
    id: 25,
    level: "A1",
    question: "Svako jutro pijem čaj _____ (preposition 'with') medom.",
    options: ["s", "bez", "iz", "kod"],
    correctAnswer: 0,
    explanation: {
      en: "Preposition 's' (with) indicates accompaniment and triggers the instrumental case.",
      ru: "Предлог 's' (с) означает совместное действие и требует творительного падежа.",
      ua: "Прийменник 's' (з) означає спільну дію і вимагає орудного відмінка."
    }
  },
  {
    id: 26,
    level: "A2",
    question: "Ja obično _____ (imperfective aspect of 'čitati') vijesti na internetu dok pijem kavu.",
    options: ["pročitam", "pročitati", "čitam", "sam pročitao"],
    correctAnswer: 2,
    explanation: {
      en: "For habitual, ongoing actions, the imperfective aspect ('čitam') is used.",
      ru: "Для регулярных, повторяющихся действий используется несовершенный вид глагола ('čitam').",
      ua: "Для регулярних дій, що повторюються, використовується недоконаний вид дієслова ('čitam')."
    }
  },
  {
    id: 27,
    level: "B1",
    question: "Moram pod hitno _____ (perfective aspect of 'napisati') ovaj službeni izvještaj.",
    options: ["pisati", "napisati", "napišem", "napisao"],
    correctAnswer: 1,
    explanation: {
      en: "An action that needs to be completed as a single whole requires the perfective infinitive ('napisati').",
      ru: "Действие, которое необходимо завершить в полном объеме, требует совершенного вида инфинитива ('napisati').",
      ua: "Дія, яку необхідно завершити в повному обсязі, вимагає доконаного виду інфінітива ('napisati')."
    }
  },
  {
    id: 28,
    level: "B2",
    question: "Otišao je na spavanje tek _____ (prepositional phrase 'after') je završio sve obaveze.",
    options: ["nakon što", "prije nego što", "tijekom", "dok"],
    correctAnswer: 0,
    explanation: {
      en: '"Nakon što" translates to "after" when introducing a clause.',
      ru: '"Nakon što" переводится как "после того как" при вводе придаточного предложения.',
      ua: '"Nakon što" перекладається як "після того як" при введенні підрядного речення.'
    }
  },
  {
    id: 29,
    level: "C1",
    question: "Novi je zakon usvojen _____ (despite - preposition requiring dative case) brojnim prosvjedima građana.",
    options: ["usprkos", "radi", "zbog", "tijekom"],
    correctAnswer: 0,
    explanation: {
      en: '"Usprkos" (despite) requires the dative case (brojnim prosvjedima).',
      ru: '"Usprkos" (вопреки/несмотря на) требует дательного падежа.',
      ua: '"Usprkos" (всупереч/незважаючи на) вимагає давального відмінка.'
    }
  },
  {
    id: 30,
    level: "C2",
    question: "Nemojte brzati s donošenjem zaključaka i _____ (to guess/speculate - imperfective aspect) o njegovim skrivenim namjerama.",
    options: ["nagađati", "nagoditi", "nagađivati", "ugoditi"],
    correctAnswer: 0,
    explanation: {
      en: '"Nagađati" is the correct imperfective verb meaning to guess, speculate or surmise.',
      ru: '"Nagađati" — глагол несовершенного вида, означающий догадываться, спекулировать, строить предположения.',
      ua: '"Nagađati" — дієслово недоконаного виду, що означає здогадуватися, будувати припущення.'
    }
  }
];

export function calculateLevel(correctAnswers: number): string {
  if (correctAnswers >= 28) return "C2";
  if (correctAnswers >= 24) return "C1";
  if (correctAnswers >= 18) return "B2";
  if (correctAnswers >= 12) return "B1";
  if (correctAnswers >= 6) return "A2";
  return "A1";
}
