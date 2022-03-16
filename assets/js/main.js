// Declare the variable
const header = document.getElementById('header')
const navMenu = document.querySelector('.menu__list');
const headerToggle = document.querySelector('.header__toggle')
const headerClose = document.querySelector('.close__icon')
const navAllItem = document.querySelectorAll('.menu__link')
const scrollToTop = document.querySelector('.scroll__button')
const themeButton = document.querySelector('.header__theme')
const themeIcon = document.querySelector('.header__theme i')

// Get theme
let theme = localStorage.getItem('theme')
if (theme === 'light') {
    document.body.classList.remove('dark-theme')
} else {
    document.body.classList.add('dark-theme')
}

// Open nav menu if user clicks the toggle button
if (headerToggle) {
    headerToggle.addEventListener('click', () => {
        navMenu.classList.add('show-header')
    })
}

// Close nav menu if user clicks the close button
if (headerClose) {
    headerClose.addEventListener('click', () => {
        navMenu.classList.remove('show-header')
    })
}

// Close nav menu if user clicks nav item
navAllItem.forEach(item => {
    item.addEventListener('click', () => {
        if (navMenu.classList.contains('show-header')) {
            navMenu.classList.remove('show-header')
        }
    })
})

// show box shadow header
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('show-boxShadow')
    } else {
        header.classList.remove('show-boxShadow')
    }
})

// scroll to top if user clicks scroll button
scrollToTop.addEventListener('click', () => {
    window.scrollTo(0, 0)
})


// Swiper 
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 24,
    loop: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
        992: {
          spaceBetween: 80,
        }
    },
});

// Theme
themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark')
    } else {
        localStorage.setItem('theme', 'light')
    }
})


// Scroll Reveal
const rs = ScrollReveal({
    delay: 400,
    distance: '60px',
    origin: 'top',
    reset: false,
    duration: 2500
})

rs.reveal('.home__overlay-img, .mySwiper')
rs.reveal('.home__data', {delay: 500})
rs.reveal('.giving__data, .gift__data', {interval: 100})
rs.reveal('.celebrate__data, .message__data, .footer__boom1', {origin: 'left'})
rs.reveal('.celebrate__img, .message__img, .footer__boom2', {origin: 'right'})