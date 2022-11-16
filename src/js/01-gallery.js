import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const galleryParent = document.querySelector('.gallery'); // access html div

makeGalleryMarkup(galleryItems, galleryParent);

function makeGalleryMarkup(gallery, parent) { 
  parent.innerHTML = gallery
    .map(img => {
      return `<a class="gallery__item" href='${img.original}'>
              <img class="gallery__image" src='${img.preview}' alt='${img.description}' />
          </a>`;
    })
    .join('');
}   //function creates markup for div

const lightbox = new SimpleLightbox('.gallery a', {
  captionType: 'alt',
  captionsData: 'alt',
  captionDelay: 250,
});  //data from the library
