import React, { useRef } from 'react'
import { useHelper } from '@react-three/drei';
import { SpotLightHelper, DirectionalLightHelper,CameraHelper } from 'three';

export default function DirectionalLight() {
    const light = useRef();
    // useHelper(light, DirectionalLightHelper, 2, 'crimson');
    const shadow = useRef();
    useHelper(shadow, CameraHelper);
    return (
        <directionalLight
    ref={light}
    position={[-5, 8, 0]}
    castShadow>
      {/* <orthographicCamera
    attach='shadow-camera'
    ref={shadow}
    left={-2}
    right={2}
    top={8}
    bottom={4}
  /> */}
    </directionalLight>
    );
}

