let boxRoupas = document.querySelectorAll(".boxRoupas");

boxRoupas.forEach((element, index) => {
  const boxImage = element.querySelector(".boxImage img");
  const inputs = element.querySelectorAll('.boxInput input[type="radio"]');
  inputs.forEach(e => {
    e.addEventListener("click", evt => {
      boxImage.src = `../assets/Roupas/${evt.target.id}.jpg`;
    });
  });
});
