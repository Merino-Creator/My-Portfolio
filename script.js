function init() {
    loadTemplates();
}

function highlightWords() {
    const legalNoticeRef = document.getElementById('legalNoticeText');
    const words = ['Portfolio', 'Developer Akademie GmbH', 'Developer Akademie'];
    if (!legalNoticeRef) return;

    let html = legalNoticeRef.innerHTML;

    words.forEach(word => {
        const regex = new RegExp(word, 'g');
        html = html.replace(regex, `<span class="highlight">${word}</span>`);
    });

    legalNoticeRef.innerHTML = html;
}

highlightWords();

let helloBtn = document.getElementById('helloWorldBtn');

if (helloBtn) {
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

let joinImgWrapper = document.getElementById('joinImgWrapper');
let joinImg = document.getElementById('joinImg');

if (joinImgWrapper) {
    joinImgWrapper.onmouseover = () => {
        joinImg.style.animationPlayState = 'paused';
    };

    joinImgWrapper.onmouseout = () => {
        joinImg.style.animationPlayState = 'running';
    };
}

let languageBtn = document.getElementById('languageBtn');
let vectorPoint = document.getElementById('vectorPoint');
let englishBtn = document.getElementById('englishBtn');
let germanBtn = document.getElementById('germanBtn');

if (languageBtn) {
    let vectorPoint = document.getElementById('vectorPoint');
    let englishBtn = document.getElementById('englishBtn');
    let germanBtn = document.getElementById('germanBtn');

    languageBtn.onclick = () => {
        vectorPoint.classList.toggle('active');
        englishBtn.classList.toggle('active');
        germanBtn.classList.toggle('active');
    };
}

let sendBtn = document.getElementById('sendBtn');

if (sendBtn) {
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

let nameQuestion = document.getElementById('nameQuestion');
let emailQuestion = document.getElementById('emailQuestion');
let helpQuestion = document.getElementById('helpQuestion');
let barOne = document.getElementById('barOne');
let barTwo = document.getElementById('barTwo');
let barThree = document.getElementById('barThree');
let barFour = document.getElementById('barFour');

if (nameQuestion) {
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

let skillRight = document.querySelector('.skill-right');
let peelStart = document.querySelector('.peel-img-start');

if (skillRight) {
    skillRight.onclick = () => {
        skillRight.classList.toggle('peeled');
    };
}