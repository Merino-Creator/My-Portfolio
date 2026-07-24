const btn = document.querySelector('.language-btn');
const point = document.querySelector('.vector-point');

btn.addEventListener('click', () => {
    point.classList.toggle('active');
});

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