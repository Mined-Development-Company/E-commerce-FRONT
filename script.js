// Rotatividade automatica
let count = 1;
let label = document.querySelectorAll(".bar");
setInterval(function () {
  nextImage();
}, 5000);

function nextImage() {
  count++;
  console.log(count);
  if (count >= 5) {
    count = 1;
  }
  document.getElementById("slide" + count).checked = true;
}
document.getElementById("slide");

let countValue = document.querySelectorAll("[data-count]");

countValue.forEach((countValue) => {
  countValue.addEventListener("click", atualizarValor);
});

function atualizarValor(e) {
  count = e.target.dataset.count;
}
// fim da rotatividade automatica
