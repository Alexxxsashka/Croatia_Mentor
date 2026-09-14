"use client";
import { MountainScene } from './mountain-scene';
import { useLocale } from "next-intl";
import { useSession } from "next-auth/react";
import { translate } from "./translations";
import { ReferenceLink as A, ReferenceIcon as Icon } from "./primitives";

const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
const levelNames = {
  ru: ['Первые слова', 'Повседневная жизнь', 'Свобода общения', 'Новые горизонты', 'Точность мысли', 'Без границ'],
  en: ['First words', 'Everyday life', 'Speak freely', 'New horizons', 'Precise expression', 'Without limits'],
  uk: ['Перші слова', 'Повсякденне життя', 'Свобода спілкування', 'Нові горизонти', 'Точність думки', 'Без меж'],
  hr: ['Prve riječi', 'Svakodnevni život', 'Sloboda razgovora', 'Novi horizonti', 'Precizno izražavanje', 'Bez granica']
};

export default function ReferenceLanding() {
  const { data: session } = useSession();
  let locale = useLocale();
  locale = locale === 'ua' ? 'uk' : locale;
  const t = (key) => translate(key, locale);

  const handleDiscoveryScroll = (e) => {
    e.preventDefault();
    const target = document.getElementById('journey');
    if (!target) return;

    if (typeof window !== 'undefined' && window.__lenis) {
      window.__lenis.scrollTo(target, { offset: 0, duration: 1.2 });
    } else {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <main>
        <section className="hero">
          <MountainScene />
          <div className="hero-content">
            <div className="hero-pre">
              <span className="small-line" />Bok. Dobro došli.
            </div>
            <h1>
              {t('Ваш путь к хорватскому.')}
              <span>{t('В своём ритме.')}</span>
            </h1>
            <p>
              {t('Изучайте хорватский через понятные уроки, живые ситуации и практику, которая подходит именно вам.')}
            </p>
            <div className="hero-buttons">
              <A to="sign-up" className="btn">
                {t('Начать обучение')}<Icon size={18} />
              </A>
              <A to={session ? "dashboard" : "sign-in"} className="watch-link">
                <span><Icon name="Play" size={14} /></span>
                {t('Начать')}
              </A>
            </div>
            <div className="hero-meta">
              <span>A1 — C2</span>
              <span>{t('Язык для жизни, а не только для учебника.')}</span>
            </div>
          </div>
          <div className="hero-route">
            <span>01</span>
            <div />
            <span className="muted">06</span>
          </div>
          <div className="hero-bottom">
            <span>HRVATSKA · 44°16′ N, 15°16′ E</span>
            <a href="#journey" onClick={handleDiscoveryScroll}>
              {t('Ваше следующее открытие')}
              <Icon name="ArrowDown" size={17} />
            </a>
          </div>
        </section>

        <section className="intro-strip">
          <p>{t('От первого bok до уверенного разговора.')}</p>
          <div>
            <span><Icon name="Route" />A1 — C2</span>
            <span><Icon name="Clock3" />5–20 {t('мин')}</span>
            <span><Icon name="Languages" />ENG / RU / UA</span>
          </div>
        </section>

        <section id="journey" className="landing-section journey">
          <div className="section-heading">
            <h2>
              {t('Один маленький шаг сегодня.')}
              <br />
              <span>{t('Целый новый мир завтра.')}</span>
            </h2>
            <A to={session ? "lessons" : "sign-in"} className="text-link">
              {t('Программа')}<Icon />
            </A>
          </div>
          <div className="level-path">
            {levels.map((l, i) => (
              <A to={session ? `lessons?level=${l}` : "sign-in"} key={l}>
                <span className={'level-circle ' + (!i ? 'gold' : '')}>{l}</span>
                <h3>{levelNames[locale][i]}</h3>
                <span>
                  {i === 0 ? t('Начните с малого') : i === 5 ? t('Без границ') : t('Продолжить')}
                  <Icon size={15} />
                </span>
              </A>
            ))}
          </div>
        </section>

        <section className="landing-section practice-story">
          <div className="section-heading">
            <h2>{t('Язык для жизни, а не только для учебника.')}</h2>
            <p>{t('От первого bok до уверенного разговора.')}</p>
          </div>
          <div className="story-grid">
            {[
              ['split', 'Чтение', 'Утро в Сплите', 'city', 'games/reading?id=moja-obitelj-split'],
              ['plitvice', 'Аудирование', 'По тропам Плитвиц', 'forest', 'games/listening?id=plitvice-audio'],
              ['chat', 'AI-наставник', 'Razgovarajmo.', 'sea', 'ai-chat']
            ].map(([id, type, title, cl, taskUrl]) => (
              <A to={session ? taskUrl : "sign-in"} key={id} className={'story-card ' + cl}>
                <span className="story-no">{t(type)}</span>
                <div>
                  <h3>{t(title)}</h3>
                  <span>{t('Начать')}<Icon /></span>
                </div>
              </A>
            ))}
          </div>
        </section>

        <section className="landing-section mentor-story">
          <div className="mentor-copy">
            <Icon name="Sparkles" size={35} />
            <h2>
              {t('AI-наставник')}
              <br />
              <span>Razgovarajmo.</span>
            </h2>
            <p>
              {t('Изучайте хорватский через понятные уроки, живые ситуации и практику, которая подходит именно вам.')}
            </p>
            <A to={session ? "ai-chat" : "sign-in"} className="btn secondary">
              {t('Начать')}<Icon />
            </A>
          </div>
          <div className="chat-preview">
            <span className="online-dot" /> Croatian Mentor <small>AI</small>
            <div className="sample-user">Kako naručiti kavu?</div>
            <div className="sample-ai">
              Bok! Možete reći:<br />
              <strong>„Jednu kavu, molim.”</strong><br />
              <span>
                {locale === 'ru'
                  ? '«Один кофе, пожалуйста». Попробуем вместе?'
                  : locale === 'uk'
                  ? '«Одну каву, будь ласка». Спробуємо разом?'
                  : locale === 'hr'
                  ? 'Sada pokušaj samostalno.'
                  : '“One coffee, please.” Shall we try?'}
              </span>
            </div>
            <div className="mock-compose">
              {t('Напишите сообщение…')}
              <Icon name="ArrowUp" />
            </div>
          </div>
        </section>

        <section className="final-land">
          <h2>
            {t('Ваше следующее открытие')}
            <br />
            <span>{t('Начните с малого')}</span>
          </h2>
          <A to="sign-up" className="btn">
            {t('Начать обучение')}<Icon />
          </A>
          <A to="contacts" className="text-link">
            {t('Будущие возможности')}<Icon size={17} />
          </A>
        </section>
      </main>
    </>
  );
}
