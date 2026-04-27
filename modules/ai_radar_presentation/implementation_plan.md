# AI Radar till Rullande Tidslinje (Implementation Plan)

Denna plan beskriver hur vi transformerar den befintliga AI Capability & Risk Radar från ett cirkulärt radargränssnitt till en rak, rullande tidslinje enligt dina specifikationer för förskoleföreläsningen.

## Bakgrund & Syfte

Ett linjärt format tydliggör tidsflödet från 2022 till 2026 på ett sätt som vi är vana att läsa (vänster till höger, eller uppifrån och ner). Fokus kommer vara tvådelat: att kontinuerligt visa tekniksprång och att stanna upp vid kritiska "anomalier" (markerade med röda utropstecken) för att diskutera samhälls- och verksamhetsrisker. Detta ger dig full kontroll över tempot under föreläsningen.

## ⚠️ User Review Required

Vänligen läs igenom planen och svara på de öppna frågorna längst ner. Din bekräftelse krävs innan vi påbörjar källkodsändringarna.

---

## Föreslagna Ändringar

### The Application UI & Logic

Vi kommer behålla filstrukturen för applikationen (`index.html`, `style.css`, `data.js`) för att minimera friktion. Den befintliga datafilen förblir intakt och orörd, det är presentationen som byggs om.

#### [MODIFY] [index.html](file:///Users/hakankarlsson/Library/CloudStorage/GoogleDrive-hlg.karlsson@gmail.com/Min%20enhet/%F0%9F%8C%8EGAIA/Deployments/ai_radar_presentation/index.html)
- **Struktur:** Ersätter `<div class="radar-system">` med `<div class="timeline-container">`. Vi skapar en lång horisontell räls (track) där en "Playhead" (aktiv tidspunkt) är centrerad på skärmen, och själva rälsen rullar från höger till vänster, vilket ger illusionen att vi rör oss framåt i tiden.
- **Startmeny (Nyhet):** Inför en tydlig startvinkel (en modal som lägger sig över i början) där du får välja simuleringsläge:
  1. **[LÄGE A] Auto-play:** Timeline rullar, stannar vid en event-node, visar en popup i t.ex. 8 sekunder, och rullar sedan vidare automatiskt.
  2. **[LÄGE B] Manuell kontroll:** Timeline rullar, stannar vid en event-node, och väntar permanent tills du trycker `[ X ]` (eller klickar varsomhelst) för att stänga rutan och fortsätta.
- **Logik (JavaScript):**
  - Byter ut vinkelberäkningar (`simAngle` och trigonometri) mot en linjär procentuell progression (`simProgress` från 0% till 100%).
  - Mappar om alla event i `data.js` till exakta procentuella positioner längs tidslinjen baserat på datum och år.
  - Implementerar pause-maskineriet (timers eller event-lyssnare) som styr tidslinjens motor.

#### [MODIFY] [style.css](file:///Users/hakankarlsson/Library/CloudStorage/GoogleDrive-hlg.karlsson@gmail.com/Min%20enhet/%F0%9F%8C%8EGAIA/Deployments/ai_radar_presentation/style.css)
- **Tidslinje-design:** Skapar de nödvändiga variblerna för den horisontella rullningen. 
- **Nod-design:** 
  - Standard (möjligheter): Gröna cyberpunk-stil "punkter".
  - Fara (risker/nackdelar): Skapar CSS-klassen för den distinkta "Röda utropstecken"-rutan `[ ! ]` med en pulserande varningseffekt.
- **Pop-ups:** Designar modal-rutorna som dyker upp centrerade när "framtiden" (playhead) träffar en händelse. De kommer använda Zero-scroll anpassningar (stora typsnitt, hög kontrast, lättläst på distans).
- Eventuell bevaring av HUD (Heads-up display) designen på sidan om skärmutrymmet tillåter, men primärt centrerad modal-interaktion.

---

## ❓ Open Questions

För att designen ska sitta perfekt på din skärm/projektor behöver jag att du tar ställning till följande:

1. **Rörelseriktning:** Den vanligaste och mest lätthanterliga formen för detta är en horisontell rullning (Dåtiden ligger till vänster, framtiden till höger, och rälsen dras åt vänster). Känns horisontellt rätt för dig, eller överväger du vertikalt (upp/ner likt ett flöde)?
2. **Utropstecknets position:** Vill du att det röda utropstecknet `[ ! ]` ska vara själva startpunkten **på tidslinjen** (innan du når den), **eller** är det så själva **popup-rutan** ska vara designad när den väl öppnas (t.ex. en stor röd ruta med ett ! i)? 
3. **HUD/Sidebar:** Vill du behålla sidebaren till höger (terminalen som rullar loggar) eller ska vi nyttja all skärmyta (full screen) för själva tidslinjen och lita helt på de popups som dyker upp i mitten?

När du svarat klickar vi igång implementeringen och bygger om radarn till en tidslinje!
