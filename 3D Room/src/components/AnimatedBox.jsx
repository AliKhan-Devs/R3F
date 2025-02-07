import { useRef , useState} from "react";
import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
// for camera controls 
import { OrbitControls, GizmoHelper, GizmoViewcube, GizmoViewport, } from "@react-three/drei";



function AnimatedBox() {
  const [wireframe, setWireframe] = useState(false);

// Handle click event to toggle the wireframe mode
const handleClick = () => {
  setWireframe(wireframe === false ? true : false);
};


    const boxRef = useRef();

    const { color, speed } = useControls({
        color: '#00bfff',
        speed: {
          value: 0.005,
          min: 0.0,
          max: 0.03,
          step: 0.001,
        },
      });

    // useframe hook for inifite animations
   useFrame(() => {
  boxRef.current.rotation.x += speed;
  boxRef.current.rotation.y += speed;
  boxRef.current.rotation.z += speed;
});

    return (

        // create a mesh
        <mesh ref={boxRef} position={[5, 3, 0]} castShadow onClick={() => handleClick()}>
            {/* <axesHelper args={[10]} /> */}
            <GizmoHelper alignment='bottom-right' margin={[80, 80]}>
                <GizmoViewport/>
            </GizmoHelper>
            <boxGeometry args={[2, 2, 2]} /> //box geometry with arguments for height and width adjustment
            <meshStandardMaterial color={color} wireframe = {wireframe}/> //select material type wether to be affected by light or not
            <OrbitControls /> //Allow orbital controls
        </mesh>

    );
}
export default AnimatedBox