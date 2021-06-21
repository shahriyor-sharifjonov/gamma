new WOW().init();
// Header Menu
const headerButton: HTMLButtonElement = document.querySelector(
  ".header__button"
);
const headerMenu: HTMLUListElement = document.querySelector(".header__nav");
let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};

headerButton.onclick = menuToggle;

window.onclick = (e: MouseEvent) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};

$(document).ready(function(){
  $('.slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 4, 
    autoplay: false,
    speed: 600,
    easing: 'ease',
    touchThreshold: 8,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
})