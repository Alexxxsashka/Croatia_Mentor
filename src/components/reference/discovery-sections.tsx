"use client";

import Image from 'next/image';
import {useLocale} from 'next-intl';
import {useSession} from 'next-auth/react';
import {Link} from '@/i18n/navigation';
import {ArrowUpRight, Headphones, BookOpen, MessageCircle} from 'lucide-react';

const copy = {
  ru: {
    eyebrow:'НЕСКОЛЬКО ПРИЧИН НАЧАТЬ', title:'Для вашей настоящей жизни.',
    goals:['Заказать кофе без переводчика','Понять собеседника','Почувствовать себя дома'],
    intro:'Слова становятся вашими, когда вы используете их в знакомых ситуациях.',
    story:'Город становится ближе.', storyText:'Читайте о жизни в Хорватии, слушайте речь и возвращайтесь к словам, которые хочется запомнить.', action:'Выбрать практику',
    process:'У каждого открытия есть следующий шаг.', steps:['Разберитесь в теме','Попробуйте на практике','Вернитесь и закрепите'],
    descriptions:['Уроки и грамматика помогают увидеть логику языка.','Чтение, аудирование и мини-игры превращают знания в действие.','Словарь и повторение дают время освоить новое.'],
    faq:'Прежде чем отправиться в путь.',
    questions:['С чего начать?','Можно ли менять формат практики?','Как работает AI-наставник?'],
    answers:['Начните с уровня A1 или выберите подходящий раздел курса. Карта показывает уроки и ваш прогресс; переходы между уровнями связаны с экзаменами.','Да. В разделе практики есть задания на слова, грамматику, чтение и слух. Выбирайте формат под сегодняшнюю задачу.','В чате можно тренировать диалоги и задавать вопросы о хорватском. Для доступа к наставнику войдите в аккаунт.'],
  },
  ua: {
    eyebrow:'КІЛЬКА ПРИЧИН ПОЧАТИ', title:'Для вашого справжнього життя.', goals:['Замовити каву без перекладача','Зрозуміти співрозмовника','Відчути себе вдома'],intro:'Слова стають вашими, коли ви використовуєте їх у знайомих ситуаціях.',story:'Місто стає ближчим.',storyText:'Читайте про життя в Хорватії, слухайте мовлення та повертайтеся до слів, які хочеться запам’ятати.',action:'Обрати практику',process:'У кожного відкриття є наступний крок.',steps:['Розберіться в темі','Спробуйте на практиці','Поверніться та закріпіть'],descriptions:['Уроки й граматика допомагають побачити логіку мови.','Читання, аудіювання та міні-ігри перетворюють знання на дію.','Словник і повторення дають час опанувати нове.'],faq:'Перш ніж вирушити в дорогу.',questions:['З чого почати?','Чи можна змінювати формат практики?','Як працює AI-наставник?'],answers:['Почніть з A1 або оберіть розділ курсу. Карта показує уроки та прогрес; переходи між рівнями пов’язані з іспитами.','Так. Практика містить вправи на слова, граматику, читання та слух. Обирайте формат під свою задачу.','У чаті можна тренувати діалоги й ставити запитання про хорватську. Для доступу увійдіть в акаунт.'],
  },
  en: {
    eyebrow:'A FEW REASONS TO BEGIN',title:'For your everyday life.',goals:['Order coffee without translating','Understand the person beside you','Feel at home'],intro:'Words become yours when you use them in familiar situations.',story:'A city that feels closer.',storyText:'Read about life in Croatia, listen to the language and revisit the words you want to remember.',action:'Explore practice',process:'Every discovery has a next step.',steps:['Understand the topic','Put it into practice','Return and remember'],descriptions:['Lessons and grammar help you see how the language works.','Reading, listening and mini-games turn knowledge into action.','Vocabulary and repetition give new words time to settle.'],faq:'Before you set off.',questions:['Where should I start?','Can I switch practice formats?','How does the AI mentor work?'],answers:['Start at A1 or choose a course section. The map shows lessons and progress; promotion exams connect the levels.','Yes. Practice includes vocabulary, grammar, reading and listening. Choose the format that fits today’s task.','Use the chat to practise dialogues and ask questions about Croatian. Sign in to access the mentor.'],
  },
};

export function DiscoverySections() {
  const locale = useLocale();
  const c = copy[locale as keyof typeof copy] || copy.en;
  const {data:session} = useSession();
  const icons = [MessageCircle,Headphones,BookOpen];
  return <>
    <section className="landing-section discovery-goals">
      <div><span className="discovery-eyebrow">{c.eyebrow}</span><h2>{c.title}</h2><p>{c.intro}</p></div>
      <div className="goal-lines">{c.goals.map((goal,i)=>{const Icon=icons[i];return <Link data-depth-block key={goal} href={session ? ['/ai-chat','/games/listening','/lessons'][i] : '/sign-in'}><Icon size={23}/><span>{goal}</span><ArrowUpRight size={20}/></Link>;})}</div>
    </section>
    <section className="discovery-photo" data-depth-scene>
      <Image src="/assets/learning/travel.png" alt="" fill sizes="100vw" className="discovery-photo-plane"/>
      <div className="discovery-photo-copy"><span className="discovery-eyebrow">SPLIT · HRVATSKA</span><h2>{c.story}</h2><p>{c.storyText}</p><Link className="btn" href={session?'/games':'/sign-in'}>{c.action}<ArrowUpRight size={19}/></Link></div>
    </section>
    <section className="landing-section discovery-process"><div className="section-heading"><h2>{c.process}</h2><span className="discovery-eyebrow">UČI. VJEŽBAJ. PONOVI.</span></div><ol>{c.steps.map((step,i)=><li key={step} data-depth-block><span className="step-number">0{i+1}</span><h3>{step}</h3><p>{c.descriptions[i]}</p></li>)}</ol></section>
    <section className="landing-section discovery-faq"><h2>{c.faq}</h2><div>{c.questions.map((question,i)=><details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{c.answers[i]}</p></details>)}</div></section>
  </>;
}
