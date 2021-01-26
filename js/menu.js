const menu = document.querySelector('.menu')
const menuIcon = document.querySelector('.menu-icon')
const links = document.querySelectorAll('.link')

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('open')
})
