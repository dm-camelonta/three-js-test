import { Canvas } from '@react-three/fiber'
import {OrbitControls, Preload, Stage} from '@react-three/drei'

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas {...props}>
      {children}
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 0, 5]} intensity={1} />
      {/*<directionalLight intensity={1.25} />*/}
      {/*<ambientLight intensity={0.55} />*/}
      <Preload all />
      <OrbitControls />
    </Canvas>
  )
}
