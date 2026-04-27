
        let slidesData = [];
        let currentSlideIndex = 0;

        // Load slides from JSON
        async function loadSlides() {
            try {
                const response = await fetch('slides.json?t=' + new Date().getTime());
                const data = await response.json();
                slidesData = data.slides;
                renderCardView();
            } catch (error) {
                console.error('Failed to load slides:', error);
                document.getElementById('cardView').innerHTML = '<p style="padding:2rem;opacity:0.5">Kunde inte ladda slides.json</p>';
            }
        }

        // Render card grid
        function renderCardView() {
            const container = document.getElementById('cardView');
            container.innerHTML = slidesData.map((slide, index) => {
                const bgStyle = slide.background
                    ? `background-image: linear-gradient(rgba(10, 10, 30, 0.5), rgba(10, 10, 30, 0.7)), url('${slide.background}'); background-size: cover; background-position: center;`
                    : '';
                const cardTitle = getCardTitle(slide);
                return `
                <div class="slide-card" onclick="openSlide(${index})" style="${bgStyle}">
                    <span class="card-type">${slide.type}</span>
                    <span class="card-title">${cardTitle}</span>
                    <span class="card-id">${slide.id}</span>
                </div>
            `}).join('');
        }

        function getCardTitle(slide) {
            // Prioritera title, sedan author för quotes, sedan andra fält
            if (slide.title) return slide.title;
            if (slide.type === 'quote' && slide.author) return slide.author;
            if (slide.name) return slide.name;
            if (slide.value) return slide.value;
            if (slide.type === 'quote' && slide.text) {
                // Extrahera första 30 tecken av texten
                const cleanText = slide.text.replace(/\*/g, '').substring(0, 35);
                return cleanText + '...';
            }
            return 'Slide';
        }

        function getTypeIcon(type) {
            const icons = {
                'title': '🎬',
                'presenter': '👤',
                'stat': '📊',
                'quote': '💬',
                'grid': '📦',
                'quad-flip': '🔄',
                'traffic-light': '🚦',
                'incidents': '⚠️',
                'tool-links': '🔧',
                'token-demo': '🧠',
                'step-slide': '📖',
                'prompt-demo': '✨',
                'video-link': '🎬'
            };
            return icons[type] || '📄';
        }

        // Open slide in fullscreen
        function openSlide(index) {
            currentSlideIndex = index;
            renderCurrentSlide();
            document.getElementById('cardView').classList.add('hidden');
            document.getElementById('slideView').classList.add('active');
        }

        function closeSlide() {
            document.getElementById('slideView').classList.remove('active');
            document.getElementById('slideView').classList.remove('dimmed');
            document.getElementById('dimmerBtn').classList.remove('active');
            document.getElementById('cardView').classList.remove('hidden');
        }

        function openLightbox(imageSrc) {
            const lb = document.getElementById('slideLightbox');
            const content = document.getElementById('lightboxContent');
            lb.classList.add('visible');
            content.innerHTML = `<img src="${imageSrc}" style="width:100%;max-height:80vh;object-fit:contain;border-radius:12px;">`;
            document.getElementById('lightboxClose').onclick = () => { lb.classList.remove('visible'); };
            lb.onclick = (e) => { if(e.target === lb) lb.classList.remove('visible'); };
        }

        function toggleDimmer() {
            const slideView = document.getElementById('slideView');
            const dimmerBtn = document.getElementById('dimmerBtn');
            slideView.classList.toggle('dimmed');
            dimmerBtn.classList.toggle('active');
        }

        function toggleFullScreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(err => {
                    console.log(`Kunde inte starta helskärm: ${err.message}`);
                });
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                }
            }
        }

        function prevSlide() {
            if (currentSlideIndex > 0) {
                currentSlideIndex--;
                renderCurrentSlide();
            }
        }

        function nextSlide() {
            if (currentSlideIndex < slidesData.length - 1) {
                currentSlideIndex++;
                renderCurrentSlide();
            }
        }

        function renderCurrentSlide() {
            window.handleNextStep = null;
            const slide = slidesData[currentSlideIndex];
            const content = document.getElementById('slideContent');
            const slideView = document.getElementById('slideView');
            document.getElementById('slideIdDisplay').textContent = `${currentSlideIndex + 1}/${slidesData.length} • ${slide.id}`;

            // Apply background image if specified
            if (slide.background) {
                slideView.style.backgroundImage = `linear-gradient(rgba(10, 10, 30, 0.7), rgba(10, 10, 30, 0.8)), url('${slide.background}')`;
                slideView.style.backgroundSize = 'cover';
                slideView.style.backgroundPosition = 'center';
            } else {
                slideView.style.backgroundImage = '';
            }

            switch (slide.type) {
                case 'title': content.innerHTML = renderTitle(slide); break;
                case 'presenter': content.innerHTML = renderPresenter(slide); break;
                case 'stat': content.innerHTML = renderStat(slide); break;
                case 'quote': content.innerHTML = renderQuote(slide); break;
                case 'grid': content.innerHTML = renderGrid(slide); break;
                case 'quad-flip': content.innerHTML = renderQuadFlip(slide); break;
                case 'modal-cards': content.innerHTML = renderModalCards(slide); break;
                case 'traffic-light': content.innerHTML = renderTrafficLight(slide); break;
                case 'incidents': content.innerHTML = renderIncidents(slide); break;
                case 'tool-links': content.innerHTML = renderToolLinks(slide); break;
                case 'token-demo': content.innerHTML = renderTokenDemo(slide); break;
                case 'prompt-demo': content.innerHTML = renderPromptDemo(slide); break;
                case 'video-link': content.innerHTML = renderVideoLink(slide); break;
                case 'step-slide': content.innerHTML = renderStepSlide(slide); break;
                case 'case-grid': content.innerHTML = renderCaseGrid(slide); break;
                case 'rewrite-progression': 
                    content.innerHTML = renderRewriteProgression(slide); 
                    setTimeout(() => initRewriteProgression(content.querySelector('.slide-rewrite'), slide.steps, slide.prefix||[]), 100);
                    break;
                default: content.innerHTML = `<p>Unknown slide type: ${slide.type}</p>`;
            }
            updateSourceButton();
        }

        // ===== SLIDE RENDERERS =====
        function renderTitle(s) {
            return `<div class="slide-title-type">
                <h1>${s.title}</h1>
                <div class="subtitle">${s.subtitle || ''}</div>
                <div class="meta">${s.meta || ''}</div>
            </div>`;
        }

        function renderPresenter(s) {
            const avatarContent = s.avatar
                ? `<img src="${s.avatar}" alt="${s.name}">`
                : '👤';
            return `<div class="slide-presenter">
                <div class="avatar">${avatarContent}</div>
                <h2>${s.name}</h2>
                <div class="title-org">${s.title} • ${s.org}</div>
                <div class="bio">${s.bio || ''}</div>
                ${s.contact ? `<div class="contact">${s.contact}</div>` : ''}
            </div>`;
        }

        function renderStat(s) {
            return `<div class="slide-stat">
                <div class="stat-value">${s.value}</div>
                <div class="stat-label">${s.label}</div>
                <div class="stat-source">Källa: ${s.source}</div>
            </div>`;
        }

        function renderQuote(s) {
            const isTypewriter = s.style === 'typewriter';
            const rawText = s.text;
            const slowSpeed = s.slowSpeed || false;
            if (isTypewriter) {
                // Return container, will animate after render
                setTimeout(() => typewriterAnimate(rawText, s.author, slowSpeed), 100);
                return `<div class="slide-quote typewriter">
                    <div class="quote-text" id="typewriterText"></div>
                    <div class="quote-author" id="typewriterAuthor" style="opacity:0"></div>
                </div>`;
            } else {
                const text = rawText.replace(/\*([^*]+)\*/g, '<span class="highlight">$1</span>');
                return `<div class="slide-quote">
                    <div class="quote-text">${text}</div>
                    ${s.author ? `<div class="quote-author">— ${s.author}</div>` : ''}
                </div>`;
            }
        }

        function typewriterAnimate(rawText, author, slowSpeed = false) {
            const container = document.getElementById('typewriterText');
            const authorEl = document.getElementById('typewriterAuthor');
            const baseDelay = slowSpeed ? 60 : 30;
            const randomDelay = slowSpeed ? 80 : 40;
            if (!container) return;

            // Process text to handle *highlights*
            let chars = [];
            let inHighlight = false;
            let i = 0;
            while (i < rawText.length) {
                if (rawText[i] === '*') {
                    inHighlight = !inHighlight;
                    i++;
                } else {
                    chars.push({ char: rawText[i], highlight: inHighlight });
                    i++;
                }
            }

            container.innerHTML = '';
            let charIndex = 0;

            function typeNext() {
                if (charIndex < chars.length) {
                    const c = chars[charIndex];
                    if (c.highlight) {
                        container.innerHTML = container.innerHTML.replace(/<span class="cursor"><\/span>$/, '');
                        container.innerHTML += `<span class="highlight">${c.char}</span><span class="cursor"></span>`;
                    } else {
                        container.innerHTML = container.innerHTML.replace(/<span class="cursor"><\/span>$/, '');
                        container.innerHTML += c.char + '<span class="cursor"></span>';
                    }
                    charIndex++;
                    setTimeout(typeNext, baseDelay + Math.random() * randomDelay);
                } else {
                    container.innerHTML = container.innerHTML.replace(/<span class="cursor"><\/span>$/, '');
                    container.innerHTML += '<span class="cursor"></span>';
                    if (author && authorEl) {
                        authorEl.textContent = author.startsWith('—') ? author : '— ' + author;
                        authorEl.style.opacity = '0.6';
                    }
                }
            }

            container.innerHTML = '<span class="cursor"></span>';
            setTimeout(typeNext, 500);
        }

        function renderGrid(s) {
            return `<div class="slide-grid">
                <h2>${s.title}</h2>
                <div class="grid-cards">
                    ${s.cards.map(c => `
                        <div class="grid-card">
                            <div class="grid-card-icon">${c.icon}</div>
                            <div class="grid-card-title">${c.title}</div>
                            <div class="grid-card-desc">${c.desc}</div>
                        </div>
                    `).join('')}
                </div>
            </div>`;
        }

        function renderQuadFlip(s) {
            return `<div class="slide-quad">
                <h2>⚠️ ${s.title}</h2>
                <div class="quad-grid">
                    ${s.cards.map(c => `
                        <div class="quad-card" onclick="this.classList.toggle('flipped')">
                            <div class="quad-front">
                                <div class="quad-icon">${c.icon}</div>
                                <div class="quad-title">${c.front}</div>
                            </div>
                            <div class="quad-back">${c.back}</div>
                        </div>
                    `).join('')}
                </div>
            </div>`;
        }

        function renderModalCards(s) {
            return `<div class="slide-modal-cards">
                <h2>${s.title}</h2>
                <div class="modal-cards-grid">
                    ${s.cards.map((c, i) => `
                        <div class="modal-card" style="--card-color:${c.color||'var(--accent)'}" onclick="showCardModal(${currentSlideIndex}, ${i})">
                            <div class="modal-card-icon">
                                ${c.icon.endsWith('.png') ? `<img src="${c.icon}" alt="${c.front}">` : c.icon}
                            </div>
                            <div class="modal-card-title">${c.front}</div>
                        </div>
                    `).join('')}
                </div>
            </div>`;
        }

        function showCardModal(slideIdx, cardIdx) {
            const card = slidesData[slideIdx].cards[cardIdx];
            const backText = card.back.replace(/\\n/g, '<br>').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
            document.getElementById('incidentModalContent').innerHTML = `
                <div class="card-modal-content" style="--card-color:${card.color||'var(--accent)'}">
                    <div class="card-modal-icon">
                        ${card.icon.endsWith('.png') ? `<img src="${card.icon}" alt="${card.front}">` : card.icon}
                    </div>
                    <h3 style="color: var(--card-color)">${card.front}</h3>
                    <div class="card-modal-text">${backText}</div>
                </div>
            `;
            document.getElementById('incidentModal').classList.add('active');
        }

        function renderTrafficLight(s) {
            return `<div class="slide-traffic">
                <h2>${s.title}</h2>
                <div class="traffic-grid">
                    <div class="traffic-col green">
                        <div class="traffic-header">✅ Grönt ljus</div>
                        <ul class="traffic-list">${s.green.map(i => `<li>${i}</li>`).join('')}</ul>
                    </div>
                    <div class="traffic-col yellow">
                        <div class="traffic-header">⚠️ Gult ljus</div>
                        <ul class="traffic-list">${s.yellow.map(i => `<li>${i}</li>`).join('')}</ul>
                    </div>
                    <div class="traffic-col red">
                        <div class="traffic-header">🛑 Rött ljus</div>
                        <ul class="traffic-list">${s.red.map(i => `<li>${i}</li>`).join('')}</ul>
                    </div>
                </div>
            </div>`;
        }

        function renderIncidents(s) {
            return `<div class="slide-incidents">
                <h2>${s.title}</h2>
                <div class="subtitle">${s.subtitle}</div>
                <div class="incidents-grid">
                    ${s.cases.map((c, i) => `
                        <div class="incident-card" onclick="showIncident(${currentSlideIndex}, ${i})">
                            <div class="incident-name">${c.name}</div>
                            <div class="incident-age">${c.age} år</div>
                            <div class="incident-platform">${c.platform} • ${c.date}</div>
                            <div class="incident-desc">${c.description}</div>
                        </div>
                    `).join('')}
                </div>
            </div>`;
        }

        function showIncident(slideIdx, caseIdx) {
            const incident = slidesData[slideIdx].cases[caseIdx];
            document.getElementById('incidentModalContent').innerHTML = `
                <h3>${incident.name}, ${incident.age} år</h3>
                <p>${incident.description}</p>
                ${incident.source ? `<p><a href="${incident.source}" target="_blank" class="source-button">Läs dokumentation →</a></p>` : ''}
            `;
            document.getElementById('incidentModal').classList.add('active');
        }

        function closeIncidentModal(e) {
            document.getElementById('incidentModal').classList.remove('active');
        }

        function showSources() {
            const slide = slidesData[currentSlideIndex];
            if (!slide.sources || slide.sources.length === 0) return;

            const content = document.getElementById('sourcesModalContent');
            content.innerHTML = `
                <h3>📚 Källor</h3>
                ${slide.sources.map(s => `
                    <div class="source-item">
                        <div class="source-name">${s.name}</div>
                        ${s.url ? `<a href="${s.url}" target="_blank" class="source-url">${s.url}</a>` : ''}
                    </div>
                `).join('')}
            `;
            document.getElementById('sourcesModal').classList.add('active');
        }

        function closeSourcesModal(e) {
            document.getElementById('sourcesModal').classList.remove('active');
        }

        function updateSourceButton() {
            const slide = slidesData[currentSlideIndex];
            const btn = document.getElementById('sourceBtn');
            if (slide.sources && slide.sources.length > 0) {
                btn.style.display = 'flex';
            } else {
                btn.style.display = 'none';
            }
        }

        function renderPromptDemo(s) {
            return `<div class="slide-prompt-demo">
                <h2>🧠 ${s.title}</h2>
                <div class="subtitle">${s.subtitle || 'En prompt att kopiera och använda i Gemini'}</div>
                <div class="prompt-box">
                    <button class="copy-btn" onclick="copyPrompt(this, '${s.id}')">📋 Kopiera</button>
                    <pre id="prompt-${s.id}">${s.prompt.replace(/\[([^\]]+)\]/g, '<span class="placeholder">[$1]</span>')}</pre>
                </div>
                ${s.example_topic ? `
                <div class="prompt-example">
                    <div class="prompt-example-label">💡 Exempel på ämne:</div>
                    <div class="prompt-example-text">"${s.example_topic}"</div>
                </div>
                ` : ''}
                ${s.why ? `
                <div class="prompt-why">
                    <strong>Varför?</strong> ${s.why}
                </div>
                ` : ''}
            </div>`;
        }

        function copyPrompt(btn, id) {
            const pre = document.getElementById('prompt-' + id);
            const text = pre.innerText.replace(/\s+/g, ' ').trim();
            navigator.clipboard.writeText(text).then(() => {
                btn.textContent = '✅ Kopierad!';
                btn.classList.add('copied');
                setTimeout(() => {
                    btn.textContent = '📋 Kopiera';
                    btn.classList.remove('copied');
                }, 2000);
            });
        }

        function renderVideoLink(s) {
            return `<div class="slide-video-link">
                <h2>${s.icon || '🎬'} ${s.title}</h2>
                <div class="subtitle">${s.subtitle || ''}</div>
                <a href="${s.url}" target="_blank" class="video-play-button">
                    <div class="play-icon">▶</div>
                    <div class="play-text">Spela video</div>
                </a>
                <p class="video-description">${s.description || ''}</p>
            </div>`;
        }

        // ===== STEP-SLIDE RENDERER =====
        let currentStepIndex = 0;

        function renderStepSlide(s) {
            currentStepIndex = 0;
            window.handleNextStep = () => {
                if (currentStepIndex < s.steps.length - 1) {
                    currentStepIndex++;
                    updateStepDisplay();
                    return true;
                }
                return false;
            };
            let html = `<div class="slide-step">
                <div class="step-container" onclick="if(window.handleNextStep && !window.handleNextStep()) nextSlide();">`;

            s.steps.forEach((step, i) => {
                html += `<div class="step-content ${i === 0 ? 'active' : ''}" data-step="${i}">`;

                if (step.type === 'headline') {
                    html += `<div class="step-title">${step.title}</div>
                             <div class="step-subtitle">${step.subtitle}</div>`;
                } else if (step.type === 'definition') {
                    html += `<div class="step-definition">${step.text}</div>`;
                } else if (step.type === 'list') {
                    html += `<ul class="step-list">`;
                    step.items.forEach(item => {
                        const hlClass = item.highlight ? ' class="highlight"' : '';
                        html += `<li${hlClass}><strong>${item.title}:</strong> <span>${item.desc}</span></li>`;
                    });
                    html += `</ul>`;
                    if (step.footer) {
                        html += `<div class="step-footer">${step.footer}</div>`;
                    }
                }

                html += `</div>`;
            });

            html += `</div>
                <div class="step-dots">
                    ${s.steps.map((_, i) => `<div class="step-dot ${i === 0 ? 'active' : ''}" onclick="goToStep(${i}, event)"></div>`).join('')}
                </div>
            </div>`;

            return html;
        }

        function goToStep(stepIndex, event) {
            event.stopPropagation();
            currentStepIndex = stepIndex;
            updateStepDisplay();
        }

        function updateStepDisplay() {
            const steps = document.querySelectorAll('.step-content');
            const dots = document.querySelectorAll('.step-dot');

            steps.forEach((step, i) => {
                step.classList.toggle('active', i === currentStepIndex);
            });
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentStepIndex);
            });
        }

        function renderCaseGrid(s) {
            return `<div class="slide-case-grid"><h2>${s.title}</h2><div class="cg-cards">
            ${s.cards.map((c, i) => `
                <div class="cg-card" style="--card-color:${c.color||'var(--accent)'}" onclick="this.classList.toggle('expanded')">
                <div class="cg-title">${c.title}</div>
                ${c.image ? `<div class="cg-image-container" style="margin:16px 0;"><img src="${c.image}" style="width:100%; border-radius:8px; max-height:200px; object-fit:cover; cursor:zoom-in;" onclick="event.stopPropagation(); openLightbox('${c.image}')" /></div>` : ''}
                ${c.images && c.images.length > 0 ? `<div class="cg-image-grid" onclick="event.stopPropagation();">${c.images.map(img => `<img src="${img}" onclick="openLightbox('${img}')" />`).join('')}</div>` : ''}
                <div class="cg-desc">${c.desc}</div>
                </div>
            `).join('')}
            </div></div>`;
        }

        function renderRewriteProgression(s) {
            const tpl = s.template;
            const first = s.steps[0];
            const buildSentence = (step) => {
                let result = tpl;
                for (const key in step) {
                    result = result.replace(`{${key}}`, `<span class="rw-slot" data-key="${key}">${step[key]}</span>`);
                }
                return result;
            };
            return `<div class="slide-rewrite" id="rewrite-${s.id}" onclick="if(window.handleNextStep && window.handleNextStep()) return; else nextSlide();">
                <div class="rewrite-prefix" data-prefixes='${JSON.stringify(s.prefix||[])}'></div>
                <div class="rewrite-main">${buildSentence(first)}</div>
            </div>`;
        }

        function initRewriteProgression(container, steps, prefixes) {
            if(!container) return;
            let currentStep = 0;
            let animating = false;
            const mainEl = container.querySelector('.rewrite-main');
            const prefixEl = container.querySelector('.rewrite-prefix');

            async function eraseSlot(slot, text) {
                slot.classList.add('active');
                for (let i = text.length; i >= 0; i--) {
                slot.textContent = text.substring(0, i);
                await new Promise(r => setTimeout(r, 40));
                }
            }

            async function typeSlot(slot, text, isChanged) {
                for (let i = 0; i <= text.length; i++) {
                slot.textContent = text.substring(0, i);
                await new Promise(r => setTimeout(r, 50));
                }
                slot.classList.remove('active');
                if (isChanged) slot.classList.add('changed');
            }

            async function transitionTo(stepIdx) {
                animating = true;
                const step = steps[stepIdx];
                const prevStep = steps[stepIdx - 1];

                const slots = mainEl.querySelectorAll('.rw-slot');
                slots.forEach(slot => slot.classList.remove('changed'));

                if (prefixEl && prefixes[stepIdx - 1]) {
                prefixEl.textContent = prefixes[stepIdx - 1];
                prefixEl.classList.add('visible');
                await new Promise(r => setTimeout(r, 800));
                }

                for (const slot of slots) {
                const key = slot.dataset.key;
                if (prevStep[key] !== step[key]) {
                    await eraseSlot(slot, prevStep[key]);
                    await new Promise(r => setTimeout(r, 200));
                    await typeSlot(slot, step[key], true);
                }
                }

                await new Promise(r => setTimeout(r, 600));
                if (prefixEl) prefixEl.classList.remove('visible');
                animating = false;
            }

            window.handleNextStep = () => {
                if (animating) return true;
                if (currentStep < steps.length - 1) {
                    currentStep++;
                    transitionTo(currentStep);
                    return true;
                }
                return false;
            };
            
            container.onclick = function(e) {
                if (window.handleNextStep && !window.handleNextStep()) {
                    nextSlide();
                }
            };
        }

        function renderToolLinks(s) {
            return `<div class="slide-tools">
                <h2>${s.title}</h2>
                <div class="tools-grid">
                    ${s.tools.map(t => `
                        <a href="${t.url}" target="_blank" class="tool-card">
                            <div class="tool-icon">${t.icon}</div>
                            <div class="tool-name">${t.name}</div>
                            <div class="tool-desc">${t.desc}</div>
                        </a>
                    `).join('')}
                </div>
            </div>`;
        }

        function renderTokenDemo(s) {
            return `<div class="slide-token-demo">
                <h2>${s.title}</h2>
                ${s.description ? `<div class="desc">${s.description}</div>` : ''}
                <div class="demo-box">
                    <div class="prompt-area">
                        "${s.prompt}<span class="predicted" id="w1"></span><span class="predicted" id="w2"></span><span class="predicted" id="w3"></span><span class="token-cursor" id="tokenCursor"></span>"
                    </div>
                    <div class="options" id="tokenOptions">
                        <div class="option" onclick="selectToken(this,'livslångt')">livslångt <span class="probability">85%</span></div>
                        <div class="option" onclick="selectToken(this,'lustfyllt')">lustfyllt <span class="probability">10%</span></div>
                        <div class="option" onclick="selectToken(this,'tryggt')">tryggt <span class="probability">4%</span></div>
                        <div class="option" onclick="selectToken(this,'hållbart')">hållbart <span class="probability">1%</span></div>
                    </div>
                    <div class="explanation" id="tokenExplanation">
                        <strong>👆 Klicka på ett ord!</strong><br>AI:n ser "${s.prompt}" och beräknar sannolikheten för varje möjligt nästa ord.
                    </div>
                    <button class="reset-btn" onclick="resetTokenDemo()">↻ Börja om</button>
                </div>
            </div>`;
        }

        let tokenStep = 0;
        let selectedWords = [];

            // Complete branching tree: each word choice affects next options
            const tokenTree = {
                // Prompt: "Förskolan ska lägga grunden för ett"
                start: [
                    { word: 'livslångt', prob: '85%' },
                    { word: 'lustfyllt', prob: '10%' },
                    { word: 'tryggt', prob: '4%' },
                    { word: 'hållbart', prob: '1%' }
                ],
                'livslångt': [
                    { word: 'lärande', prob: '98%' },
                    { word: 'intresse', prob: '1%' },
                    { word: 'engagemang', prob: '0.5%' },
                    { word: 'utforskande', prob: '0.5%' }
                ],
                'lärande': [
                    { word: '.', prob: '50%' },
                    { word: 'som', prob: '30%' },
                    { word: 'och', prob: '15%' },
                    { word: 'genom', prob: '5%' }
                ],
                'som': [
                    { word: 'är', prob: '60%' },
                    { word: 'bygger', prob: '20%' },
                    { word: 'utgår', prob: '15%' },
                    { word: 'skapar', prob: '5%' }
                ],
                'är': [
                    { word: 'roligt', prob: '40%' },
                    { word: 'meningsfullt', prob: '30%' },
                    { word: 'tryggt', prob: '20%' },
                    { word: 'utmanande', prob: '10%' }
                ],
                'roligt': [
                    { word: '.', prob: '80%' },
                    { word: 'och', prob: '20%' }
                ],
                'meningsfullt': [
                    { word: '.', prob: '70%' },
                    { word: 'och', prob: '30%' }
                ],
                'tryggt': [
                    { word: 'klimat', prob: '60%' },
                    { word: 'liv', prob: '20%' },
                    { word: '.', prob: '15%' },
                    { word: 'lärande', prob: '5%' }
                ],
                'och': [
                    { word: 'meningsfullt', prob: '40%' },
                    { word: 'lärorikt', prob: '30%' },
                    { word: 'tryggt', prob: '20%' },
                    { word: 'roligt', prob: '10%' }
                ],
                'lärorikt': [
                    { word: '.', prob: '90%' },
                    { word: 'och', prob: '10%' }
                ],
                'klimat': [
                    { word: 'där', prob: '60%' },
                    { word: '.', prob: '20%' },
                    { word: 'och', prob: '15%' },
                    { word: 'för', prob: '5%' }
                ],
                'där': [
                    { word: 'alla', prob: '50%' },
                    { word: 'barn', prob: '30%' },
                    { word: 'lärande', prob: '15%' },
                    { word: 'vi', prob: '5%' }
                ],
                'alla': [
                    { word: 'barn', prob: '80%' },
                    { word: 'får', prob: '20%' }
                ],
                'barn': [
                    { word: 'får', prob: '60%' },
                    { word: 'kan', prob: '30%' },
                    { word: '.', prob: '10%' }
                ],
                'får': [
                    { word: 'utvecklas', prob: '70%' },
                    { word: 'leka', prob: '20%' },
                    { word: 'vara', prob: '10%' }
                ],
                'utvecklas': [
                    { word: '.', prob: '80%' },
                    { word: 'och', prob: '20%' }
                ],
                'lustfyllt': [
                    { word: 'lärande', prob: '80%' },
                    { word: 'utforskande', prob: '10%' },
                    { word: 'klimat', prob: '5%' },
                    { word: 'möte', prob: '5%' }
                ],
                'utforskande': [
                    { word: 'av', prob: '50%' },
                    { word: '.', prob: '30%' },
                    { word: 'i', prob: '15%' },
                    { word: 'och', prob: '5%' }
                ],
                'av': [
                    { word: 'omvärlden', prob: '60%' },
                    { word: 'naturen', prob: '20%' },
                    { word: 'språket', prob: '20%' }
                ],
                'omvärlden': [
                    { word: '.', prob: '90%' },
                    { word: 'och', prob: '10%' }
                ],
                'hållbart': [
                    { word: 'samhälle', prob: '70%' },
                    { word: 'liv', prob: '15%' },
                    { word: 'lärande', prob: '10%' },
                    { word: 'och', prob: '5%' }
                ],
                'samhälle': [
                    { word: '.', prob: '50%' },
                    { word: 'där', prob: '30%' },
                    { word: 'och', prob: '15%' },
                    { word: 'genom', prob: '5%' }
                ],
                'liv': [
                    { word: '.', prob: '50%' },
                    { word: 'i', prob: '20%' },
                    { word: 'och', prob: '20%' },
                    { word: 'som', prob: '10%' }
                ]
            };

            function selectToken(el, word) {
                if (tokenStep >= 3) return;
                document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
                el.classList.add('selected');
                const span = document.getElementById('w' + (tokenStep + 1));
                // Do not add space if the word is a period
                span.textContent = (word === '.' ? '' : ' ') + word;
                span.classList.add('visible');
                selectedWords.push(word);
                tokenStep++;

                if (tokenStep >= 3) {
                    document.getElementById('tokenOptions').style.display = 'none';
                    document.getElementById('tokenCursor').style.display = 'none';
                    document.getElementById('tokenExplanation').innerHTML = '<strong>✨ Klart!</strong><br><br>Så fungerar Generativ AI: den räknar ut nästa ord baserat på matematiska sannolikheter från sin träningsdata (tex. Läroplanen). <em>Varje ord du valde ändrade kontexten för nästa gissning</em> — utan att AI:n faktiskt "förstår" meningen.';
                } else {
                    // Show next set of options based on what was just selected
                    setTimeout(() => {
                        const nextOpts = tokenTree[word] || tokenTree['lärande'];
                        const container = document.getElementById('tokenOptions');
                        container.innerHTML = nextOpts.map(o =>
                            `<div class="option" onclick="selectToken(this,'${o.word}')">${o.word} <span class="probability">${o.prob}</span></div>`
                        ).join('');
                        document.getElementById('tokenExplanation').innerHTML = `<strong>Bra!</strong> Du valde "<em>${word}</em>" — nu har kontexten ändrats och gissningsmaskinen beräknar nya sannolikheter.`;
                    }, 300);
                }
        }

        function resetTokenDemo() {
            tokenStep = 0;
            selectedWords = [];
            ['w1', 'w2', 'w3'].forEach(id => {
                const el = document.getElementById(id);
                if (el) { el.textContent = ''; el.classList.remove('visible'); }
            });
            const cursor = document.getElementById('tokenCursor');
            const opts = document.getElementById('tokenOptions');
            if (cursor) cursor.style.display = 'inline-block';
            if (opts) {
                opts.style.display = 'flex';
                opts.innerHTML = tokenTree.start.map(o =>
                    `<div class="option" onclick="selectToken(this,'${o.word}')">${o.word} <span class="probability">${o.prob}</span></div>`
                ).join('');
            }
            const expl = document.getElementById('tokenExplanation');
            if (expl) expl.innerHTML = '<strong>👆 Klicka på ett ord!</strong><br>AI:n ser prompten och beräknar matematiskt sannolikheten för varje möjligt nästa ord baserat på Lpfö 18.';
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            
            if (!document.getElementById('slideView').classList.contains('active')) return;
            
            if (e.key === 'Escape') {
                closeSlide();
            } else if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault();
                if (window.handleNextStep && window.handleNextStep()) return;
                nextSlide();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prevSlide();
            }
        });

        // Init
        loadSlides();
    