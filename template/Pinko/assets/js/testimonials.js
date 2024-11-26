let currentTestimonial = 0;

function updateTestimonial() {
  const testimonials = document.querySelectorAll(".testimonial");
  testimonials.forEach((testimonial, index) => {
    testimonial.classList.remove("active");
    if (index === currentTestimonial) {
      testimonial.classList.add("active");
    }
  });
}

function prevTestimonial() {
  const testimonials = document.querySelectorAll(".testimonial");
  currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
}

function nextTestimonial() {
  const testimonials = document.querySelectorAll(".testimonial");
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  updateTestimonial();
}

// Initialize the first testimonial as active
updateTestimonial();
