

let container = document.getElementById('container');
let pressbtn = document.getElementById('pressbtn');
let aboutbtn = document.getElementById('aboutbtn');
let projbtn = document.getElementById('projbtn');
let mail = document.getElementById('mail');
let ig = document.getElementById('ig');
const colbtn = document.getElementById('colbtn');
const homeContainer = document.getElementById('homeContainer');
let contactbtn = document.querySelector('.contactbtn');
let stockistbtn = document.querySelector('.stockistbtn');

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

let pressOpen = false;
let aboutOpen = false;

if (!pressbtn) {} else {
   pressbtn.addEventListener('click', enablePress);
}
if (!aboutbtn) {} else {
   aboutbtn.addEventListener('click', enableAbout);
}
if (!projbtn) {} else {
   projbtn.addEventListener('click', animateUp);
}
if (!colbtn) {} else {
   colbtn.addEventListener('click', animateDown);
}
if (!mail) {} else {
   mail.addEventListener('click', redirectMail);
}


function animateDown(e) {
   e.preventDefault();
   homeContainer.classList.add('animate__animated', 'animate__fadeOutDown');
   if (this.href) {
      var target = this.href;
   }
   setTimeout(function () {
      window.location.replace(target);
   }, 1000);

}

function animateUp(e) {
   e.preventDefault();
   homeContainer.classList.add('animate__animated', 'animate__fadeOutUp');
   if (this.href) {
      var target = this.href;
   }
   setTimeout(function () {
      window.location.replace(target);
   }, 1000);

}

function redirectMail() {
   window.location.href = "mailto:hello@shekleung.com";
}

function enablePress() {
   if (pressOpen === false) {
      openPress();
   } else {
      closePress()
   }
}

function enableAbout() {
   if (aboutOpen === false) {
      openAbout();
   } else {
      closeAbout();
   }
}

function openPress() {
   container.classList.add('openPress')
   pressOpen = true;
}

function closePress() {

   container.classList.remove('openPress')
   pressOpen = false;
}

function openAbout() {
   container.classList.add('openAbout');
   aboutOpen = true;
}

function closeAbout() {

   container.classList.remove('openAbout');
   aboutOpen = false;
}


//  language button toggle

const engBox = document.getElementById('eng');
const manBox = document.getElementById('man');
const langbtn = document.querySelector('.langChange');

if (!langbtn) {} else {
   langbtn.addEventListener('click', function () {
      engBox.classList.toggle('transparent');
      manBox.classList.toggle('transparent');
   });
}

var current = 0,
    aboutSlides = document.querySelectorAll(".crossfade img");

setInterval(function() {
  for (var i = 0; i < aboutSlides.length; i++) {
    aboutSlides[i].style.opacity = 0;
  }
  current = (current != aboutSlides.length - 1) ? current + 1 : 0;
  aboutSlides[current].style.opacity = 1;
}, 5000);

