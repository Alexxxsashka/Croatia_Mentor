const fs = require('fs');
const path = require('path');

const A = __dirname;
const STATE_PATH = path.join(A, 'state.js');
const PAGE_PATH = path.join(A, 'dashboard.html');
const BEGIN = '/*STATE-BEGIN*/';
const END = '/*STATE-END*/';

try {
  const raw = fs.readFileSync(STATE_PATH, 'utf-8');
  const body = raw.includes('=') ? raw.substring(raw.indexOf('=') + 1) : raw;
  const state = JSON.parse(body.trim().replace(/;$/, ''));

  if (fs.existsSync(PAGE_PATH)) {
    let page = fs.readFileSync(PAGE_PATH, 'utf-8');
    const i = page.indexOf(BEGIN);
    const j = page.indexOf(END);
    if (i >= 0 && j >= 0) {
      const payload = 'window.STATE=' + JSON.stringify(state).replace(/<\//g, '<\\/') + ';';
      const newPage = page.substring(0, i + BEGIN.length) + payload + page.substring(j);
      fs.writeFileSync(PAGE_PATH, newPage, 'utf-8');
      console.log(`[sync.js] Snapshot synced into dashboard.html at ${new Date().toLocaleTimeString()}`);
    }
  }
} catch (err) {
  console.error('[sync.js] Error syncing state:', err.message);
}
