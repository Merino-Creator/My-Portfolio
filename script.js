function init() {
    if (window.location.hash) {
        history.replaceState(null, null, window.location.pathname + window.location.search);
    }

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
    applyStoredLanguage();
    initScrollRestore();
    restoreScrollPosition();
    initNavLinkClear();
    scrollToHashAfterLoad();
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

    joinImg.style.animation = 'float 3s ease-in-out infinite';

    joinImgWrapper.onmouseover = () => {
        joinImg.style.animation = 'none';
    };

    joinImgWrapper.onmouseout = () => {
        joinImg.style.animation = 'float 3s ease-in-out infinite';
    };
}

function initLanguageBtn() {
    let languageBtn = document.getElementById('languageBtn');
    if (!languageBtn) return;

    let toggleBar = document.getElementById('toggleBar');
    let vectorPoint = document.getElementById('vectorPoint');
    let englishBtn = document.getElementById('englishBtn');
    let germanBtn = document.getElementById('germanBtn');

    function setLanguage(lang) {
        if (lang === 'en') {
            vectorPoint.classList.remove('active');
            englishBtn.classList.add('active');
            germanBtn.classList.remove('active');
        } else {
            vectorPoint.classList.add('active');
            germanBtn.classList.add('active');
            englishBtn.classList.remove('active');
        }
        switchLanguage(lang);
    }

    toggleBar.onclick = () => {
        let currentLang = englishBtn.classList.contains('active') ? 'en' : 'de';
        let nextLang = currentLang === 'en' ? 'de' : 'en';
        setLanguage(nextLang);
    };

    englishBtn.onclick = () => {
        if (englishBtn.classList.contains('active')) return;
        setLanguage('en');
    };

    germanBtn.onclick = () => {
        if (germanBtn.classList.contains('active')) return;
        setLanguage('de');
    };
}

function switchLanguage(lang) {
    localStorage.setItem('preferredLanguage', lang);

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
    highlightWords();
}

function applyStoredLanguage() {
    let storedLang = localStorage.getItem('preferredLanguage') || 'en';

    if (storedLang === 'de') {
        let englishBtn = document.getElementById('englishBtn');
        let germanBtn = document.getElementById('germanBtn');
        let vectorPoint = document.getElementById('vectorPoint');

        englishBtn.classList.remove('active');
        germanBtn.classList.add('active');
        vectorPoint.classList.add('active');
    }

    switchLanguage(storedLang);
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

function isValidEmail(email) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
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
        let nameValid = nameInput.value.trim() && /[a-zA-ZäöüÄÖÜß]/.test(nameInput.value);

        if (nameValid && isValidEmail(emailInput.value.trim()) && helpInput.value.trim() && checkbox.checked) {
            sendBtn.disabled = false;
        } else {
            sendBtn.disabled = true;
        }
    }

    function showError(input, message) {
        let existing = input.parentElement.querySelector('.error-msg-formular');
        if (!existing) {
            input.insertAdjacentHTML('afterend', `<p class="error-msg-formular">${message}</p>`);
        }
    }

    function hideError(input) {
        let existing = input.parentElement.querySelector('.error-msg-formular');
        removeWithFade(existing);
    }

    function showEmailFormatError() {
        let existing = emailInput.parentElement.querySelector('.email-format-error');
        if (!existing) {
            emailInput.insertAdjacentHTML('afterend', `<p class="email-format-error">Please enter a valid email address.</p>`);
        }
    }

    function hideEmailFormatError() {
        let existing = emailInput.parentElement.querySelector('.email-format-error');
        removeWithFade(existing);
    }

    function removeWithFade(element) {
        if (!element) return;
        element.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => element.remove(), 300);
    }

    function checkPrivacyError() {
        let privacyText = document.querySelector('.contact-check p');
        let existing = document.querySelector('.privacy-error-msg');

        if (nameInput.value.trim() && emailInput.value.trim() && helpInput.value.trim() && !checkbox.checked) {
            if (!existing) {
                privacyText.insertAdjacentHTML('afterend', `<p class="privacy-error-msg">Please accept the privacy policy.</p>`);
            }
        } else {
            removeWithFade(existing);
        }
    }

    nameInput.oninput = () => {
        nameInput.value = nameInput.value.replace(/[^a-zA-ZäöüÄÖÜßé\s-]/g, '');
        checkForm();
        checkPrivacyError();
    };
    emailInput.oninput = () => { checkForm(); checkPrivacyError(); };
    helpInput.oninput = () => { checkForm(); checkPrivacyError(); };

    nameInput.onfocus = () => hideError(nameInput);
    emailInput.onfocus = () => { hideError(emailInput); hideEmailFormatError(); };
    helpInput.onfocus = () => hideError(helpInput);

    nameInput.onblur = () => {
        let nameValid = nameInput.value.trim() && /[a-zA-ZäöüÄÖÜß]/.test(nameInput.value);
        if (!nameValid) showError(nameInput, 'Oops! seems like your name is invalid');
        else hideError(nameInput);
    };

    emailInput.onblur = () => {
        if (!emailInput.value.trim()) {
            showError(emailInput, 'Hoppla! your mail is required.');
            hideEmailFormatError();
        } else if (!isValidEmail(emailInput.value.trim())) {
            hideError(emailInput);
            showEmailFormatError();
        } else {
            hideError(emailInput);
            hideEmailFormatError();
        }
    };

    helpInput.onblur = () => {
        if (!helpInput.value.trim()) showError(helpInput, 'What do you need to develop?');
        else hideError(helpInput);
    };

    checkbox.onclick = () => {
        checkmark.classList.toggle('visible');
        checkForm();
        checkPrivacyError();
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
                    showPopup('successPopup');
                    nameInput.value = '';
                    emailInput.value = '';
                    helpInput.value = '';
                    checkbox.checked = false;
                    checkmark.classList.remove('visible');
                    checkForm();
                } else {
                    showPopup('errorPopup');
                }
            })
            .catch(error => {
                showPopup('errorPopup');
                console.error(error);
            });
    };
}

function showPopup(id) {
    let popup = document.getElementById(id);
    popup.classList.add('show');

    setTimeout(() => {
        popup.classList.remove('show');
    }, 3000);
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

            mobileMenu.classList.remove('open');
        };
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
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

function initScrollRestore() {
    window.addEventListener('scroll', () => {
        sessionStorage.setItem('scrollPosition', window.scrollY);
    });
}

function restoreScrollPosition() {
    let skipRestore = sessionStorage.getItem('skipScrollRestore');

    if (skipRestore === 'true') {
        sessionStorage.removeItem('skipScrollRestore');
        return;
    }

    let savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition !== null) {
        setTimeout(() => {
            window.scrollTo(0, parseInt(savedPosition));
        }, 0);
    }
}

function initNavLinkClear() {
    document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            sessionStorage.setItem('skipScrollRestore', 'true');

            let href = link.getAttribute('href');
            if (href && href.includes('#')) {
                let hash = '#' + href.split('#')[1];
                sessionStorage.setItem('pendingHash', hash);
            }
        });
    });
}

function scrollToHashAfterLoad() {
    let hash = sessionStorage.getItem('pendingHash');
    if (hash) {
        sessionStorage.removeItem('pendingHash');
        let target = document.querySelector(hash);
        if (target) target.scrollIntoView();
    }
}