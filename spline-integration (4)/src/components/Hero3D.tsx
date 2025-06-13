import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const targetScale = useRef(1);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create main group
    const group = new THREE.Group();
    scene.add(group);

    // Create neural network nodes
    const nodePositions = [];
    const nodeCount = 15;
    const nodeRadius = 0.15;
    const nodes = [];

    // Generate better distributed positions for nodes in a sphere
    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(1 - 2 * (i + 0.5) / nodeCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const radius = 3;
      
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      nodePositions.push(new THREE.Vector3(x, y, z));
    }

    // Create nodes with blue primary glow
    const nodeMaterial = new THREE.MeshStandardMaterial({
      color: 0x0FA0CE, // Primary blue
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0x0FA0CE,
      emissiveIntensity: 1.2
    });

    nodePositions.forEach(position => {
      const nodeGeometry = new THREE.SphereGeometry(nodeRadius, 32, 32);
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.copy(position);
      nodes.push(node);
      group.add(node);
    });

    // Create glowing connections with blue dominant gradient
    const connectionMaterial = new THREE.MeshStandardMaterial({
      color: 0x33C3F0, // Lighter blue
      transparent: true,
      opacity: 0.5,
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0x33C3F0,
      emissiveIntensity: 1.0
    });

    // Connect nearby nodes with tubes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = nodes[i].position.distanceTo(nodes[j].position);
        if (distance < 3.5) {
          const curve = new THREE.LineCurve3(
            nodes[i].position,
            nodes[j].position
          );
          const tubeGeometry = new THREE.TubeGeometry(curve, 8, 0.03, 8, false);
          const tube = new THREE.Mesh(tubeGeometry, connectionMaterial);
          group.add(tube);
        }
      }
    }

    // Create brighter particles with blue primary color
    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 200;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
      particlePositions[i] = randomNode.position.x;
      particlePositions[i + 1] = randomNode.position.y;
      particlePositions[i + 2] = randomNode.position.z;
      particleSizes[i / 3] = Math.random() * 0.03 + 0.02;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particlesGeometry.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x1EAEDB, // Ocean blue
      transparent: true,
      opacity: 1.0,
      size: 0.08,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(particlesGeometry, particleMaterial);
    group.add(particles);

    // Add central core with blue-purple gradient glow
    const coreGeometry = new THREE.OctahedronGeometry(0.6, 0);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x0FA0CE,
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0x0FA0CE,
      emissiveIntensity: 1.2
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(core);

    // Enhanced lighting with blue-dominant colors
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const frontLight = new THREE.PointLight(0x0FA0CE, 3, 10); // Blue primary light
    frontLight.position.set(2, 2, 5);
    scene.add(frontLight);

    const backLight = new THREE.PointLight(0x9b87f5, 2, 10); // Purple accent light
    backLight.position.set(-2, -2, -5);
    scene.add(backLight);

    camera.position.z = 6;

    // Store original positions for animation
    const originalPositions = nodes.map(node => node.position.clone());

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1
      };
    };

    const handleMouseWheel = (event: WheelEvent) => {
      targetScale.current = Math.max(0.1, Math.min(1, targetScale.current + event.deltaY * -0.001));
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('wheel', handleMouseWheel);

    // Animation
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.005;

      // Rotate core
      core.rotation.x += 0.01;
      core.rotation.y += 0.01;

      // Interactive rotation based on mouse
      const targetRotationX = mousePosition.current.y * 0.5;
      const targetRotationY = mousePosition.current.x * 0.5;
      group.rotation.x += (targetRotationX - group.rotation.x) * 0.05;
      group.rotation.y += (targetRotationY - group.rotation.y) * 0.05;

      // Animate particles
      const positions = particlesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += Math.sin(time + i) * 0.01;
        positions[i + 1] += Math.cos(time + i) * 0.01;
        positions[i + 2] += Math.sin(time + i) * 0.01;
      }
      particlesGeometry.attributes.position.needsUpdate = true;

      // Animate nodes opening/closing
      nodes.forEach((node, index) => {
        const originalPos = originalPositions[index];
        const targetPos = originalPos.clone().multiplyScalar(targetScale.current);
        node.position.lerp(targetPos, 0.1);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('wheel', handleMouseWheel);
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="w-full h-[600px]" />;
};
