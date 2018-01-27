// Initialize main DOM elements
const header = document.getElementById('header');
const hero = document.getElementById('hero');
const heroButton = document.getElementById('hero-button');
const aboutMe = document.getElementById('about');
const aboutMeButton = document.getElementById('about-button');
const portfolio = document.getElementById('portfolio');
const portfolioButton = document.getElementById('portfolio-button');
const contact = document.getElementById('contact');
const contactButton = document.getElementById('contact-button');

heroButton.onclick = function () {
  window.scrollBy(0, -10);
  hero.scrollIntoView({
    behavior: 'smooth',
  });
};

aboutMeButton.onclick = function () {
  aboutMe.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
};

portfolioButton.onclick = function () {
  portfolio.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

contactButton.onclick = function () {
  contact.scrollIntoView({
    behavior: 'smooth',
  });
};

function smoothScroll(block) {
  this.scrollIntoView({
    behavior: 'smooth',
    block: block
  })
}

window.addEventListener('scroll', function () {
  let scrollPosition = window.scrollY
  if (scrollPosition > 200) {
    header.classList.add('header-bg');
  } else {
    header.classList.remove('header-bg');
  }
})