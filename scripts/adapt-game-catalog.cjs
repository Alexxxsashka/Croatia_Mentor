const fs=require('node:fs');
const file='src/app/[locale]/games/page.tsx';
let source=fs.readFileSync(file,'utf8');
source=source.slice(0,source.indexOf('  return ('));
source=source.replace('  Gamepad2,','  Shapes,').replace('  Trophy,','').replace('  Brain,','').replace('  Flame,','');
source+=`  return <>
    <div className="page-heading"><div><h1>{locale==='ru'?'Практика':locale==='ua'?'Практика':'Practice'}</h1><p>{t('subtitle')}</p></div></div>
    <section className="practice-feature"><div><Shapes size={30}/><h2>{locale==='ru'?'Маленькие упражнения. Большой шаг вперёд.':locale==='ua'?'Маленькі вправи. Великий крок уперед.':'Small exercises. A big step forward.'}</h2><Link className="btn secondary" href="/games/word-match">{locale==='ru'?'Начать практику':locale==='ua'?'Почати практику':'Start practicing'}<ArrowRight size={18}/></Link></div><span className="practice-big" aria-hidden="true">Aa</span></section>
    <div className="game-grid">{games.map(game=>{const Icon=game.icon;return <Link key={game.id} href={\`/games/\${game.id}\`} className="game-card"><div className="between"><Icon className="game-icon" size={28} strokeWidth={1.6}/><span>{game.xp}</span></div><h2>{game.title}</h2><p>{game.description}</p><div className="between"><span>{game.cta}</span><ArrowRight size={18}/></div></Link>})}</div>
  </>;
}
`;
fs.writeFileSync(file,source);
