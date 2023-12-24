const siteHeader = document.querySelector('.site-header');
const button = siteHeader.querySelector('.site-header__menu-button');
const closeButton = siteHeader.querySelector('.site-header__close-button');

if (button) {
  button.addEventListener('click' , function () {
    siteHeader.classList.add('site-header--open')
  });
}

if (closeButton) {
  closeButton.addEventListener('click' , function () {
    siteHeader.classList.remove('site-header--open')
  });
}

// CLIENTS
const slides = document.querySelectorAll('.about-clients__item')
const next = document.querySelector('.about-clients__bottom-right')
const prev = document.querySelector('.about-clients__bottom-left')
const current = document.querySelector('.about-clients__bottom-span')
const total = document.querySelector('.about-clients__bottom-b')

let slideIndex = 0

if (slides.length <= 10) {
  total.textContent = `0${slides.length}`
} else {
  total.textContent = slides.length
}

function showSlides(idx) {
  if (idx > slides.length) {
    slideIndex = 1
  }
  if (idx < 1) {
    slideIndex = slides.length
  }
  slides.forEach(item => item.style.display = 'none')
  slides[slideIndex - 1].style.display = 'block'

  if (slides.length < 10) {
    current.textContent = `0${slideIndex}`
  } else {
    current.textContent = slideIndex
  }
}

function plusSlides(idx) {
  showSlides(slideIndex += idx)
}

next.addEventListener('click', () => {
  plusSlides(1)
})

prev.addEventListener('click', () => {
  plusSlides(-1)
})