//мобильное меню:
const menuElem = document.querySelector('.nav');
const hamburgerElem = document.querySelector('.humburger-menu');

const toggleMenu = () => {
    menuElem.classList.toggle('menu-active') ;// класс active прописан в css но его нет в html. мы его этой функцией будем добавлять
    hamburgerElem.classList.toggle('humburger-menu-active');
};

hamburgerElem.addEventListener('click', toggleMenu);

//проблема что меню само не закрывается, когда кликаешь по списку и куда то перемещаешься


const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    autoplay: {
        delay: 5000,
       
      },
 
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  });

  //мобильное окно в контакте:
const contactWrapper = document.querySelector('.contact_wrapper');
const contactHamburger = document.querySelector('.contact-humburger-menu');


const contactToggleMenu = () => {
  contactWrapper.classList.toggle('contact-menu-active') ;// класс active прописан в css но его нет в html. мы его этой функцией будем добавлять
  
};

contactHamburger.addEventListener('click', contactToggleMenu);