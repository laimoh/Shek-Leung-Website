
let container = document.getElementById('container');
let pressbtn = document.getElementById('pressbtn');
let aboutbtn = document.getElementById('aboutbtn');
let colbtn = document.getElementById('colbtn');
let projbtn = document.getElementById('projbtn');

let pressOpen = false;
let aboutOpen = false;
let projOpen = false;

pressbtn.addEventListener('click', enablePress);
aboutbtn.addEventListener('click', enableAbout);
projbtn.addEventListener('click', enableProj);


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


//  language button toggle

const engBox = document.getElementById('eng');
const manBox = document.getElementById('man');
const langbtn = document.querySelector('.langChange');


langbtn.addEventListener('click', function () {
   engBox.classList.toggle('transparent');
   manBox.classList.toggle('transparent');
});

