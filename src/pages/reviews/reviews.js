import './reviews.css';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;

const hamburgerButton = document.querySelector('.header__hamburger-button-black')
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
    "currentIndex": 1,
    "links": [
      "https://kad.arbitr.ru/Document/Pdf/917b9f0c-5414-4202-8d61-b716fc90a05e/efcef440-922b-4b07-8fe2-556c1a8a0169/A40-112916-2020_20210217_Reshenija_i_postanovlenija.pdf?isAddStamp=True",
      "https://kad.arbitr.ru/Document/Pdf/106836a5-ce96-4461-ae07-5a6b5634d407/8d556ee9-9bd8-4e58-9738-a921b679bc25/A40-240782-2019_20200706_Reshenija_i_postanovlenija.pdf?isAddStamp=True",
      "https://mos-gorsud.ru/rs/lefortovskij/services/cases/civil/details/83ce8400-5974-11eb-81d4-89065b01b372?participants=%D0%9A%D0%BE%D0%BD%D0%BE%D0%B2%D0%B0%D0%BB%D0%BE%D0%B2%D0%B0",
      "https://reutov--mo.sudrf.ru/modules.php?name=sud_delo&srv_num=1&name_op=doc&number=244408225&delo_id=1540005&new=0&text_number=1"
    ],
    "practiceLink": "practice-aleshkin.pdf"
  },
  {
    "slidesCount": 0,
    "currentIndex": 1,
    "links": [
      "https://kad.arbitr.ru/Document/Pdf/e71da29a-7952-4a89-9df3-f57221477af2/b5adbd0b-0527-4aaf-925c-2e84ed4ffff7/A40-216382-2020_20210312_Reshenija_i_postanovlenija.pdf?isAddStamp=True",
      "https://mos-gorsud.ru/mgs/services/cases/first-admin/details/f573d654-3c36-4fb0-8929-abf8f005d45d?caseNumber=3%D0%B0-2509/2020",
      "https://guard.arbitr.ru/Document/Pdf/aa8c48a6-ee51-4735-8d60-eb9db474795c/54b27a5e-3533-4ee5-9c7e-d5d424294b50/A40-168259-2017_20181031_Reshenija_i_postanovlenija.pdf?isAddStamp=True"
    ],
    "practiceLink": "practice-kochetkov.pdf"
  },
  {
    "slidesCount": 0,
    "currentIndex": 1,
    "links": [
      "https://guard.arbitr.ru/Document/Pdf/8c0f3c9f-c1e3-4e6e-af72-60ccbd9eaf41/b1c52c59-b360-426e-85a9-f4424fb4fa92/A40-95129-2020_20201023_Reshenija_i_postanovlenija.pdf?isAddStamp=True",
      "https://oblsud--mo.sudrf.ru/modules.php?name=sud_delo&name_op=case&_id=20476471&_uid=669c5e89-a0c7-4136-8937-242bc99f9da4&_deloId=1540005&_caseType=&_new=5&_doc=1&srv_num=1",
      "https://mos-gorsud.ru/rs/lefortovskij/services/cases/appeal-admin/details/d84d6e3f-d56b-4aef-bf5c-3cb81820fbd5?participants=%D0%B5%D0%BF%D0%BA+%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0"
    ],
    "practiceLink": "practice-korshikov.pdf"
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

    $(this).find('.reviews__slider-redirect-button').click(function () {
      let sliderIndex = getCorrectedIndex(sliderContainer.index());
      let link = slidersInfo[sliderIndex].links[slidersInfo[sliderIndex].currentIndex - 1];
      window.open(link);
    })

    $(this).find('.reviews__slider-download-button').click(function () {
      let sliderIndex = getCorrectedIndex(sliderContainer.index());
      let link = slidersInfo[sliderIndex].practiceLink;
      window.open(link);
    })

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
        sliderContainer.find('.reviews__button-with-caption').last().css('display', 'flex');
      } else {
        sliderContainer.find('.slider-next-button').css('visibility', 'visible');
        sliderContainer.find('.reviews__button-with-caption').last().css('display', 'none');
      }
    }
  })
});

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
const socialButtonEmail = document.querySelector('#social-menu-button-email');

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
  open('https://wa.me/79099842900');
  collapseSocialMenu();
})

socialButtonEmail.addEventListener('click', (evt) => {
  window.open('mailto:info@akk-group.ru?subject=Вопрос от клиента');
})