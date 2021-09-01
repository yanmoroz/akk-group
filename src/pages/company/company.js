import './company.css';

const hamburgerButton = document.querySelector('.header__hamburger-button')
const hamburgerContainer = document.querySelector('.hamburger')
const mainContainer = document.querySelector('.container')
const hamburgerCloseButton = document.querySelector('.hamburger__close-button')
const hamburgerLinks = document.querySelectorAll('.hamburger__link')

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