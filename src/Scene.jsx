import "./App.css";
import { Environment } from "@react-three/drei";
import React, { Suspense } from "react";
import Bookshelf from "./Bookshelf.jsx";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export const Scene = () => {
  return (
    <Canvas orthographic camera={{ zoom: 50 }}>
      {/* Lights... */}
      <Environment preset="city" />
      {/* Camera... */}
      <OrbitControls />
      {/* Bookshelf! */}
      <Suspense fallback={null}>
        <Bookshelf />
      </Suspense>
    </Canvas>
  );
};
