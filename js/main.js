'use strict';var header=document.getElementById('header');var hero=document.getElementById('hero');var heroButton=document.getElementById('hero-button');var aboutMe=document.getElementById('about');var aboutMeButton=document.getElementById('about-button');var portfolio=document.getElementById('portfolio');var portfolioButton=document.getElementById('portfolio-button');var contact=document.getElementById('contact');var contactButton=document.getElementById('contact-button');heroButton.addEventListener('click',function(){hero.scrollIntoView({behavior:'smooth',block:'start'})});aboutMeButton.addEventListener('click',function(){aboutMe.scrollIntoView({behavior:'smooth',block:'start'})});portfolioButton.addEventListener('click',function(){portfolio.scrollIntoView({behavior:'smooth',block:'start'})});contactButton.addEventListener('click',function(){contact.scrollIntoView({behavior:'smooth',block:'start'})});window.onscroll=function(){var scrollPosition=window.scrollY;if(scrollPosition>300){header.classList.add('header-bg')}else{header.classList.remove('header-bg')}};