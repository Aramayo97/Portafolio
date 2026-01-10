// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll() {
const h = window.innerHeight;
reveals.forEach(el => {
if (el.getBoundingClientRect().top < h - 100) {
el.classList.add('active');
}
});
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();


// Dark mode toggle
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
document.body.classList.toggle('dark');
toggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});