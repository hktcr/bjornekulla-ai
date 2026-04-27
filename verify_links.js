const fs = require('fs');
const http = require('http');
const https = require('https');

async function fetchWithRedirects(url, options = {}, redirectCount = 0) {
  if (redirectCount > 5) throw new Error('Too many redirects');
  
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8000);
  options.signal = controller.signal;
  options.headers = options.headers || {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5'
  };

  try {
    const res = await fetch(url, options);
    clearTimeout(timeoutId);
    return res;
  } catch (e) {
    clearTimeout(timeoutId);
    throw e;
  }
}

async function verify() {
  const content = fs.readFileSync('../ai_radar_presentation/data.js', 'utf8');
  const items = [];
  
  // Extract items with URLs
  const regex = /\{[^}]*"art":\s*"([^"]+)"[^}]*"kommentar":\s*"([^"]+)"[^}]*"url":\s*"([^"]+)"[^}]*\}/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    items.push({ art: match[1], kommentar: match[2], url: match[3] });
  }

  console.log(`Verifying ${items.length} URLs...\n`);
  
  for (const item of items) {
    let status = '❌ FAILED';
    let title = 'N/A';
    let keywordsMatch = false;
    let errorMsg = '';
    
    try {
      const res = await fetchWithRedirects(item.url);
      
      if (res.ok || res.status === 403) { // 403 often means anti-bot for curl/fetch, but page exists
        status = res.ok ? '✅ OK' : '⚠️ 403 (Anti-Bot)';
        
        const html = await res.text();
        
        // 1. Extract Title
        const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i) || html.match(/<meta property="og:title" content="([^"]+)"/i);
        if (titleMatch) {
          title = titleMatch[1].replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"').trim().substring(0, 70);
        } else {
          title = "Ingen titel hittades";
        }
        
        // 2. Keyword Match (Check if words from 'art' exist in the HTML)
        const checkWords = item.art.split(' ').map(w => w.replace(/[^a-zA-Z0-9åäöÅÄÖ]/g, '')).filter(w => w.length > 3).map(w => w.toLowerCase());
        const lowerHtml = html.toLowerCase();
        let matches = 0;
        for (const w of checkWords) {
          if (lowerHtml.includes(w)) matches++;
        }
        
        keywordsMatch = checkWords.length === 0 ? true : (matches > 0);
        if (!keywordsMatch && title.toLowerCase().includes(checkWords[0])) keywordsMatch = true;

      } else {
        status = `❌ HTTP ${res.status}`;
      }
    } catch (e) {
      status = `❌ ERROR`;
      errorMsg = e.message;
    }
    
    console.log(`[${item.art}]`);
    console.log(`  🔗 ${item.url}`);
    console.log(`  1. Liveness: ${status} ${errorMsg ? '(' + errorMsg + ')' : ''}`);
    console.log(`  2. Rubrik:   ${title}`);
    console.log(`  3. Relevans: ${keywordsMatch ? '✅ Nyckelord hittades' : '⚠️ Varning: Inga nyckelord från titeln hittades i texten'}`);
    console.log('--------------------------------------------------');
  }
}

verify();
