import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(Observer, ScrollTrigger, ScrollSmoother, SplitText);

  ScrollSmoother.create({ smooth: 0.8, effects: true });

  const cena = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 11;

  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.querySelector(".perfume").appendChild(renderer.domElement);



  const luzDirecional = new THREE.DirectionalLight("white", 4);
  const pontoLuz = new THREE.PointLight("white", 1);
  luzDirecional.position.y = -1;
  luzDirecional.position.z = -2;
  luzDirecional.position.x = 2.5;

  pontoLuz.position.y = -1;
  pontoLuz.position.z = -8;
  pontoLuz.position.x = -3.5;

  luzDirecional.target.position.set(0, 0, -10);

  cena.add(luzDirecional, pontoLuz, luzDirecional.target);


  let perfume
  const loader = new GLTFLoader();
  loader.load("./dist/public/perfume.glb", (gltf) => {
    perfume = gltf.scene;
    cena.add(perfume);


    const openTl = gsap.timeline();

    openTl.fromTo(perfume.position, {
      z: -9,
      y: -5
    }, {
      y: -1,
      duration: 2,
      ease: "power2.inOut"
    }, 0);
    
    openTl.fromTo(perfume.rotation, {
      y: 1.57,
      x: 0
    }, {
      y: 1.57,
      x: 0
    }, 0);
    
    openTl.to(perfume.position, {
      z: 0,
      y: -3.4,
      duration: 3,
      ease: "power2.inOut"
    }, 2);
    
    openTl.to(perfume.rotation, {
      x: .4,
      y: .7,
      duration: 3,
      ease: "power2.inOut"
    }, 2);

    openTl.from(luzDirecional.position, {
      y: 50,
      duration: 1,
      ease: "power2.inOut"
    }, 4)

    openTl.from(pontoLuz.position, {
      y: 50,
      duration: 1,
      ease: "power2.inOut"
    }, 1)
    
    
    
    ScrollTrigger.create({
      trigger: "#hero",
      start: "top top",
      end: "bottom top",
      scrub: true,
      pin: true,
      markers: false,
      onUpdate: (self) => {
        const p = self.progress;

        perfume.position.y = -3.4 + p * 10;
        perfume.rotation.y = .7 + p ;
        perfume.rotation.x = .4 - p ;
        
      }
    });






  });

  function animar() {
    requestAnimationFrame(animar);
    renderer.render(cena, camera);
  }

  animar()


   let heroTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#hero",
        start: "bottom 95%",
        end: "bottom 50%",
        scrub: true,
        pin: true,
        markers: false
    }
  });

  heroTl.to("#hero-btn", {
    opacity: 0,
    y: -200
  }, 0);

  
  heroTl.to("#blur", {
    x: 1200,
    scale: 0.5,
    y: 100
  }, 0);

  
  heroTl.from("#blur2", {
    y: 200,
    x: -600
  }, 0);

  
  
  const sectionTl = gsap.timeline({ scrollTrigger: {
    trigger: "#text ",
    start: "top bottom",
    end: "bottom 30%",
    scrub: 2,
    markers: false
  } });

  sectionTl.to(".subir", {
    y: -400
  }, 0);
  
  sectionTl.fromTo("#img",{
    width: 300
  }, {
    width: 500,
  }, 0);







});