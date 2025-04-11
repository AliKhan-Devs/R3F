import './App.css'
import './index.css'
import { Canvas } from '@react-three/fiber'
import Experience from './components/Experience'
import Cursor from './components/Cursor'

function App() {


  return (
    <>
      <Canvas camera={{fov:64, position:[2.3,1.5,2.3]}}>
        <Experience />
      </Canvas>
        <Cursor/>
    </>
  )
}

export default App
