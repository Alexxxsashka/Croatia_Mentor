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
    "hr": "protrčati",
    "en": "to run through / run for a while",
    "ru": "пробежать / побегать немного",
    "ua": "пробігти / побігати трохи",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "ottrčati",
    "en": "to run away / run off",
    "ru": "отбежать",
    "ua": "відбігти",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "utrčati",
    "en": "to run in / run into",
    "ru": "вбежать",
    "ua": "вбігти",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "istrčati",
    "en": "to run out / finish running",
    "ru": "выбежать / выбежать наружу",
    "ua": "вибігти / вибігти назовні",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "natrčati",
    "en": "to run into / bump into / encounter",
    "ru": "натолкнуться / набежать",
    "ua": "наштовхнутися / набігти",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "potrčati",
    "en": "to start running / run for a bit",
    "ru": "побежать / побегать",
    "ua": "побігти / побігати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "pretrčati",
    "en": "to run across / overrun",
    "ru": "перебежать",
    "ua": "перебігти",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "proplivati",
    "en": "to swim through / start swimming",
    "ru": "proплыть / научиться плавать",
    "ua": "пропливти / навчитися плавати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "otplivati",
    "en": "to swim away / sail off",
    "ru": "отплыть",
    "ua": "відпливти",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "uplivati",
    "en": "to swim in / swim into",
    "ru": "вплыть",
    "ua": "впливти",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "isplivati",
    "en": "to surface / swim out",
    "ru": "выплыть / всплыть",
    "ua": "випливти / спливти",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "naplivati se",
    "en": "to swim one's fill",
    "ru": "наплаваться",
    "ua": "наплаватися",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "poplivati",
    "en": "to swim for a bit / start swimming",
    "ru": "поплавать",
    "ua": "поплавати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "preplivati",
    "en": "to swim across",
    "ru": "переплыть",
    "ua": "перепливти",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "proskočiti",
    "en": "to jump through / skip",
    "ru": "пропрыгать / пропустить",
    "ua": "proстрибати / пропустити",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "otskočiti",
    "en": "to jump away / bounce back",
    "ru": "отпрыгнуть / отскочить",
    "ua": "відстрибнути / відскочити",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "uskočiti",
    "en": "to jump in / hop in",
    "ru": "впрыгнуть / запрыгнуть",
    "ua": "встрибнути / застрибнути",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "iskočiti",
    "en": "to jump out / pop out",
    "ru": "выпрыгнуть / выскочить",
    "ua": "вистрибнути / вискочити",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "naskočiti",
    "en": "to jump onto / pounce",
    "ru": "напрыгнуть / наскочить",
    "ua": "настрибнути / наскочити",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "poskočiti",
    "en": "to hop / leap up",
    "ru": "подпрыгнуть / подскочить",
    "ua": "підстрибнути / підскочити",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "preskočiti",
    "en": "to jump over / skip",
    "ru": "перепрыгнуть / пропустить",
    "ua": "перестрибнути / пропустити",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "propjevati",
    "en": "to start singing / sing through",
    "ru": "запеть / пропеть",
    "ua": "заспівати / проспівати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "otpjevati",
    "en": "to sing to the end / perform a song",
    "ru": "отпеть / спеть песню",
    "ua": "відспівати / проспівати пісню",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "upjevati se",
    "en": "to warm up one's voice",
    "ru": "распеться",
    "ua": "розспіватися",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "ispjevati",
    "en": "to sing out / express in song",
    "ru": "выпеть / выразить в песне",
    "ua": "виспівати / виразити в пісні",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "napjevati se",
    "en": "to sing to one's heart's content",
    "ru": "напеться (вдоволь)",
    "ua": "наспіватися (вволю)",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "popjevati",
    "en": "to sing a little / hum",
    "ru": "попеть / напевать",
    "ua": "поспівати / наспівувати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "prepjevati",
    "en": "to adapt a song / translate poetry",
    "ru": "перепеть / перевести стихи",
    "ua": "переспівати / перекласти вірші",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "proplesati",
    "en": "to start dancing / dance through",
    "ru": "затанцевать / протанцевать",
    "ua": "затанцювати / протанцювати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "otplesati",
    "en": "to perform a dance / dance away",
    "ru": "оттанцевать",
    "ua": "відтанцювати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "uplesati se",
    "en": "to get into the rhythm of dancing",
    "ru": "втянуться в танец",
    "ua": "втягнутися в танець",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "isplesati se",
    "en": "to dance to one's heart's content",
    "ru": "вытанцеваться / натанцеваться",
    "ua": "витанцюватися / натанцюватися",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "naplesati se",
    "en": "to dance one's fill",
    "ru": "натанцеваться (вдоволь)",
    "ua": "натанцюватися (вволю)",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "poplesati",
    "en": "to dance a little",
    "ru": "потанцевать",
    "ua": "потанцювати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "preplesati",
    "en": "to dance across / dance again",
    "ru": "перетанцевать",
    "ua": "перетанцювати",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "prosmijati se",
    "en": "to smile / burst into laughter",
    "ru": "рассмеяться / улыбнуться",
    "ua": "розсміятися / посміхнутися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "otsmijati se",
    "en": "to finish laughing",
    "ru": "отсмеяться",
    "ua": "відсміятися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "usmijati se",
    "en": "to smile",
    "ru": "улыбнуться",
    "ua": "посміхнутися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "ismijati se",
    "en": "to mock / laugh at",
    "ru": "высмеять / насмехаться",
    "ua": "висміяти / насміхатися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "nasmijati se",
    "en": "to laugh / burst into laughter",
    "ru": "насмеяться / рассмеяться",
    "ua": "насміятися / розсміятися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "posmijati se",
    "en": "to laugh (a little) / smile",
    "ru": "посмеяться / улыбнуться",
    "ua": "посміятися / посміхнутися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "presmijati se",
    "en": "to laugh one's fill / calm down",
    "ru": "насмеяться вдоволь / успокоиться",
    "ua": "насміятися вволю / заспокоїтися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "proplakati",
    "en": "to burst into tears",
    "ru": "заплакать / разрыдаться",
    "ua": "заплакати / розридатися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "otplakati",
    "en": "to mourn / finish weeping",
    "ru": "отплакать / отрыдать",
    "ua": "відплакати / відридати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "uplakati se",
    "en": "to cry oneself red/tired",
    "ru": "заплакаться",
    "ua": "заплакатися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "isplakati se",
    "en": "to cry one's eyes out / get it all out",
    "ru": "выплакаться / поплакать вдоволь",
    "ua": "виплакатися / поплакати вволю",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "naplakati se",
    "en": "to cry a lot / cry one's fill",
    "ru": "наплакаться",
    "ua": "наплакатися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "poplakati",
    "en": "to weep for a bit",
    "ru": "поплакать немного",
    "ua": "поплакати трохи",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "preplakati",
    "en": "to cry too much / spend time crying",
    "ru": "переплакать / проплакать всё время",
    "ua": "переплакати / проплакать весь час",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "proputovati",
    "en": "to travel through / travel around",
    "ru": "путешествовать по / объездить",
    "ua": "подорожувати по / об'їздити",
    "level": "B2",
    "category": "travel"
  },
  {
    "hr": "otputovati",
    "en": "to set off on a journey / depart",
    "ru": "отправиться в путешествие / уехать",
    "ua": "вирушити в подорож / виїхати",
    "level": "B2",
    "category": "travel"
  },
  {
    "hr": "uputovati",
    "en": "to arrive / travel into",
    "ru": "прибыть / въехать",
    "ua": "прибути / в'їхати",
    "level": "B2",
    "category": "travel"
  },
  {
    "hr": "isputovati se",
    "en": "to travel a lot / satisfy travel desires",
    "ru": "напутешествоваться",
    "ua": "наподорожуватися",
    "level": "B2",
    "category": "travel"
  },
  {
    "hr": "naputovati se",
    "en": "to travel one's fill",
    "ru": "напутешествоваться вдоволь",
    "ua": "наподорожуватися вволю",
    "level": "B2",
    "category": "travel"
  },
  {
    "hr": "poputovati",
    "en": "to travel for a while",
    "ru": "попутешествовать немного",
    "ua": "поподорожувати трохи",
    "level": "B2",
    "category": "travel"
  },
  {
    "hr": "preputovati",
    "en": "to travel across / cross by traveling",
    "ru": "пересечь путешествуя",
    "ua": "перетнути подорожуючи",
    "level": "B2",
    "category": "travel"
  },
  {
    "hr": "proletjeti",
    "en": "to fly through / fly past",
    "ru": "пролететь",
    "ua": "пролетіти",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "odletjeti",
    "en": "to fly away / depart by plane",
    "ru": "улететь / отлететь",
    "ua": "полетіти / відлетіти",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "uletjeti",
    "en": "to fly into / rush in",
    "ru": "влететь / ворваться",
    "ua": "влетіти / увірватися",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "izletjeti",
    "en": "to fly out / rush out",
    "ru": "вылететь",
    "ua": "вилетіти",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "naletjeti",
    "en": "to run into / collide / encounter",
    "ru": "налететь / столкнуться",
    "ua": "налетіти / зіткнутися",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "poletjeti",
    "en": "to take off / start flying",
    "ru": "взлететь / полететь",
    "ua": "злетіти / полетіти",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "preletjeti",
    "en": "to fly over / fly across",
    "ru": "preлететь",
    "ua": "перелетіти",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "provoziti se",
    "en": "to take a ride",
    "ru": "прокатиться",
    "ua": "прокататися",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "odvoziti",
    "en": "to drive away / transport",
    "ru": "отвезти / отвезти на машине",
    "ua": "відвезти / відвезти машиною",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "uvoziti",
    "en": "to import / drive in",
    "ru": "импортировать / ввозить",
    "ua": "імпортувати / ввозити",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "izvoziti",
    "en": "to export / drive out",
    "ru": "экспортировать / вывозить",
    "ua": "експортувати / вивозити",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "navoziti se",
    "en": "to drive or ride one's fill",
    "ru": "накататься",
    "ua": "накататися",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "povoziti se",
    "en": "to ride for a bit",
    "ru": "покататься немного",
    "ua": "покататися трохи",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "prevoziti",
    "en": "to transport / carry over",
    "ru": "перевозить / транспортировать",
    "ua": "перевозити / транспортувати",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "proploviti",
    "en": "to sail through / start sailing",
    "ru": "проплыть / начать плавание",
    "ua": "пропливти / почати плавання",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "otploviti",
    "en": "to sail away / set sail",
    "ru": "отплыть / отплыть на корабле",
    "ua": "відпливти / відпливти на кораблі",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "uploviti",
    "en": "to sail into / enter port",
    "ru": "вплыть (в порт)",
    "ua": "впливти (в порт)",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "isploviti",
    "en": "to sail out / leave port",
    "ru": "выплыть / выйти из порта",
    "ua": "випливти / вийти з порту",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "naploviti se",
    "en": "to sail one's fill",
    "ru": "наплаваться (на судне)",
    "ua": "наплаватися (на судні)",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "poploviti",
    "en": "to set sail / sail for a bit",
    "ru": "поплыть / поплавать немного",
    "ua": "попливти / поплавати трохи",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "preploviti",
    "en": "to sail across / cross by sea",
    "ru": "переплыть (море/реку)",
    "ua": "перепливти (море/річку)",
    "level": "B2",
    "category": "transport"
  },
  {
    "hr": "prokuhati",
    "en": "to boil / boil up",
    "ru": "прокипятить / вскипятить",
    "ua": "прокип'ятити / закип'ятити",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "otkuhati",
    "en": "to boil thoroughly / decoct",
    "ru": "отварить / выварить",
    "ua": "відварити / виварити",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "ukuhati",
    "en": "to boil down / preserve by boiling",
    "ru": "уварить / законсервировать",
    "ua": "уварити / законсервувати",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "iskuhati",
    "en": "to boil clean / extract by boiling",
    "ru": "выварить / прокипятить",
    "ua": "виварити / прокип'ятити",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "nakuhati",
    "en": "to cook a large quantity",
    "ru": "наготовить / наварить много",
    "ua": "наготувати / наварити багато",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "pokuhati",
    "en": "to cook a bit / attempt cooking",
    "ru": "поварить / приготовить немного",
    "ua": "поварити / приготувати трохи",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "prekuhati",
    "en": "to overcook",
    "ru": "переварить (еду)",
    "ua": "переварити (їжу)",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "propeći",
    "en": "to bake through / roast well",
    "ru": "пропечь / хорошо прожарить",
    "ua": "пропекти / добре просмажити",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "otpeći",
    "en": "to bake and release / finish baking",
    "ru": "отпечь",
    "ua": "відпекти",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "upeći",
    "en": "to bake in / get hot (sun)",
    "ru": "припечь (о солнце)",
    "ua": "припекти (про сонце)",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "ispeći",
    "en": "to bake / roast completely",
    "ru": "испечь / пожарить",
    "ua": "спекти / посмажити",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "napeći",
    "en": "to bake a large quantity",
    "ru": "напечь / нажарить много",
    "ua": "напекти / насмажити багато",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "popeći",
    "en": "to brown / roast slightly",
    "ru": "подрумянить / слегка обжарить",
    "ua": "підрум'янити / злегка обсмажити",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "prepeći",
    "en": "to overbake / toast",
    "ru": "перепечь / поджарить (тост)",
    "ua": "перепекти / підсмажити (тост)",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "pročistiti",
    "en": "to clean out / purify / clear",
    "ru": "прочистить / очистить",
    "ua": "прочистити / очистити",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "očistiti",
    "en": "to clean / peel / purify",
    "ru": "очистить / почистить",
    "ua": "очистити / почистити",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "učistiti",
    "en": "to clean up / tidy",
    "ru": "прибрать / убрать",
    "ua": "прибирати / причепурити",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "iščistiti",
    "en": "to clean out completely",
    "ru": "вычистить",
    "ua": "вичистити",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "načistiti",
    "en": "to clean a large quantity",
    "ru": "начистить (картошки и т.д.)",
    "ua": "начистити (картоплі тощо)",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "počistiti",
    "en": "to clean up / sweep",
    "ru": "почистить / убрать",
    "ua": "почистити / прибрати",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "prečistiti",
    "en": "to refine / clean again",
    "ru": "перечистить / очистить заново",
    "ua": "перечистити / очистити заново",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "proprati",
    "en": "to rinse / wash slightly",
    "ru": "промыть / прополоскать",
    "ua": "промити / прополоскати",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "otprati",
    "en": "to wash off / remove by washing",
    "ru": "отмыть / отстирать",
    "ua": "відмити / відіпрати",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "uprati",
    "en": "to wash into / get dirty",
    "ru": "запачкать стиркой",
    "ua": "забруднити пранням",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "isprati",
    "en": "to rinse / wash out",
    "ru": "выполоскать / промыть",
    "ua": "виполоскати / промити",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "naprati",
    "en": "to wash a large quantity",
    "ru": "настирать много",
    "ua": "напрати багато",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "poprati",
    "en": "to wash a little / wash up",
    "ru": "постирать немного / помыть посуду",
    "ua": "попрати трохи / помити посуд",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "preprati",
    "en": "to wash again",
    "ru": "перестирать / перемыть",
    "ua": "перепрати / перемити",
    "level": "B2",
    "category": "home"
  },
  {
    "hr": "prokupovati",
    "en": "to buy through / buy out",
    "ru": "скупать",
    "ua": "скуповувати",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "otkupovati",
    "en": "to buy back / redeem gradually",
    "ru": "выкупать / откупать",
    "ua": "викуповувати / відкуповувати",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "ukupovati",
    "en": "to buy into",
    "ru": "докупать",
    "ua": "докуповувати",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "iskupovati",
    "en": "to buy out completely",
    "ru": "раскупать",
    "ua": "розкуповувати",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "nakupovati se",
    "en": "to buy a lot / shop one's fill",
    "ru": "накупить много / накупиться",
    "ua": "накупити багато / накупуватися",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "pokupovati",
    "en": "to buy up everything",
    "ru": "скупить / раскупить",
    "ua": "скупити / розкупити",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "prekupovati",
    "en": "to buy for resale / overpay",
    "ru": "перекупать",
    "ua": "перекуповувати",
    "level": "B2",
    "category": "food"
  },
  {
    "hr": "proprodavati",
    "en": "to resell",
    "ru": "перепродавать",
    "ua": "перепродавати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "otprodavati",
    "en": "to sell off a part",
    "ru": "распродавать часть",
    "ua": "розпродавати частину",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "uprodavati",
    "en": "to sell successfully",
    "ru": "продавать выгодно",
    "ua": "продавати вигідно",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "isprodavati",
    "en": "to sell out completely",
    "ru": "распродать",
    "ua": "розпродати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "naprodavati",
    "en": "to sell a large quantity",
    "ru": "напродавать много",
    "ua": "напродавати багато",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "poprodavati",
    "en": "to sell off completely / sell some",
    "ru": "распродать всё",
    "ua": "розпродати все",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "preprodavati",
    "en": "to resell / retail",
    "ru": "перепродавать",
    "ua": "перепродавати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "proplaćati",
    "en": "to pay through",
    "ru": "проплачивать",
    "ua": "проплачувати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "otplaćati",
    "en": "to pay off in installments",
    "ru": "выплачивать частями",
    "ua": "виплачувати частинами",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "uplaćati",
    "en": "to deposit / pay in",
    "ru": "вносить плату / оплачивать",
    "ua": "вносити плату / сплачувати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "isplaćati",
    "en": "to pay out completely",
    "ru": "выплачивать",
    "ua": "виплачувати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "naplaćati se",
    "en": "to pay a lot / pay one's fill",
    "ru": "наплатиться",
    "ua": "наплатитися",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "poplaćati",
    "en": "to pay off all debts",
    "ru": "выплатить / оплатить всё",
    "ua": "виплатити / оплатити все",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "preplaćati",
    "en": "to overpay",
    "ru": "переплачивать",
    "ua": "переплачувати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "proštedjeti",
    "en": "to save a certain amount",
    "ru": "сэкономить / накопить",
    "ua": "заощадити / накопичити",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "oštedjeti",
    "en": "to save up / spare",
    "ru": "сберечь / накопить",
    "ua": "зберегти / накопичити",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "uštedjeti",
    "en": "to save / economize successfully",
    "ru": "сэкономить / накопить (деньги)",
    "ua": "заощадити / накопичити (гроші)",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "ištedjeti",
    "en": "to save up thoroughly",
    "ru": "выкроить / накопить",
    "ua": "заощадити / накопичити все",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "naštedjeti",
    "en": "to save a large quantity",
    "ru": "накопить много",
    "ua": "накопичити багато",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "poštedjeti",
    "en": "to spare / show mercy",
    "ru": "пощадить",
    "ua": "пощадити",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "preštedjeti",
    "en": "to save excessively",
    "ru": "чрезмерно экономить",
    "ua": "надмірно заощаджувати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "protrošiti",
    "en": "to spend / waste",
    "ru": "растратить / промотать",
    "ua": "розтратити / протринькати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "odtrošiti",
    "en": "to spend a part",
    "ru": "потратить часть",
    "ua": "витратити частину",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "utrošiti",
    "en": "to consume / spend (time/effort)",
    "ru": "употребить / затратить",
    "ua": "витратити / спожити",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "istrošiti",
    "en": "to wear out / exhaust / spend all",
    "ru": "израсходовать / износить",
    "ua": "витратити / зносити",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "natrošiti se",
    "en": "to spend a lot of money",
    "ru": "потратиться сильно / натратиться",
    "ua": "витратитися сильно",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "potrošiti",
    "en": "to spend / consume",
    "ru": "потратить / израсходовать",
    "ua": "витратити / спожити",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "pretrošiti",
    "en": "to overspend",
    "ru": "перерасходовать",
    "ua": "перевитратити",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "prodarovati",
    "en": "to give away generously",
    "ru": "разварить / раздарить",
    "ua": "роздарувати",
    "level": "B2",
    "category": "family"
  },
  {
    "hr": "oddarovati",
    "en": "to return a gift / gift back",
    "ru": "отдарить",
    "ua": "віддарувати",
    "level": "B2",
    "category": "family"
  },
  {
    "hr": "udarovati",
    "en": "to gift into",
    "ru": "подарить",
    "ua": "подарувати",
    "level": "B2",
    "category": "family"
  },
  {
    "hr": "izdarovati",
    "en": "to give out as gifts",
    "ru": "одарить всех",
    "ua": "обдарувати всіх",
    "level": "B2",
    "category": "family"
  },
  {
    "hr": "nadarovati",
    "en": "to gift generously / shower with gifts",
    "ru": "надарить",
    "ua": "надарувати",
    "level": "B2",
    "category": "family"
  },
  {
    "hr": "podarovati",
    "en": "to present / grant / gift",
    "ru": "подарить / одарить",
    "ua": "подарувати / обдарувати",
    "level": "B2",
    "category": "family"
  },
  {
    "hr": "predarovati",
    "en": "to regift",
    "ru": "передарить",
    "ua": "передарувати",
    "level": "B2",
    "category": "family"
  },
  {
    "hr": "proslaviti",
    "en": "to celebrate / make famous",
    "ru": "прославить / отпраздновать",
    "ua": "прославити / відсвяткувати",
    "level": "B2",
    "category": "time"
  },
  {
    "hr": "odslaviti",
    "en": "to finish celebrating",
    "ru": "отпраздновать / закончить праздновать",
    "ua": "відсвяткувати / закінчити святкувати",
    "level": "B2",
    "category": "time"
  },
  {
    "hr": "uslaviti se",
    "en": "to become famous",
    "ru": "прославиться",
    "ua": "прославитися",
    "level": "B2",
    "category": "time"
  },
  {
    "hr": "isslaviti se",
    "en": "to celebrate thoroughly",
    "ru": "отпраздновать вдоволь",
    "ua": "відсвяткувати вволю",
    "level": "B2",
    "category": "time"
  },
  {
    "hr": "naslaviti se",
    "en": "to celebrate one's fill",
    "ru": "напраздноваться",
    "ua": "насвяткуватися",
    "level": "B2",
    "category": "time"
  },
  {
    "hr": "poslaviti",
    "en": "to celebrate a bit / honor",
    "ru": "попраздновать немного / почтить",
    "ua": "посвяткувати трохи / вшанувати",
    "level": "B2",
    "category": "time"
  },
  {
    "hr": "preslaviti",
    "en": "to celebrate excessively / celebrate again",
    "ru": "перепраздновать",
    "ua": "пересвяткувати",
    "level": "B2",
    "category": "time"
  },
  {
    "hr": "prisjetiti se",
    "en": "to recall / remember suddenly",
    "ru": "вспомнить / припомнить",
    "ua": "згадати / пригадати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "odsjećati se",
    "en": "to dissociate / stop remembering",
    "ru": "отвыкнуть помнить",
    "ua": "відучитися пам'ятати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "usjećati se",
    "en": "to imprint in memory",
    "ru": "запечатлеть в памяти",
    "ua": "закарбувати в пам'яті",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "prisjetiti se",
    "en": "to recall details",
    "ru": "вспомнить подробно",
    "ua": "згадати детально",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "nasjećati se",
    "en": "to remember to one's fill",
    "ru": "напомниться",
    "ua": "напам'ятатися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "prisjetiti se",
    "en": "to remember from time to time",
    "ru": "вспоминать время от времени",
    "ua": "згадувати час від часу",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "presjetiti se",
    "en": "to rethink / change mind",
    "ru": "опомниться / передумать",
    "ua": "оговтатися / передумати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "prozaboraviti",
    "en": "to start forgetting",
    "ru": "призабыть",
    "ua": "призабути",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "odzaboraviti",
    "en": "to unlearn forgetting / recall",
    "ru": "вспомнить забытое",
    "ua": "згадати забуте",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "uzaboraviti se",
    "en": "to get lost in thought",
    "ru": "забыться (в мыслях)",
    "ua": "забутися (у думках)",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "izzaboraviti",
    "en": "to forget completely",
    "ru": "позабыть совсем",
    "ua": "позабути зовсім",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "nazaboraviti se",
    "en": "to forget one's worries",
    "ru": "забыться от забот",
    "ua": "забутися від турбот",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "pozaboraviti",
    "en": "to forget gradually / forget many things",
    "ru": "позабыть",
    "ua": "позабувати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "prezaboraviti",
    "en": "to forget completely / over-forget",
    "ru": "напрочь забыть",
    "ua": "начисто забути",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "pronadati se",
    "en": "to start hoping",
    "ru": "начать надеяться",
    "ua": "почати сподіватися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "odnadati se",
    "en": "to lose hope / stop hoping",
    "ru": "перестать надеяться",
    "ua": "перестати сподіватися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "unadati se",
    "en": "to hope intensely",
    "ru": "сильно надеяться",
    "ua": "сильно сподіватися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "iznadati se",
    "en": "to hope to the end / exhaust hope",
    "ru": "исчерпать надежду",
    "ua": "вичерпати надію",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "nanadati se",
    "en": "to hope for a lot",
    "ru": "надеяться на многое",
    "ua": "сподіватися на багато що",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "ponadati se",
    "en": "to hope / cherish hope",
    "ru": "понадеяться / понадеяться на время",
    "ua": "посподіватися / понадіятися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "prenadati se",
    "en": "to over-hope / expect too much",
    "ru": "перенадеяться / возложить лишние надежды",
    "ua": "пересподіватися / покласти зайві надії",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "probojati se",
    "en": "to experience fear for a bit / start fearing",
    "ru": "испугаться / забояться",
    "ua": "злякатися / забоятися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "odbojati se",
    "en": "to stop fearing / overcome fear",
    "ru": "перестать бояться",
    "ua": "перестати боятися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "ubojati se",
    "en": "to become afraid",
    "ru": "испугаться",
    "ua": "злякатися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "izbojati se",
    "en": "to fear thoroughly",
    "ru": "набояться",
    "ua": "набоятися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "nabojati se",
    "en": "to experience a lot of fear",
    "ru": "набояться вдоволь",
    "ua": "набоятися вволю",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "pobojati se",
    "en": "to fear / become slightly afraid",
    "ru": "побояться / испугаться",
    "ua": "побоятися / злякатися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "prebojati se",
    "en": "to overcome fear / fear too much",
    "ru": "перебояться",
    "ua": "перебоятися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "provoljeti",
    "en": "to grow fond of / start loving",
    "ru": "полюбить / проникнуться любовью",
    "ua": "полюбити / перейнятися любов'ю",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "odvoljeti",
    "en": "to stop loving / fall out of love",
    "ru": "разлюбить / перестать любить",
    "ua": "розлюбити / перестати любити",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "uvoljeti",
    "en": "to fall in love",
    "ru": "влюбиться",
    "ua": "закохатися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "izvoljeti",
    "en": "to choose / deign",
    "ru": "соизволить / изволить",
    "ua": "зволити / звикнути",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "navoljeti se",
    "en": "to love one's fill",
    "ru": "налюбиться",
    "ua": "налюбитися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "povoljeti",
    "en": "to prefer / grow to like",
    "ru": "полюбить немного / предпочесть",
    "ua": "полюбити трохи / віддати перевагу",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "prevoljeti",
    "en": "to get over someone / stop loving",
    "ru": "разлюбить / переболеть (кем-то)",
    "ua": "розлюбити / переболіти (кимось)",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "promrziti",
    "en": "to start hating",
    "ru": "возненавидеть",
    "ua": "зоненавидіти",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "odmrziti",
    "en": "to stop hating",
    "ru": "перестать ненавидеть",
    "ua": "перестати ненавидіти",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "umrziti se",
    "en": "to become hated",
    "ru": "возненавидеть",
    "ua": "зоненавидіти",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "izmrziti",
    "en": "to hate thoroughly",
    "ru": "возненавидеть окончательно",
    "ua": "зоненавидіти остаточно",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "namrziti se",
    "en": "to hate to one's fill",
    "ru": "наненавидеться",
    "ua": "наненавидітися",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "pomrziti",
    "en": "to grow to hate / hate a bit",
    "ru": "возненавидеть / невзлюбить",
    "ua": "зоненавидіти / зненавидіти",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "premrziti",
    "en": "to stop hating / overcome hatred",
    "ru": "перестать ненавидеть",
    "ua": "перестати ненавидіти",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "proželjeti",
    "en": "to start wishing / desire",
    "ru": "зажелать / захотеть",
    "ua": "забажати / захотіти",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "odželjeti",
    "en": "to stop wishing / get over a wish",
    "ru": "перехотеть",
    "ua": "перехотіти",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "uželjeti se",
    "en": "to miss / long for",
    "ru": "соскучиться / возжелать",
    "ua": "скучити / забажати",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "izželjeti se",
    "en": "to long for deeply",
    "ru": "соскучиться сильно",
    "ua": "сильно скучити",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "naželjeti se",
    "en": "to wish for one's fill / satisfy desires",
    "ru": "нажелаться вдоволь",
    "ua": "набажатися вволю",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "poželjeti",
    "en": "to wish / want / desire",
    "ru": "пожелать / захотеть",
    "ua": "побажати / захотіти",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "preželjeti",
    "en": "to stop wishing / get over someone",
    "ru": "перехотеть / переболеть желанием",
    "ua": "перехотіти / переболіти бажанням",
    "level": "B2",
    "category": "emotions"
  },
  {
    "hr": "protražiti",
    "en": "to search through / search for a bit",
    "ru": "поискать немного",
    "ua": "пошукати трохи",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "odtražiti",
    "en": "to stop searching / cancel request",
    "ru": "перестать искать / отозвать требование",
    "ua": "перестати шукати / відкликати вимогу",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "utražiti",
    "en": "to satisfy a demand",
    "ru": "удовлетворить требование",
    "ua": "задовольнити вимогу",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "istražiti",
    "en": "to investigate / research / explore",
    "ru": "исследовать / расследовать",
    "ua": "дослідити / розслідувати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "natražiti se",
    "en": "to search a lot / search one's fill",
    "ru": "наискаться",
    "ua": "нашукатися",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "potražiti",
    "en": "to look for / seek",
    "ru": "поискать / поискать кого-то",
    "ua": "пошукати / підшукати когось",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "pretražiti",
    "en": "to search / ransack / scan",
    "ru": "обыскать / перерыть",
    "ua": "обшукати / перерити",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "pronaći",
    "en": "to find / discover / locate",
    "ru": "найти / обнаружить",
    "ua": "знайти / виявити",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "odnaći",
    "en": "to lose track of a find",
    "ru": "потерять найденное",
    "ua": "втратити знайдене",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "unaći",
    "en": "to fit in / find a place",
    "ru": "найти своё место",
    "ua": "знайти свое місце",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "iznaći",
    "en": "to devise / find a way / invent",
    "ru": "изыскать / придумать (решение)",
    "ua": "відшукати / винайти (рішення)",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "nanaći",
    "en": "to find by chance / stumble upon",
    "ru": "случайно найти",
    "ua": "випадково знайти",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "ponaći",
    "en": "to find here and there",
    "ru": "находить кое-где",
    "ua": "знаходити подекуди",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "prenaći",
    "en": "to find too many / find again",
    "ru": "перенайти",
    "ua": "перезнайти",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "progubiti",
    "en": "to start losing / lose gradually",
    "ru": "начать терять",
    "ua": "почати втрачати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "odgubiti",
    "en": "to recoup / stop losing",
    "ru": "отыграть / перестать терять",
    "ua": "відіграти / перестати втрачати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "ugubiti",
    "en": "to lose inside / waste",
    "ru": "погубить / потерять внутри",
    "ua": "погубити / втратити всередині",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "izgubiti",
    "en": "to lose",
    "ru": "потерять",
    "ua": "втратити",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "nagubiti",
    "en": "to lose a large quantity",
    "ru": "потерять много",
    "ua": "втратити багато",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "pogubiti",
    "en": "to lose many things / execute",
    "ru": "растерять / казнить",
    "ua": "розгубити / стратити",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "pregubiti",
    "en": "to lose completely / over-lose",
    "ru": "перетерять",
    "ua": "перевтрачати",
    "level": "B2",
    "category": "work"
  },
  {
    "hr": "propobijediti",
    "en": "to win through / carry the day",
    "ru": "пробиться к победе",
    "ua": "пробитися до перемоги",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "odpobijediti",
    "en": "to defend a win",
    "ru": "отстоять победу",
    "ua": "відстояти перемогу",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "upobijediti se",
    "en": "to secure a victory",
    "ru": "утвердить победу",
    "ua": "закріпити перемогу",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "ispobijediti",
    "en": "to win completely / conquer all",
    "ru": "победить всех",
    "ua": "перемогти всіх",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "napobijediti se",
    "en": "to win many times / win one's fill",
    "ru": "напобеждаться",
    "ua": "наперемагатися",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "popobijediti",
    "en": "to defeat one by one",
    "ru": "победить поочерёдно",
    "ua": "перемогти по черзі",
    "level": "B2",
    "category": "sports"
  },
  {
    "hr": "prepobijediti",
    "en": "to conquer thoroughly / overcome again",
    "ru": "одолеть / перепобедить",
    "ua": "перемогти знову / здолати",
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
