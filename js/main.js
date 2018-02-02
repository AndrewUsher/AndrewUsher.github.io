const header = document.getElementById('header')
const hero = document.getElementById('hero')
const heroButton = document.getElementById('hero-button')
const aboutMe = document.getElementById('about')
const aboutMeButton = document.getElementById('about-button')
const portfolio = document.getElementById('portfolio')
const portfolioButton = document.getElementById('portfolio-button')
const contact = document.getElementById('contact')
const contactButton = document.getElementById('contact-button')

heroButton.addEventListener('click', () => {
  hero.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

aboutMeButton.addEventListener('click', () => {
  aboutMe.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

portfolioButton.addEventListener('click', () => {
  portfolio.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

contactButton.addEventListener('click', () => {
  contact.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
})

window.onscroll = function () {
  let scrollPosition = window.scrollY
  if (scrollPosition > 300) {
    header.classList.add('header-bg')
  } else {
    header.classList.remove('header-bg')
  }
}