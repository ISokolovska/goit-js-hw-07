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
markupList.addEventListener("click", onMarkupListClick);

function onMarkupListClick(evt) {
  evt.preventDefault();

  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }

  const galleryImage = evt.target;
  const galleryItem = galleryImage.closest(".gallery__item");

  markupList.addEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
      gallery.close();
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

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

console.log(galleryItems);
