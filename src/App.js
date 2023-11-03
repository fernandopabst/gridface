import { Canvas, Suspense } from '@react-three/fiber'
import * as THREE from 'three'
import { Loader, Grid, OrbitControls, Environment, ContactShadows } from '@react-three/drei'
import { Model as Face } from './NewFace.jsx'
import { useControls, Leva } from 'leva'
import { useRef, useState } from 'react'
import { EffectComposer, BrightnessContrast, SelectiveBloom, TiltShift2, Noise, ToneMapping, Vignette, HueSaturation } from '@react-three/postprocessing'
import { LayerMaterial, Fresnel, Base, Depth, Noise as Noise2 } from 'lamina'

export default function App() {
  const meshRef1 = useRef()
  const meshRef2 = useRef()
  const meshRef3 = useRef()
  const meshRef4 = useRef()
  const meshRef5 = useRef()
  const meshRef6 = useRef()
  const meshRef7 = useRef()
  const meshRef8 = useRef()
  const meshRef9 = useRef()
  const meshRef10 = useRef()
  const meshRef11 = useRef()
  const meshRef12 = useRef()
  const meshRef13 = useRef()
  const meshRef14 = useRef()
  const meshRef15 = useRef()
  const meshRef16 = useRef()
  const meshRef17 = useRef()
  const meshRef18 = useRef()
  const meshRef19 = useRef()
  const meshRef20 = useRef()
  const meshRef21 = useRef()
  const meshRef22 = useRef()
  const meshRef23 = useRef()
  const meshRef24 = useRef()
  const meshRef25 = useRef()
  const meshRef26 = useRef()
  const meshRef27 = useRef()
  const meshes = { meshRef1, meshRef2, meshRef3, meshRef4, meshRef5, meshRef6, meshRef7, meshRef8, meshRef9, meshRef10, meshRef11, meshRef12, meshRef13, meshRef14, meshRef15, meshRef16, meshRef17, meshRef18, meshRef19, meshRef20, meshRef21, meshRef22, meshRef23, meshRef24, meshRef25, meshRef26, meshRef27 }
  const [hovered, onHover] = useState(null)
  const selected = hovered ? [hovered] : undefined
  const lightRef1 = useRef()
  const { transform, rotate, bloom, blur, saturation, noise, brightness, contrast, ...gridConfig } = useControls({
    brightness: { value: -0.2, min: -1, max: 2, step: 0.025 },
    contrast: { value: 0.1, min: -1, max: 2, step: 0.025 },
    noise: { value: 0.12, min: 0, max: 1, step: 0.025 },
    blur: { value: 0.45, min: 0, max: 1, step: 0.025 },
    bloom: { value: 3, min: 0, max: 10, step: 0.5 },
    saturation: { value: 0.3, min: 0, max: 1, step: 0.025 },
    cellSize: { value: 0.3, min: 0, max: 10, step: 0.1 },
    cellThickness: { value: 1, min: 0, max: 5, step: 0.1 },
    cellColor: '#5588a7',
    sectionSize: { value: 3.3, min: 0, max: 10, step: 0.1 },
    sectionThickness: { value: 1.5, min: 0, max: 5, step: 0.1 },
    sectionColor: '#ffffff',
    fadeDistance: { value: 37, min: 0, max: 100, step: 1 },
    fadeStrength: { value: 1, min: 0, max: 1, step: 0.1 },
    infiniteGrid: true,
    rotate: { value: 10.35, min: 0.5, max: 20, step: 0.5 },
    transform: false
  })
  return (
    <>
      <Loader />
      <Canvas shadows camera={{ position: [2.5, 3, -5], fov: 75, near: 0.1, far: 1000 }}>
        <Face transform={transform} rotate={rotate} meshes={meshes} onHover={onHover} /> {/* <ambientLight intensity={0.051}/> */}
        <spotLight ref={lightRef1} intensity={0.8} angle={1.029} penumbra={0.5} decay={5} color="lightblue" position={[-10.432, 3.196, 0.607]} rotation={[-1.351, 0.352, 0.283]} />
        <Grid position={[0, -0.01, 0]} args={[10.5, 20.5]} {...gridConfig} />
        <EffectComposer disableNormalPass>
          <TiltShift2 blur={blur} />
          <Noise opacity={noise} />
          <HueSaturation hue={0.2} saturation={saturation} />
          <Vignette eskil={false} offset={0.1} darkness={0.8} />
          <ToneMapping middleGrey={0.3} maxLuminance={20} />
          <BrightnessContrast brightness={brightness} contrast={contrast} />
          <SelectiveBloom selection={selected} intensity={bloom} luminanceThreshold={0.01} luminanceSmoothing={0.225} lights={[lightRef1]} />
        </EffectComposer>
        <ContactShadows scale={10} blur={1} opacity={0.25} far={10} />
        <OrbitControls minPolarAngle={Math.PI / 3.8} maxPolarAngle={Math.PI / 5} />
        <Env />
      </Canvas>
      <Leva collapsed />
    </>
  )
}

function Env() {
  return (
    <>
      <Environment blur={1} background resolution={64}>
        <Striplight color="white" position={[10, 200, 1100]} scale={[0.5, 3, 5]} />
        <mesh scale={105}>
          <sphereGeometry args={[1, 64, 64]} />
          <LayerMaterial side={THREE.BackSide}>
            <Depth far={3} origin={[1, 1, 1]} colorA="#ff00e3" colorB="#00ffff" alpha={0.5} mode={'darken'} mapping="camera" />
            <Depth near={0.25} far={2} colorA={'#ffe100'} alpha={0.5} mode={'darken'} mapping={'vector'} />
            <Fresnel mode={'multiply'} />
            <Fresnel mode={'softlight'} />
            <Base color="black" alpha={1} mode="darken" />
            <Depth colorA="lightyellow" colorB="darkgreen" alpha={0.3} mode="normal" near={0} far={300} origin={[100, 100, 100]} />
            <Noise2 mapping="local" type="cell" scale={1} mode="softlight" />
          </LayerMaterial>
        </mesh>
      </Environment>
    </>
  )
}

function Striplight(props) {
  return (
    <mesh {...props}>
      <boxGeometry />
    </mesh>
  )
}
