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

helloBtn.onmouseover = () => {
    helloBtn.textContent = "I´M DANIEL STUERMER";
    helloBtn.classList.add('expanded');
    helloBtn.parentElement.classList.add('expanded');
};

helloBtn.onmouseout = () => {
    helloBtn.textContent = "Hello world";
    helloBtn.classList.remove('expanded');
    helloBtn.parentElement.classList.remove('expanded');
};

let joinImgWrapper = document.getElementById('joinImgWrapper');
let joinImg = document.getElementById('joinImg');

joinImgWrapper.onmouseover = () => {
    joinImg.style.animationPlayState = 'paused';
};

joinImgWrapper.onmouseout = () => {
    joinImg.style.animationPlayState = 'running';
};

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