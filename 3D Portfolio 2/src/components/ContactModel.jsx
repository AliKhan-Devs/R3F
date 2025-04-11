import React from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  // Load the model using useGLTF
  const gltf = useGLTF("/models/646d9dcdc8a5f5bddbfac913.glb"); // Replace with your model's path
  return <primitive object={gltf.scene} scale={3} position={[0,-2.5,2]}/>;
}

export default function ContactModel() {
  return (
    <>
      {/* Add lighting */}
      <ambientLight intensity={0.5} />
      {/* <directionalLight position={[10, 2, 5]} intensity={1} /> */}
      
      {/* Load and display the model */}
      <Model />
      </>
  );
}


