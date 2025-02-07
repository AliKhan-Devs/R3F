import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';
import * as THREE from 'three';

export default function UpdateSceneBackground() {
  const { scene } = useThree();

  useEffect(() => {
    const loader = new THREE.CubeTextureLoader();
    loader.load(
      [
        'https://i0.wp.com/picjumbo.com/wp-content/uploads/wood-working-repetitive-seamless-texture-free-photo.png?w=600&quality=80',
        'https://i0.wp.com/picjumbo.com/wp-content/uploads/wood-working-repetitive-seamless-texture-free-photo.png?w=600&quality=80',
        'https://i0.wp.com/picjumbo.com/wp-content/uploads/wood-working-repetitive-seamless-texture-free-photo.png?w=600&quality=80',
        'https://i0.wp.com/picjumbo.com/wp-content/uploads/wood-working-repetitive-seamless-texture-free-photo.png?w=600&quality=80',
        'https://i0.wp.com/picjumbo.com/wp-content/uploads/autumn-leaves-repetitive-texture-free-image.png?w=600&quality=80',
        'https://i0.wp.com/picjumbo.com/wp-content/uploads/autumn-leaves-fall-colors-seamless-texture-free-image.png?w=600&quality=80',
       
       
        ],
      (texture) => {
        scene.background = texture;
      },
      undefined,
      (error) => {
        console.error('Error loading cube textures:', error);
      }
    );
  }, [scene]);
  

  return null;
}
