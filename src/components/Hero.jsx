import { useState, useEffect } from 'react'
import { ArrowRight, ChevronDown, Shield, Star, Award } from 'lucide-react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  const slides = [
    {
      tag: 'Security First',
      headline: 'UNBREAKABLE',
      subheadline: 'SECURITY DOORS',
      description: 'Premium steel security doors engineered for maximum protection. Sales, fabrication and professional installation across Lagos.',
      cta: 'View Security Doors',
      accent: '#FF6600',
    },
    {
      tag: 'Interior Excellence',
      headline: 'TRANSFORM',
      subheadline: 'YOUR SPACE',
      description: 'Bespoke interior and exterior finishing that turns ordinary spaces into extraordinary living experiences.',
      cta: 'Explore Finishing',
      accent: '#FF6600',
    },
    {
      tag: 'Custom Craftsmanship',
      headline: 'BESPOKE',
      subheadline: 'KITCHENS & WARDROBES',
      description: 'Handcrafted kitchens and wardrobes tailored to your exact specifications. Built to last a lifetime.',
      cta: 'See Our Work',
      accent: '#FF6600',
    },
  ]

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 640)
      setIsTablet(window.innerWidth > 640 && window.innerWidth <= 960)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setAnimating(false)
      }, 400)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index) => {
    setAnimating(true)
    setTimeout(() => {
      setCurrentSlide(index)
      setAnimating(false)
    }, 300)
  }

  const slide = slides[currentSlide]
  const isSmall = isMobile || isTablet

  const stats = [
    { icon: Shield, value: '500+', label: 'Doors Installed' },
    { icon: Star, value: '10+', label: 'Years Experience' },
    { icon: Award, value: '100%', label: 'Client Satisfaction' },
  ]

  return (
    <section id="home" style={{
      ...styles.section,
      paddingTop: isMobile ? '64px' : '72px',
    }}>

      <div style={styles.gridOverlay} />
      <div style={styles.diagonalAccent} />
      {!isMobile && <div style={styles.sideBar} />}

      {/* Main content */}
      <div style={{
        ...styles.container,
        flexDirection: isSmall ? 'column' : 'row',
        padding: isMobile ? '36px 20px 28px' : isTablet ? '48px 32px 36px' : '60px 48px',
        gap: isSmall ? '36px' : '60px',
        alignItems: isSmall ? 'flex-start' : 'center',
      }}>

        {/* Left Content */}
        <div style={{
          ...styles.leftContent,
          maxWidth: isSmall ? '100%' : '580px',
        }}>

          {/* Tag pill */}
          <div style={{
            ...styles.tagPill,
            opacity: animating ? 0 : 1,
            transform: animating ? 'translateY(-10px)' : 'translateY(0)',
            transition: 'all 0.4s ease',
          }}>
            <span style={styles.tagDot} />
            {slide.tag}
          </div>

          {/* Headline */}
          <div style={styles.headlineWrap}>
            <h1 style={{
              ...styles.headline,
              fontSize: isMobile ? '64px' : isTablet ? '80px' : 'clamp(60px, 8vw, 100px)',
              opacity: animating ? 0 : 1,
              transform: animating ? 'translateX(-30px)' : 'translateX(0)',
              transition: 'all 0.4s ease 0.05s',
            }}>
              {slide.headline}
            </h1>
            <h2 style={{
              ...styles.subheadline,
              fontSize: isMobile ? '36px' : isTablet ? '48px' : 'clamp(40px, 5vw, 64px)',
              opacity: animating ? 0 : 1,
              transform: animating ? 'translateX(-30px)' : 'translateX(0)',
              transition: 'all 0.4s ease 0.1s',
            }}>
              {slide.subheadline}
            </h2>
          </div>

          {/* Description */}
          <p style={{
            ...styles.description,
            fontSize: isMobile ? '14px' : '16px',
            opacity: animating ? 0 : 1,
            transform: animating ? 'translateY(10px)' : 'translateY(0)',
            transition: 'all 0.4s ease 0.15s',
          }}>
            {slide.description}
          </p>

          {/* CTA Buttons */}
          <div style={{
            ...styles.ctaRow,
            flexDirection: isMobile ? 'column' : 'row',
            opacity: animating ? 0 : 1,
            transition: 'all 0.4s ease 0.2s',
          }}>
            <HoverButton href="#services" primary fullWidth={isMobile}>
              {slide.cta} <ArrowRight size={16} />
            </HoverButton>
            <HoverButton href="#contact" primary={false} fullWidth={isMobile}>
              Get Free Quote
            </HoverButton>
          </div>

          {/* Location badge */}
          <div style={styles.locationBadge}>
            <span style={styles.locationDot} />
            <span style={{ ...styles.locationText, fontSize: isMobile ? '11px' : '12px' }}>
              Isheri-Oshun, Lagos. Serving all of Nigeria
            </span>
          </div>

        </div>

        {/* Right Visual Panel — hidden on mobile, shown on tablet+ */}
        {!isMobile && (
          <div style={{
            ...styles.rightPanel,
            flex: isTablet ? '0 0 280px' : '0 0 380px',
            alignSelf: isTablet ? 'center' : 'auto',
          }}>
            <div style={styles.bigNumber}>0{currentSlide + 1}</div>

            <div style={{
              ...styles.cardStack,
              width: isTablet ? '260px' : '320px',
              height: isTablet ? '320px' : '380px',
            }}>
              <div style={styles.cardBehind2} />
              <div style={styles.cardBehind1} />
              <div style={styles.cardFront}>
                <div style={styles.cardInner}>
                  <div style={styles.cardIcon}>
                    {currentSlide === 0 && <Shield size={isTablet ? 36 : 48} color="#FF6600" />}
                    {currentSlide === 1 && <Star size={isTablet ? 36 : 48} color="#FF6600" />}
                    {currentSlide === 2 && <Award size={isTablet ? 36 : 48} color="#FF6600" />}
                  </div>
                  <div style={styles.cardLabel}>T-STANDARD</div>
                  <div style={styles.cardSublabel}>Lagos, Nigeria</div>
                  <div style={styles.cardDivider} />
                  <div style={styles.cardService}>{slide.subheadline}</div>
                  <div style={styles.cardPhone}>+234 (0) 802 767 1663</div>
                </div>
              </div>
            </div>

            <div style={styles.dotsRow}>
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  style={{
                    ...styles.dot,
                    width: i === currentSlide ? '32px' : '8px',
                    backgroundColor: i === currentSlide ? '#FF6600' : 'rgba(255,255,255,0.3)',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Mobile slide dots (shown only on mobile, inline with content) */}
        {isMobile && (
          <div style={{ ...styles.dotsRow, marginTop: '-8px' }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                style={{
                  ...styles.dot,
                  width: i === currentSlide ? '32px' : '8px',
                  backgroundColor: i === currentSlide ? '#FF6600' : 'rgba(255,255,255,0.3)',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        )}

      </div>

      {/* Stats bar */}
      <div style={{
        ...styles.statsBar,
        padding: isMobile ? '0 16px' : '0 48px',
        flexWrap: isMobile ? 'wrap' : 'nowrap',
      }}>
        {stats.map((stat, i) => (
          <StatItem
            key={i}
            stat={stat}
            isMobile={isMobile}
            style={isMobile ? { flex: '1 1 calc(33% - 8px)', minWidth: '90px' } : {}}
          />
        ))}
      </div>

      {/* Scroll indicator — desktop only */}
      {!isMobile && (
        <div style={styles.scrollIndicator}>
          <span style={styles.scrollText}>Scroll</span>
          <ChevronDown size={16} color="rgba(255,255,255,0.5)" style={{ animation: 'bounce 1.5s infinite' }} />
        </div>
      )}

    </section>
  )
}

const HoverButton = ({ href, children, primary, fullWidth }) => {
  const [hovered, setHovered] = useState(false)

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    padding: '14px 28px',
    borderRadius: '2px',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: '700',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    fontFamily: 'Barlow Condensed, sans-serif',
    transition: 'all 0.3s ease',
    width: fullWidth ? '100%' : 'auto',
  }

  const primaryStyle = {
    ...base,
    backgroundColor: hovered ? '#fff' : '#FF6600',
    color: hovered ? '#FF6600' : '#fff',
    transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
    boxShadow: hovered ? '0 12px 30px rgba(255,102,0,0.4)' : 'none',
  }

  const secondaryStyle = {
    ...base,
    backgroundColor: 'transparent',
    color: hovered ? '#FF6600' : '#fff',
    border: hovered ? '2px solid #FF6600' : '2px solid rgba(255,255,255,0.4)',
    transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
  }

  return (
    <a
      href={href}
      style={primary ? primaryStyle : secondaryStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  )
}

const StatItem = ({ stat, isMobile }) => {
  const [hovered, setHovered] = useState(false)
  const Icon = stat.icon

  return (
    <div
      style={{
        ...styles.statItem,
        backgroundColor: hovered ? 'rgba(255,102,0,0.15)' : 'transparent',
        borderColor: hovered ? '#FF6600' : 'rgba(255,255,255,0.1)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.3s ease',
        padding: isMobile ? '20px 12px' : '28px 48px',
        flex: isMobile ? 1 : 'unset',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon size={isMobile ? 18 : 22} color={hovered ? '#FF6600' : 'rgba(255,255,255,0.5)'} style={{ transition: 'color 0.3s' }} />
      <div style={{
        ...styles.statValue,
        fontSize: isMobile ? '24px' : '32px',
      }}>{stat.value}</div>
      <div style={{
        ...styles.statLabel,
        fontSize: isMobile ? '9px' : '11px',
        textAlign: 'center',
      }}>{stat.label}</div>
    </div>
  )
}

const styles = {
  section: {
    minHeight: '100vh',
    backgroundColor: '#001845',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  gridOverlay: {
    position: 'absolute',
    inset: 0,
    backgroundImage: `
      linear-gradient(rgba(255,102,0,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,102,0,0.04) 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
    pointerEvents: 'none',
  },
  diagonalAccent: {
    position: 'absolute',
    top: 0,
    right: '-10%',
    width: '55%',
    height: '100%',
    background: 'linear-gradient(135deg, rgba(0,53,128,0.8) 0%, rgba(0,24,69,0) 70%)',
    clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
    pointerEvents: 'none',
  },
  sideBar: {
    position: 'absolute',
    left: 0,
    top: '20%',
    width: '4px',
    height: '60%',
    background: 'linear-gradient(to bottom, transparent, #FF6600, transparent)',
    borderRadius: '0 2px 2px 0',
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    flex: 1,
  },
  leftContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  tagPill: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'rgba(255,102,0,0.15)',
    border: '1px solid rgba(255,102,0,0.3)',
    color: '#FF6600',
    padding: '6px 16px',
    borderRadius: '20px',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontFamily: 'DM Sans, sans-serif',
    width: 'fit-content',
  },
  tagDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: '#FF6600',
    boxShadow: '0 0 8px #FF6600',
    display: 'block',
    animation: 'pulse 2s infinite',
  },
  headlineWrap: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0px',
  },
  headline: {
    fontFamily: 'Barlow Condensed, sans-serif',
    fontWeight: '800',
    color: '#FF6600',
    lineHeight: 0.9,
    letterSpacing: '-2px',
  },
  subheadline: {
    fontFamily: 'Barlow Condensed, sans-serif',
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: 1,
    letterSpacing: '2px',
  },
  description: {
    color: 'rgba(255,255,255,0.65)',
    lineHeight: 1.7,
    fontFamily: 'DM Sans, sans-serif',
    maxWidth: '480px',
    fontWeight: '300',
  },
  ctaRow: {
    display: 'flex',
    gap: '16px',
  },
  locationBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginTop: '4px',
  },
  locationDot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    backgroundColor: '#FF6600',
    display: 'block',
    flexShrink: 0,
  },
  locationText: {
    color: 'rgba(255,255,255,0.4)',
    letterSpacing: '1px',
    fontFamily: 'DM Sans, sans-serif',
  },
  rightPanel: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px',
    position: 'relative',
  },
  bigNumber: {
    position: 'absolute',
    top: '-20px',
    right: '-20px',
    fontFamily: 'Barlow Condensed, sans-serif',
    fontSize: '160px',
    fontWeight: '800',
    color: 'rgba(255,102,0,0.06)',
    lineHeight: 1,
    pointerEvents: 'none',
    userSelect: 'none',
  },
  cardStack: {
    position: 'relative',
  },
  cardBehind2: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    right: '-16px',
    bottom: '-16px',
    backgroundColor: 'rgba(255,102,0,0.08)',
    borderRadius: '4px',
    border: '1px solid rgba(255,102,0,0.15)',
  },
  cardBehind1: {
    position: 'absolute',
    top: '8px',
    left: '8px',
    right: '-8px',
    bottom: '-8px',
    backgroundColor: 'rgba(0,53,128,0.6)',
    borderRadius: '4px',
    border: '1px solid rgba(255,255,255,0.08)',
  },
  cardFront: {
    position: 'absolute',
    inset: 0,
    backgroundColor: '#002a6e',
    borderRadius: '4px',
    border: '1px solid rgba(255,102,0,0.3)',
    boxShadow: '0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,102,0,0.1)',
    overflow: 'hidden',
  },
  cardInner: {
    padding: '32px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    textAlign: 'center',
  },
  cardIcon: {
    width: '72px',
    height: '72px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,102,0,0.1)',
    border: '2px solid rgba(255,102,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '4px',
  },
  cardLabel: {
    fontFamily: 'Barlow Condensed, sans-serif',
    fontSize: '22px',
    fontWeight: '800',
    color: '#fff',
    letterSpacing: '3px',
  },
  cardSublabel: {
    fontSize: '11px',
    color: 'rgba(255,255,255,0.4)',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontFamily: 'DM Sans, sans-serif',
  },
  cardDivider: {
    width: '40px',
    height: '2px',
    backgroundColor: '#FF6600',
    margin: '6px 0',
  },
  cardService: {
    fontFamily: 'Barlow Condensed, sans-serif',
    fontSize: '16px',
    fontWeight: '700',
    color: '#FF6600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
  cardPhone: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.5)',
    fontFamily: 'DM Sans, sans-serif',
    marginTop: '6px',
  },
  dotsRow: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
    marginTop: '8px',
  },
  dot: {
    height: '8px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  },
  statsBar: {
    display: 'flex',
    justifyContent: 'center',
    borderTop: '1px solid rgba(255,255,255,0.08)',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '6px',
    border: '1px solid rgba(255,255,255,0.1)',
    borderTop: 'none',
    cursor: 'default',
  },
  statValue: {
    fontFamily: 'Barlow Condensed, sans-serif',
    fontWeight: '800',
    color: '#fff',
    lineHeight: 1,
  },
  statLabel: {
    color: 'rgba(255,255,255,0.4)',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontFamily: 'DM Sans, sans-serif',
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '100px',
    left: '48px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
  },
  scrollText: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: '10px',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    fontFamily: 'DM Sans, sans-serif',
    writingMode: 'vertical-rl',
  },
}

export default Hero