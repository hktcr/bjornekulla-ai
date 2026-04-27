const fs = require('fs');

async function test() {
  const content = fs.readFileSync('../ai_radar_presentation/data.js', 'utf8');
  const urls = [...content.matchAll(/"url":\s*"([^"]+)"/g)].map(m => m[1]);
  
  console.log(`Testing ${urls.length} URLs...`);
  const failed = [];
  
  for (const url of urls) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);
      const res = await fetch(url, { method: 'HEAD', signal: controller.signal });
      clearTimeout(timeoutId);
      if (!res.ok && res.status !== 405 && res.status !== 403) { // 403/405 might be anti-bot
        failed.push({url, status: res.status});
      }
    } catch (e) {
      failed.push({url, error: e.message});
    }
  }
  
  console.log("Failed URLs:", failed);
}
test();
