let boxRoupas = document.querySelectorAll(".boxRoupas");

boxRoupas.forEach((element, index) => {
  const boxImage = element.querySelector(".boxImage");
  const inputs = element.querySelectorAll('.boxInput input[type="radio"]');
  inputs.forEach(element => {
    element.addEventListener("click", e => {
      boxImage.style.backgroundImage = `url('../paginas/imgs/Roupas/${e.target.id}.jpg')`;
    });
  });
});
