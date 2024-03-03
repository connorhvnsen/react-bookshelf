import { Stage } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { Book } from "./Book.jsx";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export const Scene = ({ currentColor }) => {
  const [colorMap, normalMap, roughnessMap, metalnessMap] = useLoader(
    TextureLoader,
    [
      "covers/dune.jpeg",
      "covers/dune.jpeg",
      "covers/dune.jpeg",
      "covers/dune.jpeg",
    ]
  );
  return (
    <mesh>
      <Book
        map={colorMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        metalnessMap={metalnessMap}
        currentColor={currentColor}
      />
    </mesh>
  );
};
