// Import the supplied reference without copying caches, secrets or generated output.
const fs = require('node:fs');
const path = require('node:path');
const postcss = require('postcss');
const source = path.resolve(__dirname, '../../References web');
const root = path.resolve(__dirname, '..');
const target = path.join(root, 'reference/new-design');
fs.cpSync(source, target, {recursive:true, filter:p => !['node_modules','dist','.git','build.log'].includes(path.basename(p)) && (!path.basename(p).startsWith('.env') || path.basename(p)==='.env.example')});
fs.mkdirSync(path.join(root,'src/components/reference'),{recursive:true});
fs.cpSync(path.join(source,'public/assets'),path.join(root,'public/assets'),{recursive:true});
fs.copyFileSync(path.join(source,'src/i18n.js'),path.join(root,'src/components/reference/translations.js'));
const css = postcss.parse(fs.readFileSync(path.join(source,'src/style.css'),'utf8'));
css.walkDecls(d=>{d.prop=d.prop.replace(/^--/,'--ref-');d.value=d.value.replace(/var\(--/g,'var(--ref-');});
css.walkRules(rule=>{
 if(rule.parent.type==='atrule' && /keyframes$/.test(rule.parent.name))return;
 rule.selector=rule.selectors.map(s=>{
  s=s.replace(/:root\[data-theme=light\]/g,'.reference-design.light').replace(/:root/g,'.reference-design');
  if(s.startsWith('.reference-design'))return s.replace(/ body/g,'');
  if(s==='html'||s==='body')return '.reference-design';
  return ':where(.reference-design) '+s;
 }).join(',');
});
fs.writeFileSync(path.join(root,'src/components/reference/reference.css'),'@layer components {\n'+css.toString()+'\n}\n');
let original=fs.readFileSync(path.join(source,'src/main.jsx'),'utf8');
let landing=original.slice(original.indexOf('function Landing()'),original.indexOf('function Dashboard'));
landing=landing.replace('function Landing()','export default function ReferenceLanding()').replace('let{t,locale}=useApp()','let locale=useLocale();locale=locale===\'ua\'?\'uk\':locale;const t=(key)=>translate(key,locale)');
landing=landing.replace('<Header/>','').replace('<Footer/>','').replaceAll("t('Открыть демо')","t('Начать')").replace("AI · {t('Демо')}","AI").replace('to="plans"','to="contacts"').replace('ENG / RU / UA / HR','ENG / RU / UA');
const data=fs.readFileSync(path.join(source,'src/data.js'),'utf8').split('\n').slice(0,2).join('\n').replaceAll('export ','');
fs.writeFileSync(path.join(root,'src/components/reference/landing.jsx'),'"use client";\nimport {useLocale} from "next-intl";\nimport {translate} from "./translations";\nimport {ReferenceLink as A, ReferenceIcon as Icon} from "./primitives";\n'+data+'\n'+landing);
