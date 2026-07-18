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
  {
    "hr": "stoti 21",
    "en": "hundredth 21",
    "ru": "сотый 21",
    "ua": "сотий 21",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 22",
    "en": "hundredth 22",
    "ru": "сотый 22",
    "ua": "сотий 22",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 23",
    "en": "hundredth 23",
    "ru": "сотый 23",
    "ua": "сотий 23",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 24",
    "en": "hundredth 24",
    "ru": "сотый 24",
    "ua": "сотий 24",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 25",
    "en": "hundredth 25",
    "ru": "сотый 25",
    "ua": "сотий 25",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 26",
    "en": "hundredth 26",
    "ru": "сотый 26",
    "ua": "сотий 26",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 27",
    "en": "hundredth 27",
    "ru": "сотый 27",
    "ua": "сотий 27",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 28",
    "en": "hundredth 28",
    "ru": "сотый 28",
    "ua": "сотий 28",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 29",
    "en": "hundredth 29",
    "ru": "сотый 29",
    "ua": "сотий 29",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 30",
    "en": "hundredth 30",
    "ru": "сотый 30",
    "ua": "сотий 30",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 31",
    "en": "hundredth 31",
    "ru": "сотый 31",
    "ua": "сотий 31",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 32",
    "en": "hundredth 32",
    "ru": "сотый 32",
    "ua": "сотий 32",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 33",
    "en": "hundredth 33",
    "ru": "сотый 33",
    "ua": "сотий 33",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 34",
    "en": "hundredth 34",
    "ru": "сотый 34",
    "ua": "сотий 34",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 35",
    "en": "hundredth 35",
    "ru": "сотый 35",
    "ua": "сотий 35",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 36",
    "en": "hundredth 36",
    "ru": "сотый 36",
    "ua": "сотий 36",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 37",
    "en": "hundredth 37",
    "ru": "сотый 37",
    "ua": "сотий 37",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 38",
    "en": "hundredth 38",
    "ru": "сотый 38",
    "ua": "сотий 38",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 39",
    "en": "hundredth 39",
    "ru": "сотый 39",
    "ua": "сотий 39",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 40",
    "en": "hundredth 40",
    "ru": "сотый 40",
    "ua": "сотий 40",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 41",
    "en": "hundredth 41",
    "ru": "сотый 41",
    "ua": "сотий 41",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 42",
    "en": "hundredth 42",
    "ru": "сотый 42",
    "ua": "сотий 42",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 43",
    "en": "hundredth 43",
    "ru": "сотый 43",
    "ua": "сотий 43",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 44",
    "en": "hundredth 44",
    "ru": "сотый 44",
    "ua": "сотий 44",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 45",
    "en": "hundredth 45",
    "ru": "сотый 45",
    "ua": "сотий 45",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 46",
    "en": "hundredth 46",
    "ru": "сотый 46",
    "ua": "сотий 46",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 47",
    "en": "hundredth 47",
    "ru": "сотый 47",
    "ua": "сотий 47",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 48",
    "en": "hundredth 48",
    "ru": "сотый 48",
    "ua": "сотий 48",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 49",
    "en": "hundredth 49",
    "ru": "сотый 49",
    "ua": "сотий 49",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 50",
    "en": "hundredth 50",
    "ru": "сотый 50",
    "ua": "сотий 50",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 51",
    "en": "hundredth 51",
    "ru": "сотый 51",
    "ua": "сотий 51",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 52",
    "en": "hundredth 52",
    "ru": "сотый 52",
    "ua": "сотий 52",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 53",
    "en": "hundredth 53",
    "ru": "сотый 53",
    "ua": "сотий 53",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 54",
    "en": "hundredth 54",
    "ru": "сотый 54",
    "ua": "сотий 54",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 55",
    "en": "hundredth 55",
    "ru": "сотый 55",
    "ua": "сотий 55",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 56",
    "en": "hundredth 56",
    "ru": "сотый 56",
    "ua": "сотий 56",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 57",
    "en": "hundredth 57",
    "ru": "сотый 57",
    "ua": "сотий 57",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 58",
    "en": "hundredth 58",
    "ru": "сотый 58",
    "ua": "сотий 58",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 59",
    "en": "hundredth 59",
    "ru": "сотый 59",
    "ua": "сотий 59",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 60",
    "en": "hundredth 60",
    "ru": "сотый 60",
    "ua": "сотий 60",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 61",
    "en": "hundredth 61",
    "ru": "сотый 61",
    "ua": "сотий 61",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 62",
    "en": "hundredth 62",
    "ru": "сотый 62",
    "ua": "сотий 62",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 63",
    "en": "hundredth 63",
    "ru": "сотый 63",
    "ua": "сотий 63",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 64",
    "en": "hundredth 64",
    "ru": "сотый 64",
    "ua": "сотий 64",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 65",
    "en": "hundredth 65",
    "ru": "сотый 65",
    "ua": "сотий 65",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 66",
    "en": "hundredth 66",
    "ru": "сотый 66",
    "ua": "сотий 66",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 67",
    "en": "hundredth 67",
    "ru": "сотый 67",
    "ua": "сотий 67",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 68",
    "en": "hundredth 68",
    "ru": "сотый 68",
    "ua": "сотий 68",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 69",
    "en": "hundredth 69",
    "ru": "сотый 69",
    "ua": "сотий 69",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 70",
    "en": "hundredth 70",
    "ru": "сотый 70",
    "ua": "сотий 70",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 71",
    "en": "hundredth 71",
    "ru": "сотый 71",
    "ua": "сотий 71",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 72",
    "en": "hundredth 72",
    "ru": "сотый 72",
    "ua": "сотий 72",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 73",
    "en": "hundredth 73",
    "ru": "сотый 73",
    "ua": "сотий 73",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 74",
    "en": "hundredth 74",
    "ru": "сотый 74",
    "ua": "сотий 74",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 75",
    "en": "hundredth 75",
    "ru": "сотый 75",
    "ua": "сотий 75",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 76",
    "en": "hundredth 76",
    "ru": "сотый 76",
    "ua": "сотий 76",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 77",
    "en": "hundredth 77",
    "ru": "сотый 77",
    "ua": "сотий 77",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 78",
    "en": "hundredth 78",
    "ru": "сотый 78",
    "ua": "сотий 78",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 79",
    "en": "hundredth 79",
    "ru": "сотый 79",
    "ua": "сотий 79",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 80",
    "en": "hundredth 80",
    "ru": "сотый 80",
    "ua": "сотий 80",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 81",
    "en": "hundredth 81",
    "ru": "сотый 81",
    "ua": "сотий 81",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 82",
    "en": "hundredth 82",
    "ru": "сотый 82",
    "ua": "сотий 82",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 83",
    "en": "hundredth 83",
    "ru": "сотый 83",
    "ua": "сотий 83",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 84",
    "en": "hundredth 84",
    "ru": "сотый 84",
    "ua": "сотий 84",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 85",
    "en": "hundredth 85",
    "ru": "сотый 85",
    "ua": "сотий 85",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 86",
    "en": "hundredth 86",
    "ru": "сотый 86",
    "ua": "сотий 86",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 87",
    "en": "hundredth 87",
    "ru": "сотый 87",
    "ua": "сотий 87",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 88",
    "en": "hundredth 88",
    "ru": "сотый 88",
    "ua": "сотий 88",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 89",
    "en": "hundredth 89",
    "ru": "сотый 89",
    "ua": "сотий 89",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 90",
    "en": "hundredth 90",
    "ru": "сотый 90",
    "ua": "сотий 90",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 91",
    "en": "hundredth 91",
    "ru": "сотый 91",
    "ua": "сотий 91",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 92",
    "en": "hundredth 92",
    "ru": "сотый 92",
    "ua": "сотий 92",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 93",
    "en": "hundredth 93",
    "ru": "сотый 93",
    "ua": "сотий 93",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 94",
    "en": "hundredth 94",
    "ru": "сотый 94",
    "ua": "сотий 94",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 95",
    "en": "hundredth 95",
    "ru": "сотый 95",
    "ua": "сотий 95",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 96",
    "en": "hundredth 96",
    "ru": "сотый 96",
    "ua": "сотий 96",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 97",
    "en": "hundredth 97",
    "ru": "сотый 97",
    "ua": "сотий 97",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 98",
    "en": "hundredth 98",
    "ru": "сотый 98",
    "ua": "сотий 98",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 99",
    "en": "hundredth 99",
    "ru": "сотый 99",
    "ua": "сотий 99",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 100",
    "en": "hundredth 100",
    "ru": "сотый 100",
    "ua": "сотий 100",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 101",
    "en": "hundredth 101",
    "ru": "сотый 101",
    "ua": "сотий 101",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 102",
    "en": "hundredth 102",
    "ru": "сотый 102",
    "ua": "сотий 102",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 103",
    "en": "hundredth 103",
    "ru": "сотый 103",
    "ua": "сотий 103",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 104",
    "en": "hundredth 104",
    "ru": "сотый 104",
    "ua": "сотий 104",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 105",
    "en": "hundredth 105",
    "ru": "сотый 105",
    "ua": "сотий 105",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 106",
    "en": "hundredth 106",
    "ru": "сотый 106",
    "ua": "сотий 106",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 107",
    "en": "hundredth 107",
    "ru": "сотый 107",
    "ua": "сотий 107",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 108",
    "en": "hundredth 108",
    "ru": "сотый 108",
    "ua": "сотий 108",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 109",
    "en": "hundredth 109",
    "ru": "сотый 109",
    "ua": "сотий 109",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 110",
    "en": "hundredth 110",
    "ru": "сотый 110",
    "ua": "сотий 110",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 111",
    "en": "hundredth 111",
    "ru": "сотый 111",
    "ua": "сотий 111",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 112",
    "en": "hundredth 112",
    "ru": "сотый 112",
    "ua": "сотий 112",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 113",
    "en": "hundredth 113",
    "ru": "сотый 113",
    "ua": "сотий 113",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 114",
    "en": "hundredth 114",
    "ru": "сотый 114",
    "ua": "сотий 114",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 115",
    "en": "hundredth 115",
    "ru": "сотый 115",
    "ua": "сотий 115",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 116",
    "en": "hundredth 116",
    "ru": "сотый 116",
    "ua": "сотий 116",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 117",
    "en": "hundredth 117",
    "ru": "сотый 117",
    "ua": "сотий 117",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 118",
    "en": "hundredth 118",
    "ru": "сотый 118",
    "ua": "сотий 118",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 119",
    "en": "hundredth 119",
    "ru": "сотый 119",
    "ua": "сотий 119",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 120",
    "en": "hundredth 120",
    "ru": "сотый 120",
    "ua": "сотий 120",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 121",
    "en": "hundredth 121",
    "ru": "сотый 121",
    "ua": "сотий 121",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 122",
    "en": "hundredth 122",
    "ru": "сотый 122",
    "ua": "сотий 122",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 123",
    "en": "hundredth 123",
    "ru": "сотый 123",
    "ua": "сотий 123",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 124",
    "en": "hundredth 124",
    "ru": "сотый 124",
    "ua": "сотий 124",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 125",
    "en": "hundredth 125",
    "ru": "сотый 125",
    "ua": "сотий 125",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 126",
    "en": "hundredth 126",
    "ru": "сотый 126",
    "ua": "сотий 126",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 127",
    "en": "hundredth 127",
    "ru": "сотый 127",
    "ua": "сотий 127",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 128",
    "en": "hundredth 128",
    "ru": "сотый 128",
    "ua": "сотий 128",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 129",
    "en": "hundredth 129",
    "ru": "сотый 129",
    "ua": "сотий 129",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 130",
    "en": "hundredth 130",
    "ru": "сотый 130",
    "ua": "сотий 130",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 131",
    "en": "hundredth 131",
    "ru": "сотый 131",
    "ua": "сотий 131",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 132",
    "en": "hundredth 132",
    "ru": "сотый 132",
    "ua": "сотий 132",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 133",
    "en": "hundredth 133",
    "ru": "сотый 133",
    "ua": "сотий 133",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 134",
    "en": "hundredth 134",
    "ru": "сотый 134",
    "ua": "сотий 134",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 135",
    "en": "hundredth 135",
    "ru": "сотый 135",
    "ua": "сотий 135",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 136",
    "en": "hundredth 136",
    "ru": "сотый 136",
    "ua": "сотий 136",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 137",
    "en": "hundredth 137",
    "ru": "сотый 137",
    "ua": "сотий 137",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 138",
    "en": "hundredth 138",
    "ru": "сотый 138",
    "ua": "сотий 138",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 139",
    "en": "hundredth 139",
    "ru": "сотый 139",
    "ua": "сотий 139",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 140",
    "en": "hundredth 140",
    "ru": "сотый 140",
    "ua": "сотий 140",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 141",
    "en": "hundredth 141",
    "ru": "сотый 141",
    "ua": "сотий 141",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 142",
    "en": "hundredth 142",
    "ru": "сотый 142",
    "ua": "сотий 142",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 143",
    "en": "hundredth 143",
    "ru": "сотый 143",
    "ua": "сотий 143",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 144",
    "en": "hundredth 144",
    "ru": "сотый 144",
    "ua": "сотий 144",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 145",
    "en": "hundredth 145",
    "ru": "сотый 145",
    "ua": "сотий 145",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 146",
    "en": "hundredth 146",
    "ru": "сотый 146",
    "ua": "сотий 146",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 147",
    "en": "hundredth 147",
    "ru": "сотый 147",
    "ua": "сотий 147",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 148",
    "en": "hundredth 148",
    "ru": "сотый 148",
    "ua": "сотий 148",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 149",
    "en": "hundredth 149",
    "ru": "сотый 149",
    "ua": "сотий 149",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 150",
    "en": "hundredth 150",
    "ru": "сотый 150",
    "ua": "сотий 150",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 151",
    "en": "hundredth 151",
    "ru": "сотый 151",
    "ua": "сотий 151",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 152",
    "en": "hundredth 152",
    "ru": "сотый 152",
    "ua": "сотий 152",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 153",
    "en": "hundredth 153",
    "ru": "сотый 153",
    "ua": "сотий 153",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 154",
    "en": "hundredth 154",
    "ru": "сотый 154",
    "ua": "сотий 154",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 155",
    "en": "hundredth 155",
    "ru": "сотый 155",
    "ua": "сотий 155",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 156",
    "en": "hundredth 156",
    "ru": "сотый 156",
    "ua": "сотий 156",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 157",
    "en": "hundredth 157",
    "ru": "сотый 157",
    "ua": "сотий 157",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 158",
    "en": "hundredth 158",
    "ru": "сотый 158",
    "ua": "сотий 158",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 159",
    "en": "hundredth 159",
    "ru": "сотый 159",
    "ua": "сотий 159",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 160",
    "en": "hundredth 160",
    "ru": "сотый 160",
    "ua": "сотий 160",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 161",
    "en": "hundredth 161",
    "ru": "сотый 161",
    "ua": "сотий 161",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 162",
    "en": "hundredth 162",
    "ru": "сотый 162",
    "ua": "сотий 162",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 163",
    "en": "hundredth 163",
    "ru": "сотый 163",
    "ua": "сотий 163",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 164",
    "en": "hundredth 164",
    "ru": "сотый 164",
    "ua": "сотий 164",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 165",
    "en": "hundredth 165",
    "ru": "сотый 165",
    "ua": "сотий 165",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 166",
    "en": "hundredth 166",
    "ru": "сотый 166",
    "ua": "сотий 166",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 167",
    "en": "hundredth 167",
    "ru": "сотый 167",
    "ua": "сотий 167",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 168",
    "en": "hundredth 168",
    "ru": "сотый 168",
    "ua": "сотий 168",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 169",
    "en": "hundredth 169",
    "ru": "сотый 169",
    "ua": "сотий 169",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 170",
    "en": "hundredth 170",
    "ru": "сотый 170",
    "ua": "сотий 170",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 171",
    "en": "hundredth 171",
    "ru": "сотый 171",
    "ua": "сотий 171",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 172",
    "en": "hundredth 172",
    "ru": "сотый 172",
    "ua": "сотий 172",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 173",
    "en": "hundredth 173",
    "ru": "сотый 173",
    "ua": "сотий 173",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 174",
    "en": "hundredth 174",
    "ru": "сотый 174",
    "ua": "сотий 174",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 175",
    "en": "hundredth 175",
    "ru": "сотый 175",
    "ua": "сотий 175",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 176",
    "en": "hundredth 176",
    "ru": "сотый 176",
    "ua": "сотий 176",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 177",
    "en": "hundredth 177",
    "ru": "сотый 177",
    "ua": "сотий 177",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 178",
    "en": "hundredth 178",
    "ru": "сотый 178",
    "ua": "сотий 178",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 179",
    "en": "hundredth 179",
    "ru": "сотый 179",
    "ua": "сотий 179",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 180",
    "en": "hundredth 180",
    "ru": "сотый 180",
    "ua": "сотий 180",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 181",
    "en": "hundredth 181",
    "ru": "сотый 181",
    "ua": "сотий 181",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 182",
    "en": "hundredth 182",
    "ru": "сотый 182",
    "ua": "сотий 182",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 183",
    "en": "hundredth 183",
    "ru": "сотый 183",
    "ua": "сотий 183",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 184",
    "en": "hundredth 184",
    "ru": "сотый 184",
    "ua": "сотий 184",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 185",
    "en": "hundredth 185",
    "ru": "сотый 185",
    "ua": "сотий 185",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 186",
    "en": "hundredth 186",
    "ru": "сотый 186",
    "ua": "сотий 186",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 187",
    "en": "hundredth 187",
    "ru": "сотый 187",
    "ua": "сотий 187",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 188",
    "en": "hundredth 188",
    "ru": "сотый 188",
    "ua": "сотий 188",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 189",
    "en": "hundredth 189",
    "ru": "сотый 189",
    "ua": "сотий 189",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 190",
    "en": "hundredth 190",
    "ru": "сотый 190",
    "ua": "сотий 190",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 191",
    "en": "hundredth 191",
    "ru": "сотый 191",
    "ua": "сотий 191",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 192",
    "en": "hundredth 192",
    "ru": "сотый 192",
    "ua": "сотий 192",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 193",
    "en": "hundredth 193",
    "ru": "сотый 193",
    "ua": "сотий 193",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 194",
    "en": "hundredth 194",
    "ru": "сотый 194",
    "ua": "сотий 194",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 195",
    "en": "hundredth 195",
    "ru": "сотый 195",
    "ua": "сотий 195",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 196",
    "en": "hundredth 196",
    "ru": "сотый 196",
    "ua": "сотий 196",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 197",
    "en": "hundredth 197",
    "ru": "сотый 197",
    "ua": "сотий 197",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 198",
    "en": "hundredth 198",
    "ru": "сотый 198",
    "ua": "сотий 198",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 199",
    "en": "hundredth 199",
    "ru": "сотый 199",
    "ua": "сотий 199",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 200",
    "en": "hundredth 200",
    "ru": "сотый 200",
    "ua": "сотий 200",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 201",
    "en": "hundredth 201",
    "ru": "сотый 201",
    "ua": "сотий 201",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 202",
    "en": "hundredth 202",
    "ru": "сотый 202",
    "ua": "сотий 202",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 203",
    "en": "hundredth 203",
    "ru": "сотый 203",
    "ua": "сотий 203",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 204",
    "en": "hundredth 204",
    "ru": "сотый 204",
    "ua": "сотий 204",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 205",
    "en": "hundredth 205",
    "ru": "сотый 205",
    "ua": "сотий 205",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 206",
    "en": "hundredth 206",
    "ru": "сотый 206",
    "ua": "сотий 206",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 207",
    "en": "hundredth 207",
    "ru": "сотый 207",
    "ua": "сотий 207",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 208",
    "en": "hundredth 208",
    "ru": "сотый 208",
    "ua": "сотий 208",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 209",
    "en": "hundredth 209",
    "ru": "сотый 209",
    "ua": "сотий 209",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 210",
    "en": "hundredth 210",
    "ru": "сотый 210",
    "ua": "сотий 210",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 211",
    "en": "hundredth 211",
    "ru": "сотый 211",
    "ua": "сотий 211",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 212",
    "en": "hundredth 212",
    "ru": "сотый 212",
    "ua": "сотий 212",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 213",
    "en": "hundredth 213",
    "ru": "сотый 213",
    "ua": "сотий 213",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 214",
    "en": "hundredth 214",
    "ru": "сотый 214",
    "ua": "сотий 214",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 215",
    "en": "hundredth 215",
    "ru": "сотый 215",
    "ua": "сотий 215",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 216",
    "en": "hundredth 216",
    "ru": "сотый 216",
    "ua": "сотий 216",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 217",
    "en": "hundredth 217",
    "ru": "сотый 217",
    "ua": "сотий 217",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 218",
    "en": "hundredth 218",
    "ru": "сотый 218",
    "ua": "сотий 218",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 219",
    "en": "hundredth 219",
    "ru": "сотый 219",
    "ua": "сотий 219",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 220",
    "en": "hundredth 220",
    "ru": "сотый 220",
    "ua": "сотий 220",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 221",
    "en": "hundredth 221",
    "ru": "сотый 221",
    "ua": "сотий 221",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 222",
    "en": "hundredth 222",
    "ru": "сотый 222",
    "ua": "сотий 222",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 223",
    "en": "hundredth 223",
    "ru": "сотый 223",
    "ua": "сотий 223",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 224",
    "en": "hundredth 224",
    "ru": "сотый 224",
    "ua": "сотий 224",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 225",
    "en": "hundredth 225",
    "ru": "сотый 225",
    "ua": "сотий 225",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 226",
    "en": "hundredth 226",
    "ru": "сотый 226",
    "ua": "сотий 226",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 227",
    "en": "hundredth 227",
    "ru": "сотый 227",
    "ua": "сотий 227",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 228",
    "en": "hundredth 228",
    "ru": "сотый 228",
    "ua": "сотий 228",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 229",
    "en": "hundredth 229",
    "ru": "сотый 229",
    "ua": "сотий 229",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 230",
    "en": "hundredth 230",
    "ru": "сотый 230",
    "ua": "сотий 230",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 231",
    "en": "hundredth 231",
    "ru": "сотый 231",
    "ua": "сотий 231",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 232",
    "en": "hundredth 232",
    "ru": "сотый 232",
    "ua": "сотий 232",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 233",
    "en": "hundredth 233",
    "ru": "сотый 233",
    "ua": "сотий 233",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 234",
    "en": "hundredth 234",
    "ru": "сотый 234",
    "ua": "сотий 234",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 235",
    "en": "hundredth 235",
    "ru": "сотый 235",
    "ua": "сотий 235",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 236",
    "en": "hundredth 236",
    "ru": "сотый 236",
    "ua": "сотий 236",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 237",
    "en": "hundredth 237",
    "ru": "сотый 237",
    "ua": "сотий 237",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 238",
    "en": "hundredth 238",
    "ru": "сотый 238",
    "ua": "сотий 238",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 239",
    "en": "hundredth 239",
    "ru": "сотый 239",
    "ua": "сотий 239",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 240",
    "en": "hundredth 240",
    "ru": "сотый 240",
    "ua": "сотий 240",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 241",
    "en": "hundredth 241",
    "ru": "сотый 241",
    "ua": "сотий 241",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 242",
    "en": "hundredth 242",
    "ru": "сотый 242",
    "ua": "сотий 242",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 243",
    "en": "hundredth 243",
    "ru": "сотый 243",
    "ua": "сотий 243",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 244",
    "en": "hundredth 244",
    "ru": "сотый 244",
    "ua": "сотий 244",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 245",
    "en": "hundredth 245",
    "ru": "сотый 245",
    "ua": "сотий 245",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 246",
    "en": "hundredth 246",
    "ru": "сотый 246",
    "ua": "сотий 246",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 247",
    "en": "hundredth 247",
    "ru": "сотый 247",
    "ua": "сотий 247",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 248",
    "en": "hundredth 248",
    "ru": "сотый 248",
    "ua": "сотий 248",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 249",
    "en": "hundredth 249",
    "ru": "сотый 249",
    "ua": "сотий 249",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 250",
    "en": "hundredth 250",
    "ru": "сотый 250",
    "ua": "сотий 250",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 251",
    "en": "hundredth 251",
    "ru": "сотый 251",
    "ua": "сотий 251",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 252",
    "en": "hundredth 252",
    "ru": "сотый 252",
    "ua": "сотий 252",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 253",
    "en": "hundredth 253",
    "ru": "сотый 253",
    "ua": "сотий 253",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 254",
    "en": "hundredth 254",
    "ru": "сотый 254",
    "ua": "сотий 254",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 255",
    "en": "hundredth 255",
    "ru": "сотый 255",
    "ua": "сотий 255",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 256",
    "en": "hundredth 256",
    "ru": "сотый 256",
    "ua": "сотий 256",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 257",
    "en": "hundredth 257",
    "ru": "сотый 257",
    "ua": "сотий 257",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 258",
    "en": "hundredth 258",
    "ru": "сотый 258",
    "ua": "сотий 258",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 259",
    "en": "hundredth 259",
    "ru": "сотый 259",
    "ua": "сотий 259",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 260",
    "en": "hundredth 260",
    "ru": "сотый 260",
    "ua": "сотий 260",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 261",
    "en": "hundredth 261",
    "ru": "сотый 261",
    "ua": "сотий 261",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 262",
    "en": "hundredth 262",
    "ru": "сотый 262",
    "ua": "сотий 262",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 263",
    "en": "hundredth 263",
    "ru": "сотый 263",
    "ua": "сотий 263",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 264",
    "en": "hundredth 264",
    "ru": "сотый 264",
    "ua": "сотий 264",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 265",
    "en": "hundredth 265",
    "ru": "сотый 265",
    "ua": "сотий 265",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 266",
    "en": "hundredth 266",
    "ru": "сотый 266",
    "ua": "сотий 266",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 267",
    "en": "hundredth 267",
    "ru": "сотый 267",
    "ua": "сотий 267",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 268",
    "en": "hundredth 268",
    "ru": "сотый 268",
    "ua": "сотий 268",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 269",
    "en": "hundredth 269",
    "ru": "сотый 269",
    "ua": "сотий 269",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 270",
    "en": "hundredth 270",
    "ru": "сотый 270",
    "ua": "сотий 270",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 271",
    "en": "hundredth 271",
    "ru": "сотый 271",
    "ua": "сотий 271",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 272",
    "en": "hundredth 272",
    "ru": "сотый 272",
    "ua": "сотий 272",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 273",
    "en": "hundredth 273",
    "ru": "сотый 273",
    "ua": "сотий 273",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 274",
    "en": "hundredth 274",
    "ru": "сотый 274",
    "ua": "сотий 274",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 275",
    "en": "hundredth 275",
    "ru": "сотый 275",
    "ua": "сотий 275",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 276",
    "en": "hundredth 276",
    "ru": "сотый 276",
    "ua": "сотий 276",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 277",
    "en": "hundredth 277",
    "ru": "сотый 277",
    "ua": "сотий 277",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 278",
    "en": "hundredth 278",
    "ru": "сотый 278",
    "ua": "сотий 278",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 279",
    "en": "hundredth 279",
    "ru": "сотый 279",
    "ua": "сотий 279",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 280",
    "en": "hundredth 280",
    "ru": "сотый 280",
    "ua": "сотий 280",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 281",
    "en": "hundredth 281",
    "ru": "сотый 281",
    "ua": "сотий 281",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 282",
    "en": "hundredth 282",
    "ru": "сотый 282",
    "ua": "сотий 282",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 283",
    "en": "hundredth 283",
    "ru": "сотый 283",
    "ua": "сотий 283",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 284",
    "en": "hundredth 284",
    "ru": "сотый 284",
    "ua": "сотий 284",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 285",
    "en": "hundredth 285",
    "ru": "сотый 285",
    "ua": "сотий 285",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 286",
    "en": "hundredth 286",
    "ru": "сотый 286",
    "ua": "сотий 286",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 287",
    "en": "hundredth 287",
    "ru": "сотый 287",
    "ua": "сотий 287",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 288",
    "en": "hundredth 288",
    "ru": "сотый 288",
    "ua": "сотий 288",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 289",
    "en": "hundredth 289",
    "ru": "сотый 289",
    "ua": "сотий 289",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 290",
    "en": "hundredth 290",
    "ru": "сотый 290",
    "ua": "сотий 290",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 291",
    "en": "hundredth 291",
    "ru": "сотый 291",
    "ua": "сотий 291",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 292",
    "en": "hundredth 292",
    "ru": "сотый 292",
    "ua": "сотий 292",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 293",
    "en": "hundredth 293",
    "ru": "сотый 293",
    "ua": "сотий 293",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 294",
    "en": "hundredth 294",
    "ru": "сотый 294",
    "ua": "сотий 294",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 295",
    "en": "hundredth 295",
    "ru": "сотый 295",
    "ua": "сотий 295",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 296",
    "en": "hundredth 296",
    "ru": "сотый 296",
    "ua": "сотий 296",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 297",
    "en": "hundredth 297",
    "ru": "сотый 297",
    "ua": "сотий 297",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 298",
    "en": "hundredth 298",
    "ru": "сотый 298",
    "ua": "сотий 298",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 299",
    "en": "hundredth 299",
    "ru": "сотый 299",
    "ua": "сотий 299",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 300",
    "en": "hundredth 300",
    "ru": "сотый 300",
    "ua": "сотий 300",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 301",
    "en": "hundredth 301",
    "ru": "сотый 301",
    "ua": "сотий 301",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 302",
    "en": "hundredth 302",
    "ru": "сотый 302",
    "ua": "сотий 302",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 303",
    "en": "hundredth 303",
    "ru": "сотый 303",
    "ua": "сотий 303",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 304",
    "en": "hundredth 304",
    "ru": "сотый 304",
    "ua": "сотий 304",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 305",
    "en": "hundredth 305",
    "ru": "сотый 305",
    "ua": "сотий 305",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 306",
    "en": "hundredth 306",
    "ru": "сотый 306",
    "ua": "сотий 306",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 307",
    "en": "hundredth 307",
    "ru": "сотый 307",
    "ua": "сотий 307",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 308",
    "en": "hundredth 308",
    "ru": "сотый 308",
    "ua": "сотий 308",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 309",
    "en": "hundredth 309",
    "ru": "сотый 309",
    "ua": "сотий 309",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 310",
    "en": "hundredth 310",
    "ru": "сотый 310",
    "ua": "сотий 310",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 311",
    "en": "hundredth 311",
    "ru": "сотый 311",
    "ua": "сотий 311",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 312",
    "en": "hundredth 312",
    "ru": "сотый 312",
    "ua": "сотий 312",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 313",
    "en": "hundredth 313",
    "ru": "сотый 313",
    "ua": "сотий 313",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 314",
    "en": "hundredth 314",
    "ru": "сотый 314",
    "ua": "сотий 314",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 315",
    "en": "hundredth 315",
    "ru": "сотый 315",
    "ua": "сотий 315",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 316",
    "en": "hundredth 316",
    "ru": "сотый 316",
    "ua": "сотий 316",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 317",
    "en": "hundredth 317",
    "ru": "сотый 317",
    "ua": "сотий 317",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 318",
    "en": "hundredth 318",
    "ru": "сотый 318",
    "ua": "сотий 318",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 319",
    "en": "hundredth 319",
    "ru": "сотый 319",
    "ua": "сотий 319",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 320",
    "en": "hundredth 320",
    "ru": "сотый 320",
    "ua": "сотий 320",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 321",
    "en": "hundredth 321",
    "ru": "сотый 321",
    "ua": "сотий 321",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 322",
    "en": "hundredth 322",
    "ru": "сотый 322",
    "ua": "сотий 322",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 323",
    "en": "hundredth 323",
    "ru": "сотый 323",
    "ua": "сотий 323",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 324",
    "en": "hundredth 324",
    "ru": "сотый 324",
    "ua": "сотий 324",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 325",
    "en": "hundredth 325",
    "ru": "сотый 325",
    "ua": "сотий 325",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 326",
    "en": "hundredth 326",
    "ru": "сотый 326",
    "ua": "сотий 326",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 327",
    "en": "hundredth 327",
    "ru": "сотый 327",
    "ua": "сотий 327",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 328",
    "en": "hundredth 328",
    "ru": "сотый 328",
    "ua": "сотий 328",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 329",
    "en": "hundredth 329",
    "ru": "сотый 329",
    "ua": "сотий 329",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 330",
    "en": "hundredth 330",
    "ru": "сотый 330",
    "ua": "сотий 330",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 331",
    "en": "hundredth 331",
    "ru": "сотый 331",
    "ua": "сотий 331",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 332",
    "en": "hundredth 332",
    "ru": "сотый 332",
    "ua": "сотий 332",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 333",
    "en": "hundredth 333",
    "ru": "сотый 333",
    "ua": "сотий 333",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 334",
    "en": "hundredth 334",
    "ru": "сотый 334",
    "ua": "сотий 334",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 335",
    "en": "hundredth 335",
    "ru": "сотый 335",
    "ua": "сотий 335",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 336",
    "en": "hundredth 336",
    "ru": "сотый 336",
    "ua": "сотий 336",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 337",
    "en": "hundredth 337",
    "ru": "сотый 337",
    "ua": "сотий 337",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 338",
    "en": "hundredth 338",
    "ru": "сотый 338",
    "ua": "сотий 338",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 339",
    "en": "hundredth 339",
    "ru": "сотый 339",
    "ua": "сотий 339",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 340",
    "en": "hundredth 340",
    "ru": "сотый 340",
    "ua": "сотий 340",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 341",
    "en": "hundredth 341",
    "ru": "сотый 341",
    "ua": "сотий 341",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 342",
    "en": "hundredth 342",
    "ru": "сотый 342",
    "ua": "сотий 342",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 343",
    "en": "hundredth 343",
    "ru": "сотый 343",
    "ua": "сотий 343",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 344",
    "en": "hundredth 344",
    "ru": "сотый 344",
    "ua": "сотий 344",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 345",
    "en": "hundredth 345",
    "ru": "сотый 345",
    "ua": "сотий 345",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 346",
    "en": "hundredth 346",
    "ru": "сотый 346",
    "ua": "сотий 346",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 347",
    "en": "hundredth 347",
    "ru": "сотый 347",
    "ua": "сотий 347",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 348",
    "en": "hundredth 348",
    "ru": "сотый 348",
    "ua": "сотий 348",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 349",
    "en": "hundredth 349",
    "ru": "сотый 349",
    "ua": "сотий 349",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 350",
    "en": "hundredth 350",
    "ru": "сотый 350",
    "ua": "сотий 350",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 351",
    "en": "hundredth 351",
    "ru": "сотый 351",
    "ua": "сотий 351",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 352",
    "en": "hundredth 352",
    "ru": "сотый 352",
    "ua": "сотий 352",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 353",
    "en": "hundredth 353",
    "ru": "сотый 353",
    "ua": "сотий 353",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 354",
    "en": "hundredth 354",
    "ru": "сотый 354",
    "ua": "сотий 354",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 355",
    "en": "hundredth 355",
    "ru": "сотый 355",
    "ua": "сотий 355",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 356",
    "en": "hundredth 356",
    "ru": "сотый 356",
    "ua": "сотий 356",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 357",
    "en": "hundredth 357",
    "ru": "сотый 357",
    "ua": "сотий 357",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 358",
    "en": "hundredth 358",
    "ru": "сотый 358",
    "ua": "сотий 358",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 359",
    "en": "hundredth 359",
    "ru": "сотый 359",
    "ua": "сотий 359",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 360",
    "en": "hundredth 360",
    "ru": "сотый 360",
    "ua": "сотий 360",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 361",
    "en": "hundredth 361",
    "ru": "сотый 361",
    "ua": "сотий 361",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 362",
    "en": "hundredth 362",
    "ru": "сотый 362",
    "ua": "сотий 362",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 363",
    "en": "hundredth 363",
    "ru": "сотый 363",
    "ua": "сотий 363",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 364",
    "en": "hundredth 364",
    "ru": "сотый 364",
    "ua": "сотий 364",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 365",
    "en": "hundredth 365",
    "ru": "сотый 365",
    "ua": "сотий 365",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 366",
    "en": "hundredth 366",
    "ru": "сотый 366",
    "ua": "сотий 366",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 367",
    "en": "hundredth 367",
    "ru": "сотый 367",
    "ua": "сотий 367",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 368",
    "en": "hundredth 368",
    "ru": "сотый 368",
    "ua": "сотий 368",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 369",
    "en": "hundredth 369",
    "ru": "сотый 369",
    "ua": "сотий 369",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 370",
    "en": "hundredth 370",
    "ru": "сотый 370",
    "ua": "сотий 370",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 371",
    "en": "hundredth 371",
    "ru": "сотый 371",
    "ua": "сотий 371",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 372",
    "en": "hundredth 372",
    "ru": "сотый 372",
    "ua": "сотий 372",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 373",
    "en": "hundredth 373",
    "ru": "сотый 373",
    "ua": "сотий 373",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 374",
    "en": "hundredth 374",
    "ru": "сотый 374",
    "ua": "сотий 374",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 375",
    "en": "hundredth 375",
    "ru": "сотый 375",
    "ua": "сотий 375",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 376",
    "en": "hundredth 376",
    "ru": "сотый 376",
    "ua": "сотий 376",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 377",
    "en": "hundredth 377",
    "ru": "сотый 377",
    "ua": "сотий 377",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 378",
    "en": "hundredth 378",
    "ru": "сотый 378",
    "ua": "сотий 378",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 379",
    "en": "hundredth 379",
    "ru": "сотый 379",
    "ua": "сотий 379",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 380",
    "en": "hundredth 380",
    "ru": "сотый 380",
    "ua": "сотий 380",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 381",
    "en": "hundredth 381",
    "ru": "сотый 381",
    "ua": "сотий 381",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 382",
    "en": "hundredth 382",
    "ru": "сотый 382",
    "ua": "сотий 382",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 383",
    "en": "hundredth 383",
    "ru": "сотый 383",
    "ua": "сотий 383",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 384",
    "en": "hundredth 384",
    "ru": "сотый 384",
    "ua": "сотий 384",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 385",
    "en": "hundredth 385",
    "ru": "сотый 385",
    "ua": "сотий 385",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 386",
    "en": "hundredth 386",
    "ru": "сотый 386",
    "ua": "сотий 386",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 387",
    "en": "hundredth 387",
    "ru": "сотый 387",
    "ua": "сотий 387",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 388",
    "en": "hundredth 388",
    "ru": "сотый 388",
    "ua": "сотий 388",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 389",
    "en": "hundredth 389",
    "ru": "сотый 389",
    "ua": "сотий 389",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 390",
    "en": "hundredth 390",
    "ru": "сотый 390",
    "ua": "сотий 390",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 391",
    "en": "hundredth 391",
    "ru": "сотый 391",
    "ua": "сотий 391",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 392",
    "en": "hundredth 392",
    "ru": "сотый 392",
    "ua": "сотий 392",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 393",
    "en": "hundredth 393",
    "ru": "сотый 393",
    "ua": "сотий 393",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 394",
    "en": "hundredth 394",
    "ru": "сотый 394",
    "ua": "сотий 394",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 395",
    "en": "hundredth 395",
    "ru": "сотый 395",
    "ua": "сотий 395",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 396",
    "en": "hundredth 396",
    "ru": "сотый 396",
    "ua": "сотий 396",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 397",
    "en": "hundredth 397",
    "ru": "сотый 397",
    "ua": "сотий 397",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 398",
    "en": "hundredth 398",
    "ru": "сотый 398",
    "ua": "сотий 398",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 399",
    "en": "hundredth 399",
    "ru": "сотый 399",
    "ua": "сотий 399",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 400",
    "en": "hundredth 400",
    "ru": "сотый 400",
    "ua": "сотий 400",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 401",
    "en": "hundredth 401",
    "ru": "сотый 401",
    "ua": "сотий 401",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 402",
    "en": "hundredth 402",
    "ru": "сотый 402",
    "ua": "сотий 402",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 403",
    "en": "hundredth 403",
    "ru": "сотый 403",
    "ua": "сотий 403",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 404",
    "en": "hundredth 404",
    "ru": "сотый 404",
    "ua": "сотий 404",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 405",
    "en": "hundredth 405",
    "ru": "сотый 405",
    "ua": "сотий 405",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 406",
    "en": "hundredth 406",
    "ru": "сотый 406",
    "ua": "сотий 406",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 407",
    "en": "hundredth 407",
    "ru": "сотый 407",
    "ua": "сотий 407",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 408",
    "en": "hundredth 408",
    "ru": "сотый 408",
    "ua": "сотий 408",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 409",
    "en": "hundredth 409",
    "ru": "сотый 409",
    "ua": "сотий 409",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 410",
    "en": "hundredth 410",
    "ru": "сотый 410",
    "ua": "сотий 410",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 411",
    "en": "hundredth 411",
    "ru": "сотый 411",
    "ua": "сотий 411",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 412",
    "en": "hundredth 412",
    "ru": "сотый 412",
    "ua": "сотий 412",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 413",
    "en": "hundredth 413",
    "ru": "сотый 413",
    "ua": "сотий 413",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 414",
    "en": "hundredth 414",
    "ru": "сотый 414",
    "ua": "сотий 414",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 415",
    "en": "hundredth 415",
    "ru": "сотый 415",
    "ua": "сотий 415",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 416",
    "en": "hundredth 416",
    "ru": "сотый 416",
    "ua": "сотий 416",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 417",
    "en": "hundredth 417",
    "ru": "сотый 417",
    "ua": "сотий 417",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 418",
    "en": "hundredth 418",
    "ru": "сотый 418",
    "ua": "сотий 418",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 419",
    "en": "hundredth 419",
    "ru": "сотый 419",
    "ua": "сотий 419",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 420",
    "en": "hundredth 420",
    "ru": "сотый 420",
    "ua": "сотий 420",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 421",
    "en": "hundredth 421",
    "ru": "сотый 421",
    "ua": "сотий 421",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 422",
    "en": "hundredth 422",
    "ru": "сотый 422",
    "ua": "сотий 422",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 423",
    "en": "hundredth 423",
    "ru": "сотый 423",
    "ua": "сотий 423",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 424",
    "en": "hundredth 424",
    "ru": "сотый 424",
    "ua": "сотий 424",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 425",
    "en": "hundredth 425",
    "ru": "сотый 425",
    "ua": "сотий 425",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 426",
    "en": "hundredth 426",
    "ru": "сотый 426",
    "ua": "сотий 426",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 427",
    "en": "hundredth 427",
    "ru": "сотый 427",
    "ua": "сотий 427",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 428",
    "en": "hundredth 428",
    "ru": "сотый 428",
    "ua": "сотий 428",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 429",
    "en": "hundredth 429",
    "ru": "сотый 429",
    "ua": "сотий 429",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 430",
    "en": "hundredth 430",
    "ru": "сотый 430",
    "ua": "сотий 430",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 431",
    "en": "hundredth 431",
    "ru": "сотый 431",
    "ua": "сотий 431",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 432",
    "en": "hundredth 432",
    "ru": "сотый 432",
    "ua": "сотий 432",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 433",
    "en": "hundredth 433",
    "ru": "сотый 433",
    "ua": "сотий 433",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 434",
    "en": "hundredth 434",
    "ru": "сотый 434",
    "ua": "сотий 434",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 435",
    "en": "hundredth 435",
    "ru": "сотый 435",
    "ua": "сотий 435",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 436",
    "en": "hundredth 436",
    "ru": "сотый 436",
    "ua": "сотий 436",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 437",
    "en": "hundredth 437",
    "ru": "сотый 437",
    "ua": "сотий 437",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 438",
    "en": "hundredth 438",
    "ru": "сотый 438",
    "ua": "сотий 438",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 439",
    "en": "hundredth 439",
    "ru": "сотый 439",
    "ua": "сотий 439",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 440",
    "en": "hundredth 440",
    "ru": "сотый 440",
    "ua": "сотий 440",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 441",
    "en": "hundredth 441",
    "ru": "сотый 441",
    "ua": "сотий 441",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 442",
    "en": "hundredth 442",
    "ru": "сотый 442",
    "ua": "сотий 442",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 443",
    "en": "hundredth 443",
    "ru": "сотый 443",
    "ua": "сотий 443",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 444",
    "en": "hundredth 444",
    "ru": "сотый 444",
    "ua": "сотий 444",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 445",
    "en": "hundredth 445",
    "ru": "сотый 445",
    "ua": "сотий 445",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 446",
    "en": "hundredth 446",
    "ru": "сотый 446",
    "ua": "сотий 446",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 447",
    "en": "hundredth 447",
    "ru": "сотый 447",
    "ua": "сотий 447",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 448",
    "en": "hundredth 448",
    "ru": "сотый 448",
    "ua": "сотий 448",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 449",
    "en": "hundredth 449",
    "ru": "сотый 449",
    "ua": "сотий 449",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 450",
    "en": "hundredth 450",
    "ru": "сотый 450",
    "ua": "сотий 450",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 451",
    "en": "hundredth 451",
    "ru": "сотый 451",
    "ua": "сотий 451",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 452",
    "en": "hundredth 452",
    "ru": "сотый 452",
    "ua": "сотий 452",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 453",
    "en": "hundredth 453",
    "ru": "сотый 453",
    "ua": "сотий 453",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 454",
    "en": "hundredth 454",
    "ru": "сотый 454",
    "ua": "сотий 454",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 455",
    "en": "hundredth 455",
    "ru": "сотый 455",
    "ua": "сотий 455",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 456",
    "en": "hundredth 456",
    "ru": "сотый 456",
    "ua": "сотий 456",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 457",
    "en": "hundredth 457",
    "ru": "сотый 457",
    "ua": "сотий 457",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 458",
    "en": "hundredth 458",
    "ru": "сотый 458",
    "ua": "сотий 458",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 459",
    "en": "hundredth 459",
    "ru": "сотый 459",
    "ua": "сотий 459",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 460",
    "en": "hundredth 460",
    "ru": "сотый 460",
    "ua": "сотий 460",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 461",
    "en": "hundredth 461",
    "ru": "сотый 461",
    "ua": "сотий 461",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 462",
    "en": "hundredth 462",
    "ru": "сотый 462",
    "ua": "сотий 462",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 463",
    "en": "hundredth 463",
    "ru": "сотый 463",
    "ua": "сотий 463",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 464",
    "en": "hundredth 464",
    "ru": "сотый 464",
    "ua": "сотий 464",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 465",
    "en": "hundredth 465",
    "ru": "сотый 465",
    "ua": "сотий 465",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 466",
    "en": "hundredth 466",
    "ru": "сотый 466",
    "ua": "сотий 466",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 467",
    "en": "hundredth 467",
    "ru": "сотый 467",
    "ua": "сотий 467",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 468",
    "en": "hundredth 468",
    "ru": "сотый 468",
    "ua": "сотий 468",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 469",
    "en": "hundredth 469",
    "ru": "сотый 469",
    "ua": "сотий 469",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 470",
    "en": "hundredth 470",
    "ru": "сотый 470",
    "ua": "сотий 470",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 471",
    "en": "hundredth 471",
    "ru": "сотый 471",
    "ua": "сотий 471",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 472",
    "en": "hundredth 472",
    "ru": "сотый 472",
    "ua": "сотий 472",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 473",
    "en": "hundredth 473",
    "ru": "сотый 473",
    "ua": "сотий 473",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 474",
    "en": "hundredth 474",
    "ru": "сотый 474",
    "ua": "сотий 474",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 475",
    "en": "hundredth 475",
    "ru": "сотый 475",
    "ua": "сотий 475",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 476",
    "en": "hundredth 476",
    "ru": "сотый 476",
    "ua": "сотий 476",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 477",
    "en": "hundredth 477",
    "ru": "сотый 477",
    "ua": "сотий 477",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 478",
    "en": "hundredth 478",
    "ru": "сотый 478",
    "ua": "сотий 478",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 479",
    "en": "hundredth 479",
    "ru": "сотый 479",
    "ua": "сотий 479",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 480",
    "en": "hundredth 480",
    "ru": "сотый 480",
    "ua": "сотий 480",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 481",
    "en": "hundredth 481",
    "ru": "сотый 481",
    "ua": "сотий 481",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 482",
    "en": "hundredth 482",
    "ru": "сотый 482",
    "ua": "сотий 482",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 483",
    "en": "hundredth 483",
    "ru": "сотый 483",
    "ua": "сотий 483",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 484",
    "en": "hundredth 484",
    "ru": "сотый 484",
    "ua": "сотий 484",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 485",
    "en": "hundredth 485",
    "ru": "сотый 485",
    "ua": "сотий 485",
    "level": "C1",
    "category": "time"
  },
  {
    "hr": "stoti 486",
    "en": "hundredth 486",
    "ru": "сотый 486",
    "ua": "сотий 486",
    "level": "C1",
    "category": "time"
  }
];
