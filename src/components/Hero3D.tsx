import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function TechDevice() {
  const meshRef = useRef();

  return (
    <group ref={meshRef}>
      {/* Main Device */}
      <mesh rotation={[0, Math.PI * 0.25, 0]}>
        <boxGeometry args={[2, 4, 0.2]} />
        <meshStandardMaterial 
          color="#666"
          metalness={0.9}
          roughness={0.1}
        />
        
        {/* Screen */}
        <mesh position={[0, 0, 0.11]}>
          <boxGeometry args={[1.8, 3.8, 0.01]} />
          <meshStandardMaterial 
            color="#000"
            metalness={1}
            roughness={0}
            emissive="#004"
            emissiveIntensity={0.8}
          />
        </mesh>
      </mesh>

      {/* Floating Elements */}
      {[...Array(5)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.sin(i * Math.PI * 0.4) * 3,
            Math.cos(i * Math.PI * 0.4) * 3,
            0
          ]}
          scale={0.3}
        >
          <sphereGeometry />
          <meshStandardMaterial
            color="#fff"
            emissive="#88f"
            emissiveIntensity={0.5}
            metalness={1}
            roughness={0.1}
          />
        </mesh>
      ))}
    </group>
  );
}

const Hero3D = () => {
  return (
    <div className="h-screen w-full">
      <Canvas 
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true }}
      >
        <fog attach="fog" args={['#000', 5, 15]} />
        <ambientLight intensity={0.5} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1}
          intensity={1}
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <TechDevice />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default Hero3D;