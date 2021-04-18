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

// CHANGE BUTTON BUY TEXT

const btn = document.querySelector('.change-1');

btn.addEventListener('click', function(){
    console.log(btn.outerHTML);
    btn.outerHTML = '<h1 style="padding: 4rem">Kupione!</h1>';
});

const btn2 = document.querySelector('.change-2');

btn2.addEventListener('click', function(){
    console.log(btn2.outerHTML);
    btn2.outerHTML = '<h1 style="padding: 4rem">Kupione!</h1>';
});

const btn3 = document.querySelector('.change-3');

btn3.addEventListener('click', function(){
    console.log(btn3.outerHTML);
    btn3.outerHTML = '<h1 style="padding: 4rem">Kupione!</h1>';
});

const btn4 = document.querySelector('.change-4');

btn4.addEventListener('click', function(){
    console.log(btn4.outerHTML);
    btn4.outerHTML = '<h1 style="padding: 4rem">Kupione!</h1>';
});

