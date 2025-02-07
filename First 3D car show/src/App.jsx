import { Canvas } from '@react-three/fiber'
import './App.css'
import Experience from './components/Experience'
import { PerspectiveCamera } from '@react-three/drei'
import { Suspense } from 'react'

function App() {

  return (
    <>
      <div id="canvas-containor">
    <Suspense fallback={null}>
      <Canvas shadows camera={{fov:50, position:[1,1,4]}}>
       <Experience/>
      </Canvas>
      </Suspense>
      </div>
    </>
  )
}

export default App
