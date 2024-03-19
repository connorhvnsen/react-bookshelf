import React, { useRef, useEffect } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";

function BookPrim({ position, rotation, color }) {
  const bookRef = useRef();
  const gltf = useLoader(GLTFLoader, "/models/book.gltf");
  const m = useLoader(THREE.TextureLoader, "covers/test.png");
  const nm = useLoader(
    THREE.TextureLoader,
    "maps/Leather_012_SD/Leather_011_normal.jpg"
  );
  const rm = useLoader(
    THREE.TextureLoader,
    "maps/Leather_012_SD/Leather_011_roughness.jpg"
  );

  useEffect(() => {
    const coverMesh = gltf.scene.getObjectByName("Cube001_1");
    if (coverMesh) {
      const material = new THREE.MeshStandardMaterial({
        map: m,
        normalMap: nm,
        roughnessMap: rm,
        roughness: 1,
        metalness: 0,
        reflectivity: 0,
        color: new THREE.Color(color),
      });

      material.normalScale.set(1, 1);

      coverMesh.material = material;
    }
  }, [gltf, m, nm, rm, color]);

  return (
    <primitive
      scale={[0.5, 0.5, 0.5]}
      ref={bookRef}
      object={gltf.scene}
      position={position}
      rotation={rotation}
    />
  );
}

export default BookPrim;
