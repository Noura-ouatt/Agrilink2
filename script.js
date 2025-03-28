document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    // Observer pour détecter quand un élément entre dans la vue
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Arrêter l'observation après apparition
            }
        });
    }, { threshold: 0.2 }); // Déclenche à 20% de visibilité

    sections.forEach((section) => {
        observer.observe(section);
    });
});
