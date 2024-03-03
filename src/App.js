import "./App.css";
import Box from "./Box";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Edges,
  MeshPortalMaterial,
  CameraControls,
  Environment,
  PivotControls,
} from "@react-three/drei";
import Inspector from "./Inspector";
import { Scene } from "./Scene.jsx";
import React, { Suspense, useState } from "react";
import * as THREE from "three";

function App() {
  const teal = new THREE.Color(0x008080);
  return (
    <div className="App">
      <Canvas>
        {/* <ambientLight /> */}
        {/* <ambientLight intensity={0.5} /> */}
        <Environment preset="apartment" />
        <Suspense fallback={null}>
          <Box position={[0, 0, 0]} />
          {/* <Inspector>
            {/* <Scene currentColor={teal} /> */}
          {/* </Inspector> */}
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
