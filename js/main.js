const header = document.getElementById('header');
const heroBox = document.getElementById('hero-box');

document.addEventListener('scroll', scrollHandler);

heroBox.addEventListener('animationend', function(event){
    this.classList.toggle('slide-in');  
}