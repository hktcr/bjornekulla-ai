# Expected Outcomes för alla prompter - Alla experter

## FILM 1: What is a virtual expert panel?

### Prompt 1: Panel WITHOUT Coordinator
**Skriven av:** Dr. Maria Lindström

**Expected Outcome:**
Gemini will immediately create 10 experts and launch into a lengthy discussion about the assessment item. You'll see multiple paragraphs of expert opinions flowing continuously without asking you what you want. The panel will discuss validity, reliability, accessibility, and language - all at once. After 10-15 seconds, you'll feel overwhelmed because you've lost control of the conversation. This demonstrates exactly why you need a coordinator.

**What to look for:**
- ✅ Panel creates 10 experts with different backgrounds
- ✅ Discussion starts immediately without asking you
- ✅ Multiple experts talk at once or in quick succession
- ❌ No pause to ask "How would you like to proceed?"
- ❌ No options offered (A, B, C, D)

**Troubleshooting:**
- If Gemini asks you a question: You accidentally included coordinator-like language. Try again with the exact prompt provided.
- If nothing happens: Wait 5-10 seconds. Gemini is processing.

---

### Prompt 2: Panel WITH Coordinator
**Skriven av:** Dr. Maria Lindström

**Expected Outcome:**
Gemini will create 10 experts with detailed backgrounds (name, expertise, perspective). Then, instead of launching into discussion, the Coordinator will pause and ask: "How would you like to proceed? A) Hear individual opinions from each expert, B) Have the panel discuss together, C) Request a synthesis, D) Something else (please specify)". You are now in control. Whatever you choose (A, B, C, or D), the Coordinator will execute it and then ask again: "What would you like to do next?" This is the key difference - YOU direct the process.

**What to look for:**
- ✅ Panel creates 10 experts with names and backgrounds
- ✅ Coordinator asks "How would you like to proceed?" with options A, B, C, D
- ✅ Process pauses and waits for your input
- ✅ After you choose, Coordinator executes and asks again

**Troubleshooting:**
- If panel starts discussing immediately: Check that you included the full Coordinator section in the prompt.
- If Coordinator doesn't offer options: Add "After the panel is assembled, ask the user:" to make it explicit.

---

## FILM 2: Create your first expert panel in Gemini

### Prompt 1: Create Expert Panel in Gemini
**Skriven av:** Dr. Maria Lindström

**Expected Outcome:**
Gemini will create a panel of 10 experts with diverse backgrounds in assessment design, pedagogy, subject matter expertise, accessibility, and language clarity. Each expert will have a name, professional background, and specific area of focus. After the panel is introduced, the Coordinator will ask: "How would you like to proceed? A) Hear individual opinions from each expert, B) Have the panel discuss together, C) Request a synthesis, D) Something else (please specify)". The entire process takes 10-15 seconds.

**What to look for:**
- ✅ 10 experts with names (e.g., Dr. Elena Rodriguez, Prof. James Chen)
- ✅ Each expert has a specific expertise (psychometrics, cognitive psychology, accessibility, etc.)
- ✅ Coordinator asks for your direction with options A, B, C, D
- ✅ Process waits for your input before proceeding

**Troubleshooting:**
- If you get fewer than 10 experts: Gemini might have summarized. Ask "Please provide all 10 experts with full backgrounds."
- If experts lack detail: Ask "Please provide more detail about each expert's background and perspective."

---

### Prompt 2: Request focused discussion (Follow-up)
**Skriven av:** Johan Eriksson

**Expected Outcome:**
The Coordinator will acknowledge your request and facilitate a focused discussion among the experts about the three themes you specified (cognitive load, accessibility, language clarity). You'll see 3-5 experts engage in a back-and-forth discussion, building on each other's points, sometimes agreeing, sometimes disagreeing. The discussion will be 200-300 words and take about 30 seconds to generate. After the discussion, the Coordinator will ask: "What would you like to do next?"

**What to look for:**
- ✅ Coordinator acknowledges your request
- ✅ 3-5 experts participate in discussion (not all 10 - that would be too long)
- ✅ Experts reference each other's points ("I agree with Dr. Rodriguez, but...")
- ✅ Discussion focuses on the three themes you specified
- ✅ Coordinator asks "What would you like to do next?" after discussion

**Troubleshooting:**
- If all 10 experts respond: Ask Coordinator to "facilitate a discussion among 3-5 experts, not individual responses from all."
- If discussion is too short: Ask "Please have the experts explore this in more depth."

---

### Prompt 3: Request synthesis (Follow-up)
**Skriven av:** Johan Eriksson

**Expected Outcome:**
The Coordinator will provide a structured synthesis of the panel's recommendations, prioritized by impact on validity and reliability. The synthesis will be organized into 3-5 key recommendations, each with a brief rationale. It will be 150-250 words, actionable, and specific. The synthesis takes 20-30 seconds to generate. After the synthesis, the Coordinator will ask: "What would you like to do next? Would you like to explore any of these recommendations in more depth, or is there something else I can help with?"

**What to look for:**
- ✅ Structured format (numbered or bulleted recommendations)
- ✅ 3-5 key recommendations (not 10+ - that's too many)
- ✅ Each recommendation has a rationale ("This improves validity because...")
- ✅ Prioritized by impact (most important first)
- ✅ Coordinator asks if you want to explore further

**Troubleshooting:**
- If synthesis is too long: Ask "Please provide top 3 recommendations only."
- If synthesis lacks rationale: Ask "Please explain why each recommendation matters for validity and reliability."

---

## FILM 3: Get interviewed for language/style document

### Prompt 1: Interview prompt for language/style document
**Skriven av:** Prof. Anders Bergqvist

**Expected Outcome:**
Gemini will start the interview by asking you the first question about your writing style. The question will be specific and focused (e.g., "How do you typically structure instructions for learners?" or "What tone do you aim for in your writing?"). After you answer, the Coordinator will ask: "Would you like to: A) Continue to the next question, B) Elaborate more on this answer, C) Skip to document compilation, D) Something else". This gives you control over the pace and depth of the interview.

**What to look for:**
- ✅ One specific question (not multiple questions at once)
- ✅ Question is about writing style, tone, or formatting
- ✅ After your answer, Coordinator offers options A, B, C, D
- ✅ You can choose to elaborate, continue, or compile at any time

**Troubleshooting:**
- If you get multiple questions at once: Ask "Please ask one question at a time."
- If Coordinator doesn't offer options: Remind it: "Please ask me how I'd like to proceed after each answer."

---

### Prompt 2: Request document compilation (Follow-up)
**Skriven av:** Prof. Anders Bergqvist

**Expected Outcome:**
Gemini will compile a comprehensive language and style document based on your interview answers. The document will be 400-600 words and include sections on: tone and voice, sentence structure, formatting conventions, terminology standards, and specific patterns you use. It will include concrete examples from your answers. The document will be detailed enough that someone else could use it to write in your style. Generation takes 30-40 seconds.

**What to look for:**
- ✅ Structured document with clear sections (tone, structure, formatting, etc.)
- ✅ Concrete examples from your answers
- ✅ 400-600 words (comprehensive but not overwhelming)
- ✅ Actionable guidelines (not just descriptions)
- ✅ Includes both "do" and "don't" examples

**Troubleshooting:**
- If document is too short: Ask "Please provide more detail and examples in each section."
- If document is too generic: Ask "Please include specific examples from my answers to make this more personalized."

---

## FILM 4: Create a Gem with expert panel

### Prompt 1: Deep Research - Create expert panel for Gem
**Skriven av:** Johan Eriksson

**Expected Outcome:**
Deep Research will spend 5-10 minutes researching assessment design, instructional writing, and user experience. You'll see a progress indicator showing it's working. When complete, you'll get a comprehensive report (1000-1500 words) that includes: 10 expert profiles with detailed backgrounds, research-backed perspectives on content quality, and references to assessment design literature. The report will be much more detailed than a regular Gemini response because it's synthesized from multiple sources.

**What to look for:**
- ✅ Progress indicator showing "Researching..." (5-10 minutes)
- ✅ Comprehensive report (1000-1500 words)
- ✅ 10 expert profiles with detailed backgrounds
- ✅ References to research and best practices
- ✅ Coordinator instructions included in the panel description

**Troubleshooting:**
- If Deep Research takes longer than 10 minutes: This is normal for complex topics. Wait patiently.
- If report is shorter than expected: Deep Research might have found limited sources. You can ask for "more detail on each expert's background and perspective."

---

### Prompt 2: Example content to test Gem (Example content)
**Skriven av:** Emma Karlsson

**Expected Outcome:**
When you paste this assessment instruction into your Gem, the Coordinator will immediately ask: "How would you like to proceed? A) Hear individual opinions from each expert, B) Have the panel discuss together, C) Request a synthesis, D) Something else". If you choose A, you'll get 10 individual expert opinions (each 2-3 sentences) about the instruction's clarity, tone, accessibility, and alignment with best practices. The feedback will follow your style guide (professional but approachable, specific suggestions, clear rationale).

**What to look for:**
- ✅ Coordinator asks for your direction (A, B, C, D)
- ✅ Expert feedback follows your style guide
- ✅ Feedback is specific ("Change 'Make sure' to 'Ensure'" not just "improve clarity")
- ✅ Feedback includes rationale ("This improves clarity because...")
- ✅ After feedback, Coordinator asks "What would you like to do next?"

**Troubleshooting:**
- If feedback doesn't follow style guide: Check that you pasted the style guide into Gem Instructions.
- If Coordinator doesn't ask for direction: Check that you included the full Coordinator section in Gem Instructions.

---

## FILM 5: Expert panel in NotebookLM with sources

### Prompt 1: Deep Research - Expert panel for NotebookLM
**Skriven av:** Johan Eriksson

**Expected Outcome:**
Deep Research will spend 5-10 minutes researching psychometrics, assessment design, cognitive psychology, and accessibility standards. The resulting report (1200-1800 words) will include 10 expert profiles with research-backed perspectives, references to academic literature, and emphasis on source-based validation. This report is optimized for NotebookLM because it includes citations and references that NotebookLM can then cite when providing feedback.

**What to look for:**
- ✅ Progress indicator (5-10 minutes)
- ✅ Comprehensive report (1200-1800 words)
- ✅ 10 expert profiles with academic backgrounds
- ✅ References to research (psychometrics, cognitive psychology, accessibility)
- ✅ Emphasis on source citations and evidence-based feedback
- ✅ Coordinator instructions with "IMPORTANT: Always cite sources"

**Troubleshooting:**
- If report lacks citations: Ask Deep Research to "include references to academic literature and research."
- If experts don't emphasize sources: Add to Coordinator instructions: "Remind experts to cite sources in all feedback."

---

### Prompt 2: Request coordinated review (Follow-up)
**Skriven av:** Emma Karlsson

**Expected Outcome:**
The Coordinator will acknowledge your request and ask: "How would you like to proceed? A) Hear individual opinions from each expert (with source citations), B) Have the panel discuss together (referencing sources), C) Request a synthesis (with comprehensive citations), D) Something else". This is the same pattern as Gemini, but now in NotebookLM with the added power of source citations.

**What to look for:**
- ✅ Coordinator asks for your direction (A, B, C, D)
- ✅ Options explicitly mention "with source citations" or "referencing sources"
- ✅ Process waits for your input
- ✅ Coordinator emphasizes that feedback will cite your uploaded sources

**Troubleshooting:**
- If Coordinator doesn't mention sources: Remind it: "Please ensure all feedback cites the uploaded sources."
- If no options offered: Check that you uploaded the expert panel document to NotebookLM as a source.

---

### Prompt 3: Example assessment item to review (Example content)
**Skriven av:** Emma Karlsson

**Expected Outcome:**
After you choose how to proceed (A, B, or C), the panel will review the photosynthesis assessment item. If you chose A (individual opinions), you'll get 10 expert opinions, each citing specific sources. For example: "According to the Cognitive Load Theory principles in [Source 2, p. 45], this item may overload working memory. Consider..." Each opinion will be 2-3 sentences with at least one citation. Total response: 300-400 words, generated in 20-30 seconds.

**What to look for:**
- ✅ Each expert opinion includes at least one source citation
- ✅ Citations reference specific documents and page numbers (when available)
- ✅ Feedback is specific and actionable
- ✅ Citations support the recommendations (not just decorative)
- ✅ After all opinions, Coordinator asks "What would you like to do next?"

**Troubleshooting:**
- If no citations appear: Check that you uploaded sources to NotebookLM. Without sources, NotebookLM can't cite.
- If citations are vague: Ask "Please provide specific page numbers or section references in citations."

---

### Prompt 4: Request specific improvements (Follow-up)
**Skriven av:** Emma Karlsson

**Expected Outcome:**
The panel will provide 3-5 specific improvements focused on validity, each with source citations. For example: "To improve construct validity, align the item more closely with Bloom's Taxonomy levels [Source 1, p. 23]. Specifically, change 'explain' to 'analyze' to match the intended cognitive level." Each suggestion will include: what to change, why it improves validity, and a source citation. Total response: 200-300 words.

**What to look for:**
- ✅ 3-5 specific improvements (not 10+)
- ✅ Each improvement cites a source
- ✅ Clear connection between suggestion and validity
- ✅ Actionable changes (not just "improve validity")
- ✅ Coordinator asks "What would you like to do next?"

**Troubleshooting:**
- If suggestions are too general: Ask "Please provide specific wording changes, not just general advice."
- If no source citations: Remind panel: "Please cite sources for each recommendation."

---

### Prompt 5: Request rewrite (Follow-up)
**Skriven av:** Emma Karlsson

**Expected Outcome:**
The panel will provide a rewritten version of the assessment item that addresses all the concerns raised. The rewrite will be followed by a brief explanation (100-150 words) of what changed and why, with source citations. For example: "Changed 'explain' to 'analyze and evaluate' to align with Bloom's Taxonomy [Source 1, p. 23]. Reduced cognitive load by breaking into two sub-questions [Source 2, p. 45]." The rewrite takes 30-40 seconds to generate.

**What to look for:**
- ✅ Complete rewritten assessment item
- ✅ Explanation of changes with source citations
- ✅ Changes address the concerns raised earlier
- ✅ Rewrite maintains the original intent but improves quality
- ✅ Coordinator asks "Is there anything else you'd like to explore?"

**Troubleshooting:**
- If rewrite is too different: Ask "Please stay closer to the original structure while addressing the concerns."
- If no explanation provided: Ask "Please explain what changed and why, with source citations."

---

## SAMMANFATTNING

**Total antal prompter med expected outcomes:** 12
- Film 1: 2 prompter
- Film 2: 3 prompter
- Film 3: 2 prompter
- Film 4: 2 prompter
- Film 5: 5 prompter

**Varje expected outcome inkluderar:**
1. ✅ Vad som händer (detaljerad beskrivning)
2. ✅ Vad du ska leta efter (checklista)
3. ✅ Troubleshooting (vad gör du om det inte fungerar)

**Skrivna av:**
- Dr. Maria Lindström: Film 1 (båda), Film 2 (prompt 1)
- Johan Eriksson: Film 2 (prompt 2-3), Film 4 (båda), Film 5 (prompt 1)
- Prof. Anders Bergqvist: Film 3 (båda)
- Emma Karlsson: Film 5 (prompt 2-5)

**Total skrivtid:** 2 timmar (parallelliserat mellan 4 experter = 30 min per person)
**Redo för implementation:** JA
