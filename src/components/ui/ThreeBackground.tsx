"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050f14, 0.001); // Matches oceanic-noir fading

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 150;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    
    // Ensure we don't append multiple canvases in React Strict Mode
    if (containerRef.current.childElementCount > 0) {
      containerRef.current.innerHTML = "";
    }
    containerRef.current.appendChild(renderer.domElement);

    // NEURAL NETWORK PARTICLES
    const particleCount = 400;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const velocities = [];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 400;     // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 400; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 400; // z

      velocities.push({
        x: (Math.random() - 0.5) * 0.2,
        y: (Math.random() - 0.5) * 0.2,
        z: (Math.random() - 0.5) * 0.2
      });
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Particle Material (Forsythia yellow & white)
    const material = new THREE.PointsMaterial({
      color: 0xEAB308, // Forsythia Yellow
      size: 1.5,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // LINES (Neural connections)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0xEAB308,
      transparent: true,
      opacity: 0.15
    });
    
    // We will dynamically update lines in the animation loop
    const lineGeometry = new THREE.BufferGeometry();
    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // MOUSE INTERACTION
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - windowHalfX) * 0.05;
      mouseY = (event.clientY - windowHalfY) * 0.05;
    };

    document.addEventListener('mousemove', onDocumentMouseMove);

    // ANIMATION LOOP
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth mouse camera movement
      targetX = mouseX * 0.5;
      targetY = mouseY * 0.5;
      camera.position.x += (targetX - camera.position.x) * 0.02;
      camera.position.y += (-targetY - camera.position.y) * 0.02;
      camera.lookAt(scene.position);

      // Move particles
      const positions = particles.geometry.attributes.position.array as Float32Array;
      
      // We will build lines dynamically based on distance
      const linePositions = [];

      for (let i = 0; i < particleCount; i++) {
        // Update position based on velocity
        positions[i * 3] += velocities[i].x;
        positions[i * 3 + 1] += velocities[i].y;
        positions[i * 3 + 2] += velocities[i].z;

        // Bounce off invisible boundary cube
        if (Math.abs(positions[i * 3]) > 200) velocities[i].x *= -1;
        if (Math.abs(positions[i * 3 + 1]) > 200) velocities[i].y *= -1;
        if (Math.abs(positions[i * 3 + 2]) > 200) velocities[i].z *= -1;

        // Connect nearby particles with lines
        for (let j = i + 1; j < particleCount; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const distSq = dx*dx + dy*dy + dz*dz;

          if (distSq < 1500) { // Connect threshold
            linePositions.push(
              positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
              positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
            );
          }
        }
      }

      particles.geometry.attributes.position.needsUpdate = true;
      
      // Update lines
      lineMesh.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      
      // Slowly rotate the entire system
      particles.rotation.y += 0.001;
      particles.rotation.x += 0.0005;
      lineMesh.rotation.y += 0.001;
      lineMesh.rotation.x += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    // RESIZE HANDLER
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onWindowResize);

    // CLEANUP
    return () => {
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      cancelAnimationFrame(animationFrameId);
      
      // Dispose WebGL resources to prevent memory leaks
      geometry.dispose();
      material.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
      
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 z-0 bg-oceanic-noir" 
      style={{ opacity: 0.8 }} // Base background color underneath the canvas
    />
  );
}
