// Basic dictionary for instant click translations
export const commonWordTranslations: Record<string, { ru: string; ua: string; en: string }> = {
  dobar: { ru: "хороший", ua: "хороший", en: "good" },
  dan: { ru: "день", ua: "день", en: "day" },
  bok: { ru: "привет / пока", ua: "привіт / бувай", en: "hi / bye" },
  hvala: { ru: "спасибо", ua: "дякую", en: "thanks" },
  molim: { ru: "пожалуйста", ua: "будь ласка", en: "please / welcome" },
  kava: { ru: "кофе", ua: "кава", en: "coffee" },
  kruh: { ru: "хлеб", ua: "хліб", en: "bread" },
  voda: { ru: "вода", ua: "вода", en: "water" },
  pivo: { ru: "пиво", ua: "пиво", en: "beer" },
  ja: { ru: "я", ua: "я", en: "I" },
  ti: { ru: "ты", ua: "ти", en: "you" },
  on: { ru: "он", ua: "він", en: "he" },
  ona: { ru: "она", ua: "вона", en: "she" },
  ono: { ru: "оно", ua: "воно", en: "it" },
  mi: { ru: "мы", ua: "ми", en: "we" },
  vi: { ru: "вы", ua: "ви", en: "you (plural)" },
  one: { ru: "они (жен. род)", ua: "вони (жін. рід)", en: "they (feminine)" },
  oni: { ru: "они", ua: "вони", en: "they" },
  sam: { ru: "есть (я)", ua: "є (я)", en: "am" },
  si: { ru: "есть (ты)", ua: "є (ти)", en: "are" },
  je: { ru: "есть (он/она)", ua: "є (він/вона)", en: "is" },
  smo: { ru: "есть (мы)", ua: "є (ми)", en: "are" },
  ste: { ru: "есть (вы)", ua: "є (ви)", en: "are" },
  su: { ru: "есть (они)", ua: "є (вони)", en: "are" },
  nisam: { ru: "не есть (я)", ua: "не є (я)", en: "am not" },
  nisi: { ru: "не есть (ты)", ua: "не є (ти)", en: "are not" },
  nije: { ru: "не есть (он/она)", ua: "не є (він/вона)", en: "is not" },
  lijepo: { ru: "красиво / приятно", ua: "красиво / приємно", en: "nice / beautiful" },
  dobro: { ru: "хорошо", ua: "добре", en: "well / good" },
  sretan: { ru: "счастливый", ua: "щасливий", en: "happy" },
};

export const lessonWordPattern = /(\p{L}[\p{L}\p{M}]*)/u;

export function isCroatianWordToken(word: string) {
  return /^[a-zčćđšž]+$/iu.test(word.normalize("NFC"));
}
