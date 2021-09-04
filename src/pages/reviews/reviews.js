import './reviews.css';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;

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

var slidersInfo = [
  {
    "slidesCount": 0,
    "currentIndex": 1
  },
  {
    "slidesCount": 0,
    "currentIndex": 1
  },
  {
    "slidesCount": 0,
    "currentIndex": 1
  }
];

function getCorrectedIndex(index) {
  switch (index) {
    case 1:
      return 0;
    case 3:
      return 1;
    case 4:
      return 2;
    default:
      return index
  } 
}

window.addEventListener('resize', function(evt) {
  var block = $('.reviews')
  
  $('.reviews__slider-container').each(function (i) {
    var sliderContainer = $(this);
    var slideCount = $(this).find('.slider .slider-list .slider-list-item').length;
    var slideWidth = block.width();
    var sliderUlWidth = slideCount * slideWidth;

    $(this).find('.slider .slider-list .slider-list-item').each(function (i) {
      $(this).width(block.width());
    })

    $(this).css({ width: slideWidth });
    $(this).find('.slider  .slider-list').css({ width: sliderUlWidth });

    let sliderIndex = getCorrectedIndex(sliderContainer.index());
    sliderContainer.find('.slider .slider-list').css({ left: - (slideWidth * (slidersInfo[sliderIndex].currentIndex - 1)) });
  })
});

jQuery(document).ready(function ($) {
  var block = $('.reviews')

  $('.reviews__slider-container').each(function (i) {
    var sliderContainer = $(this);
    var slideCount = $(this).find('.slider .slider-list .slider-list-item').length;
    var slideWidth = block.width();
    var sliderUlWidth = slideCount * slideWidth;
  
    slidersInfo[i].slidesCount = $(this).find('.slider .slider-list .slider-list-item').length;

    $(this).find('.slider .slider-list .slider-list-item').each(function (i) {
      $(this).width(block.width());
    })
  
    updateButtons($(this), i);

    $(this).css({ width: slideWidth });
    $(this).find('.slider .slider-list').css({ width: sliderUlWidth });

    $(this).find('.slider-previous-button').click(function () {
      let sliderIndex = getCorrectedIndex(sliderContainer.index());
      slidersInfo[sliderIndex].currentIndex -= 1;

      var slideWidth = block.width();

      updateButtons($(this).closest('.reviews__slider-container'), sliderIndex);
      sliderContainer.find('.slider .slider-list').animate({
        left: - (slideWidth * (slidersInfo[sliderIndex].currentIndex - 1))
      }, 250);
    });

    $(this).find('.slider-next-button').click(function () {
      let sliderIndex = getCorrectedIndex(sliderContainer.index());
      slidersInfo[sliderIndex].currentIndex += 1;

      var slideWidth = block.width();

      updateButtons($(this).closest('.reviews__slider-container'), sliderIndex);
      sliderContainer.find('.slider .slider-list').animate({
        left: - (slideWidth * (slidersInfo[sliderIndex].currentIndex - 1))
      }, 250);
    });

    function updateButtons(sliderContainer, sliderIndex) {
      if (slidersInfo[sliderIndex].currentIndex > 1) {
        sliderContainer.find('.slider-previous-button').css('visibility', 'visible');
      } else {
        $(sliderContainer).find('.slider-previous-button').css('visibility', 'hidden');
      }

      if (slidersInfo[sliderIndex].currentIndex === slidersInfo[sliderIndex].slidesCount) {
        sliderContainer.find('.slider-next-button').css('visibility', 'hidden');
      } else {
        $(sliderContainer).find('.slider-next-button').css('visibility', 'visible');
      }
    }
  })
});
