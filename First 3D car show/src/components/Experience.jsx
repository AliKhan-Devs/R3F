import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useEffect } from 'react';
import { useHelper } from '@react-three/drei';
import { SpotLightHelper } from 'three';
import { useGLTF } from '@react-three/drei';
import { useControls } from 'leva';
import { GizmoHelper, GizmoViewport } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import Scene from './Scene';
import * as THREE from 'three';
import { useState } from 'react';


let texture;


// Function to load texture
function LoadTexture() {
    texture = useLoader(TextureLoader, '/road.jpg');


}

export default function Experience() {
    const spotRef = useRef();
    const planeRef = useRef(null); // Referencing the plane mesh
    const ringRef = useRef(null); // Referencing the ring mesh
    //   useHelper(spotRef, SpotLightHelper, 'orange');
    const [rings, setRings] = useState([
        { id: 0, position: [0, 0.2, 0] },
        { id: 1, position: [0, 0.2, 5] },
        { id: 2, position: [0, 0.2, 10] },
        { id: 3, position: [0, 0.2, 15] },
        { id: 4, position: [0, 0.2,20] },
        { id: 5, position: [0, 0.2, 25] },
        { id: 6, position: [0, 0.2, 30] },
        { id: 7, position: [0, 0.2, 35] },
        { id: 8, position: [0, 0.2, 40] },
        { id: 9, position: [0, 0.2, 45] },
        { id: 10, position: [0, 0.2,50] },
        { id: 11, position: [0, 0.2,55] },
        { id: 12, position: [0, 0.2, 60] },
        { id: 13, position: [0, 0.2, 65] },
        { id: 14, position: [0, 0.2, 70] },
        { id: 15, position: [0, 0.2, 75] },
        { id: 16, position: [0, 0.2, 80] },
        { id: 17, position: [0, 0.2, 85] },
        { id: 18, position: [0, 0.2, 90] },
        { id: 19, position: [0, 0.2, 95] },
        { id: 20, position: [0, 0.2, 100] },
    ]);

    const { angle, color, speed } = useControls({
        angle: Math.PI / 8,
        color: 'blue',
        speed: {
            value: 0.05, // Initial value
            min: 0,      // Minimum value for speed
            max: 1,      // Maximum value for speed
            step: 0.01   // Step size (optional for finer control)
        }
    });

    // Use useFrame to update position every frame


    useFrame(() => {
        if (planeRef.current) {
            planeRef.current.position.z -= speed; // Move the plane along the z-axis
    
            if (planeRef.current.position.z < -70) {
                planeRef.current.position.z = 0; // Reset plane position
    
                // Reset all rings to their initial positions
                setRings((prevRings) =>
                    prevRings.map((ring, index) => ({
                        ...ring,
                        position: [0, 0.2, index * 5], // Reset to the original spacing
                    }))
                );
            }
        }
    
        if (ringRef.current) {
            ringRef.current.children.forEach((ring) => {
                ring.position.z -= speed;
    
                if (ring.position.z < -30) {
                    ring.position.z = 70; // Reset individual ring's position
                }
            });
        }
    });
    
    return (
        <>
            <OrbitControls />
            {/* Grid and Axes for reference */}
            {/* <axesHelper args={[5]} />
      <gridHelper args={[20, 20, 0xff22aa, 0x55ccff]} /> */}
            <ambientLight intensity={9} color={' #FF474C'} />

            {/* Lights */}
            {/* left side */}
            <spotLight
                ref={spotRef}
                position={[10, 4, 0]}
                angle={angle}
                color={'red'}
                castShadow
                intensity={90}
            />
            {/* Right side  */}
            <spotLight
                ref={spotRef}
                position={[-2, 3, -8]}
                angle={angle}
                color={color}
                castShadow
                intensity={90}
            />
            {/* back */}
            <spotLight
                ref={spotRef}
                position={[0, 5, 8]}
                angle={angle}
                color={'red'}
                castShadow
                intensity={80}
            />
            {/* top */}
            <spotLight
                ref={spotRef}
                position={[0, 5, 0]}
                angle={1.6}
                color={'white'}
                castShadow
                intensity={90}
            />

            {/* Reflective Plane */}
            <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
                <GizmoViewport />
            </GizmoHelper>

            {/* Rings */}
            <group ref={ringRef}>
                {rings.map((ring) => (
                    <mesh key={ring.id} position={ring.position}>
                        <ringGeometry args={[2, 2.5, 32]} />
                        <meshNormalMaterial side={2} />
                    </mesh>
                ))}
            </group>
            <mesh
                ref={planeRef} // Ensure the ref is attached to the mesh
                receiveShadow
                rotation={[-Math.PI / 2, 0, 0]} // Rotate to lie flat
                position={[0, 0, 0]} // Place slightly below the model
            >
                <LoadTexture />
                <planeGeometry args={[50, 200]} /> {/* Adjust size as needed */}

                <meshStandardMaterial
                    color="white"
                    roughness={0.1}
                    metalness={0.8}
                    map={texture}
                />
            </mesh>



            {/* <Model /> */}
            <Scene />
        </>
    );
}
