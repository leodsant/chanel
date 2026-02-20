document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Observer,ScrollTrigger,ScrollSmoother,SplitText)


  gsap.from("#hero-btn", {
    opacity: 0,
    y: 50,
    duration: 2,
    ease: "power2.out"
  }, 3);
  
  gsap.fromTo("#blur", {
    opacity: 0,
    x: 500,
    scale: .3
  }, {
    opacity: 100,
    scale: .8,
    duration: 1,
    ease: "power2.inOut"
  } );
  
  gsap.to("#blur", {
    y: -600,
    x: 2000,
    duration: 2
  }, 0.5);

  gsap.fromTo("#blur", {
    x: 500,
    y: 200,
    scale: .3
  }, {
    scale: 1,
    duration: 3,
    x: 0,
    y: -200,
    ease: "power3.out"
  }, 2.5);


 

  







});