import { useState, useEffect, useRef } from 'react'
import { Phone, X, Menu } from 'lucide-react'

const NavLink = ({ link, active, onClick }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={link.href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        color: active || hovered ? '#FF6600' : '#fff',
        textDecoration: 'none',
        fontSize: '13px',
        fontWeight: '600',
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        fontFamily: 'Barlow Condensed, sans-serif',
        padding: '4px 0',
        display: 'block',
        position: 'relative',
        transition: 'color 0.3s ease',
      }}
    >
      {link.label}
      <span style={{
        position: 'absolute',
        bottom: '-4px',
        left: 0,
        height: '2px',
        width: active || hovered ? '100%' : '0%',
        backgroundColor: '#FF6600',
        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        borderRadius: '2px',
        display: 'block',
      }} />
      {(active || hovered) && (
        <span style={{
          position: 'absolute',
          bottom: '-4px',
          right: 0,
          width: '5px',
          height: '5px',
          borderRadius: '50%',
          backgroundColor: '#FF6600',
          boxShadow: '0 0 8px #FF6600',
          display: 'block',
        }} />
      )}
    </a>
  )
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('Home')
  const [isMobile, setIsMobile] = useState(false)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 })
  const followerRef = useRef({ x: 0, y: 0 })
  const animRef = useRef(null)

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => setCursorPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const animate = () => {
      followerRef.current.x += (cursorPos.x - followerRef.current.x) * 0.12
      followerRef.current.y += (cursorPos.y - followerRef.current.y) * 0.12
      setFollowerPos({ x: followerRef.current.x, y: followerRef.current.y })
      animRef.current = requestAnimationFrame(animate)
    }
    animRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animRef.current)
  }, [cursorPos])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const navHeight = scrolled ? '60px' : '72px'

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: scrolled ? 'rgba(0, 32, 96, 0.97)' : '#003580',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    height: navHeight,
    transition: 'all 0.4s ease',
    boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : '0 2px 10px rgba(0,0,0,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: isMobile ? '0 20px' : '0 48px',
  }

  return (
    <>
      {/* Custom cursor — desktop only */}
      {!isMobile && (
        <>
          <div className="cursor" style={{ left: cursorPos.x, top: cursorPos.y }} />
          <div className="cursor-follower" style={{ left: followerPos.x, top: followerPos.y }} />
        </>
      )}

      <nav style={navStyle}>

        {/* Logo */}
        <div style={styles.logo}>
          <div style={styles.logoIconWrap}>
            <div style={styles.logoIcon}>ts</div>
            <div style={styles.logoIconRing} />
          </div>
          <div style={styles.logoTextWrap}>
            <span style={{
              ...styles.logoText,
              fontSize: isMobile ? '17px' : '22px',
            }}>T-STANDARD</span>
            {!isMobile && (
              <span style={styles.logoSub}>Premium Interiors &amp; Security</span>
            )}
          </div>
        </div>

        {/* Desktop nav links */}
        {!isMobile && (
          <ul style={styles.desktopLinks}>
            {navLinks.map((link) => (
              <li key={link.label} style={{ listStyle: 'none' }}>
                <NavLink
                  link={link}
                  active={activeLink === link.label}
                  onClick={() => setActiveLink(link.label)}
                />
              </li>
            ))}
          </ul>
        )}

        {/* Desktop CTA button */}
        {!isMobile && (
          <a
            href="tel:+2348027671663"
            style={styles.callBtn}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#fff'
              e.currentTarget.style.color = '#FF6600'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(255,102,0,0.4)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FF6600'
              e.currentTarget.style.color = '#fff'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <Phone size={15} />
            <span>Call Now</span>
          </a>
        )}

        {/* Mobile right side: phone icon + hamburger */}
        {isMobile && (
          <div style={styles.mobileRight}>
            <a href="tel:+2348027671663" style={styles.mobilePhoneBtn} aria-label="Call us">
              <Phone size={18} color="#FF6600" />
            </a>
            <button
              style={styles.menuBtn}
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen
                ? <X size={24} color="#fff" />
                : <Menu size={24} color="#fff" />
              }
            </button>
          </div>
        )}

      </nav>

      {/* Mobile fullscreen overlay menu */}
      {isMobile && (
        <div style={{
          ...styles.mobileMenu,
          pointerEvents: isOpen ? 'all' : 'none',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'opacity 0.35s ease, transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        }}>
          {/* Top bar inside menu */}
          <div style={styles.mobileMenuHeader}>
            <div style={styles.logo}>
              <div style={styles.logoIconWrap}>
                <div style={styles.logoIcon}>ts</div>
              </div>
              <span style={{ ...styles.logoText, fontSize: '17px' }}>T-STANDARD</span>
            </div>
            <button style={styles.closeBtn} onClick={() => setIsOpen(false)} aria-label="Close menu">
              <X size={22} color="#fff" />
            </button>
          </div>

          {/* Links */}
          <div style={styles.mobileLinks}>
            {navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  ...styles.mobileLink,
                  borderLeft: activeLink === link.label ? '3px solid #FF6600' : '3px solid transparent',
                  color: activeLink === link.label ? '#FF6600' : '#fff',
                  animationDelay: `${i * 60}ms`,
                }}
                onClick={() => {
                  setIsOpen(false)
                  setActiveLink(link.label)
                }}
              >
                <span style={styles.mobileLinkNumber}>0{i + 1}</span>
                {link.label}
              </a>
            ))}
          </div>

          {/* Bottom call button */}
          <div style={styles.mobileMenuFooter}>
            <a href="tel:+2348027671663" style={styles.mobileCallBtn}>
              <Phone size={18} />
              <span>+234 802 767 1663</span>
            </a>
            <p style={styles.mobileTagline}>Premium Interiors &amp; Security</p>
          </div>
        </div>
      )}
    </>
  )
}

const styles = {
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  logoIconWrap: {
    position: 'relative',
    width: '38px',
    height: '38px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  logoIcon: {
    backgroundColor: '#FF6600',
    color: '#fff',
    fontWeight: '800',
    fontSize: '13px',
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Barlow Condensed, sans-serif',
    letterSpacing: '1px',
    position: 'relative',
    zIndex: 1,
  },
  logoIconRing: {
    position: 'absolute',
    inset: '-4px',
    borderRadius: '50%',
    border: '2px solid rgba(255,102,0,0.4)',
    animation: 'pulse 2s infinite',
  },
  logoTextWrap: {
    display: 'flex',
    flexDirection: 'column',
  },
  logoText: {
    color: '#fff',
    fontWeight: '800',
    letterSpacing: '3px',
    fontFamily: 'Barlow Condensed, sans-serif',
    lineHeight: 1,
  },
  logoSub: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: '9px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontFamily: 'DM Sans, sans-serif',
    marginTop: '2px',
  },
  desktopLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '36px',
    margin: 0,
    padding: 0,
  },
  callBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#FF6600',
    color: '#fff',
    padding: '11px 24px',
    borderRadius: '2px',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: '700',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    fontFamily: 'Barlow Condensed, sans-serif',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
  },

  // Mobile
  mobileRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  },
  mobilePhoneBtn: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,102,0,0.15)',
    border: '1px solid rgba(255,102,0,0.3)',
  },
  menuBtn: {
    width: '44px',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '4px',
    borderRadius: '4px',
  },
  mobileMenu: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#002060',
    zIndex: 999,
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
  },
  mobileMenuHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 20px',
    borderBottom: '1px solid rgba(255,255,255,0.08)',
    minHeight: '64px',
  },
  closeBtn: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255,255,255,0.08)',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
  },
  mobileLinks: {
    flex: 1,
    padding: '24px 0',
    display: 'flex',
    flexDirection: 'column',
  },
  mobileLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '32px',
    fontWeight: '700',
    fontFamily: 'Barlow Condensed, sans-serif',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    padding: '16px 28px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    transition: 'all 0.2s ease',
  },
  mobileLinkNumber: {
    color: '#FF6600',
    fontSize: '12px',
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: '400',
    letterSpacing: '1px',
    minWidth: '24px',
  },
  mobileMenuFooter: {
    padding: '24px 20px 36px',
    borderTop: '1px solid rgba(255,255,255,0.08)',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  mobileCallBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    backgroundColor: '#FF6600',
    color: '#fff',
    padding: '18px 24px',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: '700',
    borderRadius: '2px',
    justifyContent: 'center',
    fontFamily: 'Barlow Condensed, sans-serif',
    letterSpacing: '1px',
  },
  mobileTagline: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: '10px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontFamily: 'DM Sans, sans-serif',
    textAlign: 'center',
  },
}

export default Navbar