// NAVIGATION MOBILE

const nav = document.querySelector('.nav-mobile-list');
const burger = document.querySelector('.nav-mobile');
const burgerIcon = document.querySelector('.fa-bars');
const closeIcon = document.querySelector('.fa-times');

burger.addEventListener('click', function(){
    nav.classList.toggle('active');
    burger.classList.toggle('active');

    if (burger.classList.contains('active')) {
        burgerIcon.classList.add('hide');
        closeIcon.classList.remove('hide');
    } else {
        burgerIcon.classList.remove('hide');
        closeIcon.classList.add('hide');

    };
});

// TEXT ANIMATE

const txt2 = document.querySelector('.txt-about-h1');
const txt3 = document.querySelector('.txt-last-h1');
const txt4 = document.querySelector('.txt-contact-h1');

window.addEventListener('scroll', function(){

    if (scrollY > 500) {
        txt2.classList.remove('hide')
        txt2.classList.add('animate__bounceInUp')
    } 
});

window.addEventListener('scroll', function(){

    if (scrollY > 1700) {
        txt3.classList.remove('hide')
        txt3.classList.add('animate__bounceInUp')
    } 
});

window.addEventListener('scroll', function(){

    if (scrollY > 3100) {
        txt4.classList.remove('hide')
        txt4.classList.add('animate__bounceInUp')
    }
});

// LAST

