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
    helloBtn.onmouseover = () => {
        helloBtn.textContent = "I´M DANIEL STUERMER";
        helloBtn.classList.add('expanded');
    };

    helloBtn.onmouseout = () => {
        helloBtn.textContent = "Hello world";
        helloBtn.classList.remove('expanded');
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