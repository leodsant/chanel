document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Observer,ScrollTrigger,ScrollSmoother,SplitText)



  let heroTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero-btn",
        scroll: "body",
        start: "bottom 95%",
        end: "top 60%",
        scrub: 2,
        pin: true,
        markers: false
    }
  });

  heroTl.to("#hero-btn", {
    opacity: 0,
    y: -400
  }, 0);

  heroTl.to("#blur", {
    x: 1200,
    scale: 0.5,
    y: 100
  }, 0);

  heroTl.from("#blur2", {
    y: 200,
    x: -500
  }, 0);

  heroTl.to(".subir", {
    y: -600
  }, 0);

  gsap.fromTo("#img",{
    width: 400
  }, {
    width: 500,
    scrollTrigger: {
      trigger: "#img",
      scroller: "body", 
      start: "top 60%",
      end: "bottom 40%",
      scrub: 2,
      markers: false
    }
  })








});