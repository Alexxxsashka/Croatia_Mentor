export interface LocalizedString {
  en: string;
  ru: string;
  ua: string;
}

export interface GrammarQuestion {
  id: string;
  categoryId: string; // e.g. "phonetics", "cases", "verbs", "pronouns", "adjectives", "prepositions", "syntax", "phrases"
  level: "A1" | "A2" | "B1" | "B2" | "C1";
  question: {
    hr: string;
    en: string;
    ru: string;
    ua: string;
  };
  options: string[];
  correctAnswer: string;
  explanation: LocalizedString;
}

export const grammarQuestionsData: GrammarQuestion[] = [
  // ==========================================
  // PHONETICS & ALPHABET (1-10)
  // ==========================================
  {
    id: "phon-1",
    categoryId: "phonetics",
    level: "A1",
    question: {
      hr: "Koliko slova ima hrvatska abeceda (Abeceda)?",
      en: "How many letters are in the Croatian alphabet?",
      ru: "Сколько букв в хорватском алфавите (Abeceda)?",
      ua: "Скільки літер у хорватському алфавіті (Abeceda)?"
    },
    options: ["26", "28", "30", "32"],
    correctAnswer: "30",
    explanation: {
      en: "The Croatian Latin alphabet consists of exactly 30 letters, including digraphs LJ, NJ, DŽ.",
      ru: "Хорватский латинский алфавит состоит ровно из 30 букв, включая диграфы LJ, NJ, DŽ.",
      ua: "Хорватський латинський алфавіт складається рівно з 30 літер, включаючи диграфи LJ, NJ, DŽ."
    }
  },
  {
    id: "phon-2",
    categoryId: "phonetics",
    level: "A1",
    question: {
      hr: "Koja su slova digrafi (složena slova) u hrvatskom jeziku?",
      en: "Which letters are digraphs in Croatian?",
      ru: "Какие буквы являются диграфами в хорватском языке?",
      ua: "Які літери є диграфами у хорватській мові?"
    },
    options: ["Č, Ć, Š", "Lj, Nj, Dž", "Đ, Ž, C", "Ph, Th, Ch"],
    correctAnswer: "Lj, Nj, Dž",
    explanation: {
      en: "Lj, Nj, and Dž are treated as single letters in the Croatian alphabet.",
      ru: "Lj, Nj и Dž считаются отдельными буквами в хорватском алфавите.",
      ua: "Lj, Nj та Dž вважаються окремими літерами в хорватському алфавіті."
    }
  },
  {
    id: "phon-3",
    categoryId: "phonetics",
    level: "A1",
    question: {
      hr: "Koji glas nastaje palatalizacijom slova 'k' ispred 'e'?",
      en: "What sound is produced by palatalization of 'k' before 'e'?",
      ru: "Какой звук получается при палатализации 'k' перед 'e'?",
      ua: "Який звук утворюється при палаталізації 'k' перед 'e'?"
    },
    options: ["c", "č", "ć", "s"],
    correctAnswer: "č",
    explanation: {
      en: "Palatalization mutates 'k' into 'č' before 'e' (e.g., vuk -> vuče).",
      ru: "Палатализация меняет 'k' на 'č' перед 'e' (например, vuk -> vuče).",
      ua: "Палаталізація змінює 'k' на 'č' перед 'e' (наприклад, vuk -> vuče)."
    }
  },
  {
    id: "phon-4",
    categoryId: "phonetics",
    level: "A2",
    question: {
      hr: "Što se događa s glasom 'k' u sibilarizaciji ispred 'i' (npr. ruka -> ...)?",
      en: "What happens to 'k' in sibilarization before 'i' (e.g. ruka -> ...)?",
      ru: "Что происходит с 'k' при сибиляризации перед 'i' (например, ruka -> ...)?",
      ua: "Що відбувається з 'k' при сибіляризації перед 'i' (наприклад, ruka -> ...)?"
    },
    options: ["ruki", "ruci", "ručk", "ruši"],
    correctAnswer: "ruci",
    explanation: {
      en: "Sibilarization converts 'k' into 'c' before 'i' in dative/locative singular (ruka -> ruci).",
      ru: "Сибиляризация переводит 'k' в 'c' перед 'i' в дательном/предложном падеже (ruka -> ruci).",
      ua: "Сибіляризація переводить 'k' у 'c' перед 'i' у давальному/місцевому відмінку (ruka -> ruci)."
    }
  },
  {
    id: "phon-5",
    categoryId: "phonetics",
    level: "A2",
    question: {
      hr: "Dopunite: Zvučno 'b' prelazi u bezvučno 'p' ispred bezvučnog glasa (Jednačenje po zvučnosti: vrabac -> ...).",
      en: "Devoicing assimilation: 'b' becomes 'p' before a voiceless consonant (vrabac -> ...).",
      ru: "Оглушение согласных: 'b' переходит в 'p' перед глухим согласным (vrabac -> ...).",
      ua: "Оглушення приголосних: 'b' переходить у 'p' перед глухим приголосним (vrabac -> ...)."
    },
    options: ["vrabca", "vrapca", "vrabcov", "vrabica"],
    correctAnswer: "vrapca",
    explanation: {
      en: "Devoicing turns 'b' into 'p' when followed by voiceless 'c' (vrabac -> vrapca).",
      ru: "При оглушении 'b' переходит в 'p' перед глухим 'c' (vrabac -> vrapca).",
      ua: "При оглушенні 'b' переходить у 'p' перед глухим 'c' (vrabac -> vrapca)."
    }
  },
  {
    id: "phon-6",
    categoryId: "phonetics",
    level: "B1",
    question: {
      hr: "Što je 'Nepostojano A' u hrvatskom jeziku?",
      en: "What is 'Fleeting A' (Nepostojano A) in Croatian?",
      ru: "Что такое 'Непостоянное А' (Nepostojano A) в хорватском?",
      ua: "Що таке 'Непостійне А' (Nepostojano A) у хорватській?"
    },
    options: [
      "A vowel that disappears in certain inflected forms (e.g., pas -> psa)",
      "A vowel that is always stressed",
      "A prefix added to verbs",
      "An ending used only in feminine plural"
    ],
    correctAnswer: "A vowel that disappears in certain inflected forms (e.g., pas -> psa)",
    explanation: {
      en: "'Nepostojano A' is present in Nominative singular and Genitive plural, but drops out in other cases.",
      ru: "'Nepostojano A' присутствует в Именительном ед.ч. и Родительном мн.ч., но выпадает в остальных падежах.",
      ua: "'Nepostojano A' є в Називному одн. та Родовому множ., але випадає в інших відмінках."
    }
  },
  {
    id: "phon-7",
    categoryId: "phonetics",
    level: "B2",
    question: {
      hr: "Koji se proces događa u riječi 'gost' -> 'gošća'?",
      en: "Which sound change occurs in 'gost' -> 'gošća'?",
      ru: "Какое звуковое изменение происходит в 'gost' -> 'gošća'?",
      ua: "Яка звукова зміна відбувається у 'gost' -> 'gošća'?"
    },
    options: ["Sibilarizacija", "Jotacija", "Vokalizacija", "Gubljenje suglasnika"],
    correctAnswer: "Jotacija",
    explanation: {
      en: "Jotacija combines 'st' + 'j' into 'šć' (gost + ja -> gošća).",
      ru: "Йотация сочетает 'st' + 'j' в 'šć' (gost + ja -> gošća).",
      ua: "Йотація поєднує 'st' + 'j' у 'šć' (gost + ja -> gošća)."
    }
  },

  // ==========================================
  // CASES & NOUNS (cases)
  // ==========================================
  {
    id: "cases-1",
    categoryId: "cases",
    level: "A1",
    question: {
      hr: "Koji je Nominativ množine za riječ 'student'?",
      en: "What is the Nominative plural form of 'student'?",
      ru: "Какая форма Именительного падежа мн.ч. для слова 'student'?",
      ua: "Яка форма Називного відмінка множини для слова 'student'?"
    },
    options: ["studenti", "studenta", "studentima", "studentov"],
    correctAnswer: "studenti",
    explanation: {
      en: "Masculine animate nouns ending in a consonant take -i in Nominative plural (student -> studenti).",
      ru: "Существительные мужского рода на согласный получают окончание -i в Им.п. мн.ч. (studenti).",
      ua: "Іменники чоловічого роду на приголосний отримують закінчення -i у Наз.в. множ. (studenti)."
    }
  },
  {
    id: "cases-2",
    categoryId: "cases",
    level: "A1",
    question: {
      hr: "Dopunite: Pijem kavu i jedem ... (jabuka -> Akuzativ).",
      en: "Complete: Pijem kavu i jedem ... (jabuka in Accusative singular).",
      ru: "Заполните: Pijem kavu i jedem ... (jabuka в Винительном падеже).",
      ua: "Заповніть: Pijem kavu i jedem ... (jabuka у Знахідному відмінку)."
    },
    options: ["jabuka", "jabuku", "jabuke", "jabukom"],
    correctAnswer: "jabuku",
    explanation: {
      en: "Feminine nouns ending in -a take -u in Accusative singular (jabuka -> jabuku).",
      ru: "Существительные женского рода на -a меняют окончание на -u в Винительном падеже ед.ч. (jabuku).",
      ua: "Іменники жіночого роду на -a змінюють закінчення на -u у Знахідному відмінку одн. (jabuku)."
    }
  },
  {
    id: "cases-3",
    categoryId: "cases",
    level: "A1",
    question: {
      hr: "Koji padež odgovara na pitanje 'Tko? Što?'?",
      en: "Which case answers the question 'Tko? Što?' (Who? What?)?",
      ru: "Какой падеж отвечает на вопрос 'Tko? Što?' (Кто? Что?)?",
      ua: "Який відмінок відповідає на питання 'Tko? Što?' (Хто? Що?)?"
    },
    options: ["Genitiv", "Akuzativ", "Nominativ", "Lokativ"],
    correctAnswer: "Nominativ",
    explanation: {
      en: "Nominative is the subject case answering 'Tko? Što?'.",
      ru: "Именительный падеж (Nominativ) отвечает на вопросы 'Кто? Что?'.",
      ua: "Називний відмінок (Nominativ) відповідає на питання 'Хто? Що?'."
    }
  },
  {
    id: "cases-4",
    categoryId: "cases",
    level: "A2",
    question: {
      hr: "Dopunite: Nemam ... (vrijeme -> Genitiv).",
      en: "Complete: Nemam ... (vrijeme in Genitive singular).",
      ru: "Заполните: Nemam ... (vrijeme в Родительном падеже).",
      ua: "Заповніть: Nemam ... (vrijeme у Родовому відмінку)."
    },
    options: ["vrijeme", "vremena", "vremenu", "vremenom"],
    correctAnswer: "vremena",
    explanation: {
      en: "Neuter noun 'vrijeme' expands stem to 'vremen-' in Genitive: vremena.",
      ru: "Средний род 'vrijeme' расширяет основу 'vremen-' в Родительном падеже: vremena.",
      ua: "Середній рід 'vrijeme' розширює основу 'vremen-' у Родовому відмінку: vremena."
    }
  },
  {
    id: "cases-5",
    categoryId: "cases",
    level: "A2",
    question: {
      hr: "Koji se padež koristi za obraćanje i pozivanje (npr. 'Bok, ...!')?",
      en: "Which case is used for addressing someone (e.g. 'Bok, ...!')?",
      ru: "Какой падеж используется для обращения (например, 'Bok, ...!')?",
      ua: "Який відмінок використовується для звернення (наприклад, 'Bok, ...!')?"
    },
    options: ["Dativ", "Vokativ", "Instrumental", "Lokativ"],
    correctAnswer: "Vokativ",
    explanation: {
      en: "Vocative (Vokativ) is the case of direct address.",
      ru: "Звательный падеж (Vokativ) используется при прямом обращении.",
      ua: "Кличний відмінок (Vokativ) використовується при прямому зверненні."
    }
  },
  {
    id: "cases-6",
    categoryId: "cases",
    level: "A2",
    question: {
      hr: "Dopunite: Putujem u Zagreb s ... (prijatelj -> Instrumental).",
      en: "Complete: Putujem u Zagreb s ... (prijatelj in Instrumental singular).",
      ru: "Заполните: Putujem u Zagreb s ... (prijatelj в Творительном падеже).",
      ua: "Заповніть: Putujem u Zagreb s ... (prijatelj у Орудному відмінку)."
    },
    options: ["prijatelja", "prijatelju", "prijateljem", "prijatelji"],
    correctAnswer: "prijateljem",
    explanation: {
      en: "Masculine nouns ending in soft palatal 'j' take -em in Instrumental singular (prijateljem).",
      ru: "Мужской род на мягкий согласный 'j' получает окончание -em в Творительном падеже (prijateljem).",
      ua: "Чоловічий рід на м'який приголосний 'j' отримує закінчення -em в Орудному відмінку (prijateljem)."
    }
  },
  {
    id: "cases-7",
    categoryId: "cases",
    level: "B1",
    question: {
      hr: "Dopunite: Knjiga se nalazi na ... (stol -> Lokativ jednina).",
      en: "Complete: Knjiga se nalazi na ... (stol in Locative singular).",
      ru: "Заполните: Knjiga se nalazi na ... (stol в Предложном падеже).",
      ua: "Заповніть: Knjiga se nalazi na ... (stol у Місцевому відмінку)."
    },
    options: ["stola", "stolu", "stolom", "stole"],
    correctAnswer: "stolu",
    explanation: {
      en: "Masculine inanimate nouns take -u in Locative singular with prepositions na/u (na stolu).",
      ru: "Существительные мужского рода получают -u в Предложном падеже с предлогами na/u (na stolu).",
      ua: "Іменники чоловічого роду отримують -u у Місцевому відмінку з прийменниками na/u (na stolu)."
    }
  },
  {
    id: "cases-8",
    categoryId: "cases",
    level: "B2",
    question: {
      hr: "Koji je Genitiv množine za riječ 'kuća'?",
      en: "What is the Genitive plural of 'kuća'?",
      ru: "Какова форма Родительного падежа мн.ч. слова 'kuća'?",
      ua: "Яка форма Родового відмінка множини слова 'kuća'?"
    },
    options: ["kuća", "kućih", "kućom", "kućama"],
    correctAnswer: "kuća",
    explanation: {
      en: "Feminine nouns ending in -a form Genitive plural with a long 'ā' (mnogo kućā).",
      ru: "Существительные женского рода на -a образуют Родительный мн.ч. с долгим 'ā' (kuća).",
      ua: "Іменники жіночого роду на -a утворюють Родовий множ. з довгим 'ā' (kuća)."
    }
  },
  {
    id: "cases-9",
    categoryId: "cases",
    level: "B2",
    question: {
      hr: "Koji su padeži uvijek identični u množini za sva tri roda (Dativ, Lokativ, Instrumental)?",
      en: "Which three plural cases have identical endings for all genders?",
      ru: "Какие три падежа во множественном числе имеют одинаковые окончания для всех родов?",
      ua: "Які три відмінки у множині мають однакові закінчення для всіх родів?"
    },
    options: [
      "Dativ, Lokativ, Instrumental (-ima / -ama)",
      "Nominativ, Akuzativ, Vokativ",
      "Genitiv, Dativ, Lokativ",
      "Akuzativ, Instrumental, Genitiv"
    ],
    correctAnswer: "Dativ, Lokativ, Instrumental (-ima / -ama)",
    explanation: {
      en: "Dativ, Lokativ, and Instrumental share the same endings (-ima for masc/neuter, -ama for fem) in plural.",
      ru: "Дательный, Предложный и Творительный падежи имеют идентичные окончания во мн.ч. (-ima / -ama).",
      ua: "Давальний, Місцевий та Орудний відмінки мають однакові закінчення у множині (-ima / -ama)."
    }
  },
  {
    id: "cases-10",
    categoryId: "cases",
    level: "C1",
    question: {
      hr: "Koji je Genitiv množine imenice 'sestra' sa umetnutim nepostojanim A?",
      en: "What is the Genitive plural of 'sestra' with inserted fleeting A?",
      ru: "Каков Родительный падеж мн.ч. существительного 'sestra' с беглым А?",
      ua: "Який Родовий відмінок множини іменника 'sestra' з біглим А?"
    },
    options: ["sestra", "sestara", "sestri", "sestara / sestri"],
    correctAnswer: "sestara",
    explanation: {
      en: "Feminine nouns with consonant clusters insert fleeting A in Genitive plural (sestra -> sestara).",
      ru: "Существительные ж.р. со стечением согласных вставляют беглую А в Род.п. мн.ч. (sestra -> sestara).",
      ua: "Іменники ж.р. зі збігом приголосних вставляють біглу А у Род.в. множ. (sestra -> sestara)."
    }
  },

  // ==========================================
  // VERBS & TENSES (verbs)
  // ==========================================
  {
    id: "verb-1",
    categoryId: "verbs",
    level: "A1",
    question: {
      hr: "Koji je pravilan oblik glagola 'biti' za 1. lice jednine (Ja ...)?",
      en: "What is the short present tense form of 'biti' for 1st person singular (Ja ...)?",
      ru: "Какова краткая форма глагола 'biti' для 1-го лица ед.ч. (Ja ...)?",
      ua: "Яка коротка форма дієслова 'biti' для 1-ї особи однини (Ja ...)?"
    },
    options: ["sam", "si", "je", "smo"],
    correctAnswer: "sam",
    explanation: {
      en: "Present tense of 'biti': ja sam, ti si, on/ona/ono je.",
      ru: "Настоящее время глагола 'biti': ja sam, ti si, on je.",
      ua: "Теперішній час дієслова 'biti': ja sam, ti si, on je."
    }
  },
  {
    id: "verb-2",
    categoryId: "verbs",
    level: "A1",
    question: {
      hr: "Kako glasi 3. lice množine glagola 'raditi' u Prezentu (Oni ...)?",
      en: "What is the 3rd person plural present tense of 'raditi' (Oni ...)?",
      ru: "Какова форма 3-го лица мн.ч. глагола 'raditi' в настоящем времени (Oni ...)?",
      ua: "Яка форма 3-ї особи множ. дієслова 'raditi' у теперішньому часі (Oni ...)?"
    },
    options: ["rade", "radi", "radimo", "radite"],
    correctAnswer: "rade",
    explanation: {
      en: "Verbs ending in -iti take -e in 3rd person plural (raditi -> oni rade).",
      ru: "Глаголы на -iti получают -e в 3-м лице мн.ч. (oni rade).",
      ua: "Дієслова на -iti отримують -e у 3-й особі множ. (oni rade)."
    }
  },
  {
    id: "verb-3",
    categoryId: "verbs",
    level: "A1",
    question: {
      hr: "Dopunite Perfekt: Jučer sam ... u kino (iti -> muški rod).",
      en: "Complete the Perfekt (past tense): Jučer sam ... u kino (iti -> masculine).",
      ru: "Заполните прошедшее время: Jučer sam ... u kino (iti -> мужской род).",
      ua: "Заповніть минулий час: Jučer sam ... u kino (iti -> чоловічий рід)."
    },
    options: ["išao", "išla", "ići", "idem"],
    correctAnswer: "išao",
    explanation: {
      en: "Perfekt consists of auxiliary 'sam/si/je' + active past participle (išao for masculine singular).",
      ru: "Perfekt состоит из вспомогательного глагола + причастия (išao для м.р. ед.ч.).",
      ua: "Perfekt складається з допоміжного дієслова + дієприкметника (išao для ч.р. одн.)."
    }
  },
  {
    id: "verb-4",
    categoryId: "verbs",
    level: "A2",
    question: {
      hr: "Kako glasi Futur 1. od glagola 'učiti' (Ja ... učiti)?",
      en: "How is Futur I formed for 'učiti' (Ja ... učiti)?",
      ru: "Как образуется Futur I для 'učiti' (Ja ... učiti)?",
      ua: "Як утворюється Futur I для 'učiti' (Ja ... učiti)?"
    },
    options: ["ću", "ćeš", "će", "ćemo"],
    correctAnswer: "ću",
    explanation: {
      en: "Futur I uses short forms of 'htjeti' (ću, ćeš, će, ćemo, ćete, će) + infinitive.",
      ru: "Futur I использует формы 'htjeti' (ću, ćeš, будет...) + инфинитив.",
      ua: "Futur I використовує форми 'htjeti' (ću, ćeš, буде...) + інфінітив."
    }
  },
  {
    id: "verb-5",
    categoryId: "verbs",
    level: "A2",
    question: {
      hr: "Kako se piše Futur 1. kada infinitiv na -ti stoji ispred pomoćnog glagola (Učiti + ću)?",
      en: "How is Futur I written when the -ti infinitive precedes the auxiliary verb (učiti + ću)?",
      ru: "Как пишется Futur I, когда инфинитив на -ti стоит перед вспомогательным глаголом (učiti + ću)?",
      ua: "Як пишеться Futur I, коли інфінітив на -ti стоїть перед допоміжним дієсловом (učiti + ću)?"
    },
    options: ["Učit ću", "Učiti ću", "Ući ću", "Učitću"],
    correctAnswer: "Učit ću",
    explanation: {
      en: "In Futur I, verbs ending in -ti drop the final 'i' when preceding Enclitic 'ću' (Učit ću).",
      ru: "В Futur I инфинитив на -ti теряет 'i' перед энклитикой 'ću' (пишется раздельно: Učit ću).",
      ua: "У Futur I інфінітив на -ti втрачає 'i' перед енклітикою 'ću' (пишеться окремо: Učit ću)."
    }
  },
  {
    id: "verb-6",
    categoryId: "verbs",
    level: "B1",
    question: {
      hr: "Koji je Imperativ za 2. lice jednine od glagola 'pisati' (Ti ...!)?",
      en: "What is the Imperative (command) for 2nd person singular of 'pisati'?",
      ru: "Каков Повелительное наклонение (Императив) для 2-го лица ед.ч. глагола 'pisati'?",
      ua: "Який Наказовий спосіб (Імператив) для 2-ї особи одн. дієслова 'pisati'?"
    },
    options: ["piši", "pišite", "pišeš", "pisaji"],
    correctAnswer: "piši",
    explanation: {
      en: "Imperative of 'pisati' (stem piš-) for 'ti' is 'piši!'.",
      ru: "Повелительное наклонение для 'ti' от 'pisati' — 'piši!'.",
      ua: "Наказовий спосіб для 'ti' від 'pisati' — 'piši!'."
    }
  },
  {
    id: "verb-7",
    categoryId: "verbs",
    level: "B1",
    question: {
      hr: "Kako se tvori Kondicional 1. (uvjetni oblik)?",
      en: "How is Conditional I (would do) formed?",
      ru: "Как образуется Условное наклонение (Кондиционал I)?",
      ua: "Як утворюється Умовний спосіб (Кондиціонал I)?"
    },
    options: [
      "Aorist of biti (bih, bi, bi, bismo, biste, bi) + L-participle",
      "Present of biti + infinitive",
      "Futur I + past participle",
      "Imperative + noun"
    ],
    correctAnswer: "Aorist of biti (bih, bi, bi, bismo, biste, bi) + L-participle",
    explanation: {
      en: "Conditional I uses aorist forms of 'biti' (ja bih, ti bi, mi bismo...) + past participle.",
      ru: "Кондиционал I образуется аористом глагола 'biti' (bih, bi, bismo...) + причастием прошедшего времени.",
      ua: "Кондиціонал I утворюється аористом дієслова 'biti' (bih, bi, bismo...) + дієприкметником минулого часу."
    }
  },
  {
    id: "verb-8",
    categoryId: "verbs",
    level: "B2",
    question: {
      hr: "Što izražava Futur II (Složeni budući čas: 'budem radio')?",
      en: "What does Futur II express?",
      ru: "Что выражает Футур II (будущее предварительное)?",
      ua: "Що виражає Футур II (майбутнє попереднє)?"
    },
    options: [
      "An action in the future that will occur before another future action in a subordinate clause",
      "An action that happened long ago in the past",
      "A habitual present command",
      "An impossible hypothetical past condition"
    ],
    correctAnswer: "An action in the future that will occur before another future action in a subordinate clause",
    explanation: {
      en: "Futur II (budem + L-participle) is used in conditional/time clauses for future actions preceding another.",
      ru: "Футур II выражает будущее действие, которое произойдет раньше другого будущего действия в придаточном.",
      ua: "Футур II виражає майбутню дію, яка відбудеться раніше за іншу майбутню дію у підрядній частині."
    }
  },
  {
    id: "verb-9",
    categoryId: "verbs",
    level: "B2",
    question: {
      hr: "Koji je vidinski par (nesvršeni / svršeni) za glagol 'pisati'?",
      en: "What is the perfective aspect counterpart of 'pisati' (imperfective)?",
      ru: "Каков глагол совершенного вида (совершенная пара) для 'pisati'?",
      ua: "Яке дієслово доконаного виду (доконана пара) для 'pisati'?"
    },
    options: ["napisati", "prepisivati", "zapisivati", "ispisivati"],
    correctAnswer: "napisati",
    explanation: {
      en: "'napisati' is the primary perfective aspect pair for 'pisati'.",
      ru: "'napisati' — основная пара совершенного вида для несов.в. 'pisati'.",
      ua: "'napisati' — основна пара доконаного виду для недокон.в. 'pisati'."
    }
  },
  {
    id: "verb-10",
    categoryId: "verbs",
    level: "C1",
    question: {
      hr: "Koji je oblik Pluskvamperfekta (Davno prošlo vrijeme) u rečenici: 'Prije nego što je otišao, on ... (već ručati)'?",
      en: "What is the Plusquamperfekt form for 'on je već ručao / bijaše ručao'?",
      ru: "Какова форма Плюсквамперфекта (Давнопрошедшего времени)?",
      ua: "Яка форма Плюсквамперфекта (Давноминулого часу)?"
    },
    options: [
      "bio je ručao / bijaše ručao",
      "bude ručao",
      "bi ručao",
      "ruča"
    ],
    correctAnswer: "bio je ručao / bijaše ručao",
    explanation: {
      en: "Plusquamperfekt is formed with Perfekt/Imperfekt of 'biti' + L-participle (bio je ručao / bijaše ručao).",
      ru: "Плюсквамперфект образуется прошедшим временем глагола 'biti' + причастием (bio je ručao).",
      ua: "Плюсквамперфект утворюється минулим часом дієслова 'biti' + дієприкметником (bio je ručao)."
    }
  },

  // ==========================================
  // PRONOUNS (pronouns)
  // ==========================================
  {
    id: "pron-1",
    categoryId: "pronouns",
    level: "A1",
    question: {
      hr: "Koja je lična zamjenica za 1. lice množine (We)?",
      en: "What is the personal pronoun for 1st person plural (We)?",
      ru: "Какое личное местоимение используется для 1-го лица мн.ч. (Мы)?",
      ua: "Який особовий займенник використовується для 1-ї особи множ. (Ми)?"
    },
    options: ["ja", "ti", "mi", "vi"],
    correctAnswer: "mi",
    explanation: {
      en: "'mi' means 'we' in Croatian.",
      ru: "'mi' означает 'мы' в хорватском.",
      ua: "'mi' означає 'ми' у хорватській."
    }
  },
  {
    id: "pron-2",
    categoryId: "pronouns",
    level: "A1",
    question: {
      hr: "Dopunite: Ovo je ... knjiga (moja -> moj, moja, moje).",
      en: "Complete: Ovo je ... knjiga (my -> moj, moja, moje).",
      ru: "Заполните: Ovo je ... knjiga (моя -> moj, moja, moje).",
      ua: "Заповніть: Ovo je ... knjiga (моя -> moj, moja, moje)."
    },
    options: ["moj", "moja", "moje", "moju"],
    correctAnswer: "moja",
    explanation: {
      en: "Possessive pronoun agrees with feminine noun 'knjiga' in Nominative (moja knjiga).",
      ru: "Притяжательное местоимение согласуется с женским родом 'knjiga' в Именительном падеже (moja knjiga).",
      ua: "Присвійний займенник узгоджується з жіночим родом 'knjiga' у Називному відмінку (moja knjiga)."
    }
  },
  {
    id: "pron-3",
    categoryId: "pronouns",
    level: "A2",
    question: {
      hr: "Koji je kratki (nenenaglašeni) oblik za Akuzativ zamjenice 'on' (Him)?",
      en: "What is the short (unaccented enclitic) Accusative form of 'on' (him)?",
      ru: "Какова краткая (энклитическая) форма Винительного падежа местоимения 'on' (его)?",
      ua: "Яка коротка (енклітична) форма Знахідного відмінка займенника 'on' (його)?"
    },
    options: ["ga", "njega", "mu", "njemu"],
    correctAnswer: "ga",
    explanation: {
      en: "Short Accusative form of 'on' is 'ga' (Vidim ga). 'Njega' is the long stressed form.",
      ru: "Краткая форма Винительного падежа от 'on' — 'ga' (Vidim ga). 'Njega' — полная форма.",
      ua: "Коротка форма Знахідного відмінка від 'on' — 'ga' (Vidim ga). 'Njega' — повна форма."
    }
  },
  {
    id: "pron-4",
    categoryId: "pronouns",
    level: "B1",
    question: {
      hr: "Koja je razlika između pokaznih zamjenica 'ovaj', 'taj' i 'onaj'?",
      en: "What is the difference between demonstrative pronouns 'ovaj', 'taj', and 'onaj'?",
      ru: "В чем разница между указательными местоимениями 'ovaj', 'taj' и 'onaj'?",
      ua: "У чому різниця між вказівними займенниками 'ovaj', 'taj' та 'onaj'?"
    },
    options: [
      "ovaj (near speaker), taj (near listener), onaj (far from both)",
      "ovaj (plural), taj (singular), onaj (neuter)",
      "ovaj (past), taj (present), onaj (future)",
      "They are exact synonyms with no distinction"
    ],
    correctAnswer: "ovaj (near speaker), taj (near listener), onaj (far from both)",
    explanation: {
      en: "Croatian has a 3-way demonstrative system based on distance: ovaj (this near me), taj (that near you), onaj (that over there).",
      ru: "Трехчастная система: ovaj (этот около меня), taj (этот около тебя), onaj (тот вон там).",
      ua: "Тричастинна система: ovaj (цей біля мене), taj (цей біля тебя), onaj (той он там)."
    }
  },

  // ==========================================
  // ADJECTIVES & PREPOSITIONS & SYNTAX (adjectives, prepositions, syntax)
  // ==========================================
  {
    id: "adj-1",
    categoryId: "adjectives",
    level: "A1",
    question: {
      hr: "Koji je komparativ od pridjeva 'velik' (Big -> Bigger)?",
      en: "What is the comparative form of the adjective 'velik' (big -> bigger)?",
      ru: "Какова сравнительная степень прилагательного 'velik' (большой -> больше)?",
      ua: "Яка порівняльна степень прикметника 'velik' (великий -> більший)?"
    },
    options: ["veći", "velikiji", "veliči", "najveći"],
    correctAnswer: "veći",
    explanation: {
      en: "'velik' has irregular comparative 'veći'.",
      ru: "'velik' образует нерегулярную сравнительную степень 'veći'.",
      ua: "'velik' утворює неправильну порівняльну степень 'veći'."
    }
  },
  {
    id: "adj-2",
    categoryId: "adjectives",
    level: "A2",
    question: {
      hr: "Kako se tvori superlativ u hrvatskom jeziku (npr. veći -> ...)?",
      en: "How is the superlative formed in Croatian (e.g. veći -> ...)?",
      ru: "Как образуется превосходная степень в хорватском языке (например, veći -> ...)?",
      ua: "Як утворюється найвища степень у хорватській мові (наприклад, veći -> ...)?"
    },
    options: [
      "Adding prefix 'naj-' to the comparative (najveći)",
      "Adding suffix '-ić' to positive degree",
      "Adding word 'vrlo' before positive degree",
      "Doubling the adjective"
    ],
    correctAnswer: "Adding prefix 'naj-' to the comparative (najveći)",
    explanation: {
      en: "Superlative is formed by adding prefix 'naj-' directly to the comparative form (naj + veći = najveći).",
      ru: "Превосходная степень образуется добавлением приставки 'naj-' к сравнительной степени (najveći).",
      ua: "Найвища степень утворюється додаванням прифікса 'naj-' до порівняльної степени (najveći)."
    }
  },
  {
    id: "prep-1",
    categoryId: "prepositions",
    level: "A1",
    question: {
      hr: "Koji se padež koristi iza prijedloga 'iz' (from/out of)?",
      en: "Which case is always used after preposition 'iz' (from/out of)?",
      ru: "Какой падеж всегда используется после предлога 'iz' (из)?",
      ua: "Який відмінок завжди використовується після прийменника 'iz' (з/із)?"
    },
    options: ["Genitiv", "Akuzativ", "Lokativ", "Dativ"],
    correctAnswer: "Genitiv",
    explanation: {
      en: "Preposition 'iz' strictly governs Genitive (Ja sam iz Hrvatske).",
      ru: "Предлог 'iz' всегда требует Родительного падежа (Ja sam iz Hrvatske).",
      ua: "Прийменник 'iz' завжди вимагає Родового відмінка (Ja sam iz Hrvatske)."
    }
  },
  {
    id: "prep-2",
    categoryId: "prepositions",
    level: "A2",
    question: {
      hr: "Koja je razlika u padežima za prijedlog 'u': 'Idem u...' vs 'Nalazim se u...'?",
      en: "What is the case difference for preposition 'u': 'Idem u...' vs 'Nalazim se u...'?",
      ru: "В чем разница падежей для предлога 'u': 'Idem u...' vs 'Nalazim se u...'?",
      ua: "У чому різниця відмінків для прийменника 'u': 'Idem u...' vs 'Nalazim se u...'?"
    },
    options: [
      "Direction (Kamo?) = Akuzativ; Location (Gdje?) = Lokativ",
      "Direction = Genitiv; Location = Instrumental",
      "Direction = Nominativ; Location = Dativ",
      "Both use Accusative only"
    ],
    correctAnswer: "Direction (Kamo?) = Akuzativ; Location (Gdje?) = Lokativ",
    explanation: {
      en: "Motion toward a place (Kamo?) uses Accusative (u školu). Static location (Gdje?) uses Locative (u školi).",
      ru: "Движение куда-то (Kamo?) — Винительный падеж (u školu). Нахождение где-то (Gdje?) — Предложный (u školi).",
      ua: "Рух кудись (Kamo?) — Знахідний відмінок (u školu). Знаходження десь (Gdje?) — Місцевий (u školi)."
    }
  },
  {
    id: "syn-1",
    categoryId: "syntax",
    level: "B1",
    question: {
      hr: "Gdje u rečenici mora stajati nenaglašena enklitika (npr. sam, je, se, li)?",
      en: "Where must an unaccented enclitic (e.g., sam, je, se, li) be placed in a sentence?",
      ru: "Где в предложении должна стоять неударная энклитика (например, sam, je, se, li)?",
      ua: "Де в реченні має стояти ненаголошена енклітика (наприклад, sam, je, se, li)?"
    },
    options: [
      "In the second position of the sentence, immediately after the first stressed word/phrase",
      "Always at the very end of the sentence",
      "Always before the main noun",
      "Position does not matter in Croatian"
    ],
    correctAnswer: "In the second position of the sentence, immediately after the first stressed word/phrase",
    explanation: {
      en: "Croatian enclitics must occupy the second position in the sentence clause (Wackernagel rule: Ja SAM student).",
      ru: "Хорватские энклитики обязаны занимать второе место в предложении (Ja SAM student).",
      ua: "Хорватські енклітики повинні займати друге місце у реченні (Ja SAM student)."
    }
  },
  {
    id: "syn-2",
    categoryId: "syntax",
    level: "B2",
    question: {
      hr: "Koji je pravilan redoslijed kada se više enklitika nađe zajedno (npr. li + pomoćni glagol + zamjenica)?",
      en: "What is the correct order of multiple enclitics in a sequence?",
      ru: "Каков правильный порядок нескольких энклитик подряд?",
      ua: "Який правильний порядок кількох енклітик поспіль?"
    },
    options: [
      "li -> auxiliary verb -> dative pronoun -> accusative pronoun -> se",
      "se -> pronoun -> verb -> li",
      "random order",
      "accusative pronoun -> dative pronoun -> auxiliary verb"
    ],
    correctAnswer: "li -> auxiliary verb -> dative pronoun -> accusative pronoun -> se",
    explanation: {
      en: "Enclitic sequence order: 1. li, 2. auxiliary verbs (osim je), 3. dative pronouns, 4. accusative pronouns, 5. se, 6. je.",
      ru: "Порядок энклитик: 1. li, 2. вспомогательные глаголы (кроме je), 3. дательный падеж, 4. винительный, 5. se, 6. je.",
      ua: "Порядок енклітик: 1. li, 2. допоміжні дієслова (крім je), 3. давальний відмінок, 4. знахідний, 5. se, 6. je."
    }
  },
  {
    id: "syn-3",
    categoryId: "syntax",
    level: "C1",
    question: {
      hr: "Dopunite točnu negaciju u dvostrukoj negaciji: On ... rekao ... (Niko ništa nije rekao).",
      en: "Choose the grammatically correct double/triple negation: 'He said nothing to anyone'.",
      ru: "Выберите грамматически правильное двойное/тройное отрицание: 'Он никому ничего не сказал'.",
      ua: "Оберіть граматично правильне подвійне/потрійне заперечення: 'Він нікому нічого не сказав'."
    },
    options: [
      "Nije nikome ništa rekao",
      "Nije nekom nešto rekao",
      "Je nikome ništa rekao",
      "Nije ikome išta rekao"
    ],
    correctAnswer: "Nije nikome ništa rekao",
    explanation: {
      en: "Croatian requires full agreement in negative sentences: negated verb 'nije' + negative pronouns 'nikome', 'ništa'.",
      ru: "В хорватском языке обязательна система полного отрицания: отрицательный глагол 'nije' + местоимения 'nikome', 'ništa'.",
      ua: "У хорватській мові обов'язкова система повного заперечення: заперечне дієслово 'nije' + займенники 'nikome', 'ništa'."
    }
  }
];

/**
 * Utility to get filtered question list for a category and level
 */
export function getGrammarQuestions(
  categoryId?: string,
  level?: string,
  limit: number = 10
): GrammarQuestion[] {
  let pool = [...grammarQuestionsData];

  if (categoryId && categoryId !== "all") {
    pool = pool.filter((q) => q.categoryId === categoryId);
  }

  if (level && level !== "all") {
    pool = pool.filter((q) => q.level.toUpperCase() === level.toUpperCase());
  }

  // Fallback if filter returns empty
  if (pool.length === 0) {
    pool = [...grammarQuestionsData];
  }

  // Shuffle and return limit
  return pool.sort(() => 0.5 - Math.random()).slice(0, limit);
}
