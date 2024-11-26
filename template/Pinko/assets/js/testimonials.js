const testimonials = [
  {
    text: "Este es el primer comentario de un cliente satisfecho. Muy profesional y efectivo.",
    author: "— Cliente 1",
  },
  {
    text: "Un servicio espectacular, lo recomiendo ampliamente.",
    author: "— Cliente 2",
  },
  {
    text: "Increíble experiencia, resultados rápidos y eficientes.",
    author: "— Cliente 3",
  },
];

let currentTestimonial = 0;

function updateTestimonial() {
  const blockquote = document.querySelector(".testimonials-container blockquote");
  blockquote.innerHTML = `“${testimonials[currentTestimonial].text}”<footer>${testimonials[currentTestimonial].author}</footer>`;
}

function previousTestimonial() {
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
}

function nextTestimonial() {
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  updateTestimonial();
}

// Initialize
updateTestimonial();
