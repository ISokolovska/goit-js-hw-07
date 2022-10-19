import { galleryItems } from "./gallery-items.js";
// Change code below this line
const markupList = document.querySelector(".gallery");

const markupItems = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`
  )
  .join("");

markupList.insertAdjacentHTML("beforeend", markupItems);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
