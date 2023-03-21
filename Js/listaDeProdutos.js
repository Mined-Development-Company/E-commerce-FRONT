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

const boxFiltros = document.querySelectorAll(".boxFiltro")
boxFiltros.forEach((filtro) => {
  const atributo = tratarTexto(filtro.querySelector("h2").innerHTML);
  const itensFiltro = filtro.querySelectorAll("li");
  itensFiltro.forEach((itemFiltro) => {
    itemFiltro.addEventListener("click", e => {
      const clickedElement = e.target;
      const valor = tratarTexto(clickedElement.textContent);
      gerenciaFiltros(clickedElement);
      resetaProdutos();
      if(document.querySelectorAll("li[data-selected='true']").length)
        filtrarProdutos(atributo, valor);
    })
  })
})

function gerenciaFiltros(clickedElement){
  document.querySelectorAll("li[data-selected='true']").forEach(el => {
    if(el !== clickedElement)
      el.dataset.selected = ""
  })
  clickedElement.dataset.selected = clickedElement.dataset.selected ? "" :true;
}

function resetaProdutos(){
  boxRoupas.forEach((e) => { e.style.display = ""})
}

function filtrarProdutos(atributo, valor){
  [...boxRoupas].filter((it) => !it.dataset[atributo].split(" ").includes(valor)).map(e => e.style.display = "none")
}

function tratarTexto(value) {
  return value ? value.toLowerCase().replaceAll(" ", "-") : "";
}
