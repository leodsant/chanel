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
    perfume.position.z = 0;
    perfume.position.y = -3.4;
    perfume.rotation.y = .7;
    perfume.rotation.x = .4;
    cena.add(perfume);


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








});