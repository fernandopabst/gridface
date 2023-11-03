import React, { useRef } from 'react'
import { useGLTF, Edges, TransformControls, PivotControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export function Model({ transform, rotate, meshes, onHover, ...props }) {
  const { meshRef1, meshRef2, meshRef3, meshRef4, meshRef5, meshRef6, meshRef7, meshRef8, meshRef9, meshRef10, meshRef11, meshRef12, meshRef13, meshRef14, meshRef15, meshRef16, meshRef17, meshRef18, meshRef19, meshRef20, meshRef21, meshRef22, meshRef23, meshRef24, meshRef25, meshRef26, meshRef27 } = meshes
  const ref = useRef()
  const { nodes, materials } = useGLTF('/facebox6-v1.glb')
  useFrame(({ clock }, delta) => {
    ref.current.rotation.y += delta / rotate
  })
  return (
    <>
      {transform && <TransformControls object={ref} mode="translate" />}
      <group position={[0, 1, 0]} {...props} dispose={null}>
        <group scale={0.01} ref={ref}>
          <group position={[2.872, -40.93, 0.685]} rotation={[-0.03, 0.01, -0.008]} scale={[201.47, 169.597, 106.058]}>
            <mesh ref={meshRef1} onPointerOver={(e) => onHover(meshRef1)} castShadow receiveShadow geometry={nodes.bottom.geometry} material={nodes.bottom.material} rotation={[-0.007, 0.001, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[9.137, 136.709, -16.636]} rotation={[-0.029, 0.01, -0.008]} scale={[231.83, 178.905, 120.77]}>
            <mesh ref={meshRef2} onPointerOver={(e) => onHover(meshRef2)} castShadow receiveShadow geometry={nodes.top_split_6.geometry} material={nodes.top_split_6.material} rotation={[-0.008, 0.001, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[9.137, 136.709, -16.636]} rotation={[-0.029, 0.01, -0.008]} scale={[231.83, 178.905, 120.77]}>
            <mesh ref={meshRef3} onPointerOver={(e) => onHover(meshRef3)} castShadow receiveShadow geometry={nodes.top_split_5.geometry} material={nodes.top_split_5.material} rotation={[-0.008, 0.001, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[9.137, 136.709, -16.636]} rotation={[-0.029, 0.01, -0.008]} scale={[231.83, 178.905, 120.77]}>
            <mesh ref={meshRef4} onPointerOver={(e) => onHover(meshRef4)} castShadow receiveShadow geometry={nodes.top_split_4.geometry} material={nodes.top_split_4.material} rotation={[-0.008, 0.001, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[9.137, 136.709, -16.636]} rotation={[-0.029, 0.01, -0.008]} scale={[231.83, 178.905, 120.77]}>
            <mesh ref={meshRef5} onPointerOver={(e) => onHover(meshRef5)} castShadow receiveShadow geometry={nodes.top_split_3.geometry} material={nodes.top_split_3.material} rotation={[-0.008, 0.001, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[9.137, 136.709, -16.636]} rotation={[-0.029, 0.01, -0.008]} scale={[231.83, 178.905, 120.77]}>
            <mesh ref={meshRef6} onPointerOver={(e) => onHover(meshRef6)} castShadow receiveShadow geometry={nodes.top_split_2.geometry} material={nodes.top_split_2.material} rotation={[-0.008, 0.001, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[9.224, 136.495, -9.285]} rotation={[-0.029, 0.01, -0.008]} scale={[231.83, 178.905, 120.77]}>
            <mesh ref={meshRef7} onPointerOver={(e) => onHover(meshRef7)} castShadow receiveShadow geometry={nodes.top_split_1.geometry} material={nodes.top_split_1.material} rotation={[-0.008, 0.001, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[9.206, 134.176, -11.962]} rotation={[-0.029, 0.01, -0.008]} scale={[231.83, 178.905, 120.77]}>
            <mesh ref={meshRef8} onPointerOver={(e) => onHover(meshRef8)} castShadow receiveShadow geometry={nodes.top_split_21.geometry} material={nodes.top_split_21.material} rotation={[-0.008, 0.001, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[9.223, 136.38, -12.038]} rotation={[-0.029, 0.01, -0.008]} scale={[231.83, 178.905, 120.77]}>
            <mesh ref={meshRef9} onPointerOver={(e) => onHover(meshRef9)} castShadow receiveShadow geometry={nodes.top_split_18.geometry} material={nodes.top_split_18.material} rotation={[-0.008, 0.001, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[9.253, 140.169, -9.413]} rotation={[-0.029, 0.01, -0.008]} scale={[231.83, 178.905, 120.77]}>
            <mesh ref={meshRef10} onPointerOver={(e) => onHover(meshRef10)} castShadow receiveShadow geometry={nodes.top_split_15.geometry} material={nodes.top_split_15.material} rotation={[-0.008, 0.001, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[9.228, 137.014, -9.303]} rotation={[-0.029, 0.01, -0.008]} scale={[231.83, 178.905, 120.77]}>
            <mesh ref={meshRef11} onPointerOver={(e) => onHover(meshRef11)} castShadow receiveShadow geometry={nodes.top_split_9.geometry} material={nodes.top_split_9.material} rotation={[-0.008, 0.001, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[9.228, 137.014, -9.303]} rotation={[-0.029, 0.01, -0.008]} scale={[231.83, 178.905, 120.77]}>
            <mesh ref={meshRef12} onPointerOver={(e) => onHover(meshRef12)} castShadow receiveShadow geometry={nodes.top_split_8.geometry} material={nodes.top_split_8.material} rotation={[-0.008, 0.001, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[9.257, 140.717, -9.432]} rotation={[-0.029, 0.01, -0.008]} scale={[231.83, 178.905, 120.77]}>
            <mesh ref={meshRef13} onPointerOver={(e) => onHover(meshRef13)} castShadow receiveShadow geometry={nodes.top_split_7.geometry} material={nodes.top_split_7.material} rotation={[-0.008, 0.001, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[9.258, 140.787, -12.192]} rotation={[-0.029, 0.01, -0.008]} scale={[231.83, 178.905, 120.77]}>
            <mesh ref={meshRef14} onPointerOver={(e) => onHover(meshRef14)} castShadow receiveShadow geometry={nodes.top_split_20.geometry} material={nodes.top_split_20.material} rotation={[-0.008, 0.001, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[9.223, 136.341, -12.037]} rotation={[-0.029, 0.01, -0.008]} scale={[231.83, 178.905, 120.77]}>
            <mesh ref={meshRef15} onPointerOver={(e) => onHover(meshRef15)} castShadow receiveShadow geometry={nodes.top_split_17.geometry} material={nodes.top_split_17.material} rotation={[-0.008, 0.001, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[9.223, 136.341, -9.279]} rotation={[-0.029, 0.01, -0.008]} scale={[231.83, 178.905, 120.77]}>
            <mesh ref={meshRef16} onPointerOver={(e) => onHover(meshRef16)} castShadow receiveShadow geometry={nodes.top_split_14.geometry} material={nodes.top_split_14.material} rotation={[-0.008, 0.001, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[9.244, 139.016, -9.373]} rotation={[-0.029, 0.01, -0.008]} scale={[231.83, 178.905, 120.77]}>
            <mesh ref={meshRef17} onPointerOver={(e) => onHover(meshRef17)} castShadow receiveShadow geometry={nodes.top_split_10.geometry} material={nodes.top_split_10.material} rotation={[-0.008, 0.001, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[9.255, 140.431, -12.18]} rotation={[-0.029, 0.01, -0.008]} scale={[231.83, 178.905, 120.77]}>
            <mesh ref={meshRef18} onPointerOver={(e) => onHover(meshRef18)} castShadow receiveShadow geometry={nodes.top_split_19.geometry} material={nodes.top_split_19.material} rotation={[-0.008, 0.001, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[9.223, 136.325, -12.037]} rotation={[-0.029, 0.01, -0.008]} scale={[231.83, 178.905, 120.77]}>
            <mesh ref={meshRef19} onPointerOver={(e) => onHover(meshRef19)} castShadow receiveShadow geometry={nodes.top_split_16.geometry} material={nodes.top_split_16.material} rotation={[-0.008, 0.001, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[9.246, 139.207, -9.379]} rotation={[-0.029, 0.01, -0.008]} scale={[231.83, 178.905, 120.77]}>
            <mesh ref={meshRef20} onPointerOver={(e) => onHover(meshRef20)} castShadow receiveShadow geometry={nodes.top_split_13.geometry} material={nodes.top_split_13.material} rotation={[-0.008, 0.001, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[9.227, 136.886, -9.298]} rotation={[-0.029, 0.01, -0.008]} scale={[231.83, 178.905, 120.77]}>
            <mesh ref={meshRef21} onPointerOver={(e) => onHover(meshRef21)} castShadow receiveShadow geometry={nodes.top_split_11.geometry} material={nodes.top_split_11.material} rotation={[-0.008, 0.001, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[9.227, 136.919, -12.057]} rotation={[-0.029, 0.01, -0.008]} scale={[231.83, 178.905, 120.77]}>
            <mesh ref={meshRef22} onPointerOver={(e) => onHover(meshRef22)} castShadow receiveShadow geometry={nodes.top_split_12.geometry} material={nodes.top_split_12.material} rotation={[-0.008, 0.001, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[9.204, 134.034, -9.199]} rotation={[-0.029, 0.01, -0.008]} scale={[231.83, 178.905, 120.77]}>
            <mesh ref={meshRef23} onPointerOver={(e) => onHover(meshRef23)} castShadow receiveShadow geometry={nodes.top_split.geometry} material={nodes.top_split.material} rotation={[-0.008, 0.001, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[5.978, 49.244, -68.626]} rotation={[3.122, -0.003, 0.003]} scale={[198.449, 184.195, 101.039]}>
            <mesh ref={meshRef24} onPointerOver={(e) => onHover(meshRef24)} castShadow receiveShadow geometry={nodes.starryback.geometry} material={nodes.starryback.material} rotation={[-1.574, 0, 0]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[5.75, 52.728, 74.995]} rotation={[-0.019, 0.033, 3.141]} scale={[198.427, 184.196, 101.05]}>
            <mesh ref={meshRef25} onPointerOver={(e) => onHover(meshRef25)} castShadow receiveShadow geometry={nodes.starryfront.geometry} material={nodes.starryfront.material} rotation={[-1.568, -0.001, -0.005]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[-91.486, 51.563, 5.262]} rotation={[2.565, -1.547, 1.007]} scale={[182.156, 149.753, 100.694]}>
            <mesh ref={meshRef26} onPointerOver={(e) => onHover(meshRef26)} castShadow receiveShadow geometry={nodes.headback.geometry} material={nodes.headback.material} rotation={[-1.577, 1.56, 0.003]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[98.874, 54.03, 9.527]} rotation={[-2.879, 1.527, 1.294]} scale={[182.156, 149.768, 100.684]}>
            <mesh ref={meshRef27} onPointerOver={(e) => onHover(meshRef27)} castShadow receiveShadow geometry={nodes.headbackfront.geometry} material={nodes.headbackfront.material} rotation={[1.584, 1.56, 3.136]}>
              <Edges
                scale={1.1}
                threshold={15} // Display edges only when the angle between two faces exceeds this value (default=15 degrees)
                color="white"
              />
            </mesh>
          </group>
          <group position={[6.937, -3.124, 0.124]} rotation={[1.619, 0.073, 1.568]} scale={[50.758, 47.408, 39.872]}>
            <group rotation={[0.008, 1.506, -1.588]}>
              <group position={[0.052, 0.045, 0.139]} rotation={[0.571, 1.499, 1.519]} scale={[1.053, 1.01, 0.961]}>
                <mesh castShadow receiveShadow geometry={nodes.leftearlobe.geometry} material={nodes.leftearlobe.material} rotation={[-1.523, 0.608, -1.552]}></mesh>
              </group>
              <group position={[0.278, -0.093, 0.096]} rotation={[-2.083, 0.309, -1.539]} scale={[1.227, 1.092, 1.084]}>
                <mesh castShadow receiveShadow geometry={nodes.lefteye.geometry} material={nodes.lefteye.material} rotation={[-2.794, 1.052, -1.619]} />
              </group>
              <group position={[0.255, -0.083, 0.257]} rotation={[-1.972, -0.132, -1.645]} scale={[1.221, 1.107, 1.089]}>
                <mesh castShadow receiveShadow geometry={nodes.righteye.geometry} material={nodes.righteye.material} rotation={[2.817, 1.256, -1.453]} />
              </group>
              <group position={[0.39, -0.212, -0.054]} rotation={[1.012, -0.002, 1.719]} scale={[1.341, 1.331, 1.186]}>
                <mesh castShadow receiveShadow geometry={nodes.rightiris.geometry} material={nodes.rightiris.material} rotation={[0.273, 1.02, -1.949]} />
              </group>
              <group position={[0.474, -0.541, -0.108]} rotation={[0.333, -0.068, 1.623]} scale={[1.584, 1.33, 1.004]}>
                <mesh castShadow receiveShadow geometry={nodes.leftiris.geometry} material={nodes.leftiris.material} rotation={[-0.038, 1.092, -1.619]} />
              </group>
            </group>
          </group>
        </group>
        <pointLight intensity={1.1} angle={1.029} penumbra={0.5} decay={5} color="pink" position={[-10.432, 3.196, 0.607]} rotation={[-1.351, 0.352, 0.283]} />
        <spotLight intensity={0.3} angle={1.029} penumbra={0.5} decay={5} color="blue" position={[-10.432, 13.196, 0.607]} rotation={[-1.351, 0.352, 0.283]} />
      </group>
    </>
  )
}

useGLTF.preload('/facebox6-v1.glb')
