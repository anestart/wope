
const header = document.querySelector('header');
const menuToggle = document.querySelector('.menuToggle');
const navigation = document.querySelector('.navigation');
const carousel = document.querySelector('.carousel');
const carouselItems = Array.from(carousel.children);
const leftArrow = document.querySelector('#left');
const rightArrow = document.querySelector('#right');
const itemWidth = carouselItems[0].getBoundingClientRect().width;

leftArrow.addEventListener('click', () => {
  carousel.scrollBy(-itemWidth, 0);
});

rightArrow.addEventListener('click', () => {
  carousel.scrollBy(itemWidth, 0);
});








window.addEventListener('scroll', function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});


function toggleMenu() {
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
  
}