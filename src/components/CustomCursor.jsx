import { useState, useEffect, useRef } from 'react'

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 })
  const [followerPos, setFollowerPos] = useState({ x: -100, y: -100 })
  const targetRef = useRef({ x: -100, y: -100 })
  const followerRef = useRef({ x: -100, y: -100 })
  const frameRef = useRef(null)
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    // Detect touch device — don't render cursor at all
    setIsTouch(window.matchMedia('(hover: none) and (pointer: coarse)').matches)

    const onMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
      targetRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove)

    const loop = () => {
      followerRef.current.x += (targetRef.current.x - followerRef.current.x) * 0.11
      followerRef.current.y += (targetRef.current.y - followerRef.current.y) * 0.11
      setFollowerPos({ x: followerRef.current.x, y: followerRef.current.y })
      frameRef.current = requestAnimationFrame(loop)
    }
    frameRef.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(frameRef.current)
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      {/* Dot */}
      <div style={{
        position: 'fixed', pointerEvents: 'none', zIndex: 99990,
        left: cursorPos.x, top: cursorPos.y,
        width: '10px', height: '10px', borderRadius: '50%',
        backgroundColor: '#FF6600',
        transform: 'translate(-50%, -50%)',
      }} />
      {/* Ring follower */}
      <div style={{
        position: 'fixed', pointerEvents: 'none', zIndex: 99989,
        left: followerPos.x, top: followerPos.y,
        width: '34px', height: '34px', borderRadius: '50%',
        border: '1.5px solid rgba(255,102,0,0.55)',
        transform: 'translate(-50%, -50%)',
      }} />
    </>
  )
}

export default CustomCursor