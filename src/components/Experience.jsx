import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { AmbientLight, DirectionalLight } from "three";
import { Human } from "./Human";

export const Experience = () => {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 200, 400]} />
      <OrbitControls />
      <Human />
    </>
     
  );
};
