// search bar filter
let categorias = document.querySelector(".categories");

function toggleMenu() {
  categorias.classList.toggle("open");
}

const filter = document.querySelector("#pesquisa");

const cards = document.querySelectorAll(".cards li");

const search__bar = document.querySelector(".search__bar");

filter.addEventListener("input", filterElements);

function filterElements() {
  if (filter.value != "") {
    search__bar.style.background = "white";
    for (let card of cards) {
      let title = card.querySelector("p");

      title = title.textContent.toLowerCase();

      let text = filter.value.toLowerCase();
      if (!title.includes(text)) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    }
  } else {
    for (let card of cards) {
      card.style.display = "none";
    }
  }
}
