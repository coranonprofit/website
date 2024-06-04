"use client";

import { Canvas, useFrame, ThreeElements, Vector3, useLoader } from "@react-three/fiber";
import React from "react"
import * as THREE from 'three'
import { Environment, OrbitControls, ScrollControls, useScroll, Text } from "@react-three/drei";
import "./page.module.css";

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


function ExampleScene(props: {
  page: number,
  scroll: number
}) {
  return <Text>Page {props.page}: {props.scroll * 10}</Text>
}

function SceneController() {

  const scenes = [
    () => <Text>You found an easter egg!</Text>,
    ExampleScene,
    ExampleScene,
    ExampleScene,
    ExampleScene,
    ExampleScene,
  ];

  const [scroll, setScroll] = React.useState<number>(0);
  const [page, setPage] = React.useState<number>(1);

  const scrollHook = useScroll();

  useFrame((state, delta) => {
    setScroll(scrollHook.offset - Math.floor(scrollHook.offset * scrollHook.pages) / scrollHook.pages);
    setPage(Math.max(Math.ceil(scrollHook.offset * scrollHook.pages), 1));
  });

  return scenes[page]({page: page, scroll: scroll});

}

export default function MainPage() {
  return <Canvas>
    <OrbitControls enableZoom={false} enablePan={false} />
    <Environment preset="dawn" />
    <ScrollControls pages={5} damping={0.3} distance={2}>
      <SceneController />
    </ScrollControls>
  </Canvas>;
}
