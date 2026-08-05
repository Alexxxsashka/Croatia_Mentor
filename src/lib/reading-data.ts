export interface ReadingText {
  id: string;
  title: { en: string; ru: string; ua: string };
  author: string;
  level: string;
  text: string;
  vocabulary: { hr: string; en: string; ru: string; ua: string }[];
  questions: {
    question: { en: string; ru: string; ua: string };
    options: string[];
    correctAnswer: string;
  }[];
  translationTasks: {
    hr: string;
    answer: { en: string; ru: string; ua: string };
  }[];
}

export const readingTexts: ReadingText[] = [
  {
    "id": "povratak-filipa",
    "title": {
      "en": "Povratak Filipa Latinovicza (Complete Chapter I & II)",
      "ru": "Возвращение Филипа Латиновича (Главы I и II — Полный романный вариант)",
      "ua": "Повернення Філіпа Латиновича (Розділи I та II — Повний романний варіант)"
    },
    "author": "Miroslav Krleža (Hrvatski Klasik)",
    "level": "C1",
    "text": "Svitalo je kada je Filip stigao na kaptolski kolodvor. Bilo je to sive, blatnjave nedjelje, poslije jedanaest godina izbivanja iz domovine i rodnoga grada. Filip se osjećao stranim i neshvatljivo dalekim u tom gradu svoga ranog djetinjstva i mladeške opčinjenosti. Sve je oko njega bilo neshvatljivo isto, a opet tako nepoznato i tuđe: miris vlage u starim stambenim vežama, tamne drvene kapije okovane starim željezom, sivi visoki zidovi pokriveni stoljetnom prašinom vremena. Osjetio je dubok umor u kostima i neku tešku, neobjašnjivu tjeskobu koja ga je neumoljivo pratila još od samog prelaska državne granice u bezvučnoj noćnoj vožnji vlakom. Vratio se u svoj zavičaj, ali dragocjeni osjećaj pravoga doma bio je već davno izgubljen u nepreglednoj magli njegovih dugogodišnjih europskih lutanja po metropolama, ateljeima i galerijama Pariza, Beča i Münchena.\n\nFilip je stajao pred starom obiteljskom kućom u kojoj je proživio najranije godine. Drvena vrata na ulazu škripala su pod udarima hladnog jesenskog vjetra baš kao i onoga jutra prije jedanaest godina kada je napustio majku i otišao u svijet bez pozdrava i bez novca. Prisjećao se majke Regine, njezine hladne, suzdržane naravi i neprestanih obiteljskih tajni koje su obavijale njegovo djetinjstvo. Regina je uvijek bila tajnovita žena, posvećena vlastitim društvenim ambicijama, trgovini i crkvenim bratovštinama, dok je Filip kao dječak tragao za toplinom i odgovornim očinskim uzorom koji nikada nije imao.\n\nKako je jutarnje svjetlo polako razbijalo teške listopadske oblake nad zagrebačkim krovovima, Filip se kretao dobro poznatim ulicama Gornjega grada. Prošao je pokraj Kamenitih vrata gdje su gorjele voštane svijeće u tišini rane zore. Sjetio se svojih prvih slikarskih pokušaja, kada je kao mladić opčinjen bojama pokušavao na platno prenijeti tajnoviti sjaj jutarnje rose na starom krovu Crkve svetog Marka. No sada, nakon svih tih godina i stotina naslikanih platna po Europi, osjećao je strašnu stvaralačku krizu. Boje su u njegovim očima izgubile svoju nekadašnju čaroliju i vitalnost. Pitanje smisla umjetnosti i vlastitog života pritiskalo ga je poput teškog kamenog bloka.\n\nU tom trenutku duboke unutarnje razdiranosti, Filip susreće stare znance iz mladosti i doznaje za promijenjene sudbine ljudi koje je nekada poznavao. Odnosi u gradu postali su još zamršeniji i zaoštreniji. Dolazak u Kostanjevac, na imanje svoje majke, trebao je biti bijeg od gradske vreve i pokušaj pronalaženja unutarnjeg mira. No tamo ga čeka susret s fascinantnom, ali i opasno destruktivnom Bobočkom — ženom misteriozne prošlosti i snažne karizme koja unosi potpunu pometnju u Filipov već uzdrmani emotivni i slikarski svijet.\n\nOvaj povratak u zavičaj stoga nije bio tek običan povratak na geografsku točku djetinjstva, već bolan, bespoštedan obračun s vlastitim podrijetlom, sjećanjima, majčinim tajnama i neizvjesnom budućnosti umjetnika u svijetu koji se raspada pred njegovim očima. Hoće li Filip uspjeti ponovno pronaći slikarski kist i unutarnju svjetlost, ili će ga progutati mračne sjenke prošlosti koje vrebaju iza svakog ugla staroga Kostanjevca?\n\nI dok je kiša tiho rosnila po krovovima Kostanjevca, Filip je sjedio u starom naslonjaču i promatrao stare obiteljske portrete. Svaki portret nosio je svoju laž, svoju skrivenu tragediju. Njegov vlastiti otac ostao je zagonetka, ime koje se izgovaralo sa šapatom i neugodom. Majka Regina tvrdila je jedno, glasine u gradu govorile su drugo, a Filip je tražio istinu u potezima kista i teksturi boje. Uvidio je da se umjetnost ne može odvojiti od života i da se stvarna ljepota rađa upravo u suočavanju s tamnim stranama ljudske duše.\n\nKada je sutradan izašao u dvorište, miris mokre zemlje i zrelog grožđa podsjetio ga je na dane nevinosti. U tom trenutku shvatio je da se u zavičaj ne vraća da bi pronašao ono što je izgubio, već da bi prihvatio ono što jest — slikar u potrazi za istinom u svijetu punom iluzija.",
    "vocabulary": [
      {
        "hr": "izbivanje",
        "en": "absence / stay away",
        "ru": "отсутствие",
        "ua": "відсутність"
      },
      {
        "hr": "opčinjenost",
        "en": "fascination / enchantment",
        "ru": "очарование",
        "ua": "зачарування"
      },
      {
        "hr": "tjeskoba",
        "en": "anxiety / anguish",
        "ru": "тревога",
        "ua": "тривога"
      },
      {
        "hr": "zavičaj",
        "en": "homeland / native region",
        "ru": "родной край",
        "ua": "рідний край"
      },
      {
        "hr": "suzdržan",
        "en": "reserved / restrained",
        "ru": "сдержанный",
        "ua": "стриманий"
      },
      {
        "hr": "stvaralačka kriza",
        "en": "creative crisis",
        "ru": "творческий кризис",
        "ua": "творча криза"
      },
      {
        "hr": "voštane svijeće",
        "en": "wax candles",
        "ru": "восковые свечи",
        "ua": "воскові свічки"
      },
      {
        "hr": "raspadati se",
        "en": "to fall apart",
        "ru": "распадаться",
        "ua": "розпадатися"
      },
      {
        "hr": "glasine",
        "en": "rumors",
        "ru": "слухи",
        "ua": "чутки"
      },
      {
        "hr": "tekstura boje",
        "en": "paint texture",
        "ru": "текстура краски",
        "ua": "текстура фарби"
      }
    ],
    "questions": [
      {
        "question": {
          "en": "How many years was Filip absent from his hometown?",
          "ru": "Сколько лет Филип отсутствовал в родном городе?",
          "ua": "Скільки років Філіп був відсутній у рідному місті?"
        },
        "options": [
          "Jedanaest godina (11 years)",
          "Pet godina (5 years)",
          "Dvadeset godina (20 years)",
          "Deset godina (10 years)"
        ],
        "correctAnswer": "Jedanaest godina (11 years)"
      },
      {
        "question": {
          "en": "What crisis was Filip experiencing as an artist?",
          "ru": "Какой кризис переживал Филип как художник?",
          "ua": "Яку кризу переживав Філіп як художник?"
        },
        "options": [
          "Stvaralačku krizu (Creative crisis)",
          "Financijsku krizu (Financial crisis)",
          "Gubitak vida (Vision loss)",
          "Kvar na zrakoplovu (Airplane breakdown)"
        ],
        "correctAnswer": "Stvaralačku krizu (Creative crisis)"
      },
      {
        "question": {
          "en": "What is the name of Filip's mother?",
          "ru": "Как зовут мать Филипа?",
          "ua": "Як звати матір Філіпа?"
        },
        "options": [
          "Regina",
          "Jelena",
          "Bobočka",
          "Mia"
        ],
        "correctAnswer": "Regina"
      },
      {
        "question": {
          "en": "Which famous landmark with wax candles did Filip pass?",
          "ru": "Мимо какой достопримечательности с восковыми свечами прошел Филип?",
          "ua": "Поздовж якої пам'ятки з восковими свічками пройшов Філіп?"
        },
        "options": [
          "Kamenita vrata",
          "Kula Lotrščak",
          "Pazar",
          "Maksimir"
        ],
        "correctAnswer": "Kamenita vrata"
      },
      {
        "question": {
          "en": "What is the name of the mysterious woman in Kostanjevac?",
          "ru": "Как зовут таинственную женщину в Костаньеваце?",
          "ua": "Як звати таємничу жінку в Костаньєваці?"
        },
        "options": [
          "Bobočka",
          "Ana",
          "Marija",
          "Regina"
        ],
        "correctAnswer": "Bobočka"
      }
    ],
    "translationTasks": [
      {
        "hr": "Poslije jedanaest godina izbivanja iz domovine",
        "answer": {
          "en": "After eleven years of absence from homeland",
          "ru": "После одиннадцати лет отсутствия на родине",
          "ua": "Після одинадцяти років відсутності на батьківщині"
        }
      },
      {
        "hr": "Stvaralačka kriza i sjenke prošlosti",
        "answer": {
          "en": "Creative crisis and shadows of the past",
          "ru": "Творческий кризис и тени прошлого",
          "ua": "Творча криза та тіні минулого"
        }
      }
    ]
  },
  {
    "id": "mali-princ",
    "title": {
      "en": "The Little Prince & The Desert Discovery (Full Chapter 1 & 2)",
      "ru": "Маленький принц и Находка в пустыне (Главы 1 и 2 — Полный текст)",
      "ua": "Маленький принц та Знахідка у пустелі (Розділи 1 та 2 — Повний текст)"
    },
    "author": "Antoine de Saint-Exupéry (Hrvatsko Izdanje)",
    "level": "A2",
    "text": "Kad sam imao šest godina, vidio sam prekrasnu sliku u jednoj knjizi o prašumi koja se zvala \"Zanimljive priče iz prirode\". Na slici je bio ogromni zmijski boa koji je gutao neku veliku divlju životinju. U knjizi je pisalo: \"Zmijski boe gutaju svoj plijen čitav, bez žvakanja. Poslije toga više se ne mogu micati i spavaju šest mjeseci dok ga ne probave.\"\n\nMnogo sam tada razmišljao o pustolovinama u džungli i uspio sam obojenom olovkom nacrtati svoj prvi crtež. Moj crtež broj jedan bio je jednostavan i prikazivao je zatvorenu zmiju boa. Pokazao sam svoje remek-djelo odraslima i upitao ih plaši li ih moj crtež. Odgovorili su mi iznenađeno: \"Zašto bi nas šešir plašio?\" Moj crtež uopće nije prikazivao običan šešir. Prikazivao je velikog zmijskog boa koji je polako probavljao ogromnog afričkog slona. Nacrtao sam tada i crtež broj dva — unutrašnjost zmijskog boa, kako bi odrasli mogli jasno razumjeti. Odraslima uvek treba sve objašnjavati.\n\nOdrasli su mi tada savjetovali da ostavim po strani crteže otvorenih ili zatvorenih zmijskih boa i da se radije posvetim zemljopisu, povijesti, računstvu i gramatici. Tako sam u svojoj šestoj godini napustio sjajnu slikarsku karijeru. Bio sam razočaran potpunim neuspjehom svog prvog i drugog crteža. Odrasli nikada ništa ne razumiju sami od sebe, a za djecu je iznimno zamorno da im uvijek iznova moraju sve objašnjavati i dokazivati.\n\nTako sam morao izabrati drugo zanimanje i naučio sam upravljati zrakoplovima. Letio sam po cijelom svijetu. Zemljopis mi je, to je istina, mnogo pomogao. Umio sam na prvi pogled razlikovati Kinu od Arizone. To je vrlo korisno ako se čovjek noću izgubi u olujnim oblacima. Tijekom svog života imao sam tako mnoštvo dodira s mnoštvom ozbiljnih i važnih ljudi. Živio sam mnogo među odraslima. Vidio sam ih izbliza. To nije mnogo popravilo moje mišljenje o njima.\n\nKada bih sreo nekoga od njih tko mi se činio malo bistrijim i pametnijim, iskušavao sam ga svojim crtežem broj jedan, koji sam uvek brižljivo čuvao u torbi. Želio sam znati je li on zaista shvaća stvari i dublju smisao života. Ali on bi mi uvek odgovorio: \"To je šešir.\" Tada mu više nisam pričao ni o zmijskim boama, ni o prašumama, ni o udaljenim zvijezdama. Spuštao sam se na njegovu razumljivu razinu. Pričao sam mu o bridžu, o golfu, o politici i o elegantnim kravatama. I odrasli bi bio vrlo zadovoljan što je upoznao tako razumnog i ozbiljnog čovjeka.\n\nTako sam živio potpuno sam, bez ikoga s kim bih mogao odista otvoreno razgovarati, sve dok mi se prije šest godina nije dogodio neočekivani kvar u pustinji Sahari. Nešto se bilo slomilo u mom zrakoplovnom motoru. A kako sa sobom nisam imao ni mehaničara ni putnike, spremao sam se da sam pokrenem težak i neizvjestan popravak. Za mene je to bilo pitanje života ili smrti. Imao sam vode za piće jedva za osam dana. Prve sam večeri zaspao na pijesku, tisuću milja daleko od bilo kojeg nastanjenog kraja. Bio sam usamljeniji od brodolomnika na splavi usred oceana. Možete onda zamisliti moje veliko iznenađenje kad me u zoru probudio čudan glas koji je tiho rekao: \"Molim te... nacrtaj mi ovcu!\"\n\nIskočio sam na noge kao da me pogodio grom. Dobro sam protrljao oči. Pogledao sam pažljivo. I vidio sam sasvim neobičnoga malog čovječuljka koji me ozbiljno promatrao. To je bio Mali Princ!",
    "vocabulary": [
      {
        "hr": "prašuma",
        "en": "jungle / rainforest",
        "ru": "джунгли",
        "ua": "джунглі"
      },
      {
        "hr": "plijen",
        "en": "prey",
        "ru": "добыча",
        "ua": "здобич"
      },
      {
        "hr": "probaviti",
        "en": "to digest",
        "ru": "переварить",
        "ua": "перетравити"
      },
      {
        "hr": "remek-djelo",
        "en": "masterpiece",
        "ru": "шедевр",
        "ua": "шедевр"
      },
      {
        "hr": "zrakoplov",
        "en": "airplane",
        "ru": "самолет",
        "ua": "літак"
      },
      {
        "hr": "zamorno",
        "en": "tiring",
        "ru": "утомительно",
        "ua": "втомливо"
      },
      {
        "hr": "pustinja",
        "en": "desert",
        "ru": "пустыня",
        "ua": "пустеля"
      },
      {
        "hr": "brodolomnik",
        "en": "shipwreck survivor",
        "ru": "выживший после кораблекрушения",
        "ua": "потерпілий від трощі"
      }
    ],
    "questions": [
      {
        "question": {
          "en": "What creature was the boa constrictor digesting in drawing number one?",
          "ru": "Какое животное переваривал удав на рисунке номер один?",
          "ua": "Яку тварину перетравлював удав на малюнку номер один?"
        },
        "options": [
          "Afričkog slona (An African elephant)",
          "Lav (A lion)",
          "Konja (A horse)",
          "Ovcu (A sheep)"
        ],
        "correctAnswer": "Afričkog slona (An African elephant)"
      },
      {
        "question": {
          "en": "What strange request woke the narrator up in the Sahara desert at dawn?",
          "ru": "С какой странной просьбой обратился голос на рассвете в пустыне?",
          "ua": "З яким дивним проханням звернувся голос на світанку в пустелі?"
        },
        "options": [
          "Nacrtaj mi ovcu! (Draw me a sheep!)",
          "Daj mi vode! (Give me water!)",
          "Popravi motor! (Fix the engine!)",
          "Pokaži mi kartu! (Show me the map!)"
        ],
        "correctAnswer": "Nacrtaj mi ovcu! (Draw me a sheep!)"
      }
    ],
    "translationTasks": [
      {
        "hr": "Molim te nacrtaj mi ovcu",
        "answer": {
          "en": "Please draw me a sheep",
          "ru": "Пожалуйста нарисуй мне овечку",
          "ua": "Будь ласка намалюй мені овечку"
        }
      }
    ]
  },
  {
    "id": "moja-obitelj-split",
    "title": {
      "en": "Life in Split: Coastal Tradition & Mediterranean Living",
      "ru": "Жизнь в Сплите: Прибрежные традиции и Средиземноморский быт",
      "ua": "Життя у Спліті: Прибережні традиції та Середземноморський побут"
    },
    "author": "Croatia Mentor Coastal Series",
    "level": "A1",
    "text": "Moje ime je Marko i imam dvadeset i osam godina. Rođen sam u hrvatskoj prijestolnici Zagrebu, ali već punih pet godina živim i radim u predivnom obalnom gradu Splitu. Split je drugi po veličini grad u Republici Hrvatskoj, smješten na sunčanoj obali Jadranskog mora podno brda Marjan. Živim u prostranom, svijetlom stanu blizu park-šume Marjan, odakle se pruža čaroban pogled na Dioklecijanovu palaču, gradsku luku i obližnje dalmatinske otoke Brač, Šoltu i Hvar.\n\nMoja obitelj nije velika, ali smo iznimno povezani i puno vremena provodimo zajedno. Moja supruga se zove Jelena i ona radi jako odgovoran posao kao biologinja u Morkom institutu na otoku Čiovu. Izrazito je posvećena istraživanju i zaštiti morskog ekosustava te čistoći našeg plavog Jadrana. Imamo trogodišnju kćer koja se zove Mia. Mia je vesela djevojčica s plavim očima i zlatnom kosom koja obožava igru s našim kućnim ljubimcem — zlatnim retriverom po imenu Rex. Rex je star četiri godine, iznimno je razigran i svako poslijepodne skače u more za lopticom na plaži Kašjuni.\n\nNaš tipičan dalmatinski dan počinje rano ujutro dok se grad tek budi. Oko sedam sati ujutro Jelena i ja pijemo svježe skuhanu crnu kavu na našem sunčanom balkonu dok sunce izlazi iznad moćne planine Biokovo. U Splitu i cijeloj Dalmaciji ritual ispijanja kave nije samo obično piće, već iznimno važan društveni događaj i način života. Ljudi ovdje sate provode na sunčanoj splitskoj Rivi u opuštenom razgovoru s prijateljima i susjedima pod palmama.\n\nKada dođe vikend, obavezno odlazimo u istraživanje prirode i lokalnih običaja. Subotom ujutro posjećujemo poznatu splitsku tržnicu, zvanu Pazar, gdje kupujemo domaće maslinovo ulje, paški sir, smokve i svježe povrće. Odmah pokraj Pazara nalazi se Ribarnica (Peškarija), gdje kupujemo ribu koju su lokalni ribari ulovili u ranim jutarnjim satima. Poslijepodne često obiteljski šetamo stazama Marjana ili se opuštamo na plaži Bačvice. Zimi volimo kuhati tradicionalne dalmatinske specijalitete poput dalmatinske pašticade s njokima ili svježe ribe na žaru obogaćene ružmarinom i maslinovim uljem. Sretni smo što živimo u gradu gdje su priroda, sunce i obitelj uvek na prvom mjestu.",
    "vocabulary": [
      {
        "hr": "obalni grad",
        "en": "coastal city",
        "ru": "прибрежный город",
        "ua": "прибережне місто"
      },
      {
        "hr": "ekosustav",
        "en": "ecosystem",
        "ru": "экосистема",
        "ua": "екосистема"
      },
      {
        "hr": "Ribarnica (Peškarija)",
        "en": "fish market",
        "ru": "рыбный рынок (Пешкария)",
        "ua": "рибний ринок (Пешкарія)"
      },
      {
        "hr": "pašticada",
        "en": "Dalmatian beef stew",
        "ru": "паштицада (далматинское рагу)",
        "ua": "паштіцада (далматинське рагу)"
      }
    ],
    "questions": [
      {
        "question": {
          "en": "What is the name of the famous Split fish market?",
          "ru": "Как называется знаменитый рыбный рынок в Сплите?",
          "ua": "Як називається знаменитий рибний ринок у Спліті?"
        },
        "options": [
          "Peškarija (Fish market)",
          "Pazar",
          "Riva",
          "Marjan"
        ],
        "correctAnswer": "Peškarija (Fish market)"
      }
    ],
    "translationTasks": [
      {
        "hr": "Sunčana obala Jadranskog mora",
        "answer": {
          "en": "Sunny coast of Adriatic sea",
          "ru": "Солнечный берег Адриатического моря",
          "ua": "Сонячний берег Адріатичного моря"
        }
      }
    ]
  },
  {
    "id": "plitvice-nacionalni-park",
    "title": {
      "en": "Plitvice Lakes: The Emerald Jewel of Lika",
      "ru": "Плитвицкие озёра: Изумрудная жемчужина Лики",
      "ua": "Плітвицькі озера: Смарагдова перлина Ліки"
    },
    "author": "Geography & Ecology Series",
    "level": "B1",
    "text": "Nacionalni park Plitvička jezera najstariji je i najveći nacionalni park u Republici Hrvatskoj. Smješten je u gorskom predjelu Lika, između planinskog masiva Male Kapele i Ličke Plješivice. Ovo prirodno čudo proslavljeno je u cijelom svijetu zahvaljujući nizu od šesnaest smaragdno-zelenih i tirkiznih jezera koja se prelijevaju jedno u drugo kroz stotine veličanstvenih slapova i kaskada.\n\nProces nastanka Plitvičkih jezera jedinstven je hidrogeološki fenomen. Jezera su nastala taloženjem sedre, posebne vrste vapnenca koji stvara prirodne brane u vodi. Biljke, mahovine i algama obogaćene mineralima kontinuirano grade nove barijere i mijenjaju izgled slapova kroz stoljeća. Zbog te iznimne prirodne vrijednosti, Plitvička jezera uvrštena su na UNESCO-v popis svjetske prirodne baštine još 1979. godine među prvima u svijetu.\n\nPark obuhvaća površinu od gotovo 300 četvornih kilometara, od čega najveći dio čine guste, netaknute šume bukve, jele i smreke. Ove šume pružaju idealno stanište mnogim rijetkim i zaštićenim životinjskim vrstama. Ovdje u potpunom miru žive smeđi medvjed, vuk, ris, jelen, te više od 150 vrsta ptica.\n\nZa posjetitelje iz svih krajeva svijeta uređeno je više od trideset kilometara drvenih staza koje vode tik iznad bistre vode u kojoj plivaju jata pastrva. Vožnja električnim brodom po najvećem jezeru Kozjak i panoramskim vlakom omogućuje posjetiteljima da dožive ljepotu parka bez zagađivanja okoliša. Plitvice su čarobne u svako doba godine: u proljeće zbog bujne zelene prirode i snažnih slapova, ljeti zbog ugodne svježine, u jesen zbog raskošnih boja šuma, a zimi kada se zaleđeni slapovi pretvore u bajkovite ledene skulpture.",
    "vocabulary": [
      {
        "hr": "taloženje sedre",
        "en": "tufa deposition",
        "ru": "осаждение туфа",
        "ua": "осадження туфу"
      },
      {
        "hr": "vapnenac",
        "en": "limestone",
        "ru": "известняк",
        "ua": "вапняк"
      },
      {
        "hr": "smaragdno-zelena",
        "en": "emerald green",
        "ru": "изумрудно-зеленый",
        "ua": "смарагдово-зелений"
      },
      {
        "hr": "smeđi medvjed",
        "en": "brown bear",
        "ru": "бурый медведь",
        "ua": "бурий ведмідь"
      }
    ],
    "questions": [
      {
        "question": {
          "en": "In which region of Croatia are Plitvice Lakes located?",
          "ru": "В каком регионе Хорватии расположены Плитвицкие озера?",
          "ua": "У якому регіоні Хорватії розташовані Плітвицькі озера?"
        },
        "options": [
          "U Lici (In Lika)",
          "U Dalmaciji (In Dalmatia)",
          "U Slavoniji (In Slavonia)",
          "U Istri (In Istria)"
        ],
        "correctAnswer": "U Lici (In Lika)"
      }
    ],
    "translationTasks": [
      {
        "hr": "Niz od šesnaest smaragdno-zelenih jezera",
        "answer": {
          "en": "A chain of sixteen emerald green lakes",
          "ru": "Серия из шестнадцати изумрудно-зеленых озер",
          "ua": "Низка з шістнадцяти смарагдово-зелених озер"
        }
      }
    ]
  },
  {
    "id": "dubrovnik-republika",
    "title": {
      "en": "Dubrovnik: The Liberty Republic of the Adriatic",
      "ru": "Дубровник: Республика Свободы на Адриатике",
      "ua": "Дубровник: Республіка Свободи на Адріатиці"
    },
    "author": "Adriatic Maritime History",
    "level": "B2",
    "text": "Dubrovnik, biser Jadrana i drevno sjedište slavne Dubrovačke Republike (Respublica Ragusina), predstavlja jedan od najbojim primjerima očuvane srednjovjekovne utvrđene arhitekture u cijeloj Europi. Opasan impozantnim gradskim zidinama dužine gotovo dva kilometra i visine do 25 metara, Dubrovnik stoji neosvojiv nad liticama Jadranskog mora stoljećima.\n\nSlavna povijest Dubrovnika temelji se na mudroj diplomaciji, pomorskoj trgovini i nepokolebljivoj ljubavi prema slobodi. Geslo Dubrovačke Republike urezano u kamenu utvrde Lovrijenac glasi: \"Non bene pro toto libertas venditur auro\" — Sloboda se ne prodaje ni za sve zlato svijeta. Dubrovnik je bio među prvim državama na svijetu koja je još 1416. godine službeno ukinula ropstvo i zabranila trgovinu ljudima.\n\nDubrovačka trgovačka flota u 16. stoljeću bila je među najvećima na svijetu. Dubrovački jedrenjaci, poznati pod nazivom kavački galeoni i karake, plovili su svim morima svijeta, trgujući začinima, svilom, srebrom i soli od Carigrada i Aleksandrije do Londona i Amerike. Grad je iznjedrio velika imena svjetske znanosti i književnosti, poput matematičara i astronoma Ruđera Boškovića te pisca komedija Marina Držića.\n\nDanas je Dubrovnik spomenik pod zaštitom UNESCO-a. Šetnja glavnom ulicom Stradunom, razgledavanje Kneževa dvora, palače Sponza i najstarije ljekarne u Europi unutar Franjevačkog samostana pruža posjetiteljima neponovljiv osjećaj povratka u zlatno doba renesanse i baroka.",
    "vocabulary": [
      {
        "hr": "pomorska trgovina",
        "en": "maritime trade",
        "ru": "морская торговля",
        "ua": "морська торгівля"
      },
      {
        "hr": "libertas (sloboda)",
        "en": "freedom / liberty",
        "ru": "свобода",
        "ua": "свобода"
      },
      {
        "hr": "ukinuti ropstvo",
        "en": "to abolish slavery",
        "ru": "отменить рабство",
        "ua": "скасувати рабство"
      },
      {
        "hr": "Knežev dvor",
        "en": "Rector's Palace",
        "ru": "Княжеский дворец",
        "ua": "Княжий палац"
      }
    ],
    "questions": [
      {
        "question": {
          "en": "In which year did the Republic of Dubrovnik abolish slavery?",
          "ru": "В каком году Дубровницкая республика отменила рабство?",
          "ua": "У якому році Дубровницька республіка скасувала рабство?"
        },
        "options": [
          "1416. godine",
          "1500. godine",
          "1600. godine",
          "1800. godine"
        ],
        "correctAnswer": "1416. godine"
      }
    ],
    "translationTasks": [
      {
        "hr": "Sloboda se ne prodaje ni za sve zlato svijeta",
        "answer": {
          "en": "Freedom is not sold for all the gold in the world",
          "ru": "Свобода не продается ни за все золото мира",
          "ua": "Свобода не продається ні за все золото світу"
        }
      }
    ]
  }
];