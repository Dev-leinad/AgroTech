'use-strict';
// const boxes = document.getElementById('boxes');
// boxes.addEventListener('mouseover',(e)=>{
//     alert('hello');
// })

const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const overlay = document.getElementById('overlay');
const closeNav = document.getElementById('closeNav');

function openMenu() {
    mobileNav.classList.add('active');
    overlay.classList.add('active');
    hamburger.classList.add('active');
    document.body.style.overflow = 'hidden'; // prevent scroll
}

function closeMenu() {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = '';
}

hamburger.addEventListener('click', openMenu);
closeNav.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu); // tap outside to close