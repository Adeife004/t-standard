import { useState, useEffect } from 'react'
import { Phone, MapPin, ArrowRight, Heart, Shield, Paintbrush, ChefHat, GraduationCap, Share2, MessageCircle, Send, Rss } from 'lucide-react'

const footerLinks = {
  Services: [
    { label: 'Security Door Installation', href: '#services' },
    { label: 'Interior Finishing', href: '#services' },
    { label: 'Exterior Finishing', href: '#services' },
    { label: 'Kitchen Cabinets', href: '#services' },
    { label: 'Wardrobe Systems', href: '#services' },
    { label: 'Skills Training', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Gallery', href: '#gallery' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Get a Quote', href: '#contact' },
    { label: 'Training Program', href: '#services' },
  ],
}

const socials = [
  { icon: Share2, label: 'Facebook', href: '#', color: '#1877F2' },
  { icon: MessageCircle, label: 'Instagram', href: '#', color: '#E4405F' },
  { icon: Send, label: 'Twitter', href: '#', color: '#1DA1F2' },
  { icon: Rss, label: 'YouTube', href: '#', color: '#FF0000' },
]

const serviceIcons = [
  { icon: Shield, label: 'Security Doors' },
  { icon: Paintbrush, label: 'Finishing' },
  { icon: ChefHat, label: 'Kitchen' },
  { icon: GraduationCap, label: 'Training' },
]

const FooterLink = ({ label, href }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <li style={{ listStyle: 'none' }}>
      <a
        href={href}
        style={{
          ...styles.footerLink,
          color: hovered ? '#FF6600' : 'rgba(255,255,255,0.55)',
          paddingLeft: hovered ? '12px' : '0',
          transition: 'all 0.25s ease',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <ArrowRight
          size={12}
          style={{
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateX(0)' : 'translateX(-6px)',
            transition: 'all 0.25s ease',
            flexShrink: 0,
          }}
        />
        {label}
      </a>
    </li>
  )
}

const SocialBtn = ({ social }) => {
  const [hovered, setHovered] = useState(false)
  const Icon = social.icon
  return (
    <a
      href={social.href}
      aria-label={social.label}
      style={{
        ...styles.socialBtn,
        backgroundColor: hovered ? social.color : 'rgba(255,255,255,0.08)',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        boxShadow: hovered ? `0 8px 20px ${social.color}44` : 'none',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon size={16} color="#fff" />
    </a>
  )
}

const ContactLine = ({ icon: Icon, text, href }) => {
  const [hovered, setHovered] = useState(false)
  const Wrapper = href ? 'a' : 'div'
  return (
    <Wrapper
      href={href}
      target={href && href.startsWith('http') ? '_blank' : undefined}
      rel="noreferrer"
      style={{
        ...styles.contactLine,
        color: hovered ? '#FF6600' : 'rgba(255,255,255,0.55)',
        textDecoration: 'none',
        transition: 'color 0.2s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon size={13} color={hovered ? '#FF6600' : 'rgba(255,255,255,0.35)'} style={{ flexShrink: 0, transition: 'color 0.2s' }} />
      {text}
    </Wrapper>
  )
}

const BottomLink = ({ label }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <a
      href="#"
      style={{
        ...styles.bottomLink,
        color: hovered ? '#FF6600' : 'rgba(255,255,255,0.3)',
        transition: 'color 0.2s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  )
}

const Footer = () => {
  const [emailHovered, setEmailHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 640)
      setIsTablet(window.innerWidth > 640 && window.innerWidth <= 960)
    }
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const isSmall = isMobile || isTablet

  return (
    <footer style={styles.footer}>

      {/* Top CTA band */}
      <div style={styles.ctaBand}>
        <div style={{
          ...styles.ctaBandInner,
          flexDirection: isSmall ? 'column' : 'row',
          alignItems: isSmall ? 'flex-start' : 'center',
          padding: isMobile ? '28px 20px' : isTablet ? '32px 32px' : '32px 48px',
          gap: isSmall ? '20px' : '32px',
        }}>
          <div style={styles.ctaBandLeft}>
            <span style={styles.ctaBandTag}>Start Your Project Today</span>
            <h3 style={{
              ...styles.ctaBandTitle,
              fontSize: isMobile ? '18px' : '22px',
            }}>
              Ready to upgrade your security or transform your space?
            </h3>
          </div>
          <div style={{
            ...styles.ctaBandRight,
            width: isSmall ? '100%' : 'auto',
            flexDirection: isMobile ? 'column' : 'row',
          }}>
            <a
              href="tel:+2348027671663"
              style={{
                ...styles.ctaBtn,
                backgroundColor: emailHovered ? '#fff' : '#FF6600',
                color: emailHovered ? '#FF6600' : '#fff',
                transition: 'all 0.3s ease',
                justifyContent: 'center',
              }}
              onMouseEnter={() => setEmailHovered(true)}
              onMouseLeave={() => setEmailHovered(false)}
            >
              <Phone size={16} />
              Call +234 802 767 1663
            </a>
            <a
              href="https://wa.me/2348027671663"
              target="_blank"
              rel="noreferrer"
              style={{
                ...styles.ctaBtnWhatsapp,
                justifyContent: 'center',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div style={{
        ...styles.body,
        padding: isMobile ? '48px 0 36px' : '64px 0 48px',
      }}>
        <div style={{
          ...styles.bodyInner,
          padding: isMobile ? '0 20px' : isTablet ? '0 32px' : '0 48px',
          gridTemplateColumns: isMobile
            ? '1fr'
            : isTablet
            ? '1fr 1fr'
            : '2fr 1fr 1fr 1.5fr',
          gap: isMobile ? '36px' : isTablet ? '32px' : '48px',
        }}>

          {/* Brand column */}
          <div style={styles.brandCol}>
            <div style={styles.logo}>
              <div style={styles.logoIcon}>ts</div>
              <div style={styles.logoTextWrap}>
                <span style={styles.logoText}>T-STANDARD</span>
                <span style={styles.logoSub}>Premium Interiors and Security</span>
              </div>
            </div>

            <p style={styles.brandDesc}>
              Lagos based specialists in security door fabrication and installation,
              interior and exterior finishing, bespoke kitchens, wardrobes and vocational training.
            </p>

            <div style={styles.serviceBadges}>
              {serviceIcons.map(({ icon: Icon, label }) => (
                <div key={label} style={styles.serviceBadge} title={label}>
                  <Icon size={14} color="#FF6600" />
                </div>
              ))}
            </div>

            <div style={styles.socialRow}>
              {socials.map(s => <SocialBtn key={s.label} social={s} />)}
            </div>

            <div style={styles.addressBlock}>
              <MapPin size={14} color="#FF6600" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span style={styles.addressText}>B/Stop Isheri Oshun, Lagos, Nigeria</span>
            </div>
          </div>

          {/* Links columns — on tablet they go side by side in one row */}
          {isTablet ? (
            <div style={{ display: 'contents' }}>
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title} style={styles.linksCol}>
                  <div style={styles.colHeader}>
                    <span style={styles.colHeaderLine} />
                    <h4 style={styles.colTitle}>{title}</h4>
                  </div>
                  <ul style={styles.linksList}>
                    {links.map(link => (
                      <FooterLink key={link.label} label={link.label} href={link.href} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : isMobile ? (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>
    {Object.entries(footerLinks).map(([title, links]) => (
      <div key={title} style={styles.linksCol}>
        <div style={styles.colHeader}>
          <span style={styles.colHeaderLine} />
          <h4 style={styles.colTitle}>{title}</h4>
        </div>
        <ul style={styles.linksList}>
          {links.map(link => (
            <FooterLink key={link.label} label={link.label} href={link.href} />
          ))}
        </ul>
      </div>
    ))}
  </div>
          ) : (
            Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} style={styles.linksCol}>
                <div style={styles.colHeader}>
                  <span style={styles.colHeaderLine} />
                  <h4 style={styles.colTitle}>{title}</h4>
                </div>
                <ul style={styles.linksList}>
                  {links.map(link => (
                    <FooterLink key={link.label} label={link.label} href={link.href} />
                  ))}
                </ul>
              </div>
            ))
          )}

          {/* Contact column */}
          <div style={styles.contactCol}>
            <div style={styles.colHeader}>
              <span style={styles.colHeaderLine} />
              <h4 style={styles.colTitle}>Contact</h4>
            </div>
            <div style={styles.contactList}>
              {['+234 (0) 802 767 1663', '0906 422 9842', '0815 051 7772'].map(num => (
                <ContactLine key={num} icon={Phone} text={num} href={`tel:${num.replace(/\s/g, '')}`} />
              ))}
              <ContactLine
                icon={MapPin}
                text="Isheri Oshun, Lagos"
                href="https://maps.google.com/?q=Isheri+Oshun+Lagos"
              />
            </div>

            <div style={styles.hoursBox}>
              <span style={styles.hoursTitle}>Working Hours</span>
              <span style={styles.hoursLine}>Mon to Sat: 7am to 7pm</span>
              <span style={styles.hoursLine}>Sunday: By appointment</span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div style={styles.bottomBar}>
        <div style={{
          ...styles.bottomBarInner,
          padding: isMobile ? '0 20px' : isTablet ? '0 32px' : '0 48px',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: isMobile ? 'center' : 'center',
          gap: isMobile ? '8px' : '12px',
          textAlign: isMobile ? 'center' : 'left',
        }}>
          <span style={styles.copyright}>
            &copy; {currentYear} T-Standard. All rights reserved.
          </span>
          <span style={styles.madeWith}>
            Built with <Heart size={12} color="#FF6600" style={{ display: 'inline', margin: '0 3px', verticalAlign: 'middle' }} /> in Lagos, Nigeria
          </span>
          <div style={styles.bottomLinks}>
            {['Privacy Policy', 'Terms of Service'].map(item => (
              <BottomLink key={item} label={item} />
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#001235',
    color: '#fff',
  },
  ctaBand: {
    backgroundColor: '#002060',
    borderTop: '3px solid #FF6600',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
  },
  ctaBandInner: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
  },
  ctaBandLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    flex: 1,
  },
  ctaBandTag: {
    color: '#FF6600',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontFamily: 'DM Sans, sans-serif',
  },
  ctaBandTitle: {
    fontFamily: 'Barlow Condensed, sans-serif',
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '0.5px',
    maxWidth: '500px',
  },
  ctaBandRight: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    flexShrink: 0,
  },
  ctaBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '13px 24px',
    borderRadius: '2px',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: '700',
    letterSpacing: '1px',
    fontFamily: 'Barlow Condensed, sans-serif',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
  },
  ctaBtnWhatsapp: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '13px 24px',
    borderRadius: '2px',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: '700',
    letterSpacing: '1px',
    fontFamily: 'Barlow Condensed, sans-serif',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    backgroundColor: '#25D366',
    color: '#fff',
  },
  body: {},
  bodyInner: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
  },
  brandCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logoIcon: {
    backgroundColor: '#FF6600',
    color: '#fff',
    fontWeight: '800',
    fontSize: '13px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Barlow Condensed, sans-serif',
    letterSpacing: '1px',
    flexShrink: 0,
  },
  logoTextWrap: {
    display: 'flex',
    flexDirection: 'column',
  },
  logoText: {
    color: '#fff',
    fontWeight: '800',
    fontSize: '20px',
    letterSpacing: '3px',
    fontFamily: 'Barlow Condensed, sans-serif',
    lineHeight: 1,
  },
  logoSub: {
    color: 'rgba(255,255,255,0.35)',
    fontSize: '8px',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    fontFamily: 'DM Sans, sans-serif',
    marginTop: '3px',
  },
  brandDesc: {
    fontSize: '13px',
    color: 'rgba(255,255,255,0.45)',
    lineHeight: 1.8,
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: '300',
    maxWidth: '280px',
  },
  serviceBadges: {
    display: 'flex',
    gap: '8px',
  },
  serviceBadge: {
    width: '32px',
    height: '32px',
    borderRadius: '4px',
    backgroundColor: 'rgba(255,102,0,0.1)',
    border: '1px solid rgba(255,102,0,0.2)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialRow: {
    display: 'flex',
    gap: '10px',
  },
  socialBtn: {
    width: '36px',
    height: '36px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
  },
  addressBlock: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
  },
  addressText: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.4)',
    fontFamily: 'DM Sans, sans-serif',
    lineHeight: 1.5,
  },
  linksCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  colHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  colHeaderLine: {
    display: 'block',
    width: '20px',
    height: '2px',
    backgroundColor: '#FF6600',
    flexShrink: 0,
  },
  colTitle: {
    fontFamily: 'Barlow Condensed, sans-serif',
    fontSize: '16px',
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  linksList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  footerLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    textDecoration: 'none',
    fontSize: '13px',
    fontFamily: 'DM Sans, sans-serif',
  },
  contactCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  contactList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  contactLine: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '13px',
    fontFamily: 'DM Sans, sans-serif',
    cursor: 'pointer',
  },
  hoursBox: {
    backgroundColor: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderLeft: '2px solid #FF6600',
    borderRadius: '4px',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  hoursTitle: {
    fontSize: '11px',
    fontWeight: '600',
    color: '#FF6600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    fontFamily: 'DM Sans, sans-serif',
    marginBottom: '4px',
  },
  hoursLine: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.45)',
    fontFamily: 'DM Sans, sans-serif',
  },
  bottomBar: {
    borderTop: '1px solid rgba(255,255,255,0.06)',
    padding: '20px 0',
  },
  bottomBarInner: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  copyright: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.3)',
    fontFamily: 'DM Sans, sans-serif',
  },
  madeWith: {
    fontSize: '12px',
    color: 'rgba(255,255,255,0.3)',
    fontFamily: 'DM Sans, sans-serif',
    display: 'flex',
    alignItems: 'center',
    gap: '2px',
  },
  bottomLinks: {
    display: 'flex',
    gap: '20px',
  },
  bottomLink: {
    fontSize: '12px',
    fontFamily: 'DM Sans, sans-serif',
    textDecoration: 'none',
  },
}

export default Footer