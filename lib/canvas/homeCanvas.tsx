"use client";
import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const Stars = () => {
    let stars = [];
    for (let i = 0; i < 10000; i++) {
        let x = THREE.MathUtils.randFloatSpread(2000);
        let y = THREE.MathUtils.randFloatSpread(2000);
        let z = THREE.MathUtils.randFloatSpread(2000);
        stars.push(x, y, z);
    }
    let position = new Float32Array(stars);

    let starField = useRef<any>();
    useFrame((_, delta) => {
        starField.current.rotation.x += delta / 15;
        starField.current.rotation.y += delta / 15;
        starField.current.rotation.z += delta / 15;
    });

    let starMap = useLoader(THREE.TextureLoader, "./assets/star.png");
    return (
        <group>
            <Points positions={position} ref={starField}>
                <PointMaterial color="#faf7f7" map={starMap} />
            </Points>
        </group>
    );
};

const HomeCanvas = () => {
    return (
        <Canvas>
            <Suspense fallback={null}>
                <Stars />
            </Suspense>
            <ambientLight intensity={0.5} color={"#3B82F6"} />
            <directionalLight
                intensity={1}
                position={[0, 14, 3]}
                color={"#3B82F6"}
            />
            <mesh position={[0, -1.5, 0]}>
                <sphereGeometry args={[1.2, 64, 64]} />
                <meshStandardMaterial
                    roughness={0.6}
                    metalness={0.5}
                    color="#ffffff"
                />
            </mesh>
        </Canvas>
    );
};

export default HomeCanvas;
