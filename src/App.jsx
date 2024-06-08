import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Slippers } from './components/Slippers'

const App = () => {
  return (
    <>
    <Canvas>
      <Environment preset='studio'/>
      <OrbitControls/>
      {/* <mesh>

        <boxGeometry/>
        <meshBasicMaterial color={"red"}/>
      </mesh> */}
      <Slippers/>

    </Canvas>
    
    
    
    </>
  )
}

export default App