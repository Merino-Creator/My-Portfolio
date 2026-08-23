function init() {
    loadTemplates();
    initLanguageBtn();
    initHelloBtn();
    initJoinWrapper();
    initSendBtn();
    initContactBars();
    initPeel();
    highlightWords();
    splitLetters();
    initBurgerMenu();
    getBasePath();
    initPhotoSignature();
}

function highlightWords() {
    const legalNoticeRef = document.getElementById('legalNoticeText');
    if (!legalNoticeRef) return;

    const words = ['Portfolio', 'Developer Akademie GmbH', 'Developer Akademie'];
    let html = legalNoticeRef.innerHTML;

    words.forEach(word => {
        const regex = new RegExp(word, 'g');
        html = html.replace(regex, `<span class="highlight">${word}</span>`);
    });

    legalNoticeRef.innerHTML = html;
}

function initHelloBtn() {
    let helloBtn = document.getElementById('helloWorldBtn');
    if (!helloBtn) return;

    let helloWrapper = helloBtn.parentElement;

    helloBtn.onmouseover = () => {
        let currentLang = document.getElementById('englishBtn').classList.contains('active') ? 'en' : 'de';
        helloBtn.textContent = translations[currentLang].heroHelloWorldHover;
        helloBtn.classList.add('expanded');
        helloWrapper.classList.add('expanded');
    };

    helloBtn.onmouseout = () => {
        let currentLang = document.getElementById('englishBtn').classList.contains('active') ? 'en' : 'de';
        helloBtn.textContent = translations[currentLang].heroHelloWorld;
        helloBtn.classList.remove('expanded');
        helloWrapper.classList.remove('expanded');
    };
}

function initJoinWrapper() {
    let joinImgWrapper = document.getElementById('joinImgWrapper');
    let joinImg = document.getElementById('joinImg');
    if (!joinImgWrapper) return;

    joinImgWrapper.onmouseover = () => {
        joinImg.style.animationPlayState = 'paused';
    };

    joinImgWrapper.onmouseout = () => {
        joinImg.style.animationPlayState = 'running';
    };
}

function initLanguageBtn() {
    let languageBtn = document.getElementById('languageBtn');
    if (!languageBtn) return;

    let vectorPoint = document.getElementById('vectorPoint');
    let englishBtn = document.getElementById('englishBtn');
    let germanBtn = document.getElementById('germanBtn');

    englishBtn.onclick = () => {
        if (englishBtn.classList.contains('active')) return;
        vectorPoint.classList.remove('active');
        englishBtn.classList.add('active');
        germanBtn.classList.remove('active');
        switchLanguage('en');
    };

    germanBtn.onclick = () => {
        if (germanBtn.classList.contains('active')) return;
        vectorPoint.classList.add('active');
        germanBtn.classList.add('active');
        englishBtn.classList.remove('active');
        switchLanguage('de');
    };
}

function switchLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.dataset.i18nPlaceholder;
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    document.body.classList.toggle('lang-de', lang === 'de');

    splitLetters();
}

function initContactBars() {
    let nameQuestion = document.getElementById('nameQuestion');
    if (!nameQuestion) return;

    let emailQuestion = document.getElementById('emailQuestion');
    let helpQuestion = document.getElementById('helpQuestion');
    let barOne = document.getElementById('barOne');
    let barTwo = document.getElementById('barTwo');
    let barThree = document.getElementById('barThree');
    let barFour = document.getElementById('barFour');

    nameQuestion.onmouseover = () => {
        barOne.style.backgroundColor = 'var(--main-color-two)';
        barTwo.style.backgroundColor = 'var(--main-color-two)';
    };
    nameQuestion.onmouseout = () => {
        barOne.style.backgroundColor = '';
        barTwo.style.backgroundColor = '';
    };

    emailQuestion.onmouseover = () => {
        barTwo.style.backgroundColor = 'var(--main-color-two)';
        barThree.style.backgroundColor = 'var(--main-color-two)';
    };
    emailQuestion.onmouseout = () => {
        barTwo.style.backgroundColor = '';
        barThree.style.backgroundColor = '';
    };

    helpQuestion.onmouseover = () => {
        barThree.style.backgroundColor = 'var(--main-color-two)';
        barFour.style.backgroundColor = 'var(--main-color-two)';
    };
    helpQuestion.onmouseout = () => {
        barThree.style.backgroundColor = '';
        barFour.style.backgroundColor = '';
    };
}

function initPeel() {
    let skillRight = document.querySelector('.skill-bottom-right');
    let skillRightMobile = document.querySelector('.skill-bottom-right-mobile');
    if (!skillRight) return;

    skillRight.onclick = () => {
        skillRight.classList.toggle('peeled');
    };

    skillRightMobile.onclick = (e) => {
        skillRightMobile.classList.toggle('peeled');
        e.currentTarget.blur();
        document.activeElement.blur();
    };
}

function initSendBtn() {
    let sendBtn = document.getElementById('sendBtn');
    if (!sendBtn) return;

    let nameInput = document.getElementById('nameInput');
    let emailInput = document.getElementById('emailInput');
    let helpInput = document.getElementById('helpInput');
    let checkbox = document.getElementById('checkbox');
    let checkmark = document.getElementById('checkmark');

    function checkForm() {
        if (nameInput.value && emailInput.value && helpInput.value && checkbox.checked) {
            sendBtn.disabled = false;
        } else {
            sendBtn.disabled = true;
        }
    }

    function showError(input, message) {
        let existing = input.parentElement.querySelector('.error-msg');
        if (!existing) {
            input.insertAdjacentHTML('afterend', `<p class="error-msg">${message}</p>`);
            input.placeholder = '';
            input.parentElement.querySelector('h4').style.color = 'var(--main-color-three)';
        }
    }

    function hideError(input, originalPlaceholder) {
        let existing = input.parentElement.querySelector('.error-msg');
        if (existing) {
            existing.remove();
            input.placeholder = originalPlaceholder;
            input.parentElement.querySelector('h4').style.color = '';
        }
    }

    let namePlaceholder = nameInput.placeholder;
    let emailPlaceholder = emailInput.placeholder;
    let helpPlaceholder = helpInput.placeholder;

    nameInput.oninput = checkForm;
    emailInput.oninput = checkForm;
    helpInput.oninput = checkForm;

    nameInput.onfocus = () => hideError(nameInput, namePlaceholder);
    emailInput.onfocus = () => hideError(emailInput, emailPlaceholder);
    helpInput.onfocus = () => hideError(helpInput, helpPlaceholder);

    nameInput.onblur = () => {
        if (!nameInput.value) showError(nameInput, 'Oops! it seems your name is missing');
        else hideError(nameInput, namePlaceholder);
    };

    emailInput.onblur = () => {
        if (!emailInput.value) showError(emailInput, 'Hoppla! your mail is required.');
        else hideError(emailInput, emailPlaceholder);
    };

    helpInput.onblur = () => {
        if (!helpInput.value) showError(helpInput, 'What do you need to develop?');
        else hideError(helpInput, helpPlaceholder);
    };

    checkbox.onclick = () => {
        checkmark.classList.toggle('visible');
        checkForm();
    };

    sendBtn.onclick = () => {
        let data = {
            name: nameInput.value,
            email: emailInput.value,
            message: helpInput.value
        };

        fetch('/contact_form_mail.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(result => {
                if (result.success) {
                    alert('Message sent successfully!');
                    nameInput.value = '';
                    emailInput.value = '';
                    helpInput.value = '';
                    checkbox.checked = false;
                    checkmark.classList.remove('visible');
                    checkForm();
                } else {
                    alert('Something went wrong.');
                }
            })
            .catch(error => {
                alert('Error sending message. Please try again later.');
                console.error(error);
            });
    };
}

function splitLetters() {
    const elements = document.querySelectorAll('.frontend-headline, .developer-headline');

    elements.forEach(el => {
        el.innerHTML = el.textContent.split('').map(letter =>
            `<span class="letter" data-letter="${letter}">${letter}</span>`
        ).join('');
    });

    document.querySelectorAll('.letter').forEach(span => {
        span.onmouseover = () => {
            const letter = span.dataset.letter;
            if (letter === letter.toUpperCase()) {
                span.textContent = letter.toLowerCase();
            } else {
                span.textContent = letter.toUpperCase();
            }
        };

        span.onmouseout = () => {
            span.textContent = span.dataset.letter;
        };
    });
}

function initBurgerMenu() {
    let burgerMenu = document.getElementById('burgerMenu');
    let mobileMenu = document.getElementById('mobileMenu');
    let closeBtn = document.querySelector('.mobile-menu-close-btn');
    if (!burgerMenu) return;

    burgerMenu.onclick = () => {
        mobileMenu.classList.toggle('open');
    };

    closeBtn.onclick = () => {
        mobileMenu.classList.remove('open');
    };

    let mobileLangBtns = mobileMenu.querySelectorAll('.mobile-lang-btn');
    let mobileVectorPoint = mobileMenu.querySelector('.vector-point');

    mobileLangBtns.forEach(btn => {
        btn.onclick = () => {
            mobileLangBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            mobileVectorPoint.classList.toggle('active');

            let lang = btn.textContent.trim() === 'EN' ? 'en' : 'de';
            switchLanguage(lang);

            let englishBtn = document.getElementById('englishBtn');
            let germanBtn = document.getElementById('germanBtn');
            let vectorPoint = document.getElementById('vectorPoint');
            englishBtn.classList.toggle('active', lang === 'en');
            germanBtn.classList.toggle('active', lang === 'de');
            vectorPoint.classList.toggle('active', lang === 'de');
        };
    });
}

function getBasePath() {
    return window.location.pathname.includes('/html/') ? '../' : './';
}

function initPhotoSignature() {
    let heroTopRight = document.querySelector('.hero-top-right, .hero-top-right-mobile');
    let signature = document.querySelector('.photo-signature, .photo-signature-mobile');
    if (!heroTopRight) return;

    let original = signature.textContent;
    let hoverText = original.replace(':)', ':D');

    heroTopRight.onmouseover = () => {
        signature.textContent = hoverText;
    };

    heroTopRight.onmouseout = () => {
        signature.textContent = original;
    };
}