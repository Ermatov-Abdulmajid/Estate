// window.addEventListener("DOMContentLoaded", () => {
//   const menu = require('../modules/menu'),
//     aboutSlider = require('../modules/aboutSlider'),
//     indexSlider = require('../modules/indexSlider')

//     menu ()
//     aboutSlider ()
//     indexSlider ()
// })

// MENU
const elSiteHeader = document.querySelector('.site-header'),
elMenuButton = elSiteHeader.querySelector('.site-header__menu-button'),
elMenuButtonClose = elSiteHeader.querySelector('.site-header__close-button')

if (elMenuButton) {
  elMenuButton.addEventListener('click', () => {
    elSiteHeader.classList.add('site-header--open')
  })
}

if (elMenuButtonClose) {
  elMenuButtonClose.addEventListener('click', () => {
    elSiteHeader.classList.remove('site-header--open')
  })
}


const elsSlides = document.querySelectorAll('.about-clients__item'),
elLeftButton = document.querySelector('.about-clients__bottom-left'),
elNextButton = document.querySelector('.about-clients__bottom-right'),
elCurrent = document.querySelector('.about-clients__bottom-span'),
elTotal = document.querySelector('.about-clients__bottom-b')

let slideIndex = 1

showSlides(slideIndex)

if (elsSlides.length < 10) {
  elTotal.textContent = `0${elsSlides.length}`
} else {
  elTotal.textContent = elsSlides.length
}

function showSlides(idx) {
  if (idx > elsSlides.length) {
    slideIndex = 1
  }

  if (idx < 1) {
    slideIndex = elsSlides.length
  }

  // elsSlides.forEach(item => item.style.display = 'none')
  // elsSlides[slideIndex - 1].style.display = 'block'

  if (!window.innerWidth > 1190) {
    elsSlides.forEach(item => item.style.display = 'none')
    elsSlides[slideIndex - 1].style.display = 'block'
  }

  if (elsSlides.length < 10) {
    elCurrent.textContent = `0${slideIndex}`
  } else {
    elCurrent.textContent = slideIndex
  }

}

function plusSlides (idx) {
  showSlides(slideIndex += idx)
}

elNextButton.addEventListener('click', () => {
  plusSlides(1)
})

elLeftButton.addEventListener('click', () => {
  plusSlides(-1)
});