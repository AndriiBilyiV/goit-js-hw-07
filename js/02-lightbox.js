import { galleryItems } from './gallery-items.js';
// Change code below this line


let galleryArray = '';
galleryItems.forEach(elm => {
    const galleryItem = 
    `<li class="gallery__item">
        <a class="gallery__link" href="${elm.original}">
            <img class="gallery__image" src="${elm.preview}" alt="${elm.description}" />
        </a>
    </li>`;
    galleryArray += galleryItem;
})

const gallery = document.querySelector('.gallery')
gallery.insertAdjacentHTML('afterbegin',galleryArray);


const modal = new SimpleLightbox(".gallery a", {
    captionsData: 'alt',
    captionDelay: 250
});
