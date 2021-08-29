import './index.css';

const headerContainer = document.querySelector('.header')
const headerLogo = headerContainer.querySelector('.header__logo')
const introContainer = document.querySelector('.intro')
const hamburgerButton = document.querySelector('.header__hamburger-button')
const hamburgerContainer = document.querySelector('.hamburger')
const mainContainer = document.querySelector('.container')
const hamburgerCloseButton = document.querySelector('.hamburger__close-button')
const hamburgerLinks = document.querySelectorAll('.hamburger__link')

let lastKnownScrollPosition = 0;
let ticking = false;

function scrollDidChange(scrollPos) {
  if (scrollPos >= introContainer.offsetHeight - headerContainer.offsetHeight) {
    headerContainer.classList.add('header_active-background')
    headerLogo.classList.add('header__logo_visible');
  } else {
    headerContainer.classList.remove('header_active-background')
    headerLogo.classList.remove('header__logo_visible');
  }
}

document.addEventListener('scroll', function(evt) {
  lastKnownScrollPosition = window.scrollY

  if (!ticking) {
    window.requestAnimationFrame(function() {
      scrollDidChange(lastKnownScrollPosition)
      ticking = false
    });

    ticking = true
  }
});

hamburgerButton.addEventListener('click', function(evt) {
  mainContainer.classList.add('container_hidden');
  hamburgerContainer.classList.add('hamburger_visible');
});

hamburgerCloseButton.addEventListener('click', function(evt) {
  mainContainer.classList.remove('container_hidden');
  hamburgerContainer.classList.remove('hamburger_visible');
})

hamburgerLinks.forEach(link => {
  link.addEventListener('click', function(evt) {
    mainContainer.classList.remove('container_hidden');
    hamburgerContainer.classList.remove('hamburger_visible');
  })
})