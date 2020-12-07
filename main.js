const mobileMenu = document.querySelector('#mobileMenu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('.navbar__logo');
const body = document.querySelector('body');

// Display mobile menu
const toggleMobileMenu = () => {
  mobileMenu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
  body.classList.toggle('active');
};

mobileMenu.addEventListener('click', toggleMobileMenu);
