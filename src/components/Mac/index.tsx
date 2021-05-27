import React, { ReactElement, Suspense, useState } from "react";

import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import { useSpring } from "@react-spring/core";

import Model from "./Model";
import { Container } from "./styles";

export default function Mac(): ReactElement {
  const [open, setOpen] = useState(false);
  // We turn this into a spring animation that interpolates between 0 and 1
  const props = useSpring({ open: Number(open) });

  return (
    <Container
    // style={{
    //   background: props.open.to([0, 1], ["transparent", "#d25578"])
    // }}
    >
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 0], fov: 35 }}>
        <Suspense fallback={null}>
          <mesh
            rotation={[0, Math.PI, 0]}
            onPointerOver={(e) => setOpen(true)}
            onPointerOut={(e) => setOpen(false)}
            // onClick={(e) => {
            //   e.stopPropagation();
            //   setOpen(!open);
            // }}
          >
            <Model open={open} hinge={props.open.to([0, 1], [1.575, -0.425])} />
          </mesh>
          <Environment preset="city" />
        </Suspense>
        <ContactShadows
          rotation-x={Math.PI / 2}
          position={[0, -4.5, 0]}
          opacity={0.4}
          width={20}
          height={20}
          blur={2}
          far={4.5}
        />
      </Canvas>
    </Container>
  );
}
