import React, { useRef, useEffect } from 'react'
import { OrbitControls, ScrollControls,Scroll } from '@react-three/drei'
import Office from './Office'
import Overlay from './Overlay';
export default function Experience() {


    return (
        <>
            <ambientLight intensity={1} />
            <OrbitControls enableZoom={false} />
            <ScrollControls pages={4} damping={0.25}>
                <Scroll html>
                    <Overlay/>
                </Scroll>
            <Office />
            </ScrollControls>
        </>
    );
}
