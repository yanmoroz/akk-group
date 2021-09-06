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

const collapseSocialMenu = () => {
  socialExpandedMenu.style.display = 'none';
  socialCollapsedMenu.style.display = 'flex';
}

const expandSocialMenu = () => {
  socialExpandedMenu.style.display = 'flex';
  socialCollapsedMenu.style.display = 'none';
}

mainContainer.addEventListener('click', function(evt) {
  collapseSocialMenu();
})

let lastKnownScrollPosition = 0;
let ticking = false;

function scrollDidChange(scrollPos) {
  collapseSocialMenu();
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

const socialButtonOpen = document.querySelector('#social-menu-button-open');
const socialButtonTelegram = document.querySelector('#social-menu-button-telegram');
const socialButtonInstagram = document.querySelector('#social-menu-button-instagram');
const socialButtonWhatsapp = document.querySelector('#social-menu-button-whatsapp');
const socialCollapsedMenu = document.querySelector('.social-menu_state_collapsed');
const socialExpandedMenu = document.querySelector('.social-menu_state_expanded');

socialButtonOpen.addEventListener('click', (evt) => {
  expandSocialMenu();
})

socialButtonTelegram.addEventListener('click', (evt) => {
  open('http://t.me/akkgroup');
  collapseSocialMenu();
})

socialButtonInstagram.addEventListener('click', (evt) => {
  open('https://www.instagram.com/akk_group/');
  collapseSocialMenu();
})

socialButtonWhatsapp.addEventListener('click', (evt) => {
  open('https://wa.me/74957730679');
  collapseSocialMenu();
})