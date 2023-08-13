import { galleryItems } from './gallery-items.js';
// Change code below this line


const gallery = document.querySelector(".gallery");

function createGalleryItem(item) {
    const galleryItem = document.createElement("li");
    galleryItem.classList.add("gallery__item");

    const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__link");
    galleryLink.href = item.original;

    const galleryImage = document.createElement("img");
    galleryImage.classList.add("gallery__image");
    galleryImage.src = item.preview;
    galleryImage.dataset.source = item.original;
    galleryImage.alt = item.description;

    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);

    return galleryItem;
    
};


galleryItems.forEach(item => {
    const galleryItem = createGalleryItem(item);
    gallery.appendChild(galleryItem);
  });
  

gallery.addEventListener("click", (e) => {
    e.preventDefault();
    if (!e.target.dataset.source) {
      return;
    }
    const instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`,
      {
        onShow: (instance) => {
          document.addEventListener("keydown", (e) => {
            if (e.key === "Escape") {
              instance.close();
            }
          });
        },
      }
    );
instance.show();
});