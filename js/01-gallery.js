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
console.log(galleryItems);

markupList.addEventListener("click", onMarkupListClick);

function onMarkupListClick(evt) {
  evt.preventDefault();
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const galleryImage = evt.target;
  const galleryItem = galleryImage.closest(".gallery__item");
  galleryItem.classList.add("is-active");

  console.log(galleryItem);
}
