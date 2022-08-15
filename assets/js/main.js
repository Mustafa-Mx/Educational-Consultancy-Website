const menuBtn = document.querySelector('.menu-btn');
const btnBurger = document.querySelector('.menu-btn-brg');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navLinks = document.querySelectorAll('.menu-navlink')
let showMenu = false;
 menuBtn.addEventListener('click',toggleMenu);

 function toggleMenu() {
     if(!showMenu) {
         btnBurger.classList.add('open');
         nav.classList.add('open');
         menuNav.classList.add('open');
         navLinks.forEach(item => item.classList.add('open'));
         
         showMenu = true;
     }
     else {
        btnBurger.classList.remove('open');
         nav.classList.remove('open');
         menuNav.classList.remove('open');
         navLinks.forEach(item => item.classList.remove('open'));
        showMenu = false;
    }


 }