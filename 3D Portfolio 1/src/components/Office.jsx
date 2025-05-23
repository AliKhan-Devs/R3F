/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/models/Office.glb 
*/

import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import gsap from 'gsap';
import { useFrame } from '@react-three/fiber';
export default function Office(props) {

  // Declare teh height of the each roof or floor adjust accordingly and # of floors/roofs
  const FloorHeight = 2.3;
  const No_of_Floors = 3;

  const { nodes, materials } = useGLTF('/models/Office.glb')

  // Create a reference to the group of the floors
  const ref = useRef();
  const tl = useRef();
  const libraryRef = useRef(); // create refrenece to the library mish
  const aticRef = useRef(); // create refrence to the atic mish

  const scroll = useScroll(); //UseScroll give us the current scroll position of our page

  // UseFrame hook runs every time a scene is rendered
  useFrame(() => {
    // The seek function directly jum to a part of the animation
    // if the overall duration of animation is 2s then how much for a specific scroll position is calculated by the scroll.offset * tl.current.duration() the scroll.offset returns a value between 0 and 1, o means at the top of the page and 1 means at the bottom/end. we have divided the whole gsap animation based on the scroll if we are at the start no animation as we scroll the offset value increase from 0 and it is multiplied with the timeline to find how much animatons should be applied. and when we completly scroll the animation at that time is also completed and when we half scroll the animation is also completed half
    tl.current.seek(scroll.offset * tl.current.duration());
  })
  //useLayoutEffect hook which work similar to useEffect but useEffect runs after DOM is completly loaded and painted on the screen while useLayoutEffect run just after DOM is manipulated and is not painted yet.
  useLayoutEffect(() => {
    // Create a gsap timeline for animations
    tl.current = gsap.timeline();


    // Vertical Animations for the over all group
    tl.current.to(ref.current.position, {
      duration: 1,
      x:-1,
      z:2,
    },0)
    tl.current.to(ref.current.position, {
      duration: 1,
      x:1,
      z:2,
    },1)

    tl.current.to(ref.current.position, {
      duration: 2,
      y: -FloorHeight * (No_of_Floors - 1)
    }, 0);



    // Now create an animation for the library part
    tl.current.from(libraryRef.current.position, {
      duration: 0.5,
      x:-2
    },0.5) //the 0.5 tells that start the animation after the timeline starts

    // Now create an animation for the attic section

    tl.current.from(aticRef.current.position, {
      duration: 1.5,
      y: 2
    },0)
    tl.current.from(aticRef.current.position, {
      duration: 0.5,
      z: -2
    },1.5)
    tl.current.from(aticRef.current.rotation, {
      duration: 0.5,
      y: -2
    },1)

    tl.current.from(libraryRef.current.rotation, {
      duration: 0.5,
      y:-Math.PI/2
    },0) 


  }, []);
  



  return (
    // The group tag exactly work as we do div in html

    <group {...props} dispose={null} ref={ref}>

      <group>
        <group>
        <mesh geometry={nodes['01_office'].geometry} material={materials['01']} />
        </group>
      </group>

      <group position={[0, 2.114, -2.23]}>
        <group ref={libraryRef}>
        <mesh geometry={nodes['02_library'].geometry} material={materials['02']}  />
        </group>
      </group>

      <group position={[-1.97, 4.227, -2.199]} >
        <group ref={aticRef}>
        <mesh geometry={nodes['03_attic'].geometry} material={materials['03']}/>
        </group>
      </group>

    </group>
  )
}

useGLTF.preload('/models/Office.glb')
