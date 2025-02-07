import React, { useRef } from 'react';
import { useHelper } from '@react-three/drei';
import { SpotLightHelper } from 'three';
import { useControls } from 'leva';

export default function LightWithHelper() {
  const light = useRef();

  const { angle, penumbra } = useControls({
    angle: Math.PI / 8,
    penumbra: {
      value: 0.0,
      min: 0.0,
      max: 1.0,
      step: 0.1,
    },
  });
  // Attach the helper to the light
  useHelper(light, SpotLightHelper, 'orange');

  return (
    <spotLight
      ref={light}
      intensity={50}
      position={[4, 2, 3]}
      angle={angle}
      penumbra={penumbra}
      castShadow
    />
  );
}
