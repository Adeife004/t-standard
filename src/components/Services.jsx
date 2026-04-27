import { useState, useEffect } from 'react'
import { Shield, Paintbrush, ChefHat, GraduationCap, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    id: 1,
    icon: Shield,
    tag: '01',
    title: 'Security Doors',
    subtitle: 'Sales & Installation',
    description:
      'Premium steel and iron security doors engineered for maximum protection. We fabricate, supply and professionally install security doors for residential and commercial properties across Lagos.',
    features: [
      'Custom fabrication to any size',
      'Heavy-gauge steel construction',
      'Multi-point locking systems',
      'Powder-coated finishes',
      'Same-week installation',
      'After-install support',
    ],
    color: '#FF6600',
    bg: 'rgba(255,102,0,0.06)',
    border: 'rgba(255,102,0,0.2)',
  },
  {
    id: 2,
    icon: Paintbrush,
    tag: '02',
    title: 'Interior & Exterior',
    subtitle: 'Finishing & Decoration',
    description:
      'Transform every surface into a statement. From wall textures and ceiling finishes to facade cladding and exterior rendering, we deliver flawless results that elevate any property.',
    features: [
      'Wall texturing & plastering',
      'POP & gypsum ceilings',
      'Exterior rendering & cladding',
      'Tiling & screeding',
      'Painting & decorating',
      'Waterproofing solutions',
    ],
    color: '#0066CC',
    bg: 'rgba(0,102,204,0.06)',
    border: 'rgba(0,102,204,0.2)',
  },
  {
    id: 3,
    icon: ChefHat,
    tag: '03',
    title: 'Kitchen & Wardrobe',
    subtitle: 'Bespoke Carpentry',
    description:
      'Handcrafted kitchens and wardrobes built to your exact vision. Every unit is designed around your space, lifestyle and budget, from modern minimalist to rich classic styles.',
    features: [
      'Full kitchen cabinet fitting',
      'Built in wardrobe systems',
      'Custom TV units & shelving',
      'MDF, plywood & hardwood',
      'Soft-close hinges & drawers',
      'Countertop installation',
    ],
    color: '#FF6600',
    bg: 'rgba(255,102,0,0.06)',
    border: 'rgba(255,102,0,0.2)',
  },
  {
    id: 4,
    icon: GraduationCap,
    tag: '04',
    title: 'Skills Training',
    subtitle: 'Vocational Programs',
    description:
      'Learn the trade from master craftsmen. Our hands on training programs cover security door fabrication, interior finishing and carpentry, empowering the next generation of artisans.',
    features: [
      'Security door fabrication',
      'Welding & metal work',
      'Interior finishing techniques',
      'Carpentry fundamentals',
      'Business & pricing skills',
      'Certificate on completion',
    ],
    color: '#0066CC',
    bg: 'rgba(0,102,204,0.06)',
    border: 'rgba(0,102,204,0.2)',
  },
]

const ServiceCard = ({ service, index, isMobile }) => {
  const [hovered, setHovered] = useState(false)
  const [activeFeature, setActiveFeature] = useState(null)
  const Icon = service.icon

  return (
    <div
      style={{
        ...styles.card,
        padding: isMobile ? '24px 20px' : '36px',
        border: `1px solid ${hovered ? service.color : '#e8e8e8'}`,
        transform: hovered && !isMobile ? 'translateY(-12px)' : 'translateY(0)',
        boxShadow: hovered
          ? `0 24px 60px rgba(0,0,0,0.12), 0 0 0 1px ${service.color}22`
          : '0 2px 20px rgba(0,0,0,0.06)',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: hovered
          ? `linear-gradient(90deg, ${service.color}, transparent)`
          : 'transparent',
        transition: 'all 0.4s ease',
        borderRadius: '4px 4px 0 0',
      }} />

      {/* Tag number */}
      <div style={{ ...styles.cardTag, color: service.color }}>
        {service.tag}
      </div>

      {/* Icon */}
      <div style={{
        ...styles.iconWrap,
        width: isMobile ? '52px' : '60px',
        height: isMobile ? '52px' : '60px',
        backgroundColor: hovered ? service.color : service.bg,
        border: `1px solid ${service.border}`,
        transition: 'all 0.4s ease',
      }}>
        <Icon
          size={isMobile ? 24 : 28}
          color={hovered ? '#fff' : service.color}
          style={{ transition: 'color 0.4s ease' }}
        />
      </div>

      {/* Title */}
      <div style={styles.cardTitleWrap}>
        <h3 style={{
          ...styles.cardTitle,
          fontSize: isMobile ? '22px' : '28px',
          color: hovered ? service.color : '#1a1a1a',
          transition: 'color 0.3s ease',
        }}>
          {service.title}
        </h3>
        <span style={styles.cardSubtitle}>{service.subtitle}</span>
      </div>

      {/* Description */}
      <p style={{
        ...styles.cardDesc,
        fontSize: isMobile ? '13px' : '14px',
      }}>{service.description}</p>

      {/* Divider */}
      <div style={{
        ...styles.divider,
        backgroundColor: hovered ? service.color : '#f0f0f0',
        transition: 'background-color 0.3s ease',
      }} />

      {/* Features */}
      <ul style={{
        ...styles.featureList,
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
      }}>
        {service.features.map((feat, i) => (
          <li
            key={i}
            style={{
              ...styles.featureItem,
              backgroundColor: activeFeature === i ? service.bg : 'transparent',
              paddingLeft: activeFeature === i ? '12px' : '0',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={() => setActiveFeature(i)}
            onMouseLeave={() => setActiveFeature(null)}
          >
            <CheckCircle size={14} color={service.color} style={{ flexShrink: 0 }} />
            <span style={styles.featureText}>{feat}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        style={{
          ...styles.cardCta,
          width: isMobile ? '100%' : 'fit-content',
          justifyContent: isMobile ? 'center' : 'flex-start',
          backgroundColor: hovered ? service.color : 'transparent',
          color: hovered ? '#fff' : service.color,
          borderColor: service.color,
          transition: 'all 0.3s ease',
        }}
      >
        Get a Quote
        <ArrowRight size={14} style={{
          transform: hovered ? 'translateX(4px)' : 'translateX(0)',
          transition: 'transform 0.3s ease',
        }} />
      </a>
    </div>
  )
}

const Services = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

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
    <section id="services" style={{
      ...styles.section,
      padding: isMobile ? '64px 0' : '100px 0',
    }}>

      <div style={styles.bgDot1} />
      <div style={styles.bgDot2} />

      <div style={{
        ...styles.container,
        padding: isMobile ? '0 20px' : isTablet ? '0 32px' : '0 48px',
      }}>

        {/* Header */}
        <div style={{
          ...styles.header,
          marginBottom: isMobile ? '40px' : '64px',
          gap: isMobile ? '12px' : '16px',
        }}>
          <div style={styles.headerTag}>
            <span style={styles.tagLine} />
            What We Do
            <span style={styles.tagLine} />
          </div>
          <h2 style={styles.heading}>
            OUR <span style={styles.headingAccent}>SERVICES</span>
          </h2>
          <p style={{
            ...styles.subheading,
            fontSize: isMobile ? '14px' : '16px',
          }}>
            From heavy duty security doors to bespoke interiors, T-Standard delivers
            craftsmanship you can see, feel and trust. Based in Lagos, serving all of Nigeria.
          </p>
        </div>

        {/* Cards grid */}
        <div style={{
          ...styles.grid,
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(2, 1fr)',
          gap: isMobile ? '16px' : '24px',
        }}>
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              isMobile={isMobile}
            />
          ))}
        </div>

        {/* Bottom CTA banner */}
        <div style={{
          ...styles.banner,
          flexDirection: isSmall ? 'column' : 'row',
          alignItems: isSmall ? 'flex-start' : 'center',
          padding: isMobile ? '28px 24px' : isTablet ? '32px 36px' : '40px 48px',
          gap: isSmall ? '24px' : '32px',
          marginTop: isMobile ? '40px' : '64px',
        }}>
          <div style={styles.bannerLeft}>
            <span style={styles.bannerTag}>Ready to start?</span>
            <h3 style={{
              ...styles.bannerTitle,
              fontSize: isMobile ? '22px' : '28px',
            }}>Get a free consultation today</h3>
          </div>
          <div style={{
            ...styles.bannerRight,
            flexDirection: isMobile ? 'column' : 'row',
            width: isSmall ? '100%' : 'auto',
            gap: isMobile ? '12px' : '16px',
          }}>
            <a
              href="tel:+2348027671663"
              style={{
                ...styles.bannerBtn,
                textAlign: 'center',
                flex: isMobile ? 1 : 'unset',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#fff'
                e.currentTarget.style.color = '#FF6600'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = '#FF6600'
                e.currentTarget.style.color = '#fff'
              }}
            >
              Call +234 802 767 1663
            </a>
            <a
              href="tel:+2349064229842"
              style={{
                ...styles.bannerBtnOutline,
                textAlign: 'center',
                flex: isMobile ? 1 : 'unset',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              0906 422 9842
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}

const styles = {
  section: {
    backgroundColor: '#fafafa',
    position: 'relative',
    overflow: 'hidden',
  },
  bgDot1: {
    position: 'absolute',
    top: '-100px',
    right: '-100px',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(255,102,0,0.06) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  bgDot2: {
    position: 'absolute',
    bottom: '-100px',
    left: '-100px',
    width: '400px',
    height: '400px',
    borderRadius: '50%',
    background: 'radial-gradient(circle, rgba(0,53,128,0.06) 0%, transparent 70%)',
    pointerEvents: 'none',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  header: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerTag: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#FF6600',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    fontFamily: 'DM Sans, sans-serif',
  },
  tagLine: {
    display: 'block',
    width: '32px',
    height: '1px',
    backgroundColor: '#FF6600',
  },
  heading: {
    fontFamily: 'Barlow Condensed, sans-serif',
    fontSize: 'clamp(40px, 6vw, 72px)',
    fontWeight: '800',
    color: '#1a1a1a',
    lineHeight: 1,
    letterSpacing: '-1px',
  },
  headingAccent: {
    color: '#FF6600',
  },
  subheading: {
    color: '#666',
    lineHeight: 1.7,
    maxWidth: '560px',
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: '300',
  },
  grid: {
    display: 'grid',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '4px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    cursor: 'default',
  },
  cardTag: {
    fontFamily: 'Barlow Condensed, sans-serif',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '3px',
  },
  iconWrap: {
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitleWrap: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  cardTitle: {
    fontFamily: 'Barlow Condensed, sans-serif',
    fontWeight: '800',
    letterSpacing: '1px',
    lineHeight: 1,
  },
  cardSubtitle: {
    fontSize: '12px',
    color: '#999',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    fontFamily: 'DM Sans, sans-serif',
  },
  cardDesc: {
    color: '#555',
    lineHeight: 1.7,
    fontFamily: 'DM Sans, sans-serif',
    fontWeight: '300',
  },
  divider: {
    height: '1px',
    width: '100%',
  },
  featureList: {
    listStyle: 'none',
    display: 'grid',
    gap: '8px',
    padding: 0,
    margin: 0,
  },
  featureItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '6px 8px',
    borderRadius: '4px',
    cursor: 'default',
  },
  featureText: {
    fontSize: '13px',
    color: '#444',
    fontFamily: 'DM Sans, sans-serif',
  },
  cardCta: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '12px 24px',
    border: '1px solid',
    borderRadius: '2px',
    textDecoration: 'none',
    fontSize: '12px',
    fontWeight: '700',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    fontFamily: 'Barlow Condensed, sans-serif',
    marginTop: '8px',
  },
  banner: {
    backgroundColor: '#001845',
    borderRadius: '4px',
    borderLeft: '4px solid #FF6600',
  },
  bannerLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  bannerTag: {
    color: '#FF6600',
    fontSize: '11px',
    fontWeight: '600',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    fontFamily: 'DM Sans, sans-serif',
  },
  bannerTitle: {
    fontFamily: 'Barlow Condensed, sans-serif',
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '1px',
  },
  bannerRight: {
    display: 'flex',
    flexShrink: 0,
  },
  bannerBtn: {
    backgroundColor: '#FF6600',
    color: '#fff',
    padding: '14px 28px',
    borderRadius: '2px',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: '700',
    letterSpacing: '1px',
    fontFamily: 'Barlow Condensed, sans-serif',
    textTransform: 'uppercase',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
  },
  bannerBtnOutline: {
    backgroundColor: 'transparent',
    color: '#fff',
    padding: '14px 28px',
    borderRadius: '2px',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: '700',
    letterSpacing: '1px',
    fontFamily: 'Barlow Condensed, sans-serif',
    textTransform: 'uppercase',
    border: '1px solid rgba(255,255,255,0.2)',
    transition: 'all 0.3s ease',
    whiteSpace: 'nowrap',
  },
}

export default Services