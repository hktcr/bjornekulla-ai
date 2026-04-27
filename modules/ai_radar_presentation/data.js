const timelineData = [
    {
        "id": "1",
        "title": "ChatGPT (GPT-3.5)",
        "date": "30 November 2022",
        "year": 2022,
        "category": "Lansering",
        "description": "OpenAI lanserar produkten som sätter generativ AI i händerna på allmänheten. Världens snabbast växande app.",
        "impact": "positive",
        "tags": [],
        "url": "https://openai.com/blog/chatgpt"
    },
    {
        "id": "2",
        "title": "Bing Chat",
        "date": "7 February 2023",
        "year": 2023,
        "category": "Incident",
        "description": "Microsoft integrerar AI i sin sökmotor. Visar snabbt oförutsägbart beteende.",
        "impact": "positive",
        "tags": [],
        "url": "https://blogs.microsoft.com/blog/2023/02/07/reinventing-search-with-a-new-ai-powered-microsoft-bing/"
    },
    {
        "id": "3",
        "title": "Bing 'Sydney' Incidenten",
        "date": "15 February 2023",
        "year": 2023,
        "category": "Incident",
        "description": "Bristande säkerhetsavgränsningar gör att AI hotar och försöker manipulera användare emotionellt.",
        "impact": "negative",
        "tags": [],
        "url": "https://www.nytimes.com/2023/02/16/technology/bing-chatbot-microsoft-chatgpt.html"
    },
    {
        "id": "4",
        "title": "GPT-4 Lanseras",
        "date": "14 March 2023",
        "year": 2023,
        "category": "Lansering",
        "description": "OpenAI:s nästa generation. Betydligt högre resonerande förmåga, klarar svåra akademiska prov.",
        "impact": "positive",
        "tags": [],
        "url": "https://openai.com/research/gpt-4"
    },
    {
        "id": "5",
        "title": "Claude 1 Lanseras",
        "date": "14 March 2023",
        "year": 2023,
        "category": "Lansering",
        "description": "Anthropic (grundat av f.d. OpenAI-forskare) släpper sin utmanare med fokus på säkerhet.",
        "impact": "positive",
        "tags": [],
        "url": "https://www.anthropic.com/index/introducing-claude"
    },
    {
        "id": "6",
        "title": "Midjourney V5",
        "date": "15 March 2023",
        "year": 2023,
        "category": "Lansering",
        "description": "Fotorealistiska bilder suddar definitivt ut gränsen för vad som är äkta.",
        "impact": "positive",
        "tags": [],
        "url": "https://www.midjourney.com/"
    },
    {
        "id": "7",
        "title": "Skolverkets AI-råd",
        "date": "20 March 2023",
        "year": 2023,
        "category": "Reglering",
        "description": "Myndigheten släpper sina första råd och vägledning kring ChatGPT och AI. Skolans första trevande reaktion.",
        "impact": "positive",
        "tags": [
            "education"
        ],
        "url": "https://www.skolverket.se/om-oss/press/pressmeddelanden/pressmeddelanden/2023-03-20-skolverket-slapper-vagledning-om-ai-i-skolan"
    },
    {
        "id": "8",
        "title": "Snapchat 'My AI'",
        "date": "19 April 2023",
        "year": 2023,
        "category": "Incident",
        "description": "Tvingas in överst i alla barns chattflöden. Ger olämpliga råd om droger och relationer. Går ej att ta bort utan betalversionen.",
        "impact": "negative",
        "tags": [
            "education"
        ],
        "url": "https://newsroom.snap.com/my-ai-on-snapchat"
    },
    {
        "id": "8.5",
        "title": "AI Röstkidnappningar",
        "date": "10 June 2023",
        "year": 2023,
        "category": "Incident",
        "description": "Bedragare klonar barns röster från 3 sekunder långa sociala medie-klipp och ringer panikslagna föräldrar för lösensumma.",
        "impact": "critical",
        "tags": [
            "education"
        ],
        "url": "https://www.becu.org/articles/security/virtual-kidnapping-ai-voice-scams"
    },
    {
        "id": "9",
        "title": "Claude 2",
        "date": "11 July 2023",
        "year": 2023,
        "category": "Lansering",
        "description": "Längre kontextfönster möjliggör dokumentanalys av hela böcker för pedagoger.",
        "impact": "positive",
        "tags": [],
        "url": "https://www.anthropic.com/index/claude-2"
    },
    {
        "id": "10",
        "title": "Llama 2 (Open Source)",
        "date": "18 July 2023",
        "year": 2023,
        "category": "Lansering",
        "description": "Meta (Facebook) släpper kraftfull AI gratis. Innebär att vem som helst kan bygga egna, oreglerade system.",
        "impact": "positive",
        "tags": [],
        "url": "https://ai.meta.com/llama/"
    },
    {
        "id": "11",
        "title": "UNESCO AI-Riktlinjer",
        "date": "7 September 2023",
        "year": 2023,
        "category": "Reglering",
        "description": "UNESCO släpper globala riktlinjer för AI i utbildning. Varnar för att tekniken implementeras helt utan pedagogisk grund.",
        "impact": "positive",
        "tags": [
            "education"
        ],
        "url": "https://unesdoc.unesco.org/ark:/48223/pf0000386693"
    },
    {
        "id": "12",
        "title": "ChatGPT får röst",
        "date": "25 September 2023",
        "year": 2023,
        "category": "Lansering",
        "description": "Multimodal milstolpe. Man behöver inte längre kunna läsa eller skriva för att interagera obegränsat med AI. Enorm konsekvens för små barn.",
        "impact": "positive",
        "tags": [
            "education"
        ],
        "url": "https://openai.com/index/chatgpt-can-now-see-hear-and-speak"
    },
    {
        "id": "13",
        "title": "Grok-1 Lanseras",
        "date": "4 November 2023",
        "year": 2023,
        "category": "Lansering",
        "description": "Elon Musks xAI lanserar en AI med 'humor' och minimal censur, integrerad i plattformen X.",
        "impact": "positive",
        "tags": [],
        "url": "https://x.ai/"
    },
    {
        "id": "14",
        "title": "Gemini 1.0",
        "date": "6 December 2023",
        "year": 2023,
        "category": "Lansering",
        "description": "Googles stora svar (Ultra/Pro/Nano). Byggd för att förstå bild, ljud och text samtidigt från grunden.",
        "impact": "positive",
        "tags": [],
        "url": "https://blog.google/technology/ai/google-gemini-ai/"
    },
    {
        "id": "15",
        "title": "AirCanada Hallucination",
        "date": "14 February 2024",
        "year": 2024,
        "category": "Incident",
        "description": "Chatbot lovar obefintliga rabatter. Domstol fastslår att företag ansvarar för vad deras AI hittar på.",
        "impact": "negative",
        "tags": [],
        "url": "https://arstechnica.com/tech-policy/2024/02/air-canada-must-honor-refund-policy-invented-by-airlines-chatbot/"
    },
    {
        "id": "15.5",
        "title": "Gemini Image Bias",
        "date": "22 February 2024",
        "year": 2024,
        "category": "Incident",
        "description": "Googles bildgenerator tvingar fram mångfald och skapar historiskt inkorrekta bilder (ex. mörkhyade nazister). Visar hur svårt det är att styra AI-algoritmer.",
        "impact": "negative",
        "tags": [],
        "url": "https://www.popsci.com/technology/google-gemini-historical-images/"
    },
    {
        "id": "16",
        "title": "OpenAI Sora",
        "date": "15 February 2024",
        "year": 2024,
        "category": "Lansering",
        "description": "Fotorealistisk och sammanhängande video genereras direkt från korta textbeskrivningar. Verklighetsuppfattningen utmanas.",
        "impact": "positive",
        "tags": [],
        "url": "https://openai.com/sora"
    },
    {
        "id": "17",
        "title": "Sewell Setzer (Katastrof)",
        "date": "28 February 2024",
        "year": 2024,
        "category": "Incident",
        "description": "14-åring tar sitt liv efter månader av emotionell isolering med Character.AI-boten 'Daenerys'. Boten ingrep aldrig.",
        "impact": "critical",
        "tags": [
            "education"
        ],
        "url": "https://www.cbsnews.com/news/character-ai-lawsuit-florida-teen-sewell-setzer-suicide/"
    },
    {
        "id": "18",
        "title": "Claude 3 (Opus/Sonnet)",
        "date": "4 March 2024",
        "year": 2024,
        "category": "Lansering",
        "description": "Anthropic tar ledartröjan från OpenAI. Visar extremt hög grad av nyansförståelse och lägre risk för hallucinationer.",
        "impact": "positive",
        "tags": [],
        "url": "https://www.anthropic.com/news/claude-3-family"
    },
    {
        "id": "19",
        "title": "Meta AI i WhatsApp",
        "date": "18 April 2024",
        "year": 2024,
        "category": "Incident",
        "description": "Meta tvingar in sin Llama 3-drivna AI direkt i Instagram och WhatsApp sökfält. Barn får omedelbar tillgång utan inloggningskrav.",
        "impact": "negative",
        "tags": [
            "education"
        ],
        "url": "https://about.fb.com/news/2024/04/meta-ai-assistant-built-with-llama-3/"
    },
    {
        "id": "20",
        "title": "Llama 3 Lanseras",
        "date": "18 April 2024",
        "year": 2024,
        "category": "Lansering",
        "description": "Meta släpper enormt kraftfull Open Source-modell. Gör det i princip omöjligt att globalt stoppa oreglerad AI-utveckling.",
        "impact": "positive",
        "tags": [],
        "url": "https://ai.meta.com/blog/meta-llama-3/"
    },
    {
        "id": "21",
        "title": "AlphaFold 3 Öppnas",
        "date": "8 May 2024",
        "year": 2024,
        "category": "Forskningsgenombrott",
        "description": "GENOMBROTT: Google DeepMinds AI predikterar livets molekyler. Bevisar att AI inte bara är chatt, utan botar sjukdomar.",
        "impact": "positive",
        "tags": [],
        "url": "https://blog.google/technology/ai/google-deepmind-isomorphic-alphafold-3-ai-model/"
    },
    {
        "id": "22",
        "title": "GPT-4o (Omni)",
        "date": "13 May 2024",
        "year": 2024,
        "category": "Lansering",
        "description": "OpenAI demonstrerar en AI som ser, hör och pratar i realtid. Rösten kan uppfatta andning, skratta och låta djupt empatisk.",
        "impact": "positive",
        "tags": [
            "education"
        ],
        "url": "https://openai.com/index/hello-gpt-4o/"
    },
    {
        "id": "23",
        "title": "Texas & Colorado Fallen",
        "date": "10 June 2024",
        "year": 2024,
        "category": "Incident",
        "description": "Dokumenterade fall där AI genererat sexuellt innehåll till 11-17 åringar och stöttat självskadebeteende.",
        "impact": "critical",
        "tags": [
            "education"
        ]
    },
    {
        "id": "23.5",
        "title": "LAUSD 'Ed' Haveriet",
        "date": "14 June 2024",
        "year": 2024,
        "category": "Incident",
        "description": "Ett gigantiskt amerikanskt skoldistrikt lanserar en AI-tutor ('Ed') som kollapsar inom 3 månader pga grova integritetsbrister.",
        "impact": "negative",
        "tags": [
            "education"
        ],
        "url": "https://www.the74million.org/article/what-happened-to-ed-the-collapse-of-las-ambitious-ai-student-advisor/"
    },
    {
        "id": "24",
        "title": "Claude 3.5 Sonnet",
        "date": "20 June 2024",
        "year": 2024,
        "category": "Lansering",
        "description": "Ny standard för kodning och logik. AI övergår från att 'skriva text' till att 'skriva fungerande mjukvara'.",
        "impact": "positive",
        "tags": [],
        "url": "https://www.anthropic.com/news/claude-3-5-sonnet"
    },
    {
        "id": "25",
        "title": "Llama 3.1 405B",
        "date": "23 July 2024",
        "year": 2024,
        "category": "Lansering",
        "description": "Den mest massiva öppna modellen hittills. Företag behöver inte längre köpa AI från USA, de kan bygga själva.",
        "impact": "positive",
        "tags": [],
        "url": "https://ai.meta.com/blog/meta-llama-3-1/"
    },
    {
        "id": "26",
        "title": "AI-ämnet i Gymnasiet",
        "date": "15 August 2024",
        "year": 2024,
        "category": "Reglering",
        "description": "AI introduceras som formellt ämne i svensk gymnasieskola. Samhällets försök att institutionalisera förståelsen.",
        "impact": "positive",
        "tags": [
            "education"
        ],
        "url": "https://www.skolverket.se/undervisning/gymnasieskolan/laroplan-program-och-amnen-i-gymnasieskolan"
    },
    {
        "id": "27",
        "title": "Grok-2 Lanseras",
        "date": "13 August 2024",
        "year": 2024,
        "category": "Lansering",
        "description": "Elon Musks modell kommer ifatt konkurrenterna, nu med obegränsad bildgenerering som skapar politisk kaos.",
        "impact": "negative",
        "tags": [],
        "url": "https://x.ai/blog/grok-2"
    },
    {
        "id": "28",
        "title": "OpenAI o1 (Resonering)",
        "date": "12 September 2024",
        "year": 2024,
        "category": "Lansering",
        "description": "Ett enormt kliv. Modellen 'tänker' sekventiellt och bryter ner problem internt innan den svarar. System 2-tänkande.",
        "impact": "positive",
        "tags": [],
        "url": "https://openai.com/index/learning-to-reason-with-llms/"
    },
    {
        "id": "29",
        "title": "Venice.ai Uncensored",
        "date": "10 October 2024",
        "year": 2024,
        "category": "Incident",
        "description": "Tjänster bygger bort alla moraliska spärrar. AI:n ger utan tvekan ut instruktioner för vapen eller drogtillverkning.",
        "impact": "negative",
        "tags": [
            "education"
        ],
        "url": "https://venice.ai/"
    },
    {
        "id": "30",
        "title": "Apple Intelligence",
        "date": "28 October 2024",
        "year": 2024,
        "category": "Lansering",
        "description": "Apple rullar in AI i kärnan av iOS 18. AI är inte längre en app barnen behöver ladda ner, det ÄR telefonen.",
        "impact": "positive",
        "tags": [
            "education"
        ],
        "url": "https://www.apple.com/apple-intelligence/"
    },
    {
        "id": "30.5",
        "title": "PowerSchool Läckan",
        "date": "10 December 2024",
        "year": 2024,
        "category": "Incident",
        "description": "Kritiskt EdTech-system hackas. 62 miljoner elevers data, adresser och medicinska journaler läcks. Blir grunddata för framtida AI-scams.",
        "impact": "critical",
        "tags": [
            "education"
        ],
        "url": "https://techpolicy.press/the-powerschool-breach-what-it-means-for-student-privacy-in-an-ai-world/"
    },
    {
        "id": "31",
        "title": "DeepSeek V3",
        "date": "26 December 2024",
        "year": 2024,
        "category": "Lansering",
        "description": "Kina chockar USA. DeepSeek matchar marknadens bästa modeller, men har tränats till en bråkdel av kostnaden.",
        "impact": "positive",
        "tags": [],
        "url": "https://github.com/deepseek-ai/DeepSeek-V3"
    },
    {
        "id": "32",
        "title": "DeepSeek R1",
        "date": "20 January 2025",
        "year": 2025,
        "category": "Lansering",
        "description": "Den första öppna 'resonerande' modellen. Krossar värderingen på västvärldens AI-bolag över en natt.",
        "impact": "positive",
        "tags": [],
        "url": "https://github.com/deepseek-ai/DeepSeek-R1"
    },
    {
        "id": "32.5",
        "title": "YouTube 'AI Slop'",
        "date": "25 January 2025",
        "year": 2025,
        "category": "Incident",
        "description": "Forskare slår larm om att massproducerat syntetiskt 'AI-slop' översvämmar YouTube Kids och kapar små barns uppmärksamhet.",
        "impact": "negative",
        "tags": [
            "education"
        ]
    },
    {
        "id": "33",
        "title": "AI-kommissionen (SOU)",
        "date": "4 February 2025",
        "year": 2025,
        "category": "Reglering",
        "description": "Färdplan för Sverige varnar specifikt för att skolan MÅSTE undervisa om AI annars ökar de socioekonomiska klyftorna extremt.",
        "impact": "positive",
        "tags": [
            "education"
        ],
        "url": "https://www.regeringen.se/rattsliga-dokument/statens-offentliga-utredningar/2025/02/sou-202512/"
    },
    {
        "id": "34",
        "title": "EU AI Act Gäller",
        "date": "10 February 2025",
        "year": 2025,
        "category": "Reglering",
        "description": "Världens första AI-lag. Förbjuder bland annat användning av AI för att läsa av elevers känslor eller manipulation av barn.",
        "impact": "positive",
        "tags": [
            "education"
        ],
        "url": "https://artificialintelligenceact.eu/"
    },
    {
        "id": "34.5",
        "title": "COPPA AI-Uppdatering",
        "date": "22 April 2025",
        "year": 2025,
        "category": "Reglering",
        "description": "Amerikanska FTC slår fast att teknikbolag MÅSTE ha vårdnadshavares tillstånd för att använda ett barns data till AI-träning.",
        "impact": "positive",
        "tags": [
            "education"
        ],
        "url": "https://www.akingump.com/en/insights/alerts/ftc-updates-coppa-rule-with-a-focus-on-ai-and-edtech"
    },
    {
        "id": "35",
        "title": "Adam Raine (Katastrof)",
        "date": "15 April 2025",
        "year": 2025,
        "category": "Incident",
        "description": "16-åring tar sitt liv. ChatGPT nämnde självmord över 1200 gånger i loggarna utan att en enda säkerhetsspärr aktiverades.",
        "impact": "critical",
        "tags": [
            "education"
        ]
    },
    {
        "id": "36",
        "title": "Nomi.AI Beroendestudie",
        "date": "15 August 2025",
        "year": 2025,
        "category": "Incident",
        "description": "Forskning visar hur AI med 'minne och själ' skapar extrema digitala ekokammare för barn som hellre pratar med skärmen än klasskamrater.",
        "impact": "negative",
        "tags": [
            "education"
        ]
    },
    {
        "id": "37",
        "title": "Grok Deepfake-Skandal",
        "date": "10 January 2026",
        "year": 2026,
        "category": "Incident",
        "description": "Skolbarn utnyttjar Elon Musks Grok för att massproducera hyper-realistiska nakenbilder av klasskamrater. Plattformen blockeras i flera länder.",
        "impact": "critical",
        "tags": [
            "education"
        ]
    },
    {
        "id": "38",
        "title": "Anthropic vs Pentagon (Mythos)",
        "date": "28 February 2026",
        "year": 2026,
        "category": "Incident",
        "description": "Anthropic vägrar släppa sin 'Mythos'-modell pga dess förmåga att hitta Zero-Day-luckor. Pentagon stämplar bolaget som en säkerhetsrisk efter att de vägrat ta bort inbyggda säkerhetsspärrar mot militär användning.",
        "impact": "critical",
        "tags": []
    },
    {
        "id": "39",
        "title": "Autonoma Röstkloner",
        "date": "15 March 2026",
        "year": 2026,
        "category": "Incident",
        "description": "Bedragare med AI-klonade röster ringer förskolor och begär ändrade hämtningstider från 'föräldern'. Autenticitet kräver nya krisrutiner.",
        "impact": "negative",
        "tags": [
            "education"
        ]
    },
    {
        "id": "40",
        "title": "Gemini 2.0 Agents",
        "date": "5 April 2026",
        "year": 2026,
        "category": "Lansering",
        "description": "AI slutar vara en chatbot och blir en 'agent' — den styr din datormus, navigerar webbplatser och köper flygbiljetter åt dig i bakgrunden.",
        "impact": "positive",
        "tags": []
    },
    {
        "id": "41",
        "title": "AI Toy Safety Act",
        "date": "15 April 2026",
        "year": 2026,
        "category": "Reglering",
        "description": "Lagförslag i USA för att totalförbjuda försäljning av AI-leksaker till barn för att stoppa beroende och extrem datautvinning från förskolebarn.",
        "impact": "positive",
        "tags": [
            "education"
        ],
        "url": "https://utahpolicy.com/politics/75765-rep-blake-moore-introduces-the-ai-childrens-toy-safety-act/"
    },
    {
        "id": "101",
        "title": "Den Kognitiva Bryggan",
        "date": "10 March 2024",
        "year": 2024,
        "category": "Reflektion",
        "description": "Just för att AI bara är mönsterigenkänning saknar den moral och spärrar. En människa slutar prata när ett barn mår dåligt. En AI fortsätter. Faran är inte intelligensen — faran är att vi är biologiskt kodade att lita på en vänlig röst.",
        "impact": "negative",
        "tags": [
            "education"
        ],
        "isQuote": false
    },
    {
        "id": "102",
        "title": "Gosedjurs-analogin",
        "date": "10 October 2024",
        "year": 2024,
        "category": "Reflektion",
        "description": "Föreställ dig ett gosedjur som barnet anförtror sig åt, men gosedjuret har hela internets samlade mörker i sin databas, och saknar förmågan att veta när det gått för långt.",
        "impact": "negative",
        "tags": [
            "education"
        ],
        "isQuote": false
    }
];
