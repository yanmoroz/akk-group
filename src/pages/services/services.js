import './services.css';

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

let firstButton = document.querySelector('.first-button');
firstButton.addEventListener('click', (evt) => {
  window.open('/prices-1.pdf');
})

let secondButton = document.querySelector('.second-button');
secondButton.addEventListener('click', (evt) => {
  window.open('/prices-2.pdf');
})

let contractDownloadButton = document.querySelector('.services__pact-download-button');
contractDownloadButton.addEventListener('click', (evt) => {
  window.open('/contract.pdf');
})