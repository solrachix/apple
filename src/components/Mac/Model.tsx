/* eslint-disable camelcase */
import React, { useRef } from 'react'

import * as THREE from 'three'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const vec = new THREE.Vector3()

type GLTFResult = GLTF & {
  nodes: {
    Stand: THREE.Mesh
    Circle007: THREE.Mesh
    Circle007_1: THREE.Mesh
    Plane002: THREE.Mesh
    Plane002_1: THREE.Mesh
    Plane002_2: THREE.Mesh
    Plane002_3: THREE.Mesh
    Plane002_4: THREE.Mesh
    Plane002_5: THREE.Mesh
    Plane002_6: THREE.Mesh
    Plane002_7: THREE.Mesh
    Plane002_8: THREE.Mesh
    Plane002_9: THREE.Mesh
    Plane002_10: THREE.Mesh
  }
  materials: {
    LightBlue: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    Metal2: THREE.MeshStandardMaterial
    DarkBlue: THREE.MeshStandardMaterial
    Black: THREE.MeshStandardMaterial
    White: THREE.MeshStandardMaterial
    Screen: THREE.MeshStandardMaterial
    Chrome: THREE.MeshStandardMaterial
    ['Cam.Black']: THREE.MeshStandardMaterial
    Lens: THREE.MeshStandardMaterial
    Glass: THREE.MeshStandardMaterial
    ['Black.001']: THREE.MeshStandardMaterial
    Yellow: THREE.MeshStandardMaterial
  }
}

export default function Model({
  open,
  ...props
}: JSX.IntrinsicElements['group']): React.ReactElement {
  const group = useRef<THREE.Group>()
  const { nodes, materials } = useGLTF(
    '/images/3dObjects/iMac.glb'
  ) as GLTFResult

  useFrame(state => {
    const t = state.clock.getElapsedTime()
    state.camera.position.lerp(vec.set(2, 0, open ? 2.8 : 3), 0.1)
    state.camera.lookAt(0, 0.5, 0)
    // group.current.rotation.x = THREE.MathUtils.lerp(
    //   group.current.rotation.x,
    //   open ? Math.cos(t / 2) / 8 + 0.25 : 0,
    //   0.1
    // )
    // group.current.rotation.y = THREE.MathUtils.lerp(
    //   group.current.rotation.y,
    //   open ? Math.sin(t / 4) / 4 : 0,
    //   0.1
    // )
    // group.current.rotation.z = THREE.MathUtils.lerp(
    //   group.current.rotation.z,
    //   open ? Math.sin(t / 4) / 4 : 0,
    //   0.1
    // )
    // group.current.position.y = THREE.MathUtils.lerp(
    //   group.current.position.y,
    //   open ? (-2 + Math.sin(t)) / 3 : -4.3,
    //   0.1
    // )
  })

  // The view was auto-generated by: https://github.com/pmndrs/gltfjsx
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stand.geometry}
        material={nodes.Stand.material}
        material-color="#121214"
      >
        <group position={[0.03, 0.39, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle007.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle007_1.geometry}
            material={materials.Metal2}
          />
          <group position={[-0.03, -0.39, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane002.geometry}
              material={materials.DarkBlue}
              material-color="#1C2028"
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane002_1.geometry}
              material={nodes.Plane002_1.material}
              material-color="#1C2028"
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane002_2.geometry}
              material={materials.Black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane002_3.geometry}
              material={materials.White}
              material-color="#121214"
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane002_4.geometry}
              material={materials.Screen}
              material-color="#121214"
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane002_5.geometry}
              material={materials.Chrome}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane002_6.geometry}
              material={materials['Cam.Black']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane002_7.geometry}
              material={materials.Lens}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane002_8.geometry}
              material={materials.Glass}
              material-color="#1C2028"
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane002_9.geometry}
              material={materials['Black.001']}
              material-color="#1C2028"
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Plane002_10.geometry}
              material={materials.Yellow}
              material-color="#1C2028"
            />
          </group>
        </group>
      </mesh>
    </group>
  )
}

useGLTF.preload('/images/3dObjects/iMac.glb')
