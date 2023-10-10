import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Human(props) {
  const { nodes, materials } = useGLTF('./models/human.gltf');
  
  const modelScale = 0.5;

  return (
    <group {...props} dispose={null} scale={[modelScale, modelScale, modelScale]}>
      {/* Using the materials from the GLTF file for each mesh */}
      {Object.keys(nodes).map((nodeName) => (
        <mesh 
          key={nodeName} 
          geometry={nodes[nodeName].geometry} 
          material={materials[nodeName]} 
        />
      ))}
    </group>
  )
}

useGLTF.preload('./models/human.gltf')
