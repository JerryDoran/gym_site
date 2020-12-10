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

gsap.registerPlugin(ScrollTrigger);

gsap.from('.animate-hero', {
  duration: 0.6,
  opacity: 0,
  y: -150,
  stagger: 0.3,
});

gsap.from('.animate-services', {
  scrollTrigger: '.animate-services',
  duration: 0.5,
  opacity: 0,
  x: -150,
  stagger: 0.12,
});

gsap.from('.animate-services-img', {
  scrollTrigger: '.animate-services',
  duration: 1,
  opacity: 0,
  x: 400,
  stagger: 0.12,
});

gsap.from('.animate-membership', {
  scrollTrigger: '.animate-membership',
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3
});

gsap.from('.animate-card', {
  scrollTrigger: '.animate-card',
  duration: .8,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: .3
});

gsap.from('.animate-team', {
  scrollTrigger: '.animate-team',
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: .2
});

gsap.from('.animate-email', {
  scrollTrigger: '.animate-email',
  duration: .8,
  opacity: 0,
  x: -150,
  stagger: 0.2,
  delay: 1.2
});

gsap.from('.animate-email-text', {
  scrollTrigger: '.animate-email-text',
  duration: .8,
  opacity: 0,
  x: 150,
  stagger: 0.2,
  delay: .6
});

gsap.from('.animate-email-form', {
  scrollTrigger: '.animate-email-text',
  duration: .8,
  opacity: 0,
  x: 150,
  stagger: 0.2,
  delay: .8
});
