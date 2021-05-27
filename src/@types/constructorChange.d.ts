import * as React from 'react'
import { GroupProps } from '@react-three/fiber'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: Object3DNode<React.HTMLAttributes<GroupProps>, typeof GroupProps>
    }
  }
}
