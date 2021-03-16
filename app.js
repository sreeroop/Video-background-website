const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
<<<<<<< HEAD
  duration: 5000,
=======
  duration: 7000,
>>>>>>> d9159b4b33043e5ea9fba24a98f3b06a15ad8e90
  trigger: intro,
  triggerHook: 0
})
  .setPin(intro)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(text, 3, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
  duration: 1000,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);

//Video Animation
let accelamount = 0.5;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
<<<<<<< HEAD
}, 50);
=======
}, 20);
>>>>>>> d9159b4b33043e5ea9fba24a98f3b06a15ad8e90

const hamburger = document.querySelector(".hamburger");

const navLinks = document.querySelector(".nav-links");

const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  /* links.forEach((links) => {
    links.classList.toggle("fade");
  }); */
});