//POSITIONING OF THE CAMERA

import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useSnapshot } from "valtio";
import state from "../store";
import { useRef } from "react";
import { Group } from "three";

interface CameraRigProps {
  children: any;
}

const CameraRig = ({ children }: CameraRigProps) => {
  const group = useRef<Group>(null);
  const snap = useSnapshot(state);

  useFrame((state, delta) => {
    if (group.current) {
      //we need to make the 3d model responsive to all screens
      const isBreakpoint = window.innerWidth <= 1260;
      const isMobile = window.innerWidth <= 600;

      //set the initial position of the model
      let targetPosition = [-0.4, 0, 2];
      if (snap.intro) {
        if (isBreakpoint) targetPosition = [0, 0, 2];
        if (isMobile) targetPosition = [-0.2, 0.65, 2.5];
      } else {
        if (isMobile) targetPosition = [0, 0, 2.5];
        else targetPosition = [0, 0, 2];
      }

      //set model camera position
      easing.damp3(state.camera.position, targetPosition, 0.25, delta);

      //set the model rotation smoothly
      easing.dampE(
        group.current.rotation,
        [state.pointer.y / 10, -state.pointer.x / 5, 0],
        0.25
      );
    }
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
