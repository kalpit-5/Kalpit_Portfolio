"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Group } from "three";
import CanvasLoader from "@/components/sub/Loader";

// Define the expected GLTF structure for better type safety
type GLTFResult = GLTF & {
    nodes: any;
    materials: any;
};

const Earth = () => {
    //   const earth = useGLTF("/planet/scene.gltf") as GLTFResult;
    const earth = useGLTF("/planet/scene.gltf") as unknown as GLTFResult;

    return (
        <primitive object={earth.scene as Group} scale={2.5} position-y={0} rotation-y={0} />
    );
};

export const EarthCanvas = () => {
    return (
        <Canvas
            shadows
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
                <Preload all />
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;
