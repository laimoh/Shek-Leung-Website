const tabs = document.querySelectorAll('[data-tab-target]');

const tabContents = document.querySelectorAll('[data-tab-content]')
const audiobtn = document.getElementById('audio');
const playbtn = document.getElementById('pause');
const vid = document.getElementById("catwalk");
const show = document.getElementById('show');
const about = document.getElementById('about');
const researchFilm = document.getElementById('researchFilm');
const stills = document.getElementById('stills');
const researchFilmBa = document.getElementById('researchFilm-ba');
const stillsBa = document.getElementById('stills-ba');
const lookbook = document.getElementById('lookbook');
const inactiveTabs = document.querySelectorAll(".nav-bar > a:not(.active)")
const collectionLinks = document.querySelectorAll(".info a")
const colorElements = document.querySelectorAll('.black-text');
const faders = document.querySelectorAll('.fade-in');
const mobileTabs = document.querySelectorAll('.mobile__tab');
const mobileLinks = document.querySelectorAll('.mobile__header-controls a');
const morebtn = document.querySelector('.mobile__more');
const processMenu = document.querySelector('.mobile__process-nav');
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

let colorOptions = {
   root: null, // it is the viewport
   threshold: 0.5,
   rootMargin: "0px 0px 0px 0px"
};
const colorObserver = new IntersectionObserver(function (entries, colorObserver) {
   entries.forEach(entry => {
      if (!entry.isIntersecting) {
         inactiveTabs.forEach(e => {
            e.classList.remove('black-links');
            e.classList.add('white-links');
         });
         collectionLinks.forEach(e => {
            e.classList.remove('black-links');
            e.classList.add('white-links')
         })
         document.querySelector('.user-border').style.borderColor = "white";
         morebtn.style.color = "white";
         processMenu.classList.remove('bgColor');
         processMenu.classList.add('bgColorReverse')
         mobileLinks.forEach(ml => {
            ml.style.color = "white";
         })
         audiobtn.style.display = "block";

      } else {
         inactiveTabs.forEach(e => {
            e.classList.remove('white-links');
            e.classList.add('black-links')
         })
         collectionLinks.forEach(e => {
            e.classList.remove('white-links');
            e.classList.add('black-links');
         });
         morebtn.style.color = "black";
         processMenu.classList.remove('bgColorReverse')
         processMenu.classList.add('bgColor');
         mobileLinks.forEach(ml => {
            ml.style.color = "black";
         })
         document.querySelector('.user-border').style.borderColor = "black";


      }
   })
}, colorOptions);


colorElements.forEach(element => {
   colorObserver.observe(element);
})


const appearOptions = {
   threshold: 0.3,
   rootMargin: "0px 0px 0px -150px"
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
   entries.forEach(entry => {
      if (!entry.isIntersecting) {
         return;
      } else {
         entry.target.classList.add('appear');
         appearOnScroll.unobserve(entry.target);
      }
   })
}, appearOptions)

faders.forEach(fader => {
   appearOnScroll.observe(fader);
})

const beActiveOptions = {
   root: null, // it is the viewport
   threshold: 0.3,
   rootMargin: "0px 0px 0px -150px"
};


const beActive = new IntersectionObserver(function (entries, beActive) {
   entries.forEach(entry => {
      if (entry.target.id === 'about' && entry.isIntersecting) {
         tabs.forEach(tab => {
            tab.classList.remove('active')
         });
         tabs[1].classList.add('active');
      } else if ((entry.target.id === 'researchFilm' || entry.target.id === 'researchFilm-ba') && entry.isIntersecting) {
         tabs.forEach(tab => {
            tab.classList.remove('active')
         });
         tabs[2].classList.add('active');
      } else if ((entry.target.id === 'stills' || entry.target.id === 'stills-ba') && entry.isIntersecting) {
         tabs.forEach(tab => {
            tab.classList.remove('active')
         });
         tabs[3].classList.add('active');
      } else if (entry.target.id === 'lookbook' && entry.isIntersecting) {
         tabs.forEach(tab => {
            tab.classList.remove('active')
         });
         tabs[4].classList.add('active');
      } else if (entry.target.id === 'show' && entry.isIntersecting) {
         tabs.forEach(tab => {
            tab.classList.remove('active')
         });
         tabs[0].classList.add('active');
      }
   })
}, beActiveOptions)

tabContents.forEach(tabContent => {
   beActive.observe(tabContent);
})

// video control
if (!audiobtn) {

} else {
   audiobtn.addEventListener('click', () => {
      if (vid.muted === false) {
         vid.muted = true;
      } else {
         vid.muted = false;
      }
   })
}

if (!playbtn) {

} else {
   playbtn.addEventListener('click', () => {
      if (vid.paused) {
         playbtn.innerHTML = "&#9612; &#9612;"
         vid.play();
      } else {
         playbtn.innerHTML = "▶";
         vid.pause();

      }
   })
}
const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider div');
const leftbtn = document.querySelector('#left');
const rightbtn = document.querySelector('#right');
const numImgs = sliderImages.length;
let curImg = 0;

rightbtn.addEventListener('click', rightSlide);


function rightSlide() {
   sliderImages[curImg].style.animationName = 'slideouttoleft';
   curImg = (curImg + 1) % numImgs;
   sliderImages[curImg].style.animationName = 'slideinfromright';
}
leftbtn.addEventListener('click', leftSlide);

function leftSlide() {
   sliderImages[curImg].style.animationName = 'slideouttoright';
   curImg = curImg == 0 ? numImgs - 1 : Math.abs((curImg - 1) % numImgs);
   sliderImages[curImg].style.animationName = 'slideinfromleft';
}

function initialize() {
   sliderImages[0].style.animationName = 'slideinfromright';
}
window.onload = initialize;

tabs.forEach(tab => {
   tab.addEventListener('click', () => {
      const target = tab.dataset.tabTarget;
      smoothScrollHorizontal(target, 1000);
   })
})

function smoothScrollHorizontal(target, duration) {
   var target = document.querySelector(target);
   var targetPos = target.offsetLeft;
   var startPos = window.pageXOffset
   var distance = targetPos - startPos;
   var startTime = null; // keeps track of time

   function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = easeOut(timeElapsed, startPos, distance, duration)
      window.scrollTo(run, 0);
      if (timeElapsed < duration) requestAnimationFrame(animation);
   }

   function easeOut(t, b, c, d) {
      t /= d;
      return -c * t * (t - 2) + b;
   };

   requestAnimationFrame(animation);
}

function smoothScrollVertical(target, duration) {
   var target = document.querySelector(target);
   var targetPos = target.offsetTop;
   var startPos = window.pageYOffset
   var distance = targetPos - startPos;
   var startTime = null; // keeps track of time

   function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = easeOut(timeElapsed, startPos, distance, duration)
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
   }

   function easeOut(t, b, c, d) {
      t /= d;
      return -c * t * (t - 2) + b;
   };

   requestAnimationFrame(animation);
}

const mediaQuery = window.matchMedia('(max-width: 1000px)')

if (mediaQuery.matches) {
   let menuOpen = false;
   morebtn.addEventListener('click', (e) => {
      processMenu.classList.toggle('fadeMenu');
      menuOpen = processMenu.classList.contains('fadeMenu');
      if (!menuOpen) {
         processMenu.style.touchAction = "none";
         processMenu.style.pointerEvents = "none"
      } else {
         processMenu.style.touchAction = "auto";
         processMenu.style.pointerEvents = "all"
      }
   })

   const stillImages = document.querySelectorAll('.stills > *');

   colorOptions = {
      root: null, // it is the viewport
      threshold: 0.5,
      rootMargin: "0px 0px 0px 0px"
   };
   mobileTabs.forEach(tab => {
      tab.addEventListener('click', () => {
         const target = tab.dataset.tabTarget;
         smoothScrollVertical(target, 1000);
         if (target === '#stills' || target == '#stills-ba') {
            stillImages.forEach(still => {
               still.classList.add('animateOnVisible');
               setTimeout(()=>{
                  still.classList.remove('animateOnVisible');

               },2000)
            });
         }
      })
   })
} else {}