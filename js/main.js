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

const projTabs = document.querySelectorAll('nav a');
const directorSt = document.querySelector('.directorSt');
const dearYou = document.querySelector('.dearYou');
const archiveFilms = document.querySelector('.archiveFilms')


archiveFilms.addEventListener('click', () => {
   projTabs.forEach(tab => {
      tab.classList.remove('active-proj');
      archiveFilms.classList.add('active-proj')
   })
})

dearYou.addEventListener('click', () => {
   projTabs.forEach(tab => {
      tab.classList.remove('active-proj');
      dearYou.classList.add('active-proj')
   })
})

directorSt.addEventListener('click', () => {
   projTabs.forEach(tab => {
      tab.classList.remove('active-proj');
      directorSt.classList.add('active-proj')
   })
})

const track = document.querySelector('.carousel__track'); //ul tag
const slides = Array.from(track.children); //li tags
const nextBtn = document.querySelector('.carousel__button--right')
const prevBtn = document.querySelector('.carousel__button--left');
const slideWidth = slides[0].getBoundingClientRect().width;
const videoText = document.querySelector(".carousel__slide-text");
const carouselVideos = document.querySelectorAll('.carousel__video');

const setSlidePosition = (slide, index) => {
   slide.style.left = slideWidth * index + "px";
}
slides.forEach(setSlidePosition);


const moveToSlide = (track, currentSlide, targetSlide) => {
   track.style.transform = "translateX(-" + targetSlide.style.left + ")";
   currentSlide.classList.remove('current-slide');
   targetSlide.classList.add('current-slide');
   if (targetSlide === slides[1]) {
      videoText.innerHTML = "LV Project → Hologram Presentation (2016) ";

   } else if (targetSlide === slides[2]) {
      videoText.innerHTML = "We Create Paths By Walking (2016)";

   } else if (targetSlide === slides[0]) {
      videoText.innerHTML = "BLUE → Research Film (2015)";

   }
}

prevBtn.addEventListener('click', e => {
   const currentSlide = track.querySelector('.current-slide');
   const prevSlide = currentSlide.previousElementSibling;
   moveToSlide(track, currentSlide, prevSlide);

})

nextBtn.addEventListener('click', e => {
   // how much to move one slide?
   const currentSlide = track.querySelector('.current-slide');
   const nextSlide = currentSlide.nextElementSibling;
   moveToSlide(track, currentSlide, nextSlide);
})

const blue = document.querySelector('#blue');
const lvProj = document.querySelector('#lvproj');
const walking = document.querySelector('#walking');
const audio = document.querySelector('.vid-nav .audio');
const play = document.querySelector('.play');


if (!play) {

} else {
   play.addEventListener('click', () => {

      if (slides[0].classList.contains('current-slide')) {
         symbolSwitch(blue)

      } else if (slides[1].classList.contains('current-slide')) {
         symbolSwitch(lvProj)
      } else if (slides[2].classList.contains('current-slide')) {
         symbolSwitch(walking)
      }
   })
}

function symbolSwitch(element) {

   if (element.paused) {
      element.play();
      audio.classList.toggle('blinking');
      play.innerHTML = "||"
   } else {
      element.pause();
      play.innerHTML = "▶";
      audio.classList.toggle('blinking');

   }
}

if (!audio) {

} else {
   audio.addEventListener('click', () => {

      if (slides[0].classList.contains('current-slide')) {
         symbolBlink(blue)

      } else if (slides[1].classList.contains('current-slide')) {
         symbolBlink(lvProj)
      } else if (slides[2].classList.contains('current-slide')) {
         symbolBlink(walking)
      }
   })
}

function symbolBlink(element) {
   if (element.muted === false) {
      element.muted = true;
      audio.classList.toggle('blinking');
   } else {
      element.muted = false;
      audio.classList.toggle('blinking');
   }
}
