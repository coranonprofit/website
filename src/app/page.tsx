"use client";

import { Canvas, useFrame, ThreeElements, Vector3, useLoader } from "@react-three/fiber";
import React from "react"
import * as THREE from 'three'
import { Environment, OrbitControls, ScrollControls, useScroll, Text } from "@react-three/drei";
import "./page.css";

function ExampleCube(props: ThreeElements['mesh']) {
  const ref = React.useRef<THREE.Mesh>(null!);

  const [hovered, hover] = React.useState(false);
  const [clicked, click] = React.useState(false);

  const [X, setX] = React.useState<number>(0);
  const scroll = useScroll();

  useFrame((state, delta) => {
    setX(scroll.offset * scroll.pages);
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={() => click(!clicked)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={new THREE.Color(`rgb(${20 * Math.floor(X)}%, 50%, 50%)`)} />
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
  const [page, setPage] = React.useState<number>(0);

  useFrame((state, delta) => {
    setX(scroll.offset);
    setPage(Math.max(Math.ceil(scroll.offset * scroll.pages), 1));
  });

  return <>
    <Text position={[0, 0, 3]}>Page {page}</Text>
    <ImagePane src="/logo.png" position={[-3.6, x, -x]} />
    {page >= 1 && <ExampleCube position={[-2.4, x, 2 * x]} />}
    {page >= 2 && <ExampleCube position={[-1.2, 0, x * x]} />}
    <ImagePane src="/photos/photo1.jpg" position={[0, 0, 0]} width={(1 + scroll.offset) * 1.54} height={(1 + scroll.offset) * 1} />
    {page >= 3 && <ExampleCube position={[1.2, 0, -x]} />}
    {page >= 4 && <ExampleCube position={[2.4, x, 2 * x]} />}
    {page == 5 && <ExampleCube position={[3.6, -x, 3 * x]} />}
  </>;
}

export default function MainPage() {
  return <Canvas>
    <OrbitControls enableZoom={false} enablePan={false} />
    <Environment preset="dawn" />
    <ScrollControls pages={5} damping={0.3}>
      <Scene />
    </ScrollControls>
  </Canvas>;
}
