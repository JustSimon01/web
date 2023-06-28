const burgerMenu = document.querySelector('.header__burger-menu');
const popup = document.querySelector('.popup');

function popupHandler(popup) {
  popup.classList.toggle('popup_open');
}

burgerMenu.addEventListener('click', evt => {
  popupHandler(popup);
  burgerMenu.classList.toggle('header__burger-menu_close');
});
