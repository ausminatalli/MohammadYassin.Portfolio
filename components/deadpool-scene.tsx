"use client";

import { Suspense, useLayoutEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";
import * as THREE from "three";

function Deadpool() {
  const gltf = useLoader(GLTFLoader, "/design/deadpool.glb");
  const model = useMemo(() => clone(gltf.scene), [gltf.scene]);
  const group = useRef<THREE.Group>(null);
  const animatedBones = useRef<{
    head?: THREE.Bone;
    chest?: THREE.Bone;
    leftHand?: THREE.Bone;
    leftKnee?: THREE.Bone;
    rightKnee?: THREE.Bone;
  }>({});
  const baseRotations = useRef<{
    headY: number;
    chestZ: number;
    leftHandZ: number;
    leftKneeZ: number;
    rightKneeZ: number;
  }>({ headY: 0, chestZ: 0, leftHandZ: 0, leftKneeZ: 0, rightKneeZ: 0 });
  const { pointer } = useThree();
  const baseRotation = -Math.PI / 2;

  useMemo(() => {
    model.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;
      child.castShadow = true;
      child.receiveShadow = true;
      const materials = Array.isArray(child.material)
        ? child.material
        : [child.material];
      materials.forEach((material) => {
        if (material instanceof THREE.MeshStandardMaterial) {
          material.roughness = Math.min(material.roughness, 0.7);
          material.envMapIntensity = 1.15;
        }
      });
    });
  }, [model]);

  useLayoutEffect(() => {
    const rotateBone = (name: string, x: number, y: number, z: number) => {
      const bone = model.getObjectByName(name);
      if (!(bone instanceof THREE.Bone)) return undefined;
      bone.rotation.x += x;
      bone.rotation.y += y;
      bone.rotation.z += z;
      return bone;
    };

    const moveEndEffectorTo = (
      joints: THREE.Bone[],
      endEffector: THREE.Bone,
      target: THREE.Vector3
    ) => {
      const jointPosition = new THREE.Vector3();
      const endPosition = new THREE.Vector3();
      const parentRotation = new THREE.Quaternion();
      const jointRotation = new THREE.Quaternion();
      const correction = new THREE.Quaternion();

      // A short CCD pass keeps the wrist planted on the chin even when the
      // source model's original arm orientation differs from the preview pose.
      for (let pass = 0; pass < 12; pass += 1) {
        joints.forEach((joint) => {
          joint.getWorldPosition(jointPosition);
          endEffector.getWorldPosition(endPosition);

          const towardHand = endPosition.clone().sub(jointPosition);
          const towardTarget = target.clone().sub(jointPosition);
          if (towardHand.lengthSq() < 0.000001 || towardTarget.lengthSq() < 0.000001) return;

          correction.setFromUnitVectors(towardHand.normalize(), towardTarget.normalize());
          joint.getWorldQuaternion(jointRotation);
          correction.multiply(jointRotation);

          if (joint.parent) {
            joint.parent.getWorldQuaternion(parentRotation);
            joint.quaternion.copy(parentRotation.invert().multiply(correction));
          } else {
            joint.quaternion.copy(correction);
          }
          model.updateMatrixWorld(true);
        });
      }
    };

    // A compact seated pose: knees over the lettering, torso leaning forward,
    // both arms shaped around a stable hip contact point on the central M.
    rotateBone("C_Spine00_Hips_XB_02", -0.18, 0, 0.06);
    rotateBone("C_Spine01_Lumbar01_XB_03", -0.2, 0.04, -0.04);
    const chest = rotateBone("C_Spine04_Thoracic02_XB_06", 0.16, -0.08, 0.08);
    const head = rotateBone("C_Spine08_Head_XB_09", -0.08, 0.18, -0.2);

    rotateBone("L_Arm01_Clav_XB_041", 0, 0, 0.12);
    const leftShoulder = rotateBone("L_Arm02_Shoulder_XB_042", -0.18, 0.12, 0.48);
    const leftElbow = rotateBone("L_Arm03_Elbow_XB_043", 0.08, -0.06, 1.5);
    const leftHand = rotateBone("L_Arm04_Hand_XB_044", 0.2, 0.05, -0.28);

    rotateBone("R_Arm01_Clav_XB_067", 0, 0, -0.08);
    rotateBone("R_Arm02_Shoulder_XB_068", 0.3, -0.08, -0.56);
    rotateBone("R_Arm03_Elbow_XB_069", -0.12, 0.16, 1.1);
    rotateBone("R_Arm04_Hand_XB_070", -0.1, 0.12, -0.22);

    rotateBone("L_Leg01_Thigh_XB_093", 0, 0, 1.02);
    const leftKnee = rotateBone("L_Leg02_Knee_XB_094", 0, 0, -1.28);
    rotateBone("L_Leg03_Ankle_XB_095", 0, 0, 0.22);
    rotateBone("R_Leg01_Thigh_XB_0100", 0, 0, -1.02);
    const rightKnee = rotateBone("R_Leg02_Knee_XB_0101", 0, 0, 1.28);
    rotateBone("R_Leg03_Ankle_XB_0102", 0, 0, -0.22);

    [
      "L_Finger02_Index01_XL_049",
      "L_Finger03_Middle01_XL_052",
      "L_Finger04_Ring01_XL_055",
      "L_Finger05_Pinky01_XL_058",
    ].forEach((name) => rotateBone(name, 0, 0, -0.72));
    [
      "L_Finger02_Index02_XL_050",
      "L_Finger03_Middle02_XL_053",
      "L_Finger04_Ring02_XL_056",
      "L_Finger05_Pinky02_XL_059",
    ].forEach((name) => rotateBone(name, 0, 0, -0.92));
    [
      "L_Finger02_Index03_XL_051",
      "L_Finger03_Middle03_XL_054",
      "L_Finger04_Ring03_XL_057",
      "L_Finger05_Pinky03_XL_060",
    ].forEach((name) => rotateBone(name, 0, 0, -0.58));
    rotateBone("L_Finger01_Thumb01_XL_046", 0, 0, -0.42);
    rotateBone("L_Finger01_Thumb02_XL_047", 0, 0, -0.58);
    rotateBone("L_Finger01_Thumb03_XL_048", 0, 0, -0.35);

    model.updateMatrixWorld(true);
    if (head && leftShoulder && leftElbow && leftHand) {
      const chinTarget = new THREE.Vector3();
      head.getWorldPosition(chinTarget);
      chinTarget.add(new THREE.Vector3(-0.02, 0.02, 0.08));
      moveEndEffectorTo([leftElbow, leftShoulder], leftHand, chinTarget);

      // Turn the glove inward and settle the mask into the palm.
      leftHand.rotateX(0.22);
      leftHand.rotateY(-0.12);
      leftHand.rotateZ(-0.12);
      head.rotateX(-0.04);
      head.rotateZ(-0.14);
    }

    animatedBones.current = { head, chest, leftHand, leftKnee, rightKnee };
    baseRotations.current = {
      headY: head?.rotation.y ?? 0,
      chestZ: chest?.rotation.z ?? 0,
      leftHandZ: leftHand?.rotation.z ?? 0,
      leftKneeZ: leftKnee?.rotation.z ?? 0,
      rightKneeZ: rightKnee?.rotation.z ?? 0,
    };
  }, [model]);

  useFrame((state, delta) => {
    if (!group.current) return;
    const elapsed = state.clock.getElapsedTime();
    // Keep the hips locked to the letter. Motion belongs in the spine/head,
    // never in the whole body, so the character reads as seated rather than floating.
    group.current.position.y = -1.46;
    group.current.rotation.y = THREE.MathUtils.damp(
      group.current.rotation.y,
      baseRotation + pointer.x * 0.06,
      3.2,
      delta
    );
    group.current.rotation.x = THREE.MathUtils.damp(
      group.current.rotation.x,
      pointer.y * 0.01,
      3.2,
      delta
    );
    group.current.rotation.z = 0;

    const { head, chest, leftHand, leftKnee, rightKnee } = animatedBones.current;
    if (head) head.rotation.y = baseRotations.current.headY + Math.sin(elapsed * 0.7) * 0.018;
    if (chest) chest.rotation.z = baseRotations.current.chestZ + Math.sin(elapsed * 0.72) * 0.025;
    if (leftHand) leftHand.rotation.z = baseRotations.current.leftHandZ + Math.sin(elapsed * 0.7) * 0.012;
    if (leftKnee) leftKnee.rotation.z = baseRotations.current.leftKneeZ + Math.sin(elapsed * 1.15) * 0.045;
    if (rightKnee) rightKnee.rotation.z = baseRotations.current.rightKneeZ + Math.sin(elapsed * 1.15 + 0.75) * 0.04;
  });

  return (
    <group
      ref={group}
      position={[0.02, -1.46, 0]}
      rotation={[0, baseRotation, 0]}
    >
      <primitive object={model} scale={0.014} />
    </group>
  );
}

function LoadingGlow() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.04);
    }
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.62, 24, 24]} />
      <meshBasicMaterial color="#34dfff" transparent opacity={0.1} />
    </mesh>
  );
}

export default function DeadpoolScene() {
  return (
    <Canvas
      camera={{ position: [0, 0.05, 5.04], fov: 31 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={2.15} />
      <directionalLight position={[4, 6, 5]} intensity={4.8} color="#ffffff" />
      <directionalLight position={[-4, 3, 4]} intensity={3.2} color="#32d9ff" />
      <pointLight position={[1.2, -0.5, 2.5]} intensity={3.4} color="#ff3b64" />
      <spotLight
        position={[0, 5, 3]}
        angle={0.55}
        penumbra={0.9}
        intensity={3}
        color="#ffffff"
      />
      <Suspense fallback={<LoadingGlow />}>
        <Deadpool />
      </Suspense>
    </Canvas>
  );
}
