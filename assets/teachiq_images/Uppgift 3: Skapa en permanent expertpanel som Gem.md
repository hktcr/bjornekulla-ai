# Uppgift 3: Skapa en permanent expertpanel som Gem

**Syfte:** Skapa en återanvändbar expertpanel i Gemini Gems som du kan använda när som helst, med koordinator inbyggd för att säkerställa att du alltid behåller kontrollen.

**Tid:** 20-25 minuter

**Krav:** Gemini Advanced (krävs för Gems)

**Lärandemål:**
- Skapa en permanent expertpanel med Deep Research
- Integrera koordinatorn i Gem:en
- Kombinera expertpanel med ditt språk/stil-dokument från Uppgift 2
- Öva på att använda Gem:en för snabb feedback

---

## Steg 1: Skapa expertpaneldokumentet med Deep Research

Öppna Deep Research i Gemini och använd denna prompt:

```
Compile a panel of 10 people with diverse specialist competencies, personality types, and challenges that I can use as a sounding board for feedback on content I write for our assessment platform. The panel should focus on content quality, clarity, accessibility, and alignment with our company's style and tone. Consider what is known about assessment design, instructional writing, and user experience.

Coordinator: You are a professional facilitator for this expert panel.

After the panel is assembled, ask the user:
"How would you like to proceed?
A) Hear individual opinions from each expert
B) Have the panel discuss together
C) Request a synthesis
D) Something else (please specify)"

After each completed step, ask:
"What would you like to do next?"
[Offer context-appropriate options]

Never proceed without explicit user direction.
```

**Deep Research kommer att ta 5-10 minuter.** Detta är perfekt - du får ett mycket mer detaljerat och genomtänkt expertpaneldokument än om du bara frågar Gemini direkt.

**Medan du väntar:** Öppna ditt språk/stil-dokument från Uppgift 2 i en annan flik så du har det redo.

---

## Steg 2: Spara Deep Research-resultatet

När Deep Research är klart:
1. Läs igenom panelen snabbt - ser den bra ut?
2. Klicka på "Save to Google Doc" eller kopiera hela texten
3. Spara som "Expertpanel för innehållsgranskning v1"

---

## Steg 3: Skapa Gem:en

1. Öppna Gem Manager i Gemini
2. Klicka på "Create new Gem"
3. Ge den ett namn: **"Content Review Panel"**
4. I Instructions-fältet, klistra in:
   - Hela expertpaneldokumentet (inklusive koordinatorinstruktionerna)
   - Hela ditt språk/stil-dokument från Uppgift 2
   - Denna slutinstruktion:

```
When I give you content to review, the coordinator will ask me how I want to proceed. The expert panel will then provide feedback that maintains our company's language and style, focusing on quality and rapid reusability.
```

5. Spara Gem:en

---

## Steg 4: Testa Gem:en

1. Öppna en ny konversation
2. Välj din "Content Review Panel" Gem
3. Klistra in ett innehåll att granska (provfråga, instruktion, eller email)
4. Vänta på koordinatorns fråga: "How would you like to proceed?"

**Testa olika alternativ:**
- Be om individuella åsikter först
- Be panelen diskutera en specifik aspekt
- Be om en syntes
- Be om en omskrivning som följer din stil

---

## Steg 5: Jämför med Uppgift 1

Reflektera över skillnaderna:

**Uppgift 1 (Ad-hoc i Gemini):**
- Snabbt att komma igång
- Flexibelt - du kan ändra panelen för varje uppgift
- Kräver att du skriver prompten varje gång

**Uppgift 3 (Gem):**
- Tar tid att sätta upp första gången
- Konsekvent - samma panel varje gång
- Snabbt att använda när den väl är skapad
- Inkluderar din skrivstil automatiskt

**Vilken metod passar bäst för:**
- Snabb feedback på en enstaka fråga?
- Daglig granskning av 5-10 texter?
- Explorativt arbete där du vill testa olika paneler?

---

## Steg 6: Reflektera

Reflektera över:

1. **Deep Research vs direkt prompt:** Blev expertpanelen bättre/mer detaljerad med Deep Research?
2. **Koordinatorns roll i Gem:en:** Fungerar koordinatorn lika bra i en Gem som i en vanlig konversation?
3. **Språk/stil-integration:** Märker du att feedbacken följer din stil?
4. **Tidsvinst:** Hur mycket tid sparar du per granskning jämfört med manuell granskning?

**Skriv ner dina reflektioner** - vi kommer att diskutera dem i seminariet.

---

## Framgångskriterier

✅ Du har skapat en expertpanel med Deep Research  
✅ Du har skapat en Gem som inkluderar både expertpanel, koordinator och språk/stil-dokument  
✅ Du har testat Gem:en och fått feedback på innehåll  
✅ Du har jämfört Gem-metoden med ad-hoc-metoden från Uppgift 1  
✅ Du har reflekterat över när varje metod är mest lämplig  

---

## Vanliga misstag att undvika

❌ **Att hoppa över Deep Research** - Det ger mycket bättre expertpaneler  
❌ **Att glömma koordinatorinstruktionerna** - Utan dem tar AI:n över kontrollen  
❌ **Att inte inkludera språk/stil-dokumentet** - Då blir feedbacken generisk  
❌ **Att inte testa ordentligt** - Testa flera olika typer av innehåll för att se hur Gem:en fungerar  

---

## Extra utmaning (valfri)

Skapa en ANDRA Gem för ett annat syfte (t.ex. "Email Improvement Panel" eller "Assessment Item Validator") och jämför hur du styr de två olika panelerna.

---

**Lycka till! Kom ihåg: En bra Gem sparar dig 18 minuter per granskning.**
