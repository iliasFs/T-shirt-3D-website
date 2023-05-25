//Lights behind the shirt shadows etc...
import { easing } from "maath";
import { useFrame } from "@react-three/fiber";
import { useRef, forwardRef, RefObject } from "react";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { accumulativeContext } from "@react-three/drei";
import { Group } from "three";

const Backdrop = () => {
  //fix the shadow

  const shadowsRef: RefObject<typeof AccumulativeShadows> = useRef(null);
  return (
    <AccumulativeShadows
      ref={shadowsRef}
      temporal
      frames={60}
      alphaTest={0.85}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.5}
        ambient={0.25}
        position={[5, 5, -10]}
      />
    </AccumulativeShadows>
  );
};

export default Backdrop;
