const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');
const link = document.querySelector('.nav__link');

toggle.addEventListener('click', handleToggle);

function handleToggle() {
  menu.classList.toggle('active');
  link.classList.toggle('active');
}
