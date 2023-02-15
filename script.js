// Rotatividade automatica
let count = 1;
setInterval(function () {
  nextImage();
}, 5000);

function nextImage() {
  count++;
  if (count > 4) {
    count = 1;
  }
  document.getElementById("slide" + count).checked = true;
}
// fim da rotatividade automatica
