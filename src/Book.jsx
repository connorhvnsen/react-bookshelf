/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 book.glb --transform 
Files: book.glb [127.1KB] > /Users/connorhansen/code/bookshelf/public/models/book-transformed.glb [15.49KB] (88%)
*/

import React, { useEffect, useState } from "react";
import { useGLTF, Text, useTexture } from "@react-three/drei";
import { TextureLoader } from "three";
import * as THREE from "three";

export function Book(props) {
  const { nodes, materials } = useGLTF("/models/book.glb");
  const [texture, setTexture] = useState(null);
  const bumpBuckrum = useTexture("/maps/bump_buckrum.jpg");
  // const diffuseTexture = useTexture("maps/diffuse_overlay.jpg");

  // Fix bump orientation
  bumpBuckrum.wrapS = bumpBuckrum.wrapT = THREE.RepeatWrapping;
  bumpBuckrum.repeat.set(1, -1); // Flip the bump texture vertically
  bumpBuckrum.offset.set(0, 1); // Adjust the offset to align the texture correctly\

  useEffect(() => {
    if (props.book.diffuse) {
      const loader = new TextureLoader();
      loader.load(props.book.diffuse, (loadedTexture) => {
        setTexture(loadedTexture);
        loadedTexture.flipY = false;
      });
    }
  }, [props.book.diffuse]);

  // Clone the Jacket material and apply the texture if available
  let jacketMaterial = materials.Jacket.clone();
  jacketMaterial.bumpMap = bumpBuckrum;
  // jacketMaterial.alphaMap = diffuseTexture;
  jacketMaterial.bumpScale = 10; // Adjust the bump scale as needed
  if (texture) {
    jacketMaterial.map = texture;
  }

  // TODO maps
  // access via props.book
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube001.geometry} material={materials.Base} />
      <mesh geometry={nodes.Cube001_1.geometry} material={jacketMaterial} />
      {/* Spine text fallback */}
      {!texture && (
        <Text
          position={[0, 0, 2.01]} // offset to prevent z-clipping
          rotation={[Math.PI, Math.PI, Math.PI / 2]}
          fontSize={0.25}
          color="black"
          anchorX="center"
          anchorY="middle"
        >
          {props.title}
        </Text>
      )}
    </group>
  );
}

useGLTF.preload("/models/book-transformed.glb");
