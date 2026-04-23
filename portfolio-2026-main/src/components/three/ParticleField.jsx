import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/* Soft circular star texture — replaces default square sprite */
function makeStarTexture() {
  const size = 64
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')

  // Radial gradient: bright white core → transparent edge
  const grad = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
  grad.addColorStop(0,    'rgba(255,255,255,1)')
  grad.addColorStop(0.12, 'rgba(255,255,255,0.9)')
  grad.addColorStop(0.35, 'rgba(255,255,255,0.3)')
  grad.addColorStop(0.65, 'rgba(255,255,255,0.05)')
  grad.addColorStop(1,    'rgba(255,255,255,0)')

  ctx.fillStyle = grad
  ctx.fillRect(0, 0, size, size)

  const tex = new THREE.CanvasTexture(canvas)
  tex.needsUpdate = true
  return tex
}

export default function ParticleField({ count = 2200 }) {
  const mesh = useRef()

  const starTexture = useMemo(() => makeStarTexture(), [])

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 70
      pos[i * 3 + 1] = (Math.random() - 0.5) * 70
      pos[i * 3 + 2] = (Math.random() - 0.5) * 70
    }
    return pos
  }, [count])

  const colors = useMemo(() => {
    const col = new Float32Array(count * 3)
    const palette = [
      new THREE.Color('#ffffff'),   // pure white — most stars
      new THREE.Color('#ffffff'),
      new THREE.Color('#ffffff'),
      new THREE.Color('#c7d2fe'),   // indigo-200 — cool tint
      new THREE.Color('#a5b4fc'),   // indigo-300
      new THREE.Color('#99f6e4'),   // teal-200 — warm complement
      new THREE.Color('#2dd4bf'),   // teal-400
    ]
    for (let i = 0; i < count; i++) {
      const c = palette[Math.floor(Math.random() * palette.length)]
      col[i * 3]     = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b
    }
    return col
  }, [count])

  useFrame(({ clock }) => {
    if (mesh.current) {
      mesh.current.rotation.y = clock.elapsedTime * 0.025
      mesh.current.rotation.x = clock.elapsedTime * 0.008
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
        <bufferAttribute attach="attributes-color"    array={colors}    count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.18}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        map={starTexture}
        alphaMap={starTexture}
        alphaTest={0.005}
        depthWrite={false}
      />
    </points>
  )
}
