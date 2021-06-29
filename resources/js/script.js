const navigator = document.querySelector('#navigator-nav')
const navigatorContainer = document.querySelector('#navigator-container')
const navBtn = document.querySelector('#nav-btn')
const navBtnIcon = document.querySelector('#nav-btn .fas')

const homeBtn = document.querySelector('#home-btn')
const servicesBtn = document.querySelector('#services-btn')
const aboutBtn = document.querySelector('#about-btn')
const contactBtn = document.querySelector('#contact-us-btn')
const locationBtn = document.querySelector('#location-btn')

const siteHeader = document.querySelector('#site-header')
const servicesSection = document.querySelector('#services')
const aboutSection = document.querySelector('#about')
const contactSection = document.querySelector('#contact')
const locationSection = document.querySelector('#location')

//All Navigator buttons that aren't the hamburger button
const navBtns = document.querySelectorAll('.nav-link')

navBtn.addEventListener('click', toggleNav)
navBtns.forEach(btn => btn.addEventListener('click', removeActiveClass))


function removeActiveClass() {
  navigator.classList.remove('active')
  navigatorContainer.classList.remove('active')
}

function toggleNav() {
  navigator.classList.toggle('active')
  navigatorContainer.classList.toggle('active')
  changeNavBtnIcon()
}

function changeNavBtnIcon() {
  if(navBtnIcon.classList.contains('fa-bars')) {
    navBtnIcon.classList.remove('fa-bars')
    navBtnIcon.classList.add('fa-times')
  } else {
    navBtnIcon.classList.remove('fa-times')
    navBtnIcon.classList.add('fa-bars')
  }
}
