const btn = document.querySelector('.language-btn');
const point = document.querySelector('.vector-point');

btn.addEventListener('click', () => {
    point.classList.toggle('active');
});