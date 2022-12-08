import { useState } from 'react'
import { useRouter } from 'next/router'
import { useCursor, MeshDistortMaterial } from '@react-three/drei'
import {useLoader} from "@react-three/fiber";
import {OBJLoader} from "three-stdlib";

export default function Blob() {
  const obj = useLoader(OBJLoader, '/spraycan.obj')
  const router = useRouter()
  const [hovered, hover] = useState(false)
  useCursor(hovered)
  return (
   <primitive onClick={(e) => console.log('click', e)} object={obj} scale={0.1}/>
  )
}
