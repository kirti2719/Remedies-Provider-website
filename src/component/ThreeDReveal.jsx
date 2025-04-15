import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap, Power1 } from 'gsap';

const ThreeDReveal = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let renderer, scene, camera;
    let objects = [];
    let animationFrameId;
    const conf = {
      color: 0xffffff,
      objectWidth: 12,
      objectThickness: 3,
      ambientColor: 0xe0e0e0,
      light1Color: 0xffffff,
      cameraZ: 75,
    };

    function animateText() {
      if (textRef.current) {
        gsap.set(textRef.current, { opacity: 0, y: 30, scale: 0.8 });
        gsap.to(textRef.current, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.8,
          delay: 1.0,
          ease: "elastic.out(1, 0.5)"
        });
        gsap.fromTo(textRef.current, 
          { textShadow: "0 0 0px rgba(0, 153, 255, 0)" },
          { 
            textShadow: "0 0 15px rgba(0, 153, 255, 0.7), 0 0 30px rgba(0, 153, 255, 0.5)",
            duration: 2,
            delay: 1.8,
            yoyo: true,
            repeat: -1
          }
        );
      }
    }

    function init() {
      const canvas = document.getElementById('reveal-effect');
      if (!canvas) return;
      const container = containerRef.current;
      const width = container.clientWidth;
      const height = container.clientHeight;

      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(window.devicePixelRatio);

      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      camera.position.z = conf.cameraZ;
      
      scene = new THREE.Scene();
      initLights();
      initObjects();
      animate();
      animateText();
      window.addEventListener('resize', handleResize);
    }

    function handleResize() {
      if (!containerRef.current || !renderer || !camera) return;
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }

    function initLights() {
      scene.add(new THREE.AmbientLight(conf.ambientColor));
      let light = new THREE.PointLight(conf.light1Color);
      light.position.z = 100;
      scene.add(light);
    }

    function initObjects() {
      const geometry = new THREE.BoxGeometry(conf.objectWidth, conf.objectWidth, conf.objectThickness);
      const material = new THREE.MeshLambertMaterial({ color: conf.color, transparent: true, opacity: 0.9 });

      for (let i = -5; i < 5; i++) {
        for (let j = -5; j < 5; j++) {
          let mesh = new THREE.Mesh(geometry, material.clone());
          mesh.position.set(i * conf.objectWidth, j * conf.objectWidth, 0);
          objects.push(mesh);
          scene.add(mesh);
        }
      }
      startAnim();
    }

    function startAnim() {
      objects.forEach(mesh => {
        let delay = Math.random() * 2;
        let rx = Math.random() * Math.PI * 2;
        let ry = Math.random() * Math.PI * 2;
        let rz = Math.random() * Math.PI * 2;

        gsap.to(mesh.rotation, { duration: 2, x: rx, y: ry, z: rz, delay });
        gsap.to(mesh.position, { duration: 2, z: 80, delay: delay + 0.5, ease: Power1.easeOut });
        gsap.to(mesh.material, { duration: 2, opacity: 0, delay: delay + 0.5 });
      });

      // Call `onComplete()` after animation ends (3 seconds)
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 3000);
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    }

    init();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (renderer) renderer.dispose();
      objects.forEach(obj => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) obj.material.dispose();
      });
      objects = [];
      if (scene) {
        while(scene.children.length > 0) {
          const object = scene.children[0];
          scene.remove(object);
        }
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100vw", 
        height: "100vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        flexDirection: "column", 
        color: "#fff", 
        fontSize: "24px", 
        fontWeight: "bold",
        overflow: "hidden",
        background: "linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)"
      }}
    >
      <div 
        ref={textRef}
        id="curenet-text" 
        style={{ 
          position: "absolute", 
          zIndex: 1, 
          fontSize: "64px", 
          fontWeight: "bolder",
          color: "#0099ff",
          textAlign: "center",
          letterSpacing: "6px",
          background: "rgba(255,255,255,0.08)",
          padding: "20px 40px",
          borderRadius: "8px",
          mixBlendMode: "difference"
        }}
      >
        Curenet
      </div>
      <canvas 
        id="reveal-effect" 
        style={{ 
          position: 'absolute',
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  );
};

export default ThreeDReveal;
