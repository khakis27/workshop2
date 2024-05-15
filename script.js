const scrollContainer = document.querySelector("main");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

function showText(id) {
    var textSection = document.getElementById(id);
    if (textSection.style.display === "none") {
      textSection.style.display = "block"; // mostra il testo se è nascosto
    } else {
      textSection.style.display = "none"; // nascondi il testo se è visibile
    }
  }