const nav = document.querySelector(".site-nav");
const menuButton = document.querySelector(".menu-button");

menuButton?.addEventListener("click", () => {
    nav.classList.toggle("open");
});

document.querySelectorAll(".site-nav a").forEach(link => {
    link.addEventListener("click", () => nav.classList.remove("open"));
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const petalLayer = document.querySelector(".petal-layer");

function createPetal() {
    if (!petalLayer || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.setProperty("--drift", `${(Math.random() - 0.5) * 220}px`);
    petal.style.animationDuration = `${7 + Math.random() * 6}s`;
    petal.style.opacity = `${0.15 + Math.random() * 0.35}`;
    petalLayer.appendChild(petal);

    setTimeout(() => petal.remove(), 14000);
}

setInterval(createPetal, 1700);

const header = document.querySelector(".site-header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const current = window.scrollY;

    if (current > 80 && current > lastScroll) {
        header.style.transform = "translateY(-100%)";
    } else {
        header.style.transform = "translateY(0)";
    }

    lastScroll = current;
}, { passive: true });
