"use client"

import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import { OBJLoader } from 'three/addons/loaders/OBJLoader'; // Corrected import
import { MeshStandardMaterial } from 'three';

const Coin = () => {
    const coinRef = useRef();
    const [modelLoaded, setModelLoaded] = useState(false);

    useEffect(() => {
        const loader = new OBJLoader();

        loader.load('/bitcoin.obj', (obj) => {
            // Apply gold material
            const goldMaterial = new MeshStandardMaterial({
                color: 0xFFD700, // Hex color for gold
                roughness: 0.5,
                metalness: 0.8,
            });

            obj.traverse((child) => {
                if (child.isMesh) {
                    child.material = goldMaterial;
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });

            coinRef.current = obj;
            setModelLoaded(true);
        });
    }, []);

    return modelLoaded ? (
        <primitive object={coinRef.current} scale={0.15} position={[0, -1, 0]} />
    ) : null;
};

const CoinCanvas = () => {
    return (
      <Suspense fallback={null}>
        <Canvas size={[1000, 1000]}>
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2}
          
          />
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Coin />
          <Preload all />
        </Canvas>
      </Suspense>
    );
  };
  
  

export default CoinCanvas;