import React, { useRef, useState, useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame, extend as fiberExtend } from '@react-three/fiber'
import * as THREE from 'three'

// ─── Custom Hexagon Geometry ───────────────────────────────────────────────
class HexagonBufferGeometry extends THREE.BufferGeometry {
    constructor(radius = 0.5, height = 0.25) {
        super()
        const shape = new THREE.Shape()
        for (let i = 0; i < 6; i++) {
            const theta = (i / 6) * Math.PI * 2
            if (i === 0) {
                shape.moveTo(Math.cos(theta) * radius, Math.sin(theta) * radius)
            } else {
                shape.lineTo(Math.cos(theta) * radius, Math.sin(theta) * radius)
            }
        }
        shape.closePath()
        const extrudeSettings = { depth: height, bevelEnabled: false }
        const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings)
        this.copy(geometry)
    }
}

fiberExtend({ HexagonBufferGeometry })

// ─── WavyRoad Component ───────────────────────────────────────────────────────
function WavyRoad({ curve }) {
    const points = useMemo(() => curve.getPoints(50), [curve])
    const geometry = useMemo(() => new THREE.BufferGeometry().setFromPoints(points), [points])
    return (
        <line
            geometry={geometry}
            material={new THREE.LineBasicMaterial({ color: 0x888888 })}
        />
    )
}

// ─── StreetLight Component ────────────────────────────────────────────────────
function StreetLight({ position, onClick }) {
    return (
        <mesh position={position} onClick={onClick}>
            <boxGeometry args={[0.1, 4, 0.1]} />
            <meshStandardMaterial color="yellow" />
        </mesh>
    )
}

// ─── Hexagon Component ────────────────────────────────────────────────────────
function Hexagon({ position, onClick }) {
    return (
        <mesh position={position} onClick={onClick}>
            <hexagonBufferGeometry args={[1, 0.5]} />
            <meshStandardMaterial color="red" />
        </mesh>
    )
}

// ─── Project Component ─────────────────────────────────────────────────────────
// ─── Project Component ─────────────────────────────────────────────────────────
export function Project() {
    // Load the car model
    const { nodes, materials } = useGLTF('/models/car/scene.gltf')

    // Define the road curve
    const curve = useMemo(
        () =>
            new THREE.CatmullRomCurve3([ 
                new THREE.Vector3(0, 0, -50),
                new THREE.Vector3(-5, 0, -25),
                new THREE.Vector3(0, 0, 0),
                new THREE.Vector3(5, 0, 25),
                new THREE.Vector3(0, 0, 50),
            ]),
        []
    )

    // Define t-values for street lights
    const tValues = [0, 0.2, 0.4, 0.6, 0.8, 1]

    const [carT, setCarT] = useState(tValues[5])  // Car starts at the first street light
    const [targetT, setTargetT] = useState(tValues[0])  // Target position
    const [currentIndex, setCurrentIndex] = useState(0) // Current street light index

    const carRef = useRef()
    const cameraRef = useRef()

    // Handle street light clicks
    const handleStreetLightClick = (index) => {
        setTargetT(tValues[index])
    }

    // Handle hexagon clicks
    const handleHexagonClick = () => {
        alert(`Car is currently at streetlight ${currentIndex + 1}`)
    }

    // Animate car and camera
    useFrame((state, delta) => {
        if (Math.abs(carT - targetT) > 0.001) {
            const speed = 0.5
            const newCarT = THREE.MathUtils.lerp(carT, targetT, delta * speed)
            setCarT(newCarT)
            const newPos = curve.getPoint(newCarT)
            carRef.current.position.copy(newPos)

            const tangent = curve.getTangent(newCarT)
            const lookAtPos = newPos.clone().add(tangent)

            carRef.current.lookAt(lookAtPos)

            // Camera follows the car and stays below it
            const cameraOffset = new THREE.Vector3(0, 3, 6) // Adjust these values for the right camera angle
            const desiredCamPos = newPos.clone().add(cameraOffset)

            cameraRef.current.position.lerp(desiredCamPos, delta * 2) // Smooth camera transition
        } else {
            const newIndex = tValues.findIndex((t) => Math.abs(t - targetT) < 0.005)
            if (newIndex !== -1 && newIndex !== currentIndex) {
                setCurrentIndex(newIndex)
            }
        }

        // Ensure the camera always looks at the car
        const carPosition = carRef.current.position
        const cameraOffset = new THREE.Vector3(2, 2, 10) // Adjust this value if needed
        state.camera.position.set(
            carPosition.x - cameraOffset.x,
            carPosition.y + 3, // Slightly above the car
            carPosition.z - cameraOffset.z
        )
        state.camera.lookAt(carPosition.x, carPosition.y, carPosition.z)
        state.camera.fov = 100;
    })

    return (
        <>
            <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[20, 200]} /> {/* Adjust size as needed */}
                <meshNormalMaterial />
            </mesh>
            <WavyRoad curve={curve} />

            {/* Render street lights with horizontal spacing */}
            {tValues.map((t, index) => {
                const pos = curve.getPoint(t)

                // Horizontal offset between street lights (Adjust as needed)
                const offsetX = Math.sin(t * Math.PI * 2) * 5  // Adjust the multiplier for desired spacing
                const offsetZ = Math.cos(t * Math.PI * 2) * 5  // Adjust the multiplier for desired spacing

                const streetLightPosition = new THREE.Vector3(pos.x + offsetX, pos.y, pos.z + offsetZ)

                return (
                    <React.Fragment key={index}>
                        <StreetLight position={streetLightPosition} onClick={() => handleStreetLightClick(index)} />
                        {Math.abs(carT - t) < 0.01 && (
                            <Hexagon position={streetLightPosition} onClick={handleHexagonClick} />
                        )}
                    </React.Fragment>
                )
            })}

            {/* The car model */}
            <group ref={carRef} dispose={null} scale={0.9}>
                <ambientLight intensity={1}/>
                <group rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh geometry={nodes.Object_2.geometry} material={materials.Black_outline} />
                    <mesh geometry={nodes.Object_3.geometry} material={materials.Coche_Pintura3} />
                    <mesh geometry={nodes.Object_4.geometry} material={materials.Coche_blanco} />
                    <mesh geometry={nodes.Object_5.geometry} material={materials.Coche_gris01} />
                    <mesh geometry={nodes.Object_6.geometry} material={materials.Coche_gris02} />
                    <mesh geometry={nodes.Object_7.geometry} material={materials.Coche_negro} />
                    <mesh geometry={nodes.Object_8.geometry} material={materials.Coche_rojo} />
                </group>
            </group>

            {/* Perspective camera that follows the car */}
            <perspectiveCamera ref={cameraRef} makeDefault position={[10, 5, 20]} />
        </>
    )
}
