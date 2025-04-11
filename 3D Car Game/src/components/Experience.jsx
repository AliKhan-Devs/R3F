import {
  GizmoHelper,
  OrbitControls,
  GizmoViewport,
  Box,
  Sphere,
} from "@react-three/drei";
import React, { useEffect, useRef } from "react";
import { RigidBody } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const speed = 5;

// Load model
function Model() {
  const result = useLoader(GLTFLoader, 'models/car/scene.gltf');
  return <primitive object={result.scene} />;
}


export default function Experience() {
  const car = useRef(); // Ref for the sphere
  const plane = useRef(); // Ref for the plane

  // Ensure the plane is rotated correctly
  useEffect(() => {
    if (plane.current) {
      plane.current.rotation.x = -Math.PI / 2; // Lie flat on the ground
    }
  }, []);

  // add event listners
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowUp") {
        car.current.applyImpulse({ x: 0, y: 0, z: -speed });
      } else if (event.key === "ArrowDown") {
        car.current.applyImpulse({ x: 0, y: 0, z: speed });
      } else if (event.key === "ArrowLeft") {
        car.current.applyImpulse({ x: -speed, y: 0, z: 0 });
        car.current.rotation.y += 10;
      } else if (event.key === "ArrowRight") {
        car.current.applyImpulse({ x: speed, y: 0, z: 0 });
        car.current.rotation.y -= 10;
      }
      else if (event.key === "Space") {
        car.current.applyImpulse({ x:0, y: 15, z: 0 });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  })
  return (
    <>
      {/* Camera and controls */}
      <OrbitControls />
      <ambientLight intensity={1} />
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport />
      </GizmoHelper>

      {/* sphere (Dynamic RigidBody) */}
      <RigidBody mass={1}  type="dynamic" position={[0, 2, 40]}>
        <Sphere>
          <meshNormalMaterial />
        </Sphere>
      </RigidBody>

      {/* Car */}
      <RigidBody scale={2} mass={10} ref={car} position={[0, 2, 45]}>
        <Model />
      </RigidBody>

      {/* Obstacles */}
      <RigidBody type="dynamic" position={[-4, 2, -5]}>
        <Box args={[1, 5, 1]}>
          <meshNormalMaterial />
        </Box>
      </RigidBody>
      <RigidBody type="dynamic" position={[-2, 2, -5]}>
        <Box args={[1, 5, 1]}>
          <meshNormalMaterial />
        </Box>
      </RigidBody>
      <RigidBody type="dynamic" position={[0, 2, -5]}>
        <Box args={[1, 5, 1]}>
          <meshNormalMaterial />
        </Box>
      </RigidBody>
      <RigidBody type="dynamic" position={[2, 2, -5]}>
        <Box args={[1, 5, 1]}>
          <meshNormalMaterial />
        </Box>
      </RigidBody>
      <RigidBody type="dynamic" position={[4, 2, -5]}>
        <Box args={[1, 5, 1]}>
          <meshNormalMaterial />
        </Box>
      </RigidBody>

      
      {/* Plane (Fixed RigidBody) */}
      <RigidBody ref={plane} type="fixed" name="floor">
        <Box position={[0, 0, 0]} args={[20, 1, 100]}>
          <meshBasicMaterial color="springgreen" />
        </Box>
      </RigidBody>
    </>
  );
}




















// 









