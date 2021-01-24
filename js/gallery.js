import gallery from "./gallery-items.js";
let ulGallery = document.querySelector(".js-gallery");
let modalDiv = document.querySelector("#modal");

let makePreviews = (elem, arr) => {
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < arr.length; i++) {
    let makeli = document.createElement("li");
    makeli.className = "gallery__item";
    let makeimg = document.createElement("img");
    makeimg.className = "gallery__image";

    makeimg.src = arr[i].preview;
    makeimg.dataset.original = arr[i].original;
    makeimg.alt = arr[i].description;

    makeli.appendChild(makeimg);
    fragment.appendChild(makeli);
  }
  elem.appendChild(fragment);
};
makePreviews(ulGallery, gallery);
console.log(ulGallery.children);

ulGallery.addEventListener("click", openImage);
let activeImg = document.querySelector(".lightbox__image");

function openImage(event) {
  document.querySelector(".lightbox__image").src =
    event.target.dataset.original;

  modalDiv.classList.add("lightbox.is-open");
  modalDiv.classList.remove("lightbox");
  document.addEventListener("keydown", function (event) {
    switch (event.code) {
      case "ArrowLeft":
        findPrevioustSibling();
        break;
      case "ArrowRight":
        findNextSibling();
        break;
      case "Escape":
        closeModal();
        break;
    }
  });
}
document
  .querySelector(".lightbox__button")
  .addEventListener("click", closeModal);
function closeModal() {
  modalDiv.classList.remove("lightbox.is-open");
  modalDiv.classList.add("lightbox");
  console.log(document.querySelector("#modal"));
}

function findNextSibling() {
  for (let i = 0; i < gallery.length - 1; i++) {
    if (
      gallery[i].original === document.querySelector(".lightbox__image").src
    ) {
      console.log(activeImg);
      document.querySelector(".lightbox__image").src = gallery[i + 1].original;
      break;
    }
  }
}
function findPrevioustSibling() {
  for (let i = 0; i < gallery.length - 1; i++) {
    if (
      gallery[i].original === document.querySelector(".lightbox__image").src
    ) {
      console.log(activeImg);
      document.querySelector(".lightbox__image").src = gallery[i - 1].original;
      break;
    }
  }
}
