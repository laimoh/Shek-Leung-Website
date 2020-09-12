const tabs = document.querySelectorAll('[data-tab-target]');
const links = document.getElementsByClassName('tab');
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
// content fade in
const colorElements = document.querySelectorAll('.black-text');
const faders = document.querySelectorAll('.fade-in');

//  lookbook slider

const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider img');

//  buttons

const leftbtn = document.querySelector('#left');
const rightbtn = document.querySelector('#right');


const mediaQuery = window.matchMedia('(max-device-width: 850px) and (-webkit-device-pixel-ratio: 3)')

if (mediaQuery.matches) {
   const morebtn = document.querySelector('.mobile__more');
   const processMenu = document.querySelector('.mobile__process-nav');
   morebtn.addEventListener('click', () => {
      processMenu.classList.toggle('fade');
      let menuOpen = processMenu.classList.contains('fade');
      if (!menuOpen) {
         processMenu.style.pointerEvents = "none";
      } else {
         processMenu.style.pointerEvents = "all";
      }
   })

   const mobileTabs = document.querySelectorAll('.mobile__tab');
   const mobileLinks = document.querySelectorAll('.mobile__header-controls a');

   mobileTabs.forEach(mt => {
      mt.addEventListener('click', () => {
         setTimeout(changeTextColor, 500)
      })
   })

   function changeTextColor() {
      const url = window.location.href
      if (url.includes('#show')) {
         morebtn.style.color = "white";
         processMenu.style.borderColor = "white";
         processMenu.classList.remove('bgColor');
         mobileLinks.forEach(ml => {
            ml.style.color = "white";
         })
         document.querySelector('.user-border').style.borderColor = "white";
      } else if (url.includes('#about')) {
         morebtn.style.color = "black";
         processMenu.style.borderColor = "black";
         processMenu.classList.add('bgColor');
         mobileLinks.forEach(ml => {
            ml.style.color = "black";
         });
         document.querySelector('.user-border').style.borderColor = "black";
      } else if (url.includes('#researchFilm') || url.includes('#researchFilm-ba')) {
         morebtn.style.color = "black";
         processMenu.style.borderColor = "black";
         processMenu.classList.add('bgColor');
         mobileLinks.forEach(ml => {
            ml.style.color = "black";
         })
         document.querySelector('.user-border').style.borderColor = "black";
      } else if (url.includes('#stills') || url.includes('#stills-ba')) {
         morebtn.style.color = "white";
         processMenu.style.borderColor = "white";
         processMenu.classList.remove('bgColor');
         mobileLinks.forEach(ml => {
            ml.style.color = "white";
         })
         document.querySelector('.user-border').style.borderColor = "black";
      } else if (url.includes('#lookbook')) {
         morebtn.style.color = "black";
         processMenu.style.borderColor = "black";
         processMenu.classList.add('bgColor');
         mobileLinks.forEach(ml => {
            ml.style.color = "black";
         })
         document.querySelector('.user-border').style.borderColor = "black";
      } else {}
   }


} else {

}


const colorOptions = {
   root: null, // it is the viewport
   threshold: 0.3,
   rootMargin: "0px 0px 0px -150px"
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
      } else if (entry.target.id === 'researchFilm' && entry.isIntersecting) {
         tabs.forEach(tab => {
            tab.classList.remove('active')
         });
         tabs[2].classList.add('active');
      } else if (entry.target.id === 'stills' && entry.isIntersecting) {
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

let counter = 1;
const size = sliderImages[0].clientWidth;

slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

rightbtn.addEventListener('click', () => {
   if (counter >= sliderImages.length - 1) return;
   slider.style.transition = "transform 0.4s ease-in";
   counter++;
   slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

leftbtn.addEventListener('click', () => {
   if (counter <= 0) return;
   slider.style.transition = "transform 0.4s ease-in";
   counter--;
   slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

slider.addEventListener('transitionend', () => {
   if (sliderImages[counter].id === "lastClone") {
      slider.style.transition = "none";
      counter = sliderImages.length - 2;
      slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
   }
   if (sliderImages[counter].id === "firstClone") {
      slider.style.transition = "none";
      counter = sliderImages.length - counter;
      slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
   }
})