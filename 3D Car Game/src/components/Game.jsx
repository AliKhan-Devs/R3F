import React, { useEffect } from "react";
import { GizmoHelper, OrbitControls, GizmoViewport, Environment } from "@react-three/drei";
import { useThree, useLoader } from "@react-three/fiber";

import * as THREE from "three";
import { City } from "./City";

import {BMWCar} from "./BMWCar";    


export default function Game() {
  const { scene } = useThree(); // Access the Three.js scene
  const texture = useLoader(THREE.TextureLoader, "/sky.jpg"); // Load the texture

  // function Model() {
  //   const result = useLoader(GLTFLoader, '/models/city/scene.gltf');
  //   return <primitive object={result.scene} />;
  // }

  useEffect(() => {
    // Set the background of the scene
    scene.background = texture;
  }, [scene, texture]); // Re-run if scene or texture changes

  return (
    <>

  

      {/* Sunlight */}
      <directionalLight
        intensity={2}
        position={[0, 10, 0]}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.001}
        angle={1}
        color={"blue"}
      />

      {/* Fill Light */}
      <ambientLight intensity={0.5}/>


      

      {/* Hemisphere Light */}
      <hemisphereLight
        skyColor={"#ffffff"}
        groundColor={"#444444"}
        intensity={0.6}
      />
      
      {/* Controls */}
      <OrbitControls />
      {/* Gizmo */}
      <GizmoHelper alignment="bottom-right">
        <GizmoViewport />
      </GizmoHelper>
      {/* City */}
      <City />
      {/* Car */}
     
      <BMWCar/>
    </>
  );
}
