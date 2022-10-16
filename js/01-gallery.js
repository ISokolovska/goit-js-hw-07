import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const markupList = document.createElement("ul");
gallery.appendChild(markupList);

const markupItems = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li><img src="${preview}" src="${original}" alt="${description} width="200px" height="200px"></li>`
  )
  .join("");

markupList.insertAdjacentHTML("beforeend", markupItems);

markupList.style.display = "flex";
markupList.style.flexWrap = "wrap";
markupList.style.listStyle = "none";
markupList.style.gap = "10px 10px";

console.log(galleryItems);
