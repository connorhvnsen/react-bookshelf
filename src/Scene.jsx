import "./App.css";
import { Environment } from "@react-three/drei";
import React, { Suspense } from "react";
import Bookshelf from "./Bookshelf.jsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      {/* Lights... */}
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
      <Environment preset="city" />
      {/* Camera... */}
      {/* <OrbitControls /> */}
      {/* Bookshelf! */}
      <Suspense fallback={null}>
        <Bookshelf />
      </Suspense>
    </Canvas>
  );
};
