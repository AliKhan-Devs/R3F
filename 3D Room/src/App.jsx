import React , {useState} from "react";
import { Canvas } from "@react-three/fiber";
import AnimatedBox from './components/AnimatedBox';
import DirectionalLight from "./components/DirectionalLight";
import Model from "./components/Model";
import Model2 from "./components/Model2";
import SphereWithTexture from "./components/SphereWithTexture";
import BoxWithTexture from "./components/BoxWithTexture";
import UpdateSceneBackground from "./components/UpdateSceneBackground";
import Sphere2 from "./components/Sphere2";
import { OrbitControls } from "@react-three/drei"; // Useful for easier navigation
import { PerspectiveCamera } from "@react-three/drei";
import AudioComponent from "./components/AudioComponent";

function App() {


  return (
    <div className="canvas-containor">
      <Canvas shadows>
        {/* Optional: Grid helper for better scene navigation */}
        {/* <gridHelper args={[20, 20, 0xff22aa, 0x55ccff]} /> */}

        {/* Animated Box */}
        <AnimatedBox />
        
        {/* Directional light source */}
        <DirectionalLight />

        {/* Models and objects */}
        <Model />
        <Model2 />
        <SphereWithTexture />
        <Sphere2 />
        <BoxWithTexture />
        {/* <AudioComponent/> */}
        {/* Background texture update */}
        <UpdateSceneBackground />

        {/* Camera controls */}
        <OrbitControls /> {/* Uncomment FirstPersonControls if you prefer first-person view */}
        {/* <PerspectiveCamera makeDefault position={[0, 0, 10]} /> */}
      </Canvas>
    </div>
  );
}

export default App;
