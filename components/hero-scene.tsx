"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import * as THREE from "three";

/* ══════════════════════════════════════════════════════════════
   MODERN SUPERCAR — bright materials, strong lighting,
   curved body, auto-rotating turntable with mouse tilt.
   ══════════════════════════════════════════════════════════════ */
function ModernCar() {
  const groupRef = useRef<THREE.Group>(null);
  const mouseTarget = useRef({ x: 0, y: 0 });
  const mouseCurrent = useRef({ x: 0, y: 0 });
  const wheelsRef = useRef<THREE.Mesh[]>([]);

  // ── MATERIALS ──
  // Bright red metallic body — emissive so it glows in dark scene
  const bodyMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#e8243c",
        metalness: 0.6,
        roughness: 0.18,
        emissive: "#e8243c",
        emissiveIntensity: 0.12,
      }),
    []
  );
  const accentMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#c8fa5f",
        emissive: "#c8fa5f",
        emissiveIntensity: 0.6,
        metalness: 0.5,
        roughness: 0.15,
      }),
    []
  );
  const carbonMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#222228",
        metalness: 0.4,
        roughness: 0.35,
        emissive: "#222228",
        emissiveIntensity: 0.05,
      }),
    []
  );
  const glassMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#88bbee",
        metalness: 0.3,
        roughness: 0.05,
        transparent: true,
        opacity: 0.35,
        emissive: "#4488aa",
        emissiveIntensity: 0.08,
      }),
    []
  );
  const tireMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#1a1a1e",
        metalness: 0.05,
        roughness: 0.95,
      }),
    []
  );
  const rimMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#e0e0e0",
        metalness: 0.95,
        roughness: 0.05,
        emissive: "#aaaaaa",
        emissiveIntensity: 0.08,
      }),
    []
  );
  const headlightMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#ffffff",
        emissive: "#ffffff",
        emissiveIntensity: 2,
      }),
    []
  );
  const taillightMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#ff1a1a",
        emissive: "#ff1a1a",
        emissiveIntensity: 1.5,
      }),
    []
  );
  const underglowMat = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: "#c8fa5f",
        emissive: "#c8fa5f",
        emissiveIntensity: 0.8,
        transparent: true,
        opacity: 0.5,
      }),
    []
  );

  const { pointer } = useThree();

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();
    const dt = Math.min(delta, 0.05);

    mouseTarget.current.x = pointer.x;
    mouseTarget.current.y = pointer.y;
    mouseCurrent.current.x +=
      (mouseTarget.current.x - mouseCurrent.current.x) * (1 - Math.exp(-3 * dt));
    mouseCurrent.current.y +=
      (mouseTarget.current.y - mouseCurrent.current.y) * (1 - Math.exp(-3 * dt));

    // Floating bob
    groupRef.current.position.y = Math.sin(t * 0.7) * 0.05 + Math.sin(t * 1.2) * 0.02;
    groupRef.current.position.x = Math.sin(t * 0.4) * 0.01;

    // Slow turntable + mouse tilt
    groupRef.current.rotation.y = t * 0.35 + mouseCurrent.current.x * 0.25;
    groupRef.current.rotation.x = -mouseCurrent.current.y * 0.1 + 0.08;
    groupRef.current.rotation.z = Math.sin(t * 0.3) * 0.012;

    // Spin wheels
    wheelsRef.current.forEach((w) => {
      if (w) w.rotation.x += dt * 5;
    });
  });

  const setWheel = (ref: THREE.Mesh | null, i: number) => {
    if (ref) wheelsRef.current[i] = ref;
  };

  return (
    <group ref={groupRef} scale={0.7}>
      {/* ══════ BODY ══════ */}

      {/* Lower body — wide, flat base */}
      <mesh position={[0, 0.12, 0]} material={bodyMat}>
        <boxGeometry args={[2.0, 0.16, 0.9]} />
      </mesh>

      {/* Upper body — slightly narrower */}
      <mesh position={[0, 0.22, 0]} material={bodyMat}>
        <boxGeometry args={[1.85, 0.1, 0.86]} />
      </mesh>

      {/* Front nose — tapered wedge */}
      <mesh
        position={[0.85, 0.15, 0]}
        material={bodyMat}
        rotation={[0, 0, -0.12]}
      >
        <boxGeometry args={[0.45, 0.12, 0.84]} />
      </mesh>

      {/* Front nose tip — rounded */}
      <mesh position={[1.05, 0.1, 0]} material={bodyMat}>
        <sphereGeometry args={[0.12, 12, 8]} />
      </mesh>

      {/* Rear body */}
      <mesh
        position={[-0.7, 0.18, 0]}
        material={bodyMat}
        rotation={[0, 0, 0.06]}
      >
        <boxGeometry args={[0.65, 0.14, 0.86]} />
      </mesh>

      {/* Rear end — flat */}
      <mesh position={[-1.0, 0.16, 0]} material={carbonMat}>
        <boxGeometry args={[0.06, 0.18, 0.84]} />
      </mesh>

      {/* ══════ CABIN ══════ */}
      {/* Roof */}
      <mesh position={[-0.05, 0.38, 0]} material={carbonMat}>
        <boxGeometry args={[0.65, 0.06, 0.72]} />
      </mesh>

      {/* Windshield — angled */}
      <mesh
        position={[0.28, 0.33, 0]}
        material={glassMat}
        rotation={[0, 0, 0.6]}
      >
        <boxGeometry args={[0.26, 0.02, 0.72]} />
      </mesh>

      {/* Rear window */}
      <mesh
        position={[-0.35, 0.33, 0]}
        material={glassMat}
        rotation={[0, 0, -0.5]}
      >
        <boxGeometry args={[0.2, 0.02, 0.72]} />
      </mesh>

      {/* Side windows L */}
      <mesh position={[-0.05, 0.33, 0.37]} material={glassMat}>
        <boxGeometry args={[0.55, 0.1, 0.015]} />
      </mesh>
      {/* Side windows R */}
      <mesh position={[-0.05, 0.33, -0.37]} material={glassMat}>
        <boxGeometry args={[0.55, 0.1, 0.015]} />
      </mesh>

      {/* ══════ AERO — Spoiler ══════ */}
      <mesh position={[-0.9, 0.38, 0]} material={carbonMat}>
        <boxGeometry args={[0.18, 0.015, 0.9]} />
      </mesh>
      <mesh position={[-0.9, 0.32, 0.32]} material={carbonMat}>
        <boxGeometry args={[0.035, 0.12, 0.025]} />
      </mesh>
      <mesh position={[-0.9, 0.32, -0.32]} material={carbonMat}>
        <boxGeometry args={[0.035, 0.12, 0.025]} />
      </mesh>

      {/* Front splitter */}
      <mesh position={[1.0, 0.04, 0]} material={accentMat}>
        <boxGeometry args={[0.12, 0.015, 0.88]} />
      </mesh>

      {/* Rear diffuser */}
      <mesh position={[-1.0, 0.04, 0]} material={accentMat}>
        <boxGeometry args={[0.06, 0.015, 0.7]} />
      </mesh>

      {/* Side skirts — accent green */}
      <mesh position={[0, 0.04, 0.45]} material={accentMat}>
        <boxGeometry args={[1.7, 0.012, 0.015]} />
      </mesh>
      <mesh position={[0, 0.04, -0.45]} material={accentMat}>
        <boxGeometry args={[1.7, 0.012, 0.015]} />
      </mesh>

      {/* ══════ HEADLIGHTS ══════ */}
      <mesh position={[1.04, 0.18, 0.3]} material={headlightMat}>
        <boxGeometry args={[0.025, 0.035, 0.14]} />
      </mesh>
      <mesh position={[1.04, 0.18, -0.3]} material={headlightMat}>
        <boxGeometry args={[0.025, 0.035, 0.14]} />
      </mesh>
      {/* Headlight glow helpers */}
      <pointLight position={[1.2, 0.18, 0.3]} intensity={0.3} color="#ffffff" distance={2} />
      <pointLight position={[1.2, 0.18, -0.3]} intensity={0.3} color="#ffffff" distance={2} />

      {/* ══════ TAILLIGHTS ══════ */}
      <mesh position={[-1.02, 0.18, 0.3]} material={taillightMat}>
        <boxGeometry args={[0.02, 0.035, 0.16]} />
      </mesh>
      <mesh position={[-1.02, 0.18, -0.3]} material={taillightMat}>
        <boxGeometry args={[0.02, 0.035, 0.16]} />
      </mesh>
      {/* Connecting light bar */}
      <mesh position={[-1.02, 0.18, 0]} material={taillightMat}>
        <boxGeometry args={[0.015, 0.012, 0.55]} />
      </mesh>
      {/* Taillight glow */}
      <pointLight position={[-1.15, 0.18, 0]} intensity={0.3} color="#ff2020" distance={2} />

      {/* ══════ UNDERGLOW ══════ */}
      <mesh position={[0, -0.01, 0]} material={underglowMat}>
        <boxGeometry args={[1.8, 0.004, 0.65]} />
      </mesh>
      <pointLight position={[0, -0.05, 0]} intensity={0.4} color="#c8fa5f" distance={1.5} />

      {/* ══════ WHEELS ══════ */}
      {[
        { x: 0.6, z: 0.5, r: 0.1, w: 0.06 },
        { x: 0.6, z: -0.5, r: 0.1, w: 0.06 },
        { x: -0.6, z: 0.5, r: 0.11, w: 0.07 },
        { x: -0.6, z: -0.5, r: 0.11, w: 0.07 },
      ].map((wh, i) => (
        <group key={i} position={[wh.x, 0.02, wh.z]}>
          {/* Tire */}
          <mesh
            ref={(r) => setWheel(r, i)}
            rotation={[Math.PI / 2, 0, 0]}
            material={tireMat}
          >
            <torusGeometry args={[wh.r, 0.03, 8, 20]} />
          </mesh>
          {/* Rim */}
          <mesh rotation={[Math.PI / 2, 0, 0]} material={rimMat}>
            <cylinderGeometry args={[wh.r - 0.015, wh.r - 0.015, wh.w, 12]} />
          </mesh>
          {/* Hub cap */}
          <mesh rotation={[Math.PI / 2, 0, 0]} material={accentMat}>
            <cylinderGeometry args={[0.02, 0.02, wh.w + 0.01, 8]} />
          </mesh>
        </group>
      ))}

      {/* ══════ EXHAUST ══════ */}
      <mesh position={[-1.04, 0.06, 0.18]} rotation={[0, 0, Math.PI / 2]} material={rimMat}>
        <cylinderGeometry args={[0.022, 0.028, 0.05, 10]} />
      </mesh>
      <mesh position={[-1.04, 0.06, -0.18]} rotation={[0, 0, Math.PI / 2]} material={rimMat}>
        <cylinderGeometry args={[0.022, 0.028, 0.05, 10]} />
      </mesh>

      {/* ══════ FRONT GRILLE ══════ */}
      <mesh position={[1.04, 0.1, 0]} material={accentMat}>
        <boxGeometry args={[0.015, 0.05, 0.4]} />
      </mesh>

      {/* ══════ SIDE VENTS ══════ */}
      <mesh position={[0.3, 0.16, 0.455]} material={carbonMat}>
        <boxGeometry args={[0.15, 0.04, 0.008]} />
      </mesh>
      <mesh position={[0.3, 0.16, -0.455]} material={carbonMat}>
        <boxGeometry args={[0.15, 0.04, 0.008]} />
      </mesh>

      {/* ══════ MIRRORS ══════ */}
      <mesh position={[0.2, 0.29, 0.42]} material={carbonMat}>
        <boxGeometry args={[0.05, 0.025, 0.03]} />
      </mesh>
      <mesh position={[0.2, 0.29, -0.42]} material={carbonMat}>
        <boxGeometry args={[0.05, 0.025, 0.03]} />
      </mesh>
    </group>
  );
}

/* ── Wireframe Cage ── */
function WireframeCage() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const mat = useMemo(
    () =>
      new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: 0 },
          uMouseX: { value: 0 },
          uMouseY: { value: 0 },
          uColor: { value: new THREE.Vector4(0.784, 0.98, 0.373, 0.25) },
        },
        vertexShader: `
      uniform float uTime; uniform float uMouseX; uniform float uMouseY;
      void main() {
        vec3 pos = position;
        float d = sin(pos.x*2.0+uTime*0.5)*cos(pos.y*2.0+uTime*0.3)*sin(pos.z*2.0+uTime*0.4)*0.12;
        d += sin(pos.x*3.0+uMouseX*2.0)*cos(pos.y*3.0+uMouseY*2.0)*0.06;
        pos += normal * d;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.0);
      }`,
        fragmentShader: `
      uniform vec4 uColor;
      void main() { gl_FragColor = uColor; }`,
        wireframe: true,
        transparent: true,
      }),
    []
  );

  useFrame((state) => {
    if (!meshRef.current) return;
    mat.uniforms.uTime.value = state.clock.getElapsedTime();
    const { pointer } = state;
    mouseRef.current.x += (pointer.x - mouseRef.current.x) * 0.05;
    mouseRef.current.y += (pointer.y - mouseRef.current.y) * 0.05;
    mat.uniforms.uMouseX.value = mouseRef.current.x;
    mat.uniforms.uMouseY.value = mouseRef.current.y;
    meshRef.current.rotation.y += 0.0006;
    meshRef.current.rotation.x = Math.PI * 0.02 + mouseRef.current.y * 0.06;

    // Theme-aware color
    const isLight = document.documentElement.classList.contains("light");
    if (isLight) {
      mat.uniforms.uColor.value.set(0.1, 0.36, 0.16, 0.4); // dark green for light bg
    } else {
      mat.uniforms.uColor.value.set(0.784, 0.98, 0.373, 0.25); // bright green for dark bg
    }
  });

  return (
    <mesh ref={meshRef} material={mat}>
      <icosahedronGeometry args={[2.2, 4]} />
    </mesh>
  );
}

/* ── Particles ── */
function Particles() {
  const ref = useRef<THREE.Points>(null);
  const pos = useMemo(() => {
    const p = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      p[i * 3] = (Math.random() - 0.5) * 7;
      p[i * 3 + 1] = (Math.random() - 0.5) * 7;
      p[i * 3 + 2] = (Math.random() - 0.5) * 7;
    }
    return p;
  }, []);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.getElapsedTime() * 0.012;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[pos, 3]} count={500} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.018} color="#ffffff" transparent opacity={0.3} sizeAttenuation />
    </points>
  );
}

/* ── Scene ── */
export default function HeroScene() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas
        camera={{ position: [0, 1.2, 4.5], fov: 40 }}
        dpr={[1, 2]}
        style={{ background: "transparent" }}
      >
        {/* Strong studio lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 6, 5]} intensity={2.5} color="#ffffff" />
        <directionalLight position={[-4, 3, 4]} intensity={1.2} color="#8899ff" />
        <directionalLight position={[0, -2, 3]} intensity={0.6} color="#c8fa5f" />
        <spotLight
          position={[0, 5, 2]}
          angle={0.6}
          penumbra={0.8}
          intensity={1.5}
          color="#ffffff"
        />
        {/* Fill from below for underglow visibility */}
        <pointLight position={[0, -1, 0]} intensity={0.5} color="#c8fa5f" distance={4} />

        <WireframeCage />
        <ModernCar />
        <Particles />
      </Canvas>
    </div>
  );
}
