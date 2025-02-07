import React, { useRef } from 'react'; // Correct import for useRef
import { useLoader, useFrame } from '@react-three/fiber'; // Correct import for useFrame
import * as THREE from 'three';  // Import THREE for TextureLoader

export default function SphereWithTexture() {
  const sphereRef = useRef();

  // Define the speed for rotation
  const speed = 0.005;

  // useFrame hook for infinite animations (rotating the sphere)
  useFrame(() => {
    sphereRef.current.rotation.x += speed;
    sphereRef.current.rotation.y += speed;
    sphereRef.current.rotation.z += speed;
  });

  // Load the texture
  const texture = useLoader(THREE.TextureLoader, '/texture/texture1.jpg');

  return (
    <mesh ref={sphereRef} position={[-2, 3, 2]}>
      <sphereGeometry args={[1, 32, 32]} /> {/* Specify radius and segments */}
      <meshStandardMaterial map={texture} /> {/* Apply the texture to the material */}
    </mesh>
  );
}
