import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import ParticleField from './ParticleField'
import FloatingGeometry from './FloatingGeometry'

export default function Scene3D() {
  return (
    <Canvas
      style={{ position: 'absolute', inset: 0, zIndex: 0 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={60} />
      <Suspense fallback={null}>
        <ParticleField count={2500} />
        <FloatingGeometry />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
        enableDamping
        dampingFactor={0.05}
      />
    </Canvas>
  )
}
