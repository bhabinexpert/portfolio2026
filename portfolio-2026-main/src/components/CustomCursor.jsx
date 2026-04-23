import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const posRef = useRef({ x: 0, y: 0 })
  const followerPosRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    let rafId

    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
      if (cursor) {
        cursor.style.left = e.clientX + 'px'
        cursor.style.top = e.clientY + 'px'
      }
    }

    const animate = () => {
      followerPosRef.current.x += (posRef.current.x - followerPosRef.current.x) * 0.12
      followerPosRef.current.y += (posRef.current.y - followerPosRef.current.y) * 0.12
      if (follower) {
        follower.style.left = followerPosRef.current.x + 'px'
        follower.style.top = followerPosRef.current.y + 'px'
      }
      rafId = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      if (cursor) cursor.style.transform = 'translate(-50%, -50%) scale(2)'
      if (follower) {
        follower.style.width = '60px'
        follower.style.height = '60px'
        follower.style.borderColor = 'rgba(34, 211, 238, 0.8)'
      }
    }

    const onLeave = () => {
      if (cursor) cursor.style.transform = 'translate(-50%, -50%) scale(1)'
      if (follower) {
        follower.style.width = '36px'
        follower.style.height = '36px'
        follower.style.borderColor = 'rgba(139, 92, 246, 0.5)'
      }
    }

    document.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(animate)

    const interactables = document.querySelectorAll('a, button, [data-cursor]')
    interactables.forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor"
        style={{ transform: 'translate(-50%, -50%)', left: '-100px', top: '-100px' }}
      />
      <div
        ref={followerRef}
        className="cursor-follower"
        style={{ transform: 'translate(-50%, -50%)', left: '-100px', top: '-100px' }}
      />
    </>
  )
}
