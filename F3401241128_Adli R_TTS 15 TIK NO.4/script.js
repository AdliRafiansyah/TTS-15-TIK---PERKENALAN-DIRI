// Toggle "lihat detail"
function toggleMore() {
    const box = document.getElementById("more-info");
    box.classList.toggle("hidden");
}

// Fade-in saat scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
    threshold: 0.2,
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("appear");
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(el => {
    appearOnScroll.observe(el);
});
