import React, { useLayoutEffect } from "react";
import { useGLTF } from "@react-three/drei";

export const Book = ({
  currentColor,
  colorMap,
  normalMap,
  roughnessMap,
  metalnessMap,
}) => {
  const { scene, nodes, materials } = useGLTF("models/book.gltf");

  useLayoutEffect(() => {
    if (materials == 1) {
      Object.assign(materials.Material, {
        metalnessMap: metalnessMap,
        normalMap: normalMap,
        roughnessMap: roughnessMap,
        map: colorMap,
        color: currentColor,
      });
    }
  }, [
    scene,
    nodes,
    materials,
    currentColor,
    colorMap,
    normalMap,
    roughnessMap,
    metalnessMap,
  ]);

  return <primitive object={scene} />;
};
