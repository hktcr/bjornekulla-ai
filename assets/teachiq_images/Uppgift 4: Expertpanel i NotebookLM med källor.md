# Uppgift 4: Expertpanel i NotebookLM med källor

**Syfte:** Skapa en källbaserad expertpanel i NotebookLM som ger feedback med citeringar, så att all feedback är spårbar och försvarbar.

**Tid:** 25-30 minuter

**Krav:** NotebookLM-konto (gratis)

**Lärandemål:**
- Skapa en expertpanel med Deep Research för källbaserad validering
- Lägga till relevanta källor i NotebookLM
- Få feedback med citeringar som är spårbara
- Förstå när källbaserad feedback är viktigast

---

## Steg 1: Skapa expertpaneldokumentet med Deep Research

Öppna Deep Research i Gemini och använd denna prompt:

```
Compile a panel of 10 people with diverse specialist competencies, personality types, and challenges that I can use as a sounding board for feedback on assessment items and content I create. The panel should focus on validity, reliability, alignment with curriculum standards, and evidence-based best practices. Consider what is known about psychometrics, assessment design, cognitive psychology, and accessibility standards.

Coordinator: You are a professional facilitator for this expert panel.

After the panel is assembled, ask the user:
"How would you like to proceed?
A) Hear individual opinions from each expert (with source citations)
B) Have the panel discuss together (referencing sources)
C) Request a synthesis (with comprehensive citations)
D) Something else (please specify)"

After each completed step, ask:
"What would you like to do next?"
[Offer context-appropriate options]

IMPORTANT: Always cite sources when providing feedback. Reference specific documents, page numbers, or sections.

Never proceed without explicit user direction.
```

**Vänta 5-10 minuter medan Deep Research arbetar.**

**Notera skillnaden från Uppgift 3:** Denna panel fokuserar på **källbaserad validering** (validity, reliability, standards) istället för stil och kvalitet.

---

## Steg 2: Skapa NotebookLM och lägg till källor

1. Öppna NotebookLM (notebooklm.google.com)
2. Skapa en ny notebook: "Content Review with Expert Panel"
3. Lägg till källor i denna ordning:

**Källa 1:** Expertpaneldokumentet från Deep Research (spara som Google Doc först)

**Källa 2:** Ditt språk/stil-dokument från Uppgift 2

**Källa 3-X:** Relevanta dokument för ditt arbete, t.ex.:
- Företagets innehållsriktlinjer
- Läroplaner eller curriculum standards
- Accessibility guidelines (WCAG, etc.)
- Styrdokument för bedömning
- Best practice-dokument

**Tips:** NotebookLM kan hantera upp till 50 källor - lägg till allt som är relevant!

---

## Steg 3: Testa med exempel

I NotebookLM:s chat, klistra in en bedömningsuppgift eller innehåll och skriv:

```
Coordinator, I have an assessment item to review. Please ask me how I want to proceed, and ensure the expert panel cites sources in their feedback.
```

**Vänta på koordinatorns fråga och välj ett alternativ.**

---

## Steg 4: Granska feedback med citeringar

När panelen ger feedback, **klicka på citeringarna** för att se exakt var i källorna informationen kommer ifrån.

**Notera:**
- Vilka källor citeras mest?
- Är citeringarna relevanta och korrekta?
- Kan du följa feedbacken tillbaka till originalkällan?

**Testa att fråga:**
```
Which source supports the recommendation about [specific aspect]?
```

---

## Steg 5: Jämför med Uppgift 3 (Gem)

Reflektera över skillnaderna:

**Uppgift 3 (Gem):**
- Snabbast (2 min per granskning)
- Fokus på stil och kvalitet
- Ingen källhänvisning
- Bäst för: Daglig innehållsgranskning

**Uppgift 4 (NotebookLM):**
- Långsammare (10 min per granskning)
- Fokus på validitet och alignment
- Källhänvisningar på allt
- Bäst för: Kritisk granskning, audit trails, compliance

**När skulle du använda NotebookLM istället för Gem?**
- När du behöver försvara dina beslut
- När du arbetar med regulatoriska krav
- När du behöver visa alignment med standards
- När du granskar höginsats-bedömningar

---

## Steg 6: Utforska Studio-funktioner (valfritt)

NotebookLM har Studio-funktioner som kan vara användbara:

**Audio Overview:**
- Genererar en podcast-stil diskussion om dina källor
- Användbart för onboarding eller att lära sig komplexa riktlinjer

**Study Guide:**
- Skapar en sammanfattning av viktiga punkter från källorna
- Användbart för snabb referens

**FAQ:**
- Genererar vanliga frågor och svar baserat på källorna
- Användbart för att identifiera kunskapsluckor

**Testa minst en av dessa funktioner.**

---

## Steg 7: Reflektera

Reflektera över:

1. **Källbaserad vs generisk feedback:** Hur mycket mer användbar är feedback med citeringar?
2. **Koordinatorns roll med källor:** Fungerar koordinatorn lika bra när källor är involverade?
3. **Tidsvinst vs kvalitet:** Är den extra tiden (10 min vs 2 min) värd det för källbaserad feedback?
4. **Verktygsval:** När skulle du välja Gemini, Gem, eller NotebookLM?

**Skriv ner dina reflektioner** - vi kommer att diskutera dem i seminariet.

---

## Framgångskriterier

✅ Du har skapat en expertpanel med Deep Research för källbaserad validering  
✅ Du har lagt till minst 3 källor i NotebookLM  
✅ Du har fått feedback med citeringar  
✅ Du har verifierat att citeringarna är korrekta  
✅ Du har jämfört NotebookLM med Gem-metoden  
✅ Du har utforskat minst en Studio-funktion  

---

## Vanliga misstag att undvika

❌ **Att lägga till för få källor** - Mer källor = bättre feedback  
❌ **Att inte verifiera citeringar** - Klicka på dem för att se att de stämmer  
❌ **Att använda NotebookLM för allt** - Det är långsammare, använd det strategiskt  
❌ **Att glömma koordinatorinstruktionerna i paneldokumentet** - Annars tar AI:n över  

---

## Extra utmaning (valfri)

Lägg till en källa som **motsäger** dina nuvarande riktlinjer och be panelen diskutera konflikten. Öva på att navigera motstridiga källor med koordinatorns hjälp.

---

**Lycka till! Kom ihåg: Källbaserad feedback är guld värd när du behöver försvara dina beslut.**
