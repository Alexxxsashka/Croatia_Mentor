export interface LocalizedString {
  en: string;
  ru: string;
  ua: string;
}

export interface GlossaryExample {
  hr: string;
  translation: LocalizedString;
}

export interface GlossaryTableRow {
  cells: string[];
}

export interface GlossaryTable {
  headers: string[];
  rows: GlossaryTableRow[];
}

export interface GlossarySubSection {
  title: LocalizedString;
  text: LocalizedString;
  examples?: GlossaryExample[];
  table?: GlossaryTable;
}

export interface GlossarySection {
  id: string;
  title: LocalizedString;
  icon: string;
  subsections: GlossarySubSection[];
}

export interface GlossaryCategory {
  id: string;
  title: LocalizedString;
  icon: string;
  sections: GlossarySection[];
}

export const glossaryData: GlossaryCategory[] = [
  // ═══════════════════════════════════════════════════
  // CATEGORY 1: PHONETICS & ALPHABET
  // ═══════════════════════════════════════════════════
  {
    id: "phonetics",
    title: { en: "Phonetics & Alphabet", ru: "Фонетика и алфавит", ua: "Фонетика та алфавіт" },
    icon: "🔤",
    sections: [
      {
        id: "alphabet",
        title: { en: "Croatian Alphabet (Abeceda)", ru: "Хорватский алфавит (Abeceda)", ua: "Хорватський алфавіт (Abeceda)" },
        icon: "📖",
        subsections: [
          {
            title: { en: "The Alphabet", ru: "Алфавит", ua: "Алфавіт" },
            text: {
              en: "Croatian uses the Latin alphabet with 30 letters. Each letter corresponds to exactly one sound — Croatian spelling is fully phonetic. There are no silent letters.",
              ru: "Хорватский язык использует латинский алфавит из 30 букв. Каждая буква соответствует ровно одному звуку — хорватская орфография полностью фонетическая. Нет немых букв.",
              ua: "Хорватська мова використовує латинський алфавіт із 30 літер. Кожна літера відповідає рівно одному звуку — хорватська орфографія повністю фонетична. Немає німих літер."
            },
            table: {
              headers: ["Letter", "Name", "Sound (IPA)", "Example"],
              rows: [
                { cells: ["A a", "a", "/a/", "auto (car)"] },
                { cells: ["B b", "be", "/b/", "brat (brother)"] },
                { cells: ["C c", "ce", "/ts/", "cesta (road)"] },
                { cells: ["Č č", "če", "/tʃ/", "čovjek (person)"] },
                { cells: ["Ć ć", "će", "/tɕ/", "ćevapi (ćevapi)"] },
                { cells: ["D d", "de", "/d/", "dan (day)"] },
                { cells: ["Dž dž", "dže", "/dʒ/", "džem (jam)"] },
                { cells: ["Đ đ", "đe", "/dʑ/", "đak (pupil)"] },
                { cells: ["E e", "e", "/e/", "Europa (Europe)"] },
                { cells: ["F f", "ef", "/f/", "film (film)"] },
                { cells: ["G g", "ge", "/ɡ/", "grad (city)"] },
                { cells: ["H h", "ha", "/x/", "hvala (thanks)"] },
                { cells: ["I i", "i", "/i/", "ime (name)"] },
                { cells: ["J j", "je", "/j/", "jabuka (apple)"] },
                { cells: ["K k", "ka", "/k/", "kuća (house)"] },
                { cells: ["L l", "el", "/l/", "lijep (beautiful)"] },
                { cells: ["Lj lj", "elj", "/ʎ/", "ljubav (love)"] },
                { cells: ["M m", "em", "/m/", "more (sea)"] },
                { cells: ["N n", "en", "/n/", "nebo (sky)"] },
                { cells: ["Nj nj", "enj", "/ɲ/", "njega (him)"] },
                { cells: ["O o", "o", "/o/", "otac (father)"] },
                { cells: ["P p", "pe", "/p/", "pas (dog)"] },
                { cells: ["R r", "er", "/r/", "riba (fish)"] },
                { cells: ["S s", "es", "/s/", "sunce (sun)"] },
                { cells: ["Š š", "eš", "/ʃ/", "škola (school)"] },
                { cells: ["T t", "te", "/t/", "tata (dad)"] },
                { cells: ["U u", "u", "/u/", "ulica (street)"] },
                { cells: ["V v", "ve", "/ʋ/", "voda (water)"] },
                { cells: ["Z z", "ze", "/z/", "zemlja (earth)"] },
                { cells: ["Ž ž", "že", "/ʒ/", "žena (woman)"] },
              ]
            }
          },
          {
            title: { en: "Special Letters", ru: "Особые буквы", ua: "Особливі літери" },
            text: {
              en: "Croatian has several unique letters: Č, Ć, Đ, Dž, Lj, Nj, Š, Ž. The digraphs Dž, Lj, Nj are each considered single letters. Č vs Ć: Č is a 'hard' ch (like English 'church'), while Ć is a 'soft' ch (palatalized, similar to Italian 'ci').",
              ru: "В хорватском несколько уникальных букв: Č, Ć, Đ, Dž, Lj, Nj, Š, Ž. Диграфы Dž, Lj, Nj считаются одной буквой. Č vs Ć: Č — «твёрдый» звук (как англ. 'church'), а Ć — «мягкий» (палатализованный, похож на итальянское 'ci').",
              ua: "У хорватській кілька унікальних літер: Č, Ć, Đ, Dž, Lj, Nj, Š, Ž. Диграфи Dž, Lj, Nj вважаються однією літерою. Č vs Ć: Č — «твердий» звук (як англ. 'church'), а Ć — «м'який» (палаталізований, схожий на італійське 'ci')."
            },
            examples: [
              { hr: "Čovjek je dobar.", translation: { en: "The person is good.", ru: "Человек хороший.", ua: "Людина добра." } },
              { hr: "Noć je lijepa.", translation: { en: "The night is beautiful.", ru: "Ночь красива.", ua: "Ніч гарна." } },
            ]
          }
        ]
      },
      {
        id: "pronunciation",
        title: { en: "Pronunciation Rules", ru: "Правила произношения", ua: "Правила вимови" },
        icon: "🗣️",
        subsections: [
          {
            title: { en: "Stress and Intonation", ru: "Ударение и интонация", ua: "Наголос та інтонація" },
            text: {
              en: "Croatian has a pitch accent system with four types of stress: short falling, short rising, long falling, long rising. Stress never falls on the last syllable (except in some monosyllabic words). In standard speech, stress tends to be on the first or second syllable.",
              ru: "В хорватском языке есть тональная система ударения с четырьмя типами: краткое нисходящее, краткое восходящее, долгое нисходящее, долгое восходящее. Ударение никогда не падает на последний слог (кроме некоторых односложных слов).",
              ua: "У хорватській мові є тональна система наголосу з чотирма типами: короткий спадний, короткий висхідний, довгий спадний, довгий висхідний. Наголос ніколи не падає на останній склад (крім деяких односкладових слів)."
            },
            examples: [
              { hr: "vòda", translation: { en: "water (short rising)", ru: "вода (краткое восходящее)", ua: "вода (короткий висхідний)" } },
              { hr: "glâva", translation: { en: "head (long falling)", ru: "голова (долгое нисходящее)", ua: "голова (довгий спадний)" } },
            ]
          },
          {
            title: { en: "Syllabic R", ru: "Слоговое R", ua: "Складове R" },
            text: {
              en: "In Croatian, the letter R can function as a vowel and form its own syllable. This is called 'syllabic R' (slogovno R). It appears in many common words.",
              ru: "В хорватском буква R может выступать в роли гласного и образовывать собственный слог. Это называется «слоговое R» (slogovno R). Встречается во многих распространённых словах.",
              ua: "У хорватській літера R може виступати в ролі голосного та утворювати власний склад. Це називається «складове R» (slogovno R). Зустрічається в багатьох поширених словах."
            },
            examples: [
              { hr: "krv", translation: { en: "blood", ru: "кровь", ua: "кров" } },
              { hr: "prst", translation: { en: "finger", ru: "палец", ua: "палець" } },
              { hr: "trg", translation: { en: "square (plaza)", ru: "площадь", ua: "площа" } },
              { hr: "crn", translation: { en: "black", ru: "чёрный", ua: "чорний" } },
            ]
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════
  // CATEGORY 2: NOUN CASES (PADEŽI)
  // ═══════════════════════════════════════════════════
  {
    id: "cases",
    title: { en: "Noun Cases (Padeži)", ru: "Падежи (Padeži)", ua: "Відмінки (Padeži)" },
    icon: "📝",
    sections: [
      {
        id: "nominativ",
        title: { en: "Nominative (Nominativ)", ru: "Именительный (Nominativ)", ua: "Називний (Nominativ)" },
        icon: "1️⃣",
        subsections: [
          {
            title: { en: "Usage", ru: "Использование", ua: "Використання" },
            text: {
              en: "The nominative case is the basic, dictionary form of a noun. It answers the questions 'Tko?' (Who?) and 'Što?' (What?). It is used for the subject of a sentence.",
              ru: "Именительный падеж — базовая, словарная форма существительного. Отвечает на вопросы 'Tko?' (Кто?) и 'Što?' (Что?). Используется для подлежащего.",
              ua: "Називний відмінок — базова, словникова форма іменника. Відповідає на питання 'Tko?' (Хто?) і 'Što?' (Що?). Використовується для підмета."
            },
            examples: [
              { hr: "Žena čita knjigu.", translation: { en: "The woman reads a book.", ru: "Женщина читает книгу.", ua: "Жінка читає книгу." } },
              { hr: "Grad je lijep.", translation: { en: "The city is beautiful.", ru: "Город красивый.", ua: "Місто гарне." } },
            ]
          },
          {
            title: { en: "Noun Genders", ru: "Роды существительных", ua: "Роди іменників" },
            text: {
              en: "Croatian has three genders: masculine (muški rod), feminine (ženski rod), neuter (srednji rod). Masculine nouns typically end in a consonant, feminine in -a, neuter in -o or -e.",
              ru: "В хорватском три рода: мужской (muški rod), женский (ženski rod), средний (srednji rod). Мужской род обычно оканчивается на согласную, женский на -a, средний на -o или -e.",
              ua: "У хорватській три роди: чоловічий (muški rod), жіночий (ženski rod), середній (srednji rod). Чоловічий рід зазвичай закінчується на приголосну, жіночий на -a, середній на -o або -e."
            },
            table: {
              headers: ["Gender", "Ending", "Example", "Translation"],
              rows: [
                { cells: ["Masculine", "consonant", "grad", "city"] },
                { cells: ["Masculine", "consonant", "student", "student"] },
                { cells: ["Feminine", "-a", "žena", "woman"] },
                { cells: ["Feminine", "-a", "knjiga", "book"] },
                { cells: ["Neuter", "-o / -e", "selo", "village"] },
                { cells: ["Neuter", "-o / -e", "more", "sea"] },
              ]
            }
          }
        ]
      },
      {
        id: "genitiv",
        title: { en: "Genitive (Genitiv)", ru: "Родительный (Genitiv)", ua: "Родовий (Genitiv)" },
        icon: "2️⃣",
        subsections: [
          {
            title: { en: "Usage & Formation", ru: "Использование и образование", ua: "Використання та утворення" },
            text: {
              en: "The genitive answers 'Koga?' (Whom?) and 'Čega?' (Of what?). It expresses possession, origin, part of a whole, and is used after many prepositions (iz, od, do, bez, kod, blizu, ispred, iza, ispod, iznad, oko, protiv, nakon, prije, tijekom).",
              ru: "Родительный падеж отвечает на вопросы 'Koga?' (Кого?) и 'Čega?' (Чего?). Выражает принадлежность, происхождение, часть целого. Используется после предлогов: iz, od, do, bez, kod, blizu, ispred, iza, ispod, iznad, oko, protiv, nakon, prije, tijekom.",
              ua: "Родовий відмінок відповідає на питання 'Koga?' (Кого?) і 'Čega?' (Чого?). Виражає належність, походження, частину цілого. Використовується після прийменників: iz, od, do, bez, kod, blizu, ispred, iza, ispod, iznad, oko, protiv, nakon, prije, tijekom."
            },
            table: {
              headers: ["Gender", "Nom. Sing.", "Gen. Sing.", "Gen. Plural"],
              rows: [
                { cells: ["Masc.", "grad", "grada", "gradova"] },
                { cells: ["Masc.", "student", "studenta", "studenata"] },
                { cells: ["Fem.", "žena", "žene", "žena"] },
                { cells: ["Fem.", "knjiga", "knjige", "knjiga"] },
                { cells: ["Neut.", "selo", "sela", "sela"] },
                { cells: ["Neut.", "more", "mora", "mora"] },
              ]
            },
            examples: [
              { hr: "To je kuća moga oca.", translation: { en: "That is my father's house.", ru: "Это дом моего отца.", ua: "Це дім мого батька." } },
              { hr: "Čaša vode, molim.", translation: { en: "A glass of water, please.", ru: "Стакан воды, пожалуйста.", ua: "Склянку води, будь ласка." } },
              { hr: "Dolazim iz Zagreba.", translation: { en: "I come from Zagreb.", ru: "Я из Загреба.", ua: "Я із Загреба." } },
            ]
          }
        ]
      },
      {
        id: "dativ",
        title: { en: "Dative (Dativ)", ru: "Дательный (Dativ)", ua: "Давальний (Dativ)" },
        icon: "3️⃣",
        subsections: [
          {
            title: { en: "Usage & Formation", ru: "Использование и образование", ua: "Використання та утворення" },
            text: {
              en: "The dative answers 'Komu?' (To whom?) and 'Čemu?' (To what?). It expresses the indirect object — the recipient of an action. Used after prepositions: k/ka (towards), prema (towards), usprkos/unatoč (despite).",
              ru: "Дательный падеж отвечает на вопросы 'Komu?' (Кому?) и 'Čemu?' (Чему?). Выражает косвенное дополнение. Используется после предлогов: k/ka (к), prema (к, по направлению), usprkos/unatoč (несмотря на).",
              ua: "Давальний відмінок відповідає на питання 'Komu?' (Кому?) і 'Čemu?' (Чому?). Виражає непрямий додаток. Використовується після прийменників: k/ka (до), prema (до, у напрямку), usprkos/unatoč (незважаючи на)."
            },
            table: {
              headers: ["Gender", "Nom. Sing.", "Dat. Sing.", "Dat. Plural"],
              rows: [
                { cells: ["Masc.", "brat", "bratu", "braći"] },
                { cells: ["Masc.", "prijatelj", "prijatelju", "prijateljima"] },
                { cells: ["Fem.", "sestra", "sestri", "sestrama"] },
                { cells: ["Fem.", "majka", "majci", "majkama"] },
                { cells: ["Neut.", "dijete", "djetetu", "djeci"] },
              ]
            },
            examples: [
              { hr: "Dajem poklon bratu.", translation: { en: "I give a gift to my brother.", ru: "Я дарю подарок брату.", ua: "Я даю подарунок брату." } },
              { hr: "Pišem pismo prijatelju.", translation: { en: "I write a letter to a friend.", ru: "Я пишу письмо другу.", ua: "Я пишу листа другу." } },
            ]
          }
        ]
      },
      {
        id: "akuzativ",
        title: { en: "Accusative (Akuzativ)", ru: "Винительный (Akuzativ)", ua: "Знахідний (Akuzativ)" },
        icon: "4️⃣",
        subsections: [
          {
            title: { en: "Usage & Formation", ru: "Использование и образование", ua: "Використання та утворення" },
            text: {
              en: "The accusative answers 'Koga?' (Whom?) and 'Što?' (What?). It marks the direct object. Used after prepositions: u (into), na (onto), za (for), kroz (through), po (for/to fetch). Key rule: feminine nouns ending in -a change to -u.",
              ru: "Винительный падеж отвечает на вопросы 'Koga?' (Кого?) и 'Što?' (Что?). Обозначает прямое дополнение. Используется после предлогов: u (в), na (на), za (для), kroz (через), po (за). Ключевое правило: женский род на -a меняет на -u.",
              ua: "Знахідний відмінок відповідає на питання 'Koga?' (Кого?) і 'Što?' (Що?). Позначає прямий додаток. Використовується після прийменників: u (у, в), na (на), za (для), kroz (через), po (за). Ключове правило: жіночий рід на -a змінює на -u."
            },
            table: {
              headers: ["Gender", "Nom. Sing.", "Acc. Sing.", "Rule"],
              rows: [
                { cells: ["Masc. inanimate", "grad", "grad", "= Nominative"] },
                { cells: ["Masc. animate", "brat", "brata", "= Genitive"] },
                { cells: ["Feminine", "žena", "ženu", "-a → -u"] },
                { cells: ["Feminine", "knjiga", "knjigu", "-a → -u"] },
                { cells: ["Neuter", "selo", "selo", "= Nominative"] },
              ]
            },
            examples: [
              { hr: "Vidim more.", translation: { en: "I see the sea.", ru: "Я вижу море.", ua: "Я бачу море." } },
              { hr: "Čitam knjigu.", translation: { en: "I read a book.", ru: "Я читаю книгу.", ua: "Я читаю книгу." } },
              { hr: "Volim brata.", translation: { en: "I love my brother.", ru: "Я люблю брата.", ua: "Я люблю брата." } },
            ]
          }
        ]
      },
      {
        id: "vokativ",
        title: { en: "Vocative (Vokativ)", ru: "Звательный (Vokativ)", ua: "Кличний (Vokativ)" },
        icon: "5️⃣",
        subsections: [
          {
            title: { en: "Usage & Formation", ru: "Использование и образование", ua: "Використання та утворення" },
            text: {
              en: "The vocative is used for direct address — calling someone by name. Masculine nouns add -e or -u, feminine nouns change -a to -o, neuter nouns stay the same.",
              ru: "Звательный падеж используется для прямого обращения — когда зовёте кого-то по имени. Мужской род добавляет -e или -u, женский меняет -a на -o, средний не меняется.",
              ua: "Кличний відмінок використовується для прямого звертання. Чоловічий рід додає -e або -u, жіночий змінює -a на -o, середній не змінюється."
            },
            examples: [
              { hr: "Ivane, dođi ovamo!", translation: { en: "Ivan, come here!", ru: "Иван, иди сюда!", ua: "Іване, іди сюди!" } },
              { hr: "Ano, jesi li tu?", translation: { en: "Ana, are you there?", ru: "Ана, ты здесь?", ua: "Ано, ти тут?" } },
              { hr: "Profesore, imam pitanje.", translation: { en: "Professor, I have a question.", ru: "Профессор, у меня вопрос.", ua: "Професоре, у мене питання." } },
            ]
          }
        ]
      },
      {
        id: "lokativ",
        title: { en: "Locative (Lokativ)", ru: "Местный (Lokativ)", ua: "Місцевий (Lokativ)" },
        icon: "6️⃣",
        subsections: [
          {
            title: { en: "Usage & Formation", ru: "Использование и образование", ua: "Використання та утворення" },
            text: {
              en: "The locative answers 'O komu?' (About whom?) and 'O čemu?' (About what?), and 'Gdje?' (Where?). Always used with prepositions: u (in), na (on), o (about), po (around/on), pri (at, near). Endings are the same as dative.",
              ru: "Местный падеж отвечает на вопросы 'O komu?' (О ком?) и 'O čemu?' (О чём?), 'Gdje?' (Где?). Всегда используется с предлогами: u (в), na (на), o (о), po (по), pri (при). Окончания совпадают с дательным.",
              ua: "Місцевий відмінок відповідає на питання 'O komu?' (Про кого?) і 'O čemu?' (Про що?), 'Gdje?' (Де?). Завжди використовується з прийменниками: u (у), na (на), o (про), po (по), pri (при). Закінчення збігаються з давальним."
            },
            examples: [
              { hr: "Živim u Zagrebu.", translation: { en: "I live in Zagreb.", ru: "Я живу в Загребе.", ua: "Я живу в Загребі." } },
              { hr: "Knjiga je na stolu.", translation: { en: "The book is on the table.", ru: "Книга на столе.", ua: "Книга на столі." } },
              { hr: "Pričamo o filmu.", translation: { en: "We're talking about the movie.", ru: "Мы говорим о фильме.", ua: "Ми говоримо про фільм." } },
            ]
          }
        ]
      },
      {
        id: "instrumental",
        title: { en: "Instrumental (Instrumental)", ru: "Творительный (Instrumental)", ua: "Орудний (Instrumental)" },
        icon: "7️⃣",
        subsections: [
          {
            title: { en: "Usage & Formation", ru: "Использование и образование", ua: "Використання та утворення" },
            text: {
              en: "The instrumental answers 'S kim?' (With whom?) and 'Čime?' (With what?). Expresses instrument/means or accompaniment. Used with prepositions: s/sa (with), pred (in front of), za (behind), nad (above), pod (under), među (between/among).",
              ru: "Творительный падеж отвечает на вопросы 'S kim?' (С кем?) и 'Čime?' (Чем?). Выражает инструмент/средство или сопровождение. Предлоги: s/sa (с), pred (перед), za (за), nad (над), pod (под), među (между).",
              ua: "Орудний відмінок відповідає на питання 'S kim?' (З ким?) і 'Čime?' (Чим?). Виражає інструмент/засіб або супровід. Прийменники: s/sa (з), pred (перед), za (за), nad (над), pod (під), među (між)."
            },
            table: {
              headers: ["Gender", "Nom. Sing.", "Instr. Sing.", "Instr. Plural"],
              rows: [
                { cells: ["Masc.", "brat", "bratom", "braćom"] },
                { cells: ["Masc.", "auto", "autom", "autima"] },
                { cells: ["Fem.", "žena", "ženom", "ženama"] },
                { cells: ["Fem.", "ruka", "rukom", "rukama"] },
                { cells: ["Neut.", "selo", "selom", "selima"] },
              ]
            },
            examples: [
              { hr: "Pišem olovkom.", translation: { en: "I write with a pencil.", ru: "Я пишу карандашом.", ua: "Я пишу олівцем." } },
              { hr: "Idem s prijateljem.", translation: { en: "I go with a friend.", ru: "Я иду с другом.", ua: "Я йду з другом." } },
              { hr: "Putujem vlakom.", translation: { en: "I travel by train.", ru: "Я путешествую поездом.", ua: "Я подорожую потягом." } },
            ]
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════
  // CATEGORY 3: VERBS
  // ═══════════════════════════════════════════════════
  {
    id: "verbs",
    title: { en: "Verbs (Glagoli)", ru: "Глаголы (Glagoli)", ua: "Дієслова (Glagoli)" },
    icon: "🔄",
    sections: [
      {
        id: "present",
        title: { en: "Present Tense (Prezent)", ru: "Настоящее время (Prezent)", ua: "Теперішній час (Prezent)" },
        icon: "⏰",
        subsections: [
          {
            title: { en: "Conjugation Groups", ru: "Группы спряжения", ua: "Групи дієвідмінювання" },
            text: {
              en: "Croatian verbs in present tense are conjugated based on the vowel before the personal ending. The three main conjugation groups are: -a- conjugation (e.g. čitati → čitam), -i- conjugation (e.g. govoriti → govorim), -e- conjugation (e.g. pisati → pišem).",
              ru: "Хорватские глаголы в настоящем времени спрягаются по гласному перед личным окончанием. Три основные группы: на -a- (čitati → čitam), на -i- (govoriti → govorim), на -e- (pisati → pišem).",
              ua: "Хорватські дієслова у теперішньому часі дієвідмінюються за голосним перед особовим закінченням. Три основні групи: на -a- (čitati → čitam), на -i- (govoriti → govorim), на -e- (pisati → pišem)."
            },
            table: {
              headers: ["Person", "čitati (read)", "govoriti (speak)", "pisati (write)"],
              rows: [
                { cells: ["ja", "čitam", "govorim", "pišem"] },
                { cells: ["ti", "čitaš", "govoriš", "pišeš"] },
                { cells: ["on/ona/ono", "čita", "govori", "piše"] },
                { cells: ["mi", "čitamo", "govorimo", "pišemo"] },
                { cells: ["vi", "čitate", "govorite", "pišete"] },
                { cells: ["oni/one/ona", "čitaju", "govore", "pišu"] },
              ]
            }
          },
          {
            title: { en: "Verb 'biti' (to be)", ru: "Глагол 'biti' (быть)", ua: "Дієслово 'biti' (бути)" },
            text: {
              en: "The verb 'biti' is the most important verb in Croatian. It has both long (stressed) and short (enclitic) forms. Short forms are used more commonly.",
              ru: "Глагол 'biti' — самый важный глагол в хорватском. Имеет длинные (ударные) и короткие (энклитические) формы. Короткие формы используются чаще.",
              ua: "Дієслово 'biti' — найважливіше дієслово в хорватській. Має довгі (наголошені) та короткі (енклітичні) форми. Короткі форми використовуються частіше."
            },
            table: {
              headers: ["Person", "Long form", "Short form", "Negative"],
              rows: [
                { cells: ["ja", "jesam", "sam", "nisam"] },
                { cells: ["ti", "jesi", "si", "nisi"] },
                { cells: ["on/ona/ono", "jest/jeste", "je", "nije"] },
                { cells: ["mi", "jesmo", "smo", "nismo"] },
                { cells: ["vi", "jeste", "ste", "niste"] },
                { cells: ["oni/one/ona", "jesu", "su", "nisu"] },
              ]
            }
          }
        ]
      },
      {
        id: "past",
        title: { en: "Past Tense (Perfekt)", ru: "Прошедшее время (Perfekt)", ua: "Минулий час (Perfekt)" },
        icon: "⏪",
        subsections: [
          {
            title: { en: "Formation", ru: "Образование", ua: "Утворення" },
            text: {
              en: "The perfekt (past tense) is formed with the short form of 'biti' + active past participle (glagolski pridjev radni). The participle changes by gender and number: -o (masc.), -la (fem.), -lo (neut.), -li (masc. pl.), -le (fem. pl.), -la (neut. pl.).",
              ru: "Перфект (прошедшее время) образуется с помощью краткой формы 'biti' + действительное причастие прошедшего времени. Причастие изменяется по роду и числу: -o (м.р.), -la (ж.р.), -lo (ср.р.), -li (м.р. мн.), -le (ж.р. мн.), -la (ср.р. мн.).",
              ua: "Перфект (минулий час) утворюється за допомогою короткої форми 'biti' + активний дієприкметник минулого часу. Дієприкметник змінюється за родом та числом: -o (чол.), -la (жін.), -lo (сер.), -li (чол. мн.), -le (жін. мн.), -la (сер. мн.)."
            },
            table: {
              headers: ["Person", "čitati (read)", "govoriti (speak)"],
              rows: [
                { cells: ["ja (m/f)", "sam čitao / čitala", "sam govorio / govorila"] },
                { cells: ["ti (m/f)", "si čitao / čitala", "si govorio / govorila"] },
                { cells: ["on / ona", "je čitao / čitala", "je govorio / govorila"] },
                { cells: ["mi (m)", "smo čitali", "smo govorili"] },
                { cells: ["vi (m)", "ste čitali", "ste govorili"] },
                { cells: ["oni / one", "su čitali / čitale", "su govorili / govorile"] },
              ]
            },
            examples: [
              { hr: "Jučer sam čitao knjige.", translation: { en: "Yesterday I read books.", ru: "Вчера я читал книги.", ua: "Вчора я читав книги." } },
              { hr: "Ona je govorila hrvatski.", translation: { en: "She spoke Croatian.", ru: "Она говорила по-хорватски.", ua: "Вона говорила хорватською." } },
            ]
          }
        ]
      },
      {
        id: "future",
        title: { en: "Future Tense (Futur I & II)", ru: "Будущее время (Futur I и II)", ua: "Майбутній час (Futur I та II)" },
        icon: "⏩",
        subsections: [
          {
            title: { en: "Futur I", ru: "Futur I", ua: "Futur I" },
            text: {
              en: "Future I is formed with short forms of 'htjeti' (will) + infinitive. Short forms: ću, ćeš, će, ćemo, ćete, će. When the infinitive ends in -ti and is placed before the auxiliary, the -i is dropped.",
              ru: "Futur I образуется с помощью кратких форм глагола 'htjeti' + инфинитив. Краткие формы: ću, ćeš, će, ćemo, ćete, će. Если инфинитив на -ti стоит перед вспомогательным глаголом, -i отбрасывается.",
              ua: "Futur I утворюється за допомогою коротких форм дієслова 'htjeti' + інфінітив. Короткі форми: ću, ćeš, će, ćemo, ćete, će. Якщо інфінітив на -ti стоїть перед допоміжним дієсловом, -i відкидається."
            },
            table: {
              headers: ["Person", "čitati", "govoriti"],
              rows: [
                { cells: ["ja", "čitat ću", "govorit ću"] },
                { cells: ["ti", "čitat ćeš", "govorit ćeš"] },
                { cells: ["on/ona", "čitat će", "govorit će"] },
                { cells: ["mi", "čitat ćemo", "govorit ćemo"] },
                { cells: ["vi", "čitat ćete", "govorit ćete"] },
                { cells: ["oni", "čitat će", "govorit će"] },
              ]
            },
            examples: [
              { hr: "Sutra ću učiti hrvatski.", translation: { en: "Tomorrow I will study Croatian.", ru: "Завтра я буду учить хорватский.", ua: "Завтра я буду вчити хорватську." } },
            ]
          },
          {
            title: { en: "Futur II", ru: "Futur II", ua: "Futur II" },
            text: {
              en: "Future II is used in conditional/temporal subordinate clauses (with 'ako', 'kad'). Formed with present tense of 'biti' (budem, budeš...) + active past participle.",
              ru: "Futur II используется в условных/временных придаточных предложениях (после 'ako', 'kad'). Образуется формами настоящего времени 'biti' (budem, budeš...) + причастие прошедшего времени.",
              ua: "Futur II використовується в умовних/часових підрядних реченнях (після 'ako', 'kad'). Утворюється формами теперішнього часу 'biti' (budem, budeš...) + дієприкметник минулого часу."
            },
            examples: [
              { hr: "Ako budem imao vremena, doći ću.", translation: { en: "If I have time, I'll come.", ru: "Если у меня будет время, я приду.", ua: "Якщо у мене буде час, я прийду." } },
              { hr: "Kad budete stigli, javite mi.", translation: { en: "When you arrive, let me know.", ru: "Когда приедете, дайте мне знать.", ua: "Коли приїдете, дайте мені знати." } },
            ]
          }
        ]
      },
      {
        id: "aspect",
        title: { en: "Verb Aspect (Glagolski aspekt)", ru: "Вид глагола", ua: "Вид дієслова" },
        icon: "🔀",
        subsections: [
          {
            title: { en: "Perfective vs Imperfective", ru: "Совершенный vs Несовершенный", ua: "Доконаний vs Недоконаний" },
            text: {
              en: "Like Slavic languages, Croatian verbs have aspects. Imperfective verbs express ongoing, repeated, or habitual actions. Perfective verbs express completed, one-time actions. Most verbs form pairs.",
              ru: "Как и в славянских языках, хорватские глаголы имеют виды. Несовершенный вид выражает длящееся, повторяющееся или привычное действие. Совершенный — завершённое, однократное. Большинство глаголов образуют пары.",
              ua: "Як і в слов'янських мовах, хорватські дієслова мають види. Недоконаний вид виражає тривалу, повторювану або звичну дію. Доконаний — завершену, одноразову. Більшість дієслів утворюють пари."
            },
            table: {
              headers: ["Imperfective", "Perfective", "Translation"],
              rows: [
                { cells: ["čitati", "pročitati", "to read"] },
                { cells: ["pisati", "napisati", "to write"] },
                { cells: ["učiti", "naučiti", "to learn"] },
                { cells: ["govoriti", "reći", "to speak/say"] },
                { cells: ["kupovati", "kupiti", "to buy"] },
                { cells: ["jesti", "pojesti", "to eat"] },
                { cells: ["piti", "popiti", "to drink"] },
                { cells: ["dolaziti", "doći", "to come"] },
                { cells: ["odlaziti", "otići", "to leave"] },
              ]
            }
          }
        ]
      },
      {
        id: "imperative",
        title: { en: "Imperative (Imperativ)", ru: "Повелительное наклонение (Imperativ)", ua: "Наказовий спосіб (Imperativ)" },
        icon: "❗",
        subsections: [
          {
            title: { en: "Formation", ru: "Образование", ua: "Утворення" },
            text: {
              en: "The imperative is formed from the 3rd person plural present tense stem. Endings: -j/-i (2nd sing.), -jmo/-imo (1st pl.), -jte/-ite (2nd pl.).",
              ru: "Повелительное наклонение образуется от основы 3-го лица мн.ч. настоящего времени. Окончания: -j/-i (2 л. ед.ч.), -jmo/-imo (1 л. мн.ч.), -jte/-ite (2 л. мн.ч.).",
              ua: "Наказовий спосіб утворюється від основи 3-ї особи мн.ч. теперішнього часу. Закінчення: -j/-i (2 ос. одн.), -jmo/-imo (1 ос. мн.), -jte/-ite (2 ос. мн.)."
            },
            table: {
              headers: ["Verb", "ti", "mi", "vi"],
              rows: [
                { cells: ["čitati", "čitaj", "čitajmo", "čitajte"] },
                { cells: ["govoriti", "govori", "govorimo", "govorite"] },
                { cells: ["pisati", "piši", "pišimo", "pišite"] },
                { cells: ["ići", "idi", "idimo", "idite"] },
                { cells: ["doći", "dođi", "dođimo", "dođite"] },
              ]
            },
            examples: [
              { hr: "Čitaj polako!", translation: { en: "Read slowly!", ru: "Читай медленно!", ua: "Читай повільно!" } },
              { hr: "Dođite ovamo, molim vas!", translation: { en: "Come here, please!", ru: "Идите сюда, пожалуйста!", ua: "Ідіть сюди, будь ласка!" } },
            ]
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════
  // CATEGORY 4: NUMBERS
  // ═══════════════════════════════════════════════════
  {
    id: "numbers",
    title: { en: "Numbers (Brojevi)", ru: "Числительные (Brojevi)", ua: "Числівники (Brojevi)" },
    icon: "🔢",
    sections: [
      {
        id: "cardinal",
        title: { en: "Cardinal Numbers", ru: "Количественные числительные", ua: "Кількісні числівники" },
        icon: "🔢",
        subsections: [
          {
            title: { en: "Numbers 0–100", ru: "Числа 0–100", ua: "Числа 0–100" },
            text: {
              en: "Croatian numbers are important for everyday situations: shopping, telling time, giving your phone number.",
              ru: "Хорватские числа важны для повседневных ситуаций: покупки, определение времени, номер телефона.",
              ua: "Хорватські числа важливі для повсякденних ситуацій: покупки, визначення часу, номер телефону."
            },
            table: {
              headers: ["Number", "Croatian", "Number", "Croatian"],
              rows: [
                { cells: ["0", "nula", "10", "deset"] },
                { cells: ["1", "jedan", "11", "jedanaest"] },
                { cells: ["2", "dva", "12", "dvanaest"] },
                { cells: ["3", "tri", "13", "trinaest"] },
                { cells: ["4", "četiri", "14", "četrnaest"] },
                { cells: ["5", "pet", "15", "petnaest"] },
                { cells: ["6", "šest", "20", "dvadeset"] },
                { cells: ["7", "sedam", "30", "trideset"] },
                { cells: ["8", "osam", "50", "pedeset"] },
                { cells: ["9", "devet", "100", "sto"] },
              ]
            }
          }
        ]
      },
      {
        id: "ordinal",
        title: { en: "Ordinal Numbers", ru: "Порядковые числительные", ua: "Порядкові числівники" },
        icon: "🏆",
        subsections: [
          {
            title: { en: "Formation", ru: "Образование", ua: "Утворення" },
            text: {
              en: "Ordinal numbers are adjectives and must agree in gender with the noun they describe: prvi/prva/prvo (first), drugi/druga/drugo (second), etc.",
              ru: "Порядковые числительные — это прилагательные и должны согласоваться в роде: prvi/prva/prvo (первый), drugi/druga/drugo (второй) и т.д.",
              ua: "Порядкові числівники — це прикметники і мають узгоджуватися в роді: prvi/prva/prvo (перший), drugi/druga/drugo (другий) тощо."
            },
            table: {
              headers: ["Number", "Masc.", "Fem.", "Neut."],
              rows: [
                { cells: ["1st", "prvi", "prva", "prvo"] },
                { cells: ["2nd", "drugi", "druga", "drugo"] },
                { cells: ["3rd", "treći", "treća", "treće"] },
                { cells: ["4th", "četvrti", "četvrta", "četvrto"] },
                { cells: ["5th", "peti", "peta", "peto"] },
                { cells: ["10th", "deseti", "deseta", "deseto"] },
              ]
            }
          }
        ]
      }
    ]
  },

  // ═══════════════════════════════════════════════════
  // CATEGORY 5: EVERYDAY TOPICS
  // ═══════════════════════════════════════════════════
  {
    id: "topics",
    title: { en: "Everyday Topics", ru: "Повседневные темы", ua: "Повсякденні теми" },
    icon: "💬",
    sections: [
      {
        id: "greetings",
        title: { en: "Greetings & Farewells", ru: "Приветствия и прощания", ua: "Привітання та прощання" },
        icon: "👋",
        subsections: [
          {
            title: { en: "Basic Greetings", ru: "Основные приветствия", ua: "Основні привітання" },
            text: {
              en: "Croatian greetings depend on the time of day and the formality of the situation.",
              ru: "Хорватские приветствия зависят от времени суток и степени формальности.",
              ua: "Хорватські привітання залежать від часу доби та ступеня формальності."
            },
            table: {
              headers: ["Croatian", "English", "Usage"],
              rows: [
                { cells: ["Dobar dan!", "Good day!", "Formal, daytime"] },
                { cells: ["Dobro jutro!", "Good morning!", "Until ~10am"] },
                { cells: ["Dobra večer!", "Good evening!", "Evening"] },
                { cells: ["Bok!", "Hi! / Bye!", "Informal"] },
                { cells: ["Zdravo!", "Hello!", "Informal"] },
                { cells: ["Kako ste?", "How are you? (formal)", "Formal"] },
                { cells: ["Kako si?", "How are you? (informal)", "Informal"] },
                { cells: ["Doviđenja!", "Goodbye!", "Formal"] },
                { cells: ["Laku noć!", "Good night!", "Evening farewell"] },
              ]
            },
            examples: [
              { hr: "Bok! Kako si? — Dobro sam, hvala!", translation: { en: "Hi! How are you? — I'm fine, thanks!", ru: "Привет! Как дела? — Хорошо, спасибо!", ua: "Привіт! Як справи? — Добре, дякую!" } },
            ]
          }
        ]
      },
      {
        id: "shopping",
        title: { en: "Shopping & Market", ru: "Покупки и рынок", ua: "Покупки та ринок" },
        icon: "🛒",
        subsections: [
          {
            title: { en: "Useful Phrases", ru: "Полезные фразы", ua: "Корисні фрази" },
            text: {
              en: "Essential phrases for shopping in Croatia — at the market, in stores, and more.",
              ru: "Важные фразы для покупок в Хорватии — на рынке, в магазинах и т.д.",
              ua: "Важливі фрази для покупок у Хорватії — на ринку, у магазинах тощо."
            },
            table: {
              headers: ["Croatian", "English", "Russian"],
              rows: [
                { cells: ["Koliko to košta?", "How much does it cost?", "Сколько это стоит?"] },
                { cells: ["Imate li...?", "Do you have...?", "У вас есть...?"] },
                { cells: ["Htio/Htjela bih...", "I would like...", "Я бы хотел(а)..."] },
                { cells: ["Mogu li platiti karticom?", "Can I pay by card?", "Можно картой?"] },
                { cells: ["Dajte mi kilu...", "Give me a kilo of...", "Дайте мне кило..."] },
                { cells: ["Je li to na akciji?", "Is it on sale?", "Это по акции?"] },
                { cells: ["Hvala, to je sve.", "Thanks, that's all.", "Спасибо, это всё."] },
              ]
            }
          }
        ]
      },
      {
        id: "transport",
        title: { en: "Transport & Directions", ru: "Транспорт и направления", ua: "Транспорт та напрямки" },
        icon: "🚌",
        subsections: [
          {
            title: { en: "Getting Around", ru: "Как добраться", ua: "Як дістатися" },
            text: {
              en: "Key phrases for navigating public transport and asking for directions in Croatia.",
              ru: "Ключевые фразы для использования общественного транспорта и определения пути в Хорватии.",
              ua: "Ключові фрази для користування громадським транспортом та визначення шляху в Хорватії."
            },
            table: {
              headers: ["Croatian", "English", "Russian"],
              rows: [
                { cells: ["Gdje je stanica?", "Where is the station?", "Где станция?"] },
                { cells: ["Koliko košta karta?", "How much is a ticket?", "Сколько стоит билет?"] },
                { cells: ["Skrenite lijevo/desno", "Turn left/right", "Поверните налево/направо"] },
                { cells: ["Idite ravno", "Go straight", "Идите прямо"] },
                { cells: ["Je li to daleko?", "Is it far?", "Это далеко?"] },
                { cells: ["Kako mogu doći do...?", "How can I get to...?", "Как добраться до...?"] },
              ]
            }
          }
        ]
      },
      {
        id: "doctor",
        title: { en: "At the Doctor", ru: "У врача", ua: "У лікаря" },
        icon: "🏥",
        subsections: [
          {
            title: { en: "Medical Vocabulary", ru: "Медицинская лексика", ua: "Медична лексика" },
            text: {
              en: "Important vocabulary and phrases for visiting a doctor in Croatia.",
              ru: "Важная лексика и фразы для визита к врачу в Хорватии.",
              ua: "Важлива лексика та фрази для візиту до лікаря в Хорватії."
            },
            table: {
              headers: ["Croatian", "English", "Russian"],
              rows: [
                { cells: ["Boli me glava.", "I have a headache.", "У меня болит голова."] },
                { cells: ["Imam temperaturu.", "I have a fever.", "У меня температура."] },
                { cells: ["Trebam liječnika.", "I need a doctor.", "Мне нужен врач."] },
                { cells: ["Alergičan/na sam na...", "I'm allergic to...", "У меня аллергия на..."] },
                { cells: ["Ljekarna", "Pharmacy", "Аптека"] },
                { cells: ["Hitna pomoć", "Emergency", "Скорая помощь"] },
              ]
            }
          }
        ]
      },
      {
        id: "family",
        title: { en: "Family Members", ru: "Члены семьи", ua: "Члени сім'ї" },
        icon: "👨‍👩‍👧‍👦",
        subsections: [
          {
            title: { en: "Family Vocabulary", ru: "Семейная лексика", ua: "Сімейна лексика" },
            text: {
              en: "Croatian family terms — essential vocabulary for introducing your family.",
              ru: "Хорватские термины родства — необходимая лексика для представления семьи.",
              ua: "Хорватські терміни спорідненості — необхідна лексика для представлення сім'ї."
            },
            table: {
              headers: ["Croatian", "English", "Russian"],
              rows: [
                { cells: ["otac / tata", "father / dad", "отец / папа"] },
                { cells: ["majka / mama", "mother / mom", "мать / мама"] },
                { cells: ["brat", "brother", "брат"] },
                { cells: ["sestra", "sister", "сестра"] },
                { cells: ["sin", "son", "сын"] },
                { cells: ["kći / kćer", "daughter", "дочь"] },
                { cells: ["djed / deda", "grandfather", "дедушка"] },
                { cells: ["baka", "grandmother", "бабушка"] },
                { cells: ["muž / suprug", "husband", "муж / супруг"] },
                { cells: ["žena / supruga", "wife", "жена / супруга"] },
                { cells: ["ujak", "uncle (mother's side)", "дядя (по маме)"] },
                { cells: ["stric", "uncle (father's side)", "дядя (по папе)"] },
                { cells: ["teta / tetka", "aunt", "тётя"] },
              ]
            }
          }
        ]
      }
    ]
  }
];
