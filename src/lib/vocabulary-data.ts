export interface VocabWord {
  hr: string;
  en: string;
  ru: string;
  ua: string;
  level: string;
  category: string;
  example?: { hr: string; en: string; ru: string; ua: string };
}

export const vocabularyCategories = [
  "food", "family", "transport", "work", "home", "nature",
  "city", "body", "clothes", "colors", "time", "school",
  "emotions", "sports", "travel",
] as const;

export type VocabCategory = typeof vocabularyCategories[number];

export const categoryLabels: Record<VocabCategory, { en: string; ru: string; ua: string }> = {
  food: { en: "Food & Drinks", ru: "Еда и напитки", ua: "Їжа та напої" },
  family: { en: "Family", ru: "Семья", ua: "Сім'я" },
  transport: { en: "Transport", ru: "Транспорт", ua: "Транспорт" },
  work: { en: "Work & Career", ru: "Работа и карьера", ua: "Робота та кар'єра" },
  home: { en: "Home & House", ru: "Дом и жильё", ua: "Дім та житло" },
  nature: { en: "Nature", ru: "Природа", ua: "Природа" },
  city: { en: "City & Places", ru: "Город и места", ua: "Місто та місця" },
  body: { en: "Body & Health", ru: "Тело и здоровье", ua: "Тіло та здоров'я" },
  clothes: { en: "Clothes", ru: "Одежда", ua: "Одяг" },
  colors: { en: "Colors", ru: "Цвета", ua: "Кольори" },
  time: { en: "Time & Days", ru: "Время и дни", ua: "Час та дні" },
  school: { en: "School & Education", ru: "Школа и образование", ua: "Школа та освіта" },
  emotions: { en: "Emotions", ru: "Эмоции", ua: "Емоції" },
  sports: { en: "Sports & Hobbies", ru: "Спорт и хобби", ua: "Спорт та хобі" },
  travel: { en: "Travel", ru: "Путешествия", ua: "Подорожі" },
};

export const vocabularyWords: VocabWord[] = [
  {
    "hr": "kruh",
    "en": "bread",
    "ru": "хлеб",
    "ua": "хліб",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "mlijeko",
    "en": "milk",
    "ru": "молоко",
    "ua": "молоко",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "voda",
    "en": "water",
    "ru": "вода",
    "ua": "вода",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "kava",
    "en": "coffee",
    "ru": "кофе",
    "ua": "кава",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "čaj",
    "en": "tea",
    "ru": "чай",
    "ua": "чай",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "jabuka",
    "en": "apple",
    "ru": "яблоко",
    "ua": "яблуко",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "meso",
    "en": "meat",
    "ru": "мясо",
    "ua": "м'ясо",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "riba",
    "en": "fish",
    "ru": "рыба",
    "ua": "риба",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "sir",
    "en": "cheese",
    "ru": "сыр",
    "ua": "сир",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "jaje",
    "en": "egg",
    "ru": "яйцо",
    "ua": "яйце",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "sol",
    "en": "salt",
    "ru": "соль",
    "ua": "сіль",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "šećer",
    "en": "sugar",
    "ru": "сахар",
    "ua": "цукор",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "juha",
    "en": "soup",
    "ru": "суп",
    "ua": "суп",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "salata",
    "en": "salad",
    "ru": "салат",
    "ua": "салат",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "voće",
    "en": "fruit",
    "ru": "фрукты",
    "ua": "фрукти",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "povrće",
    "en": "vegetables",
    "ru": "овощи",
    "ua": "овочі",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "ručak",
    "en": "lunch",
    "ru": "обед",
    "ua": "обід",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "večera",
    "en": "dinner",
    "ru": "ужин",
    "ua": "вечеря",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "doručak",
    "en": "breakfast",
    "ru": "завтрак",
    "ua": "сніданок",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "krumpir",
    "en": "potato",
    "ru": "картофель",
    "ua": "картопля",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "mrkva",
    "en": "carrot",
    "ru": "морковь",
    "ua": "морква",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "rajčica",
    "en": "tomato",
    "ru": "помидор",
    "ua": "помідор",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "paprika",
    "en": "pepper",
    "ru": "перец",
    "ua": "перець",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "riža",
    "en": "rice",
    "ru": "рис",
    "ua": "рис",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "luk",
    "en": "onion",
    "ru": "лук",
    "ua": "цибуля",
    "level": "A2",
    "category": "food"
  },
  {
    "hr": "češnjak",
    "en": "garlic",
    "ru": "чеснок",
    "ua": "часник",
    "level": "A2",
    "category": "food"
  },
  {
    "hr": "pivo",
    "en": "beer",
    "ru": "пиво",
    "ua": "пиво",
    "level": "A2",
    "category": "food"
  },
  {
    "hr": "vino",
    "en": "wine",
    "ru": "вино",
    "ua": "вино",
    "level": "A2",
    "category": "food"
  },
  {
    "hr": "kolač",
    "en": "cake",
    "ru": "торт/пирожное",
    "ua": "торт/тістечко",
    "level": "A2",
    "category": "food"
  },
  {
    "hr": "sladoled",
    "en": "ice cream",
    "ru": "мороженое",
    "ua": "морозиво",
    "level": "A2",
    "category": "food"
  },
  {
    "hr": "maslina",
    "en": "olive",
    "ru": "оливка",
    "ua": "оливка",
    "level": "A2",
    "category": "food"
  },
  {
    "hr": "ulje",
    "en": "oil",
    "ru": "масло",
    "ua": "олія",
    "level": "A2",
    "category": "food"
  },
  {
    "hr": "ocat",
    "en": "vinegar",
    "ru": "уксус",
    "ua": "оцет",
    "level": "B1",
    "category": "food"
  },
  {
    "hr": "papar",
    "en": "pepper",
    "ru": "перец (пряность)",
    "ua": "перець (прянощі)",
    "level": "A2",
    "category": "food"
  },
  {
    "hr": "predjelo",
    "en": "appetizer",
    "ru": "закуска",
    "ua": "закуска",
    "level": "B1",
    "category": "food"
  },
  {
    "hr": "glavno jelo",
    "en": "main course",
    "ru": "главное блюдо",
    "ua": "головна страва",
    "level": "B1",
    "category": "food"
  },
  {
    "hr": "desert",
    "en": "dessert",
    "ru": "десерт",
    "ua": "десерт",
    "level": "A2",
    "category": "food"
  },
  {
    "hr": "tjestenina",
    "en": "pasta",
    "ru": "паста",
    "ua": "паста",
    "level": "A2",
    "category": "food"
  },
  {
    "hr": "otac",
    "en": "father",
    "ru": "отец",
    "ua": "батько",
    "level": "A1",
    "category": "family"
  },
  {
    "hr": "majka",
    "en": "mother",
    "ru": "мать",
    "ua": "мати",
    "level": "A1",
    "category": "family"
  },
  {
    "hr": "brat",
    "en": "brother",
    "ru": "брат",
    "ua": "брат",
    "level": "A1",
    "category": "family"
  },
  {
    "hr": "sestra",
    "en": "sister",
    "ru": "сестра",
    "ua": "сестра",
    "level": "A1",
    "category": "family"
  },
  {
    "hr": "sin",
    "en": "son",
    "ru": "сын",
    "ua": "син",
    "level": "A1",
    "category": "family"
  },
  {
    "hr": "kći",
    "en": "daughter",
    "ru": "дочь",
    "ua": "донька",
    "level": "A1",
    "category": "family"
  },
  {
    "hr": "djed",
    "en": "grandfather",
    "ru": "дедушка",
    "ua": "дідусь",
    "level": "A1",
    "category": "family"
  },
  {
    "hr": "baka",
    "en": "grandmother",
    "ru": "бабушка",
    "ua": "бабуся",
    "level": "A1",
    "category": "family"
  },
  {
    "hr": "muž",
    "en": "husband",
    "ru": "муж",
    "ua": "чоловік",
    "level": "A1",
    "category": "family"
  },
  {
    "hr": "žena",
    "en": "wife / woman",
    "ru": "жена/женщина",
    "ua": "дружина/жінка",
    "level": "A1",
    "category": "family"
  },
  {
    "hr": "dijete",
    "en": "child",
    "ru": "ребёнок",
    "ua": "дитина",
    "level": "A1",
    "category": "family"
  },
  {
    "hr": "obitelj",
    "en": "family",
    "ru": "семья",
    "ua": "ім'я",
    "level": "A1",
    "category": "family"
  },
  {
    "hr": "prijatelj",
    "en": "friend",
    "ru": "друг",
    "ua": "друг",
    "level": "A1",
    "category": "family"
  },
  {
    "hr": "roditelji",
    "en": "parents",
    "ru": "родители",
    "ua": "батьки",
    "level": "A1",
    "category": "family"
  },
  {
    "hr": "djeca",
    "en": "children",
    "ru": "дети",
    "ua": "діти",
    "level": "A1",
    "category": "family"
  },
  {
    "hr": "susjed",
    "en": "neighbor",
    "ru": "сосед",
    "ua": "сусід",
    "level": "A2",
    "category": "family"
  },
  {
    "hr": "blizanci",
    "en": "twins",
    "ru": "близнецы",
    "ua": "близнюки",
    "level": "A2",
    "category": "family"
  },
  {
    "hr": "rođak",
    "en": "relative/cousin",
    "ru": "родственник",
    "ua": "родич/двоюрідний брат",
    "level": "A2",
    "category": "family"
  },
  {
    "hr": "nećak",
    "en": "nephew",
    "ru": "племянник",
    "ua": "племінник",
    "level": "B1",
    "category": "family"
  },
  {
    "hr": "nećakinja",
    "en": "niece",
    "ru": "племянница",
    "ua": "племінниця",
    "level": "B1",
    "category": "family"
  },
  {
    "hr": "unuk",
    "en": "grandson",
    "ru": "внук",
    "ua": "онук",
    "level": "A2",
    "category": "family"
  },
  {
    "hr": "unuka",
    "en": "granddaughter",
    "ru": "внучка",
    "ua": "онучка",
    "level": "A2",
    "category": "family"
  },
  {
    "hr": "zet",
    "en": "son-in-law",
    "ru": "зять",
    "ua": "зять",
    "level": "B1",
    "category": "family"
  },
  {
    "hr": "snaha",
    "en": "daughter-in-law",
    "ru": "сноха/невестка",
    "ua": "невістка",
    "level": "B1",
    "category": "family"
  },
  {
    "hr": "kum",
    "en": "godfather / best man",
    "ru": "крёстный / свидетель",
    "ua": "хресний / свідок",
    "level": "A2",
    "category": "family"
  },
  {
    "hr": "kuma",
    "en": "godmother / maid of honor",
    "ru": "крёстная / свидетельница",
    "ua": "хресна / свідок (жінка)",
    "level": "A2",
    "category": "family"
  },
  {
    "hr": "dobar dan",
    "en": "good day",
    "ru": "добрый день",
    "ua": "добрий день",
    "level": "A1",
    "category": "travel"
  },
  {
    "hr": "dobro jutro",
    "en": "good morning",
    "ru": "доброе утро",
    "ua": "доброго ранку",
    "level": "A1",
    "category": "travel"
  },
  {
    "hr": "dobra večer",
    "en": "good evening",
    "ru": "добрый вечер",
    "ua": "добрий вечір",
    "level": "A1",
    "category": "travel"
  },
  {
    "hr": "laku noć",
    "en": "good night",
    "ru": "спокойной ночи",
    "ua": "надобраніч",
    "level": "A1",
    "category": "travel"
  },
  {
    "hr": "bog",
    "en": "hello / bye",
    "ru": "привет / пока",
    "ua": "привіт / па-па",
    "level": "A1",
    "category": "travel"
  },
  {
    "hr": "doviđenja",
    "en": "goodbye",
    "ru": "до свидания",
    "ua": "до побачення",
    "level": "A1",
    "category": "travel"
  },
  {
    "hr": "molim",
    "en": "please",
    "ru": "пожалуйста",
    "ua": "будь ласка",
    "level": "A1",
    "category": "travel"
  },
  {
    "hr": "hvala",
    "en": "thank you",
    "ru": "спасибо",
    "ua": "дякую",
    "level": "A1",
    "category": "travel"
  },
  {
    "hr": "oprostite",
    "en": "excuse me",
    "ru": "извините",
    "ua": "вибачте",
    "level": "A1",
    "category": "travel"
  },
  {
    "hr": "da",
    "en": "yes",
    "ru": "да",
    "ua": "так",
    "level": "A1",
    "category": "travel"
  },
  {
    "hr": "ne",
    "en": "no",
    "ru": "нет",
    "ua": "ні",
    "level": "A1",
    "category": "travel"
  },
  {
    "hr": "biti",
    "en": "to be",
    "ru": "быть",
    "ua": "бути",
    "level": "A1",
    "category": "school"
  },
  {
    "hr": "htjeti",
    "en": "to want",
    "ru": "хотеть",
    "ua": "хотіти",
    "level": "A1",
    "category": "school"
  },
  {
    "hr": "imati",
    "en": "to have",
    "ru": "иметь",
    "ua": "мати",
    "level": "A1",
    "category": "school"
  },
  {
    "hr": "raditi",
    "en": "to work / do",
    "ru": "работать / делать",
    "ua": "працювати / робити",
    "level": "A1",
    "category": "work"
  },
  {
    "hr": "govoriti",
    "en": "to speak",
    "ru": "говорить",
    "ua": "говорити",
    "level": "A1",
    "category": "school"
  },
  {
    "hr": "čitati",
    "en": "to read",
    "ru": "читать",
    "ua": "читати",
    "level": "A1",
    "category": "school"
  },
  {
    "hr": "pisati",
    "en": "to write",
    "ru": "писать",
    "ua": "писати",
    "level": "A1",
    "category": "school"
  },
  {
    "hr": "učiti",
    "en": "to learn / study",
    "ru": "учить",
    "ua": "вчитися",
    "level": "A1",
    "category": "school"
  },
  {
    "hr": "ići",
    "en": "to go",
    "ru": "идти",
    "ua": "йти",
    "level": "A1",
    "category": "transport"
  },
  {
    "hr": "vidjeti",
    "en": "to see",
    "ru": "видеть",
    "ua": "бачити",
    "level": "A1",
    "category": "body"
  },
  {
    "hr": "čuti",
    "en": "to hear",
    "ru": "слышать",
    "ua": "чути",
    "level": "A1",
    "category": "body"
  },
  {
    "hr": "znati",
    "en": "to know",
    "ru": "знать",
    "ua": "знати",
    "level": "A1",
    "category": "school"
  },
  {
    "hr": "misliti",
    "en": "to think",
    "ru": "думать",
    "ua": "думати",
    "level": "A1",
    "category": "emotions"
  },
  {
    "hr": "piti",
    "en": "to drink",
    "ru": "пить",
    "ua": "пити",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "jesti",
    "en": "to eat",
    "ru": "есть",
    "ua": "їсти",
    "level": "A1",
    "category": "food"
  },
  {
    "hr": "kupiti",
    "en": "to buy",
    "ru": "купить",
    "ua": "купити",
    "level": "A1",
    "category": "work"
  },
  {
    "hr": "platiti",
    "en": "to pay",
    "ru": "платить",
    "ua": "платити",
    "level": "A1",
    "category": "work"
  },
  {
    "hr": "živjeti",
    "en": "to live",
    "ru": "жить",
    "ua": "жити",
    "level": "A1",
    "category": "home"
  },
  {
    "hr": "velik",
    "en": "big",
    "ru": "большой",
    "ua": "великий",
    "level": "A1",
    "category": "colors"
  },
  {
    "hr": "malen",
    "en": "small",
    "ru": "маленький",
    "ua": "маленький",
    "level": "A1",
    "category": "colors"
  },
  {
    "hr": "dobar",
    "en": "good",
    "ru": "хороший",
    "ua": "добрий",
    "level": "A1",
    "category": "emotions"
  },
  {
    "hr": "loš",
    "en": "bad",
    "ru": "плохой",
    "ua": "поганий",
    "level": "A1",
    "category": "emotions"
  },
  {
    "hr": "lijep",
    "en": "beautiful",
    "ru": "красивый",
    "ua": "красивий",
    "level": "A1",
    "category": "colors"
  },
  {
    "hr": "nov",
    "en": "new",
    "ru": "новый",
    "ua": "новий",
    "level": "A1",
    "category": "colors"
  },
  {
    "hr": "star",
    "en": "old",
    "ru": "старый",
    "ua": "старий",
    "level": "A1",
    "category": "colors"
  },
  {
    "hr": "topao",
    "en": "warm",
    "ru": "тёплый",
    "ua": "теплий",
    "level": "A1",
    "category": "time"
  },
  {
    "hr": "hladan",
    "en": "cold",
    "ru": "холодный",
    "ua": "холодний",
    "level": "A1",
    "category": "time"
  },
  {
    "hr": "brz",
    "en": "fast",
    "ru": "быстрый",
    "ua": "швидкий",
    "level": "A1",
    "category": "transport"
  },
  {
    "hr": "spor",
    "en": "slow",
    "ru": "медленный",
    "ua": "повільний",
    "level": "A1",
    "category": "transport"
  },
  {
    "hr": "skup",
    "en": "expensive",
    "ru": "дорогой",
    "ua": "дорогий",
    "level": "A1",
    "category": "work"
  },
  {
    "hr": "jeftin",
    "en": "cheap",
    "ru": "дешевый",
    "ua": "дешевий",
    "level": "A1",
    "category": "work"
  },
  {
    "hr": "stan",
    "en": "apartment",
    "ru": "квартира",
    "ua": "квартира",
    "level": "A2",
    "category": "home"
  },
  {
    "hr": "soba",
    "en": "room",
    "ru": "комната",
    "ua": "кімната",
    "level": "A2",
    "category": "home"
  },
  {
    "hr": "vrata",
    "en": "door",
    "ru": "дверь",
    "ua": "двері",
    "level": "A2",
    "category": "home"
  },
  {
    "hr": "prozor",
    "en": "window",
    "ru": "окно",
    "ua": "вікно",
    "level": "A2",
    "category": "home"
  },
  {
    "hr": "stol",
    "en": "table",
    "ru": "стол",
    "ua": "стіл",
    "level": "A2",
    "category": "home"
  },
  {
    "hr": "stolica",
    "en": "chair",
    "ru": "стул",
    "ua": "стілець",
    "level": "A2",
    "category": "home"
  },
  {
    "hr": "krevet",
    "en": "bed",
    "ru": "кровать",
    "ua": "ліжко",
    "level": "A2",
    "category": "home"
  },
  {
    "hr": "ključ",
    "en": "key",
    "ru": "ключ",
    "ua": "ключ",
    "level": "A2",
    "category": "home"
  },
  {
    "hr": "svjetlo",
    "en": "light",
    "ru": "свет",
    "ua": "світло",
    "level": "A2",
    "category": "home"
  },
  {
    "hr": "ulica",
    "en": "street",
    "ru": "улица",
    "ua": "вулиця",
    "level": "A2",
    "category": "city"
  },
  {
    "hr": "cesta",
    "en": "road",
    "ru": "дорога",
    "ua": "дорога",
    "level": "A2",
    "category": "city"
  },
  {
    "hr": "trgovina",
    "en": "store / shop",
    "ru": "магазин",
    "ua": "магазин",
    "level": "A2",
    "category": "city"
  },
  {
    "hr": "restoran",
    "en": "restaurant",
    "ru": "ресторан",
    "ua": "ресторан",
    "level": "A2",
    "category": "food"
  },
  {
    "hr": "kino",
    "en": "cinema",
    "ru": "кино",
    "ua": "кіно",
    "level": "A2",
    "category": "city"
  },
  {
    "hr": "bolnica",
    "en": "hospital",
    "ru": "больница",
    "ua": "лікарня",
    "level": "A2",
    "category": "body"
  },
  {
    "hr": "škola",
    "en": "school",
    "ru": "школа",
    "ua": "школа",
    "level": "A2",
    "category": "school"
  },
  {
    "hr": "crkva",
    "en": "church",
    "ru": "церковь",
    "ua": "церква",
    "level": "A2",
    "category": "city"
  },
  {
    "hr": "grad",
    "en": "city",
    "ru": "город",
    "ua": "місто",
    "level": "A2",
    "category": "city"
  },
  {
    "hr": "selo",
    "en": "village",
    "ru": "деревня",
    "ua": "село",
    "level": "A2",
    "category": "city"
  },
  {
    "hr": "država",
    "en": "country / state",
    "ru": "страна",
    "ua": "країна",
    "level": "A2",
    "category": "city"
  },
  {
    "hr": "granica",
    "en": "border",
    "ru": "граница",
    "ua": "кордон",
    "level": "B1",
    "category": "travel"
  },
  {
    "hr": "pas",
    "en": "dog",
    "ru": "собака",
    "ua": "собака",
    "level": "A1",
    "category": "nature"
  },
  {
    "hr": "mačka",
    "en": "cat",
    "ru": "кошка",
    "ua": "кішка",
    "level": "A1",
    "category": "nature"
  },
  {
    "hr": "konj",
    "en": "horse",
    "ru": "лошадь",
    "ua": "кінь",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "krava",
    "en": "cow",
    "ru": "корова",
    "ua": "корова",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "ovca",
    "en": "sheep",
    "ru": "овца",
    "ua": "вівця",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "ptica",
    "en": "bird",
    "ru": "птица",
    "ua": "птах",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "medvjed",
    "en": "bear",
    "ru": "медведь",
    "ua": "ведмідь",
    "level": "B1",
    "category": "nature"
  },
  {
    "hr": "vuk",
    "en": "wolf",
    "ru": "волк",
    "ua": "вовк",
    "level": "B1",
    "category": "nature"
  },
  {
    "hr": "lisica",
    "en": "fox",
    "ru": "лиса",
    "ua": "лисиця",
    "level": "B1",
    "category": "nature"
  },
  {
    "hr": "zec",
    "en": "rabbit",
    "ru": "заяц",
    "ua": "заєць",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "slon",
    "en": "elephant",
    "ru": "слон",
    "ua": "слон",
    "level": "B1",
    "category": "nature"
  },
  {
    "hr": "lav",
    "en": "lion",
    "ru": "лев",
    "ua": "лев",
    "level": "B1",
    "category": "nature"
  },
  {
    "hr": "tigar",
    "en": "tiger",
    "ru": "тигр",
    "ua": "тигр",
    "level": "B1",
    "category": "nature"
  },
  {
    "hr": "majmun",
    "en": "monkey",
    "ru": "обезьяна",
    "ua": "мавпа",
    "level": "B1",
    "category": "nature"
  },
  {
    "hr": "zmija",
    "en": "snake",
    "ru": "змея",
    "ua": "змія",
    "level": "B1",
    "category": "nature"
  },
  {
    "hr": "miš",
    "en": "mouse",
    "ru": "мышь",
    "ua": "миша",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "liječnik",
    "en": "doctor",
    "ru": "врач",
    "ua": "лікар",
    "level": "A2",
    "category": "work"
  },
  {
    "hr": "medicinska sestra",
    "en": "nurse",
    "ru": "медсестра",
    "ua": "медсестра",
    "level": "A2",
    "category": "work"
  },
  {
    "hr": "učitelj",
    "en": "teacher",
    "ru": "учитель",
    "ua": "вчитель",
    "level": "A2",
    "category": "work"
  },
  {
    "hr": "profesor",
    "en": "professor",
    "ru": "профессор",
    "ua": "професор",
    "level": "A2",
    "category": "work"
  },
  {
    "hr": "inženjer",
    "en": "engineer",
    "ru": "инженер",
    "ua": "інженер",
    "level": "B1",
    "category": "work"
  },
  {
    "hr": "programer",
    "en": "programmer",
    "ru": "программист",
    "ua": "програміст",
    "level": "B1",
    "category": "work"
  },
  {
    "hr": "odvjetnik",
    "en": "lawyer",
    "ru": "юрист",
    "ua": "юрист",
    "level": "B1",
    "category": "work"
  },
  {
    "hr": "policajac",
    "en": "police officer",
    "ru": "полицейский",
    "ua": "поліцейський",
    "level": "A2",
    "category": "work"
  },
  {
    "hr": "vatrogasac",
    "en": "firefighter",
    "ru": "пожарный",
    "ua": "пожежник",
    "level": "B1",
    "category": "work"
  },
  {
    "hr": "kuhar",
    "en": "cook / chef",
    "ru": "повар",
    "ua": "кухар",
    "level": "A2",
    "category": "work"
  },
  {
    "hr": "konobar",
    "en": "waiter",
    "ru": "официант",
    "ua": "офіціант",
    "level": "A2",
    "category": "work"
  },
  {
    "hr": "vozač",
    "en": "driver",
    "ru": "водитель",
    "ua": "водій",
    "level": "A2",
    "category": "work"
  },
  {
    "hr": "prodavač",
    "en": "salesperson",
    "ru": "продавец",
    "ua": "продавець",
    "level": "A2",
    "category": "work"
  },
  {
    "hr": "pisac",
    "en": "writer",
    "ru": "писатель",
    "ua": "письменник",
    "level": "B1",
    "category": "work"
  },
  {
    "hr": "slikar",
    "en": "painter",
    "ru": "художник",
    "ua": "художник",
    "level": "B1",
    "category": "work"
  },
  {
    "hr": "glumac",
    "en": "actor",
    "ru": "актер",
    "ua": "актор",
    "level": "B1",
    "category": "work"
  },
  {
    "hr": "pjevač",
    "en": "singer",
    "ru": "певец",
    "ua": "співак",
    "level": "B1",
    "category": "work"
  },
  {
    "hr": "novinar",
    "en": "journalist",
    "ru": "журналист",
    "ua": "журналіст",
    "level": "B1",
    "category": "work"
  },
  {
    "hr": "odgovornost",
    "en": "responsibility",
    "ru": "ответственность",
    "ua": "відповідальність",
    "level": "C1",
    "category": "work"
  },
  {
    "hr": "razvoj",
    "en": "development",
    "ru": "развитие",
    "ua": "розвиток",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "iskustvo",
    "en": "experience",
    "ru": "опыт",
    "ua": "досвід",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "znanje",
    "en": "knowledge",
    "ru": "знания",
    "ua": "знання",
    "level": "B1",
    "category": "school"
  },
  {
    "hr": "sposobnost",
    "en": "ability / skill",
    "ru": "способность",
    "ua": "здібність",
    "level": "C1",
    "category": "work"
  },
  {
    "hr": "cilj",
    "en": "goal / target",
    "ru": "цель",
    "ua": "ціль",
    "level": "B1",
    "category": "work"
  },
  {
    "hr": "uspjeh",
    "en": "success",
    "ru": "успех",
    "ua": "успіх",
    "level": "B1",
    "category": "work"
  },
  {
    "hr": "pokušaj",
    "en": "attempt",
    "ru": "попытка",
    "ua": "спроба",
    "level": "B2",
    "category": "school"
  },
  {
    "hr": "odluka",
    "en": "decision",
    "ru": "решение",
    "ua": "рішення",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "promjena",
    "en": "change",
    "ru": "изменение",
    "ua": "зміна",
    "level": "B1",
    "category": "time"
  },
  {
    "hr": "utjecaj",
    "en": "influence",
    "ru": "влияние",
    "ua": "вплив",
    "level": "C1",
    "category": "work"
  },
  {
    "hr": "odnos",
    "en": "relationship",
    "ru": "отношение",
    "ua": "відносини",
    "level": "B2",
    "category": "family"
  },
  {
    "hr": "suradnja",
    "en": "cooperation",
    "ru": "сотрудничество",
    "ua": "співпраця",
    "level": "C1",
    "category": "work"
  },
  {
    "hr": "povjerenje",
    "en": "trust",
    "ru": "доверие",
    "ua": "довіра",
    "level": "C1",
    "category": "emotions"
  },
  {
    "hr": "sigurnost",
    "en": "security / safety",
    "ru": "безопасность",
    "ua": "безпека",
    "level": "B2",
    "category": "city"
  },
  {
    "hr": "opasnost",
    "en": "danger",
    "ru": "опасность",
    "ua": "небезпека",
    "level": "B1",
    "category": "city"
  },
  {
    "hr": "prilika",
    "en": "opportunity",
    "ru": "возможность",
    "ua": "можливість",
    "level": "B1",
    "category": "work"
  },
  {
    "hr": "izazov",
    "en": "challenge",
    "ru": "вызов",
    "ua": "виклик",
    "level": "C1",
    "category": "work"
  },
  {
    "hr": "rješenje",
    "en": "solution",
    "ru": "решение",
    "ua": "рішення",
    "level": "B2",
    "category": "school"
  },
  {
    "hr": "istraživanje",
    "en": "research",
    "ru": "исследование",
    "ua": "дослідження",
    "level": "C1",
    "category": "school"
  },
  {
    "hr": "otkriće",
    "en": "discovery",
    "ru": "открытие",
    "ua": "відкриття",
    "level": "C2",
    "category": "school"
  },
  {
    "hr": "raznolikost",
    "en": "diversity",
    "ru": "разнообразие",
    "ua": "різноманітність",
    "level": "C2",
    "category": "society"
  },
  {
    "hr": "jednakost",
    "en": "equality",
    "ru": "равенство",
    "ua": "рівність",
    "level": "C1",
    "category": "society"
  },
  {
    "hr": "pravda",
    "en": "justice",
    "ru": "справедливость",
    "ua": "справедливість",
    "level": "B2",
    "category": "society"
  },
  {
    "hr": "nasilje",
    "en": "violence",
    "ru": "насилие",
    "ua": "насилие",
    "level": "C1",
    "category": "society"
  },
  {
    "hr": "sukob",
    "en": "conflict",
    "ru": "конфликт",
    "ua": "конфлікт",
    "level": "C1",
    "category": "society"
  },
  {
    "hr": "pregovori",
    "en": "negotiations",
    "ru": "переговоры",
    "ua": "переговори",
    "level": "C2",
    "category": "work"
  },
  {
    "hr": "sporazum",
    "en": "agreement / treaty",
    "ru": "соглашение",
    "ua": "угода",
    "level": "C1",
    "category": "work"
  },
  {
    "hr": "ustav",
    "en": "constitution",
    "ru": "конституция",
    "ua": "конституція",
    "level": "C2",
    "category": "society"
  },
  {
    "hr": "zakonodavstvo",
    "en": "legislation",
    "ru": "законодательство",
    "ua": "законодавство",
    "level": "C2",
    "category": "society"
  },
  {
    "hr": "vlast",
    "en": "power / authority",
    "ru": "власть",
    "ua": "влада",
    "level": "B2",
    "category": "society"
  },
  {
    "hr": "vlada",
    "en": "government",
    "ru": "правительство",
    "ua": "уряд",
    "level": "B2",
    "category": "society"
  },
  {
    "hr": "predsjednik",
    "en": "president",
    "ru": "президент",
    "ua": "президент",
    "level": "A2",
    "category": "society"
  },
  {
    "hr": "izbori",
    "en": "elections",
    "ru": "выборы",
    "ua": "вибори",
    "level": "B2",
    "category": "society"
  },
  {
    "hr": "glasanje",
    "en": "voting",
    "ru": "голосование",
    "ua": "голосування",
    "level": "C1",
    "category": "society"
  },
  {
    "hr": "stranka",
    "en": "party (political)",
    "ru": "партия",
    "ua": "партія",
    "level": "B2",
    "category": "society"
  },
  {
    "hr": "javnost",
    "en": "public",
    "ru": "общественность",
    "ua": "громадськість",
    "level": "C1",
    "category": "society"
  },
  {
    "hr": "mediji",
    "en": "media",
    "ru": "медиа/СМИ",
    "ua": "медіа/ЗМІ",
    "level": "B1",
    "category": "society"
  },
  {
    "hr": "vijest",
    "en": "news",
    "ru": "новость",
    "ua": "новина",
    "level": "A2",
    "category": "society"
  },
  {
    "hr": "siječanj",
    "en": "January",
    "ru": "январь",
    "ua": "січень",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "veljača",
    "en": "February",
    "ru": "февраль",
    "ua": "лютий",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "ožujak",
    "en": "March",
    "ru": "март",
    "ua": "березень",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "travanj",
    "en": "April",
    "ru": "апрель",
    "ua": "квітень",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "svibanj",
    "en": "May",
    "ru": "май",
    "ua": "травень",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "lipanj",
    "en": "June",
    "ru": "июнь",
    "ua": "червень",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "srpanj",
    "en": "July",
    "ru": "июль",
    "ua": "липень",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "kolovoz",
    "en": "August",
    "ru": "август",
    "ua": "серпень",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "rujan",
    "en": "September",
    "ru": "сентябрь",
    "ua": "вересень",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "listopad",
    "en": "October",
    "ru": "октябрь",
    "ua": "жовтень",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "studeni",
    "en": "November",
    "ru": "ноябрь",
    "ua": "листопад",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "prosinac",
    "en": "December",
    "ru": "декабрь",
    "ua": "грудень",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "jedan",
    "en": "one",
    "ru": "один",
    "ua": "один",
    "level": "A1",
    "category": "time"
  },
  {
    "hr": "dva",
    "en": "two",
    "ru": "два",
    "ua": "два",
    "level": "A1",
    "category": "time"
  },
  {
    "hr": "tri",
    "en": "three",
    "ru": "три",
    "ua": "три",
    "level": "A1",
    "category": "time"
  },
  {
    "hr": "četiri",
    "en": "four",
    "ru": "четыре",
    "ua": "чотири",
    "level": "A1",
    "category": "time"
  },
  {
    "hr": "pet",
    "en": "five",
    "ru": "пять",
    "ua": "п'ять",
    "level": "A1",
    "category": "time"
  },
  {
    "hr": "šest",
    "en": "six",
    "ru": "шесть",
    "ua": "шість",
    "level": "A1",
    "category": "time"
  },
  {
    "hr": "sedam",
    "en": "seven",
    "ru": "семь",
    "ua": "сім",
    "level": "A1",
    "category": "time"
  },
  {
    "hr": "osam",
    "en": "eight",
    "ru": "восемь",
    "ua": "вісім",
    "level": "A1",
    "category": "time"
  },
  {
    "hr": "devet",
    "en": "nine",
    "ru": "девять",
    "ua": "дев'ять",
    "level": "A1",
    "category": "time"
  },
  {
    "hr": "deset",
    "en": "ten",
    "ru": "десять",
    "ua": "десять",
    "level": "A1",
    "category": "time"
  },
  {
    "hr": "jedanaest",
    "en": "eleven",
    "ru": "одиннадцать",
    "ua": "одинадцять",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "dvanaest",
    "en": "twelve",
    "ru": "двенадцать",
    "ua": "дванадцять",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "trinaest",
    "en": "thirteen",
    "ru": "тринадцать",
    "ua": "тринадцять",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "četrnaest",
    "en": "fourteen",
    "ru": "четырнадцать",
    "ua": "чотирнадцять",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "petnaest",
    "en": "fifteen",
    "ru": "пятнадцать",
    "ua": "п'ятнадцять",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "šesnaest",
    "en": "sixteen",
    "ru": "шестнадцать",
    "ua": "шістнадцять",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "sedamnaest",
    "en": "seventeen",
    "ru": "семнадцать",
    "ua": "сімнадцять",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "osamnaest",
    "en": "eighteen",
    "ru": "восемнадцать",
    "ua": "вісімнадцять",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "devetnaest",
    "en": "nineteen",
    "ru": "девятнадцать",
    "ua": "дев'ятнадцять",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "dvadeset",
    "en": "twenty",
    "ru": "двадцать",
    "ua": "двадцять",
    "level": "A1",
    "category": "time"
  },
  {
    "hr": "trideset",
    "en": "thirty",
    "ru": "тридцать",
    "ua": "тридцять",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "četrdeset",
    "en": "forty",
    "ru": "сорок",
    "ua": "сорок",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "pedeset",
    "en": "fifty",
    "ru": "пятьдесят",
    "ua": "п'ятдесят",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "šezdeset",
    "en": "sixty",
    "ru": "шестьдесят",
    "ua": "шістдесят",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "sedamdeset",
    "en": "seventy",
    "ru": "семьдесят",
    "ua": "сімдесят",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "osamdeset",
    "en": "eighty",
    "ru": "восемьдесят",
    "ua": "вісімдесят",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "devedeset",
    "en": "ninety",
    "ru": "девяносто",
    "ua": "дев'яносто",
    "level": "A2",
    "category": "time"
  },
  {
    "hr": "sto",
    "en": "one hundred",
    "ru": "сто",
    "ua": "сто",
    "level": "A1",
    "category": "time"
  },
  {
    "hr": "tanjur",
    "en": "plate",
    "ru": "тарелка",
    "ua": "тарілка",
    "level": "A2",
    "category": "home"
  },
  {
    "hr": "čaša",
    "en": "glass",
    "ru": "стакан",
    "ua": "склянка",
    "level": "A1",
    "category": "home"
  },
  {
    "hr": "šalica",
    "en": "cup",
    "ru": "чашка",
    "ua": "чашка",
    "level": "A1",
    "category": "home"
  },
  {
    "hr": "žlica",
    "en": "spoon",
    "ru": "ложка",
    "ua": "ложка",
    "level": "A2",
    "category": "home"
  },
  {
    "hr": "vilica",
    "en": "fork",
    "ru": "вилка",
    "ua": "виделка",
    "level": "A2",
    "category": "home"
  },
  {
    "hr": "nož",
    "en": "knife",
    "ru": "нож",
    "ua": "ніж",
    "level": "A2",
    "category": "home"
  },
  {
    "hr": "tava",
    "en": "pan",
    "ru": "сковорода",
    "ua": "сковорода",
    "level": "B1",
    "category": "home"
  },
  {
    "hr": "lonac",
    "en": "pot",
    "ru": "кастрюля",
    "ua": "каструля",
    "level": "B1",
    "category": "home"
  },
  {
    "hr": "pećnica",
    "en": "oven",
    "ru": "духовка",
    "ua": "духовка",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "hladnjak",
    "en": "refrigerator",
    "ru": "холодильник",
    "ua": "холодильник",
    "level": "A2",
    "category": "home"
  },
  {
    "hr": "kiša",
    "en": "rain",
    "ru": "дождь",
    "ua": "дощ",
    "level": "A1",
    "category": "nature"
  },
  {
    "hr": "snijeg",
    "en": "snow",
    "ru": "снег",
    "ua": "сніг",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "grom",
    "en": "thunder",
    "ru": "гром",
    "ua": "грім",
    "level": "B1",
    "category": "nature"
  },
  {
    "hr": "magla",
    "en": "fog",
    "ru": "туман",
    "ua": "туман",
    "level": "B1",
    "category": "nature"
  },
  {
    "hr": "oluja",
    "en": "storm",
    "ru": "буря/шторм",
    "ua": "буря/шторм",
    "level": "B2",
    "category": "nature"
  },
  {
    "hr": "vlaga",
    "en": "humidity",
    "ru": "влажность",
    "ua": "вологість",
    "level": "C1",
    "category": "nature"
  },
  {
    "hr": "suša",
    "en": "drought",
    "ru": "засуха",
    "ua": "посуха",
    "level": "C1",
    "category": "nature"
  },
  {
    "hr": "vrućina",
    "en": "heat",
    "ru": "жара",
    "ua": "спека",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "mraz",
    "en": "frost",
    "ru": "мороз",
    "ua": "мороз",
    "level": "B1",
    "category": "nature"
  },
  {
    "hr": "papir",
    "en": "paper",
    "ru": "бумага",
    "ua": "папір",
    "level": "A1",
    "category": "school"
  },
  {
    "hr": "kemijska olovka",
    "en": "pen",
    "ru": "ручка",
    "ua": "ручка",
    "level": "A1",
    "category": "school"
  },
  {
    "hr": "fascikl",
    "en": "folder",
    "ru": "папка",
    "ua": "папка",
    "level": "B1",
    "category": "school"
  },
  {
    "hr": "računalo",
    "en": "computer",
    "ru": "компьютер",
    "ua": "комп'ютер",
    "level": "A1",
    "category": "school"
  },
  {
    "hr": "tipkovnica",
    "en": "keyboard",
    "ru": "клавиатура",
    "ua": "клавіатура",
    "level": "A2",
    "category": "school"
  },
  {
    "hr": "miš (računalni)",
    "en": "mouse (computer)",
    "ru": "мышь (компьютерная)",
    "ua": "миша (комп'ютерна)",
    "level": "A2",
    "category": "school"
  },
  {
    "hr": "zaslon",
    "en": "screen / monitor",
    "ru": "экран",
    "ua": "екран",
    "level": "B1",
    "category": "school"
  },
  {
    "hr": "pisač",
    "en": "printer",
    "ru": "принтер",
    "ua": "принтер",
    "level": "B1",
    "category": "school"
  },
  {
    "hr": "ljepilo",
    "en": "glue",
    "ru": "клей",
    "ua": "клей",
    "level": "A2",
    "category": "school"
  },
  {
    "hr": "škare",
    "en": "scissors",
    "ru": "ножницы",
    "ua": "ножиці",
    "level": "A2",
    "category": "school"
  },
  {
    "hr": "pro-trčati",
    "en": "through / completely to run",
    "ru": "про-бежать",
    "ua": "про-бігти",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "od-trčati",
    "en": "away / off to run",
    "ru": "от-бежать",
    "ua": "від-бігти",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "u-trčati",
    "en": "in / into to run",
    "ru": "в-бежать",
    "ua": "в-бігти",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "iz-trčati",
    "en": "out / completely to run",
    "ru": "вы-бежать",
    "ua": "ви-бігти",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "na-trčati",
    "en": "on / prefix perfective to run",
    "ru": "на-бежать",
    "ua": "на-бігти",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "po-trčati",
    "en": "start / perfective to run",
    "ru": "по-бежать",
    "ua": "по-бігти",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "pre-trčati",
    "en": "over / re- to run",
    "ru": "пере-бежать",
    "ua": "пере-бігти",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "pro-plivati",
    "en": "through / completely to swim",
    "ru": "про-плавать",
    "ua": "про-плавати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "od-plivati",
    "en": "away / off to swim",
    "ru": "от-плавать",
    "ua": "від-плавати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "u-plivati",
    "en": "in / into to swim",
    "ru": "в-плавать",
    "ua": "в-плавати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "iz-plivati",
    "en": "out / completely to swim",
    "ru": "вы-плавать",
    "ua": "ви-плавати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "na-plivati",
    "en": "on / prefix perfective to swim",
    "ru": "на-плавать",
    "ua": "на-плавати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "po-plivati",
    "en": "start / perfective to swim",
    "ru": "по-плавать",
    "ua": "по-плавати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "pre-plivati",
    "en": "over / re- to swim",
    "ru": "пере-плавать",
    "ua": "пере-плавати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "pro-skočiti",
    "en": "through / completely to jump",
    "ru": "про-прыгнуть",
    "ua": "про-стрибнути",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "od-skočiti",
    "en": "away / off to jump",
    "ru": "от-прыгнуть",
    "ua": "від-стрибнути",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "u-skočiti",
    "en": "in / into to jump",
    "ru": "в-прыгнуть",
    "ua": "в-стрибнути",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "iz-skočiti",
    "en": "out / completely to jump",
    "ru": "вы-прыгнуть",
    "ua": "ви-стрибнути",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "na-skočiti",
    "en": "on / prefix perfective to jump",
    "ru": "на-прыгнуть",
    "ua": "на-стрибнути",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "po-skočiti",
    "en": "start / perfective to jump",
    "ru": "по-прыгнуть",
    "ua": "по-стрибнути",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "pre-skočiti",
    "en": "over / re- to jump",
    "ru": "пере-прыгнуть",
    "ua": "пере-стрибнути",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "pro-pjevati",
    "en": "through / completely to sing",
    "ru": "про-петь",
    "ua": "про-співати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "od-pjevati",
    "en": "away / off to sing",
    "ru": "от-петь",
    "ua": "від-співати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "u-pjevati",
    "en": "in / into to sing",
    "ru": "в-петь",
    "ua": "в-співати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "iz-pjevati",
    "en": "out / completely to sing",
    "ru": "вы-петь",
    "ua": "ви-співати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "na-pjevati",
    "en": "on / prefix perfective to sing",
    "ru": "на-петь",
    "ua": "на-співати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "po-pjevati",
    "en": "start / perfective to sing",
    "ru": "по-петь",
    "ua": "по-співати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "pre-pjevati",
    "en": "over / re- to sing",
    "ru": "пере-петь",
    "ua": "пере-співати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "pro-plesati",
    "en": "through / completely to dance",
    "ru": "про-танцевать",
    "ua": "про-танцювати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "od-plesati",
    "en": "away / off to dance",
    "ru": "от-танцевать",
    "ua": "від-танцювати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "u-plesati",
    "en": "in / into to dance",
    "ru": "в-танцевать",
    "ua": "в-танцювати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "iz-plesati",
    "en": "out / completely to dance",
    "ru": "вы-танцевать",
    "ua": "ви-танцювати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "na-plesati",
    "en": "on / prefix perfective to dance",
    "ru": "на-танцевать",
    "ua": "на-танцювати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "po-plesati",
    "en": "start / perfective to dance",
    "ru": "по-танцевать",
    "ua": "по-танцювати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "pre-plesati",
    "en": "over / re- to dance",
    "ru": "пере-танцевать",
    "ua": "пере-танцювати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "pro-smijati se",
    "en": "through / completely to laugh",
    "ru": "про-смеяться",
    "ua": "про-сміятися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "od-smijati se",
    "en": "away / off to laugh",
    "ru": "от-смеяться",
    "ua": "від-сміятися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "u-smijati se",
    "en": "in / into to laugh",
    "ru": "в-смеяться",
    "ua": "в-сміятися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "iz-smijati se",
    "en": "out / completely to laugh",
    "ru": "вы-смеяться",
    "ua": "ви-сміятися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "na-smijati se",
    "en": "on / prefix perfective to laugh",
    "ru": "на-смеяться",
    "ua": "на-сміятися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "po-smijati se",
    "en": "start / perfective to laugh",
    "ru": "по-смеяться",
    "ua": "по-сміятися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "pre-smijati se",
    "en": "over / re- to laugh",
    "ru": "пере-смеяться",
    "ua": "пере-сміятися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "pro-plakati",
    "en": "through / completely to cry",
    "ru": "про-плакать",
    "ua": "про-плакати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "od-plakati",
    "en": "away / off to cry",
    "ru": "от-плакать",
    "ua": "від-плакати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "u-plakati",
    "en": "in / into to cry",
    "ru": "в-плакать",
    "ua": "в-плакати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "iz-plakati",
    "en": "out / completely to cry",
    "ru": "вы-плакать",
    "ua": "ви-плакати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "na-plakati",
    "en": "on / prefix perfective to cry",
    "ru": "на-плакать",
    "ua": "на-плакати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "po-plakati",
    "en": "start / perfective to cry",
    "ru": "по-плакать",
    "ua": "по-плакати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "pre-plakati",
    "en": "over / re- to cry",
    "ru": "пере-плакать",
    "ua": "пере-плакати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "pro-putovati",
    "en": "through / completely to travel",
    "ru": "про-путешествовать",
    "ua": "про-подорожувати",
    "level": "B2",
    "category": "travel"
  },
  {
    "hr": "od-putovati",
    "en": "away / off to travel",
    "ru": "от-путешествовать",
    "ua": "від-подорожувати",
    "level": "B2",
    "category": "travel"
  },
  {
    "hr": "u-putovati",
    "en": "in / into to travel",
    "ru": "в-путешествовать",
    "ua": "в-подорожувати",
    "level": "B2",
    "category": "travel"
  },
  {
    "hr": "iz-putovati",
    "en": "out / completely to travel",
    "ru": "вы-путешествовать",
    "ua": "ви-подорожувати",
    "level": "B2",
    "category": "travel"
  },
  {
    "hr": "na-putovati",
    "en": "on / prefix perfective to travel",
    "ru": "на-путешествовать",
    "ua": "на-подорожувати",
    "level": "B2",
    "category": "travel"
  },
  {
    "hr": "po-putovati",
    "en": "start / perfective to travel",
    "ru": "по-путешествовать",
    "ua": "по-подорожувати",
    "level": "B2",
    "category": "travel"
  },
  {
    "hr": "pre-putovati",
    "en": "over / re- to travel",
    "ru": "пере-путешествовать",
    "ua": "пере-подорожувати",
    "level": "B2",
    "category": "travel"
  },
  {
    "hr": "pro-letjeti",
    "en": "through / completely to fly",
    "ru": "про-летать",
    "ua": "про-літати",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "od-letjeti",
    "en": "away / off to fly",
    "ru": "от-летать",
    "ua": "від-літати",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "u-letjeti",
    "en": "in / into to fly",
    "ru": "в-летать",
    "ua": "в-літати",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "iz-letjeti",
    "en": "out / completely to fly",
    "ru": "вы-летать",
    "ua": "ви-літати",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "na-letjeti",
    "en": "on / prefix perfective to fly",
    "ru": "на-летать",
    "ua": "на-літати",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "po-letjeti",
    "en": "start / perfective to fly",
    "ru": "по-летать",
    "ua": "по-літати",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "pre-letjeti",
    "en": "over / re- to fly",
    "ru": "пере-летать",
    "ua": "пере-літати",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "pro-voziti",
    "en": "through / completely to drive",
    "ru": "про-вести машину",
    "ua": "про-вести машину / їхати",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "od-voziti",
    "en": "away / off to drive",
    "ru": "от-вести машину",
    "ua": "від-вести машину / їхати",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "u-voziti",
    "en": "in / into to drive",
    "ru": "в-вести машину",
    "ua": "в-вести машину / їхати",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "iz-voziti",
    "en": "out / completely to drive",
    "ru": "вы-вести машину",
    "ua": "ви-вести машину / їхати",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "na-voziti",
    "en": "on / prefix perfective to drive",
    "ru": "на-вести машину",
    "ua": "на-вести машину / їхати",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "po-voziti",
    "en": "start / perfective to drive",
    "ru": "по-вести машину",
    "ua": "по-вести машину / їхати",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "pre-voziti",
    "en": "over / re- to drive",
    "ru": "пере-вести машину",
    "ua": "пере-вести машину / їхати",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "pro-ploviti",
    "en": "through / completely to sail",
    "ru": "про-плыть (на корабле)",
    "ua": "про-плисти (на кораблі)",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "od-ploviti",
    "en": "away / off to sail",
    "ru": "от-плыть (на корабле)",
    "ua": "від-плисти (на кораблі)",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "u-ploviti",
    "en": "in / into to sail",
    "ru": "в-плыть (на корабле)",
    "ua": "в-плисти (на кораблі)",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "iz-ploviti",
    "en": "out / completely to sail",
    "ru": "вы-плыть (на корабле)",
    "ua": "ви-плисти (на кораблі)",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "na-ploviti",
    "en": "on / prefix perfective to sail",
    "ru": "на-плыть (на корабле)",
    "ua": "на-плисти (на кораблі)",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "po-ploviti",
    "en": "start / perfective to sail",
    "ru": "по-плыть (на корабле)",
    "ua": "по-плисти (на кораблі)",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "pre-ploviti",
    "en": "over / re- to sail",
    "ru": "пере-плыть (на корабле)",
    "ua": "пере-плисти (на кораблі)",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "pro-kuhati",
    "en": "through / completely to cook",
    "ru": "про-готовить",
    "ua": "про-готувати",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "od-kuhati",
    "en": "away / off to cook",
    "ru": "от-готовить",
    "ua": "від-готувати",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "u-kuhati",
    "en": "in / into to cook",
    "ru": "в-готовить",
    "ua": "в-готувати",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "iz-kuhati",
    "en": "out / completely to cook",
    "ru": "вы-готовить",
    "ua": "ви-готувати",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "na-kuhati",
    "en": "on / prefix perfective to cook",
    "ru": "на-готовить",
    "ua": "на-готувати",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "po-kuhati",
    "en": "start / perfective to cook",
    "ru": "по-готовить",
    "ua": "по-готувати",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "pre-kuhati",
    "en": "over / re- to cook",
    "ru": "пере-готовить",
    "ua": "пере-готувати",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "pro-peći",
    "en": "through / completely to bake",
    "ru": "про-печь",
    "ua": "про-пекти",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "od-peći",
    "en": "away / off to bake",
    "ru": "от-печь",
    "ua": "від-пекти",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "u-peći",
    "en": "in / into to bake",
    "ru": "в-печь",
    "ua": "в-пекти",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "iz-peći",
    "en": "out / completely to bake",
    "ru": "вы-печь",
    "ua": "ви-пекти",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "na-peći",
    "en": "on / prefix perfective to bake",
    "ru": "на-печь",
    "ua": "на-пекти",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "po-peći",
    "en": "start / perfective to bake",
    "ru": "по-печь",
    "ua": "по-пекти",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "pre-peći",
    "en": "over / re- to bake",
    "ru": "пере-печь",
    "ua": "пере-пекти",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "pro-čistiti",
    "en": "through / completely to clean",
    "ru": "про-чистить/убирать",
    "ua": "про-чистити/прибирати",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "od-čistiti",
    "en": "away / off to clean",
    "ru": "от-чистить/убирать",
    "ua": "від-чистити/прибирати",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "u-čistiti",
    "en": "in / into to clean",
    "ru": "в-чистить/убирать",
    "ua": "в-чистити/прибирати",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "iz-čistiti",
    "en": "out / completely to clean",
    "ru": "вы-чистить/убирать",
    "ua": "ви-чистити/прибирати",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "na-čistiti",
    "en": "on / prefix perfective to clean",
    "ru": "на-чистить/убирать",
    "ua": "на-чистити/прибирати",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "po-čistiti",
    "en": "start / perfective to clean",
    "ru": "по-чистить/убирать",
    "ua": "по-чистити/прибирати",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "pre-čistiti",
    "en": "over / re- to clean",
    "ru": "пере-чистить/убирать",
    "ua": "пере-чистити/прибирати",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "pro-prati",
    "en": "through / completely to wash",
    "ru": "про-мыть/стирать",
    "ua": "про-мити/прати",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "od-prati",
    "en": "away / off to wash",
    "ru": "от-мыть/стирать",
    "ua": "від-мити/прати",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "u-prati",
    "en": "in / into to wash",
    "ru": "в-мыть/стирать",
    "ua": "в-мити/прати",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "iz-prati",
    "en": "out / completely to wash",
    "ru": "вы-мыть/стирать",
    "ua": "ви-мити/прати",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "na-prati",
    "en": "on / prefix perfective to wash",
    "ru": "на-мыть/стирать",
    "ua": "на-мити/прати",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "po-prati",
    "en": "start / perfective to wash",
    "ru": "по-мыть/стирать",
    "ua": "по-мити/прати",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "pre-prati",
    "en": "over / re- to wash",
    "ru": "пере-мыть/стирать",
    "ua": "пере-мити/прати",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "pro-kupovati",
    "en": "through / completely to shop",
    "ru": "про-покупать",
    "ua": "про-купувати",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "od-kupovati",
    "en": "away / off to shop",
    "ru": "от-покупать",
    "ua": "від-купувати",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "u-kupovati",
    "en": "in / into to shop",
    "ru": "в-покупать",
    "ua": "в-купувати",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "iz-kupovati",
    "en": "out / completely to shop",
    "ru": "вы-покупать",
    "ua": "ви-купувати",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "na-kupovati",
    "en": "on / prefix perfective to shop",
    "ru": "на-покупать",
    "ua": "на-купувати",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "po-kupovati",
    "en": "start / perfective to shop",
    "ru": "по-покупать",
    "ua": "по-купувати",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "pre-kupovati",
    "en": "over / re- to shop",
    "ru": "пере-покупать",
    "ua": "пере-купувати",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "pro-prodavati",
    "en": "through / completely to sell",
    "ru": "про-продавать",
    "ua": "про-продавати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "od-prodavati",
    "en": "away / off to sell",
    "ru": "от-продавать",
    "ua": "від-продавати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "u-prodavati",
    "en": "in / into to sell",
    "ru": "в-продавать",
    "ua": "в-продавати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "iz-prodavati",
    "en": "out / completely to sell",
    "ru": "вы-продавать",
    "ua": "ви-продавати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "na-prodavati",
    "en": "on / prefix perfective to sell",
    "ru": "на-продавать",
    "ua": "на-продавати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "po-prodavati",
    "en": "start / perfective to sell",
    "ru": "по-продавать",
    "ua": "по-продавати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "pre-prodavati",
    "en": "over / re- to sell",
    "ru": "пере-продавать",
    "ua": "пере-продавати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "pro-plaćati",
    "en": "through / completely to pay (ongoing)",
    "ru": "про-платить",
    "ua": "про-платити",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "od-plaćati",
    "en": "away / off to pay (ongoing)",
    "ru": "от-платить",
    "ua": "від-платити",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "u-plaćati",
    "en": "in / into to pay (ongoing)",
    "ru": "в-платить",
    "ua": "в-платити",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "iz-plaćati",
    "en": "out / completely to pay (ongoing)",
    "ru": "вы-платить",
    "ua": "ви-платити",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "na-plaćati",
    "en": "on / prefix perfective to pay (ongoing)",
    "ru": "на-платить",
    "ua": "на-платити",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "po-plaćati",
    "en": "start / perfective to pay (ongoing)",
    "ru": "по-платить",
    "ua": "по-платити",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "pre-plaćati",
    "en": "over / re- to pay (ongoing)",
    "ru": "пере-платить",
    "ua": "пере-платити",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "pro-štedjeti",
    "en": "through / completely to save (money)",
    "ru": "про-копить",
    "ua": "про-заощаджувати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "od-štedjeti",
    "en": "away / off to save (money)",
    "ru": "от-копить",
    "ua": "від-заощаджувати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "u-štedjeti",
    "en": "in / into to save (money)",
    "ru": "в-копить",
    "ua": "в-заощаджувати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "iz-štedjeti",
    "en": "out / completely to save (money)",
    "ru": "вы-копить",
    "ua": "ви-заощаджувати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "na-štedjeti",
    "en": "on / prefix perfective to save (money)",
    "ru": "на-копить",
    "ua": "на-заощаджувати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "po-štedjeti",
    "en": "start / perfective to save (money)",
    "ru": "по-копить",
    "ua": "по-заощаджувати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "pre-štedjeti",
    "en": "over / re- to save (money)",
    "ru": "пере-копить",
    "ua": "пере-заощаджувати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "pro-trošiti",
    "en": "through / completely to spend",
    "ru": "про-тратить",
    "ua": "про-витрачати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "od-trošiti",
    "en": "away / off to spend",
    "ru": "от-тратить",
    "ua": "від-витрачати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "u-trošiti",
    "en": "in / into to spend",
    "ru": "в-тратить",
    "ua": "в-витрачати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "iz-trošiti",
    "en": "out / completely to spend",
    "ru": "вы-тратить",
    "ua": "ви-витрачати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "na-trošiti",
    "en": "on / prefix perfective to spend",
    "ru": "на-тратить",
    "ua": "на-витрачати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "po-trošiti",
    "en": "start / perfective to spend",
    "ru": "по-тратить",
    "ua": "по-витрачати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "pre-trošiti",
    "en": "over / re- to spend",
    "ru": "пере-тратить",
    "ua": "пере-витрачати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "pro-darovati",
    "en": "through / completely to gift",
    "ru": "про-дарить",
    "ua": "про-дарувати",
    "level": "B2",
    "category": "family"
  },
  {
    "hr": "od-darovati",
    "en": "away / off to gift",
    "ru": "от-дарить",
    "ua": "від-дарувати",
    "level": "B2",
    "category": "family"
  },
  {
    "hr": "u-darovati",
    "en": "in / into to gift",
    "ru": "в-дарить",
    "ua": "в-дарувати",
    "level": "B2",
    "category": "family"
  },
  {
    "hr": "iz-darovati",
    "en": "out / completely to gift",
    "ru": "вы-дарить",
    "ua": "ви-дарувати",
    "level": "B2",
    "category": "family"
  },
  {
    "hr": "na-darovati",
    "en": "on / prefix perfective to gift",
    "ru": "на-дарить",
    "ua": "на-дарувати",
    "level": "B2",
    "category": "family"
  },
  {
    "hr": "po-darovati",
    "en": "start / perfective to gift",
    "ru": "по-дарить",
    "ua": "по-дарувати",
    "level": "B2",
    "category": "family"
  },
  {
    "hr": "pre-darovati",
    "en": "over / re- to gift",
    "ru": "пере-дарить",
    "ua": "пере-дарувати",
    "level": "B2",
    "category": "family"
  },
  {
    "hr": "pro-slaviti",
    "en": "through / completely to celebrate",
    "ru": "про-праздновать",
    "ua": "про-святкувати",
    "level": "B2",
    "category": "time"
  },
  {
    "hr": "od-slaviti",
    "en": "away / off to celebrate",
    "ru": "от-праздновать",
    "ua": "від-святкувати",
    "level": "B2",
    "category": "time"
  },
  {
    "hr": "u-slaviti",
    "en": "in / into to celebrate",
    "ru": "в-праздновать",
    "ua": "в-святкувати",
    "level": "B2",
    "category": "time"
  },
  {
    "hr": "iz-slaviti",
    "en": "out / completely to celebrate",
    "ru": "вы-праздновать",
    "ua": "ви-святкувати",
    "level": "B2",
    "category": "time"
  },
  {
    "hr": "na-slaviti",
    "en": "on / prefix perfective to celebrate",
    "ru": "на-праздновать",
    "ua": "на-святкувати",
    "level": "B2",
    "category": "time"
  },
  {
    "hr": "po-slaviti",
    "en": "start / perfective to celebrate",
    "ru": "по-праздновать",
    "ua": "по-святкувати",
    "level": "B2",
    "category": "time"
  },
  {
    "hr": "pre-slaviti",
    "en": "over / re- to celebrate",
    "ru": "пере-праздновать",
    "ua": "пере-святкувати",
    "level": "B2",
    "category": "time"
  },
  {
    "hr": "pro-sjećati se",
    "en": "through / completely to remember",
    "ru": "про-помнить",
    "ua": "про-пам'ятати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "od-sjećati se",
    "en": "away / off to remember",
    "ru": "от-помнить",
    "ua": "від-пам'ятати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "u-sjećati se",
    "en": "in / into to remember",
    "ru": "в-помнить",
    "ua": "в-пам'ятати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "iz-sjećati se",
    "en": "out / completely to remember",
    "ru": "вы-помнить",
    "ua": "ви-пам'ятати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "na-sjećati se",
    "en": "on / prefix perfective to remember",
    "ru": "на-помнить",
    "ua": "на-пам'ятати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "po-sjećati se",
    "en": "start / perfective to remember",
    "ru": "по-помнить",
    "ua": "по-пам'ятати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "pre-sjećati se",
    "en": "over / re- to remember",
    "ru": "пере-помнить",
    "ua": "пере-пам'ятати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "pro-zaboraviti",
    "en": "through / completely to forget",
    "ru": "про-забыть",
    "ua": "про-забути",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "od-zaboraviti",
    "en": "away / off to forget",
    "ru": "от-забыть",
    "ua": "від-забути",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "u-zaboraviti",
    "en": "in / into to forget",
    "ru": "в-забыть",
    "ua": "в-забути",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "iz-zaboraviti",
    "en": "out / completely to forget",
    "ru": "вы-забыть",
    "ua": "ви-забути",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "na-zaboraviti",
    "en": "on / prefix perfective to forget",
    "ru": "на-забыть",
    "ua": "на-забути",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "po-zaboraviti",
    "en": "start / perfective to forget",
    "ru": "по-забыть",
    "ua": "по-забути",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "pre-zaboraviti",
    "en": "over / re- to forget",
    "ru": "пере-забыть",
    "ua": "пере-забути",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "pro-nadati se",
    "en": "through / completely to hope",
    "ru": "про-надеяться",
    "ua": "про-сподіватися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "od-nadati se",
    "en": "away / off to hope",
    "ru": "от-надеяться",
    "ua": "від-сподіватися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "u-nadati se",
    "en": "in / into to hope",
    "ru": "в-надеяться",
    "ua": "в-сподіватися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "iz-nadati se",
    "en": "out / completely to hope",
    "ru": "вы-надеяться",
    "ua": "ви-сподіватися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "na-nadati se",
    "en": "on / prefix perfective to hope",
    "ru": "на-надеяться",
    "ua": "на-сподіватися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "po-nadati se",
    "en": "start / perfective to hope",
    "ru": "по-надеяться",
    "ua": "по-сподіватися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "pre-nadati se",
    "en": "over / re- to hope",
    "ru": "пере-надеяться",
    "ua": "пере-сподіватися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "pro-bojati se",
    "en": "through / completely to fear / be afraid",
    "ru": "про-бояться",
    "ua": "про-боятися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "od-bojati se",
    "en": "away / off to fear / be afraid",
    "ru": "от-бояться",
    "ua": "від-боятися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "u-bojati se",
    "en": "in / into to fear / be afraid",
    "ru": "в-бояться",
    "ua": "в-боятися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "iz-bojati se",
    "en": "out / completely to fear / be afraid",
    "ru": "вы-бояться",
    "ua": "ви-боятися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "na-bojati se",
    "en": "on / prefix perfective to fear / be afraid",
    "ru": "на-бояться",
    "ua": "на-боятися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "po-bojati se",
    "en": "start / perfective to fear / be afraid",
    "ru": "по-бояться",
    "ua": "по-боятися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "pre-bojati se",
    "en": "over / re- to fear / be afraid",
    "ru": "пере-бояться",
    "ua": "пере-боятися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "pro-voljeti",
    "en": "through / completely to love / like",
    "ru": "про-любить",
    "ua": "про-любити",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "od-voljeti",
    "en": "away / off to love / like",
    "ru": "от-любить",
    "ua": "від-любити",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "u-voljeti",
    "en": "in / into to love / like",
    "ru": "в-любить",
    "ua": "в-любити",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "iz-voljeti",
    "en": "out / completely to love / like",
    "ru": "вы-любить",
    "ua": "ви-любити",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "na-voljeti",
    "en": "on / prefix perfective to love / like",
    "ru": "на-любить",
    "ua": "на-любити",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "po-voljeti",
    "en": "start / perfective to love / like",
    "ru": "по-любить",
    "ua": "по-любити",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "pre-voljeti",
    "en": "over / re- to love / like",
    "ru": "пере-любить",
    "ua": "пере-любити",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "pro-mrziti",
    "en": "through / completely to hate",
    "ru": "про-ненавидеть",
    "ua": "про-ненавидіти",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "od-mrziti",
    "en": "away / off to hate",
    "ru": "от-ненавидеть",
    "ua": "від-ненавидіти",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "u-mrziti",
    "en": "in / into to hate",
    "ru": "в-ненавидеть",
    "ua": "в-ненавидіти",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "iz-mrziti",
    "en": "out / completely to hate",
    "ru": "вы-ненавидеть",
    "ua": "ви-ненавидіти",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "na-mrziti",
    "en": "on / prefix perfective to hate",
    "ru": "на-ненавидеть",
    "ua": "на-ненавидіти",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "po-mrziti",
    "en": "start / perfective to hate",
    "ru": "по-ненавидеть",
    "ua": "по-ненавидіти",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "pre-mrziti",
    "en": "over / re- to hate",
    "ru": "пере-ненавидеть",
    "ua": "пере-ненавидіти",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "pro-željeti",
    "en": "through / completely to wish / want",
    "ru": "про-желать",
    "ua": "про-бажати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "od-željeti",
    "en": "away / off to wish / want",
    "ru": "от-желать",
    "ua": "від-бажати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "u-željeti",
    "en": "in / into to wish / want",
    "ru": "в-желать",
    "ua": "в-бажати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "iz-željeti",
    "en": "out / completely to wish / want",
    "ru": "вы-желать",
    "ua": "ви-бажати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "na-željeti",
    "en": "on / prefix perfective to wish / want",
    "ru": "на-желать",
    "ua": "на-бажати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "po-željeti",
    "en": "start / perfective to wish / want",
    "ru": "по-желать",
    "ua": "по-бажати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "pre-željeti",
    "en": "over / re- to wish / want",
    "ru": "пере-желать",
    "ua": "пере-бажати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "pro-tražiti",
    "en": "through / completely to search / request",
    "ru": "про-искать/требовать",
    "ua": "про-шукати/вимагати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "od-tražiti",
    "en": "away / off to search / request",
    "ru": "от-искать/требовать",
    "ua": "від-шукати/вимагати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "u-tražiti",
    "en": "in / into to search / request",
    "ru": "в-искать/требовать",
    "ua": "в-шукати/вимагати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "iz-tražiti",
    "en": "out / completely to search / request",
    "ru": "вы-искать/требовать",
    "ua": "ви-шукати/вимагати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "na-tražiti",
    "en": "on / prefix perfective to search / request",
    "ru": "на-искать/требовать",
    "ua": "на-шукати/вимагати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "po-tražiti",
    "en": "start / perfective to search / request",
    "ru": "по-искать/требовать",
    "ua": "по-шукати/вимагати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "pre-tražiti",
    "en": "over / re- to search / request",
    "ru": "пере-искать/требовать",
    "ua": "пере-шукати/вимагати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "pro-naći",
    "en": "through / completely to find",
    "ru": "про-найти",
    "ua": "про-знайти",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "od-naći",
    "en": "away / off to find",
    "ru": "от-найти",
    "ua": "від-знайти",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "u-naći",
    "en": "in / into to find",
    "ru": "в-найти",
    "ua": "в-знайти",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "iz-naći",
    "en": "out / completely to find",
    "ru": "вы-найти",
    "ua": "ви-знайти",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "na-naći",
    "en": "on / prefix perfective to find",
    "ru": "на-найти",
    "ua": "на-знайти",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "po-naći",
    "en": "start / perfective to find",
    "ru": "по-найти",
    "ua": "по-знайти",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "pre-naći",
    "en": "over / re- to find",
    "ru": "пере-найти",
    "ua": "пере-знайти",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "pro-gubiti",
    "en": "through / completely to lose",
    "ru": "про-терять",
    "ua": "про-втрачати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "od-gubiti",
    "en": "away / off to lose",
    "ru": "от-терять",
    "ua": "від-втрачати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "u-gubiti",
    "en": "in / into to lose",
    "ru": "в-терять",
    "ua": "в-втрачати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "iz-gubiti",
    "en": "out / completely to lose",
    "ru": "вы-терять",
    "ua": "ви-втрачати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "na-gubiti",
    "en": "on / prefix perfective to lose",
    "ru": "на-терять",
    "ua": "на-втрачати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "po-gubiti",
    "en": "start / perfective to lose",
    "ru": "по-терять",
    "ua": "по-втрачати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "pre-gubiti",
    "en": "over / re- to lose",
    "ru": "пере-терять",
    "ua": "пере-втрачати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "pro-pobijediti",
    "en": "through / completely to win",
    "ru": "про-победить",
    "ua": "про-перемогти",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "od-pobijediti",
    "en": "away / off to win",
    "ru": "от-победить",
    "ua": "від-перемогти",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "u-pobijediti",
    "en": "in / into to win",
    "ru": "в-победить",
    "ua": "в-перемогти",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "iz-pobijediti",
    "en": "out / completely to win",
    "ru": "вы-победить",
    "ua": "ви-перемогти",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "na-pobijediti",
    "en": "on / prefix perfective to win",
    "ru": "на-победить",
    "ua": "на-перемогти",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "po-pobijediti",
    "en": "start / perfective to win",
    "ru": "по-победить",
    "ua": "по-перемогти",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "pre-pobijediti",
    "en": "over / re- to win",
    "ru": "пере-победить",
    "ua": "пере-перемогти",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "stolnjak",
    "en": "tablecloth",
    "ru": "скатерть",
    "ua": "скатертина",
    "level": "A2",
    "category": "home"
  },
  {
    "hr": "stolnjaki",
    "en": "tablecloths",
    "ru": "скатертьы",
    "ua": "скатертинаи",
    "level": "A2",
    "category": "home"
  },
  {
    "hr": "slika",
    "en": "picture / painting",
    "ru": "картина",
    "ua": "картина",
    "level": "A1",
    "category": "home"
  },
  {
    "hr": "slikai",
    "en": "picture / paintings",
    "ru": "картинаы",
    "ua": "картинаи",
    "level": "A2",
    "category": "home"
  },
  {
    "hr": "vaza",
    "en": "vase",
    "ru": "ваза",
    "ua": "ваза",
    "level": "A2",
    "category": "home"
  },
  {
    "hr": "vazai",
    "en": "vases",
    "ru": "вазаы",
    "ua": "вазаи",
    "level": "A2",
    "category": "home"
  },
  {
    "hr": "cvijet",
    "en": "flower",
    "ru": "цветок",
    "ua": "квітка",
    "level": "A1",
    "category": "nature"
  },
  {
    "hr": "cvijeti",
    "en": "flowers",
    "ru": "цветокы",
    "ua": "квіткаи",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "biljka",
    "en": "plant",
    "ru": "растение",
    "ua": "рослина",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "biljkai",
    "en": "plants",
    "ru": "растениеы",
    "ua": "рослинаи",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "stablo",
    "en": "tree",
    "ru": "дерево",
    "ua": "дерево",
    "level": "A1",
    "category": "nature"
  },
  {
    "hr": "stabloi",
    "en": "trees",
    "ru": "деревоы",
    "ua": "деревои",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "trava",
    "en": "grass",
    "ru": "трава",
    "ua": "трава",
    "level": "A1",
    "category": "nature"
  },
  {
    "hr": "travai",
    "en": "grasss",
    "ru": "траваы",
    "ua": "траваи",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "kamen",
    "en": "stone",
    "ru": "камень",
    "ua": "камінь",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "kameni",
    "en": "stones",
    "ru": "каменьы",
    "ua": "каміньи",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "pijesak",
    "en": "sand",
    "ru": "песок",
    "ua": "пісок",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "pijesaki",
    "en": "sands",
    "ru": "песокы",
    "ua": "пісоки",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "tlo",
    "en": "ground / soil",
    "ru": "почва",
    "ua": "ґрунт",
    "level": "B1",
    "category": "nature"
  },
  {
    "hr": "tloi",
    "en": "ground / soils",
    "ru": "почваы",
    "ua": "ґрунти",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "more",
    "en": "sea",
    "ru": "море",
    "ua": "море",
    "level": "A1",
    "category": "nature"
  },
  {
    "hr": "morei",
    "en": "seas",
    "ru": "мореы",
    "ua": "мореи",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "jezero",
    "en": "lake",
    "ru": "озеро",
    "ua": "озеро",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "jezeroi",
    "en": "lakes",
    "ru": "озероы",
    "ua": "озерои",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "rijeka",
    "en": "river",
    "ru": "река",
    "ua": "річка",
    "level": "A1",
    "category": "nature"
  },
  {
    "hr": "rijekai",
    "en": "rivers",
    "ru": "рекаы",
    "ua": "річкаи",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "potok",
    "en": "brook / stream",
    "ru": "ручей",
    "ua": "струмок",
    "level": "B1",
    "category": "nature"
  },
  {
    "hr": "potoki",
    "en": "brook / streams",
    "ru": "ручейы",
    "ua": "струмоки",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "izvor",
    "en": "source / spring",
    "ru": "источник",
    "ua": "джерело",
    "level": "B2",
    "category": "nature"
  },
  {
    "hr": "izvori",
    "en": "source / springs",
    "ru": "источникы",
    "ua": "джерелои",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "brijeg",
    "en": "hill",
    "ru": "холм",
    "ua": "пагорб",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "brijegi",
    "en": "hills",
    "ru": "холмы",
    "ua": "пагорби",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "dolina",
    "en": "valley",
    "ru": "долина",
    "ua": "долина",
    "level": "B1",
    "category": "nature"
  },
  {
    "hr": "dolinai",
    "en": "valleys",
    "ru": "долинаы",
    "ua": "долинаи",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "ravnica",
    "en": "plain",
    "ru": "равнина",
    "ua": "рівнина",
    "level": "B2",
    "category": "nature"
  },
  {
    "hr": "ravnicai",
    "en": "plains",
    "ru": "равнинаы",
    "ua": "рівнинаи",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "pustinja",
    "en": "desert",
    "ru": "пустыня",
    "ua": "пустеля",
    "level": "B1",
    "category": "nature"
  },
  {
    "hr": "pustinjai",
    "en": "deserts",
    "ru": "пустыняы",
    "ua": "пустеляи",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "močvara",
    "en": "swamp",
    "ru": "болото",
    "ua": "болото",
    "level": "B2",
    "category": "nature"
  },
  {
    "hr": "močvarai",
    "en": "swamps",
    "ru": "болотоы",
    "ua": "болотои",
    "level": "A2",
    "category": "nature"
  },
  {
    "hr": "karta",
    "en": "ticket / map",
    "ru": "билет / карта",
    "ua": "квиток / карта",
    "level": "A1",
    "category": "travel"
  },
  {
    "hr": "kartai",
    "en": "ticket / maps",
    "ru": "билет / картаы",
    "ua": "квиток / картаи",
    "level": "A2",
    "category": "travel"
  },
  {
    "hr": "putovnica",
    "en": "passport",
    "ru": "паспорт",
    "ua": "паспорт",
    "level": "A1",
    "category": "travel"
  },
  {
    "hr": "putovnicai",
    "en": "passports",
    "ru": "паспорты",
    "ua": "паспорти",
    "level": "A2",
    "category": "travel"
  },
  {
    "hr": "viza",
    "en": "visa",
    "ru": "виза",
    "ua": "віза",
    "level": "A2",
    "category": "travel"
  },
  {
    "hr": "vizai",
    "en": "visas",
    "ru": "визаы",
    "ua": "візаи",
    "level": "A2",
    "category": "travel"
  },
  {
    "hr": "let",
    "en": "flight",
    "ru": "полет / рейс",
    "ua": "політ / рейс",
    "level": "A2",
    "category": "travel"
  },
  {
    "hr": "leti",
    "en": "flights",
    "ru": "полет / рейсы",
    "ua": "політ / рейси",
    "level": "A2",
    "category": "travel"
  },
  {
    "hr": "zrakoplov",
    "en": "airplane",
    "ru": "самолет",
    "ua": "літак",
    "level": "A1",
    "category": "travel"
  },
  {
    "hr": "zrakoplovi",
    "en": "airplanes",
    "ru": "самолеты",
    "ua": "літаки",
    "level": "A2",
    "category": "travel"
  },
  {
    "hr": "vlak",
    "en": "train",
    "ru": "поезд",
    "ua": "потяг",
    "level": "A1",
    "category": "travel"
  },
  {
    "hr": "vlaki",
    "en": "trains",
    "ru": "поезды",
    "ua": "потяги",
    "level": "A2",
    "category": "travel"
  },
  {
    "hr": "autobus",
    "en": "bus",
    "ru": "автобус",
    "ua": "автобус",
    "level": "A1",
    "category": "travel"
  },
  {
    "hr": "autobusi",
    "en": "buss",
    "ru": "автобусы",
    "ua": "автобуси",
    "level": "A2",
    "category": "travel"
  },
  {
    "hr": "tramvaj",
    "en": "tram",
    "ru": "трамвай",
    "ua": "трамвай",
    "level": "A1",
    "category": "travel"
  },
  {
    "hr": "tramvaji",
    "en": "trams",
    "ru": "трамвайы",
    "ua": "трамвайи",
    "level": "A2",
    "category": "travel"
  },
  {
    "hr": "brod",
    "en": "ship / boat",
    "ru": "корабль / лодка",
    "ua": "корабель / човен",
    "level": "A1",
    "category": "travel"
  },
  {
    "hr": "brodi",
    "en": "ship / boats",
    "ru": "корабль / лодкаы",
    "ua": "корабель / човени",
    "level": "A2",
    "category": "travel"
  },
  {
    "hr": "luka",
    "en": "port / harbor",
    "ru": "порт",
    "ua": "порт",
    "level": "A2",
    "category": "travel"
  },
  {
    "hr": "lukai",
    "en": "port / harbors",
    "ru": "порты",
    "ua": "порти",
    "level": "A2",
    "category": "travel"
  },
  {
    "hr": "kolodvor",
    "en": "station",
    "ru": "вокзал",
    "ua": "вокзал",
    "level": "A2",
    "category": "travel"
  },
  {
    "hr": "kolodvori",
    "en": "stations",
    "ru": "вокзалы",
    "ua": "вокзали",
    "level": "A2",
    "category": "travel"
  },
  {
    "hr": "stajalište",
    "en": "stop (bus/tram)",
    "ru": "остановка",
    "ua": "зупинка",
    "level": "A2",
    "category": "travel"
  },
  {
    "hr": "stajalištei",
    "en": "stop (bus/tram)s",
    "ru": "остановкаы",
    "ua": "зупинкаи",
    "level": "A2",
    "category": "travel"
  },
  {
    "hr": "koncept",
    "en": "concept",
    "ru": "концепт",
    "ua": "концепт",
    "level": "C1",
    "category": "school"
  },
  {
    "hr": "teorija",
    "en": "theory",
    "ru": "теория",
    "ua": "теорія",
    "level": "C1",
    "category": "school"
  },
  {
    "hr": "analiza",
    "en": "analysis",
    "ru": "анализ",
    "ua": "аналіз",
    "level": "C1",
    "category": "school"
  },
  {
    "hr": "metoda",
    "en": "method",
    "ru": "метод",
    "ua": "метод",
    "level": "B2",
    "category": "school"
  },
  {
    "hr": "sustav",
    "en": "system",
    "ru": "система",
    "ua": "система",
    "level": "B1",
    "category": "school"
  },
  {
    "hr": "struktura",
    "en": "structure",
    "ru": "структура",
    "ua": "структура",
    "level": "B2",
    "category": "school"
  },
  {
    "hr": "funkcija",
    "en": "function",
    "ru": "функция",
    "ua": "функція",
    "level": "C1",
    "category": "school"
  },
  {
    "hr": "proces",
    "en": "process",
    "ru": "процесс",
    "ua": "процес",
    "level": "B1",
    "category": "school"
  },
  {
    "hr": "rezultat",
    "en": "result",
    "ru": "результат",
    "ua": "результат",
    "level": "A2",
    "category": "school"
  },
  {
    "hr": "znacaj",
    "en": "significance",
    "ru": "значение / значимость",
    "ua": "значення / значимість",
    "level": "C1",
    "category": "school"
  },
  {
    "hr": "vrijednost",
    "en": "value",
    "ru": "ценность",
    "ua": "цінність",
    "level": "B2",
    "category": "school"
  },
  {
    "hr": "standard",
    "en": "standard",
    "ru": "стандарт",
    "ua": "стандарт",
    "level": "B2",
    "category": "school"
  },
  {
    "hr": "kriterij",
    "en": "criterion",
    "ru": "критерий",
    "ua": "критерій",
    "level": "C2",
    "category": "school"
  },
  {
    "hr": "definicija",
    "en": "definition",
    "ru": "определение",
    "ua": "визначення",
    "level": "C1",
    "category": "school"
  },
  {
    "hr": "objasnjenje",
    "en": "explanation",
    "ru": "объяснение",
    "ua": "пояснення",
    "level": "B2",
    "category": "school"
  },
  {
    "hr": "dokaz",
    "en": "proof / evidence",
    "ru": "доказательство",
    "ua": "доказ",
    "level": "B2",
    "category": "school"
  },
  {
    "hr": "argument",
    "en": "argument",
    "ru": "аргумент",
    "ua": "аргумент",
    "level": "C1",
    "category": "school"
  },
  {
    "hr": "zakljucak",
    "en": "conclusion",
    "ru": "вывод",
    "ua": "висновок",
    "level": "C1",
    "category": "school"
  },
  {
    "hr": "pretpostavka",
    "en": "assumption",
    "ru": "предположение",
    "ua": "припущення",
    "level": "C2",
    "category": "school"
  },
  {
    "hr": "perspektiva",
    "en": "perspective",
    "ru": "перспектива",
    "ua": "перспектива",
    "level": "C1",
    "category": "school"
  },
];
