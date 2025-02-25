const dynamicTextElement = document.querySelector('.dynamic-text');
const endings = [
  'se potencie.',
  'crezca.',
  'trascienda.',
  'conecte.',
  'llegue más lejos.'
];

let currentIndex = 0;

function typeText() {
  let currentText = endings[currentIndex];
  dynamicTextElement.textContent = ''; // Limpiar el texto antes de empezar a escribir
  let index = 0;

  const typingInterval = setInterval(() => {
    dynamicTextElement.textContent += currentText[index];
    index++;

    if (index === currentText.length) {
      clearInterval(typingInterval);
      setTimeout(eraseText, 1000); // Esperar antes de borrar el texto
    }
  }, 100); // Velocidad de escritura
}

function eraseText() {
  let currentText = endings[currentIndex];
  let currentLength = currentText.length;
  
  const erasingInterval = setInterval(() => {
    dynamicTextElement.textContent = dynamicTextElement.textContent.slice(0, -1); // Borrar una letra
    if (dynamicTextElement.textContent.length === 0) {
      clearInterval(erasingInterval);
      currentIndex = (currentIndex + 1) % endings.length; // Avanzar al siguiente texto
      setTimeout(typeText, 500); // Esperar antes de escribir el siguiente texto
    }
  }, 100); // Velocidad de borrado
}

// Iniciar el ciclo de cambio de texto
typeText();
