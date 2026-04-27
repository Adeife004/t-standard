import { useState, useEffect } from 'react'

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [wiping, setWiping] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100 }
        const increment = prev < 30 ? 4 : prev < 70 ? 1.5 : prev < 90 ? 2.5 : 3
        return Math.min(prev + increment, 100)
      })
    }, 30)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress === 100) {
      // Short pause then trigger wipe
      setTimeout(() => {
        setWiping(true)
        // Tell App to start revealing page underneath
        onComplete()
      }, 400)
    }
  }, [progress])

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 99999,
      // Wipe upward: shrinks from bottom, revealing page beneath
      transform: wiping ? 'translateY(-100%)' : 'translateY(0)',
      transition: wiping ? 'transform 0.85s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
    }}>

      {/* Main dark background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundColor: '#001235',
        overflow: 'hidden',
      }}>

        {/* Background grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(255,102,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,102,0,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          pointerEvents: 'none',
        }} />

        {/* Left fill bar */}
        <div style={{
          position: 'absolute', left: 0, bottom: 0, width: '3px',
          height: `${progress}%`,
          background: 'linear-gradient(to top, #FF6600, rgba(255,102,0,0.1))',
          borderRadius: '0 2px 0 0',
          transition: 'height 0.1s ease',
        }} />

        {/* Center content */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: '32px', padding: '0 24px',
        }}>

          {/* Logo */}
          <div style={{ position: 'relative', width: '100px', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              position: 'absolute', inset: '-12px', borderRadius: '50%',
              border: '2px solid rgba(255,102,0,0.5)',
              transform: `scale(${0.8 + (progress / 100) * 0.2})`,
              opacity: 0.3 + (progress / 100) * 0.5,
              transition: 'all 0.1s ease',
            }} />
            <div style={{
              width: '100px', height: '100px', borderRadius: '50%',
              backgroundColor: '#FF6600',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 40px rgba(255,102,0,0.4)',
            }}>
              <span style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '36px', fontWeight: '900',
                color: '#fff', letterSpacing: '2px',
              }}>ts</span>
            </div>
          </div>

          {/* Brand name */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
            <h1 style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: 'clamp(32px, 8vw, 56px)',
              fontWeight: '800', color: '#fff',
              letterSpacing: '6px', margin: 0, lineHeight: 1,
            }}>T-STANDARD</h1>
            <p style={{
              fontSize: '11px', color: 'rgba(255,255,255,0.4)',
              letterSpacing: '3px', textTransform: 'uppercase',
              fontFamily: 'DM Sans, sans-serif', margin: 0,
            }}>Premium Interiors and Security</p>
          </div>

          {/* Progress bar */}
          <div style={{ width: '100%', maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{
              width: '100%', height: '2px',
              backgroundColor: 'rgba(255,255,255,0.08)',
              borderRadius: '2px', position: 'relative',
            }}>
              <div style={{
                height: '100%', width: `${progress}%`,
                backgroundColor: '#FF6600', borderRadius: '2px',
                transition: 'width 0.1s ease',
              }} />
              <div style={{
                position: 'absolute', top: '50%',
                left: `${Math.min(progress, 99)}%`,
                transform: 'translate(-50%, -50%)',
                width: '8px', height: '8px', borderRadius: '50%',
                backgroundColor: '#FF6600',
                boxShadow: '0 0 12px 4px rgba(255,102,0,0.6)',
                opacity: progress > 0 && progress < 100 ? 1 : 0,
                transition: 'left 0.1s ease, opacity 0.3s',
              }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{
                fontSize: '10px', color: 'rgba(255,255,255,0.3)',
                letterSpacing: '3px', textTransform: 'uppercase',
                fontFamily: 'DM Sans, sans-serif',
              }}>Loading</span>
              <span style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                fontSize: '18px', fontWeight: '700',
                color: '#FF6600', letterSpacing: '1px',
              }}>{Math.round(progress)}%</span>
            </div>
          </div>

          {/* Service tags */}
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Security Doors', 'Interiors', 'Kitchens', 'Training'].map((item, i) => (
              <div key={item} style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                opacity: progress > (i + 1) * 22 ? 1 : 0.2,
                transition: 'opacity 0.4s ease',
              }}>
                <span style={{
                  width: '6px', height: '6px', borderRadius: '50%',
                  display: 'block', flexShrink: 0,
                  backgroundColor: progress > (i + 1) * 22 ? '#FF6600' : 'rgba(255,255,255,0.2)',
                  transition: 'background-color 0.4s ease',
                }} />
                <span style={{
                  fontSize: '11px', color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '1px', fontFamily: 'DM Sans, sans-serif',
                  textTransform: 'uppercase',
                }}>{item}</span>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom location tag */}
        <div style={{
          position: 'absolute', bottom: '32px', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', alignItems: 'center', gap: '8px',
          fontSize: '11px', color: 'rgba(255,255,255,0.25)',
          letterSpacing: '2px', fontFamily: 'DM Sans, sans-serif',
          textTransform: 'uppercase', whiteSpace: 'nowrap',
        }}>
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#FF6600', display: 'block', flexShrink: 0 }} />
          Isheri Oshun, Lagos, Nigeria
        </div>

      </div>

      {/* Orange wipe trailing edge — slides up just after the main panel */}
      <div style={{
        position: 'absolute',
        bottom: wiping ? '100%' : '-8px',
        left: 0, right: 0,
        height: '8px',
        backgroundColor: '#FF6600',
        transition: wiping ? 'bottom 0.85s cubic-bezier(0.76, 0, 0.24, 1)' : 'none',
      }} />

    </div>
  )
}

export default Preloader