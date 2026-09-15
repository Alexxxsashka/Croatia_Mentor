"use client";
import {useState, useEffect, useRef, type ReactNode} from 'react';
import {useLocale} from 'next-intl';
import {useSession, signOut} from 'next-auth/react';
import {Link, usePathname, useRouter} from '@/i18n/navigation';
import {Route, LayoutDashboard, BookOpen, Languages, Shapes, Sparkles, Award, Settings2, Shield, Sun, Moon, ArrowRight, LogOut} from 'lucide-react';
import {MenuCloseIcon} from '@/components/ui/animated-state-icons';
import {NewsBell} from '@/components/news-bell';
import {useTheme} from '@/components/theme/ThemeProvider';
import {DepthEffects} from './depth-effects';
import {translate} from './translations';

const navigation = [
  ['/dashboard','Панель',LayoutDashboard], ['/lessons','Мой курс',Route],
  ['/grammar','Грамматика',BookOpen],
  ['/vocabulary','Словарь',Languages], ['/games','Практика',Shapes],
  ['/ai-chat','AI-наставник',Sparkles],
] as const;

const PRESET_AVATARS_MAP: Record<string, string> = {
  "🦊": "linear-gradient(135deg, #fb923c, #ef4444)",
  "🐼": "linear-gradient(135deg, #334155, #0f172a)",
  "🐱": "linear-gradient(135deg, #facc15, #f97316)",
  "🧙‍♂️": "linear-gradient(135deg, #6366f1, #9333ea)",
  "🚀": "linear-gradient(135deg, #22d3ee, #3b82f6)",
  "🌟": "linear-gradient(135deg, #fde047, #f59e0b)",
  "🧑‍🎓": "linear-gradient(135deg, #3b82f6, #4f46e5)",
  "🦉": "linear-gradient(135deg, #34d399, #0d9488)",
};

function ShellAvatar({ image, name, email }: { image?: string | null; name?: string | null; email?: string | null }) {
  const initial = (name || email || 'U').slice(0, 1).toUpperCase();

  if (image) {
    if (PRESET_AVATARS_MAP[image]) {
      return (
        <span
          style={{
            background: PRESET_AVATARS_MAP[image],
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            borderRadius: '50%',
            userSelect: 'none',
          }}
        >
          {image}
        </span>
      );
    }

    return (
      <img
        src={image}
        alt={name || 'Avatar'}
        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = `https://api.dicebear.com/7.x/bottts/svg?seed=${encodeURIComponent(initial)}`;
        }}
      />
    );
  }

  return (
    <span
      style={{
        background: 'linear-gradient(135deg, #d2aa73, #b9905f)',
        color: '#101719',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        fontSize: '13px',
        borderRadius: '50%',
      }}
    >
      {initial}
    </span>
  );
}

function Brand(){
  return (
    <Link href="/" className="brand">
      <span className="brand-symbol">
        <img
          src="/logos/logo-variant-3.jpg"
          alt="Croatia Mentor"
          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
        />
      </span>
      <span>Croatian<span className="brand-second">Mentor</span></span>
    </Link>
  );
}

export function ReferenceShell({children}: {children:ReactNode}) {
  const pathname=usePathname(), router=useRouter(), locale=useLocale();
  const {data:session}=useSession();
  const {theme,toggleTheme}=useTheme();
  const [menu,setMenu]=useState(false);
  const sidebarRef=useRef<HTMLElement>(null);
  const [progress,setProgress]=useState<{totalXP:number;currentStreak:number}|null>(null);
  const t=(key:string)=>translate(key,locale==='ua'?'uk':locale);
  const landing=pathname==='/' || pathname==='/orange' || pathname==='/v2';
  const publicPage=landing || ['/sign-in','/sign-up','/contacts','/learn-croatian'].includes(pathname);
  const admin=(session?.user as {role?:string}|undefined)?.role==='admin';
  useEffect(()=>{
    if(!session?.user?.id)return;
    const controller=new AbortController();
    fetch('/api/progress',{signal:controller.signal}).then(r=>r.ok?r.json():null).then(d=>{if(d?.progress)setProgress(d.progress)}).catch(()=>{});
    return ()=>controller.abort();
  },[session?.user?.id,pathname]);
  useEffect(()=>{
    if(!menu)return;
    const previousFocus=document.activeElement as HTMLElement|null;
    const focusable=()=>Array.from(sidebarRef.current?.querySelectorAll<HTMLElement>('a[href],button:not([disabled])')||[]).filter(el=>el.getClientRects().length);
    focusable()[0]?.focus();
    const onKey=(e:KeyboardEvent)=>{
      if(e.key==='Escape')setMenu(false);
      if(e.key==='Tab'){
        const items=focusable(),first=items[0],last=items.at(-1);
        if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus()}
        else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus()}
      }
    };
    document.addEventListener('keydown',onKey);
    const previous=document.body.style.overflow;
    document.body.style.overflow='hidden';
    return ()=>{document.removeEventListener('keydown',onKey);document.body.style.overflow=previous;previousFocus?.focus()};
  },[menu]);
  const actions=<div className="header-actions">
    {!publicPage&&session&&progress&&<div className="top-stats"><span>{progress.totalXP} XP</span><span>{progress.currentStreak} {t('дней')}</span></div>}
    <select className="language" aria-label={t('Язык интерфейса')} value={locale} onChange={e=>router.replace(pathname+window.location.search,{locale:e.target.value as 'en'|'ru'|'ua'})}>
      <option value="en">ENG</option><option value="ru">RU</option><option value="ua">UA</option>
    </select>
    <button className="icon-button" onClick={toggleTheme} aria-label={theme==='dark'?'Light theme':'Dark theme'}>{theme==='dark'?<Sun size={18}/>:<Moon size={18}/>}</button>
    <NewsBell/>
    {session ? (
      <Link href="/profile" className="avatar" aria-label={t('Профиль')}>
        <ShellAvatar
          image={session.user?.image}
          name={session.user?.name}
          email={session.user?.email}
        />
      </Link>
    ) : (
      <Link href="/sign-in" className="header-login">
        {t('Войти')}<ArrowRight size={15}/>
      </Link>
    )}
  </div>;
  return <div className={`reference-design ${theme==='orange-white'?'light':''} ${landing?'reference-home':'reference-interior'}`}>
    <DepthEffects landing={landing}/><a className="skip-link" href="#site-content">{t('Продолжить')}</a>
    {publicPage?<>
      <header className={`public-header ${!landing?'reference-static-header':''}`}><Brand/><nav className="public-nav"><Link href="/learn-croatian">{t('Как это работает')}</Link><Link href={session ? "/lessons" : "/sign-in"}>{t('Программа')}</Link><Link href={session ? "/games" : "/sign-in"}>{t('Практика')}</Link><Link href="/contacts">{t('Контакты')}</Link></nav>{actions}</header>
      <div id="site-content" className={landing?'':'reference-public-content legacy-content'}>{children}</div>
      <footer>
        <div><Brand/><p>{t('Язык для жизни, а не только для учебника.')}</p></div>
        <nav>
          <Link href={session ? "/lessons" : "/sign-in"}>{t('Мой курс')}</Link>
          <Link href="/contacts">{t('Контакты')}</Link>
          <Link href="/learn-croatian">{t('Как это работает')}</Link>
          <a href="/privacy_policy.pdf" target="_blank" rel="noopener noreferrer">{t('Политика конфиденциальности')}</a>
          <a href="/terms_of_service.pdf" target="_blank" rel="noopener noreferrer">{t('Условия использования')}</a>
        </nav>
        <div className="footer-bottom">
          <span>© 2026 Croatian Mentor. {t('Все права защищены.')}</span>
          <span>{t('В своём ритме.')}</span>
        </div>
      </footer>
    </>:<div className="app-shell">
      {menu&&<button className="sidebar-shade" aria-label={t('Закрыть')} onClick={()=>setMenu(false)}/>}
      <aside ref={sidebarRef} id="study-navigation" className={`sidebar ${menu?'open':''}`}>
        <Brand/><button className="mobile-close icon-button" onClick={()=>setMenu(false)} aria-label={t('Закрыть')}><MenuCloseIcon size={20} active={true}/></button>
        <span className="sidebar-label">{t('Ваш учебный маршрут')}</span>
        <nav aria-label={t('Мой курс')}>{navigation.map(([url,label,Icon])=><Link key={url} href={url} onClick={()=>setMenu(false)} className={pathname===url||pathname.startsWith(url+'/')?'selected':''} aria-current={pathname===url?'page':undefined}><Icon size={20} strokeWidth={1.6}/><span>{t(label)}</span></Link>)}</nav>
        <div className="sidebar-bottom"><Link href="/achievements" onClick={()=>setMenu(false)}><Award size={20}/>{t('Достижения')}</Link><Link href="/profile" onClick={()=>setMenu(false)}><Settings2 size={20}/>{t('Настройки')}</Link>{admin&&<Link href="/admin" onClick={()=>setMenu(false)}><Shield size={20}/>{t('Админ-панель')}</Link>}
          {session&&<button className="reference-signout" onClick={()=>signOut({callbackUrl:`/${locale}`})}><LogOut size={18}/>{t('Выйти')}</button>}
          <div className="plan-mini"><Route size={27}/><p>{t('Один маленький шаг сегодня.')}<br/><strong>{t('В своём ритме.')}</strong></p><Link href="/placement-test" onClick={()=>setMenu(false)}>{t('Уровень')}<ArrowRight size={15}/></Link></div>
        </div>
      </aside>
      <div className="workspace">
        <header className="app-header"><button className="icon-button mobile-menu" aria-label="Menu" aria-expanded={menu} aria-controls="study-navigation" onClick={()=>setMenu(!menu)}><MenuCloseIcon size={22} active={menu}/></button><div className="header-context">{t('Один маленький шаг сегодня.')}</div>{actions}</header>
        <main id="site-content" className="app-main legacy-content">{children}</main>
        <div className="workspace-footer">
          <div className="workspace-footer-legal">
            <span>© 2026 Croatian Mentor</span>
            <span className="dot-sep">•</span>
            <a href="/privacy_policy.pdf" target="_blank" rel="noopener noreferrer">{t('Политика конфиденциальности')}</a>
            <span className="dot-sep">•</span>
            <a href="/terms_of_service.pdf" target="_blank" rel="noopener noreferrer">{t('Условия использования')}</a>
          </div>
          <span>{t('В своём ритме.')}</span>
        </div>
      </div>
    </div>}
  </div>;
}
