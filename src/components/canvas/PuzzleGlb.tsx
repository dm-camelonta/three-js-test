import React, {useRef, useState} from 'react'
import {useCursor, useGLTF} from '@react-three/drei'

const pieces = ['base', 'body1', 'body2', 'body3', 'body4', 'body5', 'top'];

export default function Model(props) {
  const { nodes, materials } = useGLTF('/puzzle-glb/puzzle.glb')
  const [hover, setHover] = useState('')
  useCursor(hover !== '')

  // return <group>{pieces.map((piece, index) => <mesh key={index}
  //   scale={0.05}
  //   geometry={nodes[piece].geometry}
  //   material={materials['Steel_-_Satin']}
  //   material-color={hover === piece && !console.log(piece) ? 'gray' : 'white'}
  //   position={[0, 0, 0]}
  //   onPointerOver={(e) => {
  //     e.stopPropagation()
  //     setHover(piece)
  //   }}
  //   onPointerOut={(e) => {
  //     e.stopPropagation()
  //     setHover('')
  //   }}
  //   onClick={(e) => {
  //     e.stopPropagation()
  //     alert(piece)
  //   }}
  // />)}</group>


  return (
    <group {...props} dispose={null}>
      <mesh
        scale={0.05}
        geometry={nodes.base.geometry}
        material={materials['Steel_-_Satin']}
        material-color={hover === 'base' ? 'gray' : 'white'}
        position={[0, 0, 0]}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHover('base')
        }}
        onPointerOut={(e) => {
          e.stopPropagation()
          setHover('')
        }}
        onClick={(e) => {
          e.stopPropagation()
          alert('Base')
        }}
      />
      <mesh
        onClick={(e) => {
          e.stopPropagation()
          alert('Body 1')
        }}
        scale={0.05}
        geometry={nodes.body1.geometry}
        material={materials['Steel_-_Satin.001']}
        material-color={hover === 'body1' ? 'green' : 'white'}
        position={[0, 0, 0]}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHover('body1')
        }}
        onPointerOut={(e) => {
          e.stopPropagation()
          setHover('')
        }}
      />
      <mesh
        onClick={(e) => {
          e.stopPropagation()
          alert('Body 2')
        }}
        scale={0.05}
        geometry={nodes.body2.geometry}
        material={materials['Steel_-_Satin.002']}
        material-color={hover === 'body2' ? 'hotpink' : 'white'}
        position={[0, 0, 0]}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHover('body2')
        }}
        onPointerOut={(e) => {
          e.stopPropagation()
          setHover('')
        }}
      />
      <mesh
        onClick={(e) => {
          e.stopPropagation()
          alert('Body 3')
        }}
        scale={0.05}
        geometry={nodes.body3.geometry}
        material={materials['Steel_-_Satin.003']}
        material-color={hover === 'body3' ? 'green' : 'white'}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHover('body3')
        }}
        onPointerOut={(e) => {
          e.stopPropagation()
          setHover('')
        }}
      />
      <mesh
        onClick={(e) => {
          e.stopPropagation()
          alert('Body 4')
        }}
        scale={0.05}
        geometry={nodes.body4.geometry}
        material={materials['Steel_-_Satin.004']}
        material-color={hover === 'body4' ? 'yellow' : 'white'}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHover('body4')
        }}
        onPointerOut={(e) => {
          e.stopPropagation()
          setHover('')
        }}
      />
      <mesh
        onClick={(e) => {
          e.stopPropagation()
          alert('Body 5')
        }}
        scale={0.05}
        geometry={nodes.body5.geometry}
        material={materials['Steel_-_Satin.005']}
        material-color={hover === 'body5' ? 'lightblue' : 'white'}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHover('body5')
        }}
        onPointerOut={(e) => {
          e.stopPropagation()
          setHover('')
        }}
      />
      <mesh
        onClick={(e) => {
          e.stopPropagation()
          alert('Top')
        }}
        scale={0.05}
        geometry={nodes.top.geometry}
        material={materials['Steel_-_Satin.006']}
        material-color={hover === 'top' ? 'lightgreen' : 'white'}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHover('top')
        }}
        onPointerOut={(e) => {
          e.stopPropagation()
          setHover('')
        }}
      />
    </group>
  )
}

useGLTF.preload('/puzzle-glb/puzzle.glb')
