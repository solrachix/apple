import React, { useRef } from 'react'

import * as THREE from 'three'
import { GroupProps, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
// import { a as three } from '@react-spring/three'

const vec = new THREE.Vector3()

export default function Model({ open, ...props }): React.ReactElement {
  const group = useRef<GroupProps>()
  const { nodes, materials } = useGLTF('/images/3dObjects/iPhone12Pro.glb')

  // Make it float in the air when it's opened
  useFrame(state => {
    const t = state.clock.getElapsedTime()
    state.camera.position.lerp(vec.set(0, 0, 2), 0.1)
    state.camera.lookAt(0, 0, 0)

    // rotations
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      open ? Math.cos(t / 2) / 8 + 2 : 1.5,
      0.1
    )

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 4) / 60,
      0.1
    )
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      open ? Math.sin(t / 4) / 20 : 3,
      0.1
    )

    // positions
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-1 + Math.sin(t)) / 6,
      0.1
    )
  })

  // The view was auto-generated by: https://github.com/pmndrs/gltfjsx
  // Events and spring animations were added afterwards
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.iPhone12_Pro.geometry}
        material={materials.Body}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AppleLogo.geometry}
          material={nodes.AppleLogo.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bezel.geometry}
          material={materials.bezel}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere002.geometry}
            material={nodes.Sphere002.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_1.geometry}
            material={nodes.Sphere002_1.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere.geometry}
            material={nodes.Sphere.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sphere_1.geometry}
            material={nodes.Sphere_1.material}
          />
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MuteButton.geometry}
          material={nodes.MuteButton.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle004.geometry}
          material={nodes.Circle004.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle004_1.geometry}
          material={nodes.Circle004_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.PowerButton.geometry}
          material={nodes.PowerButton.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.SimTray.geometry}
          material={nodes.SimTray.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.VolumeButton.geometry}
          material={nodes.VolumeButton.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={nodes.Plane001.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={nodes.Plane001_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={nodes.Plane001_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_3.geometry}
          material={materials.Antenna}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={nodes.Plane003.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_1.geometry}
          material={nodes.Plane003_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.LiDar.geometry}
          material={materials['LiDar ']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle008.geometry}
          material={nodes.Circle008.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle008_1.geometry}
          material={materials.Flash}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle008_2.geometry}
          material={nodes.Circle008_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle.geometry}
          material={nodes.Circle.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_1.geometry}
          material={nodes.Circle_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_2.geometry}
          material={nodes.Circle_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_3.geometry}
          material={nodes.Circle_3.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_4.geometry}
          material={nodes.Circle_4.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_5.geometry}
          material={nodes.Circle_5.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005.geometry}
          material={nodes.Circle005.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005_1.geometry}
          material={nodes.Circle005_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005_2.geometry}
          material={nodes.Circle005_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005_3.geometry}
          material={nodes.Circle005_3.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005_4.geometry}
          material={nodes.Circle005_4.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle005_5.geometry}
          material={nodes.Circle005_5.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003.geometry}
          material={nodes.Circle003.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003_1.geometry}
          material={nodes.Circle003_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003_2.geometry}
          material={nodes.Circle003_2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003_3.geometry}
          material={nodes.Circle003_3.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003_4.geometry}
          material={nodes.Circle003_4.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle003_5.geometry}
          material={nodes.Circle003_5.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Screen.geometry}
          material={materials.Wallpaper}
        />
      </mesh>
    </group>
  )
}

useGLTF.preload('/images/3dObjects/iPhone12Pro.glb')
