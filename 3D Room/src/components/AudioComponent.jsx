import React, { useEffect, useRef } from 'react';
import { AudioLoader, AudioListener, PositionalAudio } from 'three';
import { useThree } from '@react-three/fiber';

export default function AudioComponent() {
  const { camera, scene } = useThree(); // Correctly destructure from useThree
  const audioRef = useRef(null);

  useEffect(() => {
    // Create an audio listener and attach it to the camera
    const listener = new AudioListener();
    camera.add(listener);

    // Create the positional audio
    const sound = new PositionalAudio(listener);

    // Load the audio file
    const audioLoader = new AudioLoader();
    audioLoader.load('/sound.mp3', (buffer) => {
      sound.setBuffer(buffer);
      sound.setLoop(true);
      sound.setVolume(0.5);
      sound.setRefDistance(5);

      // Store the sound instance in the ref
      audioRef.current = sound;
    });

    // Add the sound to the scene or specific mesh
    scene.add(sound);

    // Play sound on user interaction (e.g., click)
    const handleClick = () => {
      if (sound.isPlaying) {
        sound.stop();
      } else {
        sound.play();
      }
    };

    window.addEventListener('click', handleClick);

    // Cleanup event listeners and remove sound on unmount
    return () => {
      window.removeEventListener('click', handleClick);
      camera.remove(listener);
      scene.remove(sound);
    };
  }, [camera, scene]);

  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshNormalMaterial />
    </mesh>
  );
}
