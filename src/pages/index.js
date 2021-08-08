import './index.css';

const headerContainer = document.querySelector('.header')
const headerLogo = headerContainer.querySelector('.header__logo')

const introContainer = document.querySelector('.intro')

let lastKnownScrollPosition = 0;
let ticking = false;

function doSomething(scrollPos) {
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
      doSomething(lastKnownScrollPosition)
      ticking = false
    });

    ticking = true
  }
});