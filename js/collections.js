// page transitions
// window.addEventListener('load', () => {
//    Barba.Pjax.start();
// })

// barba.init({
//    transitions: [{
//      name: 'opacity-transition',
//      leave(data) {
//        return gsap.to(data.current.container, {
//          opacity: 0
//        });
//      },
//      enter(data) {
//        return gsap.from(data.next.container, {
//          opacity: 0
//        });
//      }
//    }]
//  });


// collections page tabs toggle

const tabs = document.querySelectorAll('[data-tab-target]');
const links = document.getElementsByClassName('tab');
const tabContents = document.querySelectorAll('[data-tab-content]')
const audiobtn = document.getElementById('audio');
const playbtn = document.getElementById('pause');
const vid = document.getElementById("catwalk");


// loop through the list to find the one tab mouse clicked
tabs.forEach(tab => {
   tab.addEventListener('click', () => {
      const target = document.querySelector(tab.dataset.tabTarget)

      tabContents.forEach(tabContent => {
         tabContent.classList.remove('active')
      })
      tabs.forEach(tab => {
         tab.classList.remove('active')
      });
      tab.classList.add('active')
   });


});

// content fade in

const colorElements = document.querySelectorAll('.black-text');
const faders = document.querySelectorAll('.fade-in');

const colorOptions = {
   root: null, // it is the viewport
   threshold: 0, // between zero and one  - how much of the elemtn should in viewport for object to fire an event(1 is 100%)
   rootMargin: "-150px" // margin between firing
};


const colorObserver = new IntersectionObserver(function (entries, colorObserver) {
   entries.forEach(entry => {
      if (!entry.isIntersecting) {
         document.querySelectorAll('a').forEach(e => e.style.color = "var(--grCol3");
         audiobtn.style.display = "block";
      } else {
         document.querySelectorAll('a').forEach(e => e.style.color = "black");
      }
   })
}, colorOptions);

colorElements.forEach(element => {
   colorObserver.observe(element);
})


const appearOptions = {
   threshold: 0.8,
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


// video control
audiobtn.addEventListener('click', () => {
   if (vid.muted === false) {
      vid.muted = true;
   } else {
      vid.muted = false;
   }
})

playbtn.addEventListener('click', () => {
   if (vid.paused) {
      playbtn.innerHTML = "&#9612; &#9612;"
      vid.play();
   } else {
      playbtn.innerHTML = "▶";
      vid.pause();

   }
})
//  lookbook slider

const slider = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.slider img');

//  buttons

const leftbtn = document.querySelector('#left');
const rightbtn = document.querySelector('#right');

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