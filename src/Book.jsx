import React, { useState } from "react";
import { useLoader } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import { useSpring, animated } from "@react-spring/three";

function Book(props) {
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

  return (
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
      {/* Text on spine */}
      <Text
        position={[0, 0, 1.01]}
        rotation={[Math.PI, Math.PI, Math.PI / 2]}
        fontSize={0.3}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        Dune
      </Text>
    </animated.mesh>
    // TBD - Rounded Corners
    // <mesh>
    //   <RoundedBox args={[0.5, 3, 2]}>
    //   </RoundedBox>
    // </mesh>
    //
  );
}

export default Book;
