document.addEventListener("DOMContentLoaded", () => {
    const phrases = [
        "Las palabras no dan lo mismo",
        "Lo que dices, cómo lo dices, lo que callas, construye tu identidad",
        "En Werken te ayudamos a que tu mensaje llegue"
    ];

    let currentIndex = 0;
    const textElement = document.getElementById("scroll-text");

    window.addEventListener("scroll", () => {
        let scrollY = window.scrollY;
        let windowHeight = window.innerHeight;
        
        if (scrollY > windowHeight * (currentIndex + 0.5) && currentIndex < phrases.length - 1) {
            currentIndex++;
            textElement.style.opacity = 0;
            setTimeout(() => {
                textElement.textContent = phrases[currentIndex];
                textElement.style.opacity = 1;
            }, 500);
        }
    });
});
