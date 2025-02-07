import React from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
export default function Model() {
    const result = useLoader(GLTFLoader,'glTF/Alien.gltf');
    return <primitive object={result.scene} position={[0,5,0]}/>
}
