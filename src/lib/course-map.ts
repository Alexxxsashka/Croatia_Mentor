import { lessonsData, type LocalizedString } from "./lessons-data";
import { isPilotId, pilotLessons } from "./a1-pilot";

export const courseLevels = ["A1", "A2", "B1", "B2", "C1", "C2"] as const;
export const courseSkills = ["reading", "listening", "writing", "speaking", "grammar", "vocabulary"] as const;
export type CourseLevel = (typeof courseLevels)[number];
export type CourseSkill = (typeof courseSkills)[number];

const text = (en: string, ru: string, ua: string): LocalizedString => ({ en, ru, ua });

export const skillNames: Record<CourseSkill, LocalizedString> = {
  reading: text("Reading", "Чтение", "Читання"),
  listening: text("Listening", "Аудирование", "Аудіювання"),
  writing: text("Writing", "Письмо", "Письмо"),
  speaking: text("Speaking", "Устная речь", "Усне мовлення"),
  grammar: text("Grammar", "Грамматика", "Граматика"),
  vocabulary: text("Vocabulary", "Лексика", "Лексика"),
};

const goals: Record<string, LocalizedString> = {
  "a1-dictation-1": text("Recognise and write basic greetings.", "Распознать на слух и записать основные приветствия.", "Розпізнати на слух і записати основні привітання."),
  "a1-grammar-1": text("Choose the right pronoun for a person or group.", "Выбрать местоимение для человека или группы.", "Вибрати займенник для людини або групи."),
  "a1-grammar-4": text("Say what you need, want or are able to do.", "Сказать, что нужно, хочется или под силу сделать.", "Сказати, що потрібно, хочеться або під силу зробити."),
  "a1-grammar-5": text("Identify the gender of common nouns.", "Определить род распространённых существительных.", "Визначити рід поширених іменників."),
  "a1-grammar-6": text("Say whose family member or possession you mean.", "Сказать, чей это родственник или кому принадлежит вещь.", "Сказати, чий це родич або кому належить річ."),
  "a1-grammar-7": text("Describe people and objects and match adjectives to nouns.", "Описать людей и предметы, согласуя прилагательные с существительными.", "Описати людей і предмети, узгоджуючи прикметники з іменниками."),
  "a2-grammar-1": text("Use the accusative for direct objects and movement toward a place.", "Употреблять винительный падеж для прямого дополнения и направления движения.", "Уживати знахідний відмінок для прямого додатка й напрямку руху."),
  "a2-grammar-2": text("Say where something is and what a conversation is about.", "Сказать, где что-то находится и о чём идёт разговор.", "Сказати, де щось розташоване й про що йдеться."),
  "a2-communication-1": text("Order a meal, make a special request and ask for the bill.", "Заказать блюдо, уточнить пожелания и попросить счёт.", "Замовити страву, уточнити побажання й попросити рахунок."),
  "a2-grammar-3": text("Describe a past event with the appropriate verb forms.", "Рассказать о прошлом событии, выбирая подходящие формы глагола.", "Розповісти про минулу подію, вибираючи відповідні форми дієслова."),
  "a2-grammar-4": text("Say what you will do and ask about someone’s plans.", "Сказать, что вы будете делать, и спросить о планах.", "Сказати, що ви робитимете, й запитати про плани."),
  "a2-communication-2": text("Ask about prices, sizes and payment when shopping.", "Уточнить цену, размер и способ оплаты в магазине.", "Уточнити ціну, розмір і спосіб оплати в магазині."),
  "a2-grammar-5": text("Say who you are with and what you use to do something.", "Сказать, с кем вы и чем пользуетесь.", "Сказати, з ким ви й чим користуєтеся."),
  "a2-grammar-6": text("Say to whom you give, send or offer something.", "Сказать, кому вы что-то даёте, отправляете или предлагаете.", "Сказати, кому ви щось даєте, надсилаєте або пропонуєте."),
  "a2-grammar-7": text("Compare options and name the best or cheapest one.", "Сравнить варианты и выделить лучший или самый дешёвый.", "Порівняти варіанти й назвати найкращий або найдешевший."),
  "a2-grammar-8": text("Describe your daily routine with reflexive verbs.", "Описать свой распорядок дня с возвратными глаголами.", "Описати свій розпорядок дня зі зворотними дієсловами."),
  "b1-grammar-1": text("Distinguish a process or habit from a completed event.", "Отличать процесс или привычку от завершённого действия.", "Розрізняти процес або звичку й завершену дію."),
  "b1-grammar-2": text("Talk about countries and languages and link two future events.", "Говорить о странах и языках и связывать два будущих события.", "Говорити про країни й мови та пов’язувати дві майбутні події."),
  "b1-grammar-3": text("Describe past events with phrases for origin, time and cause.", "Рассказать о прошлом, обозначая откуда, когда и почему.", "Розповісти про минуле, зазначаючи звідки, коли й чому."),
  "b1-reading-2": text("Find the main ideas and details in a text about the environment.", "Выделить основные мысли и детали в тексте об экологии.", "Виділити основні думки й деталі в тексті про довкілля."),
  "b1-reading-3": text("Understand an exam text and practise the language of instructions and summaries.", "Понять экзаменационный текст и потренировать лексику инструкций и пересказа.", "Зрозуміти екзаменаційний текст і потренувати лексику інструкцій та переказу."),
  "b2-grammar-1": text("Describe procedures and results using passive forms and verbal nouns.", "Описать процессы и результаты, используя пассивные формы и отглагольные существительные.", "Описати процеси й результати, уживаючи пасивні форми та віддієслівні іменники."),
  "b2-grammar-2": text("Discuss hypothetical choices and alternative past outcomes.", "Обсудить гипотетические решения и альтернативный исход в прошлом.", "Обговорити гіпотетичні рішення й альтернативний перебіг минулих подій."),
  "b2-communication-1": text("Talk about a job application, experience and employment terms.", "Обсудить отклик на вакансию, опыт и условия работы.", "Обговорити відгук на вакансію, досвід та умови роботи."),
  "c1-grammar-1": text("Link ideas with clauses of cause, contrast, purpose and condition.", "Связать идеи придаточными причины, противопоставления, цели и условия.", "Пов’язати думки підрядними причини, протиставлення, мети й умови."),
  "c1-grammar-2": text("Choose precise connectors for concession, purpose and conditions.", "Выбрать точные союзы для уступки, цели и условия.", "Вибрати точні сполучники для допусту, мети й умови."),
  "c2-grammar-1": text("Interpret idioms and recognise their figurative meanings.", "Понять идиомы и распознать их переносные значения.", "Зрозуміти ідіоми й розпізнати їхні переносні значення."),
  "c2-communication-1": text("Express and support a position on a social issue.", "Сформулировать и обосновать позицию по общественному вопросу.", "Сформулювати й обґрунтувати позицію щодо суспільного питання."),
};

const a1Order = ["a1-dictation-1", "a1-grammar-1", "a1-grammar-2", "a1-reading-1", "a1-grammar-3", "a1-grammar-5", "a1-grammar-6", "a1-grammar-7", "a1-grammar-4"];

export const courseMap = courseLevels.flatMap((level) => {
  const lessons = lessonsData.filter((lesson) => lesson.level === level);
  if (level === "A1") lessons.sort((a, b) => a1Order.indexOf(a.id) - a1Order.indexOf(b.id));

  return lessons.map((lesson, index) => {
    const pilot = isPilotId(lesson.id) ? pilotLessons[lesson.id] : undefined;
    const skills: CourseSkill[] = ["writing", "listening", "vocabulary"];
    if (lesson.type === "grammar") skills.push("grammar");
    if (lesson.type === "reading") skills.push("reading");
    if (lesson.content.exercises.some(({ type }) => type === "translation" || type === "dictation")) skills.push("speaking");

    return {
      id: lesson.id,
      level,
      title: pilot?.title ?? lesson.title,
      goal: pilot?.goal ?? goals[lesson.id] ?? lesson.content.description,
      ready: pilot?.ready,
      reuse: pilot?.reuse,
      check: pilot?.check ?? text(
        "Check your answers against the workbook models or take the lesson quiz.",
        "Сверьте ответы с образцами в упражнениях или пройдите тест урока.",
        "Звірте відповіді зі зразками у вправах або пройдіть тест уроку.",
      ),
      previous: lessons[index - 1]?.id,
      next: lessons[index + 1]?.id,
      skills,
      href: `/lessons/${lesson.id}${pilot ? "#a1-pilot" : ""}`,
    };
  });
});
