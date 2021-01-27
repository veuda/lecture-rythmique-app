const menu = document.querySelector('.menu')
const menuIcon = document.querySelector('.js-icon')
const links = document.querySelectorAll('.link')

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('open')
  menuIcon.classList.toggle('fa-bars')
  menuIcon.classList.toggle('fa-times')
})
