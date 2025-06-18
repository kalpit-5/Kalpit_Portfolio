

"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, type PointsProps, useFrame, useThree } from "@react-three/fiber";
import { PerformanceMonitor } from "@react-three/drei";
import * as random from "maath/random";
import { useState, useRef, Suspense, useEffect } from "react";
import type { Points as PointsType } from "three";

export const StarBackground = (props: PointsProps) => {
  const ref = useRef<PointsType>(null!);

  // Use a buffer of length 5000 * 3
  const [sphere] = useState<Float32Array>(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 }) as Float32Array
  );

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={sphere}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};


export const StarsCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dpr, setDpr] = useState(1.5);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleLost = (e: Event) => {
      e.preventDefault();
      window.location.reload(); // simple recovery
    };

    canvas.addEventListener("webglcontextlost", handleLost, false);
    return () => canvas.removeEventListener("webglcontextlost", handleLost);
  }, []);

  return (
    <div className="w-full h-auto fixed inset-0 -z-10">
      <Canvas
        ref={canvasRef}
        camera={{ position: [0, 0, 1] }}
        frameloop="always"
        dpr={dpr}
      >
        <PerformanceMonitor
          onDecline={() => setDpr(1)}
          onIncline={() => setDpr(2)}
        />
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};
