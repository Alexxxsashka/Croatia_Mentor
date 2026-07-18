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
  // ══════ FOOD ══════
  { hr: "kruh", en: "bread", ru: "хлеб", ua: "хліб", level: "A1", category: "food", example: { hr: "Kupujem svježi kruh.", en: "I buy fresh bread.", ru: "Я покупаю свежий хлеб.", ua: "Я купую свіжий хліб." } },
  { hr: "mlijeko", en: "milk", ru: "молоко", ua: "молоко", level: "A1", category: "food" },
  { hr: "voda", en: "water", ru: "вода", ua: "вода", level: "A1", category: "food" },
  { hr: "kava", en: "coffee", ru: "кофе", ua: "кава", level: "A1", category: "food" },
  { hr: "čaj", en: "tea", ru: "чай", ua: "чай", level: "A1", category: "food" },
  { hr: "jabuka", en: "apple", ru: "яблоко", ua: "яблуко", level: "A1", category: "food" },
  { hr: "meso", en: "meat", ru: "мясо", ua: "м'ясо", level: "A1", category: "food" },
  { hr: "riba", en: "fish", ru: "рыба", ua: "риба", level: "A1", category: "food" },
  { hr: "sir", en: "cheese", ru: "сыр", ua: "сир", level: "A1", category: "food" },
  { hr: "jaje", en: "egg", ru: "яйцо", ua: "яйце", level: "A1", category: "food" },
  { hr: "sol", en: "salt", ru: "соль", ua: "сіль", level: "A1", category: "food" },
  { hr: "šećer", en: "sugar", ru: "сахар", ua: "цукор", level: "A1", category: "food" },
  { hr: "juha", en: "soup", ru: "суп", ua: "суп", level: "A1", category: "food" },
  { hr: "salata", en: "salad", ru: "салат", ua: "салат", level: "A1", category: "food" },
  { hr: "pivo", en: "beer", ru: "пиво", ua: "пиво", level: "A2", category: "food" },
  { hr: "vino", en: "wine", ru: "вино", ua: "вино", level: "A2", category: "food" },
  { hr: "voće", en: "fruit", ru: "фрукты", ua: "фрукти", level: "A1", category: "food" },
  { hr: "povrće", en: "vegetables", ru: "овощи", ua: "овочі", level: "A1", category: "food" },
  { hr: "ručak", en: "lunch", ru: "обед", ua: "обід", level: "A1", category: "food" },
  { hr: "večera", en: "dinner", ru: "ужин", ua: "вечеря", level: "A1", category: "food" },
  { hr: "doručak", en: "breakfast", ru: "завтрак", ua: "сніданок", level: "A1", category: "food" },
  { hr: "kolač", en: "cake", ru: "торт/пирожное", ua: "торт/тістечко", level: "A2", category: "food" },
  { hr: "sladoled", en: "ice cream", ru: "мороженое", ua: "морозиво", level: "A2", category: "food" },

  // ══════ FAMILY ══════
  { hr: "otac", en: "father", ru: "отец", ua: "батько", level: "A1", category: "family" },
  { hr: "majka", en: "mother", ru: "мать", ua: "мати", level: "A1", category: "family" },
  { hr: "brat", en: "brother", ru: "брат", ua: "брат", level: "A1", category: "family" },
  { hr: "sestra", en: "sister", ru: "сестра", ua: "сестра", level: "A1", category: "family" },
  { hr: "sin", en: "son", ru: "сын", ua: "син", level: "A1", category: "family" },
  { hr: "kći", en: "daughter", ru: "дочь", ua: "донька", level: "A1", category: "family" },
  { hr: "djed", en: "grandfather", ru: "дедушка", ua: "дідусь", level: "A1", category: "family" },
  { hr: "baka", en: "grandmother", ru: "бабушка", ua: "бабуся", level: "A1", category: "family" },
  { hr: "muž", en: "husband", ru: "муж", ua: "чоловік", level: "A1", category: "family" },
  { hr: "žena", en: "wife/woman", ru: "жена/женщина", ua: "дружина/жінка", level: "A1", category: "family" },
  { hr: "dijete", en: "child", ru: "ребёнок", ua: "дитина", level: "A1", category: "family" },
  { hr: "obitelj", en: "family", ru: "семья", ua: "сім'я", level: "A1", category: "family" },
  { hr: "prijatelj", en: "friend", ru: "друг", ua: "друг", level: "A1", category: "family" },
  { hr: "susjed", en: "neighbor", ru: "сосед", ua: "сусід", level: "A2", category: "family" },

  // ══════ TRANSPORT ══════
  { hr: "auto", en: "car", ru: "автомобиль", ua: "автомобіль", level: "A1", category: "transport" },
  { hr: "autobus", en: "bus", ru: "автобус", ua: "автобус", level: "A1", category: "transport" },
  { hr: "vlak", en: "train", ru: "поезд", ua: "потяг", level: "A1", category: "transport" },
  { hr: "tramvaj", en: "tram", ru: "трамвай", ua: "трамвай", level: "A1", category: "transport" },
  { hr: "avion", en: "airplane", ru: "самолёт", ua: "літак", level: "A1", category: "transport" },
  { hr: "bicikl", en: "bicycle", ru: "велосипед", ua: "велосипед", level: "A1", category: "transport" },
  { hr: "brod", en: "ship", ru: "корабль", ua: "корабель", level: "A2", category: "transport" },
  { hr: "karta", en: "ticket", ru: "билет", ua: "квиток", level: "A1", category: "transport" },
  { hr: "stanica", en: "station", ru: "станция", ua: "станція", level: "A1", category: "transport" },
  { hr: "vozač", en: "driver", ru: "водитель", ua: "водій", level: "A2", category: "transport" },
  { hr: "benzin", en: "gasoline", ru: "бензин", ua: "бензин", level: "A2", category: "transport" },
  { hr: "prometna gužva", en: "traffic jam", ru: "пробка", ua: "затор", level: "B1", category: "transport" },

  // ══════ WORK ══════
  { hr: "posao", en: "job", ru: "работа", ua: "робота", level: "A1", category: "work" },
  { hr: "ured", en: "office", ru: "офис", ua: "офіс", level: "A2", category: "work" },
  { hr: "šef", en: "boss", ru: "начальник", ua: "начальник", level: "A2", category: "work" },
  { hr: "kolega", en: "colleague", ru: "коллега", ua: "колега", level: "A2", category: "work" },
  { hr: "plaća", en: "salary", ru: "зарплата", ua: "зарплата", level: "A2", category: "work" },
  { hr: "sastanak", en: "meeting", ru: "совещание", ua: "нарада", level: "B1", category: "work" },
  { hr: "životopis", en: "CV/resume", ru: "резюме", ua: "резюме", level: "B1", category: "work" },
  { hr: "zapošljavanje", en: "employment", ru: "трудоустройство", ua: "працевлаштування", level: "B1", category: "work" },
  { hr: "poslodavac", en: "employer", ru: "работодатель", ua: "роботодавець", level: "B1", category: "work" },
  { hr: "radnik", en: "worker", ru: "рабочий", ua: "робітник", level: "A2", category: "work" },
  { hr: "iskustvo", en: "experience", ru: "опыт", ua: "досвід", level: "B1", category: "work" },
  { hr: "ugovor", en: "contract", ru: "контракт", ua: "контракт", level: "B1", category: "work" },

  // ══════ HOME ══════
  { hr: "kuća", en: "house", ru: "дом", ua: "будинок", level: "A1", category: "home" },
  { hr: "stan", en: "apartment", ru: "квартира", ua: "квартира", level: "A1", category: "home" },
  { hr: "soba", en: "room", ru: "комната", ua: "кімната", level: "A1", category: "home" },
  { hr: "kuhinja", en: "kitchen", ru: "кухня", ua: "кухня", level: "A1", category: "home" },
  { hr: "kupaonica", en: "bathroom", ru: "ванная", ua: "ванна", level: "A1", category: "home" },
  { hr: "spavaća soba", en: "bedroom", ru: "спальня", ua: "спальня", level: "A1", category: "home" },
  { hr: "stol", en: "table", ru: "стол", ua: "стіл", level: "A1", category: "home" },
  { hr: "stolica", en: "chair", ru: "стул", ua: "стілець", level: "A1", category: "home" },
  { hr: "krevet", en: "bed", ru: "кровать", ua: "ліжко", level: "A1", category: "home" },
  { hr: "prozor", en: "window", ru: "окно", ua: "вікно", level: "A1", category: "home" },
  { hr: "vrata", en: "door", ru: "дверь", ua: "двері", level: "A1", category: "home" },
  { hr: "kat", en: "floor/story", ru: "этаж", ua: "поверх", level: "A2", category: "home" },
  { hr: "stubište", en: "staircase", ru: "лестница", ua: "сходи", level: "A2", category: "home" },

  // ══════ NATURE ══════
  { hr: "more", en: "sea", ru: "море", ua: "море", level: "A1", category: "nature" },
  { hr: "planina", en: "mountain", ru: "гора", ua: "гора", level: "A1", category: "nature" },
  { hr: "rijeka", en: "river", ru: "река", ua: "річка", level: "A1", category: "nature" },
  { hr: "jezero", en: "lake", ru: "озеро", ua: "озеро", level: "A1", category: "nature" },
  { hr: "šuma", en: "forest", ru: "лес", ua: "ліс", level: "A1", category: "nature" },
  { hr: "sunce", en: "sun", ru: "солнце", ua: "сонце", level: "A1", category: "nature" },
  { hr: "kiša", en: "rain", ru: "дождь", ua: "дощ", level: "A1", category: "nature" },
  { hr: "snijeg", en: "snow", ru: "снег", ua: "сніг", level: "A1", category: "nature" },
  { hr: "vjetar", en: "wind", ru: "ветер", ua: "вітер", level: "A2", category: "nature" },
  { hr: "cvijet", en: "flower", ru: "цветок", ua: "квітка", level: "A1", category: "nature" },
  { hr: "stablo", en: "tree", ru: "дерево", ua: "дерево", level: "A1", category: "nature" },
  { hr: "nebo", en: "sky", ru: "небо", ua: "небо", level: "A1", category: "nature" },
  { hr: "otok", en: "island", ru: "остров", ua: "острів", level: "A2", category: "nature" },
  { hr: "plaža", en: "beach", ru: "пляж", ua: "пляж", level: "A2", category: "nature" },

  // ══════ CITY ══════
  { hr: "grad", en: "city", ru: "город", ua: "місто", level: "A1", category: "city" },
  { hr: "ulica", en: "street", ru: "улица", ua: "вулиця", level: "A1", category: "city" },
  { hr: "trg", en: "square", ru: "площадь", ua: "площа", level: "A1", category: "city" },
  { hr: "park", en: "park", ru: "парк", ua: "парк", level: "A1", category: "city" },
  { hr: "bolnica", en: "hospital", ru: "больница", ua: "лікарня", level: "A2", category: "city" },
  { hr: "škola", en: "school", ru: "школа", ua: "школа", level: "A1", category: "city" },
  { hr: "trgovina", en: "shop", ru: "магазин", ua: "магазин", level: "A1", category: "city" },
  { hr: "restoran", en: "restaurant", ru: "ресторан", ua: "ресторан", level: "A1", category: "city" },
  { hr: "crkva", en: "church", ru: "церковь", ua: "церква", level: "A2", category: "city" },
  { hr: "muzej", en: "museum", ru: "музей", ua: "музей", level: "A2", category: "city" },
  { hr: "knjižnica", en: "library", ru: "библиотека", ua: "бібліотека", level: "A2", category: "city" },
  { hr: "pošta", en: "post office", ru: "почта", ua: "пошта", level: "A2", category: "city" },
  { hr: "banka", en: "bank", ru: "банк", ua: "банк", level: "A2", category: "city" },
  { hr: "ljekarna", en: "pharmacy", ru: "аптека", ua: "аптека", level: "A2", category: "city" },

  // ══════ BODY ══════
  { hr: "glava", en: "head", ru: "голова", ua: "голова", level: "A1", category: "body" },
  { hr: "ruka", en: "hand/arm", ru: "рука", ua: "рука", level: "A1", category: "body" },
  { hr: "noga", en: "leg/foot", ru: "нога", ua: "нога", level: "A1", category: "body" },
  { hr: "oko", en: "eye", ru: "глаз", ua: "око", level: "A1", category: "body" },
  { hr: "uho", en: "ear", ru: "ухо", ua: "вухо", level: "A1", category: "body" },
  { hr: "nos", en: "nose", ru: "нос", ua: "ніс", level: "A1", category: "body" },
  { hr: "usta", en: "mouth", ru: "рот", ua: "рот", level: "A1", category: "body" },
  { hr: "srce", en: "heart", ru: "сердце", ua: "серце", level: "A1", category: "body" },
  { hr: "zub", en: "tooth", ru: "зуб", ua: "зуб", level: "A1", category: "body" },
  { hr: "kosa", en: "hair", ru: "волосы", ua: "волосся", level: "A1", category: "body" },
  { hr: "prst", en: "finger", ru: "палец", ua: "палець", level: "A2", category: "body" },
  { hr: "leđa", en: "back", ru: "спина", ua: "спина", level: "A2", category: "body" },

  // ══════ CLOTHES ══════
  { hr: "košulja", en: "shirt", ru: "рубашка", ua: "сорочка", level: "A1", category: "clothes" },
  { hr: "hlače", en: "pants", ru: "брюки", ua: "штани", level: "A1", category: "clothes" },
  { hr: "haljina", en: "dress", ru: "платье", ua: "сукня", level: "A1", category: "clothes" },
  { hr: "cipele", en: "shoes", ru: "обувь", ua: "взуття", level: "A1", category: "clothes" },
  { hr: "jakna", en: "jacket", ru: "куртка", ua: "куртка", level: "A1", category: "clothes" },
  { hr: "kaput", en: "coat", ru: "пальто", ua: "пальто", level: "A2", category: "clothes" },
  { hr: "šešir", en: "hat", ru: "шляпа", ua: "капелюх", level: "A2", category: "clothes" },
  { hr: "čarape", en: "socks", ru: "носки", ua: "шкарпетки", level: "A1", category: "clothes" },
  { hr: "majica", en: "T-shirt", ru: "футболка", ua: "футболка", level: "A1", category: "clothes" },
  { hr: "suknja", en: "skirt", ru: "юбка", ua: "спідниця", level: "A2", category: "clothes" },

  // ══════ COLORS ══════
  { hr: "crven", en: "red", ru: "красный", ua: "червоний", level: "A1", category: "colors" },
  { hr: "plav", en: "blue", ru: "синий", ua: "синій", level: "A1", category: "colors" },
  { hr: "zelen", en: "green", ru: "зелёный", ua: "зелений", level: "A1", category: "colors" },
  { hr: "žut", en: "yellow", ru: "жёлтый", ua: "жовтий", level: "A1", category: "colors" },
  { hr: "bijel", en: "white", ru: "белый", ua: "білий", level: "A1", category: "colors" },
  { hr: "crn", en: "black", ru: "чёрный", ua: "чорний", level: "A1", category: "colors" },
  { hr: "smeđ", en: "brown", ru: "коричневый", ua: "коричневий", level: "A1", category: "colors" },
  { hr: "siv", en: "gray", ru: "серый", ua: "сірий", level: "A2", category: "colors" },
  { hr: "narančast", en: "orange", ru: "оранжевый", ua: "помаранчевий", level: "A2", category: "colors" },
  { hr: "ljubičast", en: "purple", ru: "фиолетовый", ua: "фіолетовий", level: "A2", category: "colors" },
  { hr: "ružičast", en: "pink", ru: "розовый", ua: "рожевий", level: "A2", category: "colors" },

  // ══════ TIME ══════
  { hr: "danas", en: "today", ru: "сегодня", ua: "сьогодні", level: "A1", category: "time" },
  { hr: "sutra", en: "tomorrow", ru: "завтра", ua: "завтра", level: "A1", category: "time" },
  { hr: "jučer", en: "yesterday", ru: "вчера", ua: "вчора", level: "A1", category: "time" },
  { hr: "sada", en: "now", ru: "сейчас", ua: "зараз", level: "A1", category: "time" },
  { hr: "sat", en: "hour/clock", ru: "час/часы", ua: "година/годинник", level: "A1", category: "time" },
  { hr: "tjedan", en: "week", ru: "неделя", ua: "тиждень", level: "A1", category: "time" },
  { hr: "mjesec", en: "month", ru: "месяц", ua: "місяць", level: "A1", category: "time" },
  { hr: "godina", en: "year", ru: "год", ua: "рік", level: "A1", category: "time" },
  { hr: "ponedjeljak", en: "Monday", ru: "понедельник", ua: "понеділок", level: "A1", category: "time" },
  { hr: "utorak", en: "Tuesday", ru: "вторник", ua: "вівторок", level: "A1", category: "time" },
  { hr: "srijeda", en: "Wednesday", ru: "среда", ua: "середа", level: "A1", category: "time" },
  { hr: "četvrtak", en: "Thursday", ru: "четверг", ua: "четвер", level: "A1", category: "time" },
  { hr: "petak", en: "Friday", ru: "пятница", ua: "п'ятниця", level: "A1", category: "time" },
  { hr: "subota", en: "Saturday", ru: "суббота", ua: "субота", level: "A1", category: "time" },
  { hr: "nedjelja", en: "Sunday", ru: "воскресенье", ua: "неділя", level: "A1", category: "time" },

  // ══════ SCHOOL ══════
  { hr: "učenik", en: "student (school)", ru: "ученик", ua: "учень", level: "A1", category: "school" },
  { hr: "student", en: "student (uni)", ru: "студент", ua: "студент", level: "A1", category: "school" },
  { hr: "profesor", en: "professor", ru: "профессор", ua: "професор", level: "A1", category: "school" },
  { hr: "učitelj", en: "teacher", ru: "учитель", ua: "вчитель", level: "A1", category: "school" },
  { hr: "knjiga", en: "book", ru: "книга", ua: "книга", level: "A1", category: "school" },
  { hr: "bilježnica", en: "notebook", ru: "тетрадь", ua: "зошит", level: "A1", category: "school" },
  { hr: "olovka", en: "pencil", ru: "карандаш", ua: "олівець", level: "A1", category: "school" },
  { hr: "ispit", en: "exam", ru: "экзамен", ua: "іспит", level: "A2", category: "school" },
  { hr: "ocjena", en: "grade", ru: "оценка", ua: "оцінка", level: "A2", category: "school" },
  { hr: "zadaća", en: "homework", ru: "домашнее задание", ua: "домашнє завдання", level: "A2", category: "school" },
  { hr: "sveučilište", en: "university", ru: "университет", ua: "університет", level: "A2", category: "school" },

  // ══════ EMOTIONS ══════
  { hr: "sretan", en: "happy", ru: "счастливый", ua: "щасливий", level: "A1", category: "emotions" },
  { hr: "tužan", en: "sad", ru: "грустный", ua: "сумний", level: "A1", category: "emotions" },
  { hr: "ljut", en: "angry", ru: "злой", ua: "злий", level: "A1", category: "emotions" },
  { hr: "umoran", en: "tired", ru: "усталый", ua: "втомлений", level: "A1", category: "emotions" },
  { hr: "gladan", en: "hungry", ru: "голодный", ua: "голодний", level: "A1", category: "emotions" },
  { hr: "žedan", en: "thirsty", ru: "жаждущий", ua: "спраглий", level: "A1", category: "emotions" },
  { hr: "zaljubljen", en: "in love", ru: "влюблённый", ua: "закоханий", level: "A2", category: "emotions" },
  { hr: "ponosan", en: "proud", ru: "гордый", ua: "гордий", level: "A2", category: "emotions" },
  { hr: "zabrinut", en: "worried", ru: "обеспокоенный", ua: "стурбований", level: "B1", category: "emotions" },
  { hr: "iznenađen", en: "surprised", ru: "удивлённый", ua: "здивований", level: "A2", category: "emotions" },

  // ══════ SPORTS ══════
  { hr: "nogomet", en: "football/soccer", ru: "футбол", ua: "футбол", level: "A1", category: "sports" },
  { hr: "košarka", en: "basketball", ru: "баскетбол", ua: "баскетбол", level: "A2", category: "sports" },
  { hr: "tenis", en: "tennis", ru: "теннис", ua: "теніс", level: "A2", category: "sports" },
  { hr: "plivanje", en: "swimming", ru: "плавание", ua: "плавання", level: "A2", category: "sports" },
  { hr: "trčanje", en: "running", ru: "бег", ua: "біг", level: "A2", category: "sports" },
  { hr: "skijanje", en: "skiing", ru: "лыжи", ua: "лижі", level: "A2", category: "sports" },
  { hr: "planinarenje", en: "hiking", ru: "пеший туризм", ua: "пішохідний туризм", level: "B1", category: "sports" },
  { hr: "veslanje", en: "rowing", ru: "гребля", ua: "веслування", level: "B1", category: "sports" },

  // ══════ TRAVEL ══════
  { hr: "putovanje", en: "journey/trip", ru: "путешествие", ua: "подорож", level: "A2", category: "travel" },
  { hr: "putovnica", en: "passport", ru: "паспорт", ua: "паспорт", level: "A2", category: "travel" },
  { hr: "hotel", en: "hotel", ru: "отель", ua: "готель", level: "A1", category: "travel" },
  { hr: "aerodrom", en: "airport", ru: "аэропорт", ua: "аеропорт", level: "A2", category: "travel" },
  { hr: "luka", en: "port/harbor", ru: "порт", ua: "порт", level: "A2", category: "travel" },
  { hr: "turizam", en: "tourism", ru: "туризм", ua: "туризм", level: "A2", category: "travel" },
  { hr: "vodič", en: "guide", ru: "гид", ua: "гід", level: "B1", category: "travel" },
  { hr: "rezervacija", en: "reservation", ru: "бронирование", ua: "бронювання", level: "B1", category: "travel" },
  { hr: "suvenir", en: "souvenir", ru: "сувенир", ua: "сувенір", level: "A2", category: "travel" },
  { hr: "razgledavanje", en: "sightseeing", ru: "осмотр достопримечательностей", ua: "огляд визначних місць", level: "B1", category: "travel" },

  // ══════ NEW EXPANDED WORDS ══════
  // FOOD
  { hr: "krumpir", en: "potato", ru: "картофель", ua: "картопля", level: "A1", category: "food" },
  { hr: "mrkva", en: "carrot", ru: "морковь", ua: "морква", level: "A1", category: "food" },
  { hr: "rajčica", en: "tomato", ru: "помидор", ua: "помідор", level: "A1", category: "food" },
  { hr: "paprika", en: "pepper", ru: "перец", ua: "перець", level: "A1", category: "food" },
  { hr: "maslina", en: "olive", ru: "оливка", ua: "оливка", level: "A2", category: "food" },

  // FAMILY
  { hr: "rođak", en: "relative/cousin", ru: "родственник/двоюродный брат", ua: "родич/двоюрідний брат", level: "A2", category: "family" },
  { hr: "nećak", en: "nephew", ru: "племянник", ua: "племінник", level: "B1", category: "family" },
  { hr: "nećakinja", en: "niece", ru: "племянница", ua: "племінниця", level: "B1", category: "family" },
  { hr: "unuk", en: "grandson", ru: "внук", ua: "онук", level: "A2", category: "family" },
  { hr: "unuka", en: "granddaughter", ru: "внучка", ua: "онучка", level: "A2", category: "family" },

  // TRANSPORT
  { hr: "motocikl", en: "motorcycle", ru: "мотоцикл", ua: "мотоцикл", level: "A2", category: "transport" },
  { hr: "kamion", en: "truck", ru: "грузовик", ua: "вантажівка", level: "A2", category: "transport" },
  { hr: "helikopter", en: "helicopter", ru: "вертолёт", ua: "гелікоптер", level: "B1", category: "transport" },
  { hr: "trajekt", en: "ferry", ru: "паром", ua: "паром", level: "A2", category: "transport" },
  { hr: "autoput", en: "highway", ru: "шоссе/автомагистраль", ua: "шосе/автомагістраль", level: "B1", category: "transport" },

  // WORK
  { hr: "zaposlenik", en: "employee", ru: "сотрудник", ua: "співробітник", level: "B1", category: "work" },
  { hr: "poslodavac", en: "employer", ru: "работодатель", ua: "роботодавець", level: "B1", category: "work" },
  { hr: "tvrtka", en: "company", ru: "компания/фирма", ua: "компанія/фірма", level: "A2", category: "work" },
  { hr: "ugovor", en: "contract", ru: "договор/контракт", ua: "договір/контракт", level: "B1", category: "work" },
  { hr: "radno vrijeme", en: "working hours", ru: "рабочее время", ua: "робочий час", level: "A2", category: "work" },

  // HOME
  { hr: "dnevni boravak", en: "living room", ru: "гостиная", ua: "вітальня", level: "A1", category: "home" },
  { hr: "spavaća soba", en: "bedroom", ru: "спальня", ua: "спальня", level: "A1", category: "home" },
  { hr: "kuhinja", en: "kitchen", ru: "кухня", ua: "кухня", level: "A1", category: "home" },
  { hr: "kupaonica", en: "bathroom", ru: "ванная комната", ua: "ванна кімната", level: "A1", category: "home" },
  { hr: "namještaj", en: "furniture", ru: "мебель", ua: "меблі", level: "A2", category: "home" },

  // NATURE
  { hr: "šuma", en: "forest", ru: "лес", ua: "ліс", level: "A1", category: "nature" },
  { hr: "planina", en: "mountain", ru: "гора", ua: "гора", level: "A2", category: "nature" },
  { hr: "rijeka", en: "river", ru: "река", ua: "річка", level: "A1", category: "nature" },
  { hr: "jezero", en: "lake", ru: "озеро", ua: "озеро", level: "A2", category: "nature" },
  { hr: "vjetar", en: "wind", ru: "ветер", ua: "вітер", level: "A2", category: "nature" },

  // CITY
  { hr: "trg", en: "square", ru: "площадь", ua: "площа перед", level: "A1", category: "city" },
  { hr: "kazalište", en: "theater", ru: "театр", ua: "театр", level: "A2", category: "city" },
  { hr: "knjižnica", en: "library", ru: "библиотека", ua: "бібліотека", level: "A2", category: "city" },
  { hr: "muzej", en: "museum", ru: "музей", ua: "музей", level: "A2", category: "city" },
  { hr: "crkva", en: "church", ru: "церковь", ua: "церква", level: "A2", category: "city" },

  // BODY
  { hr: "vrat", en: "neck", ru: "шея", ua: "шия", level: "A2", category: "body" },
  { hr: "ramena", en: "shoulders", ru: "плечи", ua: "плечі", level: "A2", category: "body" },
  { hr: "koljeno", en: "knee", ru: "колено", ua: "коліно", level: "A2", category: "body" },
  { hr: "trbuh", en: "stomach", ru: "живот", ua: "живіт", level: "A2", category: "body" },
  { hr: "krv", en: "blood", ru: "кровь", ua: "кров", level: "B1", category: "body" },

  // CLOTHES
  { hr: "rukavice", en: "gloves", ru: "перчатки", ua: "рукавички", level: "A2", category: "clothes" },
  { hr: "šal", en: "scarf", ru: "шарф", ua: "шарф", level: "A1", category: "clothes" },
  { hr: "naočale", en: "glasses", ru: "очки", ua: "окуляри", level: "A2", category: "clothes" },
  { hr: "remen", en: "belt", ru: "ремень", ua: "ремінь", level: "A2", category: "clothes" },
  { hr: "odijelo", en: "suit", ru: "костюм", ua: "костюм", level: "B1", category: "clothes" },

  // COLORS
  { hr: "zlatni", en: "golden", ru: "золотой", ua: "золотий", level: "A2", category: "colors" },
  { hr: "srebrni", en: "silver", ru: "серебряный", ua: "срібний", level: "A2", category: "colors" },
  { hr: "tamnoplav", en: "dark blue", ru: "тёмно-синий", ua: "темно-синій", level: "A2", category: "colors" },
  { hr: "svijetlozelen", en: "light green", ru: "светло-зелёный", ua: "світло-зелений", level: "A2", category: "colors" },

  // TIME
  { hr: "prošlost", en: "past", ru: "прошлое", ua: "минуле", level: "B1", category: "time" },
  { hr: "budućnost", en: "future", ru: "будущее", ua: "майбутнє", level: "B1", category: "time" },
  { hr: "sekunda", en: "second", ru: "секунда", ua: "секунда", level: "A1", category: "time" },
  { hr: "minuta", en: "minute", ru: "минута", ua: "хвилина", level: "A1", category: "time" },

  // SCHOOL
  { hr: "ravnatelj", en: "principal/director", ru: "директор", ua: "директор", level: "B1", category: "school" },
  { hr: "predavanje", en: "lecture", ru: "лекция", ua: "лекція", level: "B1", category: "school" },
  { hr: "učionica", en: "classroom", ru: "класс/аудитория", ua: "клас/аудиторія", level: "A1", category: "school" },
  { hr: "znanost", en: "science", ru: "наука", ua: "наука", level: "B1", category: "school" },

  // EMOTIONS
  { hr: "strah", en: "fear", ru: "страх", ua: "страх", level: "B1", category: "emotions" },
  { hr: "sreća", en: "happiness", ru: "счастье", ua: "щастя", level: "A2", category: "emotions" },
  { hr: "ljubomora", en: "jealousy", ru: "ревность/зависть", ua: "ревнощі/заздрість", level: "B1", category: "emotions" },
  { hr: "dosada", en: "boredom", ru: "скука", ua: "нудьга", level: "B1", category: "emotions" },

  // SPORTS
  { hr: "odbojka", en: "volleyball", ru: "волейбол", ua: "волейбол", level: "A2", category: "sports" },
  { hr: "rukomet", en: "handball", ru: "гандбол", ua: "гандбол", level: "A2", category: "sports" },
  { hr: "atletika", en: "athletics", ru: "атлетика", ua: "атлетика", level: "B1", category: "sports" },
  { hr: "gimnastika", en: "gimnastics", ru: "гимнастика", ua: "гімнастика", level: "B1", category: "sports" },

  // TRAVEL
  { hr: "prtljaga", en: "luggage", ru: "багаж", ua: "багаж", level: "A2", category: "travel" },
  { hr: "karta grada", en: "city map", ru: "карта города", ua: "карта міста", level: "A1", category: "travel" },
  { hr: "granični prijelaz", en: "border crossing", ru: "пограничный переход", ua: "прикордонний перехід", level: "B1", category: "travel" },
  { hr: "smještaj", en: "accommodation", ru: "жилье/размещение", ua: "житло/розміщення", level: "B1", category: "travel" },

  // ══════ MASSIVE EXPANSION WORDS ══════
  // FAMILY
  { hr: "roditelji", en: "parents", ru: "родители", ua: "батьки", level: "A1", category: "family" },
  { hr: "djeca", en: "children", ru: "дети", ua: "діти", level: "A1", category: "family" },
  { hr: "blizanci", en: "twins", ru: "близнецы", ua: "близнюки", level: "A2", category: "family" },
  { hr: "zet", en: "son-in-law", ru: "зять", ua: "зять", level: "B1", category: "family" },
  { hr: "snaha", en: "daughter-in-law", ru: "сноха/невестка", ua: "невістка", level: "B1", category: "family" },
  { hr: "kum", en: "godfather / best man", ru: "крёстный / свидетель", ua: "хресний / свідок", level: "A2", category: "family" },
  { hr: "kuma", en: "godmother / maid of honor", ru: "крёстная / свидетельница", ua: "хресна / свідок (жінка)", level: "A2", category: "family" },

  // TRAVEL & ENVIRONMENT
  { hr: "putnik", en: "passenger", ru: "пассажир", ua: "пасажир", level: "A2", category: "travel" },
  { hr: "carina", en: "customs", ru: "таможня", ua: "митниця", level: "B1", category: "travel" },
  { hr: "odlazak", en: "departure", ru: "отправление/вылет", ua: "відправлення/виліт", level: "A2", category: "travel" },
  { hr: "dolazak", en: "arrival", ru: "прибытие", ua: "прибуття", level: "A2", category: "travel" },
  { hr: "kašnjenje", en: "delay", ru: "задержка", ua: "затримка", level: "B1", category: "travel" },
  { hr: "plaža", en: "beach", ru: "пляж", ua: "пляж", level: "A1", category: "travel" },
  { hr: "otok", en: "island", ru: "остров", ua: "острів", level: "A2", category: "travel" },
  { hr: "poluotok", en: "peninsula", ru: "полуостров", ua: "півострів", level: "B2", category: "travel" },

  // NATURE & GEOGRAPHY
  { hr: "ocean", en: "ocean", ru: "океан", ua: "океан", level: "A2", category: "nature" },
  { hr: "pijesak", en: "sand", ru: "песок", ua: "пісок", level: "A2", category: "nature" },
  { hr: "stijena", en: "rock / cliff", ru: "скала/утес", ua: "скеля", level: "B1", category: "nature" },
  { hr: "val", en: "wave", ru: "волна", ua: "хвиля", level: "A2", category: "nature" },
  { hr: "nebo", en: "sky", ru: "небо", ua: "небо", level: "A1", category: "nature" },
  { hr: "zvijezda", en: "star", ru: "звезда", ua: "зірка", level: "A2", category: "nature" },
  { hr: "mjesec", en: "moon / month", ru: "луна/месяц", ua: "місяць", level: "A1", category: "nature" },
  { hr: "sunce", en: "sun", ru: "солнце", ua: "сонце", level: "A1", category: "nature" },

  // TIME & SEASONS
  { hr: "stoljeće", en: "century", ru: "век/столетие", ua: "століття", level: "B1", category: "time" },
  { hr: "desetljeće", en: "decade", ru: "десятилетие", ua: "десятиліття", level: "B2", category: "time" },
  { hr: "godišnje doba", en: "season", ru: "время года", ua: "пора року", level: "A2", category: "time" },
  { hr: "proljeće", en: "spring", ru: "весна", ua: "весна", level: "A1", category: "time" },
  { hr: "ljeto", en: "summer", ru: "лето", ua: "літо", level: "A1", category: "time" },
  { hr: "jesen", en: "autumn", ru: "осень", ua: "осінь", level: "A1", category: "time" },
  { hr: "zima", en: "winter", ru: "зима", ua: "зима", level: "A1", category: "time" },
  { hr: "vikend", en: "weekend", ru: "выходные", ua: "вихідні", level: "A1", category: "time" },
  { hr: "praznik", en: "holiday", ru: "праздник", ua: "свято", level: "A2", category: "time" },
  { hr: "radni dan", en: "workday", ru: "рабочий день", ua: "робочий день", level: "A2", category: "time" },

  // HOME
  { hr: "ogledalo", en: "mirror", ru: "зеркало", ua: "дзеркало", level: "A2", category: "home" },
  { hr: "ormar", en: "wardrobe/closet", ru: "шкаф", ua: "шафа", level: "A1", category: "home" },
  { hr: "polica", en: "shelf", ru: "полка", ua: "полиця", level: "A2", category: "home" },
  { hr: "tepih", en: "carpet", ru: "ковёр", ua: "килим", level: "A2", category: "home" },
  { hr: "zavjese", en: "curtains", ru: "шторы", ua: "штори", level: "A2", category: "home" },
  { hr: "jastuk", en: "pillow", ru: "подушка", ua: "подушка", level: "A2", category: "home" },
  { hr: "pokrivač", en: "blanket", ru: "одеяло", ua: "ковдра", level: "A2", category: "home" },
  { hr: "ručnik", en: "towel", ru: "полотенце", ua: "рушник", level: "A2", category: "home" },
  { hr: "sapun", en: "soap", ru: "мыло", ua: "мило", level: "A1", category: "home" },
  { hr: "četkica za zube", en: "toothbrush", ru: "зубная щётка", ua: "зубна щітка", level: "A1", category: "home" },

  // FOOD
  { hr: "marenda", en: "brunch / snack", ru: "перекус", ua: "перекус", level: "A2", category: "food" },
  { hr: "predjelo", en: "appetizer", ru: "закуска", ua: "закуска", level: "B1", category: "food" },
  { hr: "glavno jelo", en: "main course", ru: "главное блюдо", ua: "головна страва", level: "B1", category: "food" },
  { hr: "desert", en: "dessert", ru: "десерт", ua: "десерт", level: "A2", category: "food" },
  { hr: "tjestenina", en: "pasta", ru: "паста/макароны", ua: "паста/макарони", level: "A2", category: "food" },
  { hr: "riža", en: "rice", ru: "рис", ua: "рис", level: "A1", category: "food" },
  { hr: "ulje", en: "oil", ru: "масло/растительное масло", ua: "олія", level: "A2", category: "food" },
  { hr: "ocat", en: "vinegar", ru: "уксус", ua: "оцет", level: "B1", category: "food" },
  { hr: "papar", en: "pepper (spice)", ru: "перец (приправа)", ua: "перець (приправа)", level: "A2", category: "food" },
  { hr: "češnjak", en: "garlic", ru: "чеснок", ua: "часник", level: "A2", category: "food" },
  { hr: "luk", en: "onion", ru: "лук", ua: "цибуля", level: "A2", category: "food" },

  // EMOTIONS
  { hr: "tuga", en: "sadness", ru: "грусть", ua: "сум", level: "B1", category: "emotions" },
  { hr: "radost", en: "joy", ru: "радость", ua: "радість", level: "B1", category: "emotions" },
  { hr: "panika", en: "panic", ru: "паника", ua: "паніка", level: "B1", category: "emotions" },
  { hr: "stres", en: "stress", ru: "стресс", ua: "стрес", level: "A2", category: "emotions" },
  { hr: "mir", en: "peace / calm", ru: "мир/спокойствие", ua: "мир/спокій", level: "A2", category: "emotions" },
  { hr: "mržnja", en: "hatred", ru: "ненависть", ua: "ненависть", level: "B2", category: "emotions" },
  { hr: "ljubav", en: "love", ru: "любовь", ua: "любов", level: "A1", category: "emotions" },

  // BODY & HEALTH
  { hr: "lice", en: "face", ru: "лицо", ua: "обличчя", level: "A1", category: "body" },
  { hr: "čelo", en: "forehead", ru: "лоб", ua: "лоб", level: "A2", category: "body" },
  { hr: "obrve", en: "eyebrows", ru: "брови", ua: "брови", level: "B1", category: "body" },
  { hr: "trepavice", en: "eyelashes", ru: "ресницы", ua: "вії", level: "B2", category: "body" },
  { hr: "usne", en: "lips", ru: "губы", ua: "губи", level: "A2", category: "body" },
  { hr: "jezik", en: "tongue / language", ru: "язык", ua: "язик / мова", level: "A1", category: "body" },
  { hr: "grlo", en: "throat", ru: "горло", ua: "горло", level: "A2", category: "body" },
];
