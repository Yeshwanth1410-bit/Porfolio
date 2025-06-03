const text = "I'm a Frontend developer";
const typingText = document.querySelector('.typing-text span');
let i = 0;

function typeEffect() {
  if (i < text.length) {
    typingText.textContent += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}

document.addEventListener('DOMContentLoaded', typeEffect);
