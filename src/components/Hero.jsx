import { useState, useEffect, useRef } from 'react'
import { ArrowRight, ChevronDown, Shield, Paintbrush, ChefHat, GraduationCap } from 'lucide-react'

import door1 from '../assets/door.avif'
import door2 from '../assets/door2.avif'
import chair1 from '../assets/chair.avif'
import chair2 from '../assets/chair2.avif'
import chair3 from '../assets/chair3.avif'
import design1 from '../assets/design.avif'
import design2 from '../assets/design2.avif'
import kitchen1 from '../assets/kitchen.avif'
import kitchen2 from '../assets/kitchen2.avif'
import kitchen3 from '../assets/kitchen3.avif'
import wardrobe1 from '../assets/wardrobe.avif'
import wardrobe2 from '../assets/wardrobe2.avif'
import wardrobe3 from '../assets/wardrobe3.avif'
import bedframe1 from '../assets/bedframe.avif'
import bedframe2 from '../assets/bedframe2.avif'
import bedframe3 from '../assets/bedframe3.avif'

const useBreakpoint = () => {
  const [width, setWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)
  useEffect(() => {
    const fn = () => setWidth(window.innerWidth)
    window.addEventListener('resize', fn)
    return () => window.removeEventListener('resize', fn)
  }, [])
  return { isMobile: width <= 640, isTablet: width > 640 && width <= 960 }
}

const slides = [
  {
    tag: 'Security First',
    headline: 'UNBREAKABLE',
    subheadline: 'SECURITY DOORS',
    description: 'Premium steel security doors engineered for maximum protection. Sales, fabrication and professional installation across Lagos.',
    cta: 'View Security Doors',
    image: door1,
  },
  {
    tag: 'Security Solutions',
    headline: 'BUILT TO',
    subheadline: 'PROTECT',
    description: 'Heavy gauge steel construction with multi point locking systems. Custom fabricated to any size for homes and offices.',
    cta: 'View Security Doors',
    image: door2,
  },
  {
    tag: 'Interior Excellence',
    headline: 'TRANSFORM',
    subheadline: 'YOUR SPACE',
    description: 'Bespoke interior and exterior finishing that turns ordinary spaces into extraordinary living experiences.',
    cta: 'Explore Finishing',
    image: design1,
  },
  {
    tag: 'Interior Finishing',
    headline: 'ELEGANT',
    subheadline: 'DESIGNS',
    description: 'Wall textures, POP ceilings, tiling and exterior cladding delivered with precision and attention to detail.',
    cta: 'Explore Finishing',
    image: design2,
  },
  {
    tag: 'Luxury Seating',
    headline: 'PREMIUM',
    subheadline: 'FURNISHING',
    description: 'Custom furniture and upholstery solutions crafted to complement every interior style.',
    cta: 'See Our Work',
    image: chair1,
  },
  {
    tag: 'Bespoke Seating',
    headline: 'CRAFTED',
    subheadline: 'CHAIRS',
    description: 'From accent chairs to full dining sets — every piece built to your specification and finished to perfection.',
    cta: 'See Our Work',
    image: chair2,
  },
  {
    tag: 'Upholstery',
    headline: 'HAND',
    subheadline: 'CRAFTED',
    description: 'Premium fabrics and leathers hand-selected for durability and style. Every stitch placed with care.',
    cta: 'See Our Work',
    image: chair3,
  },
  {
    tag: 'Custom Craftsmanship',
    headline: 'BESPOKE',
    subheadline: 'KITCHENS',
    description: 'Handcrafted kitchen cabinets tailored to your exact vision. Built from quality materials to last a lifetime.',
    cta: 'See Our Work',
    image: kitchen1,
  },
  {
    tag: 'Kitchen Design',
    headline: 'MODERN',
    subheadline: 'KITCHENS',
    description: 'Sleek layouts and smart storage solutions designed around how you actually cook and live.',
    cta: 'See Our Work',
    image: kitchen2,
  },
  {
    tag: 'Custom Units',
    headline: 'BUILT FOR',
    subheadline: 'YOUR LIFE',
    description: 'Every unit is designed around your space and lifestyle. From concept to installation we handle everything.',
    cta: 'See Our Work',
    image: kitchen3,
  },
  {
    tag: 'Wardrobe Systems',
    headline: 'BUILT IN',
    subheadline: 'WARDROBES',
    description: 'Floor to ceiling wardrobe systems with custom compartments, soft close drawers and premium finishes.',
    cta: 'See Our Work',
    image: wardrobe1,
  },
  {
    tag: 'Walk-In Wardrobes',
    headline: 'ORGANISED',
    subheadline: 'IN STYLE',
    description: 'Transform your bedroom into a luxury dressing room with fully bespoke walk-in wardrobe systems.',
    cta: 'See Our Work',
    image: wardrobe2,
  },
  {
    tag: 'Wardrobe Interiors',
    headline: 'EVERY',
    subheadline: 'DETAIL',
    description: 'Soft-close drawers, mirrored panels, LED lighting and custom hanging rails — all built to your exact brief.',
    cta: 'See Our Work',
    image: wardrobe3,
  },
  {
    tag: 'Bed Frames',
    headline: 'SLEEP IN',
    subheadline: 'LUXURY',
    description: 'Custom bed frames built for comfort and elegance. Upholstered headboards, solid bases and bespoke sizing.',
    cta: 'See Our Work',
    image: bedframe1,
  },
  {
    tag: 'Bed Frames',
    headline: 'HANDCRAFTED',
    subheadline: 'BED FRAMES',
    description: 'Every frame is built to order using quality hardwoods and premium finishes that stand the test of time.',
    cta: 'See Our Work',
    image: bedframe2,
  },
  {
    tag: 'Bed Frames',
    headline: 'CRAFTED',
    subheadline: 'FOR YOU',
    description: 'Every unit is designed around your space and lifestyle. From concept to installation we handle everything.',
    cta: 'See Our Work',
    image: bedframe3,
  },
]

const features = [
  { icon: Shield, label: 'Quality', sub: 'You Can Trust' },
  { icon: Paintbrush, label: 'Expert', sub: 'Craftsmanship' },
  { icon: ChefHat, label: 'Built For', sub: 'Durability' },
  { icon: GraduationCap, label: 'Vocational', sub: 'Training' },
]

// ✅ Pads any number correctly: 1 → "01", 16 → "16"
const pad = (n) => String(n).padStart(2, '0')

const HoverButton = ({ href, children, primary, fullWidth }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href={href}
      style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        gap: '8px', padding: '14px 28px', borderRadius: '2px',
        textDecoration: 'none', fontSize: '13px', fontWeight: '700',
        letterSpacing: '1.5px', textTransform: 'uppercase',
        fontFamily: 'Barlow Condensed, sans-serif',
        width: fullWidth ? '100%' : 'auto',
        transition: 'all 0.3s ease',
        ...(primary ? {
          backgroundColor: hovered ? '#fff' : '#FF6600',
          color: hovered ? '#FF6600' : '#fff',
          transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
          boxShadow: hovered ? '0 12px 30px rgba(255,102,0,0.4)' : 'none',
        } : {
          backgroundColor: 'transparent',
          color: hovered ? '#FF6600' : '#fff',
          border: hovered ? '2px solid #FF6600' : '2px solid rgba(255,255,255,0.4)',
          transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        }),
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  )
}

const FeatureItem = ({ feature, isMobile }) => {
  const [hovered, setHovered] = useState(false)
  const Icon = feature.icon
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: 1, display: 'flex', alignItems: 'center',
        gap: isMobile ? '8px' : '12px',
        padding: isMobile ? '14px 10px' : '20px 24px',
        borderRight: '1px solid rgba(255,255,255,0.07)',
        backgroundColor: hovered ? 'rgba(255,102,0,0.1)' : 'transparent',
        transition: 'background-color 0.3s ease',
        cursor: 'default',
        minWidth: isMobile ? '110px' : 'auto',
      }}
    >
      <div style={{
        width: isMobile ? '30px' : '38px',
        height: isMobile ? '30px' : '38px',
        borderRadius: '4px', flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundColor: hovered ? '#FF6600' : 'rgba(255,102,0,0.15)',
        transition: 'background-color 0.3s ease',
      }}>
        <Icon size={isMobile ? 15 : 18} color={hovered ? '#fff' : '#FF6600'} style={{ transition: 'color 0.3s' }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
        <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: isMobile ? '12px' : '14px', fontWeight: '700', color: '#FF6600', letterSpacing: '1px', textTransform: 'uppercase', lineHeight: 1 }}>
          {feature.label}
        </span>
        <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: isMobile ? '11px' : '13px', fontWeight: '600', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.5px', textTransform: 'uppercase', lineHeight: 1, marginTop: '2px' }}>
          {feature.sub}
        </span>
      </div>
    </div>
  )
}

const Hero = () => {
  const { isMobile, isTablet } = useBreakpoint()
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setCurrent(p => (p + 1) % slides.length)
        setAnimating(false)
      }, 500)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (i) => {
    if (i === current) return
    setAnimating(true)
    setTimeout(() => { setCurrent(i); setAnimating(false) }, 400)
  }

  const slide = slides[current]

  return (
    <>
      {/* ✅ Scrollbar hiding for features bar on mobile */}
      <style>{`
        .features-bar::-webkit-scrollbar { display: none; }
        .features-bar { -ms-overflow-style: none; scrollbar-width: none; }
        .dots-row::-webkit-scrollbar { display: none; }
        .dots-row { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <section id="home" style={{
        minHeight: '100vh',
        backgroundColor: '#001235',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: isMobile ? '60px' : '72px',
      }}>

        {/* Grid bg */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `linear-gradient(rgba(255,102,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,102,0,0.03) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }} />

        {/* Left orange bar */}
        {!isMobile && (
          <div style={{
            position: 'absolute', left: 0, top: '20%',
            width: '3px', height: '60%',
            background: 'linear-gradient(to bottom, transparent, #FF6600, transparent)',
            borderRadius: '0 2px 2px 0',
          }} />
        )}

        {/* Main row */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          flex: 1,
          maxWidth: '1400px',
          margin: '0 auto',
          width: '100%',
          padding: isMobile ? '28px 20px 16px' : isTablet ? '36px 32px' : '36px 48px',
          gap: isMobile ? '24px' : '0',
          alignItems: 'stretch',
        }}>

          {/* LEFT: text content */}
          <div style={{
            flex: isMobile ? 'none' : isTablet ? '0 0 48%' : '0 0 44%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: isMobile ? '14px' : '20px', // ✅ tighter gap on mobile
            paddingRight: isMobile ? '0' : isTablet ? '28px' : '52px',
            position: 'relative',
            zIndex: 1,
          }}>

            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '42px', height: '42px', borderRadius: '50%',
                backgroundColor: '#FF6600',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 0 20px rgba(255,102,0,0.35)', flexShrink: 0,
              }}>
                <span style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '15px', fontWeight: '900', color: '#fff', letterSpacing: '1px' }}>ts</span>
              </div>
              <div>
                <div style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '20px', fontWeight: '800', color: '#fff', letterSpacing: '3px', lineHeight: 1 }}>
                  T-STANDARD
                </div>
                <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.4)', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif', marginTop: '3px' }}>
                  Security | Interiors | Kitchens
                </div>
              </div>
            </div>

            {/* Tag pill */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: 'rgba(255,102,0,0.12)',
              border: '1px solid rgba(255,102,0,0.3)',
              color: '#FF6600', padding: '6px 16px', borderRadius: '20px',
              fontSize: '11px', fontWeight: '600', letterSpacing: '2px',
              textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif',
              width: 'fit-content',
              maxWidth: '100%',           // ✅ won't overflow its container
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              opacity: animating ? 0 : 1,
              transform: animating ? 'translateY(-8px)' : 'translateY(0)',
              transition: 'all 0.4s ease',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF6600', display: 'block', boxShadow: '0 0 6px #FF6600', flexShrink: 0, animation: 'pulse 2s infinite' }} />
              {slide.tag}
            </div>

            {/* Headline */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <h1 style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                // ✅ clamp on mobile so very long headlines don't overflow
                fontSize: isMobile ? 'clamp(36px, 12vw, 56px)' : isTablet ? '68px' : 'clamp(60px, 6vw, 88px)',
                fontWeight: '800', color: '#FF6600',
                lineHeight: 0.88, letterSpacing: '-1px', margin: 0,
                opacity: animating ? 0 : 1,
                transform: animating ? 'translateX(-20px)' : 'translateX(0)',
                transition: 'all 0.4s ease 0.05s',
              }}>{slide.headline}</h1>
              <h2 style={{
                fontFamily: 'Barlow Condensed, sans-serif',
                // ✅ same — clamp prevents overflow on narrow phones
                fontSize: isMobile ? 'clamp(20px, 6vw, 30px)' : isTablet ? '40px' : 'clamp(32px, 3.2vw, 52px)',
                fontWeight: '700', color: '#fff',
                lineHeight: 1.05, letterSpacing: '2px', margin: 0,
                opacity: animating ? 0 : 1,
                transform: animating ? 'translateX(-20px)' : 'translateX(0)',
                transition: 'all 0.4s ease 0.1s',
              }}>{slide.subheadline}</h2>
            </div>

            {/* Description */}
            <p style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: isMobile ? '13px' : '15px',
              lineHeight: 1.75, fontFamily: 'DM Sans, sans-serif', fontWeight: '300',
              maxWidth: '400px', margin: 0,
              opacity: animating ? 0 : 1,
              transition: 'opacity 0.4s ease 0.15s',
            }}>{slide.description}</p>

            {/* CTAs */}
            <div style={{
              display: 'flex', gap: '12px',
              flexDirection: isMobile ? 'column' : 'row',
              opacity: animating ? 0 : 1,
              transition: 'opacity 0.4s ease 0.2s',
            }}>
              <HoverButton href="#services" primary fullWidth={isMobile}>
                {slide.cta} <ArrowRight size={15} />
              </HoverButton>
              <HoverButton href="#contact" primary={false} fullWidth={isMobile}>
                Get Free Quote
              </HoverButton>
            </div>

            {/* Location */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#FF6600', display: 'block', flexShrink: 0 }} />
                <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', fontFamily: 'DM Sans, sans-serif' }}>
                  Isheri Oshun, Lagos — Serving all of Nigeria
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'rgba(255,102,0,0.3)', display: 'block', flexShrink: 0 }} />
                <a href="tel:+2348027671663" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', fontFamily: 'DM Sans, sans-serif', textDecoration: 'none' }}>
                  +234 (0) 802 767 1663
                </a>
              </div>
            </div>

            {/* Dots + counter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: 0 }}>
              {/* ✅ dots scroll horizontally on mobile instead of wrapping onto multiple lines */}
              <div
                className="dots-row"
                style={{
                  display: 'flex', gap: '5px', alignItems: 'center',
                  overflowX: 'auto',
                  flexShrink: 1,
                  minWidth: 0,
                  paddingBottom: '2px', // stops clip on dot bottom
                }}
              >
                {slides.map((_, i) => (
                  <button key={i} onClick={() => goTo(i)} style={{
                    height: '5px',
                    width: i === current ? '20px' : '5px',
                    borderRadius: '3px', border: 'none', padding: 0, cursor: 'pointer',
                    backgroundColor: i === current ? '#FF6600' : 'rgba(255,255,255,0.2)',
                    transition: 'all 0.3s ease',
                    flexShrink: 0, // ✅ dots never compress
                  }} />
                ))}
              </div>
              {/* ✅ pad() handles any slide count correctly — no more "016" style bugs */}
              <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', fontFamily: 'Barlow Condensed, sans-serif', letterSpacing: '2px', whiteSpace: 'nowrap', flexShrink: 0 }}>
                {pad(current + 1)} / {pad(slides.length)}
              </span>
            </div>

          </div>

          {/* RIGHT: images with crossfade */}
          {!isMobile && (
            <div style={{
              flex: 1,
              position: 'relative',
              minHeight: isTablet ? '360px' : '460px',
              overflow: 'hidden',
              clipPath: 'polygon(40px 0%, 100% 0%, 100% 100%, 0% 100%)',
            }}>
              {slides.map((s, i) => (
                <img
                  key={i}
                  src={s.image}
                  alt={s.subheadline}
                  style={{
                    position: 'absolute', inset: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    opacity: i === current ? 1 : 0,
                    transform: i === current ? 'scale(1.04)' : 'scale(1)',
                    transition: 'opacity 0.8s ease, transform 6s ease',
                  }}
                />
              ))}
              <div style={{
                position: 'absolute', inset: 0, zIndex: 1,
                background: 'linear-gradient(to bottom, rgba(0,18,53,0.15) 0%, rgba(0,18,53,0.55) 100%)',
              }} />
              <div style={{ position: 'absolute', top: 0, right: 0, width: '3px', height: '30%', background: 'linear-gradient(to bottom, #FF6600, transparent)', zIndex: 2 }} />
              <div style={{ position: 'absolute', top: 0, right: 0, width: '30%', height: '3px', background: 'linear-gradient(to left, #FF6600, transparent)', zIndex: 2 }} />
              <div style={{ position: 'absolute', bottom: '24px', right: '24px', zIndex: 2, textAlign: 'right' }}>
                <div style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: '64px', fontWeight: '800',
                  color: 'rgba(255,255,255,0.08)', lineHeight: 1,
                }}>
                  {/* ✅ consistent with counter format */}
                  {pad(current + 1)}
                </div>
              </div>
            </div>
          )}

          {/* Mobile image */}
          {isMobile && (
            <div style={{
              width: '100%', height: '220px',
              position: 'relative', borderRadius: '4px',
              overflow: 'hidden', flexShrink: 0,
            }}>
              {slides.map((s, i) => (
                <img key={i} src={s.image} alt={s.subheadline} style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%', objectFit: 'cover',
                  opacity: i === current ? 1 : 0,
                  transform: i === current ? 'scale(1.03)' : 'scale(1)',
                  transition: 'opacity 0.8s ease, transform 6s ease',
                }} />
              ))}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,18,53,0.7) 0%, transparent 60%)',
              }} />
            </div>
          )}

        </div>

        {/* Features bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', backgroundColor: '#000d24' }}>
          <div
            className="features-bar" // ✅ scrollbar hidden via <style> above
            style={{
              display: 'flex', maxWidth: '1400px', margin: '0 auto', width: '100%',
              paddingLeft: isMobile ? '0' : isTablet ? '32px' : '48px',
              overflowX: isMobile ? 'auto' : 'visible',
            }}
          >
            {features.map((f, i) => <FeatureItem key={i} feature={f} isMobile={isMobile} />)}
          </div>
        </div>

        {/* Scroll hint — desktop only */}
        {!isMobile && !isTablet && (
          <div style={{ position: 'absolute', bottom: '80px', left: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
            <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: '10px', letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'DM Sans, sans-serif', writingMode: 'vertical-rl' }}>Scroll</span>
            <ChevronDown size={13} color="rgba(255,255,255,0.2)" style={{ animation: 'bounce 1.5s infinite' }} />
          </div>
        )}

      </section>
    </>
  )
}

export default Hero