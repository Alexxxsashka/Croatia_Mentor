const { chromium } = require('C:/Users/guard/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs = require('node:fs');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true});
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 fs.mkdirSync('.impeccable/review',{recursive:true});
 const routes=['','dashboard','lessons','vocabulary','games','ai-chat','profile','admin','plans','placement-test','library','grammar','achievements','schedule','daily','statistics','news','sign-in','sign-up','onboarding','games/reading','games/listening','lessons/a1-grammar-1'];
 for(const route of routes){await page.goto('http://127.0.0.1:5173/ru/'+route);await page.waitForTimeout(180);if((await page.locator('body').innerText()).length<100)errors.push('Empty: '+route);}
 for(const [name,route,width,height] of [['desktop','',1440,1000],['dashboard','dashboard',1440,1000],['course','lessons',1440,1000],['mobile','',390,844],['mobile-dashboard','dashboard',390,844],['mobile-course','lessons',390,844]]){
  await page.setViewportSize({width,height});await page.goto('http://127.0.0.1:5173/ru/'+route);await page.evaluate(()=>document.fonts.ready);await page.screenshot({path:'.impeccable/review/'+name+'.png',fullPage:true});
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);if(overflow)errors.push('Overflow '+name);
 }
 console.log(JSON.stringify({routes:routes.length,errors},null,2));await browser.close();if(errors.length)process.exitCode=1;
})();
