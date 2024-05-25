"use client";

import { Canvas, useFrame, ThreeElements, Vector3, useLoader } from "@react-three/fiber";
import React from "react"
import * as THREE from 'three'
import { Environment, OrbitControls, ScrollControls, useScroll } from "@react-three/drei";
import "./page.css";

function ExampleCube(props: ThreeElements['mesh']) {
  const ref = React.useRef<THREE.Mesh>(null!);

  const [hovered, hover] = React.useState(false);
  const [clicked, click] = React.useState(false);

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'green' : 'red'} />
    </mesh>
  )
}

interface ImagePaneProps {
  src: string;
  position?: Vector3;
  width?: number;
  height?: number;
}

function ImagePane(props: ImagePaneProps) {
  const colorMap = useLoader(THREE.TextureLoader, props.src);

  return (
    <mesh {...props} >
      <boxGeometry args={[props.width, props.height, 0.2]} />
      <meshStandardMaterial map={colorMap} />
    </mesh>
  )
}

function Scene() {
  const scroll = useScroll();
  const [x, setX] = React.useState<number>(0);

  useFrame((state, delta) => {
    setX(scroll.offset);
  });

  return <>
    <ImagePane src="/logo.png" position={[-3.6, x, -x]} />
    <ExampleCube position={[-2.4, x, 2 * x]} />
    <ExampleCube position={[-1.2, 0, x * x]} />
    <ImagePane src="/photos/photo1.jpg" position={[0, 0, 0]} width={(1 + scroll.offset) * 1.54} height={(1 + scroll.offset) * 1} />
    <ExampleCube position={[1.2, 0, -x]} />
    <ExampleCube position={[2.4, x, 2 * x]} />
    <ExampleCube position={[3.6, -x, 3 * x]} />
  </>;
}

export default function MainPage() {
  return <Canvas style={{ width: '100%', height: '100vh' }}>
    <OrbitControls enableZoom={false} enablePan={false} />
    <Environment preset="dawn" />
    <ScrollControls pages={5} damping={0.3}>
      <Scene />
    </ScrollControls>
  </Canvas>;
}