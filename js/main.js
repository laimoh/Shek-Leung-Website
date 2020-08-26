let container = document.getElementById('container');
let pressbtn = document.getElementById('pressbtn');
let aboutbtn = document.getElementById('aboutbtn');

let projbtn = document.getElementById('projbtn');
let mail = document.getElementById('mail');
let ig = document.getElementById('ig');
const colbtn = document.getElementById('colbtn');
const homeContainer = document.getElementById('homeContainer');

let pressOpen = false;
let aboutOpen = false;
let projOpen = false;

pressbtn.addEventListener('click', enablePress);
aboutbtn.addEventListener('click', enableAbout);
projbtn.addEventListener('click', enableProj);
colbtn.addEventListener('click', animateDown);
mail.addEventListener('click', redirectMail);

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


function enableProj() {
   if (projOpen === false) {
      openProj();
   } else {
      closeProj();
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


function openProj() {

   container.classList.add('openProjects');
   projOpen = true;
}

function closeProj() {
   container.classList.remove('openProjects')
   projOpen = false;
}

function animateUp() {
   homeContainer.classList.add('animate__animated animate__fadeOutDown');
}

//  language button toggle

const engBox = document.getElementById('eng');
const manBox = document.getElementById('man');
const langbtn = document.querySelector('.langChange');


langbtn.addEventListener('click', function () {
   engBox.classList.toggle('transparent');
   manBox.classList.toggle('transparent');
});