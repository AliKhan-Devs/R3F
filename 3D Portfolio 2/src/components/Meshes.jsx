import React from 'react'
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei'
import ContactModel from './ContactModel'

export default function Meshes() {
  return (
    <>

      <directionalLight position={[-5, 3, 5]} intensity={0.4} />
      <Float>
        <mesh position={[14, -3, -15]} scale={[2, 2, 2]}>
          <sphereGeometry />
          <MeshDistortMaterial
            opacity={0.8}
            transparent
            distort={0.4}
            speed={4}
            color={"gray"}
          />
        </mesh>
      </Float>
      <Float>
        <mesh scale={[3, -2, 3]} position={[3, 1, -18]}>
          <sphereGeometry />
          <MeshDistortMaterial
            opacity={0.8}
            transparent
            distort={1}
            speed={5}
            color="white"
          />
        </mesh>
      </Float>
      <Float>
        <mesh scale={[1.4, 1.4, 1.4]} position={[4, -4, -3]}>
          <boxGeometry />
          <MeshWobbleMaterial
            opacity={0.8}
            transparent
            factor={1}
            speed={5}
            color={"blue"}
          />
        </mesh>
      </Float>
      <Float> 
        <ContactModel />
      </Float>
    </>
  )
}
