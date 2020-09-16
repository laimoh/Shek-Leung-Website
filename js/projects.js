const projTabs = document.querySelectorAll('.proj__nav a');
const directorSt = document.querySelector('.directorSt');
const dearYou = document.querySelector('.dearYou');
const archiveFilms = document.querySelector('.archiveFilms')
const pageAudios = Array.from(document.getElementsByTagName('audio'));
const pageVideos = Array.from(document.getElementsByTagName('video'));
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);


projTabs.forEach(tab => {
   tab.addEventListener('click', () => {
      pageAudios.forEach(a => {
         if (!a.paused) {
            a.pause();
         } else {}
      })
      pageVideos.forEach(v => {
         if(!v.isPaused) {
            v.pause();
         } else {}
      })
      projTabs.forEach(tab=>{
         tab.classList.remove('active-proj');
      })
      // const target = tab.dataset.tabTarget;
      // smoothScroll(target,1000)
   })
})


   archiveFilms.addEventListener('click', () => {
         archiveFilms.classList.add('active-proj');
   })
   dearYou.addEventListener('click', () => {
      dearYou.classList.add('active-proj');
   })
   directorSt.addEventListener('click', () => {
      directorSt.classList.add('active-proj');
   })




const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.carousel__button--right')
const prevBtn = document.querySelector('.carousel__button--left');
const slideWidth = slides[0].getBoundingClientRect().width;
const videoText = document.querySelector(".carousel__slide-text");
const carouselVideos = document.querySelectorAll('.carousel__video');
const blue = document.querySelector('#blue');
const lvProj = document.querySelector('#lvproj');
const walking = document.querySelector('#walking');
const audio = document.querySelector('.vid-nav .audio');
const play = document.querySelector('.play');


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
      nextBtn.style.display = "block";
      prevBtn.style.display = "block";

   } else if (targetSlide === slides[2]) {
      videoText.innerHTML = "We Create Paths By Walking (2016)";
      nextBtn.style.display = "none";
      prevBtn.style.display = "block";

   } else if (targetSlide === slides[0]) {
      videoText.innerHTML = "BLUE → Research Film (2015)";
      nextBtn.style.display = "block";
      prevBtn.style.display = "none";
   }
}


prevBtn.addEventListener('click', e => {
   const currentSlide = track.querySelector('.current-slide');
   const prevSlide = currentSlide.previousElementSibling;
   moveToSlide(track, currentSlide, prevSlide);
   carouselVideos.forEach(v => {
      if (!v.paused) {
         v.pause();
         audio.classList.remove('blinking');
         play.innerHTML = "▶";
      };
   })

})


nextBtn.addEventListener('click', e => {
   const currentSlide = track.querySelector('.current-slide');
   const nextSlide = currentSlide.nextElementSibling;
   moveToSlide(track, currentSlide, nextSlide);
   carouselVideos.forEach(v => {
      if (!v.paused) {
         v.pause();
         audio.classList.remove('blinking');
         play.innerHTML = "▶";
      };
   })
})
play.addEventListener('click', () => {
   audio.classList.add('blinking');
   if (slides[0].classList.contains('current-slide')) {
      symbolSwitch(blue)
   } else if (slides[1].classList.contains('current-slide')) {
      symbolSwitch(lvProj)
   } else if (slides[2].classList.contains('current-slide')) {
      symbolSwitch(walking);
   }
})


function symbolSwitch(element) {

   if (element.paused) {
      element.play();
      play.innerHTML = "||"
      if (element.muted) {
         audio.classList.remove('blinking');
      }
   } else {
      element.pause();
      play.innerHTML = "▶";
      audio.classList.remove('blinking');
   }

}
audio.addEventListener('click', () => {

   if (slides[0].classList.contains('current-slide')) {
      symbolBlink(blue)

   } else if (slides[1].classList.contains('current-slide')) {
      symbolBlink(lvProj)
   } else if (slides[2].classList.contains('current-slide')) {
      symbolBlink(walking)
   }
})


function symbolBlink(element) {
   if (element.muted === true && (!element.paused)) {
      element.muted = false;
      audio.classList.add('blinking');
   } else {
      element.muted = true;
      audio.classList.remove('blinking');

   }
}

function smoothScroll(target, duration) {
   var target = document.querySelector(target);
   var targetPos = target.offsetLeft;
   var startPos = window.pageXOffset
   var distance = targetPos - startPos;
   var startTime = null; // keeps track of time

   function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = easeOut(timeElapsed, startPos, distance, duration);
      window.scrollTo(run, 0);
      if (timeElapsed < duration) {
         requestAnimationFrame(animation);
      }
   }

   function easeOut(t, b, c, d) {
      t /= d;
      return -c * t * (t - 2) + b;
   };

   requestAnimationFrame(animation);
}

if (window.matchMedia("(max-width: 1000px)").matches) {
   carouselVideos.forEach(v => {
      v.controls = true;
   })
} else {}