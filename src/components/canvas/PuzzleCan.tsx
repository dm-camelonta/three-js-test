import { useState } from 'react'
import { useRouter } from 'next/router'
import { useCursor, MeshDistortMaterial } from '@react-three/drei'
import {useLoader} from "@react-three/fiber";
import {OBJLoader} from "three-stdlib";

export default function Blob() {
  const base = useLoader(OBJLoader, '/puzzle/base.obj')
  const top = useLoader(OBJLoader, '/puzzle/top.obj')
  const body1 = useLoader(OBJLoader, '/puzzle/body1.obj')
  const body2 = useLoader(OBJLoader, '/puzzle/body2.obj')
  const body3 = useLoader(OBJLoader, '/puzzle/body3.obj')
  const body4 = useLoader(OBJLoader, '/puzzle/body4.obj')
  const body5 = useLoader(OBJLoader, '/puzzle/body5.obj')
  const router = useRouter()
  const [hovered, setHover] = useState('')
  useCursor(hovered !== '')
  return (<>
   <primitive onClick={(e) => console.log('base', e)} object={base} scale={0.1}/>
   <primitive onClick={(e) => console.log('top', e)} object={top} scale={0.1}/>
   <primitive
      onClick={(e) => console.log('body1', e)}
      object={body1} scale={0.1}
      onPointerOver={() => setHover('body1')}
      onPointerOut={() => setHover('')}
      color={hovered === 'body1' ? 'hotpink' : '#1fb2f5'}
   />
   <primitive onClick={(e) => console.log('body2', e)} object={body2} scale={0.1}/>
   <primitive onClick={(e) => console.log('body3', e)} object={body3} scale={0.1}/>
   <primitive onClick={(e) => console.log('body4', e)} object={body4} scale={0.1}/>
   <primitive onClick={(e) => console.log('body5', e)} object={body5} scale={0.1}/>
  </>
  )
}
