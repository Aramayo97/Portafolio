const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
revealOnScroll();


const toggleBtn = document.getElementById("themeToggle");
const root = document.documentElement;

// Leer preferencia guardada
let darkMode = localStorage.getItem("darkMode") !== "false";

// Aplicar tema inicial
if (darkMode) {
    activarTemaRojo();
    toggleBtn.textContent = "🌙";
} else {
    activarTemaVerde();
    toggleBtn.textContent = "☀️";
}

// Alternar tema
toggleBtn.addEventListener("click", () => {
    darkMode = !darkMode;
    localStorage.setItem("darkMode", darkMode);

    if (darkMode) {
        activarTemaRojo();
        toggleBtn.textContent = "🌙";
    } else {
        activarTemaVerde();
        toggleBtn.textContent = "☀️";
    }
});

function activarTemaRojo() {
    root.style.setProperty("--bg-deep", "#0A0A0A");
    root.style.setProperty("--primary-neon", "#8B0000");
    root.style.setProperty("--accent-neon", "#C1121F");
    root.style.setProperty("--text-main", "#F5F5F5");
    root.style.setProperty("--text-dim", "#B3B3B3");
    root.style.setProperty("--card-bg", "#141414");
}

function activarTemaVerde() {
    root.style.setProperty("--bg-deep", "#0B1F1A");
    root.style.setProperty("--primary-neon", "#1F8F6A");
    root.style.setProperty("--accent-neon", "#4FE3B2");
    root.style.setProperty("--text-main", "#EAFBF6");
    root.style.setProperty("--text-dim", "#9FD6C5");
    root.style.setProperty("--card-bg", "#102E27");
}
