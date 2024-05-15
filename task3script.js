// Array di kaomoji
const kaomojiArray = ['(o ω o)', '(° ω °)', '(o ω o)', '(* ω *)', '(. ω .)', '(- ω -)', '(◕ ω ◕)'];

// Funzione per cambiare la kaomoji ogni 2 secondi
function changeKaomoji() {
  const kaomojiElement = document.getElementById('kaomoji');
  let index = 0;

  setInterval(() => {
    kaomojiElement.textContent = kaomojiArray[index];
    index = (index + 1) % kaomojiArray.length;
  }, 1000); // Cambia ogni 2 secondi (2000 millisecondi)
}

// Avvia la funzione al caricamento della pagina
window.onload = changeKaomoji;


function toggleOverlay() {
  var overlay = document.getElementById('overlay');
  if (overlay.style.display === 'block') {
    overlay.style.display = 'none';
  } else {
    overlay.style.display = 'block';
  }
}
