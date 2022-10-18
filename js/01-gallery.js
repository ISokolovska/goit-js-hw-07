import { galleryItems } from "./gallery-items.js";
// Change code below this line
const markupList = document.querySelector(".gallery");

const markupItems = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      />
    </a>
    </div>`
  )
  .join("");

markupList.insertAdjacentHTML("beforeend", markupItems);

markupList.addEventListener("click", onMarkupListClick);

function onMarkupListClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const galleryImage = evt.target;
  const galleryItem = galleryImage.closest(".gallery__item");

  const instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}" width="800" height="600">
  `);
  instance.show();

  markupList.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      instance.close();
    }
  });

  removeActiveClassGalleryItem();
  addActiveClassGalleryItem(galleryItem);
}

function removeActiveClassGalleryItem() {
  const currentActiveGalleryItem = document.querySelector(
    ".gallery__item.is-active"
  );
  if (currentActiveGalleryItem) {
    currentActiveGalleryItem.classList.remove("is-active");
  }
}

function addActiveClassGalleryItem(img) {
  img.classList.add("is-active");
}

console.log(galleryItems);
