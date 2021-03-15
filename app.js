const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  /* links.forEach((links) => {
    links.classList.toggle("fade");
  }); */
});


const intro = document.querySelector(".intro");
const video = document.querySelector("video");
const text = document.querySelector("h1");
const section = document.querySelector("section");
const end = section.querySelector("h1");

const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: 6000,
    trigger: intro,
    triggerHook: 0
})
.setPin(intro)
.addTo(controller);

const textAnim = TweenMax.fromTo(text, 3,{opacity: 1 },{opacity: 0 });

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);

let accelamount = 1;
let scrollpos = 0;
let delay = 0.5;
scene.on('update', e =>{
    scrollpos = e.scrollPos / 1000;
});

setInterval(()=>{
    delay += (scrollpos - delay) * accelamount;
    video.currentTime =  scrollpos;
}, 16.6667);

video.play