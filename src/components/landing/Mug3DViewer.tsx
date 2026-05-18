import { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

// Color mapping matching the selection options
const COLOR_VALUES: Record<string, string> = {
  Blanco: "#ffffff",
  "Rosado empolvado": "#e4b5b2",
  Terracota: "#a64d3c",
  Negro: "#1a1a1a",
  "Dorado suave": "#d4af37",
};

export function MugModel({ color }: { color: string }) {
  const { scene } = useGLTF("/models/taza.glb");
  const mugRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (scene) {
      const targetColor = new THREE.Color(COLOR_VALUES[color] || "#ffffff");
      
      // Traverse the model and apply color to all mesh materials
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          // Clone material so we don't modify the global cached material
          if (mesh.material) {
            mesh.material = (mesh.material as THREE.Material).clone();
            if ((mesh.material as THREE.MeshStandardMaterial).color) {
              (mesh.material as THREE.MeshStandardMaterial).color.copy(targetColor);
            }
          }
        }
      });
    }
  }, [scene, color]);

  return (
    <group ref={mugRef} dispose={null}>
      {/* Adjust the scale and position as needed to center the mug */}
      <primitive object={scene} scale={9.5} position={[0, -0.8, 0]} rotation={[0.2, 0, 0]} />
    </group>
  );
}

// Preload the model
useGLTF.preload("/models/taza.glb");

export default function Mug3DViewer({ color }: { color: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} className="w-full h-full">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, 10, -5]} intensity={0.5} color="#ffd4b8" />
      
      <MugModel color={color} />
      
      <Environment preset="studio" />
      
      {/* Soft shadow on the floor */}
      <ContactShadows
        position={[0, -0.81, 0]}
        opacity={0.6}
        scale={10}
        blur={2}
        far={4}
      />
      
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 2 + 0.1}
      />
    </Canvas>
  );
}
