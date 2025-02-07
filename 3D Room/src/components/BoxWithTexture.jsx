import React from 'react';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three'; // Import THREE for TextureLoader

export default function BoxWithTexture() {
  // Load textures for each side of the box
  const textures = [
    useLoader(THREE.TextureLoader, '/texture/texture1.jpg'),
    useLoader(THREE.TextureLoader, '/texture/texture2.jpg'),
    useLoader(THREE.TextureLoader, '/texture/texture3.jpg'),
    useLoader(THREE.TextureLoader, '/texture/texture4.jpg'),
    useLoader(THREE.TextureLoader, '/texture/texture5.jpg'),
    useLoader(THREE.TextureLoader, '/texture/texture6.jpg'),
  ];

  // Create an array of materials, one for each texture
  const materials = textures.map((texture) => new THREE.MeshStandardMaterial({ map: texture }));

  return (
    <mesh position={[-4, 3, 5]}>
      {/* Box geometry */}
      <boxGeometry args={[1, 1, 1]} />

      {/* Apply the array of materials */}
      <primitive attach="material" object={materials} />
    </mesh>
  );
}
