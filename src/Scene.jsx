import "./App.css";
import { Environment } from "@react-three/drei";
import React, { Suspense } from "react";
import Bookshelf from "./Bookshelf.jsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export const Scene = () => {
  return (
    <Canvas
      // gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
      // linear
      camera={{ position: [0, 0, 15], fov: 50 }}
    >
      {/* Lights... */}
      <pointLight intensity={10} position={[-6, 5, 4]} />
      <pointLight intensity={10} position={[-3, 5, 4]} />
      <pointLight intensity={10} position={[0, 5, 4]} />
      <pointLight intensity={10} position={[3, 5, 4]} />
      <pointLight intensity={15} position={[6, 0, 8]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      {/* <Environment preset="city" /> */}
      {/* Camera... */}
      <OrbitControls />
      {/* Bookshelf! */}
      <Suspense fallback={null}>
        <Bookshelf />
      </Suspense>
    </Canvas>
  );
};
