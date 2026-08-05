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
    id: "mali-princ",
    title: { en: "The Little Prince & The Desert Discovery", ru: "Маленький принц и Находка в пустыне", ua: "Маленький принц та Знахідка у пустелі" },
    author: "Antoine de Saint-Exupéry (Croatian Edition)",
    level: "A2",
    text: `Kad sam imao šest godina, vidio sam prekrasnu sliku u jednoj knjizi o prašumi. Na slici je bio boa koji je gutao neku veliku divlju životinju. Nacrtao sam svoju prvu sliku olovkom u boji. Pokazao sam svoje remek-djelo odraslima i upitao ih plaši li ih moj crtež. Odgovorili su mi iznenađeno: "Zašto bi nas šešir plašio?" Moj crtež uopće nije prikazivao običan šešir. Prikazivao je velikog zmijskog boa koji je polako probavljao ogromnog afričkog slona.

Odrasli su mi tada savjetovali da ostavim po strani crteže otvorenih ili zatvorenih zmijskih boa i da se radije posvetim zemljopisu, povijesti, računstvu i gramatici. Tako sam u šestoj godini napustio sjajnu slikarsku karijeru. Bio sam razočaran neuspjehom svog prvog crteža i svog drugog crteža. Odrasli nikada ništa ne razumiju sami, a za djecu je zamorno da im uvijek iznova moraju sve objašnjavati.

Tako sam morao izabrati drugo zanimanje i naučio sam upravljati zrakoplovima. Letio sam po cijelom svijetu. Zemljopis mi je, to je istina, mnogo pomogao. Umio sam na prvi pogled razlikovati Kinu od Arizone. To je vrlo korisno ako se čovjek noću izgubi u oblacima.

Tijekom života imao sam tako mnoštvo dodira s mnoštvom ozbiljnih ljudi. Živio sam mnogo kod odraslih. Vidio sam ih izbliza. To nije mnogo popravilo moje mišljenje o njima. Kada bih sreo nekoga od njih tko mi se činio malo bistrijim, iskušavao sam ga svojim crtežem broj jedan, koji sam uvek čuvao. Želio sam znati je li on zaista shvaća stvari. Ali on bi mi uvek odgovorio: "To je šešir." Tada mu više nisam pričao ni o zmijskim boama, ni o prašumama, ni o zvijezdama. Spuštao sam se na njegovu razinu. Pričao sam mu o bridžu, o golfu, o politici i o kravatama. I odrasli bi bio vrlo zadovoljan što je upoznao tako razumnog čovjeka.

Tako sam živio sam, bez ikoga s kim bih mogao odista razgovarati, sve dok mi se prije šest godina nije dogodio kvar u pustinji Sahari. Nešto se bilo slomilo u mom motoru. A kako sa sobom nisam imao ni mehaničara ni putnike, spremao sam se da sam pokrenem težak popravak. Za mene je to bilo pitanje života ili smrti. Imao sam vode za piće jedva za osam dana.`,
    vocabulary: [
      { hr: "prašuma", en: "jungle / rainforest", ru: "джунгли", ua: "джунглі" },
      { hr: "boa", en: "boa constrictor", ru: "удав", ua: "удав" },
      { hr: "gutao", en: "was swallowing", ru: "глотал", ua: "ковтав" },
      { hr: "remek-djelo", en: "masterpiece", ru: "шедевр", ua: "шедевр" },
      { hr: "zemljopis", en: "geography", ru: "география", ua: "географія" },
      { hr: "zrakoplov", en: "airplane", ru: "самолет", ua: "літак" },
      { hr: "razumiju", en: "they understand", ru: "они понимают", ua: "вони розуміють" },
      { hr: "zamorno", en: "tiring / tedious", ru: "утомительно", ua: "снажно / втомливо" },
      { hr: "kvar", en: "breakdown / failure", ru: "поломка", ua: "поломка" },
      { hr: "pustinja", en: "desert", ru: "пустыня", ua: "пустеля" },
      { hr: "popravak", en: "repair / fix", ru: "ремонт", ua: "ремонт" },
      { hr: "vode za piće", en: "drinking water", ru: "питьевая вода", ua: "питна вода" },
    ],
    questions: [
      {
        question: { en: "How old was the narrator when he made his first drawing?", ru: "Сколько лет было рассказчику, когда он сделал свой первый рисунок?", ua: "Скільки років було оповідачу, коли він зробив свій перший малюнок?" },
        options: ["6 godina (6 years)", "8 godina (8 years)", "10 godina (10 years)", "12 godina (12 years)"],
        correctAnswer: "6 godina (6 years)",
      },
      {
        question: { en: "What did the adults see in drawing number one?", ru: "Что взрослые увидели на рисунке номер один?", ua: "Що дорослі побачили на малюнку номер один?" },
        options: ["Šešir (A hat)", "Zmiju boa (A boa snake)", "Slona (An elephant)", "Zrakoplov (An airplane)"],
        correctAnswer: "Šešir (A hat)",
      },
      {
        question: { en: "What career did the narrator choose after giving up painting?", ru: "Какую профессию выбрал рассказчик после отказа от живописи?", ua: "Яку професію обрав оповідач після відмови від живопису?" },
        options: ["Upravljati zrakoplovima (Pilot)", "Profesor zemljopisa (Geography teacher)", "Mehaničar (Mechanic)", "Slikar (Painter)"],
        correctAnswer: "Upravljati zrakoplovima (Pilot)",
      },
      {
        question: { en: "Where did the airplane breakdown happen?", ru: "Где произошла поломка самолета?", ua: "Де сталася поломка літака?" },
        options: ["U pustinji Sahari (In the Sahara desert)", "U Kini (In China)", "U Arizoni (In Arizona)", "Na moru (At sea)"],
        correctAnswer: "U pustinji Sahari (In the Sahara desert)",
      },
      {
        question: { en: "How many days of drinking water did he have left?", ru: "На сколько дней питьевой воды у него оставалось?", ua: "На скільки днів питної води у нього залишалося?" },
        options: ["Jedva za osam dana (Barely 8 days)", "Za tri dana (3 days)", "Za dva tjedna (2 weeks)", "Za mjesec dana (1 month)"],
        correctAnswer: "Jedva za osam dana (Barely 8 days)",
      },
    ],
    translationTasks: [
      { hr: "Odrasli nikada ništa ne razumiju sami", answer: { en: "Adults never understand anything by themselves", ru: "Взрослые никогда ничего не понимают сами", ua: "Дорослі ніколи нічого не розуміють самі" } },
      { hr: "Kvar u pustinji Sahari", answer: { en: "Breakdown in the Sahara desert", ru: "Поломка в пустыне Сахара", ua: "Поломка у пустелі Сахара" } },
      { hr: "Vode za piće jedva za osam dana", answer: { en: "Barely eight days of drinking water left", ru: "Питьевой воды едва на восемь дней", ua: "Питної води заледве на вісім днів" } },
    ],
  },
  {
    id: "moja-obitelj-split",
    title: { en: "Life in Split: Family, Coffee & Dalmatian Sun", ru: "Жизнь в Сплите: Семья, Кофе и Далматинское солнце", ua: "Життя у Спліті: Сім'я, Кава та Далматинське сонце" },
    author: "Croatia Mentor Storyboard",
    level: "A1",
    text: `Moje ime je Marko i imam dvadeset i osam godina. Rođen sam u Zagrebu, ali već pet godina živim i radim u predivnom obalnom gradu Splitu. Split je drugi po veličini grad u Hrvatskoj, smješten na obali Jadranskog mora. Živim u prostranom stanu blizu poznate park-šume Marjan, odakle se pruža čaroban pogled na cijeli grad i obližnje otoke Brač i Šoltu.

Moja obitelj nije velika, ali smo iznimno povezani. Moja supruga se zove Jelena i ona radi kao biologinja u Morkom institutu. Izrazito je posvećena zaštiti morskog okoliša i čistoći našeg mora. Imamo trogodišnju kćer koja se zove Mia. Mia je vesela djevojčica s plavim očima koja obožava igru s našim zlatnim retriverom po imenu Rex. Rex je star četiri godine, jako je razigran i obožava skakati u more za lopticom.

Naš tipičan obiteljski dan počinje rano ujutro. Oko sedam sati pijemo svježe skuhanu crnu kavu na balkonu dok sunce polako izlazi iznad Biokova. U Splitu je ritual ispijanja kave iznimno važan dio svakodnevnog života. Ljudi ovdje sate provode na sunčanoj splitskoj Rivi u ugodnom razgovoru s prijateljima.

Kada dođe vikend, obavezno odlazimo na izlet. Subotom ujutro posjećujemo lokalnu tržnicu, poznatu kao Pazar, gdje kupujemo svježe voće, povrće i ribu koju su ribari ulovili iste noći. Poslijepodne često šetamo stazama Marjana ili se opuštamo na plaži Bačvice. Zimi volimo obiteljski kuhati dalmatinske specijalitete poput brodeta ili ribe na žaru s maslinovim uljem. Sretni smo što živimo u gradu gdje su priroda, sunce i obitelj uvek na prvom mjestu.`,
    vocabulary: [
      { hr: "obalni grad", en: "coastal city", ru: "прибрежный город", ua: "прибережне місто" },
      { hr: "prostran stan", en: "spacious apartment", ru: "просторная квартира", ua: "простора квартира" },
      { hr: "povezani", en: "connected / close", ru: "сплоченные / близкие", ua: "згуртовані / близькі" },
      { hr: "zaštita okoliša", en: "environmental protection", ru: "защита окружающей среды", ua: "захист довкілля" },
      { hr: "razigran", en: "playful", ru: "игривый", ua: "грайливий" },
      { hr: "ispijanje kave", en: "coffee sipping ritual", ru: "ритуал питья кофе", ua: "ритуал пиття кави" },
      { hr: "tržnica (Pazar)", en: "farmers market", ru: "рынок (Пазар)", ua: "ринок (Пазар)" },
      { hr: "ribe na žaru", en: "grilled fish", ru: "рыба на гриле", ua: "риба на грилі" },
    ],
    questions: [
      {
        question: { en: "Where was Marko born?", ru: "Где родился Марко?", ua: "Де народився Марко?" },
        options: ["U Zagrebu (In Zagreb)", "U Splitu (In Split)", "U Zadru (In Zadar)", "U Rijeci (In Rijeka)"],
        correctAnswer: "U Zagrebu (In Zagreb)",
      },
      {
        question: { en: "What is Marko's wife's profession?", ru: "Кем работает жена Марко?", ua: "Ким працює дружина Марко?" },
        options: ["Biologinja (Biologist)", "Učiteljica (Teacher)", "Liječnica (Doctor)", "Kuharica (Cook)"],
        correctAnswer: "Biologinja (Biologist)",
      },
      {
        question: { en: "What is the dog's name and breed?", ru: "Как зовут собаку и какой она породы?", ua: "Як звати собаку та якої вона породи?" },
        options: ["Zlatni retriver Rex (Golden Retriever Rex)", "Njemački ovčar Rex", "Pudlica Mia", "Dalmatinac Rex"],
        correctAnswer: "Zlatni retriver Rex (Golden Retriever Rex)",
      },
      {
        question: { en: "What is the famous Split market called?", ru: "Как называется знаменитый рынок в Сплите?", ua: "Як називається знаменитий ринок у Спліті?" },
        options: ["Pazar", "Dolac", "Riva", "Marjan"],
        correctAnswer: "Pazar",
      },
      {
        question: { en: "Where does the family go on Saturday afternoons?", ru: "Куда семья отправляется в субботу днем?", ua: "Куди сім'я вирушає в суботу вдень?" },
        options: ["Na šetnju po Marjanu ili na plažu (Marjan walk or beach)", "U kinodvoranu (Cinema)", "U Zagreb (To Zagreb)", "Na posao (To work)"],
        correctAnswer: "Na šetnju po Marjanu ili na plažu (Marjan walk or beach)",
      },
    ],
    translationTasks: [
      { hr: "Pet godina živim i radim u predivnom gradu", answer: { en: "For five years I have lived and worked in a beautiful city", ru: "Пять лет я живу и работаю в прекрасном городе", ua: "П'ять років я живу та працюю у чудовому місті" } },
      { hr: "Ispijanje kave je važan dio svakodnevnog života", answer: { en: "Sipping coffee is an important part of daily life", ru: "Питьё кофе — важная часть ежедневной жизни", ua: "Пиття кави — важлива частина щоденного життя" } },
      { hr: "Svježe voće, povrće i riba", answer: { en: "Fresh fruit, vegetables and fish", ru: "Свежие фрукты, овощи и рыба", ua: "Свіжі фрукти, овочі та риба" } },
    ],
  },
  {
    id: "plitvice-nacionalni-park",
    title: { en: "Plitvice Lakes: The Jewel of Croatian Nature", ru: "Плитвицкие озёра: Жемчужина хорватской природы", ua: "Плітвицькі озера: Перлина хорватської природи" },
    author: "Geography & Ecology Series",
    level: "B1",
    text: `Nacionalni park Plitvička jezera najstariji je i najveći nacionalni park u Republici Hrvatskoj. Smješten je u gorskom predjelu Lika, između planinskog masiva Male Kapele i Ličke Plješivice. Ovo prirodno čudo proslavljeno je u cijelom svijetu zahvaljujući nizu od šesnaest smaragdno-zelenih i tirkiznih jezera koja se prelijevaju jedno u drugo kroz stotine veličanstvenih slapova i kaskada.

Proces nastanka Plitvičkih jezera jedinstven je hidrogeološki fenomen. Jezera su nastala taloženjem sedre, posebne vrste vapnenca koji stvara prirodne brane u vodi. Biljke, mahovine i algama obogaćene mineralima kontinuirano grade nove barijere i mijenjaju izgled slapova kroz stoljeća. Zbog te iznimne prirodne vrijednosti, Plitvička jezera uvrštena su na UNESCO-v popis svjetske prirodne baštine još 1979. godine među prvima u svijetu.

Park obuhvaća površinu od gotovo 300 četvornih kilometara, od čega najveći dio čine guste, netaknute šume bukve, jele i smreke. Ove šume pružaju idealno stanište mnogim rijetkim i zaštićenim životinjskim vrstama. Ovdje u potpunom miru žive smeđi medvjed, vuk, ris, jelen, te više od 150 vrsta ptica.

Za posjetitelje iz svih krajeva svijeta uređeno je više od trideset kilometara drvenih staza koje vode tik iznad bistre vode u kojoj plivaju jata pastrva. Vožnja električnim brodom po najvećem jezeru Kozjak i panoramskim vlakom omogućuje posjetiteljima da dožive ljepotu parka bez zagađivanja okoliša. Plitvice su čarobne u svako doba godine: u proljeće zbog bujne zelene prirode i snažnih slapova, ljeti zbog ugodne svježine, u jesen zbog raskošnih boja šuma, a zimi kada se zaleđeni slapovi pretvore u bajkovite ledene skulpture.`,
    vocabulary: [
      { hr: "taloženje sedre", en: "tufa / travertine deposition", ru: "осаждение туфа", ua: "осадження туфу" },
      { hr: "vapnenac", en: "limestone", ru: "известняк", ua: "вапняк" },
      { hr: "smaragdno-zelena", en: "emerald green", ru: "изумрудно-зеленый", ua: "смарагдово-зелений" },
      { hr: "UNESCO baština", en: "UNESCO heritage site", ru: "наследие ЮНЕСКО", ua: "спадщина ЮНЕСКО" },
      { hr: "četvorni kilometar", en: "square kilometer", ru: "квадратный километр", ua: "квадратний кілометр" },
      { hr: "smeđi medvjed", en: "brown bear", ru: "бурый медведь", ua: "бурий ведмідь" },
      { hr: "pastrva", en: "trout fish", ru: "форель", ua: "форель" },
      { hr: "zaleđeni slapovi", en: "frozen waterfalls", ru: "замерзшие водопады", ua: "замерзлі водоспади" },
    ],
    questions: [
      {
        question: { en: "In which region of Croatia are Plitvice Lakes located?", ru: "В каком регионе Хорватии расположены Плитвицкие озера?", ua: "У якому регіоні Хорватії розташовані Плітвицькі озера?" },
        options: ["U Lici (In Lika)", "U Dalmaciji (In Dalmatia)", "U Slavoniji (In Slavonia)", "U Istri (In Istria)"],
        correctAnswer: "U Lici (In Lika)",
      },
      {
        question: { en: "What natural mineral deposition forms the dams?", ru: "Отложение какого минерала образует естественные плотины?", ua: "Відкладення якого мінералу утворює природні греблі?" },
        options: ["Taloženje sedre / vapnenca (Tufa/Limestone)", "Granit (Granite)", "Mramor (Marble)", "Pijesak (Sand)"],
        correctAnswer: "Taloženje sedre / vapnenca (Tufa/Limestone)",
      },
      {
        question: { en: "In which year did UNESCO register the park?", ru: "В каком году ЮНЕСКО внесла парк в список наследия?", ua: "У якому році ЮНЕСКО внесла парк до списку спадщини?" },
        options: ["1979. godine", "1985. godine", "1991. godine", "2000. godine"],
        correctAnswer: "1979. godine",
      },
      {
        question: { en: "What is the largest lake in the park called?", ru: "Как называется самое большое озеро в парке?", ua: "Як називається найбільше озеро в парку?" },
        options: ["Jezero Kozjak", "Prošćansko jezero", "Jezero Bačvice", "Vransko jezero"],
        correctAnswer: "Jezero Kozjak",
      },
      {
        question: { en: "How many bird species inhabit the park forest?", ru: "Сколько видов птиц обитает в лесах парка?", ua: "Скільки видів птахів мешкає в лісах парку?" },
        options: ["Više od 150 vrsta (More than 150 species)", "Oko 50 vrsta", "Preko 500 vrsta", "Točno 20 vrsta"],
        correctAnswer: "Više od 150 vrsta (More than 150 species)",
      },
    ],
    translationTasks: [
      { hr: "Niz od šesnaest smaragdno-zelenih jezera", answer: { en: "A chain of sixteen emerald green lakes", ru: "Серия из шестнадцати изумрудно-зеленых озер", ua: "Низка з шістнадцяти смарагдово-зелених озер" } },
      { hr: "UNESCO-v popis svjetske prirodne baštine", answer: { en: "UNESCO world natural heritage list", ru: "Список всемирного природного наследия ЮНЕСКО", ua: "Список всесвітньої природної спадщини ЮНЕСКО" } },
      { hr: "Zaleđeni slapovi pretvore se u ledene skulpture", answer: { en: "Frozen waterfalls turn into ice sculptures", ru: "Замерзшие водопады превращаются в ледяные скульптуры", ua: "Замерзлі водоспади перетворюються на крижані скульптури" } },
    ],
  },
  {
    id: "zagreb-povijest-kultura",
    title: { en: "Zagreb: Heritage, Legend & Coffee Culture", ru: "Загреб: Наследие, Легенды и Кофейная Культура", ua: "Загреб: Спадщина, Легенди та Кавова Культура" },
    author: "Cultural Heritage Anthology",
    level: "B2",
    text: `Zagreb, glavni grad i najveće urbano središte Republike Hrvatske, smješten je podno južnih padina gore Medvednice te uz obale rijeke Save. Povijesni korijeni grada sežu u daleku 1094. godinu, kada je mađarski kralj Ladislav utemeljio biskupiju na brežuljku Kaptolu. Istovremeno se na susjednom brežuljku razvilo utvrđeno naselje Gradec, koje je 1242. godine Zlatnom bulom kralja Bele IV. proglašeno slobodnim kraljevskim gradom. Stoljetno rivalstvo između crkvenog Kaptola i građanskog Gradeca konačno je okončano u 19. stoljeću spajanjem u jedinstveni grad Zagreb.

Danas je Zagreb grad izražene srednjoeuropske arhitekture, s prepoznatljivim fasadama u stilu neobaroka i secesije. Gornji grad predstavlja povijesno srce prijestolnice. Ovdje se nalazi crkva svetog Marka s raskošnim krovom od šarenih keramičkih pločica koje prikazuju grbove Trojedne Kraljevine Hrvatske, Slavonije i Dalmacije te grb grada Zagreba. Nedaleko se uzdiže kula Lotrščak, s koje svakoga dana točno u podne odjekuje pucanj Gričkog topa — tradicija koja traje još od 1877. godine.

Spustom Kamenitim vratima ili vožnjom najkraćom žičarom na svijetu stiže se u Donji grad, čijim središtem dominira prostrani Trg bana Josipa Jelačića. Donji grad oblikovan je po uzoru na Beč i Peštu, s takozvanom Lenucijevim potkovom — nizom od sedam zelenih perivoja i trgova u obliku slova U, u kojima su smješteni Hrvatsko narodno kazalište, Muzej za umjetnost i obrt te Botanički vrt.

Nadaleko je poznata zagrebačka kultura življenja na otvorenom. Čim grane sunce, gradske terase u Bogovićevoj i Tkalčićevoj ulici ispune se građanima koji satima uživaju u ritualu ispijanja kave i druženju. Tijekom prosinca Zagreb postaje jedna od najtraženijih božićnih destinacija u Europi zahvaljujući višestruko nagrađivanom manifestacijom "Advent u Zagrebu", kada cijeli grad odiše mirisom kuhanog vina, cimeta i tradicionalnih fritula.`,
    vocabulary: [
      { hr: "urbano središte", en: "urban center", ru: "городской центр", ua: "міський центр" },
      { hr: "biskupija", en: "bishopric / diocese", ru: "епископство", ua: "єпископство" },
      { hr: "Zlatna bula", en: "Golden Bull charter", ru: "Золотая булла", ua: "Золота булла" },
      { hr: "rivalstvo", en: "rivalry", ru: "соперничество", ua: "суперництво" },
      { hr: "neobarok i secesija", en: "neo-baroque & art nouveau", ru: "необарокко и модерн", ua: "необароко та модерн" },
      { hr: "Grički top", en: "Grič cannon", ru: "Гричская пушка", ua: "Гричська гармата" },
      { hr: "žičara", en: "funicular / cable car", ru: "фуникулер", ua: "фунікулер" },
      { hr: "Lenucijeva potkova", en: "Lenuci Horseshoe park belt", ru: "Подкова Ленуци", ua: "Підкова Ленуці" },
    ],
    questions: [
      {
        question: { en: "In which year was the bishopric established on Kaptol?", ru: "В каком году было основано епископство на Каптоле?", ua: "У якому році було засновано єпископство на Каптолі?" },
        options: ["1094. godine", "1242. godine", "1877. godine", "1500. godine"],
        correctAnswer: "1094. godine",
      },
      {
        question: { en: "Which document declared Gradec a free royal city in 1242?", ru: "Какой документ объявил Градец свободным королевским городом в 1242 году?", ua: "Який документ оголосив Градець вільним королівським містом у 1242 році?" },
        options: ["Zlatna bula kralja Bele IV.", "Povelja bana Jelačića", "Ustav Kaptola", "Bečki ugovor"],
        correctAnswer: "Zlatna bula kralja Bele IV.",
      },
      {
        question: { en: "What daily tradition happens at noon from Lotrščak tower?", ru: "Какая ежедневная традиция происходит в полдень с башни Лотршчак?", ua: "Яка щоденна традиція відбувається о півдні з вежі Лотршчак?" },
        options: ["Pucanj Gričkog topa (Grič cannon shot)", "Zvuk zvona (Bell sound)", "Zastava se podiže (Flag raising)", "Koncert na trgu (Concert)"],
        correctAnswer: "Pucanj Gričkog topa (Grič cannon shot)",
      },
      {
        question: { en: "What is the green park belt in Lower Town called?", ru: "Как называется зеленый парковый пояс в Нижнем городе?", ua: "Як називається зелений парковий пояс у Нижньому місті?" },
        options: ["Lenucijeva potkova (Lenuci Horseshoe)", "Zagrebački krug", "Marjan šuma", "Maksimir park"],
        correctAnswer: "Lenucijeva potkova (Lenuci Horseshoe)",
      },
      {
        question: { en: "Which award-winning winter event makes Zagreb famous in December?", ru: "Какое отмеченное наградами зимнее событие прославляет Загреб в декабре?", ua: "Яка нагороджена зимова подія прославляє Загреб у грудні?" },
        options: ["Advent u Zagrebu", "Zagrebački karneval", "Ljetne noći", "Festival svjetla"],
        correctAnswer: "Advent u Zagrebu",
      },
    ],
    translationTasks: [
      { hr: "Slobodni kraljevski grad", answer: { en: "Free royal city", ru: "Свободный королевский город", ua: "Вільне королівське місто" } },
      { hr: "Najkraća žičara na svijetu", answer: { en: "The shortest funicular in the world", ru: "Самый короткий фуникулер в мире", ua: "Найкоротший фунікулер у світі" } },
      { hr: "Kultura življenja na otvorenom", answer: { en: "Outdoor living culture", ru: "Культура жизни на открытом воздухе", ua: "Культура життя на відкритому повітрі" } },
    ],
  },
  {
    id: "povratak-filipa",
    title: { en: "Povratak Filipa Latinovicza (Excerpt)", ru: "Возвращение Филипа Латиновича (Отрывок)", ua: "Повернення Філіпа Латиновича (Уривок)" },
    author: "Miroslav Krleža",
    level: "C1",
    text: `Svitalo je kada je Filip stigao na kaptolski kolodvor. Bilo je to sive, blatnjave nedjelje, poslije jedanaest godina izbivanja. Filip se osjećao stranim i dalekim u tom gradu svog djetinjstva. Sve je bilo isto, a opet tako tuđe: miris vlage, stare drvene kapije, sivi zidovi pokriveni prašinom vremena. Osjetio je umor u kostima i neku tešku, neobjašnjivu tjeskobu koja ga je pratila od samog prelaska granice. Vratio se kući, ali osjećaj doma bio je davno izgubljen u magli njegovih europskih lutanja.`,
    vocabulary: [
      { hr: "svitalo je", en: "it was dawning", ru: "светало", ua: "світало" },
      { hr: "izbivanje", en: "absence", ru: "отсутствие", ua: "відсутність" },
      { hr: "tuđe", en: "foreign / alien", ru: "чужое", ua: "чуже" },
      { hr: "vlaga", en: "moisture / humidity", ru: "влага / сырость", ua: "волога / сирість" },
      { hr: "tjeskoba", en: "anxiety / anguish", ru: "тревога / тоска", ua: "тривога / туга" },
      { hr: "lutanje", en: "wandering", ru: "скитание", ua: "блукання" }
    ],
    questions: [
      {
        question: { en: "How many years was Filip absent?", ru: "Сколько лет отсутствовал Филип?", ua: "Скільки років був відсутній Філіп?" },
        options: ["11", "10", "15", "5"],
        correctAnswer: "11",
      },
      {
        question: { en: "What day of the week did he arrive?", ru: "В какой день недели он прибыл?", ua: "У який день тижня він прибув?" },
        options: ["Nedjelja (Sunday)", "Subota (Saturday)", "Petak (Friday)", "Ponedjeljak (Monday)"],
        correctAnswer: "Nedjelja (Sunday)",
      }
    ],
    translationTasks: [
      { hr: "grad svog djetinjstva", answer: { en: "the city of his childhood", ru: "город своего детства", ua: "місто свого дитинства" } },
      { hr: "miris vlage", answer: { en: "the smell of moisture", ru: "запах сырости", ua: "запах вологи" } }
    ]
  }
];
