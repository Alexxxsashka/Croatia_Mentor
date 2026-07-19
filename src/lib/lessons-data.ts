export interface LocalizedString {
  en: string;
  ru: string;
  ua: string;
}

export interface LessonData {
  id: string;
  type: "grammar" | "reading" | "dictation" | "communication";
  level: string;
  title: string | LocalizedString;
  content: {
    description: string | LocalizedString;
    sections?: {
      title: string | LocalizedString;
      text: string | LocalizedString;
      examples?: string[] | LocalizedString[];
    }[];
    exercises: {
      type: "multiple-choice" | "fill-blank" | "translation" | "dictation";
      question: string | LocalizedString;
      options?: string[];
      correctAnswer: string | LocalizedString;
      hint?: string | LocalizedString;
    }[];
    dictationText?: string;
  };
}

export function getLocalizedText(
  field: string | LocalizedString | undefined,
  locale: string
): string {
  if (!field) return "";
  if (typeof field === "string") return field;
  
  const normLocale = locale.toLowerCase();
  if (normLocale === "ru" || normLocale === "russian") return field.ru;
  if (normLocale === "ua" || normLocale === "ukrainian") return field.ua;
  return field.en;
}

export const lessonsData: LessonData[] = [
  // ==========================================
  // LEVEL A1
  // ==========================================
  {
    id: "a1-grammar-1",
    type: "grammar",
    level: "A1",
    title: {
      en: "Osobne zamjenice (Personal Pronouns)",
      ru: "Личные местоимения (Osobne zamjenice)",
      ua: "Особові займенники (Osobne zamjenice)"
    },
    content: {
      description: {
        en: "Learn the personal pronouns in Croatian — the building blocks of every sentence, including singular, plural, and gender forms.",
        ru: "Изучите личные местоимения в хорватском — основу каждого предложения, включая формы единственного, множественного числа и рода.",
        ua: "Вивчіть особові займенники в хорватській — основу кожного речення, включаючи форми однини, множини та роду."
      },
      sections: [
        {
          title: { en: "Personal Pronouns (Nominative Case)", ru: "Личные местоимения (Именительный падеж)", ua: "Особові займенники (Називний відмінок)" },
          text: {
            en: "In Croatian, personal pronouns are used to represent the subject of a verb. Here are the basic forms in the Nominative case (the subject form):\n\n**Singular (Jednina):**\n- **ja** — I\n- **ti** — you (singular, informal)\n- **on** — he / it (masculine)\n- **ona** — she / it (feminine)\n- **ono** — it (neuter)\n\n**Plural (Množina):**\n- **mi** — we\n- **vi** — you (plural or polite formal singular)\n- **oni** — they (masculine or mixed group)\n- **one** — they (feminine only)\n- **ona** — they (neuter only)",
            ru: "В хорватском языке личные местоимения представляют субъект предложения. Вот формы именительного падежа:\n\n**Единственное число (Jednina):**\n- **ja** — я\n- **ti** — ты (дружеское обращение)\n- **on** — он (мужской род)\n- **ona** — она (женский род)\n- **ono** — оно (средний род)\n\n**Множественное число (Množina):**\n- **mi** — мы\n- **vi** — вы (множественное число или уважительное обращение к одному человеку)\n- **oni** — они (мужской род или смешанная группа)\n- **one** — они (только женский род)\n- **ona** — они (только средний род)",
            ua: "У хорватській мові особові займенники представляють підмет речення. Ось форми називного відмінка:\n\n**Однина (Jednina):**\n- **ja** — я\n- **ti** — ти (дружнє звернення)\n- **on** — він (чоловічий рід)\n- **ona** — вона (жіночий рід)\n- **ono** — воно (середній рід)\n\n**Множина (Množina):**\n- **mi** — ми\n- **vi** — ви (множина або шанобливе звернення до однієї особи)\n- **oni** — вони (чоловічий рід або змішана група)\n- **one** — вони (тільки жіночий рід)\n- **ona** — вони (тільки середній рід)"
          }
        },
        {
          title: { en: "Important Usage Rules", ru: "Важные правила использования", ua: "Важливі правила використання" },
          text: {
            en: "1. **Omission of Pronouns:** In Croatian, personal subject pronouns (ja, ti, on...) are very frequently omitted in daily conversation because the ending of the conjugated verb clearly indicates who is performing the action. For example, instead of saying *Ja radim* (I work), Croatians usually say just *Radim*.\n2. **Formal Address (Vi):** The pronoun *Vi* is capitalized in writing when addressing one person formally (e.g., *Kako ste Vi?* - How are you?). When addressing multiple people, it remains lowercase *vi*.\n3. **Third Person Plural Genders:** Croatian distinguishes gender in the plural of 'they':\n   - *oni* is used for groups of men or mixed groups (e.g., 5 men and 1 woman).\n   - *one* is used only for groups consisting entirely of women.\n   - *ona* is used only for groups of neuter nouns (e.g., children - *djeca*, or fields - *polja*).",
            ru: "1. **Опущение местоимений:** В хорватском личные местоимения (ja, ti...) очень часто опускаются, так как окончание глагола уже указывает на лицо. Вместо *Ja radim* (Я работаю) обычно говорят просто *Radim*.\n2. **Вежливое обращение (Vi):** Местоимение *Vi* пишется с большой буквы при уважительном обращении к одному лицу (*Kako ste Vi?*). При обращении к нескольким людям пишется со строчной буквы *vi*.\n3. **Род во множественном числе:** Хорватский язык различает род слова «они»:\n   - *oni* — для мужчин или смешанных групп.\n   - *one* — только для групп женщин.\n   - *ona* — только для существительных среднего рода во мн. ч. (например, дети — *djeca*).",
            ua: "1. **Опущення займенників:** У хорватській мові особові займенники (ja, ti...) дуже часто опускаються, оскільки закінчення дієслова вже вказує на особу. Замість *Ja radim* (Я працюю) зазвичай говорять просто *Radim*.\n2. **Ввічливе звернення (Vi):** Займенник *Vi* пишеться з великої літери при шанобливому зверненні до однієї особи (*Kako ste Vi?*). При зверненні до кількох людей пишеться з малої літери *vi*.\n3. **Рід у множині:** Хорватська мова розрізняє рід слова «вони»:\n   - *oni* — для чоловіків або змішаних груп.\n   - *one* — тільки для груп жінок.\n   - *ona* — тільки для іменників середнього роду у множині (наприклад, діти — *djeca*)."
          }
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "_____ sam iz Hrvatske. (I am from Croatia.)", ru: "_____ sam iz Hrvatske. (Я из Хорватии.)", ua: "_____ sam iz Hrvatske. (Я з Хорватії.)" },
          options: ["Ja", "Ti", "On", "Mi"],
          correctAnswer: "Ja"
        },
        {
          type: "multiple-choice",
          question: { en: "_____ ste lijepi. (You [formal/plural] are beautiful.)", ru: "_____ ste lijepi. (Вы красивы.)", ua: "_____ ste lijepi. (Ви красиві.)" },
          options: ["Vi", "Ti", "Oni", "Ja"],
          correctAnswer: "Vi"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: _____ je profesorica. (She is a professor.)", ru: "Заполните: _____ je profesorica. (Она преподаватель.)", ua: "Заповніть: _____ je profesorica. (Вона викладач.)" },
          correctAnswer: "Ona",
          hint: { en: "Feminine 3rd person singular pronoun", ru: "Местоимение 3-го лица женского рода (Она)", ua: "Займенник 3-ї особи жіночого роду (Вона)" }
        },
        {
          type: "multiple-choice",
          question: { en: "Kako ste _____? (How are you [plural/formal]?)", ru: "Kako ste _____? (Как у вас дела? / Как вы [мн.ч./вежл.]?)", ua: "Kako ste _____? (Як ваші справи? / Як ви [мн.ч./ввічл.]?)" },
          options: ["vi", "ja", "ti", "ona"],
          correctAnswer: "vi"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: _____ smo sretni. (We are happy.)", ru: "Заполните: _____ smo sretni. (Мы счастливы.)", ua: "Заповніть: _____ smo sretni. (Ми щасливі.)" },
          correctAnswer: "Mi",
          hint: { en: "1st person plural pronoun", ru: "Местоимение 1-го лица мн. ч. (Мы)", ua: "Займенник 1-ї особи мн. ч. (Ми)" }
        },
        {
          type: "multiple-choice",
          question: { en: "_____ su u uredu. (They [masc./mixed] are in the office.)", ru: "_____ su u uredu. (Они [м.р./смеш.] в офисе.)", ua: "_____ su u uredu. (Вони [ч.р./зміш.] в офісі.)" },
          options: ["Oni", "One", "Ona", "Vi"],
          correctAnswer: "Oni"
        },
        {
          type: "translation",
          question: { en: "Translate to Croatian: 'You (informal, singular) are'", ru: "Переведите на хорватский: 'Ты есть'", ua: "Перекладіть на хорватську: 'Ти є'" },
          correctAnswer: "Ti si"
        },
        {
          type: "multiple-choice",
          question: { en: "_____ čitaš knjigu. (You are reading a book.)", ru: "_____ čitaš knjigu. (Ты читаешь книгу.)", ua: "_____ čitaš knjigu. (Ти читаєш книгу.)" },
          options: ["Ti", "Ja", "On", "Mi"],
          correctAnswer: "Ti"
        },
        {
          type: "multiple-choice",
          question: { en: "_____ su sestre. (They [feminine only] are sisters.)", ru: "_____ su sestre. (Они [только жен. род] сестры.)", ua: "_____ su sestre. (Вони [тільки жін. рід] сестри.)" },
          options: ["One", "Oni", "Ona", "Vi"],
          correctAnswer: "One"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: _____ je dijete. (It is a child.)", ru: "Заполните: _____ je dijete. (Оно ребенок.)", ua: "Заповніть: _____ je dijete. (Воно дитина.)" },
          correctAnswer: "Ono",
          hint: { en: "Neuter 3rd person singular pronoun", ru: "Местоимение 3-го лица среднего рода (Оно)", ua: "Займенник 3-ї особи середнього роду (Воно)" }
        },
        {
          type: "multiple-choice",
          question: { en: "Tko ste _____? (Who are you [plural/formal]?)", ru: "Tko ste _____? (Кто вы?)", ua: "Tko ste _____? (Хто ви?)" },
          options: ["vi", "ti", "oni", "ja"],
          correctAnswer: "vi"
        },
        {
          type: "multiple-choice",
          question: { en: "_____ smo učenici. (We are pupils.)", ru: "_____ smo učenici. (Мы ученики.)", ua: "_____ smo učenici. (Ми учні.)" },
          options: ["Mi", "Vi", "Oni", "Ja"],
          correctAnswer: "Mi"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: _____ uče hrvatski. (They [masc./mixed] study Croatian.)", ru: "Заполните: _____ uče hrvatski. (Они учат хорватский.)", ua: "Заповніть: _____ uče hrvatski. (Вони вчать хорватську.)" },
          correctAnswer: "Oni",
          hint: { en: "They (masculine plural)", ru: "Они (мужской род)", ua: "Вони (чоловічий рід)" }
        },
        {
          type: "translation",
          question: { en: "Translate to English: 'On je liječnik.'", ru: "Переведите на русский: 'On je liječnik.'", ua: "Перекладіть на українську: 'On je liječnik.'" },
          correctAnswer: { en: "He is a doctor", ru: "Он врач", ua: "Він лікар" }
        },
        {
          type: "multiple-choice",
          question: { en: "_____ radite danas. (You [plural] work today.)", ru: "_____ radite danas. (Вы работаете сегодня.)", ua: "_____ radite danas. (Ви працюєте сьогодні.)" },
          options: ["Vi", "Ti", "Mi", "Oni"],
          correctAnswer: "Vi"
        }
      ]
    }
  },
  {
    id: "a1-grammar-2",
    type: "grammar",
    level: "A1",
    title: {
      en: "Glagol 'biti' i predstavljanje (Verb 'to be' & introductions)",
      ru: "Глагол 'biti' и знакомство (Verb 'biti')",
      ua: "Дієслово 'biti' та знайомство (Verb 'biti')"
    },
    content: {
      description: {
        en: "Master the present tense of the auxiliary verb 'biti' (to be) in positive, negative, and interrogative forms, and practice introductions.",
        ru: "Освойте настоящее время вспомогательного глагола 'biti' (быть) в утвердительной, отрицательной и вопросительной формах, и попрактикуйтесь в знакомстве.",
        ua: "Опануйте теперішній час допоміжного дієслова 'biti' (бути) в стверджувальній, заперечній та питальній формах, і попрактикуйтеся у знайомстві."
      },
      sections: [
        {
          title: { en: "The Present Tense of 'Biti'", ru: "Настоящее время глагола 'biti'", ua: "Теперішній час дієслова 'biti'" },
          text: {
            en: "The verb *biti* (to be) is the most important auxiliary verb in Croatian. In the present tense, it has two sets of positive forms:\n\n1. **Unstressed Short Forms (Clitics):** These are the default forms used in sentences. They cannot stand at the beginning of a sentence.\n   - ja **sam** (I am)\n   - ti **si** (you are)\n   - on/ona/ono **je** (he/she/it is)\n   - mi **smo** (we are)\n   - vi **ste** (you are)\n   - oni/one/ona **su** (they are)\n\n2. **Stressed Long Forms:** Used for emphasis, in short answers (e.g. *Jesi li ti student? - Jesam.*), or at the very beginning of a sentence.\n   - **jesam**, **jesi**, **jest**, **jesmo**, **jeste**, **jesu**",
            ru: "Глагол *biti* (быть) — важнейший вспомогательный глагол в хорватском языке. В настоящем времени он имеет две утвердительные формы:\n\n1. **Краткие безударные формы (энклитики):** Используются по умолчанию. Не могут стоять в самом начале предложения.\n   - ja **sam** (я есть)\n   - ti **si** (ты есть)\n   - on/ona/ono **je** (он/она/оно есть)\n   - mi **smo** (мы есть)\n   - vi **ste** (вы есть)\n   - oni/one/ona **su** (они есть)\n\n2. **Полные ударные формы:** Используются для логического ударения, в кратких ответах (например, *Jesi li ti student? - Jesam.*) или в самом начале предложения.\n   - **jesam**, **jesi**, **jest**, **jesmo**, **jeste**, **jesu**",
            ua: "Дієслово *biti* (бути) — найважливіше допоміжне дієслово в хорватській мові. У теперішньому часі воно має дві стверджувальні форми:\n\n1. **Короткі ненаголошені форми (енклітики):** Використовуються за замовчуванням. Не можуть стояти на самому початку речення.\n   - ja **sam** (я є)\n   - ti **si** (ти є)\n   - on/ona/ono **je** (він/вона/воно є)\n   - mi **smo** (ми є)\n   - vi **ste** (ви є)\n   - oni/one/ona **su** (вони є)\n\n2. **Повні наголошені форми:** Використовуються для логічного наголосу, у коротких відповідях (наприклад, *Jesi li ti student? - Jesam.*) або на самому початку речення.\n   - **jesam**, **jesi**, **jest**, **jesmo**, **jeste**, **jesu**"
          }
        },
        {
          title: { en: "Negation and Questions", ru: "Отрицание и вопросы", ua: "Заперечення та запитання" },
          text: {
            en: "**Negative Forms:** Formed by adding the negative particle *ni-* directly to the stressed forms, creating a single word:\n- ja **nisam** (I am not)\n- ti **nisi** (you are not)\n- on/ona/ono **nije** (he/she/it is not)\n- mi **nismo** (we are not)\n- vi **niste** (you are not)\n- oni/one/ona **nisu** (they are not)\n\n**Interrogative Forms (Questions):** To form a 'yes/no' question, use the stressed verb form followed by the particle **li**:\n- *Jesi li* ti student? (Are you a student?)\n- *Je li* on učitelj? (Is he a teacher?)\n- *Jeste li* vi iz Zagreba? (Are you from Zagreb?)",
            ru: "**Отрицательные формы:** Образуются путем слияния частицы *ni-* с формой глагола:\n- ja **nisam** (я не есть)\n- ti **nisi** (ты не есть)\n- on/ona/ono **nije** (он/она/оно не есть)\n- mi **nismo** (мы не есть)\n- vi **niste** (вы не есть)\n- oni/one/ona **nisu** (они не есть)\n\n**Вопросительные предложения:** Для общего вопроса используется ударная форма глагола и вопросительная частица **li**:\n- *Jesi li* ti student? (Ты студент?)\n- *Je li* on učitelj? (Он учитель?)\n- *Jeste li* vi из Загреба? (Вы из Загреба?)",
            ua: "**Заперечні форми:** Утворюються шляхом злиття частки *ni-* з формою дієслова:\n- ja **nisam** (я не є)\n- ti **nisi** (ти не є)\n- on/ona/ono **nije** (він/вона/воно не є)\n- mi **nismo** (ми не є)\n- vi **niste** (ви не є)\n- oni/one/ona **nisu** (вони не є)\n\n**Питальні речення:** Для загального запитання використовується наголошена форма дієслова та питальна частка **li**:\n- *Jesi li* ti student? (Ти студент?)\n- *Je li* on učitelj? (Він вчитель?)\n- *Jeste li* vi iz Zagreba? (Ви з Загреба?)"
          }
        },
        {
          title: { en: "How to Answer Yes/No Questions", ru: "Как отвечать на общие вопросы", ua: "Як відповідати на загальні запитання" },
          text: {
            en: "In Croatian, instead of answering with just *Da* (Yes) or *Ne* (No), it is grammatically correct and natural to respond using the **long stressed forms** of the verb *biti* (for positive answers) or **negative forms** (for negative answers):\n\n- **Question:** *Jesi li* ti umoran? (Are you tired?)\n  - **Positive reply:** **Jesam.** (Yes, I am.)\n  - **Negative reply:** **Nisam.** (No, I am not.)\n\n- **Question:** *Je li* ona profesorica? (Is she a professor?)\n  - **Positive reply:** **Jest.** / **Je.** (Yes, she is.)\n  - **Negative reply:** **Nije.** (No, she is not.)\n\n- **Question:** *Jeste li* vi iz Hrvatske? (Are you from Croatia?)\n  - **Positive reply:** **Jesmo.** (Yes, we are.) / **Jesam.** (Yes, I am [polite address to one person]).\n  - **Negative reply:** **Nismo.** (No, we are not.) / **Nisam.** (No, I am not.)",
            ru: "В хорватском языке вместо простых ответов *Da* (Да) или *Ne* (Нет) принято использовать **ударные утвердительные формы** глагола *biti* (для согласия) или **отрицательные формы** (для несогласия):\n\n- **Вопрос:** *Jesi li* ti umoran? (Ты устал?)\n  - **Да:** **Jesam.** (Да, я устал / Да.)\n  - **Нет:** **Nisam.** (Нет, я не устал / Нет.)\n\n- **Вопрос:** *Je li* ona profesorica? (Она преподаватель?)\n  - **Да:** **Jest.** / **Je.** (Да.)\n  - **Нет:** **Nije.** (Нет.)\n\n- **Вопрос:** *Jeste li* vi из Hrvatske? (Вы из Хорватии?)\n  - **Да:** **Jesmo.** (Да, мы из Хорватии.) / **Jesam.** (Да, я [вежливое обращение к одному лицу]).\n  - **Нет:** **Nismo.** (Нет, мы не из Хорватии.) / **Nisam.** (Нет.)",
            ua: "У хорватській мові замість простих відповідей *Da* (Так) або *Ne* (Ні) прийнято використовувати **наголошені стверджувальні форми** дієслова *biti* (для згоди) або **заперечні форми** (для незгоди):\n\n- **Запитання:** *Jesi li* ti umoran? (Ти втомився?)\n  - **Так:** **Jesam.** (Так, я є / Так.)\n  - **Ні:** **Nisam.** (Ні, я не є / Ні.)\n\n- **Запитання:** *Je li* ona profesorica? (Вона викладач?)\n  - **Так:** **Jest.** / **Je.** (Так.)\n  - **Ні:** **Nije.** (Ні.)\n\n- **Запитання:** *Jeste li* vi iz Hrvatske? (Ви з Хорватії?)\n  - **Так:** **Jesmo.** (Так, ми є.) / **Jesam.** (Так, я є [ввічливе звернення до однієї особи]).\n  - **Ні:** **Nismo.** (Ні, ми не є.) / **Nisam.** (Ні.)"
          }
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Kako _____ zoveš? (What is your name?)", ru: "Kako _____ zoveš? (Как тебя зовут?)", ua: "Kako _____ zoveš? (Як тебе звати?)" },
          options: ["se", "si", "sam", "je"],
          correctAnswer: "se"
        },
        {
          type: "multiple-choice",
          question: { en: "Ja _____ Marko. (I am Marko.)", ru: "Ja _____ Marko. (Я Марко.)", ua: "Ja _____ Marko. (Я Марко.)" },
          options: ["sam", "si", "je", "su"],
          correctAnswer: "sam"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Odakle _____ ti? (Where are you from?)", ru: "Заполните: Odakle _____ ti? (Откуда ты?)", ua: "Заповніть: Odakle _____ ti? (Звідки ти?)" },
          correctAnswer: "si",
          hint: { en: "Short present form of 'biti' for 'ti'", ru: "Краткая форма глагола 'biti' для 'ti'", ua: "Коротка форма дієслова 'biti' для 'ti'" }
        },
        {
          type: "multiple-choice",
          question: { en: "Oni _____ iz Hrvatske. (They are from Croatia.)", ru: "Oni _____ iz Hrvatske. (Они из Хорватии.)", ua: "Oni _____ iz Hrvatske. (Вони з Хорватії.)" },
          options: ["su", "smo", "ste", "je"],
          correctAnswer: "su"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Ja sam iz Kijeva.'", ru: "Переведите: 'Ja sam iz Kijeva.'", ua: "Перекладіть: 'Ja sam iz Kijeva.'" },
          correctAnswer: { en: "I am from Kyiv", ru: "Я из Киева", ua: "Я з Києва" }
        },
        {
          type: "multiple-choice",
          question: { en: "Jeste _____ li umorni? (Are you [plural/formal] tired?)", ru: "Jeste _____ li umorni? (Вы устали?)", ua: "Jeste _____ li umorni? (Ви втомилися?)" },
          options: ["ste", "smo", "su", "si"],
          correctAnswer: "ste"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Mi _____ studenti. (We are students.)", ru: "Заполните: Mi _____ studenti. (Мы студенты.)", ua: "Заповніть: Mi _____ studenti. (Ми студенти.)" },
          correctAnswer: "smo",
          hint: { en: "Short form of 'biti' (we are)", ru: "Краткая форма глагола 'biti' (мы есть - smo)", ua: "Коротка форма дієслова 'biti' (ми є - smo)" }
        },
        {
          type: "multiple-choice",
          question: { en: "Kako se _____ ona? (What is her name?)", ru: "Kako se _____ ona? (Как её зовут?)", ua: "Kako se _____ ona? (Як її звати?)" },
          options: ["zove", "zovem", "zoveš", "zovu"],
          correctAnswer: "zove"
        },
        {
          type: "multiple-choice",
          question: { en: "Ja _____ iz Zagreба. (I am not from Zagreb.)", ru: "Ja _____ iz Zagreba. (Я не из Загреба.)", ua: "Ja _____ iz Zagreba. (Я не з Загреба.)" },
          options: ["nisam", "nisi", "nije", "nismo"],
          correctAnswer: "nisam"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: _____ li ti sretan? (Are you happy?)", ru: "Заполните: _____ li ti sretan? (Ты счастлив?)", ua: "Заповніть: _____ li ti sretan? (Ти щасливий?)" },
          correctAnswer: "Jesi",
          hint: { en: "Question form: 2nd person singular stressed 'biti'", ru: "Вопросительная форма: 2-е лицо ед. ч. ударная форма 'biti'", ua: "Питальна форма: 2-га особа однини наголошена форма 'biti'" }
        },
        {
          type: "multiple-choice",
          question: { en: "On _____ profesor. (He is not a professor.)", ru: "On _____ profesor. (Он не преподаватель.)", ua: "On _____ profesor. (Він не викладач.)" },
          options: ["nije", "nisam", "nisi", "nisu"],
          correctAnswer: "nije"
        },
        {
          type: "multiple-choice",
          question: { en: "Jesu _____ oni umorni? (Are they tired?)", ru: "Jesu _____ oni umorni? (Они устали?)", ua: "Jesu _____ oni umorni? (Вони втомилися?)" },
          options: ["li", "su", "si", "se"],
          correctAnswer: "li"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Mi _____ umorni. (We are not tired.)", ru: "Заполните: Mi _____ umorni. (Мы не устали.)", ua: "Заповніть: Mi _____ umorni. (Ми не втомилися.)" },
          correctAnswer: "nismo",
          hint: { en: "We are not (negation)", ru: "Мы не есть (nismo)", ua: "Ми не є (nismo)" }
        },
        {
          type: "translation",
          question: { en: "Translate to English: 'Nisam umoran.'", ru: "Переведите на русский: 'Nisam umoran.'", ua: "Перекладіть на українську: 'Nisam umoran.'" },
          correctAnswer: { en: "I am not tired", ru: "Я не устал", ua: "Я не втомився" }
        },
        {
          type: "multiple-choice",
          question: { en: "Jeste li _____ iz Splita? (Are you [plural/formal] from Split?)", ru: "Jeste li _____ iz Splita? (Вы из Сплита?)", ua: "Jeste li _____ iz Splita? (Ви зі Спліта?)" },
          options: ["vi", "ti", "oni", "mi"],
          correctAnswer: "vi"
        }
      ]
    }
  },
  {
    id: "a1-grammar-3",
    type: "grammar",
    level: "A1",
    title: {
      en: "Brojevi i brojanje (Numbers & Counting)",
      ru: "Числа и счет (Brojevi)",
      ua: "Числа та рахунок (Brojevi)"
    },
    content: {
      description: {
        en: "Learn cardinal and ordinal numbers in Croatian from 1 to 100, and understand the basic rules of counting nouns.",
        ru: "Изучите количественные и порядковые числительные в хорватском от 1 до 100, а также базовые правила согласования чисел с существительными.",
        ua: "Вивчіть кількісні та порядкові числівники у хорватській від 1 до 100, а також базові правила узгодження чисел з іменниками."
      },
      sections: [
        {
          title: { en: "Cardinal Numbers (1 to 20)", ru: "Количественные числительные (от 1 до 20)", ua: "Кількісні числівники (від 1 до 20)" },
          text: {
            en: "Here are the basic cardinal numbers in Croatian:\n- **1** - jedan (masc) / jedna (fem) / jedno (neut)\n- **2** - dva (masc/neut) / dvije (fem)\n- **3** - tri\n- **4** - četiri\n- **5** - pet\n- **6** - šest\n- **7** - sedam\n- **8** - osam\n- **9** - devet\n- **10** - deset\n\nFor numbers **11 to 19**, add the suffix **-naest** to the base number:\n- *jedanaest* (11), *dvanaest* (12), *trinaest* (13), *četrnaest* (14), *petnaest* (15), *šesnaest* (16), *sedamnaest* (17), *osamnaest* (18), *devetnaest* (19).\n- **20** is **dvadeset**.",
            ru: "Базовые количественные числительные в хорватском:\n- **1** - jedan (муж.) / jedna (жен.) / jedno (ср.)\n- **2** - dva (муж./ср.) / dvije (жен.)\n- **3** - tri\n- **4** - četiri\n- **5** - pet\n- **6** - šest\n- **7** - sedam\n- **8** - osam\n- **9** - devet\n- **10** - deset\n\nДля чисел **от 11 до 19** добавьте суффикс **-naest** к основе:\n- *jedanaest* (11), *dvanaest* (12), *trinaest* (13), *četrnaest* (14), *petnaest* (15), *šesnaest* (16), *sedamnaest* (17), *osamnaest* (18), *devetnaest* (19).\n- **20** — это **dvadeset**.",
            ua: "Базові кількісні числівники у хорватській:\n- **1** - jedan (чол.) / jedna (жін.) / jedno (сер.)\n- **2** - dva (чол./сер.) / dvije (жін.)\n- **3** - tri\n- **4** - četiri\n- **5** - pet\n- **6** - šest\n- **7** - sedam\n- **8** - osam\n- **9** - devet\n- **10** - deset\n\nДля чисел **від 11 до 19** додайте суфікс **-naest** до основи:\n- *jedanaest* (11), *dvanaest* (12), *trinaest* (13), *četrnaest* (14), *petnaest* (15), *šesnaest* (16), *sedamnaest* (17), *osamnaest* (18), *devetnaest* (19).\n- **20** — це **dvadeset**."
          }
        },
        {
          title: { en: "Tens, Hundreds, and Counting Rules", ru: "Десятки, сотни и правила согласования", ua: "Десятки, сотні та правила узгодження" },
          text: {
            en: "**Tens & Hundreds:**\n- **30** - trideset, **40** - četrdeset, **50** - pedeset, **60** - šezdeset, **70** - sedamdeset, **80** - osamdeset, **90** - devedeset, **100** - sto (or *stotina*).\n\n**Critical Agreement Rules for Nouns:**\n1. After **1** (or numbers ending in 1 like 21, 31): Noun stays in **Nominative Singular**:\n   - *jedan učenik* (1 student), *dvadeset jedna knjiga* (21 books).\n2. After **2, 3, 4** (or numbers ending in 2, 3, 4): Noun must be in **Genitive Singular**:\n   - *dva učenika* (2 students), *tri knjige* (3 books), *četiri stola* (4 tables).\n3. After **5 to 20** (and tens ending in 0): Noun must be in **Genitive Plural**:\n   - *pet učenika* (5 students), *deset knjiga* (10 books), *pedeset stolova* (50 tables).",
            ru: "**Десятки и сотни:**\n- **30** - trideset, **40** - četrdeset, **50** - pedeset, **60** - šezdeset, **70** - sedamdeset, **80** - osamdeset, **90** - devedeset, **100** - sto.\n\n**Правила согласования с существительными:**\n1. После **1** (и чисел на 1, кроме 11): Существительное стоит в **Именительном падеже ед.ч. (Nominative Singular)**:\n   - *jedan učenik* (1 ученик), *dvadeset jedna knjiga* (21 книга).\n2. После **2, 3, 4** (и чисел на 2, 3, 4, кроме 12, 13, 14): Существительное стоит в **Родительном падеже ед.ч. (Genitive Singular)**:\n   - *dva učenika* (2 ученика), *tri knjige* (3 книги).\n3. После **5 и более** (включая 11-19, и круглые десятки): Существительное стоит в **Родительном падеже мн.ч. (Genitive Plural)**:\n   - *pet učenika* (5 учеников), *deset knjiga* (10 книг).",
            ua: "**Десятки та сотні:**\n- **30** - trideset, **40** - četrdeset, **50** - pedeset, **60** - šezdeset, **70** - sedamdeset, **80** - osamdeset, **90** - devedeset, **100** - sto.\n\n**Правила узгодження з іменниками:**\n1. Після **1** (і чисел на 1, крім 11): Іменник стоїть у **Називному відмінку однини (Nominative Singular)**:\n   - *jedan učenik* (1 учень), *dvadeset jedna knjiga* (21 книга).\n2. Після **2, 3, 4** (і чисел на 2, 3, 4, крім 12, 13, 14): Іменник стоїть у **Родовому відмінку однини (Genitive Singular)**:\n   - *dva učenika* (2 учні), *tri knjige* (3 книги).\n3. Після **5 і більше** (включая 11-19, та круглі десятки): Іменник стоїть у **Родовому відмінку множини (Genitive Plural)**:\n   - *pet učenika* (5 учнів), *deset knjiga* (10 книг)."
          }
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "How do you say 15 in Croatian?", ru: "Как будет 15 по-хорватски?", ua: "Як буде 15 хорватською?" },
          options: ["petnaest", "pedeset", "pet", "petnaestak"],
          correctAnswer: "petnaest"
        },
        {
          type: "multiple-choice",
          question: { en: "How do you say 50 in Croatian?", ru: "Как будет 50 по-хорватски?", ua: "Як буде 50 хорватською?" },
          options: ["pedeset", "petnaest", "petsto", "pet"],
          correctAnswer: "pedeset"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Imam 2 _____ (prijatelj - Genitive Singular). (I have 2 friends.)", ru: "Заполните: Imam 2 _____ (prijatelj). (У меня 2 друга.)", ua: "Заповніть: Imam 2 _____ (prijatelj). (У мене 2 друга.)" },
          correctAnswer: "prijatelja",
          hint: { en: "Genitive singular of prijatelj", ru: "Родительный падеж ед.ч. от prijatelj", ua: "Родовий відмінок однини від prijatelj" }
        },
        {
          type: "multiple-choice",
          question: { en: "U razredu ima 5 _____ (učenik - Genitive Plural). (There are 5 students in the class.)", ru: "U razredu ima 5 _____ (učenik). (В классе 5 учеников.)", ua: "U razredu ima 5 _____ (učenik). (У класі 5 учнів.)" },
          options: ["učenika", "učenik", "učenici", "učenikom"],
          correctAnswer: "učenika"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: To košta 1 _____ (euro - Nominative Singular). (That costs 1 euro.)", ru: "Заполните: To košta 1 _____ (euro). (Это стоит 1 евро.)", ua: "Заповніть: To košta 1 _____ (euro). (Це коштує 1 євро.)" },
          correctAnswer: "euro",
          hint: { en: "1 takes Nominative singular", ru: "Число 1 требует именительного падежа", ua: "Число 1 вимагає називного відмінка" }
        },
        {
          type: "multiple-choice",
          question: { en: "Kako se piše 40?", ru: "Как пишется 40?", ua: "Як пишеться 40?" },
          options: ["četrdeset", "četiri", "četrnaest", "četrsto"],
          correctAnswer: "četrdeset"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Imam tri sestre.'", ru: "Переведите: 'Imam tri sestre.'", ua: "Перекладіть: 'Imam tri sestre.'" },
          correctAnswer: { en: "I have three sisters", ru: "У меня три сестры", ua: "У мене три сестри" }
        },
        {
          type: "multiple-choice",
          question: { en: "Kako se kaže 12?", ru: "Как сказать 12?", ua: "Як сказати 12?" },
          options: ["dvanaest", "dva", "dvadeset", "dvjesto"],
          correctAnswer: "dvanaest"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Kupujem 4 _____ (jabuka - Genitive Singular). (I am buying 4 apples.)", ru: "Заполните: Kupujem 4 _____ (jabuka). (Я покупаю 4 яблока.)", ua: "Заповніть: Kupujem 4 _____ (jabuka). (Я купую 4 яблука.)" },
          correctAnswer: "jabuke",
          hint: { en: "Genitive singular of feminine jabuka ends in -e", ru: "Родительный падеж ед.ч. женского рода оканчивается на -e", ua: "Родовий відмінок однини жіночого роду закінчується на -e" }
        },
        {
          type: "multiple-choice",
          question: { en: "Kako se kaže 100?", ru: "Как сказать 100?", ua: "Як сказати 100?" },
          options: ["sto", "tisuću", "deset", "milijun"],
          correctAnswer: "sto"
        },
        {
          type: "multiple-choice",
          question: { en: "Imam 21 _____ (godina). (I am 21 years old.)", ru: "Imam 21 _____ (godina). (Мне 21 год.)", ua: "Imam 21 _____ (godina). (Мені 21 рік.)" },
          options: ["godinu", "godine", "godina", "godini"],
          correctAnswer: "godinu"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Tamo je 10 _____ (stol - Genitive Plural). (There are 10 tables there.)", ru: "Заполните: Tamo je 10 _____ (stol). (Там 10 столов.)", ua: "Заповніть: Tamo je 10 _____ (stol). (Там 10 столів.)" },
          correctAnswer: "stolova",
          hint: { en: "Genitive plural of stol is stolova", ru: "Родительный падеж мн.ч. от stol — stolova", ua: "Родовий відмінок множини від stol — stolova" }
        },
        {
          type: "translation",
          question: { en: "Translate: 'dvadeset osam'", ru: "Переведите: 'dvadeset osam'", ua: "Перекладіть: 'dvadeset osam'" },
          correctAnswer: { en: "twenty eight", ru: "двадцать восемь", ua: "двадцять вісім" }
        },
        {
          type: "multiple-choice",
          question: { en: "Kako se kaže 70?", ru: "Как сказать 70?", ua: "Як сказати 70?" },
          options: ["sedamdeset", "sedamnaest", "sedam", "sedamsto"],
          correctAnswer: "sedamdeset"
        },
        {
          type: "multiple-choice",
          question: { en: "Imam 22 _____ (godina). (I am 22 years old.)", ru: "Imam 22 _____ (godina). (Мне 22 года.)", ua: "Imam 22 _____ (godina). (Мені 22 роки.)" },
          options: ["godine", "godina", "godinu", "godini"],
          correctAnswer: "godine"
        }
      ]
    }
  },
  {
    id: "a1-grammar-4",
    type: "grammar",
    level: "A1",
    title: {
      en: "Modalni glagoli: morati, moći, htjeti",
      ru: "Модальные глаголы (morati, moći, htjeti)",
      ua: "Модальні дієслова (morati, moći, htjeti)"
    },
    content: {
      description: {
        en: "Learn the present tense of modal verbs 'morati' (must), 'moći' (can), and 'htjeti' (want), and how to form sentences with them.",
        ru: "Изучите настоящее время модальных глаголов 'morati' (должен), 'moći' (мочь) и 'htjeti' (хотеть), а также построение предложений с ними.",
        ua: "Вивчіть теперішній час модальних дієслів 'morati' (мусити), 'moći' (могти) та 'htjeti' (хотіти), а також побудову речень з ними."
      },
      sections: [
        {
          title: { en: "Conjugation of Modal Verbs", ru: "Спряжение модальных глаголов", ua: "Відмінювання модальних дієслів" },
          text: {
            en: "Modal verbs express necessity, ability, or desire. Here is their present tense conjugation:\n\n1. **morati** (must / to have to):\n   - ja **moram**, ti **moraš**, on/ona/ono **mora**\n   - mi **moramo**, vi **morate**, oni/one/ona **moraju**\n\n2. **moći** (can / to be able to):\n   - ja **mogu**, ti **možeš**, on/ona/ono **može**\n   - mi **možemo**, vi **možete**, oni/one/ona **mogu**\n\n3. **htjeti** (want / will):\n   - ja **hoću** (or short *ću*), ti **hoćeš** (*ćeš*), on/ona/ono **hoće** (*će*)\n   - mi **hoćemo** (*ćemo*), vi **hoćete** (*ćete*), oni/one/ona **hoće** (*će*)\n   - *Negative:* **neću, nećeš, neće, nećemo, nećete, neće**.",
            ru: "Модальные глаголы выражают необходимость, возможность или желание. Спряжение в настоящем времени:\n\n1. **morati** (должен / обязан):\n   - ja **moram**, ti **moraš**, on/ona/ono **mora**\n   - mi **moramo**, vi **morate**, oni/one/ona **moraju**\n\n2. **moći** (мочь / быть в состоянии):\n   - ja **mogu**, ti **možeš**, on/ona/ono **može**\n   - mi **možemo**, vi **možete**, oni/one/ona **mogu**\n\n3. **htjeti** (хотеть):\n   - ja **hoću**, ti **hoćeš**, on/ona/ono **hoće**\n   - mi **hoćemo**, vi **hoćete**, oni/one/ona **hoće**\n   - *Отрицание:* **neću, nećeš, neće, nećemo, nećete, neće**.",
            ua: "Модальні дієслова виражають необхідність, можливість або бажання. Відмінювання в теперішньому часі:\n\n1. **morati** (мусити / бути повинним):\n   - ja **moram**, ti **moraš**, on/ona/ono **mora**\n   - mi **moramo**, vi **morate**, oni/one/ona **moraju**\n\n2. **moći** (могти / бути в змозі):\n   - ja **mogu**, ti **možeš**, on/ona/ono **može**\n   - mi **možemo**, vi **možete**, oni/one/ona **mogu**\n\n3. **htjeti** (хотіти):\n   - ja **hoću**, ti **hoćeš**, on/ona/ono **hoće**\n   - mi **hoćemo**, vi **hoćete**, oni/one/ona **hoće**\n   - *Заперечення:* **neću, nećeš, neće, nećemo, nećete, neće**."
          }
        },
        {
          title: { en: "Sentence Structure with Modal Verbs", ru: "Структура предложения с модальными глаголами", ua: "Структура речення з модальними дієсловами" },
          text: {
            en: "In Croatian, a modal verb is directly followed by the **infinitive** form of the main verb (infinitive ends in *-ti* or *-ći*):\n- *Moram* **raditi** danas. (I must work today.)\n- *Možemo* **ići** kući. (We can go home.)\n- *Neću* **učiti** navečer. (I don't want to study in the evening.)\n\n**Asking questions:**\n- *Možeš li* **pomoći**? (Can you help?)\n- *Što* **moraš** **kupiti**? (What do you have to buy?)",
            ru: "В хорватском языке после модального глагола следует глагол в **инфинитиве** (оканчивается на *-ti* или *-ći*):\n- *Moram* **raditi** danas. (Я должен работать сегодня.)\n- *Možemo* **ići** kući. (Мы можем идти домой.)\n- *Neću* **učiti** navečer. (Я не хочу учиться вечером.)\n\n**Вопросы:**\n- *Možeš li* **pomoći**? (Можешь помочь?)\n- *Što* **moraš** **kupiti**? (Что ты должен купить?)",
            ua: "У хорватській мові після модального дієслова вживається дієслово в **інфінітиві** (закінчується на *-ti* або *-ći*):\n- *Moram* **raditi** danas. (Я мушу працювати сьогодні.)\n- *Možemo* **ići** kući. (Ми можемо йти додому.)\n- *Neću* **učiti** navečer. (Я не хочу вчитися ввечері.)\n\n**Запитання:**\n- *Možeš li* **pomoći**? (Можеш допомогти?)\n- *Što* **moraš** **kupiti**? (Що ти мусиш купити?)"
          }
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Ja _____ (must) učiti.", ru: "Ja _____ (должен) učiti.", ua: "Ja _____ (мушу) učiti." },
          options: ["moram", "moraš", "moramo", "moraju"],
          correctAnswer: "moram"
        },
        {
          type: "multiple-choice",
          question: { en: "Mi _____ (can) doći sutra.", ru: "Mi _____ (можем) doći sutra.", ua: "Mi _____ (можемо) прийти завтра." },
          options: ["možemo", "mogu", "možeš", "možete"],
          correctAnswer: "možemo"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Ja ne _____ (want) piti čaj.", ru: "Заполните: Ja ne _____ (хочу) piti čaj.", ua: "Заповніть: Ja ne _____ (хочу) piti čaj." },
          correctAnswer: "hoću",
          hint: { en: "Present tense of htjeti for 'ja'", ru: "Форма глагола htjeti для 'ja'", ua: "Форма дієслова htjeti для 'ja'" }
        },
        {
          type: "multiple-choice",
          question: { en: "Oni _____ (must) raditi.", ru: "Oni _____ (должны) raditi.", ua: "Oni _____ (мусять) raditi." },
          options: ["moraju", "mora", "morate", "moram"],
          correctAnswer: "moraju"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: _____ li ti (can) govoriti hrvatski?", ru: "Заполните: _____ li ti (можешь) govoriti hrvatski?", ua: "Заповніть: _____ li ti (можеш) govoriti hrvatski?" },
          correctAnswer: "Možeš",
          hint: { en: "Verb moći for 'ti'", ru: "Глагол moći для 'ti'", ua: "Дієслово moći для 'ti'" }
        },
        {
          type: "multiple-choice",
          question: { en: "Ona _____ (does not want) ići u školu.", ru: "Ona _____ (не хочет) ići u školu.", ua: "Вона _____ (не хоче) іти до школи." },
          options: ["neće", "neću", "nećeš", "nećemo"],
          correctAnswer: "neće"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Moramo kupiti kruh.'", ru: "Переведите: 'Moramo kupiti kruh.'", ua: "Перекладіть: 'Moramo kupiti kruh.'" },
          correctAnswer: { en: "We must buy bread", ru: "Мы должны купить хлеб", ua: "Ми мусимо купити хліб" }
        },
        {
          type: "multiple-choice",
          question: { en: "Vi _____ (can) platiti karticom.", ru: "Vi _____ (можете) platiti karticom.", ua: "Ви _____ (можете) заплатити карткою." },
          options: ["možete", "možemo", "može", "mogu"],
          correctAnswer: "možete"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Što oni _____ (want) jesti?", ru: "Заполните: Što oni _____ (хотят) jesti?", ua: "Заповніть: Što oni _____ (хочуть) їсти?" },
          correctAnswer: "hoće",
          hint: { en: "Verb htjeti for 'oni'", ru: "Глагол htjeti для 'oni'", ua: "Дієслово htjeti для 'oni'" }
        },
        {
          type: "multiple-choice",
          question: { en: "Ti _____ (must) platiti račun.", ru: "Ti _____ (должен) platiti račun.", ua: "Ти _____ (мусиш) заплатити рахунок." },
          options: ["moraš", "moram", "mora", "morate"],
          correctAnswer: "moraš"
        },
        {
          type: "multiple-choice",
          question: { en: "Oni _____ (can) plivati.", ru: "Oni _____ (могут) plivati.", ua: "Вони _____ (можуть) плавати." },
          options: ["mogu", "može", "možemo", "možete"],
          correctAnswer: "mogu"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Ja _____ (do not want) raditi.", ru: "Заполните: Ja _____ (не хочу) raditi.", ua: "Заповніть: Ja _____ (не хочу) працювати." },
          correctAnswer: "neću",
          hint: { en: "Negative of htjeti for 'ja'", ru: "Отрицание глагола htjeti для 'ja'", ua: "Заперечення дієслова htjeti для 'ja'" }
        },
        {
          type: "translation",
          question: { en: "Translate: 'Ne mogu spavati.'", ru: "Переведите: 'Ne mogu spavati.'", ua: "Перекладіть: 'Ne mogu spavati.'" },
          correctAnswer: { en: "I cannot sleep", ru: "Я не могу спать", ua: "Я не можу спати" }
        },
        {
          type: "multiple-choice",
          question: { en: "Što _____ (we want) raditi?", ru: "Što _____ (мы хотим) raditi?", ua: "Що _____ (ми хочемо) робити?" },
          options: ["hoćemo", "hoćete", "hoću", "hoće"],
          correctAnswer: "hoćemo"
        },
        {
          type: "multiple-choice",
          question: { en: "Ona _____ (can) govoriti engleski.", ru: "Ona _____ (может) govoriti engleski.", ua: "Вона _____ (може) розмовляти англійською." },
          options: ["može", "mogu", "možeš", "možemo"],
          correctAnswer: "može"
        }
      ]
    }
  },
  {
    id: "a1-reading-1",
    type: "reading",
    level: "A1",
    title: {
      en: "U kafiću (At the Cafe)",
      ru: "В кафе (U kafiću)",
      ua: "У кафе (U kafiću)"
    },
    content: {
      description: {
        en: "Read a simple dialogue in a Croatian cafe and answer comprehension questions.",
        ru: "Прочитайте простой диалог в хорватском кафе и ответьте на вопросы.",
        ua: "Прочитайте простий діалог у хорватському кафе та дайте відповіді."
      },
      sections: [
        {
          title: { en: "Dialogue", ru: "Диалог", ua: "Діалог" },
          text: {
            en: "Konobar: Dobar dan! Izvolite.\nAna: Dobar dan. Mogu li dobiti kavu s mlijekom?\nKonobar: Naravno. A za Vas?\nIvan: Ja ću čaj s limunom, molim.\nKonobar: U redu. Kava s mlijekom i čaj s limunom. Želite li vodu?\nAna: Da, gaziranu vodu, molim.\nIvan: Za mene negaziranu vodu.\nKonobar: Hvala, stiže odmah.",
            ru: "Официант: Добрый день! Пожалуйста.\nАна: Добрый день. Можно мне кофе с молоком?\nОфициант: Конечно. А для Вас?\nИван: Мне чай с лимоном, пожалуйста.\nОфициант: Хорошо. Кофе с молоком и чай с лимоном. Желаете воду?\nАна: Да, газированную воду, пожалуйста.\nИван: Мне негазированную воду.\nОфициант: Спасибо, сейчас принесу.",
            ua: "Офіціант: Добрий день! Прошу.\nАна: Добрий день. Можна мені каву з молоком?\nОфіціант: Звичайно. А для Вас?\nІван: Мені чай з лимоном, будь ласка.\nОфіціант: Добре. Кава з молоком і чай з лимоном. Бажаєте воду?\nАна: Так, газовану воду, будь ласка.\nІван: Мені негазовану воду.\nОфіціант: Дякую, зараз принесу."
          }
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "What does Ana want to drink?", ru: "Что хочет выпить Ана?", ua: "Що хоче випити Ана?" },
          options: ["Kavu s mlijekom", "Čaj s limunom", "Pivo", "Sok"],
          correctAnswer: "Kavu s mlijekom"
        },
        {
          type: "multiple-choice",
          question: { en: "What does Ivan order?", ru: "Что заказывает Иван?", ua: "Що замовляє Іван?" },
          options: ["Čaj s limunom", "Kavu s mlijekom", "Vodu", "Sok"],
          correctAnswer: "Čaj s limunom"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Mogu li dobiti _____ s mlijekom?", ru: "Заполните: Mogu li dobiti _____ s mlijekom?", ua: "Заповніть: Mogu li dobiti _____ s mlijekom?" },
          correctAnswer: "kavu",
          hint: { en: "coffee (accusative)", ru: "кофе (винительный падеж)", ua: "каву (знахідний відмінок)" }
        },
        {
          type: "multiple-choice",
          question: { en: "What kind of water does Ana want?", ru: "Какую воду хочет Ана?", ua: "Яку воду хоче Ана?" },
          options: ["Gaziranu (sparkling)", "Negaziranu (still)", "Hladnu (cold)", "Toplu (warm)"],
          correctAnswer: "Gaziranu (sparkling)"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Ja ću čaj s _____ (lemon - instrumental).", ru: "Заполните: Ja ću čaj s _____ (лимон - творительный падеж).", ua: "Заповніть: Ja ću čaj s _____ (лимон - орудний відмінок)." },
          correctAnswer: "limunom",
          hint: { en: "with lemon", ru: "с лимоном", ua: "з лимоном" }
        },
        {
          type: "multiple-choice",
          question: { en: "What does 'stiže odmah' mean?", ru: "Что означает 'stiže odmah'?", ua: "Що означає 'stiže odmah'?" },
          options: ["Coming right up", "Goodbye", "Too expensive", "We don't have it"],
          correctAnswer: "Coming right up"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Dobar dan! Izvolite.'", ru: "Переведите: 'Dobar dan! Izvolite.'", ua: "Перекладіть: 'Dobar dan! Izvolite.'" },
          correctAnswer: { en: "Good day! Here you go.", ru: "Добрый день! Пожалуйста.", ua: "Добрий день! Прошу." }
        },
        {
          type: "multiple-choice",
          question: { en: "Who ordered negazirana voda?", ru: "Кто заказал негазированную воду?", ua: "Хто замовив негазовану воду?" },
          options: ["Ivan", "Ana", "Konobar", "Niko"],
          correctAnswer: "Ivan"
        }
      ]
    }
  },
  {
    id: "a1-dictation-1",
    type: "dictation",
    level: "A1",
    title: {
      en: "Osnovni pozdravi (Basic Greetings)",
      ru: "Основные приветствия (Osnovni pozdravi)",
      ua: "Основні вітання (Osnovni pozdravi)"
    },
    content: {
      description: {
        en: "Listen to basic Croatian greetings and write down what you hear.",
        ru: "Прослушайте базовые приветствия на хорватском языке и запишите услышанное.",
        ua: "Прослухайте базові вітання хорватською мовою та запишіть почуте."
      },
      dictationText: "Dobar dan! Kako si? Ja sam dobro, hvala. Kako se zoveš? Drago mi je. Zbogom i do viđenja!",
      exercises: [
        {
          type: "dictation",
          question: { en: "Listen and type: 'Dobar dan!'", ru: "Прослушайте и напишите: 'Dobar dan!'", ua: "Прослухайте та напишіть: 'Dobar dan!'" },
          correctAnswer: "Dobar dan!"
        },
        {
          type: "dictation",
          question: { en: "Listen and type: 'Kako si?'", ru: "Прослушайте и напишите: 'Kako si?'", ua: "Прослухайте та напишіть: 'Kako si?'" },
          correctAnswer: "Kako si?"
        },
        {
          type: "dictation",
          question: { en: "Listen and type: 'Ja sam dobro, hvala.'", ru: "Прослушайте и напишите: 'Ja sam dobro, hvala.'", ua: "Прослухайте та напишіть: 'Ja sam dobro, hvala.'" },
          correctAnswer: "Ja sam dobro, hvala."
        },
        {
          type: "dictation",
          question: { en: "Listen and type: 'Kako se zoveš?'", ru: "Прослушайте и напишите: 'Kako se zoveš?'", ua: "Прослухайте та напишіть: 'Kako se zoveš?'" },
          correctAnswer: "Kako se zoveš?"
        },
        {
          type: "dictation",
          question: { en: "Listen and type: 'Drago mi je.'", ru: "Прослушайте и напишите: 'Drago mi je.'", ua: "Прослухайте та напишіть: 'Drago mi je.'" },
          correctAnswer: "Drago mi je."
        },
        {
          type: "dictation",
          question: { en: "Listen and type: 'Zbogom'", ru: "Прослушайте и напишите: 'Zbogom'", ua: "Прослухайте та напишіть: 'Zbogom'" },
          correctAnswer: "Zbogom"
        },
        {
          type: "dictation",
          question: { en: "Listen and type: 'do viđenja!'", ru: "Прослушайте и напишите: 'do viđenja!'", ua: "Прослухайте та напишіть: 'do viđenja!'" },
          correctAnswer: "do viđenja!"
        },
        {
          type: "multiple-choice",
          question: { en: "What does 'Drago mi je' mean?", ru: "Что означает 'Drago mi je'?", ua: "Що означає 'Drago mi je'?" },
          options: ["Nice to meet you", "Thank you very much", "Good evening", "Excuse me"],
          correctAnswer: "Nice to meet you"
        }
      ]
    }
  },

  // ==========================================
  {
    id: "a1-grammar-5",
    type: "grammar",
    level: "A1",
    title: {
      en: "Rod imenica (Gender of Nouns)",
      ru: "Род существительных (Rod imenica)",
      ua: "Рід іменників (Rod imenica)"
    },
    content: {
      description: {
        en: "Learn how to identify masculine, feminine, and neuter nouns in Croatian.",
        ru: "Узнайте, как определять мужской, женский и средний род существительных в хорватском.",
        ua: "Дізнайтеся, як визначати чоловічий, жіночий та середній рід іменників у хорватській."
      },
      sections: [
        {
          title: { en: "Noun Gender Rules", ru: "Правила рода существительных", ua: "Правила роду іменників" },
          text: {
            en: "In Croatian, nouns have three genders. You can identify the gender of a noun in the Nominative Singular by its ending:\n1. **Masculine (muški rod):** ends in a **consonant**:\n   - *prozor* (window), *stol* (table), *otac* (father).\n2. **Feminine (ženski rod):** ends in **-a**:\n   - *knjiga* (book), *sestra* (sister), *kava* (coffee).\n3. **Neuter (srednji rod):** ends in **-o** or **-e**:\n   - *selo* (village), *pismo* (letter), *sunce* (sun).\n\n*Note:* There are few exceptions, e.g. male names/roles ending in -a (*tata* - dad, *kolega* - colleague) are grammatically feminine in endings but masculine in agreement.",
            ru: "В хорватском языке существительные бывают мужского, женского или среднего рода. Род определяется по окончанию в именительном падеже ед. ч.:\n1. **Мужской род (muški rod):** оканчивается на **согласную**:\n   - *prozor* (окно), *stol* (стол), *otac* (отец).\n2. **Женский род (ženski rod):** оканчивается на **-a**:\n   - *knjiga* (книга), *sestra* (сестра), *kava* (кофе).\n3. **Средний род (srednji rod):** оканчивается на **-o** или **-e**:\n   - *selo* (деревня), *pismo* (письмо), *sunce* (солнце).",
            ua: "У хорватській мові іменники бувають чоловічого, жіночого або середнього роду. Рід визначається за закінченням у називному відмінку однини:\n1. **Чоловічий рід (muški rod):** закінчується на **приголосну**:\n   - *prozor* (вікно), *stol* (стіл), *otac* (батько).\n2. **Жіночий рід (ženski rod):** закінчується на **-a**:\n   - *knjiga* (книга), *sestra* (сестра), *kava* (кава).\n3. **Середній рід (srednji rod):** закінчується на **-o** або **-e**:\n   - *selo* (село), *pismo* (лист), *sunce* (сонце)."
          }
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "What gender is the noun 'prozor' (window)?", ru: "Какого рода существительное 'prozor'?", ua: "Якого роду іменник 'prozor'?" },
          options: ["muški rod (masculine)", "ženski rod (feminine)", "srednji rod (neuter)"],
          correctAnswer: "muški rod (masculine)"
        },
        {
          type: "multiple-choice",
          question: { en: "What gender is 'pismo' (letter)?", ru: "Какого рода 'pismo' (письмо)?", ua: "Якого роду 'pismo' (лист)?" },
          options: ["srednji rod (neuter)", "muški rod (masculine)", "ženski rod (feminine)"],
          correctAnswer: "srednji rod (neuter)"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: 'Kava' (coffee) ends in -a, so it is in _____ rod.", ru: "Заполните: 'Kava' оканчивается на -a, значит это _____ род.", ua: "Заповніть: 'Kava' закінчується на -a, отже це _____ рід." },
          correctAnswer: "ženski",
          hint: { en: "feminine (ženski)", ru: "женский (ženski)", ua: "жіночий (ženski)" }
        },
        {
          type: "multiple-choice",
          question: { en: "What gender is 'auto' (car)?", ru: "Какого рода 'auto'?", ua: "Якого роду 'auto'?" },
          options: ["srednji rod (neuter)", "muški rod (masculine)", "ženski rod (feminine)"],
          correctAnswer: "srednji rod (neuter)"
        },
        {
          type: "multiple-choice",
          question: { en: "What gender is 'student' (student)?", ru: "Какого рода 'student'?", ua: "Якого роду 'student'?" },
          options: ["muški rod (masculine)", "ženski rod (feminine)", "srednji rod (neuter)"],
          correctAnswer: "muški rod (masculine)"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Noun 'more' (sea) ends in -e, so it is _____ rod.", ru: "Заполните: Существительное 'more' оканчивается на -e, значит это _____ род.", ua: "Заповніть: Іменник 'more' закінчується на -e, отже це _____ рід." },
          correctAnswer: "srednji",
          hint: { en: "neuter (srednji)", ru: "средний (srednji)", ua: "середній (srednji)" }
        },
        {
          type: "multiple-choice",
          question: { en: "What gender is 'prijateljica' (female friend)?", ru: "Какого рода 'prijateljica'?", ua: "Якого роду 'prijateljica'?" },
          options: ["ženski rod (feminine)", "muški rod (masculine)", "srednji rod (neuter)"],
          correctAnswer: "ženski rod (feminine)"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Kuća je velika.'", ru: "Переведите: 'Kuća je velika.'", ua: "Перекладіть: 'Kuća je velika.'" },
          correctAnswer: { en: "The house is big", ru: "Дом большой", ua: "Будинок великий" }
        },
        {
          type: "multiple-choice",
          question: { en: "What gender is 'telefon' (telephone)?", ru: "Какого рода 'telefon'?", ua: "Якого роду 'telefon'?" },
          options: ["muški rod (masculine)", "ženski rod (feminine)", "srednji rod (neuter)"],
          correctAnswer: "muški rod (masculine)"
        },
        {
          type: "multiple-choice",
          question: { en: "What gender is 'jaje' (egg)?", ru: "Какого рода 'jaje'?", ua: "Якого роду 'jaje'?" },
          options: ["srednji rod (neuter)", "muški rod (masculine)", "ženski rod (feminine)"],
          correctAnswer: "srednji rod (neuter)"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: 'Stan' (apartment) ends in a consonant, so it is _____ rod.", ru: "Заполните: 'Stan' оканчивается на согласную, значит это _____ род.", ua: "Заповніть: 'Stan' закінчується на приголосну, отже це _____ рід." },
          correctAnswer: "muški",
          hint: { en: "masculine (muški)", ru: "мужской (muški)", ua: "чоловічий (muški)" }
        },
        {
          type: "multiple-choice",
          question: { en: "What gender is 'majka' (mother)?", ru: "Какого рода 'majka'?", ua: "Якого роду 'majka'?" },
          options: ["ženski rod (feminine)", "muški rod (masculine)", "srednji rod (neuter)"],
          correctAnswer: "ženski rod (feminine)"
        },
        {
          type: "multiple-choice",
          question: { en: "What gender is 'ime' (name)?", ru: "Какого рода 'ime'?", ua: "Якого роду 'ime'?" },
          options: ["srednji rod (neuter)", "muški rod (masculine)", "ženski rod (feminine)"],
          correctAnswer: "srednji rod (neuter)"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: 'Tata' (dad) refers to a male but ends in -a, so its grammatical ending pattern is _____.", ru: "Заполните: 'Tata' оканчивается на -a, поэтому грамматически изменяется как _____ род.", ua: "Заповніть: 'Tata' закінчується на -a, тому граматично змінюється як _____ рід." },
          correctAnswer: "ženski",
          hint: { en: "feminine (ženski)", ru: "женский (ženski)", ua: "жіночий (ženski)" }
        },
        {
          type: "translation",
          question: { en: "Translate: 'Brat je ovdje.'", ru: "Переведите: 'Brat je ovdje.'", ua: "Перекладіть: 'Brat je ovdje.'" },
          correctAnswer: { en: "Brother is here", ru: "Брат здесь", ua: "Брат тут" }
        }
      ]
    }
  },
  {
    id: "a1-grammar-6",
    type: "grammar",
    level: "A1",
    title: {
      en: "Posvojne zamjenice i obitelj (Possessive Pronouns & Family)",
      ru: "Притяжательные местоимения и семья (Posvojne zamjenice)",
      ua: "Присвійні займенники та сім'я (Posvojne zamjenice)"
    },
    content: {
      description: {
        en: "Learn how to use possessive pronouns (my, your, his, her, etc.) and match them with genders of family nouns.",
        ru: "Изучите притяжательные местоимения (мой, твой, его, ее и т.д.) и правила их согласования с членами семьи.",
        ua: "Вивчіть присвійні займенники (мій, твій, його, її тощо) та правила їх узгодження з членами родини."
      },
      sections: [
        {
          title: { en: "Possessive Pronouns forms", ru: "Формы притяжательных местоимений", ua: "Форми присвійних займенників" },
          text: {
            en: "Possessive pronouns in Croatian must match the gender of the noun they modify:\n- **ja** (I) -> **moj** (masc) / **moja** (fem) / **moje** (neut) — *my*\n- **ti** (you) -> **tvoj** / **tvoja** / **tvoje** — *your*\n- **on** (he) -> **njegov** / **njegova** / **njegovo** — *his*\n- **ona** (she) -> **njezin** / **njezina** / **njezino** — *her*\n- **mi** (we) -> **naš** / **naša** / **naše** — *our*\n- **vi** (you pl./formal) -> **vaš** / **vaša** / **vaše** — *your*\n- **oni/one/ona** (they) -> **njihov** / **njihova** / **njihovo** — *their*\n\n**Examples:**\n- *moj* brat (my brother - masc)\n- *tvoja* sestra (your sister - fem)\n- *naše* dijete (our child - neut)",
            ru: "Притяжательные местоимения в хорватском согласуются в роде с существительным:\n- **ja** (я) -> **moj** (муж.) / **moja** (жен.) / **moje** (ср.) — *мой*\n- **ti** (ты) -> **tvoj** / **tvoja** / **tvoje** — *твой*\n- **on** (он) -> **njegov** / **njegova** / **njegovo** — *его*\n- **ona** (она) -> **njezin** / **njezina** / **njezino** — *ее*\n- **mi** (мы) -> **naš** / **naša** / **naše** — *наш*\n- **vi** (вы) -> **vaš** / **vaša** / **vaše** — *ваш*\n- **oni/one/ona** (они) -> **njihov** / **njihova** / **njihovo** — *их*\n\n**Примеры:**\n- *moj* brat (мой брат)\n- *tvoja* sestra (твоя сестра)\n- *naše* dijete (наш ребенок)",
            ua: "Присвійні займенники в хорватській мові узгоджуються в роді з іменником:\n- **ja** (я) -> **moj** (чол.) / **moja** (жін.) / **moje** (сер.) — *мій*\n- **ti** (ти) -> **tvoj** / **tvoja** / **tvoje** — *твій*\n- **on** (він) -> **njegov** / **njegova** / **njegovo** — *його*\n- **ona** (вона) -> **njezin** / **njezina** / **njezino** — *її*\n- **mi** (ми) -> **naš** / **naša** / **naše** — *наш*\n- **vi** (ви) -> **vaš** / **vaša** / **vaše** — *ваш*\n- **oni/one/ona** (вони) -> **njihov** / **njihova** / **njihovo** — *їх*\n\n**Приклади:**\n- *moj* brat (мій брат)\n- *tvoja* sestra (твоя сестра)\n- *naše* dijete (наша дитина)"
          }
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Ovo je _____ (my) otac.", ru: "Ovo je _____ (мой) otac.", ua: "Ovo je _____ (мій) otac." },
          options: ["moj", "moja", "moje", "tvoj"],
          correctAnswer: "moj"
        },
        {
          type: "multiple-choice",
          question: { en: "Gdje je _____ (your) sestra?", ru: "Gdje je _____ (твоя) sestra?", ua: "Gdje je _____ (твоя) sestra?" },
          options: ["tvoja", "tvoj", "tvoje", "moja"],
          correctAnswer: "tvoja"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: To je _____ (our) pismo (neuter).", ru: "Заполните: To je _____ (наше) pismo.", ua: "Заповніть: To je _____ (наше) pismo." },
          correctAnswer: "naše",
          hint: { en: "our (neuter)", ru: "наше (naše)", ua: "наше (naše)" }
        },
        {
          type: "multiple-choice",
          question: { en: "Gdje živi _____ (their) obitelj (feminine)?", ru: "Gdje živi _____ (их) obitelj?", ua: "Gdje živi _____ (їхня) obitelj?" },
          options: ["njihova", "njihov", "njihovo", "naša"],
          correctAnswer: "njihova"
        },
        {
          type: "multiple-choice",
          question: { en: "Ovo je _____ (his) pas.", ru: "Ovo je _____ (его) pas.", ua: "Ovo je _____ (його) pas." },
          options: ["njegov", "njegova", "njegovo", "njezin"],
          correctAnswer: "njegov"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Kako se zove _____ (her) majka?", ru: "Заполните: Kako se zove _____ (её) majka?", ua: "Заповніть: Kako se zove _____ (її) majka?" },
          correctAnswer: "njezina",
          hint: { en: "her (feminine)", ru: "её (njezina)", ua: "її (njezina)" }
        },
        {
          type: "multiple-choice",
          question: { en: "Je li ovo _____ (your - plural/polite) auto (neuter)?", ru: "Je li ovo _____ (ваш) auto?", ua: "Je li ovo _____ (ваш) auto?" },
          options: ["vaše", "vaš", "vaša", "tvoje"],
          correctAnswer: "vaše"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Moja majka je učiteljica.'", ru: "Переведите: 'Moja majka je učiteljica.'", ua: "Перекладіть: 'Moja majka je učiteljica.'" },
          correctAnswer: { en: "My mother is a teacher", ru: "Моя мама учительница", ua: "Моя мама вчителька" }
        },
        {
          type: "multiple-choice",
          question: { en: "Gdje je _____ (my) knjiga?", ru: "Gdje je _____ (моя) knjiga?", ua: "Gdje je _____ (моя) knjiga?" },
          options: ["moja", "moj", "moje", "tvoja"],
          correctAnswer: "moja"
        },
        {
          type: "multiple-choice",
          question: { en: "Kako se zove _____ (your) brat?", ru: "Kako se zove _____ (твой) brat?", ua: "Kako se zove _____ (твій) brat?" },
          options: ["tvoj", "tvoja", "tvoje", "moj"],
          correctAnswer: "tvoj"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Ovo je _____ (their) kuća.", ru: "Заполните: Ovo je _____ (их) kuća.", ua: "Заповніть: Ovo je _____ (їхній) kuća." },
          correctAnswer: "njihova",
          hint: { en: "their (feminine)", ru: "их (njihova)", ua: "їхня (njihova)" }
        },
        {
          type: "multiple-choice",
          question: { en: "To je _____ (his) dijete (neuter).", ru: "To je _____ (его) dijete.", ua: "To je _____ (його) dijete." },
          options: ["njegovo", "njegov", "njegova", "njezino"],
          correctAnswer: "njegovo"
        },
        {
          type: "multiple-choice",
          question: { en: "Gdje je _____ (our) stan?", ru: "Gdje je _____ (наш) stan?", ua: "Gdje je _____ (наш) stan?" },
          options: ["naš", "naša", "naše", "vaš"],
          correctAnswer: "naš"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: _____ (My) sestra se zove Ana.", ru: "Заполните: _____ (Моя) sestra se zove Ana.", ua: "Заповніть: _____ (Моя) sestra se zove Ana." },
          correctAnswer: "Moja",
          hint: { en: "My (feminine)", ru: "Моя (Moja)", ua: "Моя (Moja)" }
        },
        {
          type: "translation",
          question: { en: "Translate: 'Tvoj brat živi u Zagrebu.'", ru: "Переведите: 'Tvoj brat živi u Zagrebu.'", ua: "Перекладіть: 'Tvoj brat živi u Zagrebu.'" },
          correctAnswer: { en: "Your brother lives in Zagreb", ru: "Твой брат живет в Загребе", ua: "Твій брат живе в Загребі" }
        }
      ]
    }
  },
  {
    id: "a1-grammar-7",
    type: "grammar",
    level: "A1",
    title: {
      en: "Pridjevi i opisivanje (Adjectives & Descriptions)",
      ru: "Прилагательные и описание (Pridjevi)",
      ua: "Прикметники та опис (Pridjevi)"
    },
    content: {
      description: {
        en: "Learn how to use adjectives to describe things and people, and match their endings with noun genders.",
        ru: "Научитесь использовать прилагательные для описания людей и вещей и согласовывать их окончания по родам.",
        ua: "Навчіться використовувати прикметники для опису людей і речей та узгоджувати їх закінчення за родами."
      },
      sections: [
        {
          title: { en: "Adjective Agreement", ru: "Согласование прилагательных", ua: "Узгодження прикметників" },
          text: {
            en: "Adjectives must agree in gender, number, and case with the noun they describe. In the Nominative Singular, adjectives have three forms:\n1. **Masculine:** ends in a **consonant** or **-i**:\n   - *nov* / *novi* (new) -> *novi* mobitel (new phone).\n2. **Feminine:** ends in **-a**:\n   - *nova* -> *nova* torba (new bag).\n3. **Neuter:** ends in **-o** or **-e**:\n   - *novo* -> *novo* stablo (new tree).\n\n**Common adjectives:**\n- *velik / velika / veliko* (big)\n- *malen / malena / maleno* (small)\n- *star / stara / staro* (old)\n- *lijep / lijepa / lijepo* (beautiful)\n- *dobar / dobra / dobro* (good)",
            ru: "Прилагательные в хорватском языке согласуются в роде, числе и падеже с существительным. В именительном падеже ед. ч. они имеют следующие окончания:\n1. **Мужской род:** оканчивается на **согласную** или **-i**:\n   - *nov* / *novi* (новый) -> *novi* mobitel (новый телефон).\n2. **Женский род:** оканчивается на **-a**:\n   - *nova* -> *nova* torba (новая сумка).\n3. **Средний род:** оканчивается на **-o** или **-e**:\n   - *novo* -> *novo* stablo (новое дерево).\n\n**Популярные прилагательные:**\n- *velik* (большой), *malen* (маленький), *star* (старый), *lijep* (красивый), *dobar* (хороший).",
            ua: "Прикметники в хорватській мові узгоджуються в роді, числі та відмінку з іменником. У називному відмінку однини вони мають такі закінчення:\n1. **Чоловічий рід:** закінчується на **приголосну** або **-i**:\n   - *nov* / *novi* (новий) -> *novi* mobitel (новий телефон).\n2. **Жіночий рід:** закінчується на **-a**:\n   - *nova* -> *nova* torba (нова сумка).\n3. **Середній рід:** закінчується на **-o** або **-e**:\n   - *novo* -> *novo* stablo (нове дерево).\n\n**Популярні прикметники:**\n- *velik* (великий), *malen* (маленький), *star* (старий), *lijep* (красивий), *dobar* (хороший)."
          }
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Kupujem _____ (new - masculine) auto.", ru: "Kupujem _____ (новый) auto.", ua: "Купую _____ (новий) auto." },
          options: ["novi", "nova", "novo", "nove"],
          correctAnswer: "novi"
        },
        {
          type: "multiple-choice",
          question: { en: "Ova knjiga je _____ (beautiful - feminine).", ru: "Ova knjiga je _____ (красивая).", ua: "Ця книга є _____ (красива)." },
          options: ["lijepa", "lijep", "lijepo", "lijepe"],
          correctAnswer: "lijepa"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Tamo je jedno _____ (big - neuter) selo.", ru: "Заполните: Tamo je jedno _____ (большое) selo.", ua: "Заповніть: Tamo je jedno _____ (велике) selo." },
          correctAnswer: "veliko",
          hint: { en: "big (neuter)", ru: "большое (veliko)", ua: "велике (veliko)" }
        },
        {
          type: "multiple-choice",
          question: { en: "Naš profesor je vrlo _____ (good - masculine).", ru: "Naš profesor je vrlo _____ (хороший).", ua: "Наш професор є дуже _____ (хороший)." },
          options: ["dobar", "dobra", "dobro", "dobri"],
          correctAnswer: "dobar"
        },
        {
          type: "multiple-choice",
          question: { en: "Hrvatska je _____ (beautiful) zemlja.", ru: "Hrvatska je _____ (красивая) zemlja.", ua: "Hrvatska je _____ (красива) zemlja." },
          options: ["lijepa", "lijep", "lijepo", "lijepe"],
          correctAnswer: "lijepa"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Pijem _____ (cold - feminine) kava.", ru: "Заполните: Pijem _____ (холодный) kavu.", ua: "Заповніть: Pijem _____ (холодну) kavu." },
          correctAnswer: "hladnu",
          hint: { en: "cold (feminine accusative matching kavu)", ru: "холодную (hladnu)", ua: "холодну (hladnu)" }
        },
        {
          type: "multiple-choice",
          question: { en: "Ovo pivo je _____ (cold - neuter).", ru: "Ovo pivo je _____ (холодное).", ua: "Це пиво є _____ (холодне)." },
          options: ["hladno", "hladan", "hladna", "hladni"],
          correctAnswer: "hladno"
        },
        {
          type: "translation",
          question: { en: "Translate: 'On je mlad čovjek.'", ru: "Переведите: 'On je mlad čovjek.'", ua: "Перекладіть: 'On je mlad čovjek.'" },
          correctAnswer: { en: "He is a young man", ru: "Он молодой человек", ua: "Він молодий чоловік" }
        },
        {
          type: "multiple-choice",
          question: { en: "Tvoj stan je _____ (big - masculine).", ru: "Tvoj stan je _____ (большой).", ua: "Твоя квартира є _____ (велика - masc stan)." },
          options: ["velik", "velika", "veliko", "veliki"],
          correctAnswer: "velik"
        },
        {
          type: "multiple-choice",
          question: { en: "Zagreb je _____ (old - masculine) grad.", ru: "Zagreb je _____ (старый) grad.", ua: "Загреб — _____ (старе) місто (grad - masc)." },
          options: ["stari", "stara", "staro", "stare"],
          correctAnswer: "stari"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: More je _____ (warm - neuter).", ru: "Заполните: More je _____ (теплое).", ua: "Заповніть: More je _____ (тепле)." },
          correctAnswer: "toplo",
          hint: { en: "warm (neuter)", ru: "теплое (toplo)", ua: "тепле (toplo)" }
        },
        {
          type: "multiple-choice",
          question: { en: "Djevojka je _____ (young - feminine).", ru: "Djevojka je _____ (молодая).", ua: "Дівчина є _____ (молода)." },
          options: ["mlada", "mlad", "mlado", "mlade"],
          correctAnswer: "mlada"
        },
        {
          type: "multiple-choice",
          question: { en: "To je _____ (bad - neuter) vrijeme.", ru: "To je _____ (плохая) vrijeme.", ua: "Це є _____ (погана) погода (vrijeme - neuter)." },
          options: ["loše", "loš", "loša", "loši"],
          correctAnswer: "loše"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Moj pas je _____ (black - masculine).", ru: "Заполните: Moj pas je _____ (черный).", ua: "Заповніть: Moj pas je _____ (чорний)." },
          correctAnswer: "crn",
          hint: { en: "black (masculine)", ru: "черный (crn)", ua: "чорний (crn)" }
        },
        {
          type: "translation",
          question: { en: "Translate: 'Lijep dan.'", ru: "Переведите: 'Lijep dan.'", ua: "Перекладіть: 'Lijep dan.'" },
          correctAnswer: { en: "Beautiful day", ru: "Красивый день / Прекрасный день", ua: "Гарний день / Прекрасний день" }
        }
      ]
    }
  },
  // LEVEL A2
  // ==========================================
  {
    id: "a2-grammar-1",
    type: "grammar",
    level: "A2",
    title: {
      en: "Vidovi akuzativa (Accusative Case)",
      ru: "Винительный падеж (Akuzativ)",
      ua: "Відмінки - Знахідний (Akuzativ)"
    },
    content: {
      description: {
        en: "Learn the accusative case (akuzativ) in Croatian — used for direct objects and destination after verbs of motion.",
        ru: "Изучите винительный падеж (akuzativ) в хорватском — используется для прямых дополнений и направления после глаголов движения.",
        ua: "Вивчіть знахідний відмінок (акузатив) у хорватській — використовується для прямого додатка та напрямку після дієслів руху."
      },
      sections: [
        {
          title: { en: "Accusative Endings (Singular)", ru: "Окончания винительного падежа (Единственное число)", ua: "Закінчення знахідного відмінка (Однина)" },
          text: {
            en: "The Accusative case (*akuzativ*) answers the questions *Koga?* (Whom?) for animates and *Što?* (What?) for inanimates. It is primarily used for direct objects of transitive verbs (like *vidjeti* - to see, *kupiti* - to buy).\n\n**Singular endings rules:**\n1. **Feminine nouns** ending in **-a** change to **-u**:\n   - *knjiga* (book) -> Čitam **knjigu**.\n   - *kava* (coffee) -> Pijem **kavu**.\n2. **Masculine inanimate nouns** (objects/concepts) **stay the same as Nominative**:\n   - *stol* (table) -> Vidim **stol**.\n   - *mobitel* (phone) -> Kupujem **mobitel**.\n3. **Masculine animate nouns** (people/animals) get the ending **-a**:\n   - *brat* (brother) -> Vidim **brata**.\n   - *pas* (dog) -> Poznajem **psa**.\n4. **Neuter nouns** always **stay the same as Nominative**:\n   - *more* (sea) -> Volim **more**.\n   - *pivo* (beer) -> Pijem **pivo**.",
            ru: "Винительный падеж (*akuzativ*) отвечает на вопросы *Koga?* (Кого?) для одушевленных и *Što?* (Что?) для неодушевленных объектов. Используется для прямых дополнений при переходных глаголах (например, *vidjeti* - видеть, *kupiti* - покупать).\n\n**Правила окончаний в единственном числе:**\n1. **Женский род** на **-a** меняет окончание на **-u**:\n   - *knjiga* (книга) -> Čitam **knjigu**.\n   - *kava* (кофе) -> Pijem **kavu**.\n2. **Мужской род неодушевленный** **совпадает с именительным падежом**:\n   - *stol* (стол) -> Vidim **stol**.\n   - *mobitel* (телефон) -> Kupujem **mobitel**.\n3. **Мужской род одушевленный** получает окончание **-a**:\n   - *brat* (брат) -> Vidim **brata**.\n   - *pas* (собака) -> Poznajem **psa**.\n4. **Средний род** всегда **совпадает с именительным падежом**:\n   - *more* (море) -> Volim **more**.\n   - *pivo* (пиво) -> Pijem **pivo**.",
            ua: "Знахідний відмінок (*akuzativ*) відповідає на запитання *Koga?* (Кого?) для істот та *Što?* (Що?) для неістот. Використовується для прямого додатка при перехідних дієсловах (наприклад, *vidjeti* - бачити, *kupiti* - купувати).\n\n**Правила закінчень в однині:**\n1. **Жіночий рід** на **-a** змінює закінчення на **-u**:\n   - *knjiga* (книга) -> Čitam **knjigu**.\n   - *kava* (кава) -> Pijem **kavu**.\n2. **Чоловічий рід неживий** **збігається з називним відмінком**:\n   - *stol* (стіл) -> Vidim **stol**.\n   - *mobitel* (телефон) -> Kupujem **mobitel**.\n3. **Чоловічий рід живий** отримує закінчення **-a**:\n   - *brat* (брат) -> Vidim **brata**.\n   - *pas* (собака) -> Poznajem **psa**.\n4. **Середній рід** завжди **збігається з називним відмінком**:\n   - *more* (море) -> Volim **more**.\n   - *pivo* (пиво) -> Pijem **pivo**."
          }
        },
        {
          title: { en: "Accusative of Destination (Verbs of Motion)", ru: "Винительный направления (Глаголы движения)", ua: "Знахідний напрямку (Дієслова руху)" },
          text: {
            en: "Accusative is also used after the prepositions **u** (into) and **na** (onto) when there is **movement/direction** towards a destination (answering the question *Kamo?* - Whereto?):\n- *Idem u* **školu** (Accusative). - I am going to school.\n- *Idem na* **koncert** (Accusative). - I am going to a concert.\n\n*Contrast:* If you are already there and not moving, you must use the Locative case (e.g. *U školi sam* - I am in school).",
            ru: "Винительный падеж также употребляется с предлогами **u** (в) и **na** (на) при выражении **направления/движения** (отвечает на вопрос *Kamo?* - Куда?):\n- *Idem u* **školu** (Винительный). - Я иду в школу.\n- *Idem na* **koncert** (Винительный). - Я иду на концерт.\n\n*Сравните:* Если вы уже там находитесь без движения, используется предложный падеж (*U školi sam* - Я в школе).",
            ua: "Знахідний відмінок також вживається з прийменниками **u** (в) та **na** (на) для вираження **напрямку/руху** (відповідає на запитання *Kamo?* - Куди?):\n- *Idem u* **školu** (Знахідний). - Я йду до школи.\n- *Idem na* **koncert** (Знахідний). - Я йду на концерт.\n\n*Порівняйте:* Якщо ви вже там перебуваєте без руху, використовується місцевий відмінок (*U školi sam* - Я в школі)."
          }
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Čitam _____ (knjiga).", ru: "Čitam _____ (knjiga).", ua: "Čitam _____ (knjiga)." },
          options: ["knjigu", "knjiga", "knjigi", "knjigom"],
          correctAnswer: "knjigu"
        },
        {
          type: "multiple-choice",
          question: { en: "Vidim _____ (pas - animate). (I see a dog.)", ru: "Vidim _____ (pas). (Я вижу собаку.)", ua: "Vidim _____ (pas). (Я бачу собаку.)" },
          options: ["psa", "pas", "psu", "psom"],
          correctAnswer: "psa"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Kupujem _____ (telefon - inanimate). (I am buying a phone.)", ru: "Заполните: Kupujem _____ (telefon). (Я покупаю телефон.)", ua: "Заповніть: Kupujem _____ (telefon). (Я купую телефон.)" },
          correctAnswer: "telefon",
          hint: { en: "Inanimate masculine singular stays the same", ru: "Неодушевленный мужской род не меняется", ua: "Неживий чоловічий рід не змінюється" }
        },
        {
          type: "multiple-choice",
          question: { en: "Poznajem tvoju _____ (sestra). (I know your sister.)", ru: "Poznajem tvoju _____ (sestra). (Я знаю твою сестру.)", ua: "Poznajem tvoju _____ (sestra). (Я знаю твою сестру.)" },
          options: ["sestru", "sestra", "sestri", "sestre"],
          correctAnswer: "sestru"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Volim _____ (more - neuter). (I love the sea.)", ru: "Заполните: Volim _____ (more). (Я люблю море.)", ua: "Заповніть: Volim _____ (more). (Я люблю море.)" },
          correctAnswer: "more",
          hint: { en: "Neuter stays the same", ru: "Средний род не меняется", ua: "Середній рід не змінюється" }
        },
        {
          type: "multiple-choice",
          question: { en: "Pijem _____ (kava). (I am drinking coffee.)", ru: "Pijem _____ (kava). (Я пью кофе.)", ua: "Pijem _____ (kava). (Я п'ю каву.)" },
          options: ["kavu", "kava", "kavi", "kave"],
          correctAnswer: "kavu"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Vidim brata.'", ru: "Переведите: 'Vidim brata.'", ua: "Перекладіть: 'Vidim brata.'" },
          correctAnswer: { en: "I see my brother", ru: "Я вижу брата", ua: "Я бачу брата" }
        },
        {
          type: "multiple-choice",
          question: { en: "Gledam _____ (film). (I am watching a film.)", ru: "Gledam _____ (film). (Я смотрю фильм.)", ua: "Gledam _____ (film). (Я дивлюся фільм.)" },
          options: ["film", "filma", "filmu", "filmom"],
          correctAnswer: "film"
        },
        {
          type: "multiple-choice",
          question: { en: "Idem u _____ (škola - motion/destination). (I am going to school.)", ru: "Idem u _____ (škola). (Я иду в школу.)", ua: "Idem u _____ (škola). (Я йду до школи.)" },
          options: ["školu", "škola", "školi", "škole"],
          correctAnswer: "školu"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Posjećujem _____ (Zagreb). (I am visiting Zagreb.)", ru: "Заполните: Posjećujem _____ (Zagreb). (Я посещаю Загреб.)", ua: "Заповніть: Posjećujem _____ (Zagreb). (Я відвідую Загреб.)" },
          correctAnswer: "Zagreb",
          hint: { en: "Inanimate city name remains unchanged", ru: "Неодушевленное имя города остается неизменным", ua: "Нежива назва міста залишається незмінною" }
        },
        {
          type: "multiple-choice",
          question: { en: "Čekaš _____ (prijateljica). (You are waiting for a friend.)", ru: "Čekaš _____ (prijateljica). (Ты ждешь подругу.)", ua: "Чекаєш _____ (prijateljica). (Ти чекаєш на подругу.)" },
          options: ["prijateljicu", "prijateljica", "prijateljici", "prijateljice"],
          correctAnswer: "prijateljicu"
        },
        {
          type: "multiple-choice",
          question: { en: "Trebam _____ (savjet). (I need advice.)", ru: "Trebam _____ (savjet). (Мне нужен совет.)", ua: "Trebam _____ (savjet). (Мені потрібна порада.)" },
          options: ["savjet", "savjeta", "savjetu", "savjetom"],
          correctAnswer: "savjet"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Slušam _____ (glazba). (I am listening to music.)", ru: "Заполните: Slušam _____ (glazba). (Я слушаю музыку.)", ua: "Заповніть: Slušam _____ (glazba). (Я слухаю музику.)" },
          correctAnswer: "glazbu",
          hint: { en: "Feminine accusative ending is -u", ru: "Окончание женского рода в винительном падеже — -u", ua: "Закінчення жіночого роду в знахідному відмінку — -u" }
        },
        {
          type: "translation",
          question: { en: "Translate: 'Kupujem novu kuću.'", ru: "Переведите: 'Kupujem novu kuću.'", ua: "Перекладіть: 'Kupujem novu kuću.'" },
          correctAnswer: { en: "I am buying a new house", ru: "Я покупаю новый дом", ua: "Я купую новий будинок" }
        },
        {
          type: "multiple-choice",
          question: { en: "Vozim _____ (auto). (I am driving a car.)", ru: "Vozim _____ (auto). (Я веду машину.)", ua: "Vozim _____ (auto). (Я веду машину.)" },
          options: ["auto", "auta", "autu", "autom"],
          correctAnswer: "auto"
        }
      ]
    }
  },
  {
    id: "a2-grammar-2",
    type: "grammar",
    level: "A2",
    title: {
      en: "Lokativ i prepozicije (Locative Case)",
      ru: "Предложный падеж (Lokativ)",
      ua: "Місцевий відмінок і прийменники (Lokativ)"
    },
    content: {
      description: {
        en: "Learn the locative case (lokativ) with prepositions 'u', 'na', and 'o' to describe location.",
        ru: "Изучите местный падеж (lokativ) с предлогами 'u', 'na' и 'o' для описания местоположения.",
        ua: "Вивчіть місцевий відмінок (lokativ) з прийменниками 'u', 'na' та 'o' для опису розташування."
      },
      sections: [
        {
          title: { en: "Locative Endings", ru: "Окончания местного падежа", ua: "Закінчення місцевого відмінка" },
          text: {
            en: "Locative is always used with prepositions (u = in, na = on, o = about). Endings:\n- Masculine and Neuter singular: -u (Zagreb -> u Zagrebu, more -> na moru)\n- Feminine singular: -i (škola -> u školi, stanica -> na stanici)",
            ru: "Местный падеж всегда употребляется с предлогами. Окончания:\n- Мужской и Средний род ед.ч.: -u (Zagreb -> u Zagrebu)\n- Женский род ед.ч.: -i (škola -> u školi)",
            ua: "Місцевий відмінок завжди вживається з прийменниками. Закінчення:\n- Чоловічий та Середній рід однини: -u (Zagreb -> u Zagrebu)\n- Жіночий рід однини: -i (škola -> u školi)"
          },
          examples: [
            { en: "Živim u Zagrebu. (I live in Zagreb.)", ru: "Živim u Zagrebu. (Я живу в Загребе.)", ua: "Živim u Zagrebu. (Я живу в Загребі.)" },
            { en: "Knjiga je na stolu. (The book is on the table.)", ru: "Knjiga je na stolu. (Книга на столе.)", ua: "Knjiga je na stolu. (Книга на столі.)" },
            { en: "Razgovaramo o školi. (We talk about school.)", ru: "Razgovaramo o školi. (Мы разговариваем о школе.)", ua: "Razgovaramo o školi. (Ми розмовляємо про школу.)" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Radim u _____ (ured). (I work in the office.)", ru: "Radim u _____ (ured). (Я работаю в офисе.)", ua: "Radim u _____ (ured). (Я працюю в офісі.)" },
          options: ["uredu", "ureda", "uredu", "uredom"],
          correctAnswer: "uredu"
        },
        {
          type: "multiple-choice",
          question: { en: "Djeca su u _____ (škola). (Children are at school.)", ru: "Djeca su u _____ (škola). (Дети в школе.)", ua: "Djeca su u _____ (škola). (Діти в школі.)" },
          options: ["školi", "školu", "škola", "škole"],
          correctAnswer: "školi"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Kava je na _____ (stol). (The coffee is on the table.)", ru: "Заполните: Kava je na _____ (stol). (Кофе на столе.)", ua: "Заповніть: Kava je na _____ (stol). (Кава на столі.)" },
          correctAnswer: "stolu",
          hint: { en: "Masculine singular ending is -u", ru: "Окончание мужского рода — -u", ua: "Закінчення чоловічого роду — -u" }
        },
        {
          type: "multiple-choice",
          question: { en: "Mi smo na _____ (more). (We are at the sea.)", ru: "Mi smo na _____ (more). (Мы на море.)", ua: "Mi smo na _____ (more). (Ми на морі.)" },
          options: ["moru", "more", "mora", "morem"],
          correctAnswer: "moru"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Razgovaramo o _____ (Split). (We talk about Split.)", ru: "Заполните: Razgovaramo o _____ (Split). (Мы говорим о Сплите.)", ua: "Заповніть: Razgovaramo o _____ (Split). (Ми говоримо про Спліт.)" },
          correctAnswer: "Splitu",
          hint: { en: "Add -u to the town name", ru: "Добавьте -u к названию города", ua: "Додайте -u до назви міста" }
        },
        {
          type: "multiple-choice",
          question: { en: "Kišobran je u _____ (torba). (The umbrella is in the bag.)", ru: "Kišobran je u _____ (torba). (Зонт в сумке.)", ua: "Kišobran je u _____ (torba). (Парасолька в сумці.)" },
          options: ["torbi", "torbu", "torbom", "torbe"],
          correctAnswer: "torbi"
        },
        {
          type: "translation",
          question: { en: "Translate: 'On je u Zagrebu.'", ru: "Переведите: 'On je u Zagrebu.'", ua: "Перекладіть: 'On je u Zagrebu.'" },
          correctAnswer: { en: "He is in Zagreb.", ru: "Он в Загребе.", ua: "Він у Загребі." }
        },
        {
          type: "multiple-choice",
          question: { en: "Sastanak je na _____ (fakultet). (The meeting is at the university.)", ru: "Sastanak je na _____ (fakultet). (Встреча в университете.)", ua: "Sustret je na _____ (fakultet). (Зустріч в університеті.)" },
          options: ["fakultetu", "fakulteta", "fakultetom", "fakultete"],
          correctAnswer: "fakultetu"
        }
      ]
    }
  },
  {
    id: "a2-communication-1",
    type: "communication",
    level: "A2",
    title: {
      en: "U restoranu (At the Restaurant)",
      ru: "В ресторане (U restoranu)",
      ua: "У ресторані (U restoranu)"
    },
    content: {
      description: {
        en: "Practice ordering food and drinks at a Croatian restaurant.",
        ru: "Потренируйтесь заказывать еду и напитки в хорватском ресторане.",
        ua: "Потренуйтеся замовляти їжу та напої в хорватському ресторані."
      },
      sections: [
        {
          title: { en: "Useful Phrases", ru: "Полезные фразы", ua: "Корисні фрази" },
          text: {
            en: "Essential phrases for dining out in Croatia:",
            ru: "Ключевые фразы для похода в ресторан в Хорватии:",
            ua: "Ключові фрази для походу в ресторан у Хорватії:"
          },
          examples: [
            { en: "Mogu li dobiti jelovnik? — Can I get the menu?", ru: "Mogu li dobiti jelovnik? — Можно меню?", ua: "Mogu li dobiti jelovnik? — Можна меню?" },
            { en: "Što preporučujete? — What do you recommend?", ru: "Što preporučujete? — Что вы порекомендуете?", ua: "Što preporučujete? — Що ви порадите?" },
            { en: "Želim naručiti... — I would like to order...", ru: "Želim naručiti... — Я хочу заказать...", ua: "Želim naručiti... — Я хочу замовити..." }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "How do you ask for the menu?", ru: "Как попросить меню?", ua: "Як попросити меню?" },
          options: ["Mogu li dobiti jelovnik?", "Koliko košta?", "Gdje je WC?", "Kako se zovete?"],
          correctAnswer: "Mogu li dobiti jelovnik?"
        },
        {
          type: "translation",
          question: { en: "Translate: 'The bill, please.'", ru: "Переведите: 'Счет, пожалуйста.'", ua: "Перекладіть: 'Рахунок, будь ласка.'" },
          correctAnswer: "Račun, molim."
        },
        {
          type: "multiple-choice",
          question: { en: "What does the phrase 'Što preporučujete?' mean?", ru: "Что означает фраза 'Što preporučujete?'?", ua: "Що означає фраза 'Što preporučujete?'?" },
          options: ["What do you recommend?", "What would you like to drink?", "How much does it cost?", "Where is the table?"],
          correctAnswer: "What do you recommend?"
        },
        {
          type: "translation",
          question: { en: "Translate to Croatian: 'Can I get a glass of water?'", ru: "Переведите на хорватский: 'Можно стакан воды?'", ua: "Перекладіть на хорватську: 'Можна склянку води?'" },
          correctAnswer: "Mogu li dobiti čašu vode."
        },
        {
          type: "multiple-choice",
          question: { en: "How do you express 'It was excellent!' in Croatian?", ru: "Как сказать 'Было отлично/великолепно!' по-хорватски?", ua: "Як сказати 'Було чудово/прекрасно!' хорватською?" },
          options: ["Bilo je izvrsno!", "Dobar tek!", "U redu je", "Nema na čemu"],
          correctAnswer: "Bilo je izvrsno!"
        },
        {
          type: "multiple-choice",
          question: { en: "What is 'konobar' in English?", ru: "Что такое 'konobar'?", ua: "Хто такий 'konobar'?" },
          options: ["waiter", "chef", "manager", "cashier"],
          correctAnswer: "waiter"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Dobar _____! (Bon appetit!)", ru: "Заполните: Dobar _____! (Приятного аппетита!)", ua: "Заповніть: Dobar _____! (Приємного апетиту!)" },
          correctAnswer: "tek",
          hint: { en: "tek", ru: "tek", ua: "tek" }
        },
        {
          type: "translation",
          question: { en: "Translate to Croatian: 'I want to order meat.'", ru: "Переведите на хорватский: 'Я хочу заказать мясо.'", ua: "Перекладіть на хорватську: 'Я хочу замовити м'ясо.'" },
          correctAnswer: "Želim naručiti meso."
        }
      ]
    }
  },

  // ==========================================
  {
    id: "a2-grammar-3",
    type: "grammar",
    level: "A2",
    title: {
      en: "Prošlo vrijeme: Perfekt (Past Tense: Perfekt)",
      ru: "Прошедшее время: Перфект (Perfekt)",
      ua: "Минулий час: Перфект (Perfekt)"
    },
    content: {
      description: {
        en: "Learn how to form and use the past tense (perfekt) in Croatian using the auxiliary verb 'biti' and active past participles.",
        ru: "Изучите образование и употребление прошедшего времени (перфект) в хорватском с помощью вспомогательного глагола 'biti' и причастий.",
        ua: "Вивчіть утворення та вживання минулого часу (перфект) у хорватській за допомогою допоміжного дієслова 'biti' та дієприкметників."
      },
      sections: [
        {
          title: { en: "How to form Perfekt", ru: "Как образуется перфект", ua: "Як утворюється перфект" },
          text: {
            en: "The past tense (perfekt) in Croatian is a compound tense formed by two parts:\n\n1. **Short present form of the auxiliary verb 'biti'** (clitic):\n   - *sam, si, je, smo, ste, su*\n2. **Active Past Participle** (glagolski pridjev radni) of the main verb. It is formed by removing the infinitive suffix **-ti** and adding gender/number endings:\n   - **Masculine Singular:** **-o** (*radio*, *učio*, *bio*)\n   - **Feminine Singular:** **-la** (*radila*, *učila*, *bila*)\n   - **Neuter Singular:** **-lo** (*radilo*, *učilo*, *bilo*)\n   - **Masculine Plural:** **-li** (*radili*, *učili*, *bili*)\n   - **Feminine Plural:** **-le** (*radile*, *učile*, *bile*)\n\n**Word Order Rule:** The clitic must stand in the second position of the sentence:\n- *Ja sam radio.* (I worked.) / *Radio sam.* (I worked. - clitic is second)\n- *Mi smo učili.* (We studied.) / *Učili smo.* (We studied.)",
            ru: "Прошедшее время (перфект) в хорватском языке состоит из двух частей:\n\n1. **Вспомогательный глагол 'biti' в настоящем времени** (энклитика):\n   - *sam, si, je, smo, ste, su*\n2. **Рабочее причастие прошедшего времени** смыслового глагола. Образуется путем удаления инфинитивного суффикса **-ti** и добавления окончаний рода/числа:\n   - **Мужской род ед.ч.:** **-o** (*radio*, *bio*)\n   - **Женский род ед.ч.:** **-la** (*radila*, *bila*)\n   - **Средний род ед.ч.:** **-lo** (*radilo*, *bilo*)\n   - **Мужской род мн.ч.:** **-li** (*radili*, *bili*)\n\n**Порядок слов:** Энклитика всегда стоит на втором месте в предложении:\n- *Ja sam radio.* (Я работал.) / *Radio sam.* (Я работал.)\n- *Mi smo učili.* (Мы учились.) / *Učili smo.* (Мы учились.)",
            ua: "Минулий час (перфект) у хорватській мові складається з двох частин:\n\n1. **Допоміжне дієслово 'biti' у теперішньому часі** (енклітика):\n   - *sam, si, je, smo, ste, su*\n2. **Дієприкметник минулого часу** змістовного дієслова. Утворюється шляхом відкидання інфінітивного суфікса **-ti** та додавання закінчень роду/числа:\n   - **Чоловічий рід однини:** **-o** (*radio*, *bio*)\n   - **Жіночий рід однини:** **-la** (*radila*, *bila*)\n   - **Середній рід однини:** **-lo** (*radilo*, *bilo*)\n   - **Чоловічий рід множини:** **-li** (*radili*, *bili*)\n\n**Порядок слів:** Енклітика завжди стоїть на другому місці в реченні:\n- *Ja sam radio.* (Я працював.) / *Radio sam.* (Я працював.)\n- *Mi smo učili.* (Ми вчилися.) / *Učili smo.* (Ми вчилися.)"
          }
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Ja sam _____ (raditi - masculine) jučer. (I worked yesterday.)", ru: "Ja sam _____ (работал) jučer.", ua: "Ja sam _____ (працював) jučer." },
          options: ["radio", "radila", "radili", "raditi"],
          correctAnswer: "radio"
        },
        {
          type: "multiple-choice",
          question: { en: "Gdje si _____ (biti - feminine)? (Where were you?)", ru: "Gdje si _____ (была)?", ua: "Де ти _____ (була)?" },
          options: ["bila", "bio", "bili", "biti"],
          correctAnswer: "bila"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Mi smo _____ (učiti) hrvatski. (We studied Croatian.)", ru: "Заполните: Mi smo _____ (учили) hrvatski.", ua: "Заповніть: Mi smo _____ (вчили) hrvatski." },
          correctAnswer: "učili",
          hint: { en: "Plural participle of učiti", ru: "Причастие мн.ч. от učiti", ua: "Дієприкметник множини від učiti" }
        },
        {
          type: "multiple-choice",
          question: { en: "On je _____ (kupiti) novi auto. (He bought a new car.)", ru: "On je _____ (купил) novi auto.", ua: "On je _____ (купив) novi auto." },
          options: ["kupio", "kupila", "kupili", "kupiti"],
          correctAnswer: "kupio"
        },
        {
          type: "multiple-choice",
          question: { en: "Gdje su _____ (živjeti - plural)? (Where did they live?)", ru: "Gdje su _____ (жили)?", ua: "Де вони _____ (жили)?" },
          options: ["živjeli", "živio", "živjela", "živjeti"],
          correctAnswer: "živjeli"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Ja sam _____ (piti - feminine) kavu. (I drank coffee.)", ru: "Заполните: Ja sam _____ (пила) kavu.", ua: "Заповніть: Ja sam _____ (пила) kavu." },
          correctAnswer: "pila",
          hint: { en: "feminine singular of piti", ru: "женский р. ед.ч. от piti", ua: "жіночий рід однини від piti" }
        },
        {
          type: "translation",
          question: { en: "Translate: 'Bili smo u Zagrebu.'", ru: "Переведите: 'Bili smo u Zagrebu.'", ua: "Перекладіть: 'Bili smo u Zagrebu.'" },
          correctAnswer: { en: "We were in Zagreb", ru: "Мы были в Загребе", ua: "Ми були в Загребі" }
        },
        {
          type: "multiple-choice",
          question: { en: "Ti si _____ (čitati - masculine) knjigu. (You read a book.)", ru: "Ti si _____ (читал) knjigu.", ua: "Ti si _____ (читав) knjigu." },
          options: ["čitao", "čitala", "čitali", "čitati"],
          correctAnswer: "čitao"
        },
        {
          type: "multiple-choice",
          question: { en: "Djevojke su _____ (ići) u trgovinu. (The girls went to the shop.)", ru: "Djevojke su _____ (пошли) u trgovinu.", ua: "Дівчата _____ (пішли) u trgovinu." },
          options: ["išle", "išli", "išla", "išao"],
          correctAnswer: "išle"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Što si _____ (kupiti - masculine)? (What did you buy?)", ru: "Заполните: Što si _____ (купил)?", ua: "Заповніть: Što si _____ (купив)?" },
          correctAnswer: "kupio",
          hint: { en: "masculine singular of kupiti", ru: "мужской род ед.ч. от kupiti", ua: "чоловічий рід однини від kupiti" }
        },
        {
          type: "multiple-choice",
          question: { en: "Ana je _____ (spavati) cijeli dan. (Ana slept all day.)", ru: "Ana je _____ (спала) cijeli dan.", ua: "Ана _____ (спала) цілий день." },
          options: ["spavala", "spavao", "spavali", "spavati"],
          correctAnswer: "spavala"
        },
        {
          type: "multiple-choice",
          question: { en: "Jeste li _____ (čuti) vijest? (Did you hear the news?)", ru: "Jeste li _____ (слышали) vijest?", ua: "Чи ви _____ (чули) новину?" },
          options: ["čuli", "čuo", "čula", "čuti"],
          correctAnswer: "čuli"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Jučer _____ (she was) kod kuće. (Yesterday she was at home.)", ru: "Заполните: Jučer _____ bila kod kuće. (Вчера она была дома.)", ua: "Заповніть: Jučer _____ bila kod kuće. (Вчора вона була вдома.)" },
          correctAnswer: "je",
          hint: { en: "3rd person singular of biti clitic", ru: "Глагол-связка для 3 лица ед.ч.", ua: "Дієслово-зв'язка для 3 особи однини" }
        },
        {
          type: "translation",
          question: { en: "Translate: 'Radio sam jučer.'", ru: "Переведите: 'Radio sam jučer.'", ua: "Перекладіть: 'Radio sam jučer.'" },
          correctAnswer: { en: "I worked yesterday", ru: "Я работал вчера", ua: "Я працював вчора" }
        },
        {
          type: "multiple-choice",
          question: { en: "Djeca su _____ (jesti) jabuke. (Children ate apples.)", ru: "Djeca su _____ (ели) jabuke.", ua: "Діти _____ (їли) jabuke." },
          options: ["jela", "jeli", "jeo", "jesti"],
          correctAnswer: "jeli"
        }
      ]
    }
  },
  {
    id: "a2-grammar-4",
    type: "grammar",
    level: "A2",
    title: {
      en: "Buduće vrijeme: Futur I (Future Tense: Futur I)",
      ru: "Будущее время: Футур I (Futur I)",
      ua: "Майбутній час: Футур I (Futur I)"
    },
    content: {
      description: {
        en: "Learn how to form and use the future tense (futur I) in Croatian using short forms of 'htjeti' and verb infinitives.",
        ru: "Изучите образование и употребление будущего времени (futur I) в хорватском с помощью кратких форм глагола 'htjeti' и инфинитивов.",
        ua: "Вивчіть утворення та вживання майбутнього часу (futur I) у хорватській за допомогою коротких форм дієслова 'htjeti' та інфінітивів."
      },
      sections: [
        {
          title: { en: "How to form Futur I", ru: "Как образуется будущее время", ua: "Як утворюється майбутній час" },
          text: {
            en: "Future Tense (Futur I) in Croatian is formed using:\n\n1. **Unstressed short forms of 'htjeti'**:\n   - *ću, ćeš, će, ćemo, ćete, će*\n2. **Infinitive** of the main verb (ends in *-ti* or *-ći*).\n\n**Word Order Rules:**\n1. If the pronoun is used, the clitic follows it, and the infinitive stays full:\n   - *Ja ću raditi.* (I will work.) / *Mi ćemo ići.* (We will go.)\n2. If the pronoun is omitted, the clitic attaches to the infinitive. For verbs ending in **-ti**, the **-ti** changes to **-t**:\n   - *Radit ću.* (I will work.) / *Učit ćemo.* (We will study.)\n   - For verbs ending in **-ći**, the spelling remains unchanged:\n   - *Ići ću.* (I will go.)",
            ru: "Будущее время (Futur I) в хорватском языке образуется с помощью:\n\n1. **Кратких форм вспомогательного глагола 'htjeti'**:\n   - *ću, ćeš, će, ćemo, ćete, će*\n2. **Инфинитива** смыслового глагола.\n\n**Правила порядка слов:**\n1. Если местоимение указано, вспомогательный глагол следует за ним, а инфинитив пишется полностью:\n   - *Ja ću raditi.* (Я буду работать.) / *Mi ćemo ići.* (Мы пойдем.)\n2. Если местоимения нет, то инфинитив на **-ti** теряет конечную гласную **-i** перед энклитикой:\n   - *Radit ću.* (Я буду работать.) / *Učit ćemo.* (Мы будем учиться.)\n   - Глаголы на **-ći** не меняют свое написание:\n   - *Ići ću.* (Я пойду.)",
            ua: "Майбутній час (Futur I) у хорватській мові утворюється за допомогою:\n\n1. **Коротких форм допоміжного дієслова 'htjeti'**:\n   - *ću, ćeš, će, ćemo, ćete, će*\n2. **Інфінітива** змістовного дієслова.\n\n**Правила порядку слів:**\n1. Якщо займенник вказано, допоміжне дієслово йде за ним, а інфінітив залишається повним:\n   - *Ja ću raditi.* (Я буду працювати.) / *Mi ćemo ići.* (Ми підемо.)\n2. Якщо займенника немає, інфінітив на **-ti** втрачає кінцеву голосну **-i** перед енклітикою:\n   - *Radit ću.* (Я буду працювати.) / *Učit ćemo.* (Ми будемо вчитися.)\n   - Дієслова на **-ći** не змінюють своє написання перед енклітикою:\n   - *Ići ću.* (Я піду.)"
          }
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Ja _____ (will) raditi sutra. (I will work tomorrow.)", ru: "Ja _____ raditi sutra. (Я буду работать завтра.)", ua: "Ja _____ raditi sutra. (Я буду працювати завтра.)" },
          options: ["ću", "ćeš", "će", "ćemo"],
          correctAnswer: "ću"
        },
        {
          type: "multiple-choice",
          question: { en: "Mi ćemo _____ (study) hrvatski. (We will study Croatian.)", ru: "Mi ćemo _____ (учить) hrvatski.", ua: "Mi ćemo _____ (вчитися) hrvatski." },
          options: ["učiti", "učit", "učimo", "učili"],
          correctAnswer: "učiti"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Sutra _____ (I will) ići u Split. (Tomorrow I will go to Split.)", ru: "Заполните: Sutra _____ ići u Split.", ua: "Заповніть: Sutra _____ ići u Split." },
          correctAnswer: "ću",
          hint: { en: "1st person singular future clitic", ru: "Энклитика будущего времени для 'я'", ua: "Енклітика майбутнього часу для 'я'" }
        },
        {
          type: "multiple-choice",
          question: { en: "Write 'I will work' without using the pronoun 'ja':", ru: "Напишите 'Я буду работать' без местоимения 'ja':", ua: "Напишіть 'Я буду працювати' без займенника 'ja':" },
          options: ["Radit ću", "Raditi ću", "Radit ću ja", "Radit će"],
          correctAnswer: "Radit ću"
        },
        {
          type: "multiple-choice",
          question: { en: "Kako se kaže 'We will go' (infinitive ići) without 'mi'?", ru: "Как сказать 'Мы пойдем' (ići) без 'mi'?", ua: "Як сказати 'Ми підемо' (ići) без 'mi'?" },
          options: ["Ići ćemo", "Ić ćemo", "Ići ću", "Ić ćemo mi"],
          correctAnswer: "Ići ćemo"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: On _____ (will) doći u pet sati. (He will come at five o'clock.)", ru: "Заполните: On _____ doći u pet sati.", ua: "Заповніть: On _____ doći u pet sati." },
          correctAnswer: "će",
          hint: { en: "3rd person singular future clitic", ru: "Энклитика будущего времени для 3 лица ед.ч.", ua: "Енклітика майбутнього часу для 3 особи однини" }
        },
        {
          type: "translation",
          question: { en: "Translate: 'Putovat ćemo u ('Hrvatsku').'", ru: "Переведите: 'Putovat ćemo u ('Hrvatsku').'", ua: "Перекладіть: 'Putovat ćemo u ('Hrvatsku').'" },
          correctAnswer: { en: "We will travel to Croatia", ru: "Мы поедем в Хорватию", ua: "Ми поїдемо до Хорватії" }
        },
        {
          type: "multiple-choice",
          question: { en: "Oni _____ (will) kupiti novi mobitel. (They will buy a new phone.)", ru: "Oni _____ kupiti novi mobitel.", ua: "Oni _____ kupiti novi mobitel." },
          options: ["će", "ću", "ćeš", "ćemo"],
          correctAnswer: "će"
        },
        {
          type: "multiple-choice",
          question: { en: "Što ćeš _____ (do) večeras? (What will you do tonight?)", ru: "Što ćeš _____ (делать) večeras?", ua: "Що ти будеш _____ (робити) сьогодні ввечері?" },
          options: ["raditi", "radit", "radimo", "radio"],
          correctAnswer: "raditi"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Vi _____ (will) platiti račun. (You will pay the bill.)", ru: "Заполните: Vi _____ platiti račun.", ua: "Заповніть: Vi _____ platiti račun." },
          correctAnswer: "ćete",
          hint: { en: "2nd person plural future clitic", ru: "Энклитика для 2 лица мн.ч.", ua: "Енклітика для 2 особи множини" }
        },
        {
          type: "multiple-choice",
          question: { en: "Kako se piše 'You will speak' (govoriti) without pronoun 'ti'?", ru: "Как пишется 'Ты будешь говорить' без 'ti'?", ua: "Як пишеться 'Ти будеш говорити' без займенника 'ti'?" },
          options: ["Govorit ćeš", "Govoriti ćeš", "Govorit će", "Govorit ću"],
          correctAnswer: "Govorit ćeš"
        },
        {
          type: "multiple-choice",
          question: { en: "Kada _____ (will they) stići? (When will they arrive?)", ru: "Kada _____ stići?", ua: "Коли _____ прибудуть?" },
          options: ["će", "ću", "ćeš", "ćemo"],
          correctAnswer: "će"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Ja _____ (will not) doći sutra. (I will not come tomorrow.)", ru: "Заполните: Ja _____ doći sutra. (Я не приду завтра.)", ua: "Заповніть: Ja _____ doći sutra. (Я не прийду завтра.)" },
          correctAnswer: "neću",
          hint: { en: "Negative future form for ja", ru: "Отрицательная форма будущего времени для 'я'", ua: "Заперечна форма майбутнього часу для 'я'" }
        },
        {
          type: "translation",
          question: { en: "Translate: 'Kupit ću kruh.'", ru: "Переведите: 'Kupit ću kruh.'", ua: "Перекладіть: 'Kupit ću kruh.'" },
          correctAnswer: { en: "I will buy bread", ru: "Я куплю хлеб", ua: "Я куплю хліб" }
        },
        {
          type: "multiple-choice",
          question: { en: "Ona _____ (will) spavati kod kuće. (She will sleep at home.)", ru: "Ona _____ spavati kod kuće.", ua: "Вона _____ spavati kod kuće." },
          options: ["će", "ću", "ćeš", "ćemo"],
          correctAnswer: "će"
        }
      ]
    }
  },
  {
    id: "a2-communication-2",
    type: "communication",
    level: "A2",
    title: {
      en: "Trgovina i kupovina (Shopping & Store)",
      ru: "Магазин и покупки (Trgovina i kupovina)",
      ua: "Магазин та покупки (Trgovina i kupovina)"
    },
    content: {
      description: {
        en: "Learn how to ask for prices, pay, and converse in a Croatian shop.",
        ru: "Научитесь спрашивать цены, платить и общаться в хорватском магазине.",
        ua: "Навчіться запитувати ціни, платити та спілкуватися в хорватському магазині."
      },
      sections: [
        {
          title: { en: "Useful Shopping Phrases", ru: "Полезные фразы для покупок", ua: "Корисні фрази для покупок" },
          text: {
            en: "Key expressions in a shop:\n- **Koliko košta ovo?** (How much does this cost?)\n- **Mogu li platiti karticom?** (Can I pay by card?)\n- **Samo gledam, hvala.** (I am just looking, thank you.)\n- **Trebam vrećicu, molim.** (I need a bag, please.)\n- **Imate li veći/manji broj?** (Do you have a bigger/smaller size?)\n- **Gdje je garderoba?** (Where is the fitting room?)",
            ru: "Ключевые выражения в магазине:\n- **Koliko košta ovo?** (Сколько это стоит?)\n- **Mogu li platiti karticom?** (Можно заплатить картой?)\n- **Samo gledam, hvala.** (Я просто смотрю, спасибо.)\n- **Trebam vrećicu, molim.** (Мне нужен пакет, пожалуйста.)\n- **Imate li veći/manji broj?** (У вас есть размер побольше/поменьше?)\n- **Gdje je garderoba?** (Где примерочная?)",
            ua: "Ключові вирази в магазині:\n- **Koliko košta ovo?** (Скільки це коштує?)\n- **Mogu li platiti karticom?** (Можна заплатити карткою?)\n- **Samo gledam, hvala.** (Я просто дивлюся, дякую.)\n- **Trebam vrećicu, molim.** (Мне потрібен пакет, будь ласка.)\n- **Imate li veći/manji broj?** (Чи є у вас більший/менший розмір?)\n- **Gdje je garderoba?** (Де примірочна?)"
          }
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "How do you say 'How much does this cost?' in Croatian?", ru: "Как спросить 'Сколько это стоит?' по-хорватски?", ua: "Як запитати 'Скільки це коштує?' хорватською?" },
          options: ["Koliko košta ovo?", "Mogu li platiti?", "Gdje je trgovina?", "Dobar dan!"],
          correctAnswer: "Koliko košta ovo?"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Mogu li platiti _____ (by card)?", ru: "Заполните: Mogu li platiti _____ (картой)?", ua: "Заповніть: Mogu li platiti _____ (карткою)?" },
          correctAnswer: "karticom",
          hint: { en: "with card (instrumental)", ru: "картой (karticom)", ua: "карткою (karticom)" }
        },
        {
          type: "translation",
          question: { en: "Translate: 'Trebam vrećicu, molim.'", ru: "Переведите: 'Trebam vrećicu, molim.'", ua: "Перекладіть: 'Trebam vrećicu, molim.'" },
          correctAnswer: { en: "I need a bag, please", ru: "Мне нужен пакет, пожалуйста", ua: "Мені потрібен пакет, будь ласка" }
        },
        {
          type: "multiple-choice",
          question: { en: "How do you ask 'Where is the fitting room?'", ru: "Как спросить 'Где примерочная?'", ua: "Як запитати 'Де примірочна?'" },
          options: ["Gdje je garderoba?", "Gdje je račun?", "Koliko košta?", "Imate li vrećicu?"],
          correctAnswer: "Gdje je garderoba?"
        },
        {
          type: "multiple-choice",
          question: { en: "What does 'Samo gledam, hvala' mean?", ru: "Что означает 'Samo gledam, hvala'?", ua: "Що означає 'Samo gledam, hvala'?" },
          options: ["I am just looking, thank you", "I want to buy this, thank you", "Where is the shop, thank you", "Can I pay by card, thank you"],
          correctAnswer: "I am just looking, thank you"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Imate li _____ (bigger) broj?", ru: "Заполните: Imate li _____ (больше) broj?", ua: "Заповніть: Imate li _____ (більший) broj?" },
          correctAnswer: "veći",
          hint: { en: "bigger (veći)", ru: "больше / крупнее (veći)", ua: "більший (veći)" }
        },
        {
          type: "translation",
          question: { en: "Translate to Croatian: 'Do you have a bag?'", ru: "Переведите на хорватский: 'У вас есть пакет?'", ua: "Перекладіть на хорватську: 'У вас є пакет?'" },
          correctAnswer: "Imate li vrećicu"
        },
        {
          type: "multiple-choice",
          question: { en: "How do you ask to pay in cash?", ru: "Как попросить заплатить наличными?", ua: "Як попросити заплатити готівкою?" },
          options: ["Mogu li platiti gotovinom?", "Mogu li platiti karticom?", "Gdje je blagajna?", "Koliko košta?"],
          correctAnswer: "Mogu li platiti gotovinom?"
        },
        {
          type: "multiple-choice",
          question: { en: "What is 'blagajna' in English?", ru: "Что такое 'blagajna'?", ua: "Що таке 'blagajna'?" },
          options: ["cash register / checkout", "bag", "fitting room", "price"],
          correctAnswer: "cash register / checkout"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Molim _____ (receipt/bill).", ru: "Заполните: Molim _____ (чек).", ua: "Заповніть: Molim _____ (чек/рахунок)." },
          correctAnswer: "račun",
          hint: { en: "receipt / bill (račun)", ru: "счет / чек (račun)", ua: "рахунок / чек (račun)" }
        },
        {
          type: "multiple-choice",
          question: { en: "How do you say 'cheap' in Croatian?", ru: "Как сказать 'дешевый' по-хорватски?", ua: "Як скати 'дешевий' хорватською?" },
          options: ["jeftin", "skup", "nov", "star"],
          correctAnswer: "jeftin"
        },
        {
          type: "multiple-choice",
          question: { en: "How do you say 'expensive' in Croatian?", ru: "Как сказать 'дорогой' по-хорватски?", ua: "Як сказать 'дорогий' хорватською?" },
          options: ["skup", "jeftin", "lijep", "dobar"],
          correctAnswer: "skup"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Imate li _____ (smaller) broj?", ru: "Заполните: Imate li _____ (меньше) broj?", ua: "Заповніть: Imate li _____ (менший) broj?" },
          correctAnswer: "manji",
          hint: { en: "smaller (manji)", ru: "меньше (manji)", ua: "менший (manji)" }
        },
        {
          type: "translation",
          question: { en: "Translate: 'To je preskupo.'", ru: "Переведите: 'To je preskupo.'", ua: "Перекладіть: 'To je preskupo.'" },
          correctAnswer: { en: "That is too expensive", ru: "Это слишком дорого", ua: "Це занадто дорого" }
        },
        {
          type: "multiple-choice",
          question: { en: "How do you ask 'Is this on sale?'", ru: "Как спросить 'Это по скидке/распродаже?'", ua: "Як запитати 'Це на розрозпродажі/знижці?'" },
          options: ["Je li ovo na popustu?", "Gdje je garderoba?", "Koliko košta?", "Mogu li platiti?"],
          correctAnswer: "Je li ovo na popustu?"
        }
      ]
    }
  },
  {
    id: "a2-grammar-5",
    type: "grammar",
    level: "A2",
    title: {
      en: "Instrumental s prijedlozima i bez (Instrumental Case)",
      ru: "Творительный падеж (Instrumental)",
      ua: "Орудний відмінок (Instrumental)"
    },
    content: {
      description: {
        en: "Learn the instrumental case (instrumental) in Croatian — used for company (with someone), means of transport, and tools.",
        ru: "Изучите творительный падеж (instrumental) в хорватском — используется для выражения совместности (с кем-то), средств транспорта и инструментов.",
        ua: "Вивчіть орудний відмінок (instrumental) у хорватській — використовується для компанії (з кимось), засобів транспорту та інструментів."
      },
      sections: [
        {
          title: { en: "Instrumental Endings & Usage", ru: "Окончания и употребление творительного падежа", ua: "Закінчення та вживання орудного відмінка" },
          text: {
            en: "The Instrumental case answers the questions **S kim?** (With whom?) and **Čime?** (With what?).\n\n**Key endings (Singular):**\n- **Masculine/Neuter:** **-om** (after hard consonants: *stol* -> *stolom*, *prijatelj* -> *prijateljem* - ending is **-em** after soft palatals like *ž, š, č, ć, j*).\n- **Feminine:** **-om** (*kava* -> *kavom*, *sestra* -> *sestrom*).\n\n**Important Rules:**\n1. **With preposition 's / sa' (with):** used when referring to company or accompaniment (people/animals):\n   - *Šetam s prijateljem.* (I walk with a friend.)\n   - *Kava s mlijekom.* (Coffee with milk.)\n2. **Without preposition 's / sa':** used for instruments, tools, or means of transport:\n   - *Putujem vlakom.* (I travel by train. - NOT s vlakom!)\n   - *Pišem olovkom.* (I write with a pencil.)",
            ru: "Творительный падеж отвечает на вопросы **S kim?** (С кем?) и **Čime?** (Чем?).\n\n**Основные окончания (Единственное число):**\n- **Мужской/Средний род:** **-om** (после твердых: *stolom*, после мягких *ж, ш, ч, щ, й* окончание **-em**: *prijateljem*).\n- **Женский род:** **-om** (*kavom*, *sestrom*).\n\n**Важные правила:**\n1. **С предлогом 's / sa' (c):** используется для совместности (люди/животные):\n   - *Šetam s prijateljem.* (Гуляю с другом.)\n2. **Без предлога 's / sa':** для инструментов или транспорта:\n   - *Putujem vlakom.* (Еду поездом / на поезде.)\n   - *Pišem olovkom.* (Пишу карандашом.)",
            ua: "Орудний відмінок відповідає на запитання **S kim?** (З кем?) та **Čime?** (Чим?).\n\n**Основні закінчення (Однина):**\n- **Чоловічий/Середній рід:** **-om** (після твердих приголосних: *stolom*, після м'яких закінчення **-em**: *prijateljem*).\n- **Жіночий рід:** **-om** (*kavom*, *sestrom*).\n\n**Важливі правила:**\n1. **З прийменником 's / sa' (з):** використовується для сумісності (люди/тварини):\n   - *Šetam s prijateljem.* (Гуляю з другом.)\n2. **Без прийменника 's / sa':** для інструментів або транспорту:\n   - *Putujem vlakom.* (Їду поїздом.)\n   - *Pišem olovkom.* (Пишу олівцем.)"
          }
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Putujem _____ (vlak - train). (I travel by train.)", ru: "Putujem _____ (vlak). (Я еду на поезде.)", ua: "Putujem _____ (vlak). (Я їду поїздом.)" },
          options: ["vlakom", "s vlakom", "vlaku", "vlakomom"],
          correctAnswer: "vlakom"
        },
        {
          type: "multiple-choice",
          question: { en: "Idem u kino _____ (sestra - sister). (I am going to the cinema with sister.)", ru: "Idem u kino _____ (sestra). (Я иду в кино с сестрой.)", ua: "Idem u kino _____ (sestra). (Я йду в кіно з сестрою.)" },
          options: ["sa sestrom", "sestrom", "sestru", "sestre"],
          correctAnswer: "sa sestrom"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Pišem _____ (olovka - pencil). (I write with a pencil.)", ru: "Заполните: Pišem _____ (olovka). (Я пишу карандашом.)", ua: "Заповніть: Pišem _____ (olovka). (Я пишу олівцем.)" },
          correctAnswer: "olovkom",
          hint: { en: "instrumental of olovka without preposition", ru: "творительный падеж без предлога", ua: "орудний відмінок без прийменника" }
        },
        {
          type: "multiple-choice",
          question: { en: "Razgovaram _____ (brat - brother). (I am talking with my brother.)", ru: "Razgovaram _____ (brat). (Я разговариваю с братом.)", ua: "Razgovaram _____ (brat). (Я розмовляю з братом.)" },
          options: ["s bratom", "bratom", "bratu", "s brata"],
          correctAnswer: "s bratom"
        },
        {
          type: "multiple-choice",
          question: { en: "Putujemo _____ (auto - car). (We travel by car.)", ru: "Putujemo _____ (auto). (Мы едем на машине.)", ua: "Putujemo _____ (auto). (Ми їдемо машиною.)" },
          options: ["autom", "s autom", "autu", "autonom"],
          correctAnswer: "autom"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Želim kavu s _____ (mlijeko - milk).", ru: "Заполните: Želim kavu s _____ (mlijeko).", ua: "Заповніть: Želim kavu s _____ (mlijeko)." },
          correctAnswer: "mlijekom",
          hint: { en: "milk (instrumental)", ru: "молоком (mlijekom)", ua: "молоком (mlijekom)" }
        },
        {
          type: "multiple-choice",
          question: { en: "Bavim se _____ (sport - sport). (I play sports.)", ru: "Bavim se _____ (sport). (Я занимаюсь спортом.)", ua: "Bavim se _____ (sport). (Я займаюся спортом.)" },
          options: ["sportom", "s sportom", "sportu", "sportomom"],
          correctAnswer: "sportom"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Putujem avionom.'", ru: "Переведите: 'Putujem avionom.'", ua: "Перекладіть: 'Putujem avionom.'" },
          correctAnswer: { en: "I travel by plane", ru: "Я лечу самолетом / Я путешествую на самолете", ua: "Я лечу літаком / Я подорожую літаком" }
        },
        {
          type: "multiple-choice",
          question: { en: "Pijem čaj s _____ (limun - lemon).", ru: "Pijem čaj s _____ (limun).", ua: "П'ю чай з _____ (limun)." },
          options: ["limunom", "limunem", "s limunom", "limuna"],
          correctAnswer: "limunom"
        },
        {
          type: "multiple-choice",
          question: { en: "Što radiš s _____ (taj mobitel - that phone)?", ru: "Что ты делаешь с _____ (taj mobitel)?", ua: "Що ти робиш із _____ (taj mobitel)?" },
          options: ["tim mobitelom", "taj mobitelom", "tome mobitelu", "tim mobitelu"],
          correctAnswer: "tim mobitelom"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Šetam s _____ (pas - dog). (I walk with the dog.)", ru: "Заполните: Šetam s _____ (pas). (Я гуляю с собакой.)", ua: "Заповніть: Šetam s _____ (pas). (Я гуляю з собакою.)" },
          correctAnswer: "psom",
          hint: { en: "dog (instrumental - stem changes to ps-)", ru: "собакой (psom)", ua: "собакою (psom)" }
        },
        {
          type: "multiple-choice",
          question: { en: "Želim pizzu sa _____ (sir - cheese). (I want pizza with cheese.)", ru: "Želim pizzu sa _____ (sir).", ua: "Želim pizzu sa _____ (sir)." },
          options: ["sirom", "sirenem", "sira", "siru"],
          correctAnswer: "sirom"
        },
        {
          type: "multiple-choice",
          question: { en: "Upravljam _____ (tvrtka - company). (I manage the company.)", ru: "Upravljam _____ (tvrtka). (Я руковожу компанией.)", ua: "Upravljam _____ (tvrtka). (Я керую компанією.)" },
          options: ["tvrtkom", "s tvrtkom", "tvrtku", "tvrtki"],
          correctAnswer: "tvrtkom"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Putujem _____ (brod - ship). (I travel by ship.)", ru: "Заполните: Putujem _____ (brod). (Я путешествую на корабле.)", ua: "Заповніть: Putujem _____ (brod). (Я подорожую кораблем.)" },
          correctAnswer: "brodom",
          hint: { en: "by ship (instrumental)", ru: "кораблем (brodom)", ua: "кораблем (brodom)" }
        },
        {
          type: "translation",
          question: { en: "Translate: 'Razgovaram s majkom.'", ru: "Переведите: 'Razgovaram s majkom.'", ua: "Перекладіть: 'Razgovaram s majkom.'" },
          correctAnswer: { en: "I am talking with mother", ru: "Я разговариваю с мамой", ua: "Я розмовляю з мамою" }
        }
      ]
    }
  },
  {
    id: "a2-grammar-6",
    type: "grammar",
    level: "A2",
    title: {
      en: "Dativ i prijedlozi (Dative Case)",
      ru: "Дательный падеж (Dativ)",
      ua: "Давальний відмінок (Dativ)"
    },
    content: {
      description: {
        en: "Learn the dative case (dativ) in Croatian — used for indirect objects (to whom) and motion towards people using 'k/ka'.",
        ru: "Изучите дательный падеж (dativ) в хорватском — используется для косвенных дополнений (кому) и направления движения к людям с предлогом 'k/ka'.",
        ua: "Вивчіть давальний відмінок (dativ) у хорватській — використовується для непрямих додатків (кому) та руху до людей з прийменником 'k/ka'."
      },
      sections: [
        {
          title: { en: "Dative Endings & Usage", ru: "Окончания и употребление дательного падежа", ua: "Закінчення та вживання давального відмінка" },
          text: {
            en: "The Dative case answers the questions **Kome?** (To whom?) and **Čemu?** (To what?). It is identical in endings to the Locative case, but differs in meaning and preposition usage.\n\n**Key endings (Singular):**\n- **Masculine/Neuter:** **-u** (*brat* -> *bratu*, *selo* -> *selu*).\n- **Feminine:** **-i** (*sestra* -> *sestri*, *kolegica* -> *kolegici*).\n\n**Common Usages:**\n1. **Indirect Object:**\n   - *Dajem knjigu* **bratu** (Dative). (I give the book to my brother.)\n   - *Pišem pismo* **prijateljici** (Dative). (I write a letter to a friend.)\n2. **Motion towards a person (Preposition 'k / ka'):**\n   - *Idem k* **liječniku** (Dative). (I am going to the doctor's.)\n   - *Hodi k* **meni**! (Come to me!)",
            ru: "Дательный падеж отвечает на вопросы **Kome?** (Кому?) и **Čemu?** (Чему?). Окончания совпадают с предложным падежом (локативом), но употребляется с другими предлогами.\n\n**Окончания в единственном числе:**\n- **Мужской/Средний род:** **-u** (*bratu*, *selu*).\n- **Женский род:** **-i** (*sestri*).\n\n**Типичное употребление:**\n1. **Косвенное дополнение:**\n   - *Dajem knjigu* **bratu**. (Даю книгу брату.)\n2. **Направление к человеку (предлог 'k / ka'):**\n   - *Idem k* **liječniku**. (Иду к врачу.)",
            ua: "Давальний відмінок відповідає на запитання **Kome?** (Кому?) та **Čemu?** (Чому?). Закінчення збігаються з місцевим відмінком (локативом), але використовуються інші прийменники.\n\n**Закінчення в однині:**\n- **Чоловічий/Середній рід:** **-u** (*bratu*, *selu*).\n- **Жіночий рід:** **-i** (*sestri*).\n\n**Типове вживання:**\n1. **Непрямий додаток:**\n   - *Dajem knjigu* **bratu**. (Даю книгу братові.)\n2. **Напрямок до людини (прийменник 'k / ka'):**\n   - *Idem k* **liječniku**. (Йду до лікаря.)"
          }
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Dajem poklon _____ (brat - brother). (I give a present to my brother.)", ru: "Dajem poklon _____ (brat). (Я дарю подарок брату.)", ua: "Dajem poklon _____ (brat). (Я дарую подарунок брату.)" },
          options: ["bratu", "bratom", "brata", "brati"],
          correctAnswer: "bratu"
        },
        {
          type: "multiple-choice",
          question: { en: "Pišem pismo _____ (sestra - sister). (I write a letter to my sister.)", ru: "Pišem pismo _____ (sestra). (Я пишу письмо сестре.)", ua: "Pišem pismo _____ (sestra). (Я пишу листа сестрі.)" },
          options: ["sestri", "sestru", "sestrom", "sestre"],
          correctAnswer: "sestri"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Idem k _____ (liječnik - doctor). (I am going to the doctor.)", ru: "Заполните: Idem k _____ (liječnik). (Я иду к врачу.)", ua: "Заповніть: Idem k _____ (liječnik). (Я йду до лікаря.)" },
          correctAnswer: "liječniku",
          hint: { en: "doctor (dative)", ru: "врачу (liječniku)", ua: "лікарю (liječniku)" }
        },
        {
          type: "multiple-choice",
          question: { en: "Pomažem _____ (majka - mother). (I help my mother.)", ru: "Pomažem _____ (majka). (Я помогаю маме.)", ua: "Pomažem _____ (majka). (Я допомагаю мамі.)" },
          options: ["majci", "majku", "majkom", "majke"],
          correctAnswer: "majci"
        },
        {
          type: "multiple-choice",
          question: { en: "Kupujem cvijeće _____ (supruga - wife). (I buy flowers for my wife.)", ru: "Kupujem cvijeće _____ (supruga). (Я покупаю цветы жене.)", ua: "Kupujem cvijeće _____ (supruga). (Я купую квіти дружині.)" },
          options: ["supruzi", "suprugu", "suprugom", "supruge"],
          correctAnswer: "supruzi"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Dođi k _____ (ja - me)! (Come to me!)", ru: "Заполните: Dođi k _____! (Приди ко мне!)", ua: "Заповніть: Dođi k _____! (Прийди до мене!)" },
          correctAnswer: "meni",
          hint: { en: "me (dative pronoun form)", ru: "мне (meni)", ua: "мене (meni)" }
        },
        {
          type: "multiple-choice",
          question: { en: "Vjerujem _____ (prijatelj - friend). (I believe my friend.)", ru: "Vjerujem _____ (prijatelj). (Я верю другу.)", ua: "Vjerujem _____ (prijatelj). (Я вірю другові.)" },
          options: ["prijatelju", "prijateljem", "prijatelja", "prijatelji"],
          correctAnswer: "prijatelju"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Daj mi čašu vode.'", ru: "Переведите: 'Daj mi čašu vode.'", ua: "Перекладіть: 'Daj mi čašu vode.'" },
          correctAnswer: { en: "Give me a glass of water", ru: "Дай мне стакан воды", ua: "Дай мені склянку води" }
        },
        {
          type: "multiple-choice",
          question: { en: "Objašnjavam pravilo _____ (student - student). (I explain the rule to the student.)", ru: "Objašnjavam pravilo _____ (student).", ua: "Objašnjavam pravilo _____ (student)." },
          options: ["studentu", "studenta", "studentom", "studenti"],
          correctAnswer: "studentu"
        },
        {
          type: "multiple-choice",
          question: { en: "Čestitam rođendan _____ (otac - father). (I congratulate father on birthday.)", ru: "Čestitam rođendan _____ (otac).", ua: "Čestitam rođendan _____ (otac)." },
          options: ["ocu", "otcu", "otcem", "otaca"],
          correctAnswer: "ocu"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Idem _____ (k / na) prijatelju. (I go to my friend.)", ru: "Заполните: Idem _____ prijatelju. (Я иду к другу.)", ua: "Заповніть: Idem _____ prijatelju. (Я йду до друга.)" },
          correctAnswer: "k",
          hint: { en: "k", ru: "k", ua: "k" }
        },
        {
          type: "multiple-choice",
          question: { en: "Donosim kavu _____ (profesorica - female professor).", ru: "Donosim kavu _____ (profesorica).", ua: "Donosim kavu _____ (profesorica)." },
          options: ["profesorici", "profesoriciu", "profesoricom", "profesoricu"],
          correctAnswer: "profesorici"
        },
        {
          type: "multiple-choice",
          question: { en: "Odgovaram _____ (kolega - colleague). (I reply to the colleague.)", ru: "Odgovaram _____ (kolega).", ua: "Odgovaram _____ (kolega)." },
          options: ["kolegi", "kolegu", "kolegom", "kolege"],
          correctAnswer: "kolegi"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Pošalji poruku _____ (on - him). (Send a message to him.)", ru: "Заполните: Pošalji poruku _____ (mu - short dative). (Отправь ему сообщение.)", ua: "Заповніть: Pošalji poruku _____ (mu - short dative). (Надішли йому повідомлення.)" },
          correctAnswer: "mu",
          hint: { en: "him (short dative)", ru: "ему (mu)", ua: "йому (mu)" }
        },
        {
          type: "translation",
          question: { en: "Translate: 'Vjerujem ti.'", ru: "Переведите: 'Vjerujem ti.'", ua: "Перекладіть: 'Vjerujem ti.'" },
          correctAnswer: { en: "I believe you", ru: "Я верю тебе", ua: "Я вірю тобі" }
        }
      ]
    }
  },
  {
    id: "a2-grammar-7",
    type: "grammar",
    level: "A2",
    title: {
      en: "Komparacija pridjeva (Comparison of Adjectives)",
      ru: "Сравнение прилагательных (Komparacija pridjeva)",
      ua: "Порівняння прикметників (Komparacija pridjeva)"
    },
    content: {
      description: {
        en: "Learn how to compare adjectives in Croatian, form comparative and superlative degrees, and use irregular comparisons.",
        ru: "Изучите степени сравнения прилагательных в хорватском языке, образование сравнительной и превосходной степени, а также исключения.",
        ua: "Вивчіть ступені порівняння прикметників у хорватській мові, утворення вищого та найвищого ступенів, а також винятки."
      },
      sections: [
        {
          title: { en: "Comparative and Superlative Degrees", ru: "Сравнительная и превосходная степень", ua: "Вищий та найвищий ступені" },
          text: {
            en: "Croatian adjectives have three degrees: Positive, Comparative, and Superlative.\n\n**1. Comparative (komparativ):**\n- Formed by adding suffixes **-iji** (most common): *nov* -> *noviji*, *star* -> *stariji*, *topao* -> *topliji*.\n- Suffix **-ji** (causes consonant changes called jotation): *mlad* -> *mlađi*, *brz* -> *brži*, *tih* -> *tiši*.\n- Suffix **-ši** (only three adjectives): *lak* (easy) -> *lakši*, *mek* (soft) -> *mekši*, *lijep* (beautiful) -> *ljepši*.\n\n**2. Superlative (superlativ):**\n- Formed simply by adding the prefix **naj-** to the comparative form:\n  - *najnoviji* (the newest), *najstariji* (the oldest), *najljepši* (the most beautiful).\n\n**3. Irregular Adjectives:**\n- *dobar* (good) -> *bolji* -> *najbolji*\n- *loš* (bad) -> *gori* -> *najgori*\n- *velik* (big) -> *veći* -> *najveći*\n- *malen* (small) -> *manji* -> *najmanji*\n- *dug* (long) -> *dulji* / *duži* -> *najdulji* / *najduži*",
            ru: "Хорватские прилагательные имеют три степени сравнения: положительную, сравнительную и превосходную.\n\n**1. Сравнительная степень (komparativ):**\n- Чаще всего образуется с суффиксом **-iji**: *nov* -> *noviji* (новее), *star* -> *stariji* (старше).\n- С суффиксом **-ji** (с изменением согласного): *mlad* -> *mlađi*, *brz* -> *brži*.\n- С суффиксом **-ši** (только три слова): *lak* -> *lakši*, *mek* -> *mekši*, *lijep* -> *ljepši*.\n\n**2. Превосходная степень (superlativ):**\n- Образуется путем добавления приставки **naj-** к сравнительной форме:\n  - *najbolji* (самый лучший), *najveći* (самый большой).\n\n**3. Исключения:**\n- *dobar* (хороший) -> *bolji* -> *najbolji*\n- *loš* (плохой) -> *gori* -> *najgori*\n- *velik* (большой) -> *veći* -> *najveći*\n- *malen* (маленький) -> *manji* -> *najmanji*",
            ua: "Хорватські прикметники мають три ступені порівняння: звичайний, вищий та найвищий.\n\n**1. Вищий ступінь (komparativ):**\n- Найчастіше утворюється з суфіксом **-iji**: *nov* -> *noviji* (новіший), *star* -> *stariji* (старіший).\n- З суфіксом **-ji** (зі зміною приголосного): *mlad* -> *mlađi*, *brz* -> *brži*.\n- З суфіксом **-ši** (тільки три слова): *lak* -> *lakši*, *mek* -> *mekši*, *lijep* -> *ljepši*.\n\n**2. Найвищий ступінь (superlativ):**\n- Утворюється шляхом додавання префікса **naj-** до форми вищого ступеня:\n  - *najbolji* (найкращий), *najveći* (найбільший).\n\n**3. Винятки:**\n- *dobar* (добрий) -> *bolji* -> *najbolji*\n- *loš* (поганий) -> *gori* -> *najgori*\n- *velik* (великий) -> *veći* -> *najveći*\n- *malen* (маленький) -> *manji* -> *najmanji*"
          }
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Zagreb je _____ (novi -> comparative) od Zadra.", ru: "Zagreb je _____ od Zadra. (Загреб новее Задара.)", ua: "Zagreb je _____ od Zadra. (Загреб новіший за Задар.)" },
          options: ["noviji", "novi", "najnoviji", "novijiiji"],
          correctAnswer: "noviji"
        },
        {
          type: "multiple-choice",
          question: { en: "Ova knjiga je _____ (dobra -> comparative) od one.", ru: "Ova knjiga je _____ od one. (Эта книга лучше той.)", ua: "Ova knjiga je _____ od one. (Ця книга краща за ту.)" },
          options: ["bolja", "dobrija", "najbolja", "gora"],
          correctAnswer: "bolja"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Split je _____ (velik -> comparative) od Šibenika.", ru: "Заполните: Split je _____ od Šibenika. (Сплит больше Шибеника.)", ua: "Заповніть: Split je _____ od Šibenika. (Спліт більший за Шибеник.)" },
          correctAnswer: "veći",
          hint: { en: "bigger (veći)", ru: "больше (veći)", ua: "більший (veći)" }
        },
        {
          type: "multiple-choice",
          question: { en: "Moja sestra je _____ (mlada -> comparative) od mene.", ru: "Moja sestra je _____ od mene. (Моя сестра моложе меня.)", ua: "Moja sestra je _____ od mene. (Моя сестра молодша за мене.)" },
          options: ["mlađa", "mladija", "najmlađa", "mladša"],
          correctAnswer: "mlađa"
        },
        {
          type: "multiple-choice",
          question: { en: "Ovo je _____ (dobar -> superlative) hotel u gradu.", ru: "Ovo je _____ hotel u gradu. (Это лучший отель в городе.)", ua: "Ovo je _____ hotel u gradu. (Це найкращий готель у місті.)" },
          options: ["najbolji", "najdobriji", "bolji", "najgori"],
          correctAnswer: "najbolji"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Hrvatski jezik je _____ (lak -> comparative) od njemačkog.", ru: "Заполните: Hrvatski jezik je _____ od njemačkog. (Хорватский проще немецкого.)", ua: "Заповніть: Hrvatski jezik je _____ od njemačkog. (Хорватська простіша за німецьку.)" },
          correctAnswer: "lakši",
          hint: { en: "easier (lakši)", ru: "проще / легче (lakši)", ua: "простіша / легша (lakši)" }
        },
        {
          type: "multiple-choice",
          question: { en: "Ova kava je _____ (loša -> comparative) od jučerašnje.", ru: "Ova kava je _____ od jučerašnje. (Этот кофе хуже вчерашнего.)", ua: "Ova kava je _____ od jučerašnje. (Ця кава гірша за вчорашню.)" },
          options: ["gora", "lošija", "najgora", "goraa"],
          correctAnswer: "gora"
        },
        {
          type: "translation",
          question: { en: "Translate: 'On je stariji od mene.'", ru: "Переведите: 'On je stariji od mene.'", ua: "Перекладіть: 'On je stariji od mene.'" },
          correctAnswer: { en: "He is older than me", ru: "Он старше меня", ua: "Він старший за мене" }
        },
        {
          type: "multiple-choice",
          question: { en: "Zagreb je _____ (velik -> superlative) grad u Hrvatskoj.", ru: "Zagreb je _____ grad u Hrvatskoj. (Загреб — самый большой город...)", ua: "Zagreb je _____ grad u Hrvatskoj. (Загреб — найбільше місто...)" },
          options: ["najveći", "najvećiji", "veći", "najvelikiji"],
          correctAnswer: "najveći"
        },
        {
          type: "multiple-choice",
          question: { en: "Moja soba je _____ (malena -> comparative) od tvoje.", ru: "Moja soba je _____ od tvoje. (Моя комната меньше твоей.)", ua: "Moja soба є _____ від твоєї. (Моя кімната менша за твою.)" },
          options: ["manja", "malenija", "najmanja", "manjija"],
          correctAnswer: "manja"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Danas je _____ (topao -> comparative) nego jučer.", ru: "Заполните: Danas je _____ nego jučer. (Сегодня теплее, чем вчера.)", ua: "Заповніть: Danas je _____ nego jučer. (Сьогодні тепліше, ніж учора.)" },
          correctAnswer: "toplije",
          hint: { en: "warmer (neuter adverb form toplije)", ru: "теплее (toplije)", ua: "тепліше (toplije)" }
        },
        {
          type: "multiple-choice",
          question: { en: "Ovaj test je _____ (težak -> comparative) od prvog.", ru: "Ovaj test je _____ od prvog. (Этот тест сложнее первого.)", ua: "Цей тест є _____ від першого. (Цей тест важчий за перший.)" },
          options: ["teži", "težiji", "najteži", "težijiiji"],
          correctAnswer: "teži"
        },
        {
          type: "multiple-choice",
          question: { en: "Ovo je _____ (lijep -> superlative) plaža.", ru: "Ovo je _____ plaža. (Это самый красивый пляж.)", ua: "Це є _____ пляж. (Це найкрасивіший пляж.)" },
          options: ["najljepša", "najlijepša", "ljepša", "najljepšija"],
          correctAnswer: "najljepša"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Marko je _____ (visok -> comparative) od Ivana.", ru: "Заполните: Marko je _____ od Ivana. (Марко выше Ивана.)", ua: "Заповніть: Marko je _____ od Ivana. (Марко вищий за Івана.)" },
          correctAnswer: "viši",
          hint: { en: "taller (viši)", ru: "выше (viši)", ua: "вищий (viši)" }
        },
        {
          type: "translation",
          question: { en: "Translate: 'To je najbolja ideja.'", ru: "Переведите: 'To je najbolja ideja.'", ua: "Перекладіть: 'To je najbolja ideja.'" },
          correctAnswer: { en: "That is the best idea", ru: "Это лучшая идея", ua: "Це найкраща ідея" }
        }
      ]
    }
  },
  {
    id: "a2-grammar-8",
    type: "grammar",
    level: "A2",
    title: {
      en: "Povratni glagoli (Reflexive Verbs)",
      ru: "Возвратные глаголы (Povratni glagoli)",
      ua: "Зворотні дієслова (Povratni glagoli)"
    },
    content: {
      description: {
        en: "Learn how to conjugate and use reflexive verbs in Croatian using the reflexive pronoun 'se' and master word order rules.",
        ru: "Научитесь спрягать и употреблять возвратные глаголы в хорватском языке с частицей 'se' и освойте порядок слов.",
        ua: "Навчіться відмінювати та вживати зворотні дієслова в хорватській мові з часткою 'se' та опануйте порядок слів."
      },
      sections: [
        {
          title: { en: "Reflexive Verbs and 'se'", ru: "Возвратные глаголы и частица 'se'", ua: "Зворотні дієслова та частка 'se'" },
          text: {
            en: "Reflexive verbs in Croatian are accompanied by the reflexive pronoun clitic **se** (equivalent to '-ся' in Russian/Ukrainian or 'oneself' in English).\n\n**Common reflexive verbs:**\n- *smijati se* (to laugh)\n- *družiti se* (to hang out, socialise)\n- *odmarati se* (to rest)\n- *tuširati se* (to shower)\n- *zvati se* (to be named)\n- *brinuti se* (to worry)\n- *osjećati se* (to feel)\n\n**Word Order Rule:**\nThe clitic **se** must always stand in the **second position** in the sentence:\n- *Ja se odmaram.* (I am resting.) / *Odmaram se.* (I am resting.)\n- *Mi se družimo.* (We hang out.) / *Družimo se.* (We hang out.)\n- In questions with *li*:\n  - *Smiješ li se?* (Are you laughing?)\n- In past tense, both clitics (*sam/si/je* and *se*) must go together (auxiliary verb first):\n  - *Ja sam se tuširao.* (I showered.) / *Tuširao sam se.* (I showered.)",
            ru: "Возвратные глаголы в хорватском языке употребляются с безударной частицей **se** (аналог '-ся' в русском/украинском языке).\n\n**Популярные глаголы:**\n- *smijati se* (смеяться), *družiti se* (общаться/тусоваться), *odmarati se* (отдыхать), *tuširati se* (принимать душ), *brinuti se* (беспокоиться).\n\n**Порядок слов:**\nЧастица **se** всегда должна занимать **второе место** в предложении:\n- *Ja se odmaram.* (Я отдыхаю.) / *Odmaram se.* (Отдыхаю.)\n- В прошедшем времени связка *sam/si...* стоит перед *se*:\n  - *Tuširao sam se.* (Я принимал душ.)",
            ua: "Зворотні дієслова в хорватській мові вживаються з ненаголошеною часткою **se** (аналог '-ся' в українській мові).\n\n**Популярні дієслова:**\n- *smijati se* (сміятися), *družiti se* (спілкуватися/тусуватися), *odmarati se* (відпочивати), *tuširati se* (приймати душ), *brinuti se* (турбуватися).\n\n**Порядок слів:**\nЧастка **se** завжди повинна займати **друге місце** в реченні:\n- *Ja se odmaram.* (Я відпочиваю.) / *Odmaram se.* (Відпочиваю.)\n- У минулому часі зв'язка *sam/si...* стоїть перед *se*:\n  - *Tuširao sam se.* (Я приймав душ.)"
          }
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Ja _____ (rest) kod kuće. (I am resting at home.)", ru: "Ja _____ kod kuće. (Я отдыхаю дома.)", ua: "Ja _____ kod kuće. (Я відпочиваю вдома.)" },
          options: ["se odmaram", "odmaram se", "odmaram se ja", "odmaram"],
          correctAnswer: "se odmaram"
        },
        {
          type: "multiple-choice",
          question: { en: "Kako _____ (are you named/called)? (What is your name?)", ru: "Kako _____? (Как тебя зовут?)", ua: "Kako _____? (Як тебе звати?)" },
          options: ["se zoveš", "zoveš se", "se zove", "zoveš"],
          correctAnswer: "se zoveš"
        },
        {
          type: "fill-blank",
          question: { en: "Complete without pronoun: _____ (We hang out) svaki dan. (We hang out every day.)", ru: "Заполните без местоимения: _____ svaki dan. (Мы общаемся каждый день.)", ua: "Заповніть без займенника: _____ svaki dan. (Ми спілкуємося щодня.)" },
          correctAnswer: "Družimo se",
          hint: { en: "We hang out (družiti se - 1st person plural)", ru: "Мы общаемся (družimo se)", ua: "Ми спілкуємося (družimo se)" }
        },
        {
          type: "multiple-choice",
          question: { en: "Zašto _____ (are you laughing)? (Why are you laughing?)", ru: "Zašto _____? (Почему ты смеешься?)", ua: "Zašto _____? (Чому ти смієшся?)" },
          options: ["se smiješ", "smiješ se", "smiješ", "se smije"],
          correctAnswer: "se smiješ"
        },
        {
          type: "multiple-choice",
          question: { en: "Jučer sam _____ (showered - masculine). (Yesterday I showered.)", ru: "Jučer sam _____ . (Вчера я принимал душ.)", ua: "Jučer sam _____ . (Вчора я приймав душ.)" },
          options: ["se tuširao", "tuširao se", "tuširao", "se tuširala"],
          correctAnswer: "se tuširao"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Kako _____ osjećaš danas? (How do you feel today?)", ru: "Заполните: Kako _____ osjećaš danas? (Как ты себя чувствуешь сегодня?)", ua: "Заповніть: Kako _____ osjećaš danas? (Як ти почуваєшся сьогодні?)" },
          correctAnswer: "se",
          hint: { en: "reflexive pronoun clitic", ru: "возвратная частица se", ua: "зворотна частка se" }
        },
        {
          type: "multiple-choice",
          question: { en: "Oni _____ (worry) za tebe. (They worry about you.)", ru: "Oni _____ za tebe. (Они беспокоятся о тебе.)", ua: "Oni _____ za tebe. (Вони турбуються про тебе.)" },
          options: ["se brinu", "brinu se", "brinu", "se brine"],
          correctAnswer: "se brinu"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Danas se odmaram.'", ru: "Переведите: 'Danas se odmaram.'", ua: "Перекладіть: 'Danas se odmaram.'" },
          correctAnswer: { en: "Today I am resting", ru: "Сегодня я отдыхаю", ua: "Сьогодні я відпочиваю" }
        },
        {
          type: "multiple-choice",
          question: { en: "Gdje _____ (did you rest - singular masc)? (Where did you rest?)", ru: "Gdje _____ ? (Где ты отдыхал?)", ua: "Де _____ ? (Де ти відпочивав?)" },
          options: ["si se odmarao", "se odmarao si", "odmarao si se", "si odmarao se"],
          correctAnswer: "si se odmarao"
        },
        {
          type: "multiple-choice",
          question: { en: "Djeca _____ (are playing) u parku. (The children are playing in the park.)", ru: "Djeca _____ u parku. (Дети играют в парке.)", ua: "Djeca _____ u parku. (Діти граються в парку.)" },
          options: ["se igraju", "igraju se", "igraju", "se igra"],
          correctAnswer: "se igraju"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Moram _____ (shower). (I have to shower.)", ru: "Заполните: Moram se _____ . (Я должен принять душ.)", ua: "Заповніть: Moram se _____ . (Я мушу прийняти душ.)" },
          correctAnswer: "tuširati",
          hint: { en: "shower (infinitive)", ru: "принять душ (tuširati)", ua: "прийняти душ (tuširati)" }
        },
        {
          type: "multiple-choice",
          question: { en: "Mi _____ (agree) s tobom. (We agree with you.)", ru: "Mi _____ s tobom. (Мы согласны с тобой.)", ua: "Mi _____ s tobom. (Ми згодні з тобою.)" },
          options: ["se slažemo", "slažemo se", "slažemo", "se slaže"],
          correctAnswer: "se slažemo"
        },
        {
          type: "multiple-choice",
          question: { en: "On _____ (is shaving). (He is shaving.)", ru: "On _____ . (Он бреется.)", ua: "On _____ . (Він голиться.)" },
          options: ["se brije", "brije se", "brije", "se briju"],
          correctAnswer: "se brije"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Ona _____ (smješkati se - smiles) cijelo vrijeme.", ru: "Заполните: Ona _____ smješka cijelo vrijeme.", ua: "Заповніть: Ona _____ smješka cijelo vrijeme." },
          correctAnswer: "se",
          hint: { en: "reflexive pronoun clitic", ru: "se", ua: "se" }
        },
        {
          type: "translation",
          question: { en: "Translate: 'Kako se osjećaš?'", ru: "Переведите: 'Kako se osjećaš?'", ua: "Перекладіть: 'Kako se osjećaš?'" },
          correctAnswer: { en: "How do you feel?", ru: "Как ты себя чувствуешь?", ua: "Як ти почуваєшся?" }
        }
      ]
    }
  },
  // LEVEL B1
  // ==========================================
  {
    id: "b1-grammar-1",
    type: "grammar",
    level: "B1",
    title: {
      en: "Glagolski aspekt (Verb Aspect)",
      ru: "Вид глагола (Glagolski aspekt)",
      ua: "Вид дієслова (Glagolski aspekt)"
    },
    content: {
      description: {
        en: "Understand the perfective and imperfective verb aspects in Croatian.",
        ru: "Поймите совершенный и несовершенный виды глаголов в хорватском языке.",
        ua: "Зрозумійте доконаний та недоконаний види дієслів у хорватській мові."
      },
      sections: [
        {
          title: { en: "Verb Aspects", ru: "Виды глаголов", ua: "Види дієслів" },
          text: {
            en: "Croatian verbs come in pairs: imperfective (ongoing/repeated) and perfective (completed/one-time).",
            ru: "Хорватские глаголы образуют видовые пары: несовершенный вид (длящееся/повторяющееся действие) и совершенный (завершенное/однократное).",
            ua: "Хорватські дієслова утворюють видові пари: недоконаний вид (тривала/повторювана дія) та доконаний (завершена/одноразова)."
          },
          examples: [
            { en: "pisati (impf.) / napisati (pf.) — to write", ru: "pisati (нсв) / napisati (св) — писать / написать", ua: "pisati (нсв) / napisati (св) — писати / написати" },
            { en: "čitati (impf.) / pročitati (pf.) — to read", ru: "čitati (нсв) / pročitati (св) — читать / прочитать", ua: "čitati (нсв) / pročitati (св) — читати / прочитати" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Jučer sam _____ cijelu knjigu. (Yesterday I read the whole book.) — completed", ru: "Jučer sam _____ cijelu knjigu. (Вчера я прочитал всю книгу.) — завершенное", ua: "Jučer sam _____ cijelu knjigu. (Вчора я прочитав всю книгу.) — завершена" },
          options: ["pročitao", "čitao", "čitam", "pročitam"],
          correctAnswer: "pročitao"
        },
        {
          type: "multiple-choice",
          question: { en: "Svaki dan _____ novine. (Every day I read newspapers.) — habitual", ru: "Svaki dan _____ novine. (Каждый день я читаю газеты.) — регулярное", ua: "Svaki dan _____ novine. (Щодня я читаю газети.) — регулярна" },
          options: ["čitam", "pročitam", "pročitao sam", "čitat ću"],
          correctAnswer: "čitam"
        },
        {
          type: "multiple-choice",
          question: { en: "He usually writes letters, but today he wrote one in ten minutes.", ru: "Обычно он пишет письмо, но сегодня он написал его за 10 минут.", ua: "Зазвичай він пише листа, але сьогодні він написав його за 10 хвилин." },
          options: [
            "Obično piše pismo... danas ga je napisao",
            "Obično napiše pismo... danas ga je pisao",
            "Obično pisao pismo... danas ga je piše",
            "Obično piše pismo... danas ga piše"
          ],
          correctAnswer: "Obično piše pismo... danas ga je napisao"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Jučer sam _____ (pisati, impf. past masc) zadaću tri sata.", ru: "Заполните: Jučer sam _____ (pisati, нсв прош. м.р.) zadaću tri sata.", ua: "Заповніть: Jučer sam _____ (pisati, недок. в. мин. ч. ч.р.) zadaću tri sata." },
          correctAnswer: "pisao",
          hint: { en: "Use masculine past form", ru: "Мужской род прош. вр.", ua: "Чоловічий рід мин. ч." }
        },
        {
          type: "multiple-choice",
          question: { en: "Moram _____ (naučiti, perfective) ove riječi do sutra. (I must learn these words by tomorrow.)", ru: "Moram _____ (naučiti, св) ove riječi do sutra.", ua: "Moram _____ (naučiti, док. в.) ove riječi do sutra." },
          options: ["naučiti", "učiti", "naučim", "učim"],
          correctAnswer: "naučiti"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Brzo sam _____ (popiti, pf. past masc) kavu. (I quickly drank the coffee.)", ru: "Заполните: Brzo sam _____ (popiti, св прош. м.р.) kavu.", ua: "Заповніть: Brzo sam _____ (popiti, док. в. мин. ч. ч.р.) kavu." },
          correctAnswer: "popio",
          hint: { en: "perfective past form of popiti", ru: "форма св от popiti", ua: "форма док. в. від popiti" }
        },
        {
          type: "translation",
          question: { en: "Translate: 'Oni uvijek piju kavu.'", ru: "Переведите: 'Oni uvijek piju kavu.'", ua: "Перекладіть: 'Oni uvijek piju kavu.'" },
          correctAnswer: { en: "They always drink coffee.", ru: "Они всегда пьют кофе.", ua: "Вони завжди п'ють каву." }
        },
        {
          type: "multiple-choice",
          question: { en: "_____ sam pismo pola sata. (I was writing a letter for half an hour. - ongoing)", ru: "_____ sam pismo pola sata. (Я писал письмо полчаса.)", ua: "_____ sam pismo pola sata. (Я писав листа півгодини.)" },
          options: ["Pisao", "Napisao", "Pišem", "Napišem"],
          correctAnswer: "Pisao"
        }
      ]
    }
  },
  {
    id: "b1-grammar-2",
    type: "grammar",
    level: "B1",
    title: {
      en: "Zemlje, jezici i Futur II (Countries, Languages & Future II)",
      ru: "Страны, языки и Futur II",
      ua: "Країни, мови та Futur II"
    },
    content: {
      description: {
        en: "Learn names of countries, languages and master Future II (Futur drugi) in subordinate clauses.",
        ru: "Изучите названия стран, языков и освойте Futur II в придаточных предложениях.",
        ua: "Вивчіть назви країн, мов та опануйте Futur II у підрядних реченнях."
      },
      sections: [
        {
          title: { en: "Future II", ru: "Будущее время II", ua: "Майбутній час II" },
          text: {
            en: "Future II is used in conditional and temporal subordinate clauses to describe an action that will happen before another future action. Formed with: budem, budeš, bude, budemo, budete, budu + active participle (-o, -la, -lo).",
            ru: "Futur II используется в придаточных времени и условия, выражая действие, которое завершится перед другим будущим действием. Образуется: budem, budeš... + причастие.",
            ua: "Futur II використовується у підрядних реченнях часу та умови, виражаючи дію, що завершиться перед іншою майбутньою дією. Утворюється: budem, budeš... + дієприкметник."
          },
          examples: [
            { en: "Ako budem imao vremena, doći ću. (If I have time, I will come.)", ru: "Ako budem imao vremena, doći ću. (Если у меня будет время, я приду.)", ua: "Ako budem imao vremena, doći ću. (Якщо у мене буде час, я прийду.)" },
            { en: "Njemačka - njemački (Germany - German)", ru: "Njemačka - njemački (Германия - немецкий)", ua: "Njemačka - njemački (Німеччина - німецька)" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Ako _____ (budem imao) vremena, čitat ću knjigu. (If I have time...)", ru: "Ako _____ vremena, čitat ću knjigu.", ua: "Ako _____ vremena, čitat ću knjigu." },
          options: ["budem imao", "ću imati", "imam", "bih imao"],
          correctAnswer: "budem imao"
        },
        {
          type: "multiple-choice",
          question: { en: "U Njemačkoj se govori _____ jezik. (In Germany, people speak...)", ru: "U Njemačkoj se govori _____ jezik.", ua: "U Німеччині говорять _____ мовою." },
          options: ["njemački", "engleski", "hrvatski", "talijanski"],
          correctAnswer: "njemački"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Kad _____ (budu stigli, they arrive), javit će se. (When they arrive, they will check in.)", ru: "Заполните: Kad _____ na stanicu, javit će se. (Когда они прибудут на станцию...)", ua: "Заповніть: Kad _____ na stanicu, javit će se. (Коли вони прибудуть на станцію...)" },
          correctAnswer: "budu stigli",
          hint: { en: "Future II plural of stići", ru: "Futur II мн.ч. от stići", ua: "Futur II мн. від stići" }
        },
        {
          type: "multiple-choice",
          question: { en: "Francuska -> _____ jezik.", ru: "Francuska -> _____ jezik.", ua: "Francuska -> _____ jezik." },
          options: ["francuski", "talijanski", "španjolski", "njemački"],
          correctAnswer: "francuski"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Ako ti _____ (budeš učio), položit ćeš ispit. (If you study...)", ru: "Заполните: Ako ti _____ (budeš učio), položit ćeš ispit.", ua: "Заповніть: Ako ti _____ (budeš učio), položit ćeš ispit." },
          correctAnswer: "budeš učio",
          hint: { en: "Future II for 'ti' (masc)", ru: "Futur II для 'ti' (м.р.)", ua: "Futur II для 'ti' (ч.р.)" }
        },
        {
          type: "multiple-choice",
          question: { en: "In Italy, they speak:", ru: "В Италии говорят на:", ua: "В Італії говорять:" },
          options: ["talijanski", "engleski", "hrvatski", "njemački"],
          correctAnswer: "talijanski"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Ako budemo znali odgovor, reći ćemo vam.'", ru: "Переведите: 'Ako budemo znali odgovor, reći ćemo vam.'", ua: "Перекладіть: 'Ako budemo znali odgovor, reći ćemo vam.'" },
          correctAnswer: { en: "If we know the answer, we will tell you.", ru: "Если мы будем знать ответ, мы скажем вам.", ua: "Якщо ми будемо знати відповідь, ми скажемо вам." }
        },
        {
          type: "multiple-choice",
          question: { en: "Ukrajina -> _____ jezik.", ru: "Ukrajina -> _____ jezik.", ua: "Ukrajina -> _____ jezik." },
          options: ["ukrajinski", "ruski", "poljski", "češki"],
          correctAnswer: "ukrajinski"
        }
      ]
    }
  },
  {
    id: "b1-grammar-3",
    type: "grammar",
    level: "B1",
    title: {
      en: "Perfekt i prepozicije s genitivom (Past Tense & Genitive Prepositions)",
      ru: "Прошедшее время и предлоги родительного падежа",
      ua: "Минулий час та прийменники з родовим відмінком"
    },
    content: {
      description: {
        en: "Master past tense (perfekt) combinations and learn prepositions that require Genitive: bez, kod, blizu, iz.",
        ru: "Освойте конструкции прошедшего времени (перфект) и предлоги родительного падежа: bez, kod, blizu, iz.",
        ua: "Опануйте конструкції минулого часу (перфект) та прийменники родового відмінка: bez, kod, blizu, iz."
      },
      sections: [
        {
          title: { en: "Past Tense and Genitive", ru: "Прошедшее время и родительный падеж", ua: "Минулий час та родовий відмінок" },
          text: {
            en: "Perfekt = short form of 'biti' + active participle (eg. ja sam radio, mi smo jeli). Prepositions requiring genitive:\n- bez (without) -> bez šećera\n- kod (at/to) -> kod prijatelja\n- blizu (near) -> blizu mora\n- iz (from) -> iz ureda",
            ru: "Перфект = краткая форма 'biti' + причастие. Предлоги родительного падежа:\n- bez (без) -> bez šećera\n- kod (у/к) -> kod prijatelja\n- blizu (около) -> blizu mora\n- iz (из) -> iz ureda",
            ua: "Перфект = коротка форма 'biti' + дієприкметник. Прийменники родового відмінка:\n- bez (без) -> bez šećera\n- kod (у/до) -> kod prijatelja\n- blizu (поблизу) -> blizu mora\n- iz (з) -> iz ureda"
          },
          examples: [
            { en: "Jučer sam išao kod liječnika. (Yesterday I went to the doctor.)", ru: "Jučer sam išao kod liječnika. (Вчера я ходил к врачу.)", ua: "Jučer sam išao kod liječnika. (Вчора я ходив до лікаря.)" },
            { en: "Kava bez šećera. (Coffee without sugar.)", ru: "Kava bez šećera. (Кофе без сахара.)", ua: "Kava bez šećera. (Кава без цукру.)" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Jučer smo _____ (gledati - plural) film. (Yesterday we watched a movie.)", ru: "Jučer smo _____ film. (Вчера мы смотрели фильм.)", ua: "Вчора ми _____ фільм." },
          options: ["gledali", "gledao", "gledala", "gledati"],
          correctAnswer: "gledali"
        },
        {
          type: "multiple-choice",
          question: { en: "Pijem čaj bez _____ (šećer - genitive). (I drink tea without sugar.)", ru: "Pijem čaj bez _____ (šećer).", ua: "П'ю чай без _____ (šećer)." },
          options: ["šećera", "šećer", "šećeru", "šećerom"],
          correctAnswer: "šećera"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Danas idem kod _____ (doktor - genitive). (Today I go to the doctor.)", ru: "Заполните: Danas idem kod _____ (doktor). (Сегодня я иду к врачу.)", ua: "Заповніть: Danas idem kod _____ (doktor). (Сьогодні я йду до лікаря.)" },
          correctAnswer: "doktora",
          hint: { en: "Genitive singular of doktor", ru: "Родительный падеж от doktor", ua: "Родовий відмінок від doktor" }
        },
        {
          type: "multiple-choice",
          question: { en: "Živim blizu _____ (more - genitive). (I live near the sea.)", ru: "Živim blizu _____ (more). (Я живу около моря.)", ua: "Живу поблизу _____ (more)." },
          options: ["mora", "more", "moru", "morem"],
          correctAnswer: "mora"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Oni su _____ (putovati, past plural masc) u Zadar. (They traveled to Zadar.)", ru: "Заполните: Oni su _____ u Zadar. (Они ездили в Задар.)", ua: "Заповніть: Oni su _____ u Zadar. (Вони їздили до Задара.)" },
          correctAnswer: "putovali",
          hint: { en: "Past participle plural of putovati", ru: "Причастие мн.ч. от putovati", ua: "Дієприкметник мн. від putovati" }
        },
        {
          type: "multiple-choice",
          question: { en: "Dolazim iz _____ (škola - genitive). (I come from school.)", ru: "Dolazim iz _____ (škola). (Я иду из школы.)", ua: "Йду з _____ (škola)." },
          options: ["škole", "školu", "školi", "školom"],
          correctAnswer: "škole"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Kava bez mlijeka, molim.'", ru: "Переведите: 'Kava bez mlijeka, molim.'", ua: "Перекладіть: 'Kava bez mlijeka, molim.'" },
          correctAnswer: { en: "Coffee without milk, please.", ru: "Кофе без молока, пожалуйста.", ua: "Кава без молока, будь ласка." }
        },
        {
          type: "multiple-choice",
          question: { en: "Jesi li _____ (čuti - singular masc) vijest? (Did you hear the news?)", ru: "Jesi li _____ vijest? (Ты слышал новость?)", ua: "Чи ти _____ новину?" },
          options: ["čuo", "čula", "čuli", "čuti"],
          correctAnswer: "čuo"
        }
      ]
    }
  },
  {
    id: "b1-reading-2",
    type: "reading",
    level: "B1",
    title: {
      en: "Kvaliteta života i ekologija (Quality of Life & Ecology)",
      ru: "Качество жизни и экология (Kvaliteta života)",
      ua: "Якість життя та екологія (Kvaliteta života)"
    },
    content: {
      description: {
        en: "Read a short text about environmental protection and standard of living in Croatia.",
        ru: "Прочитайте короткий текст об охране окружающей среды и качестве жизни в Хорватии.",
        ua: "Прочитайте про проблеми екології та стандарти якості життя в Хорватії."
      },
      sections: [
        {
          title: { en: "Ecology in Croatia", ru: "Экология в Хорватии", ua: "Екологія в Хорватії" },
          text: {
            en: "Zaštita okoliša i ekologija postaju sve važnije teme u Hrvatskoj. Zemlja je poznata po čistom moru, brojnim nacionalnim parkovima i bogatoj biološkoj raznolikosti. Međutim, brzi turistički razvoj i zbrinjavanje otpada predstavljaju velike izazove. Mnogi gradovi potiču razvrstavanje otpada i recikliranje. Građani također shvaćaju da očuvanje prirode izravno utječe na kvalitetu života i na zdravlje svih nas.",
            ru: "Охрана окружающей среды и экология становятся всё более важными темами в Хорватии. Страна известна своим чистым морем, многочисленными национальными парками и богатым биоразнообразием. Однако быстрое развитие туризма и утилизация отходов представляют собой серьезные вызовы. Многие города стимулируют сортировку мусора и переработку. Граждане также понимают, что сохранение природы напрямую влияет на качество жизни и здоровье всех нас.",
            ua: "Охорона довкілля та екологія стають дедалі важливішими темами в Хорватії. Країна відома своїм чистим морем, численними національними парками та багатим біорізноманіттям. Проте швидкий розвиток туризму та утилізація відходів є серйозними викликами. Багато міст стимулюють сортування сміття та переробку. Громадяни також розуміють, що збереження природи безпосередньо впливає на якість життя та здоров'я всіх нас."
          }
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Why is Croatia famous in terms of nature?", ru: "Чем знаменита Хорватия в плане природы?", ua: "Чим відома Хорватія в плані природи?" },
          options: ["Čisto more i parkovi", "Velike pustinje", "Zagađene rijeke", "Visoke zgrade"],
          correctAnswer: "Čisto more i parkovi"
        },
        {
          type: "multiple-choice",
          question: { en: "What represents a big challenge for ecology in Croatia?", ru: "Что представляет собой вызов для экологии Хорватии?", ua: "Що є викликом для екології Хорватії?" },
          options: ["Turistički razvoj i otpad", "Sadnja stabala", "Nedostatak automobila", "Velike kiše"],
          correctAnswer: "Turistički razvoj i otpad"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Zaštita _____ (environment - genitive) je važna.", ru: "Заполните: Zaštita _____ je važna. (Охрана окружающей среды важна.)", ua: "Заповніть: Zaštita _____ je važna. (Охорона довкілля важлива.)" },
          correctAnswer: "okoliša",
          hint: { en: "Genitive singular of okoliš", ru: "Родительный падеж от okoliš", ua: "Родовий відмінок від okoliš" }
        },
        {
          type: "multiple-choice",
          question: { en: "What are cities encouraging citizens to do?", ru: "К чему города призывают граждан?", ua: "До чого міста закликають громадян?" },
          options: ["Razvrstavanje otpada", "Kupovinu plastike", "Bacanje smeća na ulicu", "Vožnju automobila"],
          correctAnswer: "Razvrstavanje otpada"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Očuvanje prirode utječe na _____ (quality - accusative) života.", ru: "Заполните: Očuvanje prirode utječe na _____ života. (Влияет на качество жизни.)", ua: "Заповніть: Očuvanje prirode utječe na _____ života. (Впливає на якість життя.)" },
          correctAnswer: "kvalitetu",
          hint: { en: "Accusative of kvaliteta", ru: "Винительный падеж от kvaliteta", ua: "Знахідний відмінок від kvaliteta" }
        },
        {
          type: "multiple-choice",
          question: { en: "What does 'razvrstavanje' mean?", ru: "Что означает 'razvrstavanje'?", ua: "Що означає 'razvrstavanje'?" },
          options: ["sorting", "buying", "throwing", "burning"],
          correctAnswer: "sorting"
        },
        {
          type: "translation",
          question: { en: "Translate: 'očuvanje prirode'", ru: "Переведите: 'očuvanje prirode'", ua: "Перекладіть: 'očuvanje prirode'" },
          correctAnswer: { en: "preservation of nature", ru: "сохранение природы", ua: "збереження природи" }
        },
        {
          type: "multiple-choice",
          question: { en: "What is 'otpad' in English?", ru: "Что такое 'otpad'?", ua: "Що таке 'otpad'?" },
          options: ["waste/garbage", "resource", "factory", "water"],
          correctAnswer: "waste/garbage"
        }
      ]
    }
  },
  {
    id: "b1-reading-3",
    type: "reading",
    level: "B1",
    title: {
      en: "Priprema za ispit B1: Znanje jezika (B1 Exam Prep)",
      ru: "Подготовка к экзамену B1: Знание языка",
      ua: "Підготовка до іспиту B1: Знання мови"
    },
    content: {
      description: {
        en: "Practice grammar and vocabulary questions typical for the B1 level Croatian proficiency exam.",
        ru: "Потренируйтесь на грамматических и лексических вопросах, типичных для языкового экзамена уровня B1.",
        ua: "Потренуйтеся на граматичних та лексичних питаннях, типових для іспиту B1."
      },
      sections: [
        {
          title: { en: "Exam Context", ru: "Контекст экзамена", ua: "Контекст іспиту" },
          text: {
            en: "On a B1 language exam, you will encounter reading comprehension tasks, grammar completion (filling in correct endings or pronouns), and vocabulary matching. Let's practice standard queries.",
            ru: "На экзамене уровня B1 вы столкнетесь с заданиями на чтение, грамматическими упражнениями (подстановка падежных окончаний, местоимений) и лексическими тестами.",
            ua: "На іспиті рівня B1 ви зустрінете завдання на розуміння тексту, граматичні вправи (вставка відмінкових закінчень або займенників) та лексичні тести."
          }
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Oni se _____ (tuširati, present plural). (They are showering.)", ru: "Oni se _____ (tuširati, наст. вр. мн.ч.).", ua: "Вони _____ (tuširati, теп. ч. мн.)." },
          options: ["tuširaju", "tušira", "tuširamo", "tuširaš"],
          correctAnswer: "tuširaju"
        },
        {
          type: "multiple-choice",
          question: { en: "Želim razgovarati s _____ (direktor - instrumental). (I want to speak with the director.)", ru: "Želim razgovarati s _____ (direktor).", ua: "Хочу поговорити з _____ (direktor)." },
          options: ["direktorom", "direktora", "direktoru", "direktore"],
          correctAnswer: "direktorom"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Idem u _____ (trgovina - accusative). (I go to the store.)", ru: "Заполните: Idem u _____ (trgovina). (Я иду в магазин.)", ua: "Заповніть: Idem u _____ (trgovina). (Я йду в магазин.)" },
          correctAnswer: "trgovinu",
          hint: { en: "Feminine singular accusative", ru: "Винительный падеж ж.р.", ua: "Знахідний відмінок ж.р." }
        },
        {
          type: "multiple-choice",
          question: { en: "Ovo je kuća _____ (moj - genitive feminine singular) bake. (This is the house of my grandmother.)", ru: "Ovo je kuća _____ bake.", ua: "Це будинок _____ бабусі." },
          options: ["moje", "mojoj", "moju", "mojom"],
          correctAnswer: "moje"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Kupio sam knjigu _____ (prijatelj - dative). (I bought a book for my friend.)", ru: "Заполните: Kupio sam knjigu _____ (prijatelj). (Я купил книгу другу.)", ua: "Заповніть: Kupio sam knjigu _____ (prijatelj). (Я купив книгу другові.)" },
          correctAnswer: "prijatelju",
          hint: { en: "Dative singular of prijatelj", ru: "Дательный падеж от prijatelj", ua: "Давальний відмінок від prijatelj" }
        },
        {
          type: "multiple-choice",
          question: { en: "Koji je dan nakon nedjelje?", ru: "Какой день идет после воскресенья?", ua: "Який день йде після неділі?" },
          options: ["ponedjeljak", "utorak", "srijeda", "subota"],
          correctAnswer: "ponedjeljak"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Oni su u kući.'", ru: "Переведите: 'Oni su u kući.'", ua: "Перекладіть: 'Oni su u kući.'" },
          correctAnswer: { en: "They are in the house.", ru: "Они в доме.", ua: "Вони в будинку." }
        },
        {
          type: "multiple-choice",
          question: { en: "Nemam _____ (novac - genitive). (I don't have money.)", ru: "Nemam _____ (novac).", ua: "Не маю _____ (novac)." },
          options: ["novca", "novac", "novcu", "novcem"],
          correctAnswer: "novca"
        }
      ]
    }
  },

  // ==========================================
  // LEVEL B2
  // ==========================================
  {
    id: "b2-grammar-1",
    type: "grammar",
    level: "B2",
    title: {
      en: "Pasivni stan i glagolske imenice (Passive & Verbal Nouns)",
      ru: "Пассивный залог и отглагольные имена (Pasivni stan)",
      ua: "Відносини, пасивний стан та отглагольные іменники (Pasivni stan)"
    },
    content: {
      description: {
        en: "Learn how to use passive voice constructions and form verbal nouns in B2 level Croatian.",
        ru: "Научитесь использовать пассивный залог и образовывать отглагольные существительные на уровне B2.",
        ua: "Навчіться використовувати пасивний стан та утворювати віддієслівні іменники на рівні B2."
      },
      sections: [
        {
          title: { en: "Passive and Verbal Nouns", ru: "Пассивный залог и отглагольные имена", ua: "Пасивний стан та віддієслівні іменники" },
          text: {
            en: "Passive voice is formed either reflexively (se + present active, eg. knjiga se čita) or descriptively (biti + passive participle, eg. knjiga je pročitana). Verbal nouns are formed using the suffix -nje with verbs (učiti -> učenje, pisati -> pisanje).",
            ru: "Пассивный залог образуется либо возвратным способом (se + глагол, например, kuća se gradi), либо описательным (biti + страдательное причастие, например, projekt je završen). Отглагольные существительные образуются с суффиксом -nje.",
            ua: "Пасивний стан утворюється або зворотним способом (se + дієслово, наприклад, kuća se gradi), або описовим (biti + пасивний дієприкметник, наприклад, projekt je završen). Віддієслівні іменники утворюються з суфіксом -nje."
          },
          examples: [
            { en: "Učenje jezika je zanimljivo. (Learning a language is interesting.)", ru: "Učenje jezika je zanimljivo. (Изучение языка интересно.)", ua: "Učenje jezika je zanimljivo. (Вивчення мови цікаве.)" },
            { en: "Ova knjiga je tiskana u Zagrebu. (This book was printed in Zagreb.)", ru: "Ova knjiga je tiskana u Zagrebu. (Эта книга была напечатана в Загребе.)", ua: "Ova knjiga je tiskana u Zagrebu. (Ця книга була надрукована в Загребі.)" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Kuća se _____ (is being built) u centru grada.", ru: "Kuća se _____ (строится) в центре города.", ua: "Будинок _____ (будується) в центрі міста." },
          options: ["gradi", "graditi", "gradila", "grade"],
          correctAnswer: "gradi"
        },
        {
          type: "multiple-choice",
          question: { en: "_____ (learning) jezika traži vremena. (Learning a language takes time.)", ru: "_____ (изучение) языка требует времени.", ua: "_____ (вивчення) мови потребує часу." },
          options: ["Učenje", "Učiti", "Učenik", "Učenost"],
          correctAnswer: "Učenje"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Projekt je _____ (finish - passive participle masc). (The project is completed.)", ru: "Заполните: Projekt je _____ (završiti - страд. причастие). (Проект завершен.)", ua: "Заповніть: Projekt je _____ (završiti - пасивний дієприкметник). (Проект завершено.)" },
          correctAnswer: "završen",
          hint: { en: "Masculine passive form of završiti", ru: "Форма м.р. от završiti", ua: "Форма ч.р. від završiti" }
        },
        {
          type: "multiple-choice",
          question: { en: "_____ (writing) ovog pisma je bilo teško.", ru: "_____ (написание) этого письма было трудным.", ua: "_____ (написання) цього листа було важким." },
          options: ["Pisanje", "Pisati", "Pisac", "Pismeno"],
          correctAnswer: "Pisanje"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Čaša je _____ (slomiti - passive participle fem). (The glass is broken.)", ru: "Заполните: Čaša je _____ (slomiti - страд. причастие ж.р.). (Чашка сломана.)", ua: "Заповніть: Čaša je _____ (slomiti - пасивний дієприкметник ж.р.). (Чашка зламана.)" },
          correctAnswer: "slomljena",
          hint: { en: "Feminine passive form of slomiti", ru: "Форма ж.р. от slomiti", ua: "Форма жіночого роду від slomiti" }
        },
        {
          type: "multiple-choice",
          question: { en: "Pismo je _____ (napisati - passive participle neuter). (The letter was written.)", ru: "Pismo je _____ (napisati - страд. причастие ср.р.). (Письмо написано.)", ua: "Лист був _____ (napisati - пасивний дієприкметник с.р.). (Лист написаний.)" },
          options: ["napisano", "napisana", "napisan", "napisani"],
          correctAnswer: "napisano"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Čitanje knjiga je korisno.'", ru: "Переведите: 'Čitanje knjiga je korisno.'", ua: "Перекладіть: 'Čitanje knjiga je korisno.'" },
          correctAnswer: { en: "Reading books is useful.", ru: "Чтение книг полезно.", ua: "Читання книг корисне." }
        },
        {
          type: "multiple-choice",
          question: { en: "Ugovor je _____ (potpisati - passive participle masc). (The contract is signed.)", ru: "Ugovor je _____ (potpisati - страд. причастие м.р.). (Договор подписан.)", ua: "Договір був _____ (potpisati - пасивний дієприкметник ч.р.). (Договір підписаний.)" },
          options: ["potpisan", "potpisana", "potpisano", "potpisani"],
          correctAnswer: "potpisan"
        }
      ]
    }
  },
  {
    id: "b2-grammar-2",
    type: "grammar",
    level: "B2",
    title: {
      en: "Kondicional I i II (Conditionals I & II)",
      ru: "Условное наклонение I и II (Kondicional)",
      ua: "Умовний спосіб I та II (Kondicional)"
    },
    content: {
      description: {
        en: "Learn how to formulate present and past hypotheticals using Conditional I and II in Croatian.",
        ru: "Научитесь формулировать гипотезы в настоящем и прошлом с помощью условного наклонения I и II.",
        ua: "Навчіться формулювати гіпотези в теперішньому та минулому за допомогою умовного способу I та II."
      },
      sections: [
        {
          title: { en: "Conditionals", ru: "Условное наклонение", ua: "Умовний спосіб" },
          text: {
            en: "Conditional I (present hypothetical): clitic of 'biti' in conditional (bih, bi, bi, bismo, biste, bi) + active participle. E.g. Kupio bih auto (I would buy a car).\nConditional II (past hypothetical): Conditional I of 'biti' (bio bih, bio bi...) + active participle. E.g. Bio bih došao (I would have come).",
            ru: "Conditional I (настоящее): частицы bih, bi... + причастие. Пример: Kupio bih auto (Я бы купил машину).\nConditional II (прошлое): условная форма глагола 'biti' + причастие. Пример: Bio bih došao (Я бы пришел).",
            ua: "Conditional I (теперішнє): частки bih, bi... + дієприкметник. Приклад: Kupio bih auto (Я б купив машину).\nConditional II (минуле): умовна форма дієслова 'biti' + дієприкметник. Приклад: Bio bih došao (Я б прийшов)."
          },
          examples: [
            { en: "Da imam novca, putovao bih. (If I had money, I would travel.)", ru: "Da imam novca, putovao bih. (Если бы у меня были деньги, я бы путешествовал.)", ua: "Da imam novca, putovao bih. (Якби у мене були гроші, я б подорожував.)" },
            { en: "Da sam znao, bio bih ti pomogao. (If I had known, I would have helped you.)", ru: "Da sam znao, bio bih ti pomogao. (Если бы я знал, я бы тебе помог.)", ua: "Da sam znao, bio bih ti pomogao. (Якби я знав, я б тобі поміг.)" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Ja _____ (would buy) kuću.", ru: "Ja _____ kuću. (Я бы купил дом.)", ua: "Я _____ kuću. (Я б купив будинок.)" },
          options: ["bih kupio", "bi kupio", "bismo kupili", "sam kupio"],
          correctAnswer: "bih kupio"
        },
        {
          type: "multiple-choice",
          question: { en: "Oni _____ (would go) u kino.", ru: "Oni _____ u kino. (Они бы пошли в кино.)", ua: "Вони _____ u kino. (Вони б пішли в кіно.)" },
          options: ["bi išli", "bismo išli", "bih išao", "su išli"],
          correctAnswer: "bi išli"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Da sam to čuo ranije, _____ (I would have come - Conditional II masc).", ru: "Заполните: Da sam to čuo ranije, _____ (я бы пришел - Conditional II м.р.).", ua: "Заповніть: Da sam to čuo ranije, _____ (я б прийшов - Conditional II ч.р.)." },
          correctAnswer: "bio bih došao",
          hint: { en: "Use past conditional for 'ja'", ru: "Форма прошедшего условного времени", ua: "Форма минулого умовного часу" }
        },
        {
          type: "multiple-choice",
          question: { en: "Mi _____ (would help) vam.", ru: "Mi _____ vam. (Мы бы помогли вам.)", ua: "Ми _____ vam. (Ми б допомогли вам.)" },
          options: ["bismo pomogli", "bi pomogli", "bih pomogao", "biste pomogli"],
          correctAnswer: "bismo pomogli"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Da si me zvao, _____ (I would have helped - Conditional II masc).", ru: "Заполните: Da si me zvao, _____ (я бы помог - Conditional II м.р.).", ua: "Заповніть: Da si me zvao, _____ (я б допоміг - Conditional II ч.р.)." },
          correctAnswer: "bio bih pomogao",
          hint: { en: "I would have helped", ru: "Я бы помог", ua: "Я б допоміг" }
        },
        {
          type: "multiple-choice",
          question: { en: "Da _____ (if you had - past condition) novca, bi li putovao?", ru: "Da _____ novca, bi li putovao? (Если бы у тебя были деньги...)", ua: "Da _____ novca, bi li putovao? (Якби у тебе були гроші...)" },
          options: ["si imao", "imaš", "budeš imao", "imao bi"],
          correctAnswer: "si imao"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Kupio bih auto.'", ru: "Переведите: 'Kupio bih auto.'", ua: "Перекладіть: 'Kupio bih auto.'" },
          correctAnswer: { en: "I would buy a car.", ru: "Я бы купил машину.", ua: "Я б купив машину." }
        },
        {
          type: "multiple-choice",
          question: { en: "Vi _____ (would write) bolje.", ru: "Vi _____ bolje. (Вы бы написали лучше.)", ua: "Ви _____ bolje. (Ви б написали краще.)" },
          options: ["biste pisali", "bismo pisali", "bi pisali", "bih pisao"],
          correctAnswer: "biste pisali"
        }
      ]
    }
  },
  {
    id: "b2-communication-1",
    type: "communication",
    level: "B2",
    title: {
      en: "Robota ta robotočinje (Work & Career)",
      ru: "Работа и карьера (Radno okruženje)",
      ua: "Робота та робоче оточення (Radno okruženje)"
    },
    content: {
      description: {
        en: "Learn professional vocabulary, idioms, and how to discuss your career in Croatian.",
        ru: "Выучите профессиональную лексику, идиомы и научитесь рассказывать о своей карьере на хорватском.",
        ua: "Вивчіть професійну лексику, ідіоми та навчіться розповідати про кар'єру хорватською."
      },
      sections: [
        {
          title: { en: "Workplace Phrases", ru: "Фразы на рабочем месте", ua: "Фрази на робочому місці" },
          text: {
            en: "Essential professional terms:\n- radni staž (work experience/years)\n- plaća (salary)\n- natječaj za posao (job opening/vacancy)\n- dati otkaz (to resign/quit)\n- napredovati (to be promoted)",
            ru: "Ключевые карьерные термины:\n- radni staž (стаж работы)\n- plaća (зарплата)\n- natječaj za posao (конкурс на вакансию)\n- dati otkaz (уволиться)\n- napredovati (продвигаться по службе)",
            ua: "Ключові кар'єрні терміни:\n- radni staž (стаж роботи)\n- plaća (зарплата)\n- natječaj za posao (конкурс на вакансію)\n- dati otkaz (звільнитися)\n- napredovati (просуватися по службі)"
          },
          examples: [
            { en: "Želim se prijaviti na natječaj. (I want to apply for the vacancy.)", ru: "Želim se prijaviti na natječaj. (Я хочу подать заявку на вакансию.)", ua: "Želim se prijaviti na natječaj. (Я хочу подати заявку на вакансію.)" },
            { en: "Dobio sam povišicu. (I got a raise.)", ru: "Dobio sam povišicu. (Я получил прибавку.)", ua: "Dobio sam povišicu. (Я отримав надбавку.)" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "What does 'plaća' mean?", ru: "Что значит 'plaća'?", ua: "Що означає 'plaća'?" },
          options: ["salary (зарплата)", "workplace", "colleague", "interview"],
          correctAnswer: "salary (зарплата)"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Tražim novi posao.'", ru: "Переведите: 'Tražim novi posao.'", ua: "Перекладіть: 'Tražim novi posao.'" },
          correctAnswer: { en: "I am looking for a new job.", ru: "Я ищу новую работу.", ua: "Я шукаю нову роботу." }
        },
        {
          type: "multiple-choice",
          question: { en: "How do you say 'to resign/quit a job'?", ru: "Как сказать 'уволиться'?", ua: "Як сказати 'звільнитися з роботи'?" },
          options: ["dati otkaz", "dati povišicu", "zaposliti se", "raditi prekovremeno"],
          correctAnswer: "dati otkaz"
        },
        {
          type: "translation",
          question: { en: "Translate to Croatian: 'I have five years of work experience.'", ru: "Переведите на хорватский: 'У меня пять лет опыта/стажа.'", ua: "Перекладіть на хорватську: 'Я маю п'ять років досвіду/стажу.'" },
          correctAnswer: "Imam pet godina radnog staža."
        },
        {
          type: "multiple-choice",
          question: { en: "What is 'poslovni sastanak'?", ru: "Что такое 'poslovni sastanak'?", ua: "Що таке 'poslovni sastanak'?" },
          options: ["business meeting", "work contract", "salary raise", "job vacancy"],
          correctAnswer: "business meeting"
        },
        {
          type: "multiple-choice",
          question: { en: "How do you say 'colleague/co-worker'?", ru: "Как сказать 'коллега'?", ua: "Як сказати 'колега'?" },
          options: ["kolega", "direktor", "radnik", "klijent"],
          correctAnswer: "kolega"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Dobio sam _____ (raise). (I got a raise.)", ru: "Заполните: Dobio sam _____ (raise). (Я получил прибавку.)", ua: "Заповніть: Dobio sam _____ (raise). (Я отримав надбавку.)" },
          correctAnswer: "povišicu",
          hint: { en: "povišicu", ru: "povišicu", ua: "povišicu" }
        },
        {
          type: "translation",
          question: { en: "Translate to Croatian: 'The contract is signed.'", ru: "Переведите на хорватский: 'Контракт подписан.'", ua: "Перекладіть на хорватську: 'Контракт підписаний.'" },
          correctAnswer: "Ugovor je potpisan."
        }
      ]
    }
  },

  // ==========================================
  // LEVEL C1
  // ==========================================
  {
    id: "c1-grammar-1",
    type: "grammar",
    level: "C1",
    title: {
      en: "Složene rečenice i veznici (Complex Sentences)",
      ru: "Сложные предложения и союзы (Složene rečenice)",
      ua: "Складні речення та сполучники (Složene rečenice)"
    },
    content: {
      description: {
        en: "Master complex syntactic structures, conditionals, and concessive conjunctions.",
        ru: "Освойте сложные синтаксические структуры, условные предложения и уступительные союзы.",
        ua: "Опануйте складні синтаксичні структури, умовні речення, допустові сполучники."
      },
      sections: [
        {
          title: { en: "Complex Conjunctions", ru: "Сложные союзы", ua: "Складні сполучники" },
          text: {
            en: "Advanced clauses require precise conjunctions:\n- Concessive (although): iako, premda, mada\n- Causal (since/because): budući da, jer, zato što\n- Temporal (as soon as): čim, nakon što\n- Conditional: ukoliko (formal equivalent of ako)",
            ru: "Сложные предложения требуют точных союзов:\n- Уступительные (хотя): iako, premda, mada\n- Причинные (поскольку): budući da, jer\n- Временные (как только): čim, nakon što\n- Условные: ukoliko (если - книжный вариант)",
            ua: "Складні речення вимагають точних сполучників:\n- Допустові (хоча): iako, premda, mada\n- Причинові (оскільки): budući da, jer\n- Часові (як тільки): čim, nakon što\n- Умовні: ukoliko (якщо - книжковий варіант)"
          },
          examples: [
            { en: "Iako je padala kiša, išli smo u šetnju. (Although it was raining, we went for a walk.)", ru: "Iako je padala kiša, išli smo u šetnju. (Хотя шел дождь, мы пошли гулять.)", ua: "Iako je padala kiša, išli smo u šetnju. (Хоча йшов дощ, ми пішли гуляти.)" },
            { en: "Budući da je projekt završen, možemo se odmoriti. (Since the project is finished, we can rest.)", ru: "Budući da je projekt završen, možemo se odmoriti. (Поскольку проект завершен, мы можем отдохнуть.)", ua: "Budući da je projekt završen, možemo se odmoriti. (Оскільки проєкт завершено, ми можемо відпочити.)" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "_____ je bio bolestan, došao je na posao. (Although he was sick...)", ru: "_____ je bio bolestan, došao je na posao. (Хотя он был болен...)", ua: "_____ je bio bolestan, došao je на роботу." },
          options: ["Iako", "Zato što", "Budući da", "Jer"],
          correctAnswer: "Iako"
        },
        {
          type: "multiple-choice",
          question: { en: "_____ (Since/Because) nemamo dovoljno informacija, odgađamo sastanak.", ru: "_____ nemamo dovoljno informacija, odgađamo sastanak. (Поскольку у нас нет...)", ua: "_____ nemamo dovoljno informacija, odgađamo sastanak. (Оскільки ми не маємо...)" },
          options: ["Budući da", "Iako", "Premda", "Čim"],
          correctAnswer: "Budući da"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Javit ću vam se _____ (as soon as) stignem u ured.", ru: "Заполните: Javit ću vam se _____ stignem u ured. (Как только приеду в офис...)", ua: "Заповніть: Javit ću vam se _____ stignem u ured. (Як тільки приїду в офіс...)" },
          correctAnswer: "čim",
          hint: { en: "conjunction meaning 'as soon as'", ru: "союз со значением 'как только'", ua: "сполучник зі значенням 'як тільки'" }
        },
        {
          type: "multiple-choice",
          question: { en: "_____ (If - formal) potpišete ugovor, obveze stupaju na snagu.", ru: "_____ potpišete ugovor, obveze stupaju na snagu. (В случае если вы подпишете...)", ua: "_____ potpišete ugovor, obveze stupaju na snagu. (У разі якщо ви підпишете...)" },
          options: ["Ukoliko", "Premda", "Jer", "Mada"],
          correctAnswer: "Ukoliko"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Nije položio ispit _____ (although) je puno učio.", ru: "Заполните: Nije položio ispit _____ je puno učio. (Хотя много учился.)", ua: "Заповніть: Nije položio ispit _____ je puno učio. (Хоча багато вчився.)" },
          correctAnswer: "premda",
          hint: { en: "concessive conjunction starting with p-", ru: "уступительный союз на p-", ua: "допустовий сполучник на p-" }
        },
        {
          type: "multiple-choice",
          question: { en: "_____ (After) smo potpisali ugovor, započeli smo s radom.", ru: "_____ smo potpisali ugovor, započeli smo s radom. (После того как мы...)", ua: "_____ smo potpisali ugovor, započeli smo s radom. (Після того як ми...)" },
          options: ["Nakon što", "Prije nego što", "Jer", "Ukoliko"],
          correctAnswer: "Nakon što"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Ukoliko ne dođete, javite nam.'", ru: "Переведите: 'Ukoliko ne dođete, javite nam.'", ua: "Перекладіть: 'Ukoliko ne dođete, javite nam.'" },
          correctAnswer: { en: "If you do not come, let us know.", ru: "Если вы не придете, дайте нам знать.", ua: "Якщо ви не прийдете, дайте нам знати." }
        },
        {
          type: "multiple-choice",
          question: { en: "Ona nije došla _____ (because) je morala raditi prekovremeno.", ru: "Ona nije došla _____ je morala raditi prekovremeno.", ua: "Вона не прийшла _____ мусила працювати понаднормово." },
          options: ["jer", "iako", "premda", "čim"],
          correctAnswer: "jer"
        }
      ]
    }
  },
  {
    id: "c1-grammar-2",
    type: "grammar",
    level: "C1",
    title: {
      en: "Zavisne rečenice i napredni veznici (Subordinate Clauses)",
      ru: "Придаточные предложения и продвинутые союзы",
      ua: "Підрядні речення та складні сполучники"
    },
    content: {
      description: {
        en: "Deepen your understanding of relative clauses, conditional statements, and advanced conjunctions.",
        ru: "Углубите понимание относительных придаточных предложений, условных утверждений и продвинутых союзов.",
        ua: "Поглибте розуміння відносних підрядних речень, складних умовних конструкцій та сполучників."
      },
      sections: [
        {
          title: { en: "Relative and Conditional Clauses", ru: "Относительные и условные придаточные", ua: "Відносні та умовні підрядні речення" },
          text: {
            en: "Focus on:\n- Relative pronoun: koji, čiji, kakav. Remember: čiji (whose) agrees in gender/number with the noun following it.\n- Conjunctions of manner: kao da (as if), tako da (so that).\n- Conditional markers: da + past (past impossible conditions), kad bi + conditional (unlikely present conditions).",
            ru: "В центре внимания:\n- Относительное местоимение čiji (чей) согласуется в роде/числе с последующим существительным.\n- Союзы образа действия: kao da (как будто), tako da (так что).\n- Условные конструкции: da + прош.вр. (нереальное условие в прошлом).",
            ua: "У центрі уваги:\n- Відносний займенник čiji (чий) узгоджується в роді/числі з наступним іменником.\n- Сполучники способу дії: kao da (ніби/начебто), tako da (так що).\n- Умовні конструкції: da + мин.ч. (нереальна умова в минулому)."
          },
          examples: [
            { en: "Izgleda kao da će kiša. (It looks as if it will rain.)", ru: "Izgleda kao da će kiša. (Выглядит так, будто пойдет дождь.)", ua: "Izgleda kao da će kiša. (Виглядає так, ніби піде дощ.)" },
            { en: "Znam čovjeka čiji sin studira kemiju. (I know the man whose son studies chemistry.)", ru: "Znam čovjeka čiji sin studira kemiju. (Я знаю человека, чей сын изучает химию.)", ua: "Znam Znam čovjeka čiji sin studira kemiju. (Я знаю чоловіка, чий син вивчає хімію.)" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "Upoznao sam djevojku _____ (whose) otac radi u vladi.", ru: "Upoznao sam djevojku _____ (чей) otac radi u vladi.", ua: "Я познайомився з дівчиною, _____ (чий) батько працює в уряді." },
          options: ["čiji", "čije", "čija", "čijeg"],
          correctAnswer: "čiji"
        },
        {
          type: "multiple-choice",
          question: { en: "Govori o tom problemu _____ (as if) sve zna.", ru: "Govori o tom problemu _____ (как будто) sve zna.", ua: "Він говорить про цю проблему, _____ (ніби) все знає." },
          options: ["kao da", "tako da", "zato što", "budući da"],
          correctAnswer: "kao da"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Da sam to znao, _____ (I would have reacted - masc). (If I had known, I would have reacted.)", ru: "Заполните: Da sam to znao, _____ (я бы отреагировал - м.р.).", ua: "Заповніть: Da sam to znao, _____ (я б відреагував - ч.р.)." },
          correctAnswer: "bio bih reagirao",
          hint: { en: "Use past conditional I of reagirati", ru: "Форма прошедшего условного времени", ua: "Форма минулого умовного часу" }
        },
        {
          type: "multiple-choice",
          question: { en: "Knjiga _____ (which - accusative feminine) sam čitao je izvrsna.", ru: "Knjiga _____ sam čitao je izvrsna. (Книга, которую я читал...)", ua: "Книга, _____ я читав, чудова." },
          options: ["koju", "koji", "koje", "kojom"],
          correctAnswer: "koju"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Govorio je tiho _____ (so that) ga nitko ne čuje.", ru: "Заполните: Govorio je tiho _____ ga nitko ne čuje. (Так, чтобы его никто не услышал.)", ua: "Заповніть: Govorio je tiho _____ ga nitko ne čuje. (Так, щоб його ніхто не почув.)" },
          correctAnswer: "tako da",
          hint: { en: "so that", ru: "так что / чтобы (tako da)", ua: "так що / щоб (tako da)" }
        },
        {
          type: "multiple-choice",
          question: { en: "Da _____ (if we had) vremena, posjetili bismo vas.", ru: "Da _____ vremena, posjetili bismo vas. (Если бы у нас было время...)", ua: "Da _____ vremena, posjetili bismo vas. (Якби ми мали час...)" },
          options: ["smo imali", "imamo", "budemo imali", "imali bismo"],
          correctAnswer: "smo imali"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Znam ženu čija kćer živi u Londonu.'", ru: "Переведите: 'Znam ženu čija kćer živi u Londonu.'", ua: "Перекладіть: 'Znam ženu čija kćer živi u Londonu.'" },
          correctAnswer: { en: "I know the woman whose daughter lives in London.", ru: "Я знаю женщину, чья дочь живет в Лондоне.", ua: "Я знаю жінку, чия дочка живе в Лондоні." }
        },
        {
          type: "multiple-choice",
          question: { en: "Ukoliko _____ (you need) pomoć, slobodno se javite.", ru: "Ukoliko _____ pomoć, slobodno se javite. (Если вам нужна...)", ua: "Ukoliko _____ pomoć, slobodno se javite. (Якщо вам потрібна...)" },
          options: ["trebate", "biste trebali", "budete trebali", "treba"],
          correctAnswer: "trebate"
        }
      ]
    }
  },

  // ==========================================
  // LEVEL C2
  // ==========================================
  {
    id: "c2-grammar-1",
    type: "grammar",
    level: "C2",
    title: {
      en: "Frazemi i stilske figure (Idioms & Stylistics)",
      ru: "Фразеологизмы и стилистика (Frazemi)",
      ua: "Фразеологізми та стилістичні фігури (Frazemi)"
    },
    content: {
      description: {
        en: "Learn idiomatic expressions, figures of speech, and advanced literary stylistics in Croatian.",
        ru: "Изучите идиоматические выражения, фигуры речи и продвинутую художественную стилистику в хорватском.",
        ua: "Вивчіть ідіоматичні вирази, фігури мовлення та просунуту художню стилістику в хорватській."
      },
      sections: [
        {
          title: { en: "Croatian Idioms", ru: "Хорватские фразеологизмы", ua: "Хорватські фразеологізми" },
          text: {
            en: "Native-level proficiency involves mastership of idioms:\n- mlatiti praznu slamu (talk in vain / waste time)\n- Bogu iza nogu (in the middle of nowhere / very far)\n- baciti koplje u trnje (to give up / surrender)\n- trčati pred rudo (to jump to conclusions / rush things)",
            ru: "Владение языком на уровне носителя включает знание фразеологизмов:\n- mlatiti praznu slamu (молотить пустую солому / болтать попусту)\n- Bogu iza nogu (у черта на куличках / очень далеко)\n- baciti koplje u trnje (бросить копье в терновник / сдаться)\n- trčati pred rudo (бежать впереди телеги / торопить события)",
            ua: "Володіння мовою на рівні носія включає знання фразеологізмів:\n- mlatiti praznu slamu (товкти воду в ступі / базікати марно)\n- Bogu iza nogu (у біса на болоті / дуже далеко)\n- baciti koplje u trnje (кинути списа в тернину / здатися)\n- trčati pred rudo (бігти попереду батька в пекло / квапити події)"
          },
          examples: [
            { en: "Živi Bogu iza nogu. (He lives in the middle of nowhere.)", ru: "Živi Bogu iza nogu. (Он живет у черта на куличках.)", ua: "Živi Bogu iza nogu. (Він живе у біса на болоті.)" },
            { en: "Nemoj baciti koplje u trnje. (Don't give up.)", ru: "Nemoj baciti koplje u trnje. (Не сдавайся.)", ua: "Nemoj baciti koplje u trnje. (Не здавайся.)" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "What does 'mlatiti praznu slamu' mean?", ru: "Что означает 'mlatiti praznu slamu'?", ua: "Що означає 'mlatiti praznu slamu'?" },
          options: [
            "pričati bez smisla i koristi (talk in vain)",
            "raditi koristan poljoprivredni posao",
            "prikupiti puno pšenice",
            "pomoći prijatelju u nevolji"
          ],
          correctAnswer: "pričati bez smisla i koristi (talk in vain)"
        },
        {
          type: "multiple-choice",
          question: { en: "Where is a place described as 'Bogu iza nogu'?", ru: "Какое место описывают как 'Bogu iza nogu'?", ua: "Яке місце описують як 'Bogu iza nogu'?" },
          options: ["vrlo udaljeno i zabačeno mjesto (very remote)", "mjesto blizu crkve", "centar grada", "planinski vrh"],
          correctAnswer: "vrlo udaljeno i zabačeno mjesto (very remote)"
        },
        {
          type: "fill-blank",
          question: { en: "Complete the idiom: Nemoj baciti _____ u trnje! (Don't give up!)", ru: "Заполните: Nemoj baciti _____ u trnje! (Не сдавайся!)", ua: "Заповніть: Nemoj baciti _____ u trnje! (Не здавайся!)" },
          correctAnswer: "koplje",
          hint: { en: "spear", ru: "копье (koplje)", ua: "спис (koplje)" }
        },
        {
          type: "multiple-choice",
          question: { en: "What does 'trčati pred rudo' refer to?", ru: "К чему относится 'trčati pred rudo'?", ua: "До чого відноситься 'trčati pred rudo'?" },
          options: [
            "brzopleto donositi odluke (rushing things)",
            "sudjelovati u utrci",
            "pomagati u radu",
            "bježati od opasnosti"
          ],
          correctAnswer: "brzopleto donositi odluke (rushing things)"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: Dosta smo mlatili praznu _____! (We have wasted enough time talking!)", ru: "Заполните: Dosta smo mlatili praznu _____! (Хватит молотить пустую солому!)", ua: "Заповніть: Dosta smo mlatili praznu _____! (Досить товкти воду в ступі!)" },
          correctAnswer: "slamu",
          hint: { en: "straw", ru: "солому (slamu)", ua: "солому (slamu)" }
        },
        {
          type: "multiple-choice",
          question: { en: "Identify the hyperbole:", ru: "Найдите гиперболу:", ua: "Знайдіть гіперболу:" },
          options: [
            "Tisuću puta sam ti rekao! (I told you a thousand times!)",
            "Ona je tiha kao miš. (Quiet as a mouse.)",
            "Vrijeme leti. (Time flies.)",
            "On je dobar čovjek."
          ],
          correctAnswer: "Tisuću puta sam ti rekao! (I told you a thousand times!)"
        },
        {
          type: "translation",
          question: { en: "Translate: 'Oni žive Bogu iza nogu.'", ru: "Переведите: 'Oni žive Bogu iza nogu.'", ua: "Перекладіть: 'Oni žive Bogu iza nogu.'" },
          correctAnswer: { en: "They live in the middle of nowhere.", ru: "Они живут у черта на куличках.", ua: "Вони живуть у біса на болоті." }
        },
        {
          type: "multiple-choice",
          question: { en: "What stylistic device is 'miris vlage šapuće o prošlosti' (smell of moisture whispers of the past)?", ru: "Какое стилистическое средство используется в 'miris vlage šapuće o prošlosti'?", ua: "Який стилістичний засіб використано в 'miris vlage šapuće o prošlosti'?" },
          options: ["personifikacija (personification)", "hiperbola (hyperbole)", "metonimija (metonymy)", "oksimoron (oxymoron)"],
          correctAnswer: "personifikacija (personification)"
        }
      ]
    }
  },
  {
    id: "c2-communication-1",
    type: "communication",
    level: "C2",
    title: {
      en: "Diskusija o društvu (Advanced Discussion)",
      ru: "Дискуссия об обществе (Advanced Discussion)",
      ua: "Дискусія про суспільство (Advanced Discussion)"
    },
    content: {
      description: {
        en: "Engage in advanced socio-cultural arguments, debates, and express opinions on structural topics.",
        ru: "Участвуйте в сложных социально-культурных дискуссиях, дебатах и выражайте мнение на абстрактные темы.",
        ua: "Беріть участь у складних соціально-культурних дискусіях, дебатах та висловлюйте думку на складні теми."
      },
      sections: [
        {
          title: { en: "Debating Phrases", ru: "Фразы для дебатов", ua: "Фрази для дебатів" },
          text: {
            en: "Expressing complex stances:\n- S jedne strane... s druge strane... (On one hand... on the other hand...)\n- Smatram da je ključni problem u... (I consider the key problem to be in...)\n- Ne slažem se u potpunosti s tim stajalištem. (I do not fully agree with that stance.)\n- Unatoč suprotnim tvrdnjama... (Despite opposite assertions...)",
            ru: "Выражение сложных позиций:\n- S jedne strane... s druge strane... (С одной стороны... с другой стороны...)\n- Smatram da je ključni problem u... (Я считаю, что ключевая проблема в...)\n- Ne slažem se u potpunosti s tim stajalištem. (Я не совсем согласен с этой точкой зрения.)",
            ua: "Висловлення складних позицій:\n- S jedne strane... s druge strane... (З одного боку... з іншого боку...)\n- Smatram da je ključni problem u... (Я вважаю, що ключова проблема у...)\n- Ne slažem se u potpunosti s tim stajalištem. (Я не зовсім згоден з цією точкою зору.)"
          },
          examples: [
            { en: "Smatram da tehnologija otuđuje ljude. (I believe technology alienates people.)", ru: "Smatram da tehnologija otuđuje ljude. (Я считаю, что технологии отдаляют людей.)", ua: "Smatram da tehnologija otuđuje ljude. (Я вважаю, що технології віддаляють людей.)" }
          ]
        }
      ],
      exercises: [
        {
          type: "multiple-choice",
          question: { en: "How do you say 'on one hand... on the other hand...'?", ru: "Как сказать 'с одной стороны... с другой стороны...'?", ua: "Як сказати 'з одного боку... з іншого боку...'?" },
          options: [
            "S jedne strane... s druge strane...",
            "Prije svega... nakon svega...",
            "Bez sumnje... bez odgode...",
            "Uglavnom... u potpunosti..."
          ],
          correctAnswer: "S jedne strane... s druge strane..."
        },
        {
          type: "translation",
          question: { en: "Translate: 'Ne slažem se s tim stajalištem.'", ru: "Переведите: 'Ne slažem se s tim stajalištem.'", ua: "Перекладіть: 'Ne slažem se s tim stajalištem.'" },
          correctAnswer: { en: "I do not agree with that stance.", ru: "Я не согласен с этой точкой зрения.", ua: "Я не згоden з цією точкою зору." }
        },
        {
          type: "multiple-choice",
          question: { en: "What does the verb 'otuđiti' mean?", ru: "Что означает глагол 'otuđiti'?", ua: "Що означає дієслово 'otuđiti'?" },
          options: ["to alienate (отчуждать)", "to unite", "to purchase", "to construct"],
          correctAnswer: "to alienate (отчуждать)"
        },
        {
          type: "translation",
          question: { en: "Translate to Croatian: 'I consider that the key problem is global warming.'", ru: "Переведите на хорватский: 'Я считаю, что ключевая проблема — глобальное потепление.'", ua: "Перекладіть на хорватську: 'Я вважаю, що ключова проблема — глобальне потепління.'" },
          correctAnswer: "Smatram da je ključni problem globalno zatopljenje."
        },
        {
          type: "multiple-choice",
          question: { en: "What is 'ravnopravnost'?", ru: "Что такое 'ravnopravnost'?", ua: "Що таке 'ravnopravnost'?" },
          options: ["equality / equal rights", "injustice", "sovereignty", "development"],
          correctAnswer: "equality / equal rights"
        },
        {
          type: "multiple-choice",
          question: { en: "How do you express 'without a doubt' in Croatian?", ru: "Как выразить 'без сомнения' по-хорватски?", ua: "Як виразити 'без сумніву' хорватською?" },
          options: ["bez sumnje", "bez obzira", "bez odgode", "bez razloga"],
          correctAnswer: "bez sumnje"
        },
        {
          type: "fill-blank",
          question: { en: "Complete: To ovisi o _____ (opinion - locative) većine. (That depends on the opinion of the majority.)", ru: "Заполните: To ovisi o _____ većine. (Это зависит от мнения большинства.)", ua: "Заповніть: To ovisi o _____ većine. (Це залежить від думки більшості.)" },
          correctAnswer: "mišljenju",
          hint: { en: "Locative of mišljenje", ru: "Местный падеж от mišljenje", ua: "Місцевий відмінок від mišljenje" }
        },
        {
          type: "translation",
          question: { en: "Translate to Croatian: 'We must preserve cultural heritage.'", ru: "Переведите на хорватский: 'Мы должны сохранить культурное наследие.'", ua: "Перекладіть на хорватську: 'Ми повинні зберегти культурну спадщину.'" },
          correctAnswer: "Moramo očuvati kulturnu baštinu."
        }
      ]
    }
  },
];
