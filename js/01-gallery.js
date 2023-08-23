import { galleryItems } from './gallery-items.js';
// Change code below this line


let galleryArray = '';
galleryItems.forEach(elm => {
    const galleryItem = 
    `<li class="gallery__item">
  <a class="gallery__link" href="${elm.original}">
    <img
      class="gallery__image"
      src="${elm.preview}"
      data-source="${elm.original}"
      alt="${elm.description}"
    />
  </a>
</li>`;
    galleryArray += galleryItem;
})

const gallery = document.querySelector('.gallery')
gallery.insertAdjacentHTML('afterbegin',galleryArray);

// console.log(galleryItems);

gallery.addEventListener('click', evn => {
    if (evn.target === evn.currentTarget) {
        return
    }
    evn.preventDefault();
    const fullUrl = evn.target.dataset.source;
    // const alt = evn.target;
    const modal = basicLightbox.create(`<img
      class="gallery__image"
      src="${fullUrl}"
      alt="111"
    />`)
    modal.show();
    console.log(fullUrl)
    document.addEventListener('keydown', event => {
        if (event.code === 'Escape' && document.querySelector('.basicLightbox')) {
            modal.close();
       }
    })
})

// console.log(basicLightbox)