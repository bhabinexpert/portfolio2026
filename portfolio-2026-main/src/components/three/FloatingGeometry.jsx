import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

// New palette: indigo (#6366f1) + teal (#14b8a6)

function InnerSphere() {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.elapsedTime * 0.3
      ref.current.rotation.y = clock.elapsedTime * 0.4
    }
  })
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[1.2, 1]} />
      <meshStandardMaterial
        color="#6366f1"
        wireframe
        transparent
        opacity={0.55}
        emissive="#6366f1"
        emissiveIntensity={0.45}
      />
    </mesh>
  )
}

function OuterTorus() {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = clock.elapsedTime * 0.15
      ref.current.rotation.z = clock.elapsedTime * 0.2
    }
  })
  return (
    <mesh ref={ref}>
      <torusGeometry args={[2, 0.04, 16, 100]} />
      <meshStandardMaterial
        color="#2dd4bf"
        emissive="#14b8a6"
        emissiveIntensity={0.7}
        transparent
        opacity={0.65}
      />
    </mesh>
  )
}

function OuterTorus2() {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.elapsedTime * 0.18
      ref.current.rotation.x = Math.PI / 3 + clock.elapsedTime * 0.1
    }
  })
  return (
    <mesh ref={ref}>
      <torusGeometry args={[2.5, 0.03, 16, 100]} />
      <meshStandardMaterial
        color="#818cf8"
        emissive="#6366f1"
        emissiveIntensity={0.5}
        transparent
        opacity={0.45}
      />
    </mesh>
  )
}

function GlowSphere() {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) {
      const scale = 1 + Math.sin(clock.elapsedTime * 0.8) * 0.05
      ref.current.scale.setScalar(scale)
    }
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.85, 32, 32]} />
      <MeshDistortMaterial
        color="#1e1b4b"
        emissive="#4f46e5"
        emissiveIntensity={0.38}
        distort={0.38}
        speed={2}
        roughness={0.12}
        metalness={0.75}
        transparent
        opacity={0.92}
      />
    </mesh>
  )
}

function OrbitDot({ radius, speed, color, startAngle = 0 }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (ref.current) {
      const angle = clock.elapsedTime * speed + startAngle
      ref.current.position.x = Math.cos(angle) * radius
      ref.current.position.z = Math.sin(angle) * radius
    }
  })
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.06, 16, 16]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
    </mesh>
  )
}

export default function FloatingGeometry() {
  const groupRef = useRef()

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
      groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.2) * 0.1
      groupRef.current.position.y = Math.sin(clock.elapsedTime * 0.5) * 0.15
    }
  })

  return (
    <group ref={groupRef}>
      <GlowSphere />
      <InnerSphere />
      <OuterTorus />
      <OuterTorus2 />
      <OrbitDot radius={2}   speed={0.8}  color="#2dd4bf" startAngle={0} />
      <OrbitDot radius={2}   speed={0.8}  color="#818cf8" startAngle={Math.PI} />
      <OrbitDot radius={2.5} speed={-0.5} color="#a5b4fc" startAngle={Math.PI / 2} />

      <ambientLight intensity={0.35} />
      <pointLight position={[3, 3, 3]}   intensity={1.8} color="#6366f1" />
      <pointLight position={[-3, -3, -3]} intensity={1.4} color="#14b8a6" />
      <pointLight position={[0, 5, 0]}   intensity={0.8} color="#ffffff" />
    </group>
  )
}
