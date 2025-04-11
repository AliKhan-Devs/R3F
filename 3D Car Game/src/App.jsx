import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import Experience from "./components/Experience";
import Game from "./components/Game";
import { Environment } from "@react-three/drei";


export default function App() {


  return (
    <div id="canvas-containor">
        <Suspense fallback={null}>

        <Canvas shadows>
        <ambientLight intensity={0.3} />


          <Physics>
            {/* <Experience /> */}
            <Game />
          </Physics>
        </Canvas>
        </Suspense>
    
    </div>
  );
}
