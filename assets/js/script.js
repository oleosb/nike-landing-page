let dropdown_menu = document.querySelector('.header_dropdown');
let menu_ham = document.querySelector('.ham');
let gallery = document.querySelector('.gallery .content');
let zoomGallery = document.querySelector('.zoom-gallery');
let galleryClose = document.querySelector('.zoom-close');
let logo = document.querySelector('.header_logo')

menu_ham.addEventListener('click', () => {
  dropdown_menu.classList.toggle('show');
});

gallery.addEventListener('click', () => {
  zoomGallery.classList.add('show');
});

galleryClose.addEventListener('click', () => {
  zoomGallery.classList.remove('show');
});

logo.addEventListener('click', () => window.location.reload())