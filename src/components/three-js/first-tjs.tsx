import React, { useRef, useState } from 'react'
import { Canvas, useFrame, Vector3 } from '@react-three/fiber'

interface BoxProps {
  position: Vector3;
}

const Box: React.FC<BoxProps> = ({ position }) => {
  // This reference will give us direct access to the mesh
  const mesh = React.useRef({ rotation: { x: 0 } })
  // Set up state for the hovered and active state
  const [hovered, setHover] = React.useState(false)
  const [active, setActive] = React.useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      position={position}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const FirstTJS = () => {
  return (
    <div id="canvas-container" style={{ minWidth: '25vw', minHeight: '25vh', border: '1px solid red' }}>
      <Canvas>
        <mesh>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-1.2, 0, 0]} />
          <Box position={[1.2, 0, 0]} />
        </mesh>
      </Canvas>
      <h1>hello three js</h1>
    </div>
  );
}

export default FirstTJS;