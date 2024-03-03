import "./App.css";
import Book from "./Book.jsx";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import React, { Suspense } from "react";

function App() {
  return (
    <div className="App">
      <Canvas>
        <Environment preset="apartment" />
        <Suspense fallback={null}>
          <Book position={[0, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
