const image = document.querySelector(".product__image > img");
const images = Array.from(document.querySelectorAll(".product__images > img"));
const btns = Array.from(document.querySelectorAll("input[name='color']"));

images.forEach(image => {
  image.addEventListener("click", imageClick);
});

btns.forEach(btn => {
  btn.addEventListener("click", btnClick);
});

function imageClick(e) {
  images.forEach(imageItem => {
    imageItem.classList.remove("selected");
    if (imageItem.src === e.target.src) {
      imageItem.classList.add("selected");
      image.src = imageItem.src;

      btns.forEach(btn => {
        if (imageItem.classList.contains(btn.id)) {
          btn.checked = true;
        }
      });
    }
  });
}

function btnClick(e) {
  images.forEach(imageItem => {
    imageItem.classList.remove("selected");
    if (imageItem.classList.contains(e.target.id)) {
      imageItem.classList.add("selected");
      image.src = imageItem.src;
    }
  });
}

//

const tamanho__da__roupas = document.querySelectorAll(".sizes input");
tamanho__da__roupas.forEach(element => {
  element.addEventListener("click", e => {
    tamanho__da__roupas.forEach(evt => {
      evt.style.background = "transparent";
    });
    e.target.style.background = "var(--laranja)";
  });
});
