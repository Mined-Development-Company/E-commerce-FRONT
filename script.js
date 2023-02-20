// Rotatividade automatica
let count = 1;
let label = document.querySelectorAll(".bar");
console.log(label);
let intervalo = setInterval(nextImage, 5000);

function nextImage() {
  count++;
  if (count > 5) {
    count = 1;
  }
  label.forEach((label) => label.classList.remove("active"));
  document.querySelector(`[for=slide${count}]`).classList.add("active");
  document.getElementById("slide" + count).checked = true;
}

let countValue = document.querySelectorAll("[data-count]");

countValue.forEach((countValue) => {
  countValue.addEventListener("click", atualizarValor);
});

function atualizarValor(e) {
  count = e.target.dataset.count;
  label.forEach((label) => label.classList.remove("active"));
  document.querySelector(`[for=slide${count}]`).classList.add("active");
  clearInterval(intervalo);
  intervalo = setInterval(nextImage, 5000);
}
// fim da rotatividade automatica

let categorias = document.querySelector(".categories")

function toggleMenu() {
  categorias.classList.toggle("open")
}