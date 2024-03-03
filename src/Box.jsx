import { createRoot } from "react-dom/client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Book } from "./Book.jsx";
import { useSpring, animated } from "@react-spring/three";

function Box(props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef();
  // Hold state for hovered and clicked events
  const [rotation, setRotation] = useState([0, 0, 0]);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prevClicked) => !prevClicked);
  };

  const targetRotation = clicked ? [0, -Math.PI / 3, 0] : [0, 0, 0];

  const spring = useSpring({
    from: { rotation: rotation },
    to: { rotation: targetRotation },
    config: { duration: 400, easing: (t) => 1 - Math.pow(1 - t, 3) },
  });

  const m = useLoader(THREE.TextureLoader, "covers/dune.jpeg");
  const n = useLoader(
    THREE.TextureLoader,
    "maps/Leather_012_SD/Leather_011_normal.jpg"
  );
  const r = useLoader(
    THREE.TextureLoader,
    "maps/Leather_012_SD/Leather_011_roughness.jpg"
  );

  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    // <Book />
    // <primitive object={gltf.scene} />
    <animated.mesh onClick={handleClick} rotation={spring.rotation}>
      <boxGeometry args={[0.5, 3, 2]}></boxGeometry>
      {/* cover */}
      <meshStandardMaterial
        roughness={1}
        attach="material-0"
        map={m}
        normalMap={n}
        roughnessMap={r}
        normalScale={[2, 2]}
      />
      {/* back */}
      <meshStandardMaterial attach="material-1" color="orange" />
      {/* top */}
      <meshStandardMaterial attach="material-2" color="orange" />
      {/* bottom */}
      <meshStandardMaterial attach="material-3" color="orange" />
      {/* spline */}
      <meshStandardMaterial attach="material-4" color="orange" />
      {/* right */}
      <meshStandardMaterial attach="material-5" color="orange" />
    </animated.mesh>
    // <mesh>
    //   <RoundedBox args={[0.5, 3, 2]}>
    //     {/* cover */}
    //     <meshStandardMaterial attach="material-0" map={texture} />
    //     {/* back */}
    //     <meshStandardMaterial attach="material-1" color="green" />
    //     {/* top */}
    //     <meshStandardMaterial attach="material-2" color="blue" />
    //     {/* bottom */}
    //     <meshStandardMaterial attach="material-3" color="cyan" />
    //     {/* spline */}
    //     <meshStandardMaterial attach="material-4" color="magenta" />
    //     {/* right */}
    //     <meshStandardMaterial attach="material-5" color="yellow" />
    //   </RoundedBox>
    // </mesh>
    //
  );
}

export default Box;
