import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';

const newGallery = document.querySelector('.gallery');
const galleryForHtml = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img class="gallery__image" src=${preview} alt=' ${description}' />
  </a>
</li>`
  )
  .join('');

newGallery.insertAdjacentHTML('beforeend', galleryForHtml);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
