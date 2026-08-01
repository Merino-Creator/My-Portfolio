function init() {
    loadTemplates();
    initLanguageBtn();
    initHelloBtn();
    initJoinWrapper();
    initSendBtn();
    initContactBars();
    initPeel();
    highlightWords();
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
        helloBtn.textContent = "I´M DANIEL STUERMER";
        helloBtn.classList.add('expanded');
        helloWrapper.classList.add('expanded');
    };

    helloBtn.onmouseout = () => {
        helloBtn.textContent = "Hello world";
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

    languageBtn.onclick = () => {
        vectorPoint.classList.toggle('active');
        englishBtn.classList.toggle('active');
        germanBtn.classList.toggle('active');
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

    nameInput.oninput = checkForm;
    emailInput.oninput = checkForm;
    helpInput.oninput = checkForm;

    checkbox.onclick = () => {
        checkmark.classList.toggle('visible');
        checkForm();
    };
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
    if (!skillRight) return;

    skillRight.onclick = () => {
        skillRight.classList.toggle('peeled');
    };
}

function initSendBtn() {
    let sendBtn = document.getElementById('sendBtn');
    if (!sendBtn) return;

    let nameInput = document.getElementById('nameInput');
    let emailInput = document.getElementById('emailInput');
    let helpInput = document.getElementById('helpInput');

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

    nameInput.onblur = () => {
        if (!nameInput.value) showError(nameInput, 'Please enter your name.');
        else hideError(nameInput, 'Your name goes here');
    };

    nameInput.onfocus = () => hideError(nameInput, 'Your name goes here');

    let namePlaceholder = nameInput.placeholder;
    let emailPlaceholder = emailInput.placeholder;
    let helpPlaceholder = helpInput.placeholder;

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
}